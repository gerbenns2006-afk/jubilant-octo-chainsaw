import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

export const metadata = {
  title: "Neurodegeneration work | ONQIVA",
  description:
    "The completed Alzheimer’s culture pilot, working recovery hypothesis, sample equations, and separate ALS study proposed next.",
};

export default function NeurodegenerationPage() {
  return (
    <main id="top">
      <a className="skip-link" href="#neuro-content">
        Skip to content
      </a>
      <SiteNav active="neuro" />

      <div id="neuro-content">
        <section className="page-hero shell neuro-hero">
          <div className="eyebrow">NEURODEGENERATION · COMPLETED PILOT WORK</div>
          <h1>
            It started with samples
            <br />
            <em>in culture.</em>
          </h1>
          <p className="hero-copy">
            I purchased Alzheimer&apos;s disease research material through
            Sanguine Bio, cultured it using an incubator, and completed
            exploratory cell-culture tests. That bench work came before the
            recovery model and the separate ALS study I am now seeking to fund.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#pilot-record">
              See what I did
            </a>
            <a className="secondary" href="#model-we-developed">
              See the hypotheses and models
            </a>
          </div>
          <div className="modeling-status" aria-label="Work status">
            <span>SAMPLES PURCHASED</span>
            <span>INCUBATOR CULTURE COMPLETED</span>
            <span>PILOT TESTS COMPLETED</span>
          </div>
        </section>

        <section className="study-overview" id="pilot-record">
          <div className="shell">
            <div className="section-head">
              <div>
                <div className="kicker">ALZHEIMER&apos;S-RELATED CULTURE PILOT</div>
                <h2>From purchased samples to exploratory tests.</h2>
              </div>
              <p>
                The early work had three completed steps: sourcing the material,
                culturing it, and running a pilot. The ALS experiment described
                below is a separate study.
              </p>
            </div>

            <div className="study-grid">
              <article className="study-card study-card-featured">
                <span>01 · SOURCED THE MATERIAL</span>
                <h3>Purchased research samples</h3>
                <p>
                  I obtained Alzheimer&apos;s disease research material through
                  Sanguine Bio and used it for exploratory cell-culture work.
                </p>
              </article>
              <article className="study-card">
                <span>02 · CULTURED THE MATERIAL</span>
                <h3>Used an incubator</h3>
                <p>
                  I carried out incubator-based culture work with the purchased
                  material as part of the pilot.
                </p>
              </article>
              <article className="study-card">
                <span>03 · RAN THE PILOT</span>
                <h3>Completed exploratory tests</h3>
                <p>
                  I completed exploratory tests on the cultured material. The
                  work gave my later stress-and-recovery question a starting
                  point at the bench.
                </p>
              </article>
            </div>

            <aside className="study-boundary">
              <strong>Pilot record:</strong> the purchase, culture, and
              exploratory tests were completed. This site does not include the
              exact cell identity, assay protocol, controls, or numerical
              readouts, so it does not report a measured disease effect.
            </aside>
          </div>
        </section>

        <section className="reaction-model-section" id="model-we-developed">
          <div className="shell">
            <div className="section-head reaction-section-head">
              <div>
                <div className="kicker">HYPOTHESES &amp; SAMPLE MODELS</div>
                <h2>What the pilot made me ask.</h2>
              </div>
              <p>
                After the culture work, I framed a question about recovery:
                could the time between two challenges change how a cell
                responds to the second one? The completed pilot supplied the
                bench starting point. The equations below are the working
                hypothesis, not measured effects from those samples.
              </p>
            </div>

            <div className="hypothesis-notebook">
              <div className="hypothesis-notebook-head">
                <span>RESEARCH NOTE / 01</span>
                <span>WORKING MODEL · NO PILOT PARAMETERS FITTED</span>
              </div>

              <div className="hypothesis-thesis">
                <span>THE HYPOTHESIS</span>
                <h3>Recovery time may carry information that a single snapshot misses.</h3>
                <p>
                  Keep the total challenge the same. Change only the interval
                  between two pulses. If a signal from the first pulse has not
                  cleared, the second response may depend on that interval.
                </p>
              </div>

              <div className="hypothesis-model-row">
                <div>
                  <span>01 / RESIDUAL SIGNAL</span>
                  <code>R(Δ) = R₀e<sup>−kΔ</sup></code>
                  <p>
                    R is a signal remaining before pulse two; Δ is the recovery
                    interval. R₀ is its starting amount and k &gt; 0 is an
                    assumed clearance rate.
                  </p>
                </div>
                <div>
                  <span>02 / SECOND RESPONSE</span>
                  <code>Y₂(Δ) = Y₀ + A + γR(Δ)</code>
                  <p>
                    Y₂ is the proposed readout after pulse two. Y₀ is a
                    baseline, A is the direct pulse response, and γ describes
                    how residual signal changes it. The sign of γ is unknown.
                  </p>
                </div>
              </div>

              <div className="hypothesis-deduction">
                <span>THE COMPARISON THE MODEL PREDICTS</span>
                <code>
                  Y₂(Δ<sub>short</sub>) − Y₂(Δ<sub>long</sub>) = γR₀[e<sup>−kΔ<sub>short</sub></sup> − e<sup>−kΔ<sub>long</sub></sup>]
                </code>
                <p>
                  For k &gt; 0, a shorter interval leaves more modeled residual
                  signal. Whether that raises or lowers the measured second
                  response depends on γ. An estimate near γ = 0 would give no
                  support for an interval effect in this simple model.
                </p>
              </div>
            </div>

            <div className="hypothesis-ledger">
              <div>
                <span>COMPLETED</span>
                <p>Purchased Alzheimer&apos;s-related material, incubator culture, and exploratory testing.</p>
              </div>
              <div>
                <span>MODELED</span>
                <p>A possible recovery mechanism; R₀, k, and γ have no fitted values from the pilot.</p>
              </div>
              <div>
                <span>PROPOSED TEST</span>
                <p>Matched cultures, equal total challenge, different intervals, controls, and repeated readouts.</p>
              </div>
            </div>

            <div className="spatial-extension">
              <div>
                <span>SPATIAL EXTENSION / MODEL SKETCH</span>
                <h3>What if the signal also spreads?</h3>
                <p>
                  My earlier reaction–diffusion sketch used a
                  Parkinson&apos;s-related protein-seeding example. It adds
                  movement, local amplification, and clearance. It would
                  require spatial images and a defined protein readout to
                  estimate its terms; the Alzheimer&apos;s pilot did not fit it.
                </p>
              </div>
              <code>∂P/∂t = D∇²P + αP(1 − P/K) − μP + I(x,t)</code>
            </div>
          </div>
        </section>

        <section className="timing-model" id="next-study">
          <div className="shell timing-grid">
            <div>
              <div className="kicker">NEXT EXPERIMENT · ALS</div>
              <h2>The ALS test is a separate next step.</h2>
              <p>
                I have since framed an ALS-specific question: could the way a
                motor neuron recovers after a brief stress predict its response
                to a second challenge better than a single snapshot? This
                question grew from the recovery idea, but it requires its own
                cell model, TDP-43 readout, controls, and independent validation.
              </p>
              <p>
                I have not run that ALS comparison or measured its predicted
                effect. The funding plan starts with an assay feasibility step
                before any human ALS cell comparison.
              </p>
            </div>
            <div className="timing-equations">
              <span className="evidence-label">PROPOSED · NOT A PILOT RESULT</span>
              <p>
                The proposed study would first establish a reliable recovery
                readout in motor-neuron-like culture, then test it in matched
                human ALS and control motor neurons. A held-out comparison
                would ask whether a recovery curve adds predictive information
                beyond baseline localization alone.
              </p>
              <a className="primary" href="/funding">
                See the study and funding plan
              </a>
            </div>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
