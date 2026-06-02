# URBN — Valuation Model (artifact)

**Company:** Urban Outfitters, Inc. (Nasdaq: URBN) · **As-of:** 2026-06-02
**Price (2026-06-02 close):** **$72.26** ([stockanalysis.com](https://stockanalysis.com/stocks/urbn/), Jun 2 2026 4:00 PM EDT)
**Lane:** valuation · All $ in millions unless per-share. Fiscal year ends Jan 31 (FY2026 = year ended 2026-01-31).

> Method note: URBN runs **zero funded debt** and a **net-cash** balance sheet, so the primary engine is an **equity (FCFE) DCF**, cross-checked with an exit-P/E model and a multiples grid. Operating leases (~$1.2B) are treated as **operating** (rent stays in opex); I report EV both ex-lease and lease-adjusted so downstream agents can pick their convention.

---

## 1. Share count, cash, and Enterprise Value (the denominators)

| Item | Value | Source |
|---|---|---|
| Price | $72.26 | stockanalysis.com, 2026-06-02 close |
| Shares out (post-Q1 buyback, quote basis) | 85.60M | stockanalysis.com statistics |
| Diluted wtd-avg shares (Q1 FY27) | 88.80M | Q1 FY27 release |
| Basic shares (Q1 FY27) | 87.50M | Q1 FY27 release |
| **Market cap (85.60M × $72.26)** | **~$6,185M** | computed |
| Market cap (on 88.80M diluted) | ~$6,417M | computed |
| Cash & equivalents (2026-04-30) | $301.4M | Q1 FY27 release |
| Marketable securities (curr $112.0 + non-curr $237.5) | $349.5M | Q1 FY27 release |
| **Total cash + investments** | **$650.8M** | computed |
| Funded debt | **$0** | Q1 FY27 release (debt-free) |
| Operating lease liabilities (curr $225.0 + non-curr $979.6) | $1,204.6M | Q1 FY27 release |
| **EV ex-leases** (mktcap − cash&inv) | **~$5,535M** | computed |
| **EV lease-adjusted** (+ $1,204.6M leases) | **~$6,739M** | computed |

> **Reconciliation:** stockanalysis.com reports EV = $6.74B and "total debt = $1.20B." That $1.20B is the **operating-lease liability counted as debt** — so their EV is the **lease-adjusted** figure (matches my $6,739M). The true funded-debt EV (ex-lease) is **~$5.5B**. Net cash per share = **$7.60**.

---

## 2. Multiples — current vs own history vs peers

### 2a. URBN current (2026-06-02)
| Multiple | Ex-lease EV basis | Lease-adj EV basis | Note |
|---|---|---|---|
| Trailing P/E (EPS $5.21 TTM) | **13.9x** | — | net-cash, so see ex-cash below |
| Forward P/E (EPS ~$6.07 FY27e) | **~11.9x** | — | [stockanalysis forecast](https://stockanalysis.com/stocks/urbn/forecast/) |
| **Ex-cash trailing P/E** | **12.4x** | — | strips $7.60/sh net cash |
| **Ex-cash forward P/E** | **10.7x** | — | strips net cash |
| EV/EBIT (TTM EBIT $617M) | **9.0x** | 10.9x | |
| EV/EBITDA (D&A ~$150M) | **7.2x** | 8.8x | lease-adj matches aggregator 8.8x |
| EV/Sales (TTM $6,317M) | 0.88x | 1.07x | |
| P/Sales | 0.98x | — | |
| P/B (BVPS $30.50) | **2.37x** | — | equity $2,610.6M |
| EV/FCF (TTM FCF $150M) | 36.8x | — | **distorted — see §2c** |
| EV/FCF (normalized FCF ~$300M) | ~18x | ~22x | |

### 2b. URBN own valuation history (fiscal-year-end multiples) — [stockanalysis ratios](https://stockanalysis.com/stocks/urbn/financials/ratios/)
| | FY22 | FY23 | FY24 | FY25 | FY26 | Now |
|---|---|---|---|---|---|---|
| P/E | 9.2 | 16.1 | 12.5 | 13.0 | 14.0 | 13.9 |
| P/B | 1.59 | 1.41 | 1.67 | 2.07 | 2.26 | 2.37 |
| P/S | 0.61 | 0.53 | 0.68 | 0.92 | 1.03 | 0.98 |
| EV/EBITDA (lease-adj) | 6.4 | 9.2 | 8.3 | 9.1 | 9.1 | 8.8 |
| EV/EBIT (lease-adj) | 8.0 | 13.4 | 10.6 | 11.4 | 11.0 | 10.8 |

> **Read:** Current P/E (13.9x) sits in the **middle of URBN's own 5-yr range** (9–16x) — neither cheap nor stretched vs history. P/B (2.37x) is at the **high end** of its range, reflecting record ROE. P/S is mid-range. On EV/EBIT(DA), today is **slightly below** the FY23–FY26 average. Conclusion: URBN is valued **roughly in line with its own recent history**, not at a trough or a peak.

### 2c. FCF normalization (important)
TTM FCF of **$150M** is **artificially depressed**: TTM capex was **$407M** vs FY26 capex of **$260M** — a Nuuly-fulfillment + store-build investment spike (Q1 FY27 capex alone was $193M). This makes the **36.8x EV/FCF headline misleading.**
- FY26 FCF (steady capex): **$315M** → EV/FCF ~17.6x
- Normalized FCF (OCF $558M − steady-state capex $280–320M): **~$240–280M** → EV/FCF ~20–23x
- Owner-earnings sanity: NI $472M + D&A ~$150M − maintenance capex ~$150–180M − modest ΔWC ≈ **$440–470M maintenance FCF**; the gap to reported FCF *is the growth investment.* This is a judgment call (data gap: URBN does not split maintenance vs growth capex).

### 2d. Peer multiples (all as-of 2026-06-02, sources below)
| Co | Price | Mkt cap | EV | Trail P/E | Fwd P/E | P/B | EV/EBITDA | EV/EBIT | P/S |
|---|---|---|---|---|---|---|---|---|---|
| **URBN** | $72.26 | $6.19B | $6.74B (lease-adj) | **13.9** | **11.9** | 2.37 | 8.8 | 10.8 | 0.98 |
| Abercrombie (ANF) | $76.43 | $3.42B | $4.09B | 7.3 | 7.0 | 2.56 | 5.0 | 6.1 | 0.65 |
| American Eagle (AEO) | $16.04 | $2.69B | $4.47B | 10.0 | 9.0 | 1.65 | 6.9 | 10.4 | 0.48 |
| Gap Inc (GAP) | $21.31 | $7.67B | $10.80B | 8.5 | 8.8 | 2.07 | 6.0 | 8.4 | 0.50 |

> **Read:** URBN trades at a **premium to every specialty-apparel peer** on P/E (13.9 vs 7–10) and EV/EBITDA (8.8 vs 5.0–6.9). The market is paying up for (a) the **Nuuly subscription growth engine** (sales +34.5% YoY, scaling toward profitability), (b) **three-segment diversification**, and (c) URBN's **net-cash** balance sheet vs peers' net-debt. Whether that premium is *deserved* is the central debate — ANF in particular has near-identical financials at roughly **half** URBN's earnings multiple. The premium is the valuation risk: it relies on Nuuly durability and continued comp momentum (7 straight record quarters → extrapolation risk).
> *Peer sources:* [ANF](https://stockanalysis.com/stocks/anf/statistics/), [AEO](https://stockanalysis.com/stocks/aeo/statistics/), [GAP](https://stockanalysis.com/stocks/gap/statistics/), all 2026-06-02.

---

## 3. Reverse DCF — what growth does $72.26 imply?

Equity (FCFE) reverse-DCF. 2-stage: 5-yr high-growth + 5-yr linear fade to terminal; net cash $650.8M added back; cost of equity (ke) base **10%** (rf ~4.3% 10Y + ERP ~5% × beta ~1.3 ≈ 10.8%; rounded to 10% base, sensitized 9–12%); terminal g 2.5%.

| Normalized FCFE0 | Implied 5-yr FCF growth to justify $72.26 (ke 10%, term g 2.5%) |
|---|---|
| $300M | **8.0%** |
| $320M | **6.8%** |
| $350M | **5.1%** |
| $400M | 2.7% |
| $450M (owner-earnings proxy) | 0.6% |

**Sensitivity (FCFE0 $350M):** ke 9% → 2.5% implied · ke 10% → 5.1% · ke 11% → 7.5% · ke 12% → 9.8%.

> **Finding:** Today's price embeds **~5–7% sustained FCF growth** on a normalized $320–350M base (or essentially **zero** growth if you believe owner-earnings are closer to net income ~$450M). This is a **modest, achievable** hurdle — *not* a heroic one. URBN grew revenue at a ~7–8% CAGR FY22→FY26 and EPS far faster off margin recovery. The market is **not** extrapolating recent 11% growth into perpetuity. The bar embedded in the price is reasonable; the question for the model agents is *durability*, not *whether the multiple is a bubble.*

**Ex-cash framing (simplest reverse check):** strip $7.60/sh net cash → ex-cash price $64.66 = **12.4x trailing / 10.7x forward** earnings. For a profitable, net-cash, growing retailer, ~11x forward ex-cash is undemanding **if** earnings hold.

---

## 4. Three-scenario forward DCF (FCFE) — explicit assumptions

Same FCFE structure (5-yr stage-1 + 5-yr fade + Gordon terminal; net cash added). All per-share on 85.60M shares.

| Scenario | FCFE0 | Stage-1 g (yrs 1–5) | Terminal g | ke | **Equity value** | **$/share** | vs $72.26 |
|---|---|---|---|---|---|---|---|
| **Bear** | $300M | 0% | 2.0% | 10.5% | $3,881M | **$45** | −37% |
| **Base** | $340M | 6% | 2.5% | 10.0% | $6,287M | **$73** | +2% |
| **Bull** | $380M | 9% | 3.0% | 9.5% | $9,082M | **$106** | +47% |

**Scenario narratives & weakest assumptions:**
- **Bear** — Fashion cycle turns; Anthropologie/UO comps roll over; Nuuly growth stalls and never reaches scale profitability; gross margin compresses ~150–200bps back toward FY24 (~33%). Multiple de-rates toward ANF (~7–8x). FCFE flat. *Weakest assumption: 0% growth may be too punitive for a net-cash franchise with a structurally growing Nuuly — but captures a genuine fashion-retail down-cycle.*
- **Base** — Mid-single-digit total comps; Nuuly continues scaling (sales +30%+ near-term, fading) and **crosses into sustained segment profitability** (Q4 FY26 already 5.9% sub-segment margin); blended op margin holds ~9.5–10%. ~6% FCFE growth fading to GDP+. *Weakest assumption: the terminal value is ~70% of the DCF — small changes in terminal g / ke swing the answer materially (see §5).*
- **Bull** — Nuuly inflects to a high-margin recurring engine, store fleet + Free People wholesale keep compounding HSD, op margin expands past 10.5%; the market keeps a growth multiple. *Weakest assumption: sustained 9% FCFE growth for a mature US specialty retailer over a full decade is optimistic and assumes fashion risk stays benign.*

### Cross-check: exit-P/E model (more conservative)
EPS $5.21 → grow 5 yrs → apply exit P/E → discount at 10%:
| | EPS in yr 5 | Exit P/E | Price yr 5 | **PV @10%** |
|---|---|---|---|---|
| Bear (2% g, 11x) | $5.75 | 11x | $63 | **$39** |
| Base (7% g, 13x) | $7.31 | 13x | $95 | **$59** |
| Bull (11% g, 15x) | $8.78 | 15x | $132 | **$82** |

> The exit-P/E cross-check is **more conservative** than the FCFE DCF (base $59 vs $73). The ~$14/sh gap is the FCFE model's larger terminal value + net-cash add-back. **Honest blended intrinsic range: ~$50 (bear) / ~$65 (base) / ~$95 (bull).** I weight the blend toward the conservative cross-check because (i) the FCFE terminal value is doing heavy lifting and (ii) the "normalized FCFE0" rests on a maintenance-vs-growth-capex split URBN does not disclose.

---

## 5. Sensitivity grid (Base FCFE0 $340M, stage-1 g 6%) — $/share

| ke ↓ / term g → | 2.0% | 2.5% | 3.0% |
|---|---|---|---|
| **9.0%** | $80 | $84 | $89 |
| **10.0%** | $71 | $73 | $77 |
| **11.0%** | $63 | $65 | $68 |

> A 100bp move in ke or 50bp in terminal g swings the base value ~$5–10/sh (±7–14%). **The valuation is fairly sensitive to the discount-rate / terminal-growth assumptions — typical of an equity DCF on a stable cash generator, and the model's single biggest fragility.**

---

## 6. Bottom line (facts, not a recommendation)

- **Current price:** $72.26 (2026-06-02 close).
- **Intrinsic-value range (blended DCF + exit-P/E):** **~$50 – $95/share**, base case **~$65–73**.
- **Margin of safety:** vs base-case (~$70 midpoint) ≈ **0% to slightly negative** — the stock is **roughly fairly valued to modestly rich** on the central case; a Munger-style margin of safety (buying at a clear discount to conservative value) is **not present** at $72. Downside to **~$45–50** in the bear case (−30% to −37%); upside to **~$95–106** in the bull case (+30% to +47%).
- **What the price implies:** ~5–7% sustained FCF growth — modest and achievable, *not* a bubble. The risk is **durability** (fashion cyclicality, 7 straight record quarters inviting extrapolation, Nuuly profitability not yet proven at scale) and the **peer-relative premium** (13.9x vs ANF 7.3x on near-identical financials).
- **Method & weakest assumption:** equity FCFE DCF cross-checked with exit-P/E and a multiples grid. **Weakest assumption = the normalized FCF base**, because URBN does not disclose maintenance vs growth capex, and TTM FCF ($150M) is distorted by a ~$407M capex spike. Secondary fragility: terminal-value sensitivity to ke / terminal g (§5).

*All figures computed in `artifacts/valuation-calcs.txt` (reproducible Python). Primary anchors: Q1 FY27 release (2026-05-20) and FY26 financials via stockanalysis.com; confirm against the Q1 FY27 10-Q and FY26 10-K when EDGAR access is available (see data gaps in NOTES.md).*
