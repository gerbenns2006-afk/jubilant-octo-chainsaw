import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

export default function WorkPage() {
  return (
    <main id="top">
      <a className="skip-link" href="#work-content">
        Skip to content
      </a>
      <SiteNav active="work" />

      <div id="work-content">
        <section className="page-hero shell neuro-hero">
          <div className="eyebrow">SELECTED RESEARCH &amp; PROJECTS</div>
          <h1>
            Work across data,
            <br />
            <em>proteins, and mathematical questions.</em>
          </h1>
          <p className="hero-copy">
            A growing record of published research, independent analysis, and
            hypotheses in progress. Each item states what was done and what
            remains open.
          </p>
        </section>

        <section className="portfolio-records">
          <div className="shell">
            <ol className="research-timeline portfolio-timeline">
              <li>
                <div className="timeline-date">2023</div>
                <div>
                  <span>PEER-REVIEWED · FIRST AUTHOR</span>
                  <h3>Vitamin D and cancer research</h3>
                  <p>
                    A first-author review examining vitamin D and cancer. The
                    paper is published; its evidence is separate from the
                    independent NHANES analysis on this site.
                  </p>
                  <div className="timeline-links">
                    <a
                      href="https://pubmed.ncbi.nlm.nih.gov/37054849/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read the review ↗
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-date">2023</div>
                <div>
                  <span>PEER-REVIEWED · COAUTHOR</span>
                  <h3>Vitamin-D-related mechanisms in osteosarcoma</h3>
                  <p>
                    Coauthored research on vitamin-D-related mechanisms in an
                    osteosarcoma context.
                  </p>
                  <div className="timeline-links">
                    <a
                      href="https://doi.org/10.3389/fonc.2023.1188641"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read the article ↗
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-date">2026</div>
                <div>
                  <span>INDEPENDENT · PUBLIC DATA</span>
                  <h3>NHANES survivorship analysis</h3>
                  <p>
                    Rebuilt an exploratory analysis of measured vitamin D and
                    linked mortality among 515 adults who reported a previous
                    cancer diagnosis. The cohort included 35 observed deaths
                    and up to 37 months of follow-up; the association is
                    observational and uncertain.
                  </p>
                  <div className="timeline-links">
                    <a href="/#research-note">Inspect the result and limits</a>
                    <a href="/modeling">Read the methods</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-date">Earlier laboratory work</div>
                <div>
                  <span>EXPLORATORY · CELL CULTURE</span>
                  <h3>Early neurodegeneration experiments</h3>
                  <p>
                    Incubator-based culture work helped shape a question about
                    cellular stress and recovery. The original assay details and
                    measurements are being reconstructed, so this entry does
                    not assign a measured effect to those early tests.
                  </p>
                  <div className="timeline-links">
                    <a href="/neurodegeneration">See the research direction</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-date">In progress</div>
                <div>
                  <span>STUDY DESIGN · NEURODEGENERATION</span>
                  <h3>Recovery dynamics in ALS cell models</h3>
                  <p>
                    A proposed study asks whether the way motor neurons recover
                    after a brief stress predicts their response to a second
                    challenge. Its readouts and comparison groups are defined;
                    ONQIVA has not reported results from that study.
                  </p>
                  <div className="timeline-links">
                    <a href="/neurodegeneration">Read the study design</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-date">Research training</div>
                <div>
                  <span>LABORATORY · PROTEINS</span>
                  <h3>Hands-on protein work</h3>
                  <p>
                    Research training at the University of Miami included
                    hands-on protein work, data analysis, and scientific
                    writing. Specific cell lines and experimental findings
                    will be listed when the lab notes identify them.
                  </p>
                  <div className="timeline-links">
                    <a href="/neurodegeneration">Explore the current research question</a>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
