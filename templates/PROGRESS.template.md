<!--
  Live run tracker. Scaffolded by Intake; regenerated from on-disk _status.json
  files by the Progress Tracker at every phase boundary. This is the durable,
  resumable record — if the run is interrupted, this file plus the run directory
  tell a fresh agent exactly what is done and what remains.
  Status legend: PENDING · RUNNING · DONE · DEGRADED (partial) · MISSING (failed)
-->
# Progress — <COMPANY> (<TICKER>) — <YYYY-MM-DD>

**Run:** <runDir>  ·  **Tier:** <quick/standard/deep>  ·  **Overall:** <SETUP / RESEARCH / MODELING / SYNTHESIS / COMPLETE>
**Final decision:** <pending — set on completion>

## Phases

| Phase | Status |
|---|---|
| Intake | <PENDING/DONE> |
| Financial Deep Research | <PENDING/DONE> |
| Dossier | <PENDING/DONE> |
| Mental Models | <PENDING/DONE> |
| Synthesis | <PENDING/DONE> |
| Red Team | <PENDING/DONE> |
| Decision | <PENDING/DONE> |

## Research desk

| Lane | Status | Headline |
|---|---|---|
| filings | PENDING | |
| financials | PENDING | |
| valuation | PENDING | |
| news | PENDING | |
| leadership | PENDING | |
| competition | PENDING | |
| sector | PENDING | |
| prediction-markets | PENDING | |
| legal-regulatory | PENDING | |
| scuttlebutt | PENDING | |

<!-- The Progress Tracker should remove rows for lanes not run at this tier. -->

## Mental models

| Model | Discipline | Status | Signal | Fatal? |
|---|---|---|---|---|
<!-- One row per model key actually dispatched. Filled from models/<key>/_status.json. -->
| | | PENDING | | |

## Log

- <YYYY-MM-DD> — run initialized (Intake)
<!-- Append one timestamped line per phase completion. -->
