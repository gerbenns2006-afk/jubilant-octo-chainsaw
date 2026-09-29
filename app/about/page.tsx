import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

export default function AboutPage() {
  return (
    <main id="top">
      <a className="skip-link" href="#founder-content">
        Skip to content
      </a>
      <SiteNav active="about" />

      <div id="founder-content">
        <section className="page-hero shell">
          <div className="eyebrow">About the founder</div>
          <h1>
            I learned the model
            <br />
            <em>before I built the interface.</em>
          </h1>
          <p className="hero-copy">
            ONQIVA grew from my first vitamin D and cancer research into an
            independent project connecting public data, mathematical modeling,
            and software people can inspect.
          </p>
        </section>

        <section className="founder-page">
          <div className="shell">
            <div className="timeline-heading">
              <div className="kicker">WORK YOU CAN TRACE</div>
              <h2>What I have done, and what is still ahead.</h2>
            </div>
            <ol className="research-timeline">
              <li>
                <div className="timeline-date">2023</div>
                <div>
                  <span>PEER-REVIEWED RESEARCH</span>
                  <h3>Published work on vitamin D and cancer</h3>
                  <p>
                    I was first author of a review on vitamin D and cancer and
                    coauthored research on vitamin-D-related mechanisms in
                    osteosarcoma.
                  </p>
                  <div className="timeline-links">
                    <a
                      href="https://pubmed.ncbi.nlm.nih.gov/37054849/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      First-author review ↗
                    </a>
                    <a
                      href="https://doi.org/10.3389/fonc.2023.1188641"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Osteosarcoma research ↗
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-date">Research training</div>
                <div>
                  <span>LABORATORY &amp; WRITING</span>
                  <h3>Worked with proteins and scientific data</h3>
                  <p>
                    My research experience at the University of Miami included
                    hands-on protein work, data analysis, and scientific
                    writing. It gave me a concrete question to carry into
                    computational research.
                  </p>
                </div>
              </li>
              <li>
                <div className="timeline-date">2026</div>
                <div>
                  <span>INDEPENDENT ANALYSIS</span>
                  <h3>
                    Worked through the math, then rebuilt the model in Python
                  </h3>
                  <p>
                    I prepared public NHANES data and fit an exploratory Cox
                    model among 515 adults reporting a previous cancer
                    diagnosis. The analysis includes 35 deaths and up to 37
                    months of follow-up. The current vitamin D estimate is
                    observational and uncertain.
                  </p>
                  <a href="/#research-note">
                    Inspect one result and its limits
                  </a>
                </div>
              </li>
              <li>
                <div className="timeline-date">Today</div>
                <div>
                  <span>PUBLIC PROTOTYPE</span>
                  <h3>Showing the analysis beside a separate simulation</h3>
                  <p>
                    ONQIVA puts the real-data analysis next to a fictional,
                    rule-based testing exercise. The simulation is not trained
                    on NHANES and is not in clinical use.
                  </p>
                  <a href="/#prototype">Try the fictional workflow</a>
                </div>
              </li>
              <li>
                <div className="timeline-date">Next</div>
                <div>
                  <span>PROPOSED</span>
                  <h3>Invite independent review before expanding</h3>
                  <p>
                    The next step is feedback on the cohort, model choices, and
                    limits. A clinical pilot would need a partner, a defined
                    protocol, appropriate data, and validation. No pilot or
                    clinic deployment is underway.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="founder-story-section">
          <div className="shell founder-story">
            <aside>
              <div className="kicker">THE PERSON BEHIND THE WORK</div>
              <h2>Gerbenn Seraphin</h2>
              <p>Engineering student · researcher · ONQIVA founder</p>
              <div className="bio-facts">
                <span>FIRST-AUTHOR RESEARCH</span>
                <span>INDEPENDENT DATA ANALYSIS</span>
                <span>OPEN METHODS</span>
              </div>
            </aside>
            <article className="bio-copy">
              <p>
                I am an engineering student and emerging computational
                biomedical researcher. I graduated high school at 15 and began
                university young. My path included foster care, housing
                instability, construction work while studying, and an unresolved
                transcript barrier that complicated my transfer plans. I
                continued at Mission College and kept building research I could
                explain and show.
              </p>
              <p>
                Those experiences shape why I care about access. They do not
                prove that a model works. The work has to stand on its data,
                methods, and limits.
              </p>
              <p>
                I worked through the modeling mathematics by hand, prepared and
                entered the data, and then translated the reasoning into Python.
                Software tools help me test assumptions and compare models. I
                want other people to be able to inspect those choices too.
              </p>
              <p>
                I started ONQIVA to turn published vitamin D and cancer research
                into an understandable computational research project. The
                current site is an early prototype, not a diagnostic or
                treatment system.
              </p>
            </article>
          </div>
        </section>

        <section className="founder-vision">
          <div className="shell work-grid">
            <div>
              <div className="kicker">WHAT I AM ASKING FOR</div>
              <h2>Good criticism is part of the research.</h2>
            </div>
            <div>
              <p>
                I am looking for an independent statistical review of the NHANES
                analysis and an oncology or survivorship collaborator to help
                sharpen the next research question. Nonprofit and philanthropic
                funders interested in transparent early research are also
                welcome to get in touch.
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
