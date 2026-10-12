import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

export default function CommunityPage() {
  return (
    <main id="top">
      <a className="skip-link" href="#community-content">
        Skip to content
      </a>
      <SiteNav active="community" />

      <div id="community-content">
        <section className="page-hero shell neuro-hero community-page-hero">
          <div className="eyebrow">SCIENCE IN THE COMMUNITY</div>
          <h1>
            Who gets counted,
            <br />
            <em>heard, and shown the findings?</em>
          </h1>
          <p className="hero-copy">
            ONQIVA should make biomedical research easier to inspect and easier
            to learn from—and give people affected by a question a real path to
            shape what gets studied next.
          </p>
          <div className="modeling-status">
            <span>MAKE STUDY BOUNDARIES VISIBLE</span>
            <span>TEACH THE METHODS</span>
            <span>SHARE THE NEXT QUESTION</span>
          </div>
        </section>

        <section className="community-section" aria-labelledby="community-heading">
          <div className="shell">
            <div className="community-intro">
              <div>
                <div className="kicker">WHAT WOULD MAKE ONQIVA DIFFERENT?</div>
                <h2 id="community-heading">
                  Keep the science rigorous and make it useful beyond the lab.
                </h2>
              </div>
              <div className="community-intro-copy">
                <p>
                  The difference should be visible in how the work is explained
                  and who can help shape what comes next.
                </p>
                <p>
                  Research teams work within constraints like available data,
                  recruitment rules, funding, and specialist language. Those
                  forces can narrow whose experiences show up or make findings
                  hard to use. That is a structural challenge, not a judgment
                  about individual researchers. Many academic teams already do
                  important community-partnered work; ONQIVA should learn from
                  that work, not claim to have invented it.
                </p>
              </div>
            </div>

            <div className="community-practices">
              <article>
                <span>01 · MAKE THE BOUNDARIES VISIBLE</span>
                <h3>Say whose data the result describes.</h3>
                <p>
                  Show who was included, whose information is missing, and what
                  cannot be generalized. A finding from a defined NHANES
                  cancer-survivor sample does not automatically describe every
                  survivor or community.
                </p>
                <a href="/#research-note">Inspect the current analysis</a>
              </article>
              <article>
                <span>02 · TEACH THE SCIENCE</span>
                <h3>Explain the choices, not just the headline.</h3>
                <p>
                  Put the question, data, model, uncertainty, and limitations in
                  plain language. Keep measured findings distinct from
                  illustrative simulations so people can learn what evidence
                  does—and does not—say.
                </p>
                <a href="/modeling">Follow the methods and source trail</a>
              </article>
              <article>
                <span>03 · SHARE THE NEXT QUESTION</span>
                <h3>Make room for lived experience to change the work.</h3>
                <p>
                  Invite survivors, caregivers, educators, and community
                  organizations to help prioritize questions and useful ways to
                  share results. In a future partnered project, that means
                  ongoing decision-making and fair support for partners—not a
                  one-time request for comments.
                </p>
                <a href="mailto:sciencelecturesyt@gmail.com?subject=ONQIVA%20community%20question">
                  Share a question or perspective
                </a>
              </article>
            </div>

            <div className="community-status">
              <div>
                <span className="evidence-label">WHERE ONQIVA IS TODAY</span>
                <h3>
                  A commitment to build with people, not a claim that it is
                  already built.
                </h3>
              </div>
              <p>
                ONQIVA is an early independent research project. This site does
                not document a standing community advisory group or a
                community-co-designed study yet. The next step is to earn
                relationships, listen before setting the next question, and
                report back on how community input changes the work.
              </p>
            </div>

            <div className="community-sources">
              <span>Guidance to learn from</span>
              <a
                href="https://www.pcori.org/engagement-research/engagement-resources/foundational-expectations"
                target="_blank"
                rel="noreferrer"
              >
                PCORI partnership expectations ↗
              </a>
              <a
                href="https://www.nimh.nih.gov/funding/grant-writing-and-application-process/points-to-consider-about-recruitment-and-retention-while-preparing-a-clinical-research-study"
                target="_blank"
                rel="noreferrer"
              >
                NIH guidance on community engagement ↗
              </a>
            </div>
          </div>
        </section>

        <section className="community-next-step">
          <div className="shell community-next-step-grid">
            <div>
              <div className="kicker">A PLACE TO START</div>
              <h2>Bring a question the research should answer better.</h2>
            </div>
            <div>
              <p>
                Patients, caregivers, students, educators, researchers, and
                community organizations can help identify what is unclear,
                missing, or most useful to learn next. ONQIVA will need to show
                how those conversations affect its work as relationships grow.
              </p>
              <a
                className="primary"
                href="mailto:sciencelecturesyt@gmail.com?subject=ONQIVA%20community%20question"
              >
                Share a community question
              </a>
            </div>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
