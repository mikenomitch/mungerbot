# Best Practices for This Long-Running Workload

A full `deep`-tier run spawns ~55 agents, makes hundreds of web/file calls, and
can run for a long time. These are the engineering principles that keep it
**durable, resumable, honest, and debuggable** — and where each is implemented.

## 1. Durable state on disk, not in context

The run directory *is* the state. Every agent persists its work to a file before
returning, and writes a tiny `_status.json` beside it. If the orchestrator's
context is compacted, the process is killed, or you come back tomorrow, the truth
is on disk. `PROGRESS.md` is regenerated from those status files at every phase
boundary so a human (or a fresh agent) can see exactly where things stand.

> Implementation: `_status.json` per lane/model; `updateProgress()` rescans and
> rewrites `PROGRESS.md` between phases.

## 2. Resumability

Dynamic Workflows are resumable: relaunch with
`Workflow({ scriptPath, resumeFromRunId })` and the longest unchanged prefix of
`agent()` calls returns cached results instantly — only new/edited calls re-run.
Same script + same `args` ⇒ 100% cache hit. Because the run directory is durable,
you can also resume *conceptually* by pointing a new run at the same `runDir`;
agents check whether their output already exists before redoing expensive work
(idempotency). See [`CLAUDE.md`](../CLAUDE.md) for the resume recipe.

## 3. Determinism

Workflow scripts **cannot** call `Date.now()`, `new Date()`, or `Math.random()`
(they would break resume). So:
- The run/as-of **date is passed in via `args.date`** and threaded everywhere.
- Per-agent variation comes from the **item/index**, never randomness.
- Stamp wall-clock timestamps *after* the workflow returns, or let agents read
  the system clock via their own tools when writing logs.

## 4. Fault isolation & fail-soft

- **Write isolation:** every agent owns its own subdirectory. No two agents write
  the same file, so concurrent writes never corrupt each other. The one shared
  file, `PROGRESS.md`, is only ever written by the single sequential progress
  agent.
- **Graceful degradation:** `parallel()` turns a thrown agent into `null`; we
  `.filter(Boolean)` and continue. A failed research lane or model is logged as
  `DEGRADED`/`MISSING` in `PROGRESS.md` and noted as a data gap — the run still
  produces a decision, with the gap disclosed. A run is never all-or-nothing.

## 5. Bounded fan-out

Concurrency is auto-capped at `min(16, cores-2)`; the ~40 model agents run in
waves. Lifetime agent count is capped at 1000. **Budget tiers** (`quick` /
`standard` / `deep`) subset the work so you can triage cheaply before committing
to a full run. Lower tiers do less independent confirmation and should reach
PASS/TOO_HARD more readily — never lower the *evidentiary bar* for a Buy to save
tokens.

## 6. Provenance — separate fact from inference

The research desk's job is to **collect and cite**, not to opine. Every material
claim carries a source (document + section + URL + date). Model agents and the
decision layer **reason over** that evidence and clearly distinguish *fact* (from
the dossier, cited) from *inference* (their judgment). This is what makes the
final `ANALYSIS.md` auditable — every conclusion traces back to a source.

## 7. Recency / data freshness

Everything is stamped with the `as-of` date. The dossier has an explicit "Data
Gaps & Confidence" section. If the dossier confidence is below threshold, the
decision is **TOO_HARD** — we do not guess when the evidence is thin.

## 8. Adversarial verification before commitment

No Buy is issued without a dedicated **Red Team / pre-mortem** that inverts the
thesis and tries to kill it, plus *fatal-capable* models that can disqualify the
investment outright. This is the antidote to confirmation bias: the system must
survive a genuine attempt to destroy its own conclusion before it commits capital.

## 9. Structured contracts between phases

Phases exchange schema-validated JSON, not prose (see
[`SCHEMAS.md`](./SCHEMAS.md)). Validation happens at the tool layer, so an agent
that returns a malformed verdict is made to retry. Synthesis can then do real math
on the verdicts instead of parsing English.

## 10. Observability

`log()` narrates phase transitions and headline numbers (e.g. "32/41 models done
· 2 fatal-flag votes") to the live `/workflows` view. `PROGRESS.md` is the
durable counterpart. Every agent's full reasoning is on disk under its own folder.

## 11. Human-in-the-loop checkpoints (optional)

For real capital, treat the workflow's BUY as a *recommendation to investigate
further*, not an order. Natural checkpoints: review the dossier before trusting
the models; review the Red Team before trusting a BUY. The framework never places
trades — it produces a written, sourced argument for a human to act on.

## 12. Cost & runtime expectations

| Tier | Models | Lanes | Rough agent count | Use for |
|---|---|---|---|---|
| `quick` | ~12 marquee | 4 core | ~20 | Fast triage / first look |
| `standard` | full ex-deep extras | 8 | ~40 | Default analysis |
| `deep` | all | 10 | ~55 | Conviction-grade, pre-capital diligence |

Token cost scales roughly with agent count × research depth. Start `quick`; if it
doesn't trip an obvious PASS, escalate.
