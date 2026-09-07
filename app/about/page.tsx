export default function AboutPage() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="/"><span>O</span> ONQIVA</a>
        <div className="navlinks"><a href="/">Home</a><a href="/modeling">Modeling</a><a href="/#evidence">Data</a><a href="/#next">Roadmap</a><a className="active-link" href="/about">About</a></div>
        <a className="nav-cta" href="mailto:sciencelecturesyt@gmail.com">Collaborate</a>
      </nav>

      <section className="page-hero shell">
        <div className="eyebrow"><i /> ABOUT THE FOUNDER</div>
        <h1>A personal path into<br /><em>computational oncology.</em></h1>
        <p className="hero-copy">ONQIVA was built from published vitamin D and cancer research, independent computational work, and a commitment to making advanced biomedical modeling more transparent and accessible.</p>
      </section>

      <section className="founder-page">
        <div className="shell founder-story">
          <aside>
            <div className="founder-mark">GS</div>
            <h2>Gerbenn Seraphin</h2>
            <p>Founder of ONQIVA</p>
            <div className="bio-facts"><span>ENGINEERING STUDENT</span><span>COMPUTATIONAL BIOMEDICAL RESEARCHER</span><span>OPEN-SOURCE BUILDER</span></div>
          </aside>
          <article className="bio-copy">
            <p><b>Gerbenn Seraphin</b> is an engineering student and emerging computational biomedical researcher. He graduated high school at 15 and began university young. His path later included foster care, housing instability, and an unresolved transcript barrier that complicated his transfer plans. He continued his education at Mission College while building research he could explain, demonstrate, and invite others to examine. These experiences shaped his commitment to making scientific tools rigorous, transparent, and accessible.</p>
            <p>That experience also shaped how he thinks about scientific ownership. Gerbenn worked through the modeling mathematics by hand first, prepared and entered the data, then translated that reasoning into Python, survival analysis, machine learning, and data-engineering workflows. Code and AI extend his mathematical reasoning by helping him test assumptions and compare models.</p>
            <p>His scientific foundation began with vitamin D and cancer biology. He is first author of the peer-reviewed 2023 review <i>The impact of vitamin D on cancer</i> and a coauthor of the peer-reviewed 2023 osteosarcoma study examining vitamin-D-related mechanisms. His research experience at the University of Miami also included hands-on laboratory work with proteins, alongside data analysis and scientific writing. ONQIVA extends that foundation into reproducible public-data analysis, transparent computational modeling, and accessible biomedical tools that others can inspect and learn from.</p>
            <div className="publication-list">
              <div><small>PEER-REVIEWED PUBLICATION · FIRST AUTHOR</small><a href="https://pubmed.ncbi.nlm.nih.gov/37054849/" target="_blank" rel="noreferrer">The impact of vitamin D on cancer <span>J Steroid Biochem Mol Biol, 2023 →</span></a></div>
              <div><small>PEER-REVIEWED PUBLICATION · COAUTHOR</small><a href="https://doi.org/10.3389/fonc.2023.1188641" target="_blank" rel="noreferrer">Vitamin D inhibits osteosarcoma… <span>Frontiers in Oncology, 2023 →</span></a></div>
            </div>
          </article>
        </div>
      </section>

      <section className="founder-vision"><div className="shell work-grid"><div><div className="kicker">WHY ONQIVA</div><h2>Build the work.<br />Understand the work.<br />Make it useful.</h2></div><div><p>ONQIVA is a research-first computational health startup developing explainable oncology modeling, molecular research infrastructure, and accessible biomedical decision systems.</p><a className="primary" href="mailto:sciencelecturesyt@gmail.com?subject=Collaborating%20with%20ONQIVA">Work with ONQIVA →</a></div></div></section>
      <footer className="shell"><a className="brand" href="/"><span>O</span> ONQIVA</a><p><a href="mailto:sciencelecturesyt@gmail.com">sciencelecturesyt@gmail.com</a></p><p>Research-first computational health startup</p></footer>
    </main>
  );
}
