"use client";
import { useState } from "react";
import { avoidChoices, foodChoices, interpretFoodText, recommendFoods, type FoodTextInsight } from "../lib/food-plan";

type Context = "survivorship" | "family" | "wellness";
export default function EverydayPlanner({ context }: { context: Context }) {
  const [likes, setLikes] = useState<string[]>([]);
  const [foodText, setFoodText] = useState("");
  const [avoids, setAvoids] = useState<string[]>([]);
  const [diet, setDiet] = useState("any");
  const [quick, setQuick] = useState(false);
  const [budget, setBudget] = useState(false);
  const [otherRestriction, setOtherRestriction] = useState(false);
  const [supplement, setSupplement] = useState("skip");
  const [lab, setLab] = useState("skip");
  const [plan, setPlan] = useState<{ foods: ReturnType<typeof recommendFoods>; tasks: { when: string; text: string }[]; limited: boolean; insight: FoodTextInsight } | null>(null);
  const [done, setDone] = useState<string[]>([]);
  const [copyStatus, setCopyStatus] = useState("");
  const change = () => { setPlan(null); setDone([]); setCopyStatus(""); };
  const toggle = (value: string, values: string[], setter: (v:string[])=>void) => { setter(values.includes(value) ? values.filter(v=>v!==value) : [...values,value]); change(); };
  function generate() {
    const preferences = { likes, avoids, diet, quick, budget, otherRestriction, foodText };
    const foods = recommendFoods(preferences);
    const insight = interpretFoodText(foodText);
    const today = foodText.trim()
      ? insight.notes[0] ?? "Choose one familiar meal you entered and check its recipe or product label for ingredients, serving size, and vitamin D information."
      : foods.length
        ? "Choose one idea below that fits your routine. Check every ingredient and product label against your restrictions before trying it."
        : "Check one familiar food label for vitamin D and serving size. Keep your current eating plan while you review suitable options.";
    setPlan({ foods, limited: otherRestriction, insight, tasks: [
      { when: "Today", text: `${today}${budget ? " Compare cost per serving and use what you already have." : ""}` },
      { when: "This week", text: supplement === "yes" ? "Write down your supplement names, amounts, and label units for your care team. Keep prescribed doses unchanged." : "Make a short list of the foods you actually ate and any vitamin D amounts on their labels. You can bring it to your next visit." },
      { when: "Next appointment", text: `${lab === "yes" ? "Bring your previous vitamin D result with its date and units." : lab === "no" ? "Ask whether a vitamin D test would be useful for your circumstances." : "If you have a previous vitamin D result, bring its date and units."} ${context === "survivorship" ? "Ask your oncology team which foods fit your treatment plan and whether a dietitian can help." : context === "family" ? "Bring your family-history questions; food choices do not determine inherited cancer risk." : "Ask how your diet, medications, and health history affect your needs."}` }
    ] }); setDone([]); setCopyStatus("");
  }
  async function copy() {
    if (!plan) return;
    const text = ["My ONQIVA everyday plan", foodText.trim() ? `Foods I entered: ${foodText.trim()}` : "", plan.insight.summary, ...plan.insight.notes, ...plan.tasks.map(t=>`${t.when}: ${t.text}`), ...plan.foods.map(f=>`${f.title}: ${f.detail}`), "Educational food ideas, not a treatment or supplement prescription."].filter(Boolean).join("\n\n");
    try { await navigator.clipboard.writeText(text); setCopyStatus("Plan copied."); } catch { setCopyStatus("Copy is unavailable in this browser. You can select and copy the plan text below."); }
  }
  function reset() { setLikes([]); setFoodText(""); setAvoids([]); setDiet("any"); setQuick(false); setBudget(false); setOtherRestriction(false); setSupplement("skip"); setLab("skip"); change(); }
  return <section className="everyday-planner wellness-toolkit" id="everyday-plan">
    <div className="wellness-title"><span>YOUR EVERYDAY PLAN</span><h3>What do you like to eat?</h3><p>A few optional answers turn into food ideas and a practical checklist. Skip anything you prefer not to answer.</p></div>
    <div className="wellness-tools">
      <fieldset className="wellness-tool planner-food-entry"><legend>Your real foods and meals · optional</legend><label htmlFor="usual-foods">Type specific foods, broad patterns, or cultural and family meals</label><textarea id="usual-foods" maxLength={280} value={foodText} onChange={e=>{setFoodText(e.target.value);change();}} placeholder="Example: fried chicken with rice and beans, jollof rice, cereal, salmon, pizza, or a family recipe"/><small>{foodText.length}/280 characters</small><p>Use your own words. The planner looks for familiar food signals, keeps unrecognized meal names, and explains what it heard.</p></fieldset>
      <fieldset className="wellness-tool"><legend>Foods you enjoy · optional</legend><div className="wellness-chips">{foodChoices.map(f=><button type="button" key={f} aria-pressed={likes.includes(f)} className={likes.includes(f)?"chosen":""} onClick={()=>toggle(f,likes,setLikes)}>{f}</button>)}</div><p>No selections? We’ll show a few starting ideas.</p></fieldset>
      <fieldset className="wellness-tool"><legend>Make it fit your routine · optional</legend><label>Eating preference<select value={diet} onChange={e=>{setDiet(e.target.value);change();}}><option value="any">No preference / skip</option><option value="vegetarian">Vegetarian</option><option value="vegan">Vegan</option></select></label><label className="planner-check"><input type="checkbox" checked={quick} onChange={e=>{setQuick(e.target.checked);change();}}/>Minimal preparation</label><label className="planner-check"><input type="checkbox" checked={budget} onChange={e=>{setBudget(e.target.checked);change();}}/>Everyday budget options</label></fieldset>
      <fieldset className="wellness-tool"><legend>Foods to avoid · optional</legend><div className="wellness-chips">{avoidChoices.map(a=><button type="button" key={a} aria-pressed={avoids.includes(a)} className={avoids.includes(a)?"chosen":""} onClick={()=>toggle(a,avoids,setAvoids)}>{a}</button>)}</div><label className="planner-check"><input type="checkbox" checked={otherRestriction} onChange={e=>{setOtherRestriction(e.target.checked);change();}}/>Another allergy or a medically prescribed eating plan</label><p>This list cannot check every allergy or cross-contact risk. Check ingredients; select “another allergy” for a checklist without food suggestions.</p></fieldset>
      <fieldset className="wellness-tool"><legend>Prepare for your next visit · optional</legend><label>Do you take a vitamin D supplement?<select value={supplement} onChange={e=>{setSupplement(e.target.value);change();}}><option value="skip">Not sure / skip</option><option value="yes">Yes</option><option value="no">No</option></select></label><label>Do you have a previous vitamin D test result?<select value={lab} onChange={e=>{setLab(e.target.value);change();}}><option value="skip">Not sure / skip</option><option value="yes">Yes</option><option value="no">No</option></select></label></fieldset>
    </div>
    <div className="planner-actions"><button type="button" onClick={generate}>Build my everyday plan</button><button type="button" onClick={reset}>Clear my answers</button></div>
    <p className="planner-note">Your answers stay in this page’s memory and clear when you reload. Food ideas follow your preferences and general nutrition education; the NHANES research model does not prescribe meals or supplement doses.</p>
    {plan && <div className="wellness-snapshot" aria-live="polite"><div className="planner-heard"><span>WHAT THE PLANNER HEARD</span><h4>{plan.insight.summary}</h4>{foodText.trim() && <p className="planner-entry-quote">“{foodText.trim()}”</p>}{plan.insight.notes.map(note=><p key={note}>{note}</p>)}</div><h4>Your next steps, made manageable</h4><p>{done.length} of {plan.tasks.length} tasks completed</p><div className="planner-task-grid">{plan.tasks.map(t=><label className="planner-task" key={t.when}><span>{t.when}</span><p>{t.text}</p><span className="planner-check"><input type="checkbox" checked={done.includes(t.when)} onChange={()=>setDone(done.includes(t.when)?done.filter(d=>d!==t.when):[...done,t.when])}/>Mark done</span></label>)}</div><h4>Food ideas for your routine</h4>{plan.foods.length ? <div className="planner-task-grid">{plan.foods.map(f=><article className="planner-task" key={f.id}><h5>{f.title}</h5><p>{f.detail}</p><small>{f.match.length ? `Matched to ${f.match.join(" and ").toLowerCase()} from your answers.` : f.id === "entered-meal" ? "Built from the words you entered; verify the recipe or label." : "A starting idea because you skipped food preferences."}</small></article>)}</div> : <p>{plan.limited ? "Food suggestions are paused for your additional restriction. Ask a dietitian or care team to help choose foods that fit your plan." : "No ideas in this small collection match all your choices. Your original meal is still part of the plan—check its recipe or label, or bring it to a dietitian; your exclusions remain respected."}</p>}<button type="button" onClick={copy}>Copy my plan</button><p role="status">{copyStatus}</p></div>}
    <details className="planner-science"><summary>Why these suggestions? Explore the science</summary><p>Vitamin D is found in foods such as fatty fish and in some fortified products. This planner matches a small collection of food ideas to your choices. It does not measure vitamin D status or predict cancer outcomes.</p><p>ONQIVA’s research connects laboratory biology and mathematical modeling. Its exploratory NHANES findings are separate from this educational checklist.</p><a href="https://ods.od.nih.gov/factsheets/VitaminD-Consumer/" target="_blank" rel="noreferrer">NIH vitamin D food and nutrition information</a> · <a href="#evidence">Explore ONQIVA’s research</a></details>
  </section>;
}
