import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import model from "../../public/data/nhanes_model.json";

export default function ModelingPage() {
  return (
    <main id="top">
      <a className="skip-link" href="#methods-content">
        Skip to content
      </a>
      <SiteNav active="modeling" />

      <div id="methods-content">
        <section className="page-hero modeling-hero shell">
          <div className="eyebrow">Methods and evidence</div>
          <h1>
            Three calculations.
            <br />
            <em>Three different meanings.</em>
          </h1>
          <p className="hero-copy">
            ONQIVA includes an exploratory survival analysis, a cross-sectional
            prediction benchmark, and a fictional testing-allocation simulation.
            They use different data and answer different questions.
          </p>
        </section>

        <section className="modeling-body">
          <div className="shell">
            <div className="modeling-intro">
              <div>
                <div className="kicker">01 · SURVIVAL ANALYSIS</div>
                <h2>Measured vitamin D and short-term outcomes.</h2>
              </div>
              <p>
                The public-data cohort includes {model.cohort.participants}{" "}
                adults who reported a previous cancer diagnosis, had a measured
                25(OH)D result, and were eligible for mortality linkage. There
                were {model.cohort.events} observed deaths and a maximum of{" "}
                {model.cohort.max_follow_up_months} months of follow-up.
              </p>
            </div>

            <div className="methods-result">
              <article>
                <span>MODEL</span>
                <h3>Age-, sex-, and vitamin-D-adjusted Cox regression</h3>
                <p>
                  Vitamin D is entered as a continuous measurement, scaled per
                  10 ng/mL. The interactive curve shows a scenario from this
                  fitted model. It does not estimate a person’s future.
                </p>
                <code>
                  h(t | x) = h₀(t) exp(β₁ age + β₂ sex + β₃ 25(OH)D / 10)
                </code>
              </article>
              <article>
                <span>ESTIMATE FROM THIS SAMPLE</span>
                <div className="methods-estimate">
                  <strong>{model.cox.vitamin_d_hr_per_10_ng_ml}</strong>
                  <small>
                    HR per +10 ng/mL · 95% CI{" "}
                    {model.cox.vitamin_d_hr_ci95[0].toFixed(2)} to{" "}
                    {model.cox.vitamin_d_hr_ci95[1].toFixed(2)}
                  </small>
                </div>
                <p>
                  The estimate describes an association in this sample. It
                  cannot establish cause, treatment benefit, or who should be
                  tested.
                </p>
              </article>
            </div>

            <div className="methods-caveat">
              <strong>Limits that change how to read this result</strong>
              <p>
                The analysis is observational and unweighted. It uses a small
                number of deaths, short follow-up, and self-reported cancer
                history. Confounding, selection, and differences in cancer type
                or treatment may affect the association.
              </p>
            </div>

            <div className="methods-links">
              <a href="/#research-note">Read the worked research note</a>
              <a href="/#model">Explore the interactive model</a>
              <a
                href="https://github.com/gerbenns2006-afk/jubilant-octo-chainsaw/tree/main/research"
                target="_blank"
                rel="noreferrer"
              >
                Inspect the analysis code ↗
              </a>
            </div>
          </div>
        </section>

        <section className="modeling-body modeling-light">
          <div className="shell">
            <div className="modeling-intro">
              <div>
                <div className="kicker">02 · CROSS-SECTIONAL BENCHMARK</div>
                <h2>Can demographics predict a measured vitamin D category?</h2>
              </div>
              <p>
                This separate experiment predicts whether measured 25(OH)D was
                below 20 ng/mL using age, sex, race/ethnicity, examination
                season, and income-to-poverty ratio. It does not predict cancer
                outcomes or decide who receives a test.
              </p>
            </div>
            <div className="benchmark-grid">
              <article>
                <span>LOGISTIC REGRESSION</span>
                <strong>
                  {model.machine_learning.models.logistic_regression.roc_auc.toFixed(
                    2,
                  )}
                </strong>
                <small>five-fold ROC-AUC</small>
              </article>
              <article>
                <span>GRADIENT BOOSTING</span>
                <strong>
                  {model.machine_learning.models.hist_gradient_boosting.roc_auc.toFixed(
                    2,
                  )}
                </strong>
                <small>five-fold ROC-AUC</small>
              </article>
              <article className="benchmark-interpretation">
                <span>WHAT THE SCORE MEANS</span>
                <p>
                  These results show modest discrimination in this cohort.
                  Cross-validation is internal; independent validation and
                  calibration are still needed.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="modeling-body">
          <div className="shell">
            <div className="modeling-intro">
              <div>
                <div className="kicker">03 · FICTIONAL SIMULATION</div>
                <h2>Testing priority is a separate written rule.</h2>
              </div>
              <p>
                The clinic exercise uses fictional inputs and fixed scoring
                logic. It is not fitted to NHANES, the survival model, or a
                clinical dataset. Its purpose is to make assumptions visible and
                open to critique.
              </p>
            </div>
            <div className="modeling-layers">
              <article>
                <b>01</b>
                <span>INPUTS</span>
                <h3>Fictional profile</h3>
                <p>
                  Age, body mass index, reported routine, and available test
                  capacity are example values, not patient records.
                </p>
              </article>
              <article>
                <b>02</b>
                <span>RULE</span>
                <h3>Inspectable score</h3>
                <p>
                  Each factor contributes a visible number of points. The rule
                  is illustrative and has not been clinically validated.
                </p>
              </article>
              <article>
                <b>03</b>
                <span>COMPARISON</span>
                <h3>Simulated allocation</h3>
                <p>
                  The example compares the rule with random allocation. It
                  cannot establish improved access or health outcomes.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="modeling-next">
          <div className="shell work-grid">
            <div>
              <div className="kicker">WHAT IS NOT BUILT YET</div>
              <h2>Validation comes before a clinical claim.</h2>
            </div>
            <div>
              <p>
                The next work is independent statistical review, clearer
                uncertainty analysis, and a carefully defined research question.
                Molecular data and clinical pilot work remain future
                possibilities, not current product features.
              </p>
              <a className="primary" href="/#collaborate">
                Request a methods review
              </a>
            </div>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
