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
            I teach biomedical ideas in plain language and bring that same
            approach to ONQIVA: show who was studied, how a result was made, and
            where the evidence stops. People closest to a question should be
            able to challenge the way it is asked.
          </p>
          <div className="modeling-status">
            <span>SHOW WHO WAS STUDIED</span>
            <span>TEACH THE METHODS</span>
            <span>LISTEN TO COMMUNITY QUESTIONS</span>
          </div>
        </section>

        <section className="community-section" aria-labelledby="community-heading">
          <div className="shell">
            <div className="community-intro">
              <div>
                <div className="kicker">WHY THE COMMUNITY WORK MATTERS</div>
                <h2 id="community-heading">
                  Make the research understandable beyond the lab.
                </h2>
              </div>
              <div className="community-intro-copy">
                <p>
                  A paper can be rigorous and still leave people wondering
                  whether its findings describe them. I use teaching and public
                  explanations to make those questions easier to ask.
                </p>
                <p>
                  Research teams work within constraints like available data,
                  recruitment rules, funding, and specialist language. Those
                  forces can narrow whose experiences show up or make findings
                  hard to use. ONQIVA names those boundaries in its own work
                  and opens the methods so readers can see the decisions behind
                  a result.
                </p>
              </div>
            </div>

            <div className="community-practices">
              <article>
                <span>01 · SHOW THE STUDY POPULATION</span>
                <h3>Who does the result describe?</h3>
                <p>
                  The NHANES analysis names its 515-person cancer-survivor
                  cohort, 35 observed deaths, follow-up window, and limits. A
                  result from that defined sample cannot speak for every
                  survivor or community.
                </p>
                <a href="/#research-note">Inspect the current analysis</a>
              </article>
              <article>
                <span>02 · TEACH THE SCIENCE</span>
                <h3>Show how the conclusion was reached.</h3>
                <p>
                  The modeling page shows the data source, assumptions, and
                  uncertainty behind the analysis. The clinic exercise is
                  clearly labeled as a simulation, so readers can question its
                  choices without mistaking it for a clinical result.
                </p>
                <a href="/modeling">Follow the methods and source trail</a>
              </article>
              <article>
                <span>03 · LISTEN AND DISCUSS</span>
                <h3>Bring questions back into the research.</h3>
                <p>
                  My community-facing work includes explaining biomedical
                  ideas and listening to what people want the research to
                  answer. Survivors, caregivers, students, and educators can
                  also send a question directly through this site.
                </p>
                <a href="mailto:sciencelecturesyt@gmail.com?subject=ONQIVA%20community%20question">
                  Share a question or perspective
                </a>
              </article>
            </div>

            <div className="community-status">
              <div>
                <span className="evidence-label">THE APPROACH IN PRACTICE</span>
                <h3>
                  Teaching and listening belong in the research process.
                </h3>
              </div>
              <p>
                The work on this site puts a public research record beside
                plain-language explanations. Community conversations keep the
                focus on what people need to understand, whose data is missing,
                and which questions deserve closer study.
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
                community organizations can point out what is unclear or
                missing. Tell me which part of the research record needs a
                better explanation, or what question I should examine next.
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
