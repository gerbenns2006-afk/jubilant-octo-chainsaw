import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

export const metadata = {
  title: "Support the research | ONQIVA",
  description:
    "The research record, testable ALS study, milestones, and partnership request behind ONQIVA's next experiment.",
};

export default function FundingPage() {
  return (
    <main id="top">
      <a className="skip-link" href="#funding-content">
        Skip to content
      </a>
      <SiteNav active="funding" />

      <div id="funding-content">
        <section className="page-hero shell funding-hero">
          <div className="eyebrow">A RESEARCH CASE FOR SUPPORT</div>
          <h1>
            Fund the next question
            <br />
            <em>we can actually test.</em>
          </h1>
          <p className="hero-copy">
            I am seeking a host lab and seed support for a focused ALS study:
            can the way a motor neuron recovers after brief stress predict its
            response to a later challenge? ONQIVA would test that prediction
            against a simpler snapshot measure and report the result even if
            the proposed signal fails.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#funding-ask">
              See the specific ask
            </a>
            <a className="secondary" href="#research-record">
              Inspect the work behind it
            </a>
          </div>
          <div className="funding-status" aria-label="Research status">
            <span>Published research and independent analysis</span>
            <span>ALS experiment proposed</span>
            <span>Seeking a lab and seed support</span>
          </div>
        </section>

        <section className="funding-record" id="research-record">
          <div className="shell">
            <div className="section-head">
              <div>
                <div className="kicker">THE WORK BEHIND ONQIVA</div>
                <h2>A track record a funder can inspect.</h2>
              </div>
              <p>
                My work has moved through papers, laboratory research, hand-worked
                mathematics, and public-data analysis. Each part demonstrates a
                skill needed for the next study; none is presented as an ALS
                result.
              </p>
            </div>
            <div className="funding-record-grid">
              <article>
                <span>01 / PUBLISHED</span>
                <h3>Questions grounded in biology</h3>
                <p>
                  I was first author of a vitamin D and cancer review and
                  coauthored a paper on vitamin-D-related mechanisms in
                  osteosarcoma. These publications show the research path that
                  preceded ONQIVA.
                </p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/37054849/" target="_blank" rel="noreferrer">
                  First-author paper ↗
                </a>
                <a href="https://doi.org/10.3389/fonc.2023.1188641" target="_blank" rel="noreferrer">
                  Coauthored paper ↗
                </a>
              </article>
              <article>
                <span>02 / LABORATORY</span>
                <h3>Experience at the bench</h3>
                <p>
                  At the University of Miami, I worked hands-on with proteins,
                  data, and scientific writing. Earlier incubator-based culture
                  work helped me think about cell stress. Its original assay
                  records are being reconstructed, so no cell-line result from
                  that work is claimed here.
                </p>
                <a href="/work">See the research record</a>
              </article>
              <article>
                <span>03 / COMPUTATIONAL</span>
                <h3>Math carried into an auditable model</h3>
                <p>
                  I worked through the modeling mathematics by hand, prepared
                  public NHANES data, and rebuilt an exploratory survival
                  analysis in Python. Its 515-person cohort, 35 observed deaths,
                  code, and limitations are available for review.
                </p>
                <a href="/modeling">Inspect the methods</a>
                <a href="https://github.com/gerbenns2006-afk/jubilant-octo-chainsaw/tree/main/research" target="_blank" rel="noreferrer">
                  Inspect the research code ↗
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="funding-thesis">
          <div className="shell funding-thesis-grid">
            <div>
              <div className="kicker">THE SCIENTIFIC OPENING</div>
              <h2>Can recovery tell us more than one image?</h2>
            </div>
            <div>
              <p>
                Published work in C9orf72 ALS motor neurons has already shown
                disrupted TDP-43 recovery after repeated mild injury. That
                observation belongs to the researchers who reported it. ONQIVA&apos;s
                proposed contribution is narrower and testable: define a
                recovery measure in advance, then ask whether it predicts the
                response of independent cultures to a second challenge better
                than a single baseline image does.
              </p>
              <p>
                A positive result would justify further validation across
                lines and stressors. A null result would tell us to stop treating
                that recovery measure as a promising marker. Neither outcome
                would establish a patient test or treatment.
              </p>
              <a href="/neurodegeneration">Read the study design</a>
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10996466/" target="_blank" rel="noreferrer">
                Read the motivating study ↗
              </a>
            </div>
          </div>
        </section>

        <section className="funding-milestones" id="funding-ask">
          <div className="shell">
            <div className="section-head">
              <div>
                <div className="kicker">WHAT SEED SUPPORT WOULD BUY</div>
                <h2>Three stages, each with a decision point.</h2>
              </div>
              <p>
                The first funded step is assay feasibility with a qualified
                laboratory partner. Human ALS cell work follows only if the
                readout is reproducible and the protocol is ready.
              </p>
            </div>
            <ol className="funding-milestone-grid">
              <li>
                <span>STAGE 01</span>
                <h3>Make the readout reliable</h3>
                <p>
                  Establish a nonlethal stress-and-recovery imaging protocol in
                  a motor-neuron-like culture. Set cell-health and imaging
                  quality criteria before measuring a disease comparison.
                </p>
                <strong>Deliverable: a reproducible protocol and feasibility report.</strong>
              </li>
              <li>
                <span>STAGE 02</span>
                <h3>Test the human-cell comparison</h3>
                <p>
                  With a host lab, compare C9orf72 iPSC-derived motor neurons
                  and matched isogenic controls across independent
                  differentiations. Measure TDP-43 localization through
                  recovery with blinded image analysis.
                </p>
                <strong>Deliverable: recovery curves with uncertainty by line and batch.</strong>
              </li>
              <li>
                <span>STAGE 03</span>
                <h3>Try to predict a second response</h3>
                <p>
                  Lock the recovery measure, hold out entire cultures, and
                  compare its forecast of later TDP-43 localization and cell
                  health with a simpler snapshot-based forecast.
                </p>
                <strong>Deliverable: an independent comparison, including null findings.</strong>
              </li>
            </ol>
          </div>
        </section>

        <section className="funding-resources">
          <div className="shell funding-resources-grid">
            <div>
              <div className="kicker">THE PRACTICAL REQUEST</div>
              <h2>People, lab access, and a measured first study.</h2>
              <p>
                Seed support would cover qualified lab time, cell models and
                reagents, imaging, independent quantitative review, and clear
                reporting of the results. The detailed budget and schedule
                should be set with the host institution that will run the
                experiments.
              </p>
            </div>
            <div className="funding-needs">
              <article>
                <span>HOST LAB</span>
                <p>Motor-neuron culture, imaging capacity, and oversight of the experimental protocol.</p>
              </article>
              <article>
                <span>QUANTITATIVE PARTNER</span>
                <p>Review of the primary comparison, replication unit, blinding, and held-out prediction.</p>
              </article>
              <article>
                <span>SEED FUNDER</span>
                <p>Support for the staged feasibility work and a report that makes success and failure equally visible.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="funding-contact">
          <div className="shell funding-contact-grid">
            <div>
              <div className="kicker">START A CONVERSATION</div>
              <h2>Help make the next claim earn its evidence.</h2>
            </div>
            <div>
              <p>
                If you support early ALS research, run a relevant laboratory,
                or can review the study design, I would welcome a conversation
                about a scoped proposal and budget. The current page is a
                public research case; detailed experimental planning would be
                developed with the lab that takes it forward.
              </p>
              <a className="primary" href="mailto:sciencelecturesyt@gmail.com?subject=ONQIVA%20ALS%20research%20support">
                Discuss research support
              </a>
              <a className="funding-download" href="/ONQIVA_ALS_Seed_Study_Brief.pdf" download>
                Download the one-page research brief (PDF)
              </a>
            </div>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
