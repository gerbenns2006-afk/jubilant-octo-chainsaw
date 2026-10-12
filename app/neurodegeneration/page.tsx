import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

export const metadata = {
  title: "Neurodegeneration work | ONQIVA",
  description:
    "The completed Alzheimer’s sample-culture pilot, the recovery-history model it motivated, and the separate ALS study proposed next.",
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
              See the model it led to
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
                <div className="kicker">WHAT I ACTUALLY DID</div>
                <h2>The pilot happened at the bench.</h2>
              </div>
              <p>
                These are the steps I can account for from the early
                Alzheimer&apos;s-related work. They are not an ALS experiment.
              </p>
            </div>

            <div className="study-grid">
              <article className="study-card study-card-featured">
                <span>01 · SOURCED THE MATERIAL</span>
                <h3>Purchased research samples</h3>
                <p>
                  I obtained Alzheimer&apos;s disease research material through
                  Sanguine Bio for exploratory cell work. The specific product,
                  donor identifiers, and lot information are not in the
                  available project record.
                </p>
              </article>
              <article className="study-card">
                <span>02 · CULTURED THE MATERIAL</span>
                <h3>Used an incubator</h3>
                <p>
                  I carried out incubator-based culture work with the purchased
                  material. The original culture schedule, media, and handling
                  details are not available to publish here.
                </p>
              </article>
              <article className="study-card">
                <span>03 · RAN THE PILOT</span>
                <h3>Completed exploratory tests</h3>
                <p>
                  I performed pilot cell-culture tests. The assay identity,
                  controls, and raw readouts have not been recovered, so I am
                  not assigning a direction or size to a biological effect.
                </p>
              </article>
            </div>

            <aside className="study-boundary">
              <strong>What the record supports:</strong> completed sample
              purchase, culture, and exploratory testing. It does not yet
              support naming a particular cell line or reporting a measured
              Alzheimer&apos;s finding until the original order and lab notes are
              available.
            </aside>
          </div>
        </section>

        <section className="reaction-model-section" id="model-we-developed">
          <div className="shell">
            <div className="section-head reaction-section-head">
              <div>
                <div className="kicker">WHAT I BUILT FROM THE QUESTION</div>
                <h2>I turned recovery time into a testable model.</h2>
              </div>
              <p>
                After the pilot, I developed a separate hypothesis about how
                the time between two stress events might change a later cell
                response. The original example concerned protein seeding in a
                Parkinson&apos;s-related model. It was conceptual work, not an
                outcome measured in the Alzheimer&apos;s samples.
              </p>
            </div>

            <div className="reaction-equation-card">
              <div>
                <span className="evidence-label">MODEL DRAFT · NOT FITTED TO PILOT DATA</span>
                <h3>Reaction, clearance, and spread</h3>
                <code>∂P/∂t = D∇²P + αP(1 − P/K) − μP + I(x,t)</code>
                <p>
                  I sketched this reaction–diffusion model to make the idea
                  precise. It treats a selected protein signal as something
                  that can spread, amplify, and clear while an experimental
                  pulse adds new input. No parameter in this equation was
                  estimated from the completed culture pilot.
                </p>
              </div>
              <div className="reaction-parameters">
                <p><strong>P</strong><span>protein signal in a future assay</span></p>
                <p><strong>D</strong><span>spatial spread, requiring spatial images</span></p>
                <p><strong>α</strong><span>local amplification in the model</span></p>
                <p><strong>μ</strong><span>clearance of the signal</span></p>
                <p><strong>I(x,t)</strong><span>timed experimental input</span></p>
              </div>
            </div>

            <div className="reaction-model-boundary">
              <strong>The prediction I wrote down:</strong>
              <p>
                With the same total challenge, a shorter recovery interval
                could leave more residual signal and change the response to a
                second pulse. The proposed comparison would need matched
                cultures and repeated measurements. The pilot did not test or
                validate that prediction.
              </p>
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
