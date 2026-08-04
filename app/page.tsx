"use client";

import { FormEvent, useState } from "react";
import SurvivalLab from "./components/SurvivalLab";

type Result = {
  score: number;
  priority: string;
  factors: { label: string; points: number }[];
  allocation: { testsUsed: number; prioritizedReached: number; randomReached: number; potentiallyMissed: number };
};

const wellnessFoodOptions = ["Fatty fish", "Fortified milk", "Fortified plant milk", "Egg yolks", "Fortified cereal", "UV-exposed mushrooms"];
const wellnessQuestionOptions = ["Should I measure my vitamin D status?", "Could my medications affect vitamin D or bone health?", "What intake fits my age and health history?", "How should I balance outdoor time and sun protection?"];

function WellnessToolkit() {
  const [outdoorRoutine, setOutdoorRoutine] = useState("Mostly indoors");
  const [movementRoutine, setMovementRoutine] = useState("1–2 days per week");
  const [selectedFoods, setSelectedFoods] = useState<string[]>([]);
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);
  const [labelAmount, setLabelAmount] = useState("10");
  const [labelUnit, setLabelUnit] = useState<"mcg" | "IU">("mcg");

  const toggleItem = (item: string, values: string[], setter: (value: string[]) => void) => {
    setter(values.includes(item) ? values.filter((value) => value !== item) : [...values, item]);
  };
  const amount = Number(labelAmount) || 0;
  const convertedAmount = labelUnit === "mcg" ? amount * 40 : amount / 40;
  const foodStep = selectedFoods.length === 0
    ? "Start by checking one food you regularly eat for vitamin D on its nutrition label."
    : selectedFoods.length === 1
      ? `You selected ${selectedFoods[0]}. Explore one different food source so your routine does not depend on a single option.`
      : selectedFoods.length <= 3
        ? `You identified ${selectedFoods.length} food sources. Rotate them across the week and compare the vitamin D amount per serving.`
        : `You identified a broad mix of ${selectedFoods.length} food sources. Focus on serving sizes and how regularly they actually appear in your week.`;

  const outdoorStep = outdoorRoutine === "Mostly indoors"
    ? "Because you are mostly indoors, record that pattern and ask how season, location, skin protection, and your health history affect the testing conversation."
    : outdoorRoutine === "Some outdoor time"
      ? "You report some outdoor time. Note how often and when it happens so your clinician has more context than a simple indoor/outdoor label."
      : "You report regular outdoor time. Continue balancing outdoor activity with appropriate skin protection; outdoor time alone cannot show measured vitamin D status.";

  const movementStep = movementRoutine === "1–2 days per week"
    ? "Choose one realistic additional day for walking, resistance work, or another weight-bearing activity that fits your ability."
    : movementRoutine === "3–4 days per week"
      ? "Your movement routine is consistent. Identify which days include weight-bearing or strengthening activity and protect that schedule."
      : "You report movement on five or more days. Focus on variety, recovery, and including strength or weight-bearing activity—not simply adding more days.";

  const labelStep = amount > 0
    ? `Your label entry of ${amount.toLocaleString()} ${labelUnit} equals ${convertedAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })} ${labelUnit === "mcg" ? "IU" : "mcg"}. Confirm that the number is per serving and note how many servings you actually use.`
    : "Enter the vitamin D amount from a food or supplement label, then use the conversion to prepare a clearer checkup question.";

  const actionSteps = [foodStep, outdoorStep, movementStep, labelStep];

  const generatedQuestions = [
    outdoorRoutine === "Mostly indoors"
      ? "Given that I spend most of my time indoors, would reviewing or measuring my vitamin D status be useful for me?"
      : outdoorRoutine === "Some outdoor time"
        ? "Does my amount of outdoor time, season, location, or sun-protection routine change what you would recommend discussing about vitamin D?"
        : "Even with regular outdoor time, are there personal factors that could make a vitamin D measurement worth discussing?",
    selectedFoods.length < 2
      ? "Which vitamin-D-containing or fortified foods would fit my usual diet?"
      : `I regularly use ${selectedFoods.slice(0, 3).join(", ")}. Should I review the serving sizes or label amounts more carefully?`,
    movementRoutine === "1–2 days per week"
      ? "What type of weight-bearing or strengthening activity would be appropriate for my bone health and current ability?"
      : "Does my current movement routine include enough weight-bearing or strengthening activity for my bone-health needs?",
    amount > 0
      ? `My label shows ${amount.toLocaleString()} ${labelUnit} of vitamin D per serving. How should I interpret that alongside my diet, medications, and health history?`
      : "Could any of my medications, supplements, or health conditions affect vitamin D or bone health?"
  ];
  const visitQuestions = selectedQuestions.length ? selectedQuestions : generatedQuestions;
  const guideHeadline = selectedFoods.length >= 3 && outdoorRoutine === "Regular outdoor time" && movementRoutine === "5+ days per week"
    ? "Your answers show several established wellness habits—review the details, not just the count"
    : selectedFoods.length >= 2 && movementRoutine !== "1–2 days per week"
      ? "You have a useful foundation with a few details worth strengthening"
      : "Your personalized starting plan for this week and your next checkup";

  return (
    <div className="wellness-toolkit">
      <div className="wellness-title"><span>VITAMIN D WELLNESS SNAPSHOT</span><h4>Build your everyday starting point</h4><p>Your selections update the snapshot below.</p></div>

      <div className="wellness-tools">
        <section className="wellness-tool">
          <b>01 · ROUTINE BUILDER</b>
          <label>Typical outdoor routine<select value={outdoorRoutine} onChange={(event) => setOutdoorRoutine(event.target.value)}><option>Mostly indoors</option><option>Some outdoor time</option><option>Regular outdoor time</option></select></label>
          <label>Movement or weight-bearing activity<select value={movementRoutine} onChange={(event) => setMovementRoutine(event.target.value)}><option>1–2 days per week</option><option>3–4 days per week</option><option>5+ days per week</option></select></label>
        </section>

        <section className="wellness-tool food-tool">
          <b>02 · FOOD SOURCE EXPLORER</b>
          <p>Select sources that are already part of your routine.</p>
          <div className="wellness-chips">{wellnessFoodOptions.map((food) => <button key={food} className={selectedFoods.includes(food) ? "chosen" : ""} aria-pressed={selectedFoods.includes(food)} onClick={() => toggleItem(food, selectedFoods, setSelectedFoods)}>{food}</button>)}</div>
        </section>

        <section className="wellness-tool question-tool">
          <b>03 · BUILD MY QUESTIONS</b>
          <p>Choose questions to save in your snapshot.</p>
          <div className="question-options">{wellnessQuestionOptions.map((question) => <label key={question}><input type="checkbox" checked={selectedQuestions.includes(question)} onChange={() => toggleItem(question, selectedQuestions, setSelectedQuestions)} /><span>{question}</span></label>)}</div>
        </section>

        <section className="wellness-tool label-tool">
          <b>04 · LABEL READER</b>
          <p>Convert the vitamin D amount shown on a food or supplement label.</p>
          <div><input aria-label="Vitamin D label amount" type="number" min="0" value={labelAmount} onChange={(event) => setLabelAmount(event.target.value)} /><select aria-label="Vitamin D label unit" value={labelUnit} onChange={(event) => setLabelUnit(event.target.value as "mcg" | "IU")}><option value="mcg">mcg</option><option value="IU">IU</option></select></div>
          <strong>{convertedAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })} {labelUnit === "mcg" ? "IU" : "mcg"}</strong>
          <small>1 mcg vitamin D = 40 IU</small>
        </section>
      </div>

      <section className="wellness-snapshot" aria-live="polite">
        <div><span>YOUR VITAMIN D ACTION GUIDE</span><h4>{guideHeadline}</h4></div>
        <div className="snapshot-grid"><p><b>Outdoor routine</b>{outdoorRoutine}</p><p><b>Movement</b>{movementRoutine}</p><p><b>Checkup questions ready</b>{visitQuestions.length}</p></div>
        <div className="action-guide"><b>Practical next steps</b>{actionSteps.map((step, index) => <p key={step}><span>{index + 1}</span>{step}</p>)}</div>
        <div className="saved-questions"><b>{selectedQuestions.length ? "Your saved questions for your next checkup" : "Useful questions for your next checkup"}</b>{visitQuestions.map((question) => <p key={question}>→ {question}</p>)}</div>
      </section>
    </div>
  );
}

export default function Home() {
  const [capacity, setCapacity] = useState(20);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [contextMode, setContextMode] = useState<"survivorship" | "family" | "wellness">("survivorship");

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
        <div className="navlinks"><a href="#prototype">Prototype</a><a href="/modeling">Modeling</a><a href="#evidence">Data</a><a href="#next">Roadmap</a><a href="/about">About</a></div>
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
          <div className="section-head"><div><div className="kicker">THE ONQIVA PATIENT JOURNEY</div><h2>One patient. One constrained clinic.<br />A clearer testing decision.</h2></div><p>Explore how ONQIVA turns patient context and clinic capacity into a transparent, explainable testing-priority workflow.</p></div>
          <div className="context-chooser">
            <div className="context-intro"><span>START HERE</span><h3>Choose your context</h3><p>ONQIVA adapts the experience without treating every visitor as an oncology patient.</p></div>
            <div className="context-cards" role="group" aria-label="Choose your health context">
              <button className={contextMode === "survivorship" ? "selected" : ""} aria-pressed={contextMode === "survivorship"} onClick={() => { setContextMode("survivorship"); setResult(null); }}><b>01</b><span>During or after cancer care</span><small>Explore the survivorship testing-priority workflow.</small></button>
              <button className={contextMode === "family" ? "selected" : ""} aria-pressed={contextMode === "family"} onClick={() => { setContextMode("family"); setResult(null); }}><b>02</b><span>Family history or elevated concern</span><small>Organize context for a more informed clinical conversation.</small></button>
              <button className={contextMode === "wellness" ? "selected" : ""} aria-pressed={contextMode === "wellness"} onClick={() => { setContextMode("wellness"); setResult(null); }}><b>03</b><span>General health and prevention</span><small>Explore vitamin D, bone health, and everyday wellness.</small></button>
            </div>
          </div>

          {contextMode === "survivorship" ? <>
          <div className="demo-grid">
            <article className="patient-card">
              <div className="card-top"><div className="avatar">MS</div><div><span>FICTIONAL SURVIVOR PROFILE</span><h3>Maria Santos, 52</h3><p>Breast cancer survivor · 5 years post-treatment</p></div></div>
              <div className="details"><div><small>OUTDOOR ACTIVITY</small><strong>Limited · ~1 hr/week</strong></div><div><small>BODY MASS INDEX</small><strong>31 kg/m²</strong></div><div><small>DIETARY VITAMIN D</small><strong>Low reported intake</strong></div><div><small>SUPPLEMENT USE</small><strong>None reported</strong></div></div>
              <div className="context"><b>Clinic context</b><p>Confirmatory vitamin D testing is limited this month. Which survivors should be considered first?</p></div>
              <button onClick={() => analyze()} disabled={loading}>{loading ? "Analyzing fictional profile…" : "Analyze testing priority"}<span>→</span></button>
              <small className="disclaimer">Research decision-model output. Built for transparent testing-priority analysis; clinical interpretation remains with qualified professionals.</small>
            </article>

            <article className={`result-card ${result ? "active" : ""}`} aria-live="polite">
              {!result ? <div className="empty"><div className="pulse"><i /></div><span>AWAITING SIMULATION</span><h3>Transparent by design.</h3><p>Run the profile to see how individual factors shape an explainable priority score and clinic-level allocation comparison.</p></div> : <>
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
          </> : <div className="context-pathway">
            <div className="pathway-copy">
              <div className="kicker">{contextMode === "family" ? "FAMILY HISTORY & ELEVATED CONCERN" : "GENERAL HEALTH & PREVENTION"}</div>
              <h3>{contextMode === "family" ? "Turn concern into a clearer conversation." : "Build the foundations that support long-term health."}</h3>
              <p>{contextMode === "family" ? "This pathway helps visitors organize family patterns, personal health context, and focused questions for a more productive conversation with a qualified professional." : "This pathway connects vitamin D with its established roles in calcium absorption and bone health while emphasizing balanced, practical habits."}</p>
              <a href={contextMode === "family" ? "mailto:sciencelecturesyt@gmail.com?subject=ONQIVA%20family-history%20pathway" : "#evidence"}>{contextMode === "family" ? "Help shape this pathway →" : "Explore the evidence →"}</a>
            </div>
            {contextMode === "family" ? <div className="pathway-panel">
              <span>CONVERSATION BUILDER</span>
              <h4>Information worth organizing</h4>
              <ul><li>Which relatives were affected and at what ages</li><li>Personal symptoms, diagnoses, and bone-health concerns</li><li>Current medications and supplement use</li><li>Any known vitamin D measurements</li><li>Questions about screening or genetic counseling</li></ul>
              <p className="pathway-note">This pathway organizes family-history context for stronger clinical conversations and future research-model development.</p>
            </div> : <WellnessToolkit />}
          </div>}
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

      <section className="research shell" id="next"><div className="kicker">WHAT’S NEXT · A MULTISCALE RESEARCH PROGRAM</div><h2>One company.<br />Four connected systems.</h2><div className="phases"><article><b>01</b><span>COMPLETED</span><h3>ONQIVA Outcomes</h3><p>Expand the current NHANES survival work into a documented, externally reviewable outcomes-research program.</p></article><article><b>02</b><span>NOW</span><h3>ONQIVA Atlas</h3><p>Build the gene-pathway platform connecting vitamin-D biology, osteosarcoma signals, and cancer dependencies.</p></article><article><b>03</b><h3>ONQIVA Bench</h3><p>Release an open-source ML benchmark for reproducibility, calibration, subgroup evaluation, and model stress testing.</p></article><article><b>04</b><h3>ONQIVA Edge</h3><p>Translate models that survive validation into a transparent, privacy-preserving offline clinic research system.</p></article></div></section>

      <section className="founder-preview"><div className="shell founder-preview-grid"><div><div className="kicker">ABOUT THE FOUNDER</div><h2>Research built from lived experience—and learned from the inside out.</h2></div><div><p><b>Gerbenn Seraphin</b> is an engineering student, emerging computational biomedical researcher, and founder of ONQIVA. His work connects published vitamin D and cancer research with independent survival modeling, machine learning, and accessible biomedical software.</p><a href="/about">Meet the founder →</a></div></div></section>

      <section className="work-with-us"><div className="shell work-grid"><div><div className="kicker">WORK WITH ONQIVA</div><h2>Help turn a promising research program into evidence people can use.</h2></div><div><p>ONQIVA is seeking one serious research or survivorship-program collaborator to review the model, refine the clinical question, and help define an externally supervised pilot. The broader circle includes data and ML collaborators, nonprofit and philanthropic partners, and early mission-aligned funders.</p><p>You do not need to arrive with every answer. You should care about reproducibility, honest communication, and patient dignity. If direct collaboration is not the right fit, a referral to one exceptional student who is strong in mathematics, statistics, computational biology, or software engineering could still move this work forward.</p><a className="primary" href="mailto:sciencelecturesyt@gmail.com?subject=Reviewing%20or%20piloting%20ONQIVA">Discuss a research pilot →</a></div></div></section>
      <footer className="shell"><a className="brand" href="#top"><span>O</span> ONQIVA</a><p><a href="mailto:sciencelecturesyt@gmail.com">sciencelecturesyt@gmail.com</a></p><p>Real NHANES analysis · Synthetic clinic simulation · Research use</p></footer>
    </main>
  );
}
