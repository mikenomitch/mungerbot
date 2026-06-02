# Run Manifest — Arm Holdings plc (ARM)

**Run directory:** `runs/arm-holdings/2026-06-01`
**As-of date:** 2026-06-01
**Tier:** standard (~40 mental-model agents)
**Prior thesis to stress-test:** none provided (SELL path not enabled)

## Resolved security

| Field | Value |
|---|---|
| Legal entity | **Arm Holdings plc** (incorporated in England & Wales; UK foreign private issuer) |
| Listing | **Nasdaq Global Select Market** |
| Ticker | **ARM** |
| Security type | American Depositary Shares (ADSs); **1 ADS = 1 ordinary share** |
| Reporting currency | **USD** (consolidated financial statements presented in U.S. dollars) |
| Fiscal-year end | **March 31** (most recent full year: FY2026, ended 2026-03-31) |
| SEC filing form | **20-F** (annual; foreign private issuer), supplemented by **6-K** current reports |
| CIK | 0001973239 |

### Identity notes / ambiguities
- **Controlled company.** SoftBank Group beneficially owns **~87%** of Arm's issued and outstanding share capital and the majority of voting power (≈87.1% as of 2025-05-20 per the FY2025 20-F; confirm current figure). Public free float is therefore thin (~13%), with material implications for governance, minority-shareholder leverage, and share-price volatility.
- **Ticker disambiguation.** "ARM" on Nasdaq = Arm Holdings plc. Do **not** confuse with: "ARMK" (Aramark), "ARMlogi Holding Corp" (ticker BTOC/related), or "Arm Ltd." the operating subsidiary. The primary publicly-traded entity is Arm Holdings plc, resolved above.
- The historical UK "ARM Holdings" was taken private by SoftBank in 2016; the current Nasdaq listing dates from the September 2023 IPO of Arm Holdings plc.

A market snapshot (price, shares, market cap, cash/debt, EV) is captured in [`research/_snapshot.md`](research/_snapshot.md).

## Research lanes (this run)

| Lane | Scope |
|---|---|
| filings | Primary SEC filings — 20-F (FY2026), recent 6-Ks, risk factors, related-party (SoftBank) disclosures |
| financials | Revenue (royalty vs. license mix), margins, GAAP/non-GAAP earnings, cash flow, balance sheet |
| valuation | Multiples, DCF/scenario, implied growth, comparison to anchor (rich valuation flag) |
| news | Recent material developments, product launches (e.g., data-center CPU), customer/partner news |
| leadership | Management quality, board, governance under SoftBank control, incentives, capital allocation |
| competition | x86 (Intel/AMD), RISC-V, in-house silicon by customers, competitive positioning |
| sector | Semiconductor IP / compute industry, AI demand cycle, design-win dynamics, TAM |
| prediction-markets | Market-implied probabilities / sentiment where available |

## Mental models (this run — standard tier, 42 models)

Munger-style latticework across disciplines. One subdirectory per key under `models/`.

**Psychology of human misjudgment:** incentives · liking-loving · disliking-hating · doubt-avoidance · inconsistency-avoidance · social-proof · authority-misinfluence · reciprocation · contrast-misreaction · stress-influence · availability-misweighing · use-it-or-lose-it · senescence-decline · envy-jealousy · deprival-superreaction

**Microeconomics & competitive advantage:** competitive-moats · economies-of-scale · network-effects · supply-demand · comparative-advantage · opportunity-cost · pricing-power · specialization

**Mathematics & probability:** compound-interest · permutations-combinations · probability-trees · bayesian-updating · inversion · power-laws · critical-mass · equilibrium

**Engineering & physical systems:** redundancy-backup · breakpoints · feedback-loops

**Biology & ecosystems:** natural-selection · ecosystems-niches · adaptation

**Accounting & statistics:** double-entry-limits · earnings-quality · gaussian-distribution · regression-to-mean · sampling

## Decision discipline

The default verdict is **PASS**. A **Buy** must clear every gate in `docs/DECISION-RUBRIC.md` *and* be held at high conviction. **Too-Hard** is a legitimate outcome — particularly salient here given (a) an extremely rich valuation versus current cash flow and (b) governance/float concentration under SoftBank control.

---
_Scaffolded by the Intake agent on 2026-06-01. This is the human's table of contents; downstream agents only write into folders that already exist._
