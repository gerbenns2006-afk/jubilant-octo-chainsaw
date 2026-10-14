import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import model from "../../public/data/nhanes_model.json";

export default function ModelingPage() {
  const { coefficients, means } = model.cox;
  const vitaminDCoefficient = coefficients.vitamin_d_per_10;

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
            The calculation
            <br />
            <em>behind 0.69.</em>
          </h1>
          <p className="hero-copy">
            The fitted equation, the measured data behind it, and the limit of
            what it can say. The prediction benchmark and clinic simulation
            appear below as separate exercises.
          </p>
        </section>

        <section className="modeling-body">
          <div className="shell">
            <div className="modeling-intro">
              <div>
                <div className="kicker">01 · COMPLETED ANALYSIS</div>
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

            <article className="derivation-sheet" id="worked-equation">
              <div className="derivation-topline">
                <span>ONQIVA / RESEARCH NOTE 01</span>
                <span>FITTED TO PUBLIC DATA</span>
              </div>
              <div className="derivation-heading">
                <h3>Hold age and recorded sex fixed. Change the measured value.</h3>
                <p>
                  That comparison isolates the vitamin D term in the fitted Cox
                  model. It is the calculation behind the result on the home
                  page.
                </p>
              </div>

              <div className="derivation-step">
                <span className="derivation-number">01</span>
                <div>
                  <h4>Put the assay on the model scale</h4>
                  <p>
                    NHANES reports total 25(OH)D in nmol/L. The analysis
                    converted it to ng/mL, then used one unit for each 10
                    ng/mL.
                  </p>
                  <code>D ≈ LBXVIDMS ÷ 2.5 &nbsp;·&nbsp; u = D ÷ 10</code>
                </div>
              </div>

              <div className="derivation-step">
                <span className="derivation-number">02</span>
                <div>
                  <h4>Write out the fitted equation</h4>
                  <p>
                    Here a is age in years, s is 1 when sex was recorded as
                    female and 0 otherwise, and h₀(t) is the model&apos;s baseline
                    hazard. The centered values and coefficients come from the
                    saved fit; numbers below are rounded for display.
                  </p>
                  <div className="derivation-equations">
                    <code>h(t | a, s, D) = h₀(t) × exp(η)</code>
                    <code className="derivation-expanded">
                      <span>η = {coefficients.age.toFixed(4)}(a − {means.age.toFixed(2)})</span>
                      <span>− {Math.abs(coefficients.female).toFixed(4)}(s − {means.female.toFixed(3)})</span>
                      <span>− {Math.abs(vitaminDCoefficient).toFixed(4)}(u − {means.vitamin_d_per_10.toFixed(3)})</span>
                    </code>
                  </div>
                </div>
              </div>

              <div className="derivation-step">
                <span className="derivation-number">03</span>
                <div>
                  <h4>Take the like-for-like ratio</h4>
                  <p>
                    At the same age and recorded sex, those terms cancel. A
                    10 ng/mL difference changes u by one, leaving only the
                    vitamin D coefficient.
                  </p>
                  <div className="derivation-equations">
                    <code>HR(ΔD | same a, s) = exp({vitaminDCoefficient.toFixed(4)} × ΔD/10)</code>
                    <code>HR(+10) = exp({vitaminDCoefficient.toFixed(4)}) = {model.cox.vitamin_d_hr_per_10_ng_ml.toFixed(3)}</code>
                  </div>
                </div>
              </div>

              <div className="derivation-answer">
                <div>
                  <span>ESTIMATE IN THIS SAMPLE</span>
                  <strong>{model.cox.vitamin_d_hr_per_10_ng_ml.toFixed(3)}</strong>
                </div>
                <p>
                  Hazard ratio per +10 ng/mL of measured 25(OH)D.
                  The 95% confidence interval is{" "}
                  {model.cox.vitamin_d_hr_ci95[0].toFixed(2)}–{model.cox.vitamin_d_hr_ci95[1].toFixed(2)}.
                  This is a relative hazard estimate inside an observational
                  model, not an absolute survival gain or the effect of a test
                  or supplement.
                </p>
              </div>
            </article>

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
              <a
                href="https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2017/DataFiles/VID_J.htm"
                target="_blank"
                rel="noreferrer"
              >
                CDC assay record ↗
              </a>
              <a
                href="https://lifelines.readthedocs.io/en/latest/fitters/regression/CoxPHFitter.html"
                target="_blank"
                rel="noreferrer"
              >
                Cox model form ↗
              </a>
            </div>
          </div>
        </section>

        <section className="modeling-body modeling-light">
          <div className="shell">
            <div className="modeling-intro">
              <div>
                <div className="kicker">02 · COMPLETED BENCHMARK</div>
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
                <div className="kicker">03 · SIMULATION ONLY</div>
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
              <div className="kicker">QUESTION LEFT OPEN</div>
              <h2>Would a testing workflow help anyone?</h2>
            </div>
            <div>
              <p>
                The hazard ratio above does not answer that. Independent
                statistical review, uncertainty analysis, and a defined
                clinical study would be needed to examine the value of testing.
                The completed cell culture pilot is a separate line of work.
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
