import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

export default function NeurodegenerationPage() {
  return (
    <main id="top">
      <a className="skip-link" href="#neuro-content">
        Skip to content
      </a>
      <SiteNav active="neuro" />

      <div id="neuro-content">
        <section className="page-hero shell neuro-hero">
          <div className="eyebrow">ALS / NEURODEGENERATION · STUDY DESIGN</div>
          <h1>
            How long does a stressed
            <br />
            <em>motor neuron take to recover?</em>
          </h1>
          <p className="hero-copy">
            ONQIVA is developing a cell-based study of recovery after transient
            stress. The question is whether the shape of that recovery predicts
            how an ALS-related motor neuron handles a second challenge.
            Earlier culture work helped frame the question; the experiment
            below is the next study, not a report of measured ONQIVA outcomes.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#study-design">
              Read the study design
            </a>
            <a className="secondary" href="#prediction">
              See the prediction
            </a>
          </div>
        </section>

        <section className="study-overview" id="study-design">
          <div className="shell">
            <div className="section-head">
              <div>
                <div className="kicker">THE RESEARCH QUESTION</div>
                <h2>Measure recovery, then ask if it predicts resilience.</h2>
              </div>
              <p>
                TDP-43 normally concentrates in the nucleus. Its distribution
                can change under stress, and persistent cytoplasmic TDP-43 is
                relevant to ALS biology. A single image after a challenge
                misses the time it took a cell to return toward baseline.
              </p>
            </div>

            <div className="study-grid">
              <article className="study-card study-card-featured">
                <span>01 · ESTABLISH THE ASSAY</span>
                <h3>Motor-neuron-like culture</h3>
                <p>
                  Use NSC-34 cells to check that a brief, nonlethal stress
                  produces a measurable TDP-43 localization curve. This mouse
                  hybrid line is a practical assay screen; it cannot establish
                  what happens in a person with ALS.
                </p>
              </article>
              <article className="study-card">
                <span>02 · TEST HUMAN RELEVANCE</span>
                <h3>ALS motor neurons</h3>
                <p>
                  Repeat the question in human iPSC-derived motor neurons with
                  a C9orf72 ALS background and matched isogenic controls.
                  Independent cell lines and differentiations, rather than
                  individual wells, anchor the comparison.
                </p>
              </article>
              <article className="study-card">
                <span>03 · MAKE A HELD-OUT PREDICTION</span>
                <h3>One pulse, then another</h3>
                <p>
                  Estimate a recovery measure after the first matched stress
                  pulse. Ask whether it predicts TDP-43 localization and cell
                  health after a second pulse at a shorter or longer recovery
                  interval in held-out cultures.
                </p>
              </article>
            </div>

            <aside className="study-boundary">
              <strong>Why this design is specific:</strong>
              Published human motor-neuron studies show that stress responses
              vary by stressor and genetic background. A result in one ALS
              model would not establish a general marker for every person or
              every neurodegenerative disease.
            </aside>
          </div>
        </section>

        <section className="reaction-model-section">
          <div className="shell">
            <div className="section-head reaction-section-head">
              <div>
                <div className="kicker">WHAT THE EXPERIMENT WOULD RECORD</div>
                <h2>A time series with a clear primary readout.</h2>
              </div>
              <p>
                Baseline, post-stress, and recovery images would be analyzed
                using the same rules across matched cultures. The stress dose
                and time points would be fixed after an assay feasibility run.
              </p>
            </div>

            <div className="reaction-steps">
              <article>
                <span>PRIMARY</span>
                <h3>TDP-43 localization</h3>
                <p>
                  Track the nuclear-to-cytoplasmic TDP-43 ratio in identified
                  motor neurons over recovery. The main comparison is how
                  completely and how quickly that ratio returns toward its
                  baseline range.
                </p>
              </article>
              <article>
                <span>SECONDARY</span>
                <h3>Cell integrity</h3>
                <p>
                  Record neurite structure and viability so a change in
                  localization is interpreted alongside cell health. Image
                  analysis would be blinded to condition.
                </p>
              </article>
              <article>
                <span>QUALITY CONTROL</span>
                <h3>Replication and batch effects</h3>
                <p>
                  Compare independent differentiations and cell lines,
                  document expression and imaging differences, and keep an
                  entire line or differentiation out of model fitting for the
                  final prediction check.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="timing-model" id="prediction">
          <div className="shell timing-grid">
            <div>
              <div className="kicker">A TESTABLE FORECAST</div>
              <h2>Does the recovery curve carry information a snapshot misses?</h2>
              <p>
                The working prediction is that a shorter interval before the
                second challenge leaves more residual cytoplasmic TDP-43 and
                greater later injury in C9orf72 ALS motor neurons than a longer
                interval. ONQIVA has not measured that comparison yet.
              </p>
              <p>
                A useful recovery measure must predict the held-out response
                more accurately than baseline localization alone. If that gain
                disappears across independent lines, the proposed marker fails
                its key test.
              </p>
            </div>
            <div className="timing-equations">
              <code>Recovery signal: R(t) = R∞ + (R₀ − R∞)e^(−t/τ)</code>
              <p>
                Here τ summarizes the pace of return toward baseline. This
                simple curve is an analysis starting point, not a fitted
                biological constant. The study would compare it with less
                restrictive fits and report uncertainty by cell line.
              </p>
              <p>
                A later reaction–diffusion model could address spatial protein
                spread only if position-resolved imaging is collected. A
                plate-average recovery curve cannot identify a spread rate.
              </p>
            </div>
          </div>
        </section>

        <section className="funding-path">
          <div className="shell funding-grid">
            <div>
              <div className="kicker">THE FUNDING CASE</div>
              <h2>Here is the study I am asking partners to support.</h2>
              <p>
                The next step needs a host lab, a defined budget, and a
                reproducible assay. The research case brings my previous work
                together with the milestones and resources this study requires.
              </p>
              <a className="primary" href="/funding">
                See the funding case
              </a>
            </div>
            <ol>
              <li>Lock the imaging readout and acceptable cell-health range in an assay feasibility study.</li>
              <li>Estimate recovery curves in matched human ALS and corrected motor-neuron lines.</li>
              <li>Test the shorter-versus-longer recovery prediction on independent cultures.</li>
              <li>Share the analysis, uncertainty, and null results before proposing any broader use.</li>
            </ol>
          </div>
        </section>

        <section className="source-strip">
          <div className="shell">
            <span className="evidence-label">SCIENTIFIC GROUNDING</span>
            <p>
              Prior studies motivate this question; they are not ONQIVA
              results. Human C9orf72 ALS motor neurons showed impaired
              TDP-43 recovery after repeated mild injury. Another human
              motor-neuron study found stress-specific recovery patterns and
              no recovery-rate difference in its VCP-mutant comparison.
              Those mixed findings are why this proposal names the cell
              background and includes a falsification check.
            </p>
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10996466/" target="_blank" rel="noreferrer">
              Repeated injury in C9orf72 motor neurons ↗
            </a>
            {" · "}
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7664327/" target="_blank" rel="noreferrer">
              Stress-specific recovery in human motor neurons ↗
            </a>
            {" · "}
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8743001/" target="_blank" rel="noreferrer">
              TDP-43 during cellular stress recovery ↗
            </a>
            {" · "}
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8217991/" target="_blank" rel="noreferrer">
              NSC-34 TDP-43 assay precedent ↗
            </a>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
