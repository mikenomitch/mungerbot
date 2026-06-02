# Run Manifest — Allbirds, Inc. (BIRD)

**As-of date:** 2026-06-01
**Tier:** standard (~40 mental-model agents)
**Run directory:** `runs/allbirds/2026-06-01/`
**Prepared by:** Intake agent

## Resolved security

| Field | Value | Source |
|---|---|---|
| Legal entity | Allbirds, Inc. | SEC EDGAR submissions (CIK 0001653909) |
| Ticker | BIRD | SEC EDGAR; Nasdaq |
| Exchange | Nasdaq Global Select Market | SEC EDGAR submissions |
| Reporting currency | USD | Delaware domestic filer (10-Q FY2026 Q1) |
| State of incorporation | Delaware | SEC EDGAR submissions |
| Fiscal year end | December 31 (fiscalYearEnd = 1231) | SEC EDGAR submissions |
| CIK | 0001653909 | SEC EDGAR |
| SIC | 2300 — Apparel & Other Finished Products | SEC EDGAR |
| Share classes | Dual-class: Class A (BIRD, listed) + Class B (super-voting, unlisted) | 10-Q FY2026 Q1 cover |

## CRITICAL identity / strategy flags (must read before analysis)

This is **not** a clean going-concern footwear analysis. Two transformative events
are in flight as of the as-of date and dominate the investment question:

1. **Footwear business being sold.** Allbirds signed a definitive Asset Purchase
   Agreement to sell its footwear brand/assets to **American Exchange Group for
   ~$39 million**, expected to close in Q2 2026. A merger/sale proxy (**DEFM14A**)
   was filed 2026-05-08 for a shareholder vote; the transaction contemplates a
   **wind-down of the legacy operating company**. (Sources: company IR release;
   WWD; SEC DEFM14A 2026-05-08.)

2. **Pivot to "NewBird AI" (GPU / AI compute).** On/around 2026-04-15 the company
   announced a strategic pivot to AI cloud infrastructure (GPU-as-a-Service),
   intending to **rename to "NewBird AI"**, paired with a ~$50M convertible
   financing facility. The market cap reportedly jumped from ~$21M (Apr 14) to
   ~$148M (Apr 15) on the news, then settled lower. (Sources: SEC 8-K / DEFA14A
   2026-04-24; WWD; trade press.)

**Implication for downstream agents:** the "business" being valued is a post-sale
cash/shell entity attempting an unproven AI-infrastructure pivot — NOT the
sustainable-shoe DTC brand. Historical apparel financials describe a
business being divested. Treat legacy footwear unit economics as discontinued
and scrutinize the pivot, the convertible's dilution/terms, cash runway, and
going-concern language. A 1-for-20 reverse split (effective 2024-09-05, for
Nasdaq bid-price compliance) explains the very low absolute share count.

## Research lanes (standard tier)

| Lane | Mandate (one-line) |
|---|---|
| filings | 10-K/10-Q/8-K, DEFM14A sale proxy, 424B5, going-concern, risk factors |
| financials | Revenue/margins/cash burn; discontinued-ops treatment of footwear |
| valuation | Sum-of-parts: net cash after sale vs. enterprise/shell value; dilution |
| news | Sale, AI pivot, financing, management/strategy coverage |
| leadership | Board, CEO, incentives, capital-allocation track record |
| competition | GPUaaS/AI-cloud competitive landscape (post-pivot); footwear (legacy) |
| sector | AI compute infrastructure economics; DTC footwear (legacy context) |
| prediction-markets | Deal-close odds, delisting risk, market-implied outcomes |

## Mental models dispatched (42)

`incentives`, `liking-loving`, `disliking-hating`, `doubt-avoidance`,
`inconsistency-avoidance`, `social-proof`, `authority-misinfluence`,
`reciprocation`, `contrast-misreaction`, `stress-influence`,
`availability-misweighing`, `use-it-or-lose-it`, `senescence-decline`,
`envy-jealousy`, `deprival-superreaction`, `competitive-moats`,
`economies-of-scale`, `network-effects`, `supply-demand`,
`comparative-advantage`, `opportunity-cost`, `pricing-power`, `specialization`,
`compound-interest`, `permutations-combinations`, `probability-trees`,
`bayesian-updating`, `inversion`, `power-laws`, `critical-mass`, `equilibrium`,
`redundancy-backup`, `breakpoints`, `feedback-loops`, `natural-selection`,
`ecosystems-niches`, `adaptation`, `double-entry-limits`, `earnings-quality`,
`gaussian-distribution`, `regression-to-mean`, `sampling`

## Notes & gaps

- Reporting currency inferred as USD from domestic Delaware filer status; confirm
  on 10-Q cover during the filings lane.
- Exact post-deal pro-forma cash and convertible terms not yet pulled — assigned
  to the financials/valuation lanes.
- SEC EDGAR `Archives/` HTML blocks automated fetch (HTTP 403); use the EDGAR
  data API (`data.sec.gov`) or the company IR site for primary text.
