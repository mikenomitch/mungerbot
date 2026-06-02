# Architecture

`mungerbot` runs a single company through Charlie Munger's *latticework of mental
models* and ends with an actionable verdict. It is built as a **Claude Dynamic
Workflow** — a deterministic JavaScript orchestration script
([`workflows/munger-analysis.workflow.js`](../workflows/munger-analysis.workflow.js))
that fans out to many subagents, each writing its own artifacts to disk.

## The big idea

Munger's core claim: *"You've got to have models in your head, and you've got to
array your experience — both vicarious and direct — onto this latticework of
models."* One model is a hammer that turns every problem into a nail. So we run
**~40 models from seven disciplines in parallel**, give each one the same shared
evidence base plus its own domain research, and then look for the thing Munger
cared about most — **convergence** of independent models (the *Lollapalooza*).

A second Munger principle shapes the whole pipeline: **the default answer is
no.** Most businesses are in the "too hard" pile, most prices offer no margin of
safety, and a single fatal flaw outweighs a dozen positives ("all I want to know
is where I'm going to die, so I'll never go there"). The decision logic is built
to say PASS unless a Buy is overwhelming.

## Topology

```
                          ┌──────────────┐
                          │   Intake     │  resolve ticker, scaffold runDir + PROGRESS.md
                          └──────┬───────┘
                                 │
              ┌──────────────────┴───────────────────┐
              │      Financial Deep Research desk     │  (parallel — the "many sub-agents")
              │  filings · financials · valuation ·   │
              │  news · leadership · competition ·    │
              │  sector · prediction-markets ·        │
              │  legal · scuttlebutt                  │
              └──────────────────┬───────────────────┘
                                 │  (lane digests)
                          ┌──────▼───────┐
                          │   Dossier    │  one cited, as-of-dated evidence base
                          └──────┬───────┘
                                 │  (shared by every model)
        ┌────────────────────────┼────────────────────────┐
        │   Mental Models (parallel, ~40 agents)           │
        │   Psychology · Economics · Math/Probability ·    │  each reads the dossier,
        │   Physics/Eng · Biology · Accounting · Stats     │  does its own domain research,
        └────────────────────────┬────────────────────────┘  emits a structured verdict
                                 │  (verdicts)
                          ┌──────▼───────┐
                          │  Synthesis   │  weighted scorecard + Lollapalooza check
                          └──────┬───────┘
                          ┌──────▼───────┐
                          │  Red Team    │  invert: pre-mortem, steelman bear, circle-of-competence
                          └──────┬───────┘
                          ┌──────▼───────┐
                          │  Decision    │  apply rubric → BUY / PASS / SELL / TOO_HARD
                          └──────────────┘
```

A small **Progress Tracker** agent runs at each phase boundary, rescans the
on-disk `_status.json` files, and regenerates `PROGRESS.md`. Because phases are
awaited in sequence, these writes never race.

## Why a desk, not a single financial agent

The user requirement is that "the actual financial analysis is deep — this
sub-agent should have many sub-agents." In a Dynamic Workflow the clean way to
express *one capability backed by many workers* is a **parallel desk**: each lane
([`prompts/financial-desk.md`](../prompts/financial-desk.md)) is an independent
specialist that researches one slice (filings, the numbers, valuation, leadership,
competition, …), fails independently, and writes its own notes. The **Dossier
Editor** then merges the lane digests into the single evidence base every model
agent consumes. This gives depth *and* fault isolation: one lane erroring degrades
the dossier but does not sink the run.

## Phase contracts

Each phase consumes the previous phase's **structured output** (JSON Schema),
never free text. This makes the pipeline deterministic to assemble and lets the
synthesis math run without parsing prose. The schemas are documented in
[`docs/SCHEMAS.md`](./SCHEMAS.md) and defined inline in the workflow.

| Phase | Consumes | Produces | Persisted to |
|---|---|---|---|
| Intake | `args` | run scaffold | `runDir/RUN.md`, `PROGRESS.md` |
| Research desk | run config | lane digests | `research/<lane>/NOTES.md`, `artifacts/` |
| Dossier | lane digests | evidence base + confidence | `research/DOSSIER.md` |
| Mental models | dossier | one verdict per model | `models/<key>/ANALYSIS.md` |
| Synthesis | verdicts | weighted scorecard + lollapalooza | `synthesis/SYNTHESIS.md` |
| Red team | synthesis + dossier | kill scenarios + CoC | `synthesis/RED-TEAM.md` |
| Decision | synthesis + red team + rubric | BUY/PASS/SELL/TOO_HARD verdict | `decision/_status.json` → **Analysis Scribe** writes `ANALYSIS.md` |

## Output layout

Every run materializes a self-contained, auditable directory:

```
runs/<company-slug>/<YYYY-MM-DD>/
├── ANALYSIS.md            ← the synthesis + decision (top-level deliverable)
├── PROGRESS.md            ← live per-agent status + log (resumability anchor)
├── RUN.md                 ← resolved company/ticker/tier and the agent manifest
├── research/
│   ├── DOSSIER.md         ← the shared evidence base
│   ├── _snapshot.md       ← price / market cap / EV snapshot
│   └── <lane>/NOTES.md    ← one folder per research lane, with _status.json
├── models/
│   └── <model-key>/ANALYSIS.md   ← one folder per mental model, with _status.json
├── synthesis/
│   ├── SYNTHESIS.md
│   └── RED-TEAM.md
└── artifacts/             ← financial models, DCF, projections, data tables, charts
```

See [`docs/BEST-PRACTICES.md`](./BEST-PRACTICES.md) for the long-running-workload
engineering (checkpointing, idempotency, fail-soft, provenance, resume) and
[`docs/DECISION-RUBRIC.md`](./DECISION-RUBRIC.md) for how verdicts become a Buy.
