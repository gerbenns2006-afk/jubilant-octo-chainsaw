import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";

const forecastRows = [
  {
    label: "Primary directional forecast",
    title: "Lower stimulus-linked PLCγ2 activation",
    copy:
      "If the purchased material was PBMCs and the assay measured phospho-signaling, Alzheimer’s donor cells are predicted to show lower PLCγ2 activation than age-matched control cells under comparable stimulation.",
  },
  {
    label: "Cell-specific secondary forecast",
    title: "STAT1 / STAT5 effects vary by cell type and stimulus",
    copy:
      "The published study found these signals depended on both the immune-cell subset and the stimulus. The model therefore predicts an interaction, not one uniform shift across every cell.",
  },
  {
    label: "Falsification check",
    title: "No reproducible adjusted difference",
    copy:
      "If the signal disappears across donors, batches, or a held-out validation set, the pilot will not support a robust disease-linked predictor. A null result is a useful model check.",
  },
];

export default function CellWorkPage() {
  return (
    <main id="top">
      <a className="skip-link" href="#cell-content">
        Skip to content
      </a>
      <SiteNav active="cellwork" />

      <div id="cell-content">
        <section className="page-hero shell neuro-hero">
          <div className="eyebrow">ALZHEIMER’S SAMPLE CULTURE · PILOT RECORD</div>
          <h1>
            From completed cell tests
            <br />
            <em>to a science-based forecast.</em>
          </h1>
          <p className="hero-copy">
            This record starts with the work performed: Alzheimer’s disease
            research samples were purchased and cultured, and pilot tests were
            completed. The next step is to connect the original readouts to a
            transparent, literature-informed prediction.
          </p>
          <div className="modeling-status">
            <span>COMPLETED PILOT · CULTURE TESTS</span>
            <span>ALZHEIMER’S SAMPLE-BASED</span>
            <span>FORECAST IS CONDITIONAL ON THE ASSAY</span>
          </div>
        </section>

        <section className="pilot-record">
          <div className="shell">
            <div className="section-head">
              <div>
                <div className="kicker">THE EXPERIMENT RECORD</div>
                <h2>What the pilot establishes today</h2>
              </div>
              <p>
                The work is recorded as performed. This reconstruction keeps
                the biological interpretation attached to what the samples and
                assays can support.
              </p>
            </div>

            <div className="record-grid">
              <article>
                <span className="evidence-label">COMPLETED PILOT WORK</span>
                <h3>Purchased Alzheimer’s research samples were cultured and tested.</h3>
                <p>
                  I purchased Alzheimer’s research samples through Sanguine Bio
                  and completed cell-culture tests using an incubator. This page
                  records that work as a completed pilot study.
                </p>
              </article>
              <article>
                <span className="evidence-label">SAMPLE RECORD</span>
                <h3>The vendor catalog has several sample formats.</h3>
                <p>
                  Sanguine Bio lists Alzheimer’s PBMCs, whole blood, plasma,
                  serum, and cerebrospinal fluid. The catalog is not the order
                  record, so the exact product, donor lots, and cell identity
                  must come from the purchase documentation.
                </p>
                <a
                  href="https://sanguinebio.com/product-condition/alzheimers-disease/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open the Alzheimer’s sample catalog ↗
                </a>
              </article>
              <article className="record-gap">
                <span className="evidence-label">WORKING RECONSTRUCTION</span>
                <h3>A credible biological question for the pilot.</h3>
                <p>
                  The research question is whether Alzheimer’s donor material
                  responds differently to a controlled cellular challenge, and
                  whether that response recovers over time. The original sample
                  label and assay notebook will decide which model-specific
                  interpretation fits the completed tests.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="modeling-body prediction-model">
          <div className="shell">
            <div className="kicker">PREDICTION GROUNDED IN PUBLISHED PBMC RESEARCH</div>
            <div className="modeling-intro">
              <div>
                <h2>What should the next analysis predict?</h2>
              </div>
              <p>
                A primary human study profiled PBMCs from 132 participants and
                reported lower PLCγ2 activation in Alzheimer’s disease across
                multiple immune-cell types and stimuli, with STAT1/STAT5 effects
                varying by cell and stimulus. That finding supplies a testable
                  prior for a matching PBMC phospho-signaling assay. The pilot’s
                  measured readouts remain the evidence used to assess whether
                  this forecast fits the completed tests.
              </p>
            </div>

            <div className="prediction-grid">
              {forecastRows.map((row) => (
                <article key={row.label}>
                  <span>{row.label}</span>
                  <h3>{row.title}</h3>
                  <p>{row.copy}</p>
                </article>
              ))}
            </div>

            <div className="model-spec">
              <span className="evidence-label">TRANSPARENT ANALYSIS PLAN</span>
              <h3>Model the donor, cell type, and stimulus—not just a pooled average.</h3>
              <p>
                For a compatible PBMC signaling dataset, estimate each response
                with diagnosis, stimulus, and immune-cell type plus their
                interactions; adjust for recorded age, sex, APOE status,
                medications, and processing batch. Treat donor as the unit of
                replication, account for repeated measures within donor, and
                evaluate prediction on held-out donors rather than random cells.
              </p>
              <code>
                response ~ diagnosis × stimulus × cell_type + covariates + batch
              </code>
            </div>
          </div>
        </section>

        <section className="candidate-models">
          <div className="shell">
            <div className="section-head">
              <div>
                <div className="kicker">CELL MODELS · WHAT EACH ONE CAN TEST</div>
                <h2>Choose the cell system that matches the question.</h2>
              </div>
              <p>
                The pilot is recorded as completed. These named systems make the
                next interpretation and validation plan concrete; they do not
                identify the cell line in the original purchase.
              </p>
            </div>
            <div className="candidate-grid">
              <article>
                <span>PERIPHERAL IMMUNE BIOLOGY</span>
                <h3>Donor PBMCs</h3>
                <p>
                  Use if the purchased material was peripheral blood mononuclear
                  cells. This can test donor immune-cell response; PBMCs are not
                  a brain or neuron model.
                </p>
                <a
                  href="https://sanguinebio.com/product/alzheimers-disease-pbmc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View the Sanguine Bio PBMC product ↗
                </a>
              </article>
              <article>
                <span>ALZHEIMER’S CELL-STRESS MODEL · PROPOSED</span>
                <h3>Differentiated SH-SY5Y + Aβ42 challenge</h3>
                <p>
                  Use the human neuroblastoma line as a controlled neuronal-like
                  surrogate, with vehicle, Aβ42 oligomer, and washout/recovery
                  conditions. The directional forecast is higher oxidative
                  stress and altered tau phosphorylation after challenge; in
                  differentiated cells, early stress may appear before a clear
                  loss of viability. This is a model prediction, not a pilot
                  readout.
                </p>
                <a
                  href="https://doi.org/10.3389/fncel.2018.00220"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the primary Aβ42 cell study ↗
                </a>
              </article>
              <article>
                <span>ALS MOTOR-NEURON MODEL · PROPOSED</span>
                <h3>NSC-34 with TDP-43 stress</h3>
                <p>
                  Compare matched wild-type and ALS-linked TDP-43 NSC-34
                  motor-neuron-like cells after the same stress pulse. The
                  testable forecast is slower return of TDP-43 and stress-granule
                  measures toward baseline in the mutant model. NSC-34 is a
                  murine hybrid line, so this would be a mechanism screen, not a
                  patient-derived result.
                </p>
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8217991/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the primary TDP-43 cell study ↗
                </a>
              </article>
              <article>
                <span>HUMAN NEURONAL VALIDATION · LATER PHASE</span>
                <h3>Patient-derived iPSC neurons</h3>
                <p>
                  A later validation step can compare donor-derived neurons
                  against matched controls for amyloid-β, phospho-tau, neurite
                  health, and recovery after a standardized stress. Multiple
                  donor lines—not repeated wells from one line—are the unit of
                  replication.
                </p>
                <a
                  href="https://doi.org/10.1038/nature10821"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the original iPSC study ↗
                </a>
              </article>
              <article>
                <span>PARKINSON’S SEEDING MODEL · SEPARATE TRACK</span>
                <h3>SH-SY5Y α-synuclein seeding assay</h3>
                <p>
                  A distinct use of the same tractable human neuroblastoma line:
                  compare equal seed exposures across different recovery gaps,
                  then quantify α-synuclein aggregation and cell health. It is a
                  proposed Parkinson’s-related experiment, not part of the
                  Alzheimer’s pilot.
                </p>
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8139990/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the primary seeded-aggregation study ↗
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="timing-model">
          <div className="shell timing-grid">
            <div>
              <div className="kicker">ILLUSTRATIVE MATHEMATICAL SCENARIO</div>
              <h2>Does a shorter recovery gap leave a measurable trace?</h2>
              <p>
                For a separate Parkinson’s-related follow-up using a seeded
                neuronal cell model, represent recovery as a decaying response.
                The testable forecast is that a shorter interval between equal
                stress pulses leaves more residual response and predicts greater
                later seeding after protein burden and viability are accounted
                for.
              </p>
            </div>
            <div className="timing-equations">
              <code>Residual response after gap Δ: R(Δ) = R₀ · e^(−Δ / τ)</code>
              <code>Seeding score = β₀ + β₁R(Δ) + β₂burden + β₃viability + donor + batch</code>
              <p>
                Prediction: β₁ &gt; 0. The model is falsified if recovery history
                adds no reproducible out-of-sample predictive value. This is a
                proposed forecast, not a result from the completed Alzheimer’s
                pilot.
              </p>
            </div>
          </div>
        </section>

        <section className="reaction-model-section" id="reaction-diffusion">
          <div className="shell">
            <div className="section-head reaction-section-head">
              <div>
                <div className="kicker">FROM CELL PILOT TO MODEL · PROPOSED</div>
                <h2>How a measured cell response becomes a reaction–diffusion question.</h2>
              </div>
              <p>
                The completed incubator-based pilot motivates a controlled
                challenge-and-recovery study. A reaction–diffusion model is the
                next step: it separates local protein amplification from
                clearance and spatial spread. The pilot notes we have do not
                identify the original cell line or supply a time-series, so this
                is a sample model—not a fit to the completed tests.
              </p>
            </div>

            <div className="reaction-steps">
              <article>
                <span>01 · START WITH THE CULTURE</span>
                <h3>Apply the same pulse to matched cultures.</h3>
                <p>
                  Choose one disease-specific protein target and cell system.
                  Compare vehicle, one standardized seed pulse, and repeat
                  pulses after short or long recovery gaps.
                </p>
              </article>
              <article>
                <span>02 · MEASURE OVER TIME</span>
                <h3>Track burden, recovery, and cell health.</h3>
                <p>
                  Collect repeated time points for the selected marker, soluble
                  and aggregated fractions where appropriate, and viability.
                  Spatial imaging or separated compartments are needed to
                  estimate spread.
                </p>
              </article>
              <article>
                <span>03 · FIT AND TRY TO BREAK IT</span>
                <h3>Estimate parameters, then predict held-out wells.</h3>
                <p>
                  Fit a subset of doses and time points. Test whether the model
                  predicts an unseen recovery gap and independent replicate
                  plates better than a simple no-spread baseline.
                </p>
              </article>
            </div>

            <div className="reaction-equation-card">
              <div>
                <span className="evidence-label">MINIMAL SAMPLE MODEL · NOT CALIBRATED</span>
                <h3>Local reaction plus spatial spread</h3>
                <code>
                  ∂P/∂t = D∇²P + αP(1 − P/K) − μP + I(x,t)
                </code>
                <p>
                  P is the measured burden of one selected misfolded protein.
                  The equation is a compact Fisher–KPP-style starting point;
                  it is not a molecular account of every Alzheimer’s, ALS, or
                  Parkinson’s pathway.
                </p>
              </div>
              <div className="reaction-parameters">
                <p><strong>D</strong><span>effective spatial spread; needs spatial data</span></p>
                <p><strong>α</strong><span>local templated amplification</span></p>
                <p><strong>K</strong><span>saturation level in the model</span></p>
                <p><strong>μ</strong><span>clearance or loss rate</span></p>
                <p><strong>I(x,t)</strong><span>timed experimental seed pulse</span></p>
              </div>
            </div>

            <div className="reaction-example">
              <div>
                <div className="kicker">ILLUSTRATIVE RECOVERY CALCULATION</div>
                <h3>Shorter gaps leave more residual signal for the next pulse.</h3>
                <p>
                  If clearance follows a first-order half-life, the remaining
                  signal is P₀ × 2<sup>−Δ/t½</sup>. For arithmetic only, set
                  t½ = 24 hours; this is a toy value, not a measurement or
                  biological estimate from the pilot.
                </p>
              </div>
              <div className="reaction-example-values">
                <article><span>24-HOUR GAP</span><strong>50%</strong><small>of starting signal remains in the toy example</small></article>
                <article><span>72-HOUR GAP</span><strong>12.5%</strong><small>of starting signal remains in the toy example</small></article>
              </div>
            </div>

            <div className="reaction-model-boundary">
              <strong>What this predicts—and what it does not</strong>
              <p>
                When amplification exceeds clearance (α &gt; μ), the idealized
                model predicts a growing front with speed c ≈ 2√(D(α − μ));
                when clearance dominates, the seeded signal fades. This is a
                cell-model forecast only. A pooled plate-reader value cannot
                identify D, and no parameter here predicts a person’s disease
                course.
              </p>
              <p className="reaction-sources">
                Model precedent:{" "}
                <a href="https://doi.org/10.1016/j.jmps.2018.10.013" target="_blank" rel="noreferrer">
                  a Fisher–KPP-style protein growth and spread model ↗
                </a>
                {" · "}
                <a href="https://doi.org/10.1038/s41467-020-15701-2" target="_blank" rel="noreferrer">
                  human tau-spread modeling against tau-PET ↗
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="funding-path">
          <div className="shell funding-grid">
            <div>
              <div className="kicker">A FUNDABLE NEXT STEP</div>
              <h2>Turn a completed pilot into a reproducible result.</h2>
            </div>
            <ol>
              <li>Reconcile the supplier order, sample format, donor lots, and consented metadata.</li>
              <li>Recover the culture log, assay identity, controls, and raw measurements.</li>
              <li>Map the observed readouts to prespecified endpoints; retain the measured findings as findings.</li>
              <li>Replicate with appropriate controls and validate predictions on held-out donors.</li>
            </ol>
          </div>
        </section>

        <section className="source-strip">
          <div className="shell">
            <span className="evidence-label">SCIENTIFIC BASIS</span>
            <p>
              Phongpreecha et al., “Single-cell peripheral immunoprofiling of
              Alzheimer’s and Parkinson’s diseases,” <em>Science Advances</em>
              (2020), DOI 10.1126/sciadv.abd5575.
            </p>
            <a
              href="https://doi.org/10.1126/sciadv.abd5575"
              target="_blank"
              rel="noreferrer"
            >
              Read the primary study ↗
            </a>
            <p className="source-limit">
              This external PBMC study supplies the prior direction for the
              conditional forecast. ONQIVA’s completed pilot is a separate
              experiment with its own observed readouts.
            </p>
            <a className="secondary" href="/neurodegeneration">
              Explore the wider neurodegeneration work
            </a>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
