# CLAUDE.md — Operating `mungerbot`

This repo runs a single company through Charlie Munger's latticework of mental
models and ends with a **Buy / Pass / Sell / Too-Hard** verdict. It is a **Claude
Dynamic Workflow**: a deterministic orchestration script that fans out to ~40
mental-model subagents fed by a deep financial-research desk, then synthesizes and
decides. **The default answer is PASS; a Buy must be earned at high conviction.**

Start with [`README.md`](README.md) for the why, [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
for the how.

## Kicking off a run

A run is launched with the **Workflow** tool pointed at the script. You (Claude)
are the orchestrator that supplies the arguments:

```
Workflow({
  scriptPath: "workflows/munger-analysis.workflow.js",
  args: {
    company: "Costco Wholesale",   // required
    ticker:  "COST",               // optional but recommended
    date:    "2026-06-01",         // REQUIRED — the as-of date (see below)
    tier:    "standard",           // quick | standard | deep   (default standard)
    thesis:  ""                    // optional prior thesis to stress-test (enables SELL)
  }
})
```

**Always pass `args.date`.** Workflow scripts cannot read the system clock
(`Date.now()`/`new Date()` are disabled so runs stay resumable). Before launching,
get today's date with `date +%F` and pass it as `args.date` — unless the user
wants a *historical* as-of analysis, in which case use that date. The date also
names the output folder, so it must be explicit.

Pick the tier by intent: `quick` (~20 agents) for a fast first look, `standard`
(~40) for a real analysis, `deep` (~55) for conviction-grade, pre-capital
diligence. See [`docs/BEST-PRACTICES.md`](docs/BEST-PRACTICES.md) §12.

Watch progress live with `/workflows`; the durable record is
`runs/<slug>/<date>/PROGRESS.md`.

## Resuming an interrupted run

Dynamic Workflows are resumable. If a run is paused, killed, or you edit the
script:

```
Workflow({ scriptPath: "workflows/munger-analysis.workflow.js",
           args: { ...same args... }, resumeFromRunId: "wf_..." })
```

The longest unchanged prefix of `agent()` calls returns cached results instantly;
only new/edited calls re-run. Because the run directory is durable and agents are
idempotent (they check whether their output exists before redoing work), you can
also just relaunch with the **same `args`** (same company + date ⇒ same `runDir`)
and agents will skip completed work.

## Conventions every agent follows

- **Write to your own subdirectory.** No two agents share an output file, so
  concurrent writes never corrupt. The only shared file, `PROGRESS.md`, is written
  exclusively by the sequential Progress Tracker.
- **Drop a `_status.json`** next to your output so the Progress Tracker can rebuild
  `PROGRESS.md` from disk.
- **Cite every material fact** (source + section + URL + date); mark judgments as
  judgments. The research desk collects facts and does not opine; model agents and
  the decision layer reason over those facts.
- **Honor the "default is no" discipline.** Most runs should end in PASS or
  TOO_HARD. A BUY requires passing every gate in
  [`docs/DECISION-RUBRIC.md`](docs/DECISION-RUBRIC.md) *and* high conviction.

## Where things live

| Path | What |
|---|---|
| `workflows/munger-analysis.workflow.js` | the orchestration + the model registry (source of truth) |
| `prompts/` | detailed agent mandates (financial desk, model contract, synthesis, red team, decision) |
| `docs/DECISION-RUBRIC.md` | the gates and conviction bar the Decision agent applies |
| `config/decision-rubric.js` | the deterministic gate check (`node config/decision-rubric.js --test`) |
| `docs/MENTAL-MODELS.md` | the catalog of all ~40 models |
| `docs/SCHEMAS.md` | the JSON contracts between phases |
| `templates/` | the shapes of `ANALYSIS.md`, `PROGRESS.md`, per-model write-ups |
| `runs/<slug>/<date>/` | a run's output |

## Adding or changing a model

Edit the `MODELS` array in the workflow (`key`, `name`, `discipline`, `intensity`
∈ deep/standard/lens, `fatal`, one-paragraph `mandate`). Add a row to
`docs/MENTAL-MODELS.md`. Nothing else is needed — the workflow creates the
`models/<key>/` folder, dispatches the agent, and folds the verdict into synthesis.

## Tuning the decision

The thresholds and the decision tree in `config/decision-rubric.js` encode the
*user's* risk appetite (marked `TODO(you)`). If the user asks to be more/less
demanding, adjust those constants and the tree, keep `docs/DECISION-RUBRIC.md` in
sync, and re-run `--test`.

## Guardrails

- **Decision support, not advice, and never an order.** This framework produces a
  written, sourced argument. It does **not** place trades, move money, or connect
  to a brokerage. A human reviews `ANALYSIS.md` before any capital is committed.
- If asked to "execute" or "buy," produce/refresh the analysis and hand it to the
  user to act on themselves.
