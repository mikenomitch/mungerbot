# Valuation Lane — NOTES (URBN, as-of 2026-06-02)

**Specialist:** Valuation · **Company:** Urban Outfitters, Inc. (Nasdaq: URBN) · **Fiscal year ends Jan 31.**
**Deliverable model:** [`artifacts/valuation.md`](../../artifacts/valuation.md) (full grids) · reproducible calcs: [`artifacts/valuation-calcs.txt`](../../artifacts/valuation-calcs.txt).
**Discipline:** facts + a sourced valuation argument; **no buy/sell opinion.**

---

## Headline numbers
- **Price (2026-06-02 close): $72.26.** Market cap ~**$6.19B** (85.60M post-buyback shares); ~$6.42B on 88.80M diluted.
- **EV ex-leases ~$5.54B; EV lease-adjusted ~$6.74B** (the aggregator's $6.74B EV = lease-adjusted; it counts the ~$1.2B operating lease as "debt"). **Net cash $650.8M = $7.60/sh; zero funded debt.**
- **TTM (to 2026-04-30):** revenue $6,317M · EBIT $617M · net income $472M · diluted EPS $5.21 · OCF $558M · capex $407M · FCF $150M (depressed — see below).
- **FY26 (yr-end 2026-01-31):** revenue $6,165M · EBIT $606M · NI $465M · EPS $5.06 · OCF $575M · capex $260M · FCF $315M · buybacks $176M.
- **FY27 consensus:** revenue ~$6.7–6.8B · EPS ~$6.04–6.07 (12 analysts); avg PT $83.17 (range $67–$100).

## Multiples — the read
- **Trailing P/E 13.9x, forward ~11.9x, ex-cash forward ~10.7x.** EV/EBIT(ex-lease) 9.0x, EV/EBITDA(ex-lease) 7.2x (8.8x lease-adj), P/B 2.37x, P/S 0.98x.
- **Vs own 5-yr history:** P/E mid-range (5-yr 9–16x); P/B at the high end (record ROE); EV/EBIT(DA) slightly below FY23–26 avg. → valued **roughly in line with its own recent history**, not a trough or a peak.
- **Vs peers (all 2026-06-02): URBN trades at a clear premium** — P/E 13.9x vs ANF 7.3x / AEO 10.0x / GAP 8.5x; EV/EBITDA 8.8x vs 5.0/6.9/6.0. Premium is paid for the **Nuuly growth engine** (+34.5% YoY, sub-segment margin turned positive at 5.9% in Q4 FY26), **3-segment diversification**, and a **net-cash** sheet vs peers' net debt. **The premium IS the valuation risk** — ANF has near-identical financials at ~half the earnings multiple.

## FCF normalization (do not use headline EV/FCF)
- TTM FCF $150M ⇒ EV/FCF 36.8x is **distorted**: TTM capex $407M >> FY26 $260M (Q1 FY27 capex alone $193M) — a Nuuly-fulfillment + store-build spike.
- Normalized FCF **~$240–315M** (FY26 = $315M; OCF $558M less steady-state capex $280–320M = $238–278M) ⇒ EV/FCF ~18–22x.
- Owner-earnings sanity: NI $472M + D&A ~$150M − maint. capex ~$150–180M ≈ **$440–470M** maintenance FCF; the gap to reported FCF is growth investment. **Data gap: URBN does not split maintenance vs growth capex** — this is the model's softest input.

## Reverse DCF — what the price embeds
- FCFE reverse-DCF (ke 10%, term g 2.5%, 5yr + 5yr fade, net cash added): $72.26 implies **~5–7% sustained FCF growth** on a $320–350M normalized base (8.0% at $300M; ~0% if owner-earnings ≈ $450M).
- **Interpretation: a modest, achievable hurdle — not a heroic/bubble multiple.** URBN compounded revenue ~7–8%/yr FY22→FY26. The market is **not** extrapolating recent 11% growth into perpetuity. The debate is **durability**, not whether the multiple is irrational.

## 3-scenario forward DCF (FCFE) + cross-check
| | FCFE DCF $/sh | Exit-P/E cross-check $/sh |
|---|---|---|
| Bear | $45 (−37%) | $39 |
| Base | $73 (+2%) | $59 |
| Bull | $106 (+47%) | $82 |

- Assumptions (explicit): **Bear** FCFE0 $300M, 0% g, term 2.0%, ke 10.5% (fashion down-cycle, Nuuly stalls, margin compresses to ~33%). **Base** $340M, 6% g, term 2.5%, ke 10.0% (MSD comps, Nuuly scales to sustained profit, op margin ~9.5–10%). **Bull** $380M, 9% g, term 3.0%, ke 9.5% (Nuuly inflects, HSD compounding, margin >10.5%).
- Exit-P/E cross-check (EPS $5.21 → grow 5yr → exit 11x/13x/15x → discount 10%) is **more conservative**; I weight the blend toward it because the FCFE terminal value is ~70% of value and the FCFE0 base is judgment-laden.
- **Blended intrinsic range: ~$50 / ~$65 / ~$95** (bear/base/bull).
- **Sensitivity:** ±100bp ke or ±50bp term g swings base ±$5–10/sh (±7–14%) — the model's biggest fragility.

## Bottom line (for the dossier; NOT advice)
- **Intrinsic range ~$50–$95, base ~$65–73. Price $72.26 ⇒ margin of safety ≈ 0% to slightly negative** on the central case. **No Munger-style margin of safety at today's price** — roughly fairly valued to modestly rich; bear downside ~−30–37%, bull upside ~+30–47%.
- **Method:** equity FCFE DCF, cross-checked with exit-P/E and a peer/own-history multiples grid. **Weakest assumption: the normalized FCF base** (maintenance-vs-growth capex undisclosed; TTM FCF distorted). Secondary: terminal-value sensitivity to ke / term g.

---

## Data gaps & caveats (as-of 2026-06-02)
1. **Primary filings not directly read.** SEC EDGAR HTML for the FY26 10-K and the Q1 FY27 8-K returned **HTTP 403** to the fetch tool; figures sourced from the Q1/Q4 press releases and stockanalysis.com (which compiles the filings). Confirm against the **Q1 FY27 10-Q** (qtr ended 2026-04-30) and **FY26 10-K** (yr ended 2026-01-31) when EDGAR access is available. Filing URLs: [FY26 10-K](https://www.sec.gov/Archives/edgar/data/912615/000119312526137916/urbn-20260131.htm), [Q1 FY27 8-K](https://www.sec.gov/Archives/edgar/data/0000912615/000119312526233928/urbn-ex99_1.htm).
2. **Maintenance vs growth capex split — not disclosed.** Drives normalized FCF and therefore the whole reverse-DCF / DCF base. Treated as a judgment range ($240–315M).
3. **Share count.** Used 85.60M (post-Q1-buyback quote basis) for market cap; 88.80M diluted weighted-avg for per-share value. Pin exact basic/diluted/treasury counts from the Q1 FY27 10-Q. URBN repurchased 4.6M shares for $300M in Q1 FY27 alone — count is moving.
4. **D&A estimate ~$150M/yr** inferred from ~$34M/quarter (Q4 FY26 disclosure) for EV/EBITDA; confirm full-year D&A from the cash-flow statement.
5. **Forward consensus beyond FY27** is paywalled on stockanalysis ("Pro"); FY28–29 estimates not captured. PT range $67–$100 (avg $83.17) from 12 analysts.
6. **Cost of equity** is a built assumption (rf ~4.3% + ERP ~5% × beta ~1.3 ≈ 10.8%; base 10%, sensitized 9–12%) — not independently sourced beta; treat as a modeling input, not a fact.
7. **Lease treatment:** I treat operating leases as operating (rent in opex) and report EV both ways. A capitalize-leases-as-debt view raises EV to ~$6.74B and EV/EBITDAR analysis would add back rent — left to the financials lane if it prefers that convention.

## Sources (all accessed 2026-06-02)
- URBN Q1 FY27 release (qtr ended 2026-04-30, reported 2026-05-20): [globenewswire](https://www.globenewswire.com/news-release/2026/05/20/3298859/4732/en/URBN-Reports-Record-Q1-Sales-and-Income.html)
- URBN price / statistics / financials / ratios / cash-flow / forecast: [stockanalysis.com/stocks/urbn](https://stockanalysis.com/stocks/urbn/) and sub-pages /statistics, /financials, /financials/ratios, /financials/cash-flow-statement, /forecast
- Peers: [ANF](https://stockanalysis.com/stocks/anf/statistics/) · [AEO](https://stockanalysis.com/stocks/aeo/statistics/) · [GAP](https://stockanalysis.com/stocks/gap/statistics/)
- Nuuly segment profitability (Q4 FY26 sub-segment op income $9.4M, 5.9% margin): [investing.com Q4 FY26 slides](https://www.investing.com/news/company-news/urban-outfitters-q4-fy26-slides-record-operating-income-nuuly-surges-43-93CH-4526263)
- FY26 10-K (capex guidance ~$240M; Q4 D&A $34M): [SEC 10-K FY26](https://www.sec.gov/Archives/edgar/data/912615/000119312526137916/urbn-20260131.htm) (text via search; HTML 403 to fetch tool)
- Market snapshot (run-level): [`research/_snapshot.md`](../_snapshot.md)
