"use client";

import { FormEvent, useState } from "react";
import SurvivalLab from "./components/SurvivalLab";

type Result = {
  score: number;
  priority: string;
  factors: { label: string; points: number }[];
  allocation: { testsUsed: number; prioritizedReached: number; randomReached: number; potentiallyMissed: number };
};

export default function Home() {
  const [capacity, setCapacity] = useState(20);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  async function analyze(event?: FormEvent) {
    event?.preventDefault();
    setLoading(true);
    const response = await fetch("/api/simulate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ age: 52, bmi: 31, outdoorHours: 1, dietaryVitaminD: 1, supplementUse: false, comorbidities: 2, testingCapacity: capacity }),
    });
    setResult(await response.json());
    setLoading(false);
  }

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top"><span>O</span> ONQIVA</a>
        <div className="navlinks"><a href="#prototype">Prototype</a><a href="#model">Model</a><a href="#evidence">Data</a><a href="#next">What’s Next</a><a href="#about">About</a></div>
        <a className="nav-cta" href="mailto:sciencelecturesyt@gmail.com">Collaborate</a>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><i /> Explainable oncology decision research</div>
        <h1>Use every diagnostic test<br /><em>where it matters most.</em></h1>
        <p className="hero-copy">ONQIVA explores how transparent computational models could help cancer-survivorship programs prioritize limited biomarker testing—beginning with vitamin D vulnerability.</p>
        <div className="hero-actions"><a className="primary" href="#prototype">Experience the prototype <b>→</b></a><a className="secondary" href="#next">View what’s next</a></div>
        <div className="trustline"><span>REAL NHANES ANALYSIS</span><span>SYNTHETIC CLINIC SIMULATION</span><span>RESEARCH USE</span></div>
      </section>

      <section className="prototype" id="prototype">
        <div className="shell">
          <div className="section-head"><div><div className="kicker">THE ONQIVA PATIENT JOURNEY</div><h2>One patient. One constrained clinic.<br />A clearer testing decision.</h2></div><p>Experience a fictional scenario designed to demonstrate the product logic—not provide medical advice.</p></div>
          <div className="demo-grid">
            <article className="patient-card">
              <div className="card-top"><div className="avatar">MS</div><div><span>FICTIONAL SURVIVOR PROFILE</span><h3>Maria Santos, 52</h3><p>Breast cancer survivor · 5 years post-treatment</p></div></div>
              <div className="details"><div><small>OUTDOOR ACTIVITY</small><strong>Limited · ~1 hr/week</strong></div><div><small>BODY MASS INDEX</small><strong>31 kg/m²</strong></div><div><small>DIETARY VITAMIN D</small><strong>Low reported intake</strong></div><div><small>SUPPLEMENT USE</small><strong>None reported</strong></div></div>
              <div className="context"><b>Clinic context</b><p>Confirmatory vitamin D testing is limited this month. Which survivors should be considered first?</p></div>
              <button onClick={() => analyze()} disabled={loading}>{loading ? "Analyzing fictional profile…" : "Analyze testing priority"}<span>→</span></button>
              <small className="disclaimer">Simulation only. This does not diagnose deficiency or recommend treatment.</small>
            </article>

            <article className={`result-card ${result ? "active" : ""}`} aria-live="polite">
              {!result ? <div className="empty"><div className="pulse"><i /></div><span>AWAITING SIMULATION</span><h3>Transparent by design.</h3><p>Run the fictional profile to see an explainable priority result and a clinic-level allocation comparison.</p></div> : <>
                <div className="result-label">SIMULATED OUTPUT</div>
                <div className="score-row"><div className="score-ring" style={{"--score": `${result.score * 3.6}deg`} as React.CSSProperties}><div><strong>{result.score}</strong><small>/ 100</small></div></div><div><span className="priority">{result.priority}</span><h3>Consider for confirmatory testing</h3><p>This score ranks a fictional profile; it does not estimate a diagnosis.</p></div></div>
                <div className="factor-list"><span>Leading simulated contributors</span>{result.factors.map((factor) => <div key={factor.label}><i /><p>{factor.label}</p><b>+{factor.points}</b></div>)}</div>
                <div className="next-step"><span>MODEL ACTION</span><p>Include this fictional survivor in the clinic allocation queue.</p></div>
              </>}
            </article>
          </div>

          <div className="allocation">
            <div className="allocation-copy"><div className="kicker">CLINIC-LEVEL IMPACT</div><h2>100 survivors.<br />Only <em>{capacity} tests.</em></h2><p>Adjust monthly capacity to explore how a transparent ranking strategy could be compared with random allocation.</p><label htmlFor="capacity">Available tests <b>{capacity}</b></label><input id="capacity" type="range" min="5" max="50" value={capacity} onChange={(event) => { setCapacity(Number(event.target.value)); if (result) setResult(null); }} /><button className="recalculate" onClick={() => analyze()}>Run allocation simulation</button></div>
            <div className="allocation-viz">
              <div className="people" aria-label={`${capacity} of 100 fictional patients selected for testing`}>{Array.from({length: 100}, (_, index) => <i key={index} className={index < capacity ? "selected" : ""} />)}</div>
              <div className="metrics"><div><span>TESTS USED</span><strong>{result?.allocation.testsUsed ?? capacity}<small> / 100</small></strong></div><div><span>SIMULATED PRIORITY CASES REACHED</span><strong>{result?.allocation.prioritizedReached ?? "—"}</strong></div><div><span>RANDOM ALLOCATION</span><strong>{result?.allocation.randomReached ?? "—"}</strong></div></div>
              <p>Illustrative fictional population. Outcomes are generated by transparent simulation assumptions, not clinical validation.</p>
            </div>
          </div>
        </div>
      </section>

      <SurvivalLab />

      <section className="evidence shell" id="evidence">
        <div className="section-head light-head"><div><div className="kicker">DATA &amp; EVIDENCE</div><h2>Real research data.<br />Clearly labeled simulation.</h2></div><p>ONQIVA separates the public-data research track from the fictional experience used to demonstrate future product logic.</p></div>
        <div className="evidence-grid">
          <article className="evidence-card real"><div className="status">REAL PUBLIC DATA · EXPLORATORY MODEL</div><h3>NHANES research track</h3><p>The current reproducible analysis joins official 2017–2018 demographics, measured serum vitamin D, self-reported cancer history, and linked mortality through 2019.</p><p>Every displayed model number now comes from the rebuilt pipeline. The result remains exploratory because follow-up is short, events are limited, and observational associations cannot establish treatment benefit.</p><a href="#model">Inspect the model and source trail →</a></article>
          <article className="evidence-card simulated"><div className="status">PRODUCT CONCEPT · SIMULATED CLINIC WORKFLOW</div><h3>Decision-workflow prototype</h3><p>This interactive experience translates the research into a concrete operational question: when testing capacity is limited, how could an explainable system help a clinic compare priorities and allocate resources?</p><p>The current clinic scenario is synthetic by design, making it safe to demonstrate, critique, and improve with researchers and funders. The next milestone is to define a real pilot protocol with an oncology or survivorship collaborator before connecting validated predictions to clinical workflow.</p><a href="#prototype">Experience the workflow →</a></article>
        </div>
      </section>

      <section className="research shell" id="next"><div className="kicker">WHAT’S NEXT · A MULTISCALE RESEARCH PROGRAM</div><h2>One company.<br />Four connected systems.</h2><div className="phases"><article><b>01</b><span>NOW</span><h3>ONQIVA Outcomes</h3><p>Expand the current NHANES survival work into a documented, externally reviewable outcomes-research program.</p></article><article><b>02</b><h3>ONQIVA Atlas</h3><p>Build the gene-pathway platform connecting vitamin-D biology, osteosarcoma signals, and cancer dependencies.</p></article><article><b>03</b><h3>ONQIVA Bench</h3><p>Release an open-source ML benchmark for reproducibility, calibration, subgroup evaluation, and model stress testing.</p></article><article><b>04</b><h3>ONQIVA Edge</h3><p>Translate models that survive validation into a transparent, privacy-preserving offline clinic research system.</p></article></div></section>

      <section className="mission" id="about"><div className="shell mission-grid"><div><div className="kicker">ABOUT THE FOUNDER</div><h2>A personal path into<br />computational oncology.</h2><div className="bio-facts"><span>ENGINEERING STUDENT</span><span>VITAMIN D &amp; CANCER RESEARCHER</span><span>OPEN-SOURCE BUILDER</span></div></div><div className="bio-copy"><p><b>Gerbenn Seraphin</b> is an engineering student and emerging computational biomedical researcher. His lived experience navigating instability while balancing work, school, and research shaped a commitment to building scientific tools that are rigorous, transparent, and accessible.</p><p>That experience also shaped how he thinks about scientific ownership. Gerbenn chose to learn the mathematics, Python, survival analysis, machine learning, and data-engineering process required to construct and explain his own computational work.</p><p>His scientific foundation began with vitamin D and cancer biology. He is first author of the peer-reviewed 2023 review <i>The impact of vitamin D on cancer</i> and a coauthor of an osteosarcoma preprint examining vitamin-D-related mechanisms. ONQIVA extends that foundation into reproducible public-data analysis, transparent computational modeling, and accessible biomedical tools that others can inspect and learn from.</p><div className="publication-list"><div><small>PEER-REVIEWED PUBLICATION · FIRST AUTHOR</small><a href="https://pubmed.ncbi.nlm.nih.gov/37054849/" target="_blank" rel="noreferrer">The impact of vitamin D on cancer <span>J Steroid Biochem Mol Biol, 2023 →</span></a></div><div><small>BIORXIV PREPRINT · COAUTHOR</small><a href="https://pubmed.ncbi.nlm.nih.gov/36711643/" target="_blank" rel="noreferrer">Vitamin D inhibits osteosarcoma… <span>Preprint; not peer reviewed →</span></a></div></div></div></div></section>

      <section className="work-with-us"><div className="shell work-grid"><div><div className="kicker">WORK WITH ONQIVA</div><h2>Help turn a promising research program into evidence people can use.</h2></div><div><p>ONQIVA is seeking one serious research or survivorship-program collaborator to review the model, refine the clinical question, and help define an externally supervised pilot. The broader circle includes data and ML collaborators, nonprofit and philanthropic partners, and early mission-aligned funders.</p><p>You do not need to arrive with every answer. You should care about reproducibility, honest communication, and patient dignity. If direct collaboration is not the right fit, a referral to one exceptional student who is strong in mathematics, statistics, computational biology, or software engineering could still move this work forward.</p><a className="primary" href="mailto:sciencelecturesyt@gmail.com?subject=Reviewing%20or%20piloting%20ONQIVA">Discuss a research pilot →</a></div></div></section>
      <footer className="shell"><a className="brand" href="#top"><span>O</span> ONQIVA</a><p><a href="mailto:sciencelecturesyt@gmail.com">sciencelecturesyt@gmail.com</a></p><p>Real NHANES analysis · Synthetic clinic simulation · Research use</p></footer>
    </main>
  );
}
