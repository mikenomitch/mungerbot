# Run Manifest — Urban Outfitters, Inc. (URBN)

**Run directory:** `runs/urban-outfitters-inc/2026-06-02`
**As-of date:** 2026-06-02
**Tier:** standard (~40 mental-model agents)
**Prior thesis to stress-test:** none provided (SELL path not enabled)

## Resolved security

| Field | Value |
|---|---|
| Legal entity | **Urban Outfitters, Inc.** (incorporated in Pennsylvania; U.S. domestic registrant) |
| Listing | **Nasdaq Global Select Market** |
| Ticker | **URBN** |
| Security type | Common stock, single class (one share = one vote; no dual-class structure) |
| Reporting currency | **USD** |
| Fiscal-year end | **January 31** (most recent full year: FY2026, ended 2026-01-31; FY labels lead the calendar — Q1 FY2027 ended 2026-04-30) |
| SEC filing form | **10-K** (annual), **10-Q** (quarterly), supplemented by **8-K** current reports |
| CIK | 0000912615 |

### Identity notes / ambiguities
- **Unambiguous resolution.** "URBN" on Nasdaq = Urban Outfitters, Inc. — the parent holding company. There is no ticker-collision or recent ticker-change risk. Caller-provided ticker "URBN" confirmed.
- **Multi-brand house, not a single banner.** The public entity owns a portfolio of brands/segments, not just the namesake store. Reported segments: **Retail** (Urban Outfitters, Anthropologie, Free People — incl. FP Movement), **Wholesale** (primarily Free People), and **Subscription** (Nuuly clothing-rental). Downstream lanes should analyze the company at the portfolio level and not conflate it with the single "Urban Outfitters" banner.
- **Fiscal-calendar trap.** URBN's fiscal year ends Jan 31 and is labeled by the year it ends in. The most recently reported period as of this run is **Q1 FY2027 (three months ended 2026-04-30)**, reported on 2026-05-20. Agents must not mislabel this as "Q1 2026." The latest full audited year is **FY2026 (ended 2026-01-31)**.
- **Founder/insider influence.** Co-founder Richard Hayne is Chairman; founder/insider ownership has historically been meaningful. The leadership/governance and incentives lanes should quantify current insider ownership and board composition from the latest proxy (DEF 14A).
- **Debt-free, lease-heavy.** No funded debt; the balance sheet carries large operating-lease liabilities (~$1.2B) from the store fleet. The financials/valuation lanes should treat leases explicitly when computing enterprise value and fixed-charge coverage.

A market snapshot (price, shares, market cap, cash, EV) is captured in [`research/_snapshot.md`](research/_snapshot.md).

## Research lanes (this run)

| Lane | Scope |
|---|---|
| filings | Primary SEC filings — 10-K (FY2026), latest 10-Q / Q1 FY2027 8-K, risk factors, segment disclosures, lease & buyback footnotes |
| financials | Revenue by segment (Retail / Wholesale / Subscription), comps, gross & operating margins, EPS, cash flow, balance sheet, working capital, buybacks |
| valuation | Multiples (P/E, EV/EBIT, EV/EBITDA incl. leases, FCF yield), DCF/scenario, implied growth, comparison to retail/apparel anchors |
| news | Recent material developments — Q1 FY2027 results, Nuuly trajectory, brand-level trends, tariffs/sourcing, store openings/closings |
| leadership | Management & board quality, founder/Chairman role, insider ownership, incentive design, capital-allocation track record (buybacks vs. reinvestment) |
| competition | Specialty apparel/lifestyle retail peers, fast-fashion & DTC entrants, rental competitors (Rent the Runway), off-price and marketplace pressure |
| sector | U.S. specialty apparel retail, consumer-discretionary cycle, mall vs. digital traffic, clothing-rental category economics, tariff/sourcing backdrop |
| prediction-markets | Market-implied probabilities / sentiment / analyst-expectation signals where available |

## Mental models (this run — standard tier, 42 models)

Munger-style latticework across disciplines. One subdirectory per key under `models/`.

**Psychology of human misjudgment:** incentives · liking-loving · disliking-hating · doubt-avoidance · inconsistency-avoidance · social-proof · authority-misinfluence · reciprocation · contrast-misreaction · stress-influence · availability-misweighing · use-it-or-lose-it · senescence-decline · envy-jealousy · deprival-superreaction

**Microeconomics & competitive advantage:** competitive-moats · economies-of-scale · network-effects · supply-demand · comparative-advantage · opportunity-cost · pricing-power · specialization

**Mathematics & probability:** compound-interest · permutations-combinations · probability-trees · bayesian-updating · inversion · power-laws · critical-mass · equilibrium

**Engineering & physical systems:** redundancy-backup · breakpoints · feedback-loops

**Biology & ecosystems:** natural-selection · ecosystems-niches · adaptation

**Accounting & statistics:** double-entry-limits · earnings-quality · gaussian-distribution · regression-to-mean · sampling

## Decision discipline

The default verdict is **PASS**. A **Buy** must clear every gate in `docs/DECISION-RUBRIC.md` *and* be held at high conviction. **Too-Hard** is a legitimate outcome. For a fashion/specialty-apparel retailer, foreground the durability question: URBN is riding a multi-quarter streak of record results (seven consecutive record quarters as of Q1 FY2027), so the central tension is **trend-following / extrapolation risk** — whether current momentum (fashion cyclicality, Nuuly growth, margin highs) is durable or a cyclical/fashion peak prone to regression-to-mean.

---
_Scaffolded by the Intake agent on 2026-06-02. This is the human's table of contents; downstream agents only write into folders that already exist._
