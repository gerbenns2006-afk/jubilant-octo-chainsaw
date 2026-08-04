"""Rebuild the exploratory ONQIVA Outcomes NHANES survival model.

Inputs are official CDC/NCHS NHANES 2017-2018 public-use files and the
2019 public-use Linked Mortality File. The model is observational, unweighted,
and exploratory; it is not a clinical prediction model.
"""

from __future__ import annotations

import hashlib
import json
from pathlib import Path

import numpy as np
import pandas as pd
from lifelines import CoxPHFitter, KaplanMeierFitter
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import HistGradientBoostingClassifier
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import average_precision_score, brier_score_loss, roc_auc_score
from sklearn.model_selection import StratifiedKFold, cross_val_predict
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler


ROOT = Path(__file__).resolve().parents[3]
RAW = ROOT / "work" / "nhanes_raw"
OUTPUT = Path(__file__).resolve().parents[1] / "public" / "data" / "nhanes_model.json"
TIMES = np.arange(0, 37, 3, dtype=float)

SOURCES = {
    "demographics": "https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2017/DataFiles/DEMO_J.xpt",
    "vitamin_d": "https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2017/DataFiles/VID_J.xpt",
    "medical_conditions": "https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2017/DataFiles/MCQ_J.xpt",
    "mortality": "https://ftp.cdc.gov/pub/health_statistics/NCHS/datalinkage/linked_mortality/NHANES_2017_2018_MORT_2019_PUBLIC.dat",
}


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for block in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def load_cohort() -> pd.DataFrame:
    demo = pd.read_sas(RAW / "DEMO_J.xpt")
    vitamin_d = pd.read_sas(RAW / "VID_J.xpt")
    conditions = pd.read_sas(RAW / "MCQ_J.xpt")
    mortality = pd.read_fwf(
        RAW / "NHANES_2017_2018_MORT_2019_PUBLIC.dat",
        colspecs=[(0, 6), (14, 15), (15, 16), (42, 45), (45, 48)],
        names=["SEQN", "ELIGSTAT", "MORTSTAT", "PERMTH_INT", "PERMTH_EXM"],
    ).apply(pd.to_numeric, errors="coerce")

    cohort = (
        demo[["SEQN", "RIDAGEYR", "RIAGENDR", "RIDRETH3", "RIDEXMON", "INDFMPIR", "WTMEC2YR", "SDMVPSU", "SDMVSTRA"]]
        .merge(vitamin_d[["SEQN", "LBXVIDMS"]], on="SEQN", how="inner")
        .merge(conditions[["SEQN", "MCQ220"]], on="SEQN", how="inner")
        .merge(mortality, on="SEQN", how="inner")
    )
    cohort = cohort.loc[
        (cohort["RIDAGEYR"] >= 20)
        & (cohort["MCQ220"] == 1)
        & (cohort["ELIGSTAT"] == 1)
        & cohort["LBXVIDMS"].notna()
        & cohort["PERMTH_EXM"].notna()
        & cohort["MORTSTAT"].isin([0, 1])
    ].copy()
    cohort["vitamin_d_ng_ml"] = cohort["LBXVIDMS"] / 2.5
    cohort["vitamin_d_per_10"] = cohort["vitamin_d_ng_ml"] / 10
    cohort["female"] = (cohort["RIAGENDR"] == 2).astype(int)
    cohort["low_vitamin_d"] = cohort["vitamin_d_ng_ml"] < 20
    return cohort


def step_values(kmf: KaplanMeierFitter) -> list[float]:
    return [round(float(kmf.predict(time)), 5) for time in TIMES]


def main() -> None:
    cohort = load_cohort()
    low = cohort["low_vitamin_d"]

    km_low = KaplanMeierFitter().fit(
        cohort.loc[low, "PERMTH_EXM"], cohort.loc[low, "MORTSTAT"]
    )
    km_high = KaplanMeierFitter().fit(
        cohort.loc[~low, "PERMTH_EXM"], cohort.loc[~low, "MORTSTAT"]
    )

    model_frame = cohort[
        ["PERMTH_EXM", "MORTSTAT", "RIDAGEYR", "female", "vitamin_d_per_10"]
    ].rename(columns={"RIDAGEYR": "age"})
    cox = CoxPHFitter()
    cox.fit(model_frame, duration_col="PERMTH_EXM", event_col="MORTSTAT")

    # Cross-sectional ML benchmark: predict measured 25(OH)D <20 ng/mL from
    # demographics available before the laboratory result is known.
    ml_features = ["RIDAGEYR", "RIAGENDR", "RIDRETH3", "RIDEXMON", "INDFMPIR"]
    ml_x = cohort[ml_features]
    ml_y = cohort["low_vitamin_d"].astype(int)
    numeric = ["RIDAGEYR", "INDFMPIR"]
    categorical = ["RIAGENDR", "RIDRETH3", "RIDEXMON"]
    preprocessing = ColumnTransformer(
        [
            ("numeric", Pipeline([("impute", SimpleImputer(strategy="median")), ("scale", StandardScaler())]), numeric),
            ("categorical", Pipeline([("impute", SimpleImputer(strategy="most_frequent")), ("onehot", OneHotEncoder(handle_unknown="ignore", sparse_output=False))]), categorical),
        ]
    )
    models = {
        "logistic_regression": LogisticRegression(max_iter=2000, random_state=20260803),
        "hist_gradient_boosting": HistGradientBoostingClassifier(max_iter=150, learning_rate=0.05, max_leaf_nodes=12, l2_regularization=1.0, random_state=20260803),
    }
    folds = StratifiedKFold(n_splits=5, shuffle=True, random_state=20260803)
    ml_results = {}
    for name, estimator in models.items():
        pipeline = Pipeline([("preprocess", preprocessing), ("model", estimator)])
        probabilities = cross_val_predict(pipeline, ml_x, ml_y, cv=folds, method="predict_proba")[:, 1]
        ml_results[name] = {
            "roc_auc": round(float(roc_auc_score(ml_y, probabilities)), 4),
            "average_precision": round(float(average_precision_score(ml_y, probabilities)), 4),
            "brier_score": round(float(brier_score_loss(ml_y, probabilities)), 4),
        }

    summary = cox.summary
    baseline = cox.baseline_survival_.iloc[:, 0]
    baseline_values = []
    for time in TIMES:
        position = baseline.index.searchsorted(time, side="right") - 1
        baseline_values.append(1.0 if position < 0 else round(float(baseline.iloc[position]), 6))

    source_files = {
        "demographics": RAW / "DEMO_J.xpt",
        "vitamin_d": RAW / "VID_J.xpt",
        "medical_conditions": RAW / "MCQ_J.xpt",
        "mortality": RAW / "NHANES_2017_2018_MORT_2019_PUBLIC.dat",
    }
    output = {
        "generated_by": "research/rebuild_nhanes_model.py",
        "data_release": "NHANES 2017-2018 with 2019 Linked Mortality File",
        "status": "Exploratory observational analysis; not clinically validated",
        "sources": {
            key: {"url": SOURCES[key], "sha256": sha256(path)}
            for key, path in source_files.items()
        },
        "cohort": {
            "participants": int(len(cohort)),
            "events": int(cohort["MORTSTAT"].sum()),
            "low_group": int(low.sum()),
            "low_group_events": int(cohort.loc[low, "MORTSTAT"].sum()),
            "high_group": int((~low).sum()),
            "high_group_events": int(cohort.loc[~low, "MORTSTAT"].sum()),
            "max_follow_up_months": int(cohort["PERMTH_EXM"].max()),
            "definition": "Adults 20+ reporting a prior cancer diagnosis (MCQ220=Yes), linkage eligible, with measured total 25(OH)D and follow-up time.",
        },
        "kaplan_meier": {
            "months": TIMES.astype(int).tolist(),
            "low_under_20_ng_ml": step_values(km_low),
            "high_at_least_20_ng_ml": step_values(km_high),
        },
        "cox": {
            "features": ["age", "female", "vitamin_d_per_10"],
            "coefficients": {key: float(value) for key, value in cox.params_.items()},
            "means": {key: float(value) for key, value in cox._norm_mean.items()},
            "baseline_months": TIMES.astype(int).tolist(),
            "baseline_survival": baseline_values,
            "concordance_index": round(float(cox.concordance_index_), 4),
            "vitamin_d_hr_per_10_ng_ml": round(float(summary.loc["vitamin_d_per_10", "exp(coef)"]), 4),
            "vitamin_d_hr_ci95": [
                round(float(summary.loc["vitamin_d_per_10", "exp(coef) lower 95%"]), 4),
                round(float(summary.loc["vitamin_d_per_10", "exp(coef) upper 95%"]), 4),
            ],
            "vitamin_d_p": round(float(summary.loc["vitamin_d_per_10", "p"]), 6),
        },
        "machine_learning": {
            "task": "Cross-sectional prediction of measured total 25(OH)D <20 ng/mL among the analytic cancer-history cohort.",
            "features": ["age", "sex", "race_ethnicity", "exam_season", "family_income_to_poverty_ratio"],
            "validation": "Five-fold stratified cross-validation; all preprocessing refit inside each fold.",
            "positive_cases": int(ml_y.sum()),
            "prevalence": round(float(ml_y.mean()), 4),
            "models": ml_results,
            "intended_use": "Research benchmark only; not a clinical testing-priority model.",
        },
        "limitations": [
            "Observational association cannot establish causality or treatment benefit.",
            "Only 35 deaths and at most 37 months of follow-up; estimates are imprecise.",
            "The Cox model is unweighted and does not implement NHANES complex-survey variance estimation.",
            "Cancer types and treatment histories are heterogeneous.",
            "The public-use mortality file protects confidentiality and has analytic limitations documented by NCHS.",
        ],
    }
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(output, indent=2), encoding="utf-8")
    print(json.dumps({"output": str(OUTPUT), **output["cohort"], **output["cox"]}, indent=2))


if __name__ == "__main__":
    main()
