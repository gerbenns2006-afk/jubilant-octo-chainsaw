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
          <div className="eyebrow">NEURODEGENERATION · RESEARCH IN PROGRESS</div>
          <h1>
            Test what cells do,
            <br />
            <em>then predict what comes next.</em>
          </h1>
          <p className="hero-copy">
            ONQIVA brings together completed Alzheimer’s sample-culture work,
            a transparent forecast grounded in published immune-cell research,
            and a separate hypothesis about recovery timing in neurodegeneration.
          </p>
          <div className="modeling-status">
            <span>PILOT CULTURE TESTING COMPLETED</span>
            <span>OBSERVATIONS KEPT DISTINCT FROM FORECASTS</span>
            <span>ALS AND PARKINSON’S QUESTIONS SEPARATE</span>
          </div>
        </section>

        <section className="study-overview">
          <div className="shell">
            <div className="section-head">
              <div>
                <div className="kicker">TWO CONNECTED, DISTINCT TRACKS</div>
                <h2>Start from the pilot. Make the next prediction testable.</h2>
              </div>
              <p>
                The Alzheimer’s pilot uses purchased human research material and
                completed cell-culture testing. A second, proposed project asks
                whether recovery between stress events predicts later protein
                seeding in a Parkinson’s-related model.
              </p>
            </div>

            <div className="study-grid">
              <article className="study-card study-card-featured">
                <span>COMPLETED PILOT · ALZHEIMER’S</span>
                <h3>Donor-sample cell-culture tests</h3>
                <p>
                  The project records completed Alzheimer’s disease
                  sample-culture tests using material purchased through
                  Sanguine Bio. It treats this as completed pilot work;
                  the full sample and instrument log is being reconstructed.
                </p>
                <a href="/cell-work">See the experiment record and forecast →</a>
              </article>
              <article className="study-card">
                <span>PROPOSED · PARKINSON’S-RELATED</span>
                <h3>Recovery timing and later seeding</h3>
                <p>
                  A separate hypothesis asks whether recovery time between
                  stress events adds predictive information beyond measured
                  protein burden. Its novelty and predictive value remain to
                  be tested.
                </p>
                <a
                  href="https://chatgpt.com/share/6acd0a25-d640-83e8-889f-bcb35dc49cc2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the original hypothesis →
                </a>
              </article>
              <article className="study-card">
                <span>PROPOSED · ALS CELL MODEL</span>
                <h3>TDP-43 stress recovery in NSC-34 cells</h3>
                <p>
                  A separate ALS mechanism study can compare wild-type and
                  ALS-linked TDP-43 in motor-neuron-like NSC-34 cells. The
                  prediction is that stress-response signals recover differently
                  after a matched challenge; the result must be measured and
                  checked in human motor-neuron models later.
                </p>
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8217991/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the primary TDP-43 model study →
                </a>
              </article>
            </div>

            <aside className="study-boundary">
              <strong>These are three distinct research tracks.</strong>
              Alzheimer’s sample work, Parkinson’s protein-seeding questions,
              and an ALS TDP-43 model use different biology and outcomes. A
              result in one model does not transfer automatically to another.
            </aside>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
