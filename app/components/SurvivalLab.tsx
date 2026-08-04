"use client";

import { useMemo, useState } from "react";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import model from "../../public/data/nhanes_model.json";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

type CareContext = "early" | "family" | "post";

export default function SurvivalLab() {
  const [careContext, setCareContext] = useState<CareContext>("post");
  const [age, setAge] = useState(60);
  const [female, setFemale] = useState(1);
  const [vitaminD, setVitaminD] = useState(20);
  const [limitedSun, setLimitedSun] = useState(true);
  const [obesity, setObesity] = useState(false);
  const [malabsorption, setMalabsorption] = useState(false);
  const [priorLow, setPriorLow] = useState(false);
  const [lowDietaryIntake, setLowDietaryIntake] = useState(false);
  const [darkerSkin, setDarkerSkin] = useState(false);
  const [affectingMedication, setAffectingMedication] = useState(false);
  const [boneHealthConcern, setBoneHealthConcern] = useState(false);

  const personalizedCurve = useMemo(() => {
    const beta = model.cox.coefficients;
    const mean = model.cox.means;
    const linearPredictor =
      beta.age * (age - mean.age) +
      beta.female * (female - mean.female) +
      beta.vitamin_d_per_10 * (vitaminD / 10 - mean.vitamin_d_per_10);
    const relativeHazard = Math.exp(linearPredictor);
    return model.cox.baseline_survival.map((survival) =>
      Number(Math.pow(survival, relativeHazard).toFixed(5)),
    );
  }, [age, female, vitaminD]);

  const discussionIndex = Math.min(
    100,
    10 + (age >= 75 ? 15 : 0) + (limitedSun ? 20 : 0) + (obesity ? 15 : 0) +
      (malabsorption ? 30 : 0) + (priorLow ? 30 : 0) + (lowDietaryIntake ? 10 : 0) +
      (darkerSkin ? 10 : 0) + (affectingMedication ? 20 : 0) + (boneHealthConcern ? 25 : 0),
  );
  const discussionLabel = discussionIndex >= 55 ? "More reasons to discuss testing" : "Routine testing is not automatically indicated";

  const chartData = {
    labels: model.kaplan_meier.months,
    datasets: [
      {
        label: "NHANES ≥20 ng/mL",
        data: model.kaplan_meier.high_at_least_20_ng_ml,
        borderColor: "#74a96d",
        backgroundColor: "#74a96d18",
        pointRadius: 2,
        stepped: true as const,
      },
      {
        label: "NHANES <20 ng/mL",
        data: model.kaplan_meier.low_under_20_ng_ml,
        borderColor: "#d66b5d",
        backgroundColor: "#d66b5d18",
        pointRadius: 2,
        stepped: true as const,
      },
      {
        label: "Cox scenario curve",
        data: personalizedCurve,
        borderColor: "#d8f46a",
        backgroundColor: "transparent",
        borderDash: [8, 6],
        borderWidth: 3,
        pointRadius: 0,
        tension: 0.18,
      },
    ],
  };

  return (
    <section className="model-lab" id="model">
      <div className="shell">
        <div className="section-head">
          <div><div className="kicker">REAL-DATA COMPUTATIONAL MODEL</div><h2>Your Python model,<br />rebuilt with NHANES.</h2></div>
          <p>Explore measured vitamin D and short-term all-cause survival among adults who reported a prior cancer diagnosis. Association is not causation.</p>
        </div>

        <div className="model-grid">
          <aside className="model-controls">
            <div className="control-group"><label htmlFor="care-context">Care context</label><select id="care-context" value={careContext} onChange={(event) => setCareContext(event.target.value as CareContext)}><option value="early">Early-stage cancer</option><option value="family">Family history / concerned</option><option value="post">Post-treatment survivor</option></select><small>Context only—not a Cox-model variable and not a testing indication by itself.</small></div>
            <div className="control-split"><div className="control-group"><label htmlFor="model-age">Age <b>{age}</b></label><input id="model-age" type="range" min="20" max="80" value={age} onChange={(event) => setAge(Number(event.target.value))} /></div><div className="control-group"><label htmlFor="model-sex">Sex variable</label><select id="model-sex" value={female} onChange={(event) => setFemale(Number(event.target.value))}><option value={0}>Male</option><option value={1}>Female</option></select></div></div>
            <div className="control-group"><label htmlFor="vitamin-d-scenario">Measured 25(OH)D scenario <b>{vitaminD} ng/mL</b></label><input id="vitamin-d-scenario" type="range" min="8" max="50" value={vitaminD} onChange={(event) => setVitaminD(Number(event.target.value))} /><small>This is a hypothetical measured value for exploring the fitted model—not a pre-test estimate.</small></div>
            <fieldset><legend>Reasons a clinician might consider</legend><label><input type="checkbox" checked={limitedSun} onChange={(event) => setLimitedSun(event.target.checked)} /> Limited sun exposure</label><label><input type="checkbox" checked={obesity} onChange={(event) => setObesity(event.target.checked)} /> Obesity</label><label><input type="checkbox" checked={malabsorption} onChange={(event) => setMalabsorption(event.target.checked)} /> Fat-malabsorption condition or gastric bypass</label><label><input type="checkbox" checked={priorLow} onChange={(event) => setPriorLow(event.target.checked)} /> Previously documented low vitamin D</label><label><input type="checkbox" checked={lowDietaryIntake} onChange={(event) => setLowDietaryIntake(event.target.checked)} /> Low dietary vitamin D intake</label><label><input type="checkbox" checked={darkerSkin} onChange={(event) => setDarkerSkin(event.target.checked)} /> Darker skin pigmentation</label><label><input type="checkbox" checked={affectingMedication} onChange={(event) => setAffectingMedication(event.target.checked)} /> Medication that can affect vitamin D metabolism</label><label><input type="checkbox" checked={boneHealthConcern} onChange={(event) => setBoneHealthConcern(event.target.checked)} /> Bone-health condition or clinician concern</label></fieldset>
            <div className="discussion-meter"><div><span>EDUCATIONAL DISCUSSION INDEX</span><strong>{discussionIndex}<small>/100</small></strong></div><div className="meter-track"><i style={{ width: `${discussionIndex}%` }} /></div><p>{discussionLabel}</p><small>Illustrative rule, not a validated screening score. These selections change the discussion meter only—not the NHANES survival curve—and never tell a person to order or avoid a test.</small></div>
          </aside>

          <article className="chart-panel">
            <div className="chart-title"><div><span>EXPLORATORY KAPLAN–MEIER + COX MODEL</span><h3>All-cause survival after NHANES examination</h3></div><div className="model-badge">LIVE SCENARIO</div></div>
            <div className="chart-wrap"><Line data={chartData} options={{ responsive: true, maintainAspectRatio: false, interaction: { mode: "index", intersect: false }, scales: { y: { min: 0.7, max: 1, title: { display: true, text: "Estimated survival probability" }, grid: { color: "#ffffff12" }, ticks: { color: "#aebdb8" } }, x: { title: { display: true, text: "Months after examination" }, grid: { color: "#ffffff0b" }, ticks: { color: "#aebdb8" } } }, plugins: { legend: { labels: { color: "#dce7e2", usePointStyle: true } }, tooltip: { callbacks: { label: (context) => `${context.dataset.label}: ${(Number(context.raw) * 100).toFixed(1)}%` } } } }} /></div>
            <div className="model-stats"><div><span>ANALYTIC COHORT</span><strong>{model.cohort.participants}</strong><small>self-reported cancer history</small></div><div><span>OBSERVED DEATHS</span><strong>{model.cohort.events}</strong><small>maximum {model.cohort.max_follow_up_months} months</small></div><div><span>COX C-INDEX</span><strong>{model.cox.concordance_index}</strong><small>same analysis sample</small></div><div><span>VITAMIN D HR</span><strong>{model.cox.vitamin_d_hr_per_10_ng_ml}</strong><small>per +10 ng/mL; 95% CI {model.cox.vitamin_d_hr_ci95[0]}–{model.cox.vitamin_d_hr_ci95[1]}</small></div></div>
            <details><summary>How to interpret this responsibly</summary><p>The green and red curves are unadjusted Kaplan–Meier estimates. The dashed curve is S₀(t)<sup>exp(βX)</sup> from an age-, sex-, and vitamin-D-adjusted Cox model. The association may reflect confounding, reverse causation, cancer-type differences, treatment, or selection. It does not show that supplementation improves survival.</p></details>
          </article>
        </div>

        <div className="data-provenance"><div><b>Reproducible source trail</b><p>Official CDC/NCHS files joined by SEQN. Serum total 25(OH)D was converted from nmol/L to ng/mL. Cancer history uses MCQ220; follow-up uses PERMTH_EXM and MORTSTAT.</p></div><div className="source-links"><a href="https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2017/DataFiles/DEMO_J.htm" target="_blank" rel="noreferrer">Demographics ↗</a><a href="https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2017/DataFiles/VID_J.htm" target="_blank" rel="noreferrer">Vitamin D ↗</a><a href="https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2017/DataFiles/MCQ_J.htm" target="_blank" rel="noreferrer">Cancer history ↗</a><a href="https://www.cdc.gov/nchs/linked-data/about-access/index.html" target="_blank" rel="noreferrer">Mortality linkage ↗</a><a href="/data/nhanes_model.json" target="_blank" rel="noreferrer">Model output JSON ↗</a></div></div>

        <section className="ml-workbench">
          <div className="ml-heading"><div><div className="kicker">ONQIVA BENCH · MACHINE LEARNING</div><h3>From raw survey files to a model that has to earn trust.</h3></div><p>This real benchmark asks whether demographics available before a laboratory result can predict measured 25(OH)D below 20 ng/mL among the same cancer-history cohort.</p></div>
          <div className="pipeline-flow"><div><b>01</b><span>INGEST</span><p>CDC XPT + linked mortality</p></div><i>→</i><div><b>02</b><span>ENGINEER</span><p>Impute, scale, one-hot encode</p></div><i>→</i><div><b>03</b><span>TRAIN</span><p>Logistic + gradient boosting</p></div><i>→</i><div><b>04</b><span>VALIDATE</span><p>Five held-out folds</p></div><i>→</i><div><b>05</b><span>GATE</span><p>Calibration, subgroups, utility</p></div></div>
          <div className="ml-results">
            <article><div><span>INTERPRETABLE BASELINE</span><h4>Logistic regression</h4></div><div className="metric-row"><div><strong>{model.machine_learning.models.logistic_regression.roc_auc}</strong><small>ROC-AUC</small></div><div><strong>{model.machine_learning.models.logistic_regression.average_precision}</strong><small>AVG PRECISION</small></div><div><strong>{model.machine_learning.models.logistic_regression.brier_score}</strong><small>BRIER ↓</small></div></div></article>
            <article><div><span>NONLINEAR COMPARATOR</span><h4>Histogram gradient boosting</h4></div><div className="metric-row"><div><strong>{model.machine_learning.models.hist_gradient_boosting.roc_auc}</strong><small>ROC-AUC</small></div><div><strong>{model.machine_learning.models.hist_gradient_boosting.average_precision}</strong><small>AVG PRECISION</small></div><div><strong>{model.machine_learning.models.hist_gradient_boosting.brier_score}</strong><small>BRIER ↓</small></div></div></article>
          </div>
          <div className="ml-readout"><div><span>FEATURES USED</span><p>Age · sex · race/ethnicity · examination season · income-to-poverty ratio</p></div><div><span>VALIDATION DESIGN</span><p>{model.machine_learning.validation}</p></div><div><span>HONEST READOUT</span><p>Best ROC-AUC ≈ 0.67. Demographics contain signal, but not enough for clinical deployment. The next model needs richer predictors, calibration testing, and external validation.</p></div></div>
        </section>

        <div className="why-test"><div><div className="kicker">THE EVIDENCE GAP ONQIVA IS BUILT TO STUDY</div><h3>When does measured vitamin D add useful information?</h3></div><div><p>Vitamin D intersects bone health, immune signaling, cell growth, and survivorship—but the value of testing is unlikely to be identical for every person or every cancer context. That is a modeling problem: identify where a measured biomarker improves risk stratification beyond information clinicians already have.</p><p>ONQIVA Outcomes tests that question transparently. It compares models with and without vitamin D, examines uncertainty and subgroup performance, and asks whether better evidence could support more focused use of limited testing resources. A negative or mixed result is still valuable because it prevents weak associations from becoming confident clinical claims.</p><div className="research-questions"><span>Does 25(OH)D improve prediction?</span><span>For which survivor subgroups?</span><span>Is the model calibrated?</span><span>Would testing change a decision?</span></div><div className="source-links"><a href="https://ods.od.nih.gov/factsheets/Vitamind-HealthProfessional/" target="_blank" rel="noreferrer">NIH vitamin D evidence ↗</a><a href="https://www.cancer.gov/about-cancer/causes-prevention/risk/diet/vitamin-d-fact-sheet" target="_blank" rel="noreferrer">NCI research context ↗</a><a href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/vitamin-d-deficiency-screening" target="_blank" rel="noreferrer">Screening evidence gap ↗</a></div></div></div>

        <div className="young-basics"><div className="young-heading"><div className="kicker">FOR TEENS &amp; YOUNG ADULTS</div><h3>Vitamin D literacy—without the hype.</h3><p>Build healthy habits and understand the science. Do not turn a research association into a diagnosis or supplement plan.</p></div><div className="young-cards"><article><b>01</b><h4>Know your food sources</h4><p>Fatty fish, egg yolks, and fortified foods such as some milks, plant beverages, and cereals can contribute vitamin D.</p></article><article><b>02</b><h4>Enjoy outdoors safely</h4><p>Outdoor activity supports overall wellbeing, but deliberately increasing UV exposure is not a safe vitamin D strategy. Protect your skin.</p></article><article><b>03</b><h4>Skip the megadose mindset</h4><p>More is not automatically better. Supplements can interact with health conditions and excessive intake can cause harm.</p></article><article><b>04</b><h4>Ask when risk is real</h4><p>A clinician can help when there is a prior low result, malabsorption, bone-health concern, relevant medication, or another genuine risk factor.</p></article></div><div className="source-links"><a href="https://ods.od.nih.gov/pdf/factsheets/vitamind-consumer.pdf" target="_blank" rel="noreferrer">NIH guide for consumers ↗</a><a href="https://www.cdc.gov/skin-cancer/outdoors/index.html" target="_blank" rel="noreferrer">CDC outdoor safety ↗</a></div></div>
      </div>
    </section>
  );
}
