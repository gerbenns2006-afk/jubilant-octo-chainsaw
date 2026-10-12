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
                <div className="timeline-date">Pilot · year not recorded</div>
                <div>
                  <span>COMPLETED CULTURE TESTING · ALZHEIMER’S SAMPLES</span>
                  <h3>Donor-sample cell-culture pilot</h3>
                  <p>
                    I purchased Alzheimer’s research samples through Sanguine
                    Bio and completed culture tests. The site records that pilot
                    work and adds a separate literature-based
                    forecast; sample-specific measurements are being reconciled
                    with the original lab record.
                  </p>
                  <div className="timeline-links">
                    <a href="/cell-work">Read the pilot record and model</a>
                    <a href="/neurodegeneration">See related research directions</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-date">In progress</div>
                <div>
                  <span>PROPOSED · NEURODEGENERATION</span>
                  <h3>Recovery timing and later protein seeding</h3>
                  <p>
                    A testable hypothesis asks whether a cell’s recovery time
                    between stress events helps predict later protein seeding
                    beyond protein burden alone. The linked brief proposes a
                    Parkinson’s-related cell experiment; the idea is not
                    validated, and no completed outcomes are reported there.
                  </p>
                  <div className="timeline-links">
                    <a href="/neurodegeneration">Read the hypothesis</a>
                    <a href="/cell-work">See the cell-work record</a>
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
                    <a href="/cell-work">Open the cell-work record</a>
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
