# Structured Output Contracts

Every phase returns schema-validated JSON (not prose), so the next phase can
consume it deterministically. The schemas are defined inline in
[`workflows/munger-analysis.workflow.js`](../workflows/munger-analysis.workflow.js);
this document is the human reference. When the workflow passes a `schema` to
`agent()`, the subagent is *forced* to return a conforming object — malformed
output is rejected and retried at the tool layer.

## Research digest (per lane)

What each financial-desk specialist returns; merged by the Dossier Editor.

```jsonc
{
  "lane": "filings",
  "headline": "FY24 10-K clean; auditor unchanged; one new material risk factor on customer concentration",
  "findings": ["...short, cited bullet facts..."],
  "redFlags": ["..."],
  "dataGaps": ["Could not locate segment-level FCF"],
  "artifacts": ["artifacts/financial-summary.csv"],
  "notesPath": "runs/<slug>/<date>/research/filings/NOTES.md"
}
```

## Dossier

```jsonc
{
  "confidence": 4,                 // 0-5; below DOSSIER_MIN_CONFIDENCE ⇒ TOO_HARD
  "dataGaps": ["..."],
  "keyFacts": ["The 5-7 facts that most drive the analysis"],
  "snapshot": { "price": 0, "marketCap": 0, "ev": 0, "peNtm": 0, "evEbit": 0 },
  "dossierPath": "runs/<slug>/<date>/research/DOSSIER.md"
}
```

## Model verdict (per mental model)

The workhorse contract. `strength × relevance × conviction` is the weight
synthesis applies.

```jsonc
{
  "model": "pricing-power",
  "discipline": "Economics",
  "signal": "positive",            // positive | negative | neutral | mixed
  "strength": 4,                   // 0-5: how strongly the model speaks to THIS company
  "conviction": 4,                 // 0-5: confidence in the read given evidence
  "relevance": 5,                  // 0-5: how applicable the model is here
  "fatalFlaw": false,              // does this model alone disqualify?
  "keyFindings": [
    { "claim": "Raised prices 7%/yr for 5 yrs with <1% volume loss", "evidence": "10-K MD&A FY20-24", "source": "SEC 10-K 2024 p.34" }
  ],
  "redFlags": [
    { "flag": "Price hikes slowing in latest Q", "severity": "low", "rationale": "..." }
  ],
  "disconfirmers": ["A private-label entrant undercutting on price would flip this"],
  "summary": "Durable, demonstrated pricing power; the clearest single piece of moat evidence.",
  "outputPath": "runs/<slug>/<date>/models/pricing-power/ANALYSIS.md"
}
```

`severity` ∈ `low | medium | high | fatal`. A `fatal` red flag from a
fatal-capable model sets `fatalFlaw: true`.

## Synthesis

```jsonc
{
  "netSignal": "positive",
  "bullCount": 24, "bearCount": 9,
  "strongPositiveModels": ["competitive-moats", "pricing-power", "compound-interest", "..."],
  "strongNegativeModels": ["regression-to-mean"],
  "convergence": "Six models across Economics, Math, and Psychology independently point to durable compounding",
  "lollapalooza": {
    "present": true,
    "direction": "positive",        // positive | negative | none
    "description": "Scale → cost advantage → pricing power → reinvestment → more scale; a reinforcing flywheel",
    "convergingModels": ["economies-of-scale", "pricing-power", "compound-interest", "feedback-loops"]
  },
  "conflicts": ["Regression-to-mean vs compound-interest on margin durability — adjudicated toward durability because..."],
  "summary": "...",
  "synthesisPath": "runs/<slug>/<date>/synthesis/SYNTHESIS.md"
}
```

## Red Team

```jsonc
{
  "survives": true,                 // does the bull thesis survive the pre-mortem?
  "killScenarios": [
    { "scenario": "Regulatory cap on core fee", "plausibility": "medium", "severity": "severe", "mitigant": "Diversified geography" }
  ],
  "circleOfCompetence": "in",       // in | edge | out
  "biggestMisses": ["Valuation leans on a terminal-growth assumption that could be too high"],
  "summary": "...",
  "redTeamPath": "runs/<slug>/<date>/synthesis/RED-TEAM.md"
}
```

`severity` ∈ `impairment | severe | ruin`. A `high`-plausibility / `ruin`
scenario should drive `survives: false` and block a BUY.

## Decision (final)

```jsonc
{
  "decision": "PASS",               // BUY | PASS | SELL | TOO_HARD
  "conviction": 6,                  // 0-10; BUY requires >= CONV_MIN
  "oneLiner": "Wonderful business, but priced for perfection — no margin of safety today.",
  "circleOfCompetence": "in",
  "qualityScore": 8,
  "moatRating": "wide",             // none | narrow | wide | widening | narrowing
  "managementRating": "good",       // poor | adequate | good | exceptional
  "valuation": { "intrinsicValueRange": "$X–$Y", "currentPrice": 0, "marginOfSafetyPct": -5, "method": "reverse-DCF + peer multiples" },
  "fatalFlaws": [],
  "gates": {
    "circleOfCompetence": true, "noFatalFlaw": true,
    "quality": true, "marginOfSafety": false, "convergence": true
  },
  "whatWouldChangeMind": ["A 30%+ drawdown that opens a margin of safety", "Evidence the moat is widening faster than priced"],
  "benchmarkComparison": "Not clearly better than adding to existing compounders at today's price",
  "positionSizing": "n/a (PASS)",
  "summary": "...",
  "analysisPath": "runs/<slug>/<date>/ANALYSIS.md"
}
```

The `gates` object must be consistent with the deterministic check in
[`config/decision-rubric.js`](../config/decision-rubric.js); the Decision agent
runs that file and records divergences in its `summary`. The orchestrator's
Analysis Scribe then renders `ANALYSIS.md` from this verdict plus `SYNTHESIS.md`
and `RED-TEAM.md` — the Decision agent no longer writes the deliverable itself.
