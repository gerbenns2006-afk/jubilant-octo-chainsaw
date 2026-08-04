export default function ModelingPage() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="/"><span>O</span> ONQIVA</a>
        <div className="navlinks"><a href="/">Home</a><a className="active-link" href="/modeling">Modeling</a><a href="/#evidence">Data</a><a href="/#next">Roadmap</a><a href="/about">About</a></div>
        <a className="nav-cta" href="mailto:sciencelecturesyt@gmail.com">Collaborate</a>
      </nav>

      <section className="page-hero modeling-hero shell">
        <div className="eyebrow"><i /> THE MODELING BEHIND ONQIVA</div>
        <h1>From population outcomes<br />to <em>molecular vulnerability.</em></h1>
        <p className="hero-copy">ONQIVA combines data-derived survival analysis, explainable decision simulation, and an expanding molecular machine-learning program.</p>
        <div className="modeling-status"><span>BUILT · OUTCOMES</span><span>PROTOTYPED · ALLOCATION</span><span>NOW · MOLECULAR ATLAS</span></div>
      </section>

      <section className="modeling-body">
        <div className="shell">
          <div className="modeling-intro"><div><div className="kicker">WHERE MACHINE LEARNING ENTERS</div><h2>Three connected modeling layers.</h2></div><p>The platform separates what has been fitted from public data, what currently demonstrates decision logic, and what is being developed next.</p></div>
          <div className="modeling-layers">
            <article className="complete"><b>01</b><span>COMPLETED FOUNDATION</span><h3>Data-derived survival modeling</h3><p>ONQIVA Outcomes uses joined NHANES demographics, measured serum vitamin D, cancer history, and linked mortality data. Cox proportional-hazards modeling estimates how covariates modify relative hazard and dynamically generates survival curves.</p><ul><li>Reproducible public-data pipeline</li><li>Multivariable feature processing</li><li>Interactive Cox survival inference</li><li>Model diagnostics and subgroup framing</li></ul></article>
            <article><b>02</b><span>WORKING PROTOTYPE</span><h3>Explainable decision modeling</h3><p>The clinic simulator converts patient context into a transparent testing-priority score and compares model-guided allocation with random allocation under limited capacity.</p><ul><li>Human-readable factor contributions</li><li>Capacity-constrained allocation</li><li>Scenario-based sensitivity testing</li><li>Clear separation from the fitted survival model</li></ul></article>
            <article className="now"><b>03</b><span>BUILDING NOW</span><h3>Molecular machine learning</h3><p>ONQIVA Atlas will connect vitamin-D-pathway activity with osteosarcoma expression patterns, clinical outcomes, and cancer-dependency evidence to prioritize molecular vulnerabilities for investigation.</p><ul><li>Pathway-activity feature engineering</li><li>Molecular subgroup discovery</li><li>Regularized and nonlinear survival comparisons</li><li>Dependency and vulnerability ranking</li></ul></article>
          </div>
        </div>
      </section>

      <section className="modeling-pipeline"><div className="shell"><div className="kicker">COMPUTATIONAL PIPELINE</div><h2>Evidence moves through a reproducible system.</h2><div className="big-pipeline"><div><b>1</b><span>PUBLIC DATA</span><p>Documented health, molecular, clinical, and dependency sources.</p></div><i>→</i><div><b>2</b><span>FEATURE ENGINEERING</span><p>Covariates, pathway scores, molecular signatures, and quality control.</p></div><i>→</i><div><b>3</b><span>MODEL TRAINING</span><p>Statistical baselines, regularization, nonlinear comparison, and validation.</p></div><i>→</i><div><b>4</b><span>EXPLAINABLE OUTPUT</span><p>Survival estimates, subgroup structure, calibrated uncertainty, and ranked hypotheses.</p></div></div></div></section>

      <section className="modeling-cta"><div className="shell work-grid"><div><div className="kicker">EXPERIENCE THE MODEL</div><h2>Keep the science detailed.<br />Keep the interface understandable.</h2></div><div><p>The interactive survival model and testing-priority workflow remain on the homepage so visitors can experience the system before studying its methods.</p><a className="primary" href="/#model">Open the interactive model →</a></div></div></section>
      <footer className="shell"><a className="brand" href="/"><span>O</span> ONQIVA</a><p><a href="mailto:sciencelecturesyt@gmail.com">sciencelecturesyt@gmail.com</a></p><p>Population · Decision · Molecular modeling</p></footer>
    </main>
  );
}
