# runs/

Each analysis writes a self-contained, auditable directory here:

```
runs/<company-slug>/<YYYY-MM-DD>/
├── ANALYSIS.md      ← the decision + synthesis (read this first)
├── PROGRESS.md      ← per-agent status + log (resumability anchor)
├── RUN.md           ← resolved company/ticker/tier + the agent manifest
├── research/
│   ├── DOSSIER.md   ← the shared, cited evidence base
│   ├── _snapshot.md
│   └── <lane>/NOTES.md
├── models/
│   └── <model-key>/ANALYSIS.md
├── synthesis/
│   ├── SYNTHESIS.md
│   └── RED-TEAM.md
└── artifacts/       ← valuation models, projections, data tables, charts
```

- `<company-slug>` is the lower-cased, hyphenated company name (e.g.
  `costco-wholesale`).
- `<YYYY-MM-DD>` is the **as-of date** passed to the run, so re-running on a new
  date never clobbers prior work and you build a longitudinal record.
- Run outputs are git-ignored by default (see `.gitignore`) — they are generated
  artifacts and can be large. Commit a run deliberately if you want to keep it
  under version control.

> Not investment advice. Every `ANALYSIS.md` is decision support produced by an
> automated process; a human reviews before any capital is committed, and the
> framework never places trades.
