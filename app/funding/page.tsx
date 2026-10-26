import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

const educationGoFundMeUrl =
  "https://www.gofundme.com/f/education-shouldnt-stop-here-help-me-keep-going";

export const metadata = {
  title: "Support the research | ONQIVA",
  description:
    "The research record, testable ALS study, milestones, and financial support request behind ONQIVA's next experiment.",
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
            I am seeking financial support from people and philanthropic
            funders to move a focused ALS question into a real experiment:
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
            <a
              className="secondary"
              href={educationGoFundMeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GoFundMe · education support ↗
            </a>
          </div>
          <div className="funding-status" aria-label="Research status">
            <span>Published research and independent analysis</span>
            <span>ALS experiment proposed</span>
            <span>Seeking individual and philanthropic support</span>
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
                  data, and scientific writing. I also purchased
                  Alzheimer&apos;s-related research material through Sanguine Bio,
                  cultured it using an incubator, and completed exploratory
                  tests. That pilot led me to ask sharper questions about cell
                  stress and recovery.
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
              <a href="/neurodegeneration">See the pilot work and next question</a>
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10996466/" target="_blank" rel="noreferrer">
                Read the motivating study ↗
              </a>
            </div>
          </div>
        </section>

        <section className="funding-milestones">
          <div className="shell">
            <div className="section-head">
              <div>
                <div className="kicker">WHAT SEED SUPPORT WOULD BUY</div>
                <h2>Three stages, each with a decision point.</h2>
              </div>
              <p>
                The first funded step is assay feasibility with a qualified
                research team. Human ALS cell work follows only if the readout
                is reproducible and the protocol is ready.
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
                  Compare C9orf72 iPSC-derived motor neurons and matched
                  isogenic controls across independent differentiations.
                  Measure TDP-43 localization through recovery with blinded
                  image analysis.
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

        <section className="funding-resources" id="funding-ask">
          <div className="shell funding-resources-grid">
            <div>
              <div className="kicker">THE FINANCIAL REQUEST</div>
              <h2>Put support behind a measurable first study.</h2>
              <p>
                Financial support would pay for qualified research time, cell
                models and reagents, imaging, independent quantitative review,
                and clear reporting of the results. I will share an itemized
                budget, schedule, and research execution plan with interested
                supporters before any project-specific commitment.
              </p>
            </div>
            <div className="funding-needs">
              <article>
                <span>INDIVIDUAL SUPPORTERS</span>
                <p>Help finance the first assay feasibility step and receive clear progress and results.</p>
              </article>
              <article>
                <span>PHILANTHROPIC FUNDERS</span>
                <p>Underwrite a defined research milestone or the full staged study with an agreed budget.</p>
              </article>
              <article>
                <span>ACCOUNTABILITY</span>
                <p>Supporters can inspect the protocol, the spending plan, and a results report that includes null findings.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="founder-gofundme" id="education-support">
          <div className="shell founder-gofundme-grid">
            <div>
              <div className="kicker">A SEPARATE WAY TO HELP</div>
              <h2>Support the education behind my research path.</h2>
            </div>
            <div>
              <p>
                My personal GoFundMe is for the school balance blocking my
                transcript release and for education and living expenses. I am
                raising that support separately from the proposed ALS study so
                contributions intended for research can go toward its research
                needs.
              </p>
              <a
                className="primary"
                href={educationGoFundMeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Support my education on GoFundMe ↗
              </a>
              <p className="founder-gofundme-note">
                For support dedicated to the ALS study, use the research contact
                below.
              </p>
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
                If you want to support this study financially, I would welcome
                a conversation about sponsorship, a grant, or support for a
                specific milestone. The one-page brief is ready to share; a
                line-item budget and execution plan would follow before a
                funding commitment.
              </p>
              <a className="primary" href="mailto:sciencelecturesyt@gmail.com?subject=Financial%20support%20for%20ONQIVA%20ALS%20research">
                Discuss financial support
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
