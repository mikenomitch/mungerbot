# mungerbot 🧠📊

> *"You've got to have models in your head. And you've got to array your
> experience — both vicarious and direct — onto this latticework of models. …
> 80 or 90 important models will carry about 90% of the freight in making you a
> worldly-wise person."* — Charlie Munger

**mungerbot** analyzes a public company the way Charlie Munger thinks about one:
not through a single financial model, but through a **latticework of ~40 mental
models** drawn from psychology, economics, mathematics, physics, biology,
accounting, and statistics — used *in combination*. It runs as a
[Claude Dynamic Workflow](https://claude.com/blog/introducing-dynamic-workflows-in-claude-code):
a deterministic orchestration script that spins up a deep financial-research desk,
fans out one subagent per mental model, then synthesizes everything into a single
verdict.

It ends with **BUY · PASS · SELL · TOO_HARD** — and, faithful to Munger, **it only
issues a Buy at high conviction.** The default answer is *no*.

---

## What you get

Every run produces a self-contained, fully-cited directory:

```
runs/<company>/<date>/
├── ANALYSIS.md     ← the decision, the thesis, the inverted bear case, the scorecard
├── PROGRESS.md     ← live per-agent status + log
├── research/DOSSIER.md   ← one cited evidence base shared by every model
├── models/<model>/ANALYSIS.md   ← one deep write-up per mental model
├── synthesis/{SYNTHESIS,RED-TEAM}.md
└── artifacts/      ← valuation models, DCFs, projections, data tables
```

`ANALYSIS.md` is written to stand alone: decision, conviction (0–10), one-line
thesis, the bull case beside the inverted bear case, the gate-by-gate scorecard,
valuation with margin of safety, and "what would change my mind."

## How it works

```
 Intake → Financial Deep Research desk → Dossier → 40× Mental Models
        → Synthesis (Lollapalooza) → Red Team (invert) → Decision
```

1. **Intake** resolves the ticker and scaffolds the run directory.
2. **Financial Deep Research desk** — the "deep" part. A *parallel desk of
   specialists* (the financial analysis sub-agent with many sub-agents): SEC
   filings, the numbers, valuation, news & catalysts, leadership & capital
   allocation, competition, sector & macro, prediction markets & crowd signal,
   legal/regulatory, and scuttlebutt. Each collects and **cites** facts.
3. **Dossier** merges it all into one evidence base every model reads.
4. **Mental Models** — ~40 subagents, one per Munger model, each reasoning over
   the dossier *and* doing its own domain research, each returning a scored
   verdict. (See [the full catalog](docs/MENTAL-MODELS.md).)
5. **Synthesis** weights the verdicts (it does **not** average them), looks for
   *convergence of independent models across disciplines*, and runs the
   **Lollapalooza** check — are multiple forces compounding the same direction?
6. **Red Team** inverts: a pre-mortem that tries to kill the thesis, a steelmanned
   bear case, and an honest circle-of-competence check.
7. **Decision** applies the [rubric](docs/DECISION-RUBRIC.md) — a sequence of gates
   with a high conviction bar — and writes `ANALYSIS.md`.

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the full topology and phase
contracts.

## Quickstart

This is a Claude Code project. Open it and ask Claude to run an analysis — or have
Claude launch the workflow directly:

```js
Workflow({
  scriptPath: "workflows/munger-analysis.workflow.js",
  args: {
    company: "Costco Wholesale",
    ticker:  "COST",
    date:    "2026-06-01",   // the as-of date; names the output folder
    tier:    "standard"      // quick | standard | deep
  }
})
```

> **Why pass `date`?** Workflow scripts can't read the system clock (so runs stay
> deterministic and resumable), so the as-of date is an input. Claude fills it in
> with today's date automatically; pass a past date for a historical analysis.

Watch it live with `/workflows`; the durable record is the run's `PROGRESS.md`.
Full operating instructions — tiers, resuming, conventions — are in
[`CLAUDE.md`](CLAUDE.md).

| Tier | Models | Lanes | ~Agents | Use for |
|---|---|---|---|---|
| `quick` | ~12 marquee | 4 | ~20 | Fast triage |
| `standard` | full | 8 | ~40 | Default analysis |
| `deep` | all | 10 | ~55 | Pre-capital, conviction-grade diligence |

## The decision: Buy only on high conviction

A Buy must pass **five gates in order**, each able to cap the outcome:

1. **Circle of competence** — do we actually understand this business?
   (`out` ⇒ TOO_HARD)
2. **No fatal flaw** — no live path to permanent loss or fraud.
   ("All I want to know is where I'm going to die, so I'll never go there.")
3. **Quality** — is it a *wonderful* business (moat, ROIC > WACC, pricing power,
   good capital allocation)?
4. **Margin of safety** — is the price meaningfully below intrinsic value?
5. **Convergence / Lollapalooza** — do enough independent models across different
   disciplines point the same way?

Pass all five **and** clear the conviction bar → **BUY**. Otherwise → **PASS**
(the default). A live fatal flaw or rich overvaluation on a held name → **SELL**.
Thin evidence → **TOO_HARD**. The rubric is documented in
[`docs/DECISION-RUBRIC.md`](docs/DECISION-RUBRIC.md) and encoded as a deterministic
guard in [`config/decision-rubric.js`](config/decision-rubric.js) — the Decision
agent runs it and reconciles any divergence.

**The thresholds are yours.** The conviction bar and gate cutoffs encode *your*
risk appetite; they're isolated under a `TODO(you)` marker in
`config/decision-rubric.js`. The framework ships with demanding defaults and runs
out of the box — review them and make them yours (`node config/decision-rubric.js --test`).

## Built for a long-running agentic workload

A `deep` run is dozens of agents and hundreds of tool calls over a long wall-clock.
The framework is engineered for that ([`docs/BEST-PRACTICES.md`](docs/BEST-PRACTICES.md)):

- **Durable state on disk** — the run directory *is* the state; `PROGRESS.md` is
  regenerated from per-agent `_status.json` files.
- **Resumable** — relaunch with `resumeFromRunId` (cached prefix) or the same
  `args` (idempotent agents skip done work).
- **Fault-isolated & fail-soft** — every agent owns its folder; a failed lane or
  model degrades gracefully and is disclosed as a data gap, never sinking the run.
- **Structured contracts** — schema-validated JSON between phases, not prose.
- **Provenance** — facts are cited and kept separate from inference.
- **Adversarial verification** — no Buy without surviving a genuine pre-mortem.

## Repository layout

```
README.md                         this file
CLAUDE.md                         how to operate the framework (loaded by Claude)
workflows/munger-analysis.workflow.js   the Dynamic Workflow + model registry
config/decision-rubric.js         the deterministic decision gate (yours to tune)
docs/
  ARCHITECTURE.md                 topology + phase contracts
  MENTAL-MODELS.md                the ~40-model catalog
  DECISION-RUBRIC.md              gates + conviction bar
  BEST-PRACTICES.md               long-running-workload engineering
  SCHEMAS.md                      JSON contracts between phases
prompts/                          detailed agent mandates
templates/                        shapes of ANALYSIS.md / PROGRESS.md / model write-ups
runs/                             analysis outputs (git-ignored)
```

## Customizing

- **Add a model:** append to the `MODELS` array in the workflow and add a row to
  `docs/MENTAL-MODELS.md`. The pipeline picks it up automatically.
- **Change the research desk:** edit `RESEARCH_DESK` (and its tier membership) in
  the workflow and the matching section in `prompts/financial-desk.md`.
- **Tune the decision:** edit thresholds + the tree in `config/decision-rubric.js`
  and keep `docs/DECISION-RUBRIC.md` in sync.

## Disclaimer

mungerbot is **decision-support tooling, not investment advice.** It produces a
written, sourced argument for a human to evaluate. It does **not** place trades,
move money, or connect to a brokerage. Outputs may contain errors or stale data —
always verify against primary sources before committing capital. Investing
involves risk of loss.

*Inspired by the thinking of Charlie Munger; not affiliated with or endorsed by
him, Berkshire Hathaway, or any entity.*
