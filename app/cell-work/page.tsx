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
                <span className="evidence-label">RECONSTRUCTION IN PROGRESS</span>
                <h3>Keep the measurements tied to the actual lab record.</h3>
                <p>
                  The current website files do not contain the cell type or line,
                  donor count, culture schedule, stimulus, assay, measured
                  direction, or numeric readouts. The page therefore records the
                  completed work without making up those particulars.
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
                <div className="kicker">ILLUSTRATIVE FOLLOW-UP MODELS</div>
                <h2>Choose the cell system that matches the question.</h2>
              </div>
              <p>
                These are research options for the next funded phase. They are
                not claims about the cell type used in the completed pilot.
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
                <span>ALZHEIMER’S NEURON MODEL</span>
                <h3>Patient-derived iPSC neurons</h3>
                <p>
                  A longer-term route to compare donor-derived neuronal disease
                  phenotypes such as amyloid-β and phospho-tau, with matched
                  controls and careful line-level replication.
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
                <span>PARKINSON’S SEEDING MODEL</span>
                <h3>SH-SY5Y neuroblastoma cells</h3>
                <p>
                  A separate, tractable cell-line option for a seeded α-synuclein
                  experiment. It is a neuroblastoma line, not an Alzheimer’s
                  donor cell line or a complete human-neuron model.
                </p>
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8139990/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read a primary seeded-aggregation study ↗
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
