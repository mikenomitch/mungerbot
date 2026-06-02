# Valuation Lane — Arm Holdings plc (ARM)

**As-of:** 2026-06-01 (market close) · **Lane:** valuation · **Currency:** USD · **FYE:** March 31
**Mandate:** Triangulate intrinsic value (historical/peer multiples + reverse-DCF + 3-scenario
forward DCF), output an intrinsic-value range, current price, and implied margin of safety.
**Discipline:** collect & verify facts; no buy/sell opinion. SBC is treated as a real cost.

**Full model:** [`artifacts/valuation.md`](../../artifacts/valuation.md) ·
**Data table:** [`artifacts/valuation-data.csv`](../../artifacts/valuation-data.csv)

---

## Headline

At **$408.85** (close 2026-06-01), Arm carries ~**231× non-GAAP / ~481× GAAP TTM earnings**,
**~88× EV/Sales**, and **~409× EV/EBITDA**. A reverse-DCF says the price requires **~35–40% FCF
compounding for ~15 years**; even hitting management's own aggressive FY2031 target (>$9 EPS) implies a
**negative 5-yr return at any normal exit multiple**. Triangulated intrinsic value **~$30–$235/share**
(midpoint ~$130) ⇒ **margin of safety ≈ −68% at midpoint, and still ≈ −43% at the bull ceiling.**
**The price exceeds the high end of intrinsic value under every method examined.**

---

## 1. Market anchors (as-of close)

- **Price $408.85**, +15.73% on the day; **prior close $353.29**. Day range $381.25–$421.69.
  52-wk range **$100.02–$421.69**; 200-day MA only **$152.18** — i.e., the as-of price is a single
  close at the **top of a momentum spike near a 52-wk high** (stock ~4× its 52-wk low).
  [stockanalysis.com](https://stockanalysis.com/stocks/arm/) (accessed 2026-06-01).
  The spike followed an Nvidia Arm-based-PC-processor announcement + analyst PT hikes
  ([StocksToTrade, 2026-06-01](https://stockstotrade.com/news/arm-holdings-plc-arm-news-2026_06_01-2/)).
- **Shares (diluted wtd-avg FY26):** 1,068 M (Arm 6-K FY2026). **Market cap ~$436.7 B** (matches
  stockanalysis $436.68B). **Cash + ST investments $3,601 M** ($2,751M + $850M); **debt ~$491 M**
  (lease liabilities; 6-K reports no borrowings) ⇒ **net cash ~$3.1 B** ⇒ **EV ~$433.6 B**
  (matches stockanalysis EV $433.89B).

## 2. FY2026 fundamentals (PRIMARY — Arm 6-K, FYE 2026-03-31)

Source: Arm FY2026 Q4/full-year 6-K, exhibit 99.2 (SEC accession 000197323926000062), as reported via
[StockTitan 6-K mirror](https://www.stocktitan.net/sec-filings/ARM/6-k-arm-holdings-plc-uk-current-report-foreign-issuer-7e9ca9ac7dda.html)
and Arm's [newsroom release](https://newsroom.arm.com/news/arm-q4-fye26-results); cross-checked vs
[stockanalysis.com statistics](https://stockanalysis.com/stocks/arm/statistics/). (Direct SEC HTML
returned HTTP 403 to this tool — see data gaps.)

| ($M unless noted) | FY2026 | FY2025 |
|---|---|---|
| Revenue | **4,920** (+23%) | 4,007 |
| — Royalty | 2,613 (+21%) | 2,160 |
| — License & other | 2,307 (+25%) | 1,847 |
| GAAP operating income | 900 | 831 |
| GAAP net income | **904** | 792 |
| GAAP diluted EPS | **$0.85** | $0.75 |
| Non-GAAP operating income | 2,115 | 1,871 |
| Non-GAAP operating margin | 43.0% | 46.7% |
| Non-GAAP net income | **1,889** | 1,737 |
| Non-GAAP diluted EPS | **$1.77** | $1.63 |
| Operating cash flow | 1,524 | — |
| Non-GAAP free cash flow | 882 | — |
| **Stock-based compensation** | **1,052** | — |

- **Q1 FY2027 guidance:** revenue $1.26 B ±50; non-GAAP EPS $0.40 ±0.04; non-GAAP opex ~$760 M
  ([Arm 6-K; Investing.com transcript](https://www.investing.com/news/transcripts/earnings-call-transcript-arm-holdings-reports-record-q4-fy2026-results-93CH-4665853)).
- **Management FY2031 target:** ~$15 B AGI-CPU + ~$10 B IP = **$25 B revenue, ">$9 EPS"** (non-GAAP)
  ([Arm Q4 FY26 slides via Investing.com](https://ng.investing.com/news/company-news/arm-q4-fy2026-slides-15b-chip-revenue-target-9-eps-by-2031-93CH-2488253)).

## 3. Current multiples (computed at $408.85)

| Multiple | Value | Multiple | Value |
|---|---|---|---|
| P/E GAAP TTM | **~481×** | EV/EBITDA | **~409×** |
| P/E non-GAAP TTM | **~231×** | EV/EBIT (GAAP) | ~482× |
| Forward P/E FY27 (non-GAAP) | ~163× | EV/EBIT (non-GAAP) | ~205× |
| EV/Sales | **~88×** | P/OCF | ~287× |
| P/Book | ~45× | P/FCF (non-GAAP) | ~495× |

- **vs OWN history:** P/E ranged ~142× (Q1-CY25) to >1,000× (Q4-CY23, EPS ~$0.07); ~3-yr avg ~319×
  ([fullratio](https://fullratio.com/stocks/nasdaq-arm/pe-ratio),
  [financecharts](https://www.financecharts.com/stocks/ARM/value/pe-ratio)). Today's ~231× non-GAAP
  P/E is **above the 3-yr average** and in the **upper half** of its post-IPO range → **no "cheap vs
  itself" case.**
- **vs PEERS (June 2026, secondary):** NVDA fwd P/E ~21× / EV-EBITDA ~32×
  ([stockanalysis NVDA stats](https://stockanalysis.com/stocks/nvda/statistics/)); AMD fwd P/E ~32–58×;
  AVGO fwd P/E ~33–38× ([Yahoo/247WallSt](https://finance.yahoo.com/news/broadcom-vs-amd-ai-chip-154500617.html)).
  **ARM trades ~5–8× the forward P/E of its fastest-growing large-cap AI-chip peers** and >10× their
  EV/EBITDA. ARM's ~98% gross margin (IP-royalty model) justifies *a* premium, not an order-of-magnitude one.

## 4. Reverse-DCF — implied expectations

Two-stage FCFF on EV $433.6 B; **normalized owner-FCF base ~$1.0 B** (between GAAP NI $904 M and
non-GAAP FCF $882 M — both ~$0.9 B once SBC is a real cost); WACC 11.5%; terminal g 3%.

- 25% start CAGR (fade to 10% over 10y) → EV only **~$35 B**. 35% start → ~$51 B. 40% **flat** 10y →
  ~$161 B. **35% flat for 15 years → ~$309 B — still below $433.6 B.** ⇒ the price embeds **~35–40%
  FCF compounding for ~15 years** with no margin slip (grow FCF ~30–50×). Beyond historical precedent
  at this scale and beyond management's own plan.
- **Management-target cross-check (key):** if Arm hits >$9 FY2031 non-GAAP EPS (~$9.9 B NI, ~11× FY26
  GAAP), 5-yr return from $408.85 is **−10.7%/yr at 25× exit, −7.4%/yr at 30×, −1.9%/yr at 40×,
  +2.5%/yr at 50×.** To earn 11.5%/yr, the market must **still pay ~76× earnings in 2031.**
  Equivalently a 30× exit implies FY2031 non-GAAP EPS **~$22.8** (67%/yr) — ~2.5× the bull target.

## 5. Forward 3-scenario DCF

**Pure FCFF DCF** (value/sh = (EV + net cash)/1.10 B sh):

| Scenario | FCF0 | Stage-1 | WACC | gT | Value/sh | MoS vs $408.85 |
|---|---|---|---|---|---|---|
| Bear | $0.7B | 15%→4% | 13.0% | 2.5% | **~$13** | −97% |
| Base | $1.0B | 25%→6% | 11.5% | 3.0% | **~$31** | −92% |
| Bull | $1.8B | 35%→10% | 10.0% | 4.0% | **~$121** | −70% |

**Exit-multiple frame** (value today = FY2031 non-GAAP EPS × exit P/E, discounted 11.5%) — the bull
underwriting, sets the defensible ceiling:

| FY31 non-GAAP EPS | 25× | 35× | 45× | 55× |
|---|---|---|---|---|
| $4 (bear) | $58 | $81 | $104 | $128 |
| $6.5 (base) | $94 | $132 | $170 | $207 |
| $9 (mgmt bull) | $131 | $183 | **$235** | $287 |

Only **bull EPS ($9) at 45–55× exit** approaches the price; "base" ($6.5 × 35×) ≈ **$132 (−68%)**.

**Base sensitivity:** value/sh stays **$25–$40** across WACC 10–13% × gT 2–3.5% → the ~13× gap is a
*cash-flow-base* problem, not a discount-rate one. **You cannot close it with WACC.**

## 6. Earnings-quality adjustments (why GAAP governs)

- **SBC $1,052 M = 21% of revenue** — real cost, dilutive; non-GAAP adds it back, flattering FCF ~$1 B/yr.
- **GAAP NI ($904 M) = 48% of non-GAAP NI ($1,889 M).** Owner-earnings ≈ near GAAP ⇒ DCF base ~$1.0 B is
  generous, not harsh.
- **Margin direction wrong:** non-GAAP op margin **fell** 46.7%→43.0% YoY on +23% revenue (R&D for the
  data-center push scaling faster than the bull model assumes).

## 7. Intrinsic value, price, margin of safety

| | Value/sh |
|---|---|
| Bear (DCF) | ~$13 |
| Base (DCF) | ~$31 |
| Base (exit-mult) | ~$132 |
| Bull (exit-mult ceiling) | ~$235 |
| **Triangulated RANGE** | **~$30 – $235** |
| **Midpoint** | **~$130** |
| **Current price** | **$408.85** |
| **MoS at midpoint** | **≈ −68%** |
| **MoS at bull ceiling** | **≈ −43%** |

**Method:** reverse-DCF + 3-scenario FCFF DCF + forward-earnings/exit-multiple cross-check + peer/own-
history multiples. **Weakest assumption:** normalized starting cash flow and terminal exit multiple —
bears anchor GAAP/owner-FCF (→ $13–31), bulls anchor non-GAAP EPS + durable premium (→ ~$235).
The conclusion is **robust to that disagreement: under every method the price exceeds the top of the
intrinsic-value range**, so MoS is negative across the whole plausible band; only the *magnitude* varies.

## 8. Red flags (valuation lens)
- **No margin of safety on any method.** Even the most generous bull case leaves the price ~74% above
  value (−43% MoS).
- **Priced for >2× management's own ambitious FY2031 plan** to deliver a normal return.
- **Heavy reliance on non-GAAP** to make valuation look even merely "expensive" rather than extreme;
  21%-of-revenue SBC is the swing factor.
- **As-of price set on a +15.7% momentum day at a 52-wk high**, well above its 200-day MA ($152) —
  high risk that the entry multiple itself is transient.

## 9. Data gaps
- Direct SEC 6-K/20-F HTML not fetchable here (HTTP 403); FY2026 figures via 6-K mirror + cross-check.
  Use FY2026 **20-F (accession 000197323926000097)** to confirm SBC, book value, lease detail, exact
  share count for a tighter model.
- No clean sell-side **FY27/FY28 consensus EPS** table located beyond company guidance + FY2031 target;
  FY2027 non-GAAP EPS approximated ~$1.6–2.0 from quarterly guidance.
- Peer multiples are point-in-time secondary figures — order-of-magnitude context only.
- Market cap/EV vary ±10% across sources in this volatile late-May/June-2026 window.

---
_Sources: Arm 6-K FY2026 (SEC accession 000197323926000062, via StockTitan mirror); Arm newsroom
FY26 results; Arm Q4 FY26 investor slides (via Investing.com); stockanalysis.com (ARM & NVDA quote/
statistics, accessed 2026-06-01); fullratio.com & financecharts.com (ARM P/E history); Yahoo Finance /
247WallSt (peer multiples); StocksToTrade (2026-06-01 price-driver). All multiples & DCF/reverse-DCF
computed by this lane; see artifacts. As-of 2026-06-01._
