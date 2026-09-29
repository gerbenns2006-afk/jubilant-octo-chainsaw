"use client";

import { useState } from "react";
import EverydayPlanner from "./components/EverydayPlanner";
import SiteFooter from "./components/SiteFooter";
import SiteNav from "./components/SiteNav";
import SurvivalLab from "./components/SurvivalLab";

type Simulation = {
  score: number;
  priority: string;
  factors: { label: string; points: number }[];
  allocation: {
    testsUsed: number;
    prioritizedReached: number;
    randomReached: number;
    potentiallyMissed: number;
  };
};

type Context = "survivorship" | "family" | "wellness";

export default function Home() {
  const [capacity, setCapacity] = useState(20);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Simulation | null>(null);
  const [context, setContext] = useState<Context>("survivorship");

  async function runSimulation() {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          age: 52,
          bmi: 31,
          outdoorHours: 1,
          dietaryVitaminD: 1,
          supplementUse: false,
          comorbidities: 2,
          testingCapacity: capacity,
        }),
        signal: AbortSignal.timeout(15000),
      });

      if (!response.ok) throw new Error("Simulation unavailable");
      setResult((await response.json()) as Simulation);
    } catch {
      setError("The simulation could not finish. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteNav active="prototype" />

      <div id="main-content">
        <section className="hero shell">
          <div className="eyebrow">Independent computational oncology</div>
          <h1>
            What can a biomarker
            <br />
            <em>tell us about survivorship?</em>
          </h1>
          <p className="hero-copy">
            I built ONQIVA to make one research question inspectable: how does
            measured vitamin D relate to outcomes after cancer, and what would a
            transparent testing workflow need to prove before it could help a
            clinic?
          </p>
          <div className="hero-actions">
            <a className="primary" href="#prototype">
              Try the fictional workflow
            </a>
            <a className="secondary" href="#research-note">
              Read the NHANES analysis
            </a>
          </div>
          <div className="hero-proof">
            <span>515-person public-data analysis</span>
            <span>Separate fictional clinic simulation</span>
          </div>
        </section>

        <section className="research-note" id="research-note">
          <div className="shell">
            <div className="note-heading">
              <div>
                <div className="kicker">A WORKED RESEARCH NOTE</div>
                <h2>From a fitted coefficient to a result you can inspect.</h2>
              </div>
              <p>
                This is one example of my work moving from a mathematical
                question, through public data, to a result with its limits
                attached.
              </p>
            </div>

            <div className="note-grid">
              <div className="note-cohort">
                <span className="evidence-label">
                  EXPLORATORY · NHANES 2017–2018
                </span>
                <h3>Who was in the analysis?</h3>
                <p>
                  Adults who reported a previous cancer diagnosis, had measured
                  serum 25(OH)D, and were eligible for linked mortality
                  follow-up.
                </p>
                <div className="note-stats">
                  <div>
                    <strong>515</strong>
                    <span>participants</span>
                  </div>
                  <div>
                    <strong>35</strong>
                    <span>observed deaths</span>
                  </div>
                  <div>
                    <strong>37 mo</strong>
                    <span>maximum follow-up</span>
                  </div>
                </div>
                <p className="note-breakdown">
                  In the descriptive groups, 65 people had 25(OH)D below 20
                  ng/mL and 450 had 20 ng/mL or higher. These counts are not a
                  clinical threshold or a screening rule.
                </p>
              </div>

              <div className="note-result">
                <span className="evidence-label">
                  AGE- AND SEX-ADJUSTED COX MODEL
                </span>
                <div className="note-estimate">
                  <strong>0.69</strong>
                  <span>hazard ratio per +10 ng/mL 25(OH)D</span>
                </div>
                <p>95% confidence interval: 0.51 to 0.94</p>
                <div className="worked-equation">
                  <span>WORKED COEFFICIENT</span>
                  <code>exp(−0.367) ≈ 0.69</code>
                  <small>
                    The vitamin D coefficient is −0.367 for each 10 ng/mL
                    increase in the fitted model.
                  </small>
                </div>
              </div>

              <aside className="note-limits">
                <h3>What this does not show</h3>
                <p>
                  This is an unweighted observational analysis with a small
                  number of deaths and short follow-up. It cannot show that
                  vitamin D caused the observed difference, that supplements
                  improve survival, or that testing should be ordered.
                </p>
                <a href="/modeling">See the methods and source trail</a>
              </aside>
            </div>

            <div className="note-sources">
              <span>Primary sources</span>
              <a
                href="https://github.com/gerbenns2006-afk/jubilant-octo-chainsaw/tree/main/research"
                target="_blank"
                rel="noreferrer"
              >
                Analysis code ↗
              </a>
              <a
                href="https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2017/DataFiles/DEMO_J.htm"
                target="_blank"
                rel="noreferrer"
              >
                CDC/NCHS NHANES files ↗
              </a>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/37054849/"
                target="_blank"
                rel="noreferrer"
              >
                Review paper (2023) ↗
              </a>
            </div>
          </div>
        </section>

        <section className="prototype" id="prototype">
          <div className="shell">
            <div className="section-head">
              <div>
                <div className="kicker">A SEPARATE PRODUCT EXERCISE</div>
                <h2>
                  Real analysis on one side. Fictional workflow on the other.
                </h2>
              </div>
              <p>
                The clinic scenario below is a rule-based simulation. It does
                not use the NHANES model, patient records, or clinical outcomes.
              </p>
            </div>

            <div className="context-chooser">
              <div className="context-intro">
                <span>CHOOSE A PATH</span>
                <h3>What brought you here?</h3>
                <p>
                  These paths change the educational content, not a person’s
                  risk or care plan.
                </p>
              </div>
              <div
                className="context-cards"
                role="group"
                aria-label="Choose an educational pathway"
              >
                <button
                  className={context === "survivorship" ? "selected" : ""}
                  aria-pressed={context === "survivorship"}
                  onClick={() => {
                    setContext("survivorship");
                    setResult(null);
                  }}
                >
                  <b>01</b>
                  <span>Cancer survivorship</span>
                  <small>Explore the fictional clinic workflow.</small>
                </button>
                <button
                  className={context === "family" ? "selected" : ""}
                  aria-pressed={context === "family"}
                  onClick={() => {
                    setContext("family");
                    setResult(null);
                  }}
                >
                  <b>02</b>
                  <span>Family history</span>
                  <small>Organize questions for a clinician.</small>
                </button>
                <button
                  className={context === "wellness" ? "selected" : ""}
                  aria-pressed={context === "wellness"}
                  onClick={() => {
                    setContext("wellness");
                    setResult(null);
                  }}
                >
                  <b>03</b>
                  <span>Everyday health</span>
                  <small>Build a food and appointment checklist.</small>
                </button>
              </div>
            </div>

            {context === "survivorship" ? (
              <>
                <div className="demo-grid">
                  <article className="patient-card">
                    <div className="card-top">
                      <div>
                        <span>FICTIONAL SCENARIO</span>
                        <h3>Post-treatment care</h3>
                        <p>
                          Example profile · age 52 · five years after treatment
                        </p>
                      </div>
                    </div>
                    <div className="details">
                      <div>
                        <small>OUTDOOR ACTIVITY</small>
                        <strong>About 1 hour each week</strong>
                      </div>
                      <div>
                        <small>BODY MASS INDEX</small>
                        <strong>31 kg/m²</strong>
                      </div>
                      <div>
                        <small>DIETARY VITAMIN D</small>
                        <strong>Low reported intake</strong>
                      </div>
                      <div>
                        <small>SUPPLEMENT USE</small>
                        <strong>None reported</strong>
                      </div>
                    </div>
                    <div className="context">
                      <b>Fictional clinic context</b>
                      <p>
                        The clinic has a limited number of confirmatory tests
                        this month. This exercise shows how a written scoring
                        rule could be inspected before any real-world study.
                      </p>
                    </div>
                    <button
                      className="simulation-button"
                      onClick={runSimulation}
                      disabled={loading}
                      aria-busy={loading}
                      aria-describedby="simulation-boundary"
                    >
                      <span>
                        {loading ? (
                          <>
                            <i className="loading-spinner" aria-hidden="true" />
                            Calculating scenario
                          </>
                        ) : (
                          "Run fictional allocation"
                        )}
                      </span>
                      <span aria-hidden="true">→</span>
                    </button>
                    {loading ? (
                      <p className="simulation-progress" role="status">
                        Calculating the example with the selected clinic
                        capacity.
                      </p>
                    ) : null}
                    {error ? <p role="alert">{error}</p> : null}
                    <small className="disclaimer" id="simulation-boundary">
                      Fictional, rule-based demonstration. It does not estimate
                      a diagnosis or show clinical benefit.
                    </small>
                  </article>

                  <article
                    className={"result-card " + (result ? "active" : "")}
                    aria-live="polite"
                  >
                    {!result ? (
                      <div className="empty">
                        <span className="evidence-label">FICTIONAL OUTPUT</span>
                        <h3>See the rule, then question it.</h3>
                        <p>
                          Run the example to see how its written assumptions
                          change a score and a capacity-limited allocation.
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="result-label">
                          FICTIONAL OUTPUT · RULE-BASED
                        </div>
                        <div className="score-row">
                          <div
                            className="score-ring"
                            style={
                              {
                                "--score": result.score * 3.6 + "deg",
                              } as React.CSSProperties
                            }
                          >
                            <div>
                              <strong>{result.score}</strong>
                              <small>/ 100</small>
                            </div>
                          </div>
                          <div>
                            <span className="priority">{result.priority}</span>
                            <h3>Score within this example</h3>
                            <p>
                              This number comes from the simulation rule. It is
                              not a measured probability or a care
                              recommendation.
                            </p>
                          </div>
                        </div>
                        <div className="factor-list">
                          <span>Factors used by the example rule</span>
                          {result.factors.map((factor) => (
                            <div key={factor.label}>
                              <i aria-hidden="true" />
                              <p>{factor.label}</p>
                              <b>+{factor.points}</b>
                            </div>
                          ))}
                        </div>
                        <div className="next-step">
                          <span>SIMULATION STEP</span>
                          <p>
                            Place this fictional profile in the example queue.
                          </p>
                        </div>
                      </>
                    )}
                  </article>
                </div>

                <div className="allocation">
                  <div className="allocation-copy">
                    <div className="kicker">CHANGE ONE ASSUMPTION</div>
                    <h2>
                      100 fictional profiles.
                      <br />
                      <em>{capacity} available tests.</em>
                    </h2>
                    <p>
                      Change the number of available tests and run the example
                      again. The comparison uses simulated outcomes.
                    </p>
                    <label htmlFor="capacity">
                      Available tests <b>{capacity}</b>
                    </label>
                    <input
                      id="capacity"
                      type="range"
                      min="5"
                      max="50"
                      value={capacity}
                      onChange={(event) => {
                        setCapacity(Number(event.target.value));
                        setResult(null);
                      }}
                    />
                    <button
                      className="recalculate"
                      disabled={loading}
                      onClick={runSimulation}
                      aria-busy={loading}
                    >
                      {loading
                        ? "Calculating scenario"
                        : "Run allocation example"}
                    </button>
                  </div>
                  <div className="allocation-viz">
                    <div
                      className="people"
                      aria-label={
                        capacity + " of 100 fictional profiles selected"
                      }
                    >
                      {Array.from({ length: 100 }, (_, index) => (
                        <i
                          key={index}
                          className={index < capacity ? "selected" : ""}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <div className="metrics">
                      <div>
                        <span>TESTS IN EXAMPLE</span>
                        <strong>
                          {result?.allocation.testsUsed ?? capacity}
                          <small> / 100</small>
                        </strong>
                      </div>
                      <div>
                        <span>RULE-PRIORITIZED</span>
                        <strong>
                          {result?.allocation.prioritizedReached ?? "Not run"}
                        </strong>
                      </div>
                      <div>
                        <span>RANDOM COMPARISON</span>
                        <strong>
                          {result?.allocation.randomReached ?? "Not run"}
                        </strong>
                      </div>
                    </div>
                    <p>
                      All 100 profiles and outcomes are simulated. The
                      comparison does not establish that either approach
                      improves care.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="context-pathway">
                <div className="pathway-copy">
                  <div className="kicker">
                    {context === "family"
                      ? "FAMILY HISTORY"
                      : "EVERYDAY HEALTH"}
                  </div>
                  <h3>
                    {context === "family"
                      ? "Prepare the details that make a clinical conversation useful."
                      : "Start with foods and routines that are already yours."}
                  </h3>
                  <p>
                    {context === "family"
                      ? "Write down which relatives were affected and at what ages, plus your own questions. This page does not assess inherited risk."
                      : "The checklist below uses your choices to suggest general food ideas and questions. It does not diagnose a deficiency or prescribe supplements."}
                  </p>
                  <a href="#everyday-plan">
                    {context === "family"
                      ? "Build a question list"
                      : "Open the everyday planner"}
                  </a>
                </div>
                {context === "family" ? (
                  <div className="pathway-panel">
                    <span>NOTES TO BRING TO A VISIT</span>
                    <h4>A short family-history outline</h4>
                    <ul>
                      <li>Which relatives were affected and at what ages</li>
                      <li>Your own diagnoses or bone-health concerns</li>
                      <li>Current medications and supplements</li>
                      <li>Any previous vitamin D measurements</li>
                      <li>Questions about screening or genetic counseling</li>
                    </ul>
                    <p className="pathway-note">
                      A clinician or genetic counselor can help decide what
                      family history means for you.
                    </p>
                  </div>
                ) : null}
              </div>
            )}
            <EverydayPlanner key={context} context={context} />
          </div>
        </section>

        <SurvivalLab />

        <section className="evidence shell" id="evidence">
          <div className="section-head light-head">
            <div>
              <div className="kicker">TWO SEPARATE TRACKS</div>
              <h2>Keep each result in its proper context.</h2>
            </div>
            <p>
              One analysis uses public survey data. The interactive clinic
              exercise uses fictional profiles and simulated outcomes.
            </p>
          </div>
          <div className="evidence-grid">
            <article className="evidence-card real">
              <div className="status">PUBLIC DATA · EXPLORATORY</div>
              <h3>NHANES outcomes analysis</h3>
              <p>
                CDC/NCHS demographics, measured serum 25(OH)D, self-reported
                cancer history, and linked mortality follow-up. The analysis
                includes 515 adults and 35 observed deaths.
              </p>
              <p>
                The result is observational, unweighted, and based on short
                follow-up. It is a research finding, not clinical evidence.
              </p>
              <a href="/modeling">Read the methods</a>
            </article>
            <article className="evidence-card simulated">
              <div className="status">FICTIONAL DATA · RULE-BASED</div>
              <h3>Testing-allocation exercise</h3>
              <p>
                A separate demonstration asks how a clinic might compare
                priority rules when test capacity is limited. Its scores do not
                come from NHANES or from a trained clinical predictor.
              </p>
              <p>
                A real evaluation would need a defined protocol, independent
                review, appropriate data, and external validation before
                clinical use could even be considered.
              </p>
              <a href="#prototype">Try the example</a>
            </article>
          </div>
        </section>

        <section className="research shell" id="next">
          <div className="kicker">THE NEXT RESEARCH STEPS</div>
          <h2>Earn each claim with evidence.</h2>
          <ol className="phases">
            <li>
              <b>01</b>
              <span>IN THE REPO</span>
              <h3>Reproduce the analysis</h3>
              <p>
                Make the cohort, variables, exclusions, and uncertainty easy for
                another researcher to inspect.
              </p>
            </li>
            <li>
              <b>02</b>
              <span>NEEDS REVIEW</span>
              <h3>Test the assumptions</h3>
              <p>
                Seek statistical and oncology feedback on the question, analysis
                choices, and what the current data cannot answer.
              </p>
            </li>
            <li>
              <b>03</b>
              <span>PROPOSED</span>
              <h3>Define a responsible next study</h3>
              <p>
                Any clinical pilot would require partners, suitable data,
                governance, and validation. None is presented as underway.
              </p>
            </li>
          </ol>
        </section>

        <section className="founder-preview">
          <div className="shell founder-preview-grid">
            <div>
              <div className="kicker">FOUNDER &amp; RESEARCH PATH</div>
              <h2>My work started on paper, then moved into code.</h2>
            </div>
            <div>
              <p>
                I worked through the model mathematics by hand, prepared the
                data, and then translated the analysis into Python. ONQIVA makes
                that work available for other people to examine, question, and
                improve.
              </p>
              <a href="/about">See what I have done and what comes next</a>
            </div>
          </div>
        </section>

        <section className="work-with-us" id="collaborate">
          <div className="shell work-grid">
            <div>
              <div className="kicker">A SPECIFIC ASK</div>
              <h2>Help review the question before the platform grows.</h2>
            </div>
            <div>
              <p>
                I am looking for an independent statistical reviewer to examine
                the NHANES cohort and model, and an oncology or survivorship
                collaborator to help define a responsible research question. I
                am also open to conversations with nonprofit and philanthropic
                funders who support early, transparent research.
              </p>
              <p className="collaboration-boundary">
                The site does not claim a formal clinic partnership, funded
                pilot, or clinical deployment.
              </p>
              <a
                className="primary"
                href="mailto:sciencelecturesyt@gmail.com?subject=ONQIVA%20research%20review"
              >
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
