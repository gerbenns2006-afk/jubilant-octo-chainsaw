# ONQIVA Outcomes NHANES survival pipeline

This pipeline rebuilds the website's exploratory real-data model from official
CDC/NCHS public-use files.

## Inputs

- `DEMO_J.xpt`: NHANES 2017-2018 demographics and survey-design variables.
- `VID_J.xpt`: measured total serum 25-hydroxyvitamin D (`LBXVIDMS`, nmol/L).
- `MCQ_J.xpt`: self-reported cancer history (`MCQ220`).
- `NHANES_2017_2018_MORT_2019_PUBLIC.dat`: public-use linked mortality file.

Files are joined with the respondent identifier `SEQN`. The analytic cohort is
adults aged 20 or older who answered yes to prior cancer, were mortality-linkage
eligible, and had measured vitamin D and examination-based follow-up time.

## Model

- Unadjusted Kaplan-Meier curves compare `<20 ng/mL` with `>=20 ng/mL`.
- The exploratory Cox model includes age, sex, and vitamin D per 10 ng/mL.
- The individualized website curve uses `S(t | X) = S0(t) ^ exp(beta * (X - mean(X)))`.
- The care-context selector and educational testing-discussion meter do not
  enter the Cox model.

## Rebuild

Place the four source files in `work/nhanes_raw`, install `pandas`, `numpy`,
`lifelines`, and `scikit-learn`, and run:

```powershell
python research/rebuild_nhanes_model.py
```

The aggregate model artifact is written to `public/data/nhanes_model.json`.
It includes source URLs and SHA-256 hashes so the inputs can be audited.

The same rebuild also runs a five-fold cross-validated machine-learning
benchmark for measured 25(OH)D below 20 ng/mL. It compares logistic regression
with histogram gradient boosting using age, sex, race/ethnicity, examination
season, and income-to-poverty ratio. Preprocessing is refit inside every fold.

## Limitations

This is an observational, unweighted, exploratory analysis with 515
participants, 35 observed deaths, and no more than 37 months of follow-up. It
does not implement complex-survey variance estimation, establish causality, or
show that vitamin D supplementation improves cancer outcomes. It must not be
used for diagnosis, treatment, or individual clinical prediction.
