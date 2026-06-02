# Arm Holdings plc (ARM) — Valuation Model

**As-of:** 2026-06-01 (market close) · **Lane:** valuation · **Reporting currency:** USD · **FYE:** March 31

> Evidence base only — no buy/sell opinion. All multiples computed by this lane from
> primary FY2026 figures (Arm 6-K, FYE 2026-03-31) and the as-of-date market price;
> cross-checked against stockanalysis.com. SBC is treated as a **real economic cost**
> throughout (the single most important modeling choice — see §6).

---

## 1. Market anchors (as-of 2026-06-01 close)

| Item | Value | Source |
|---|---|---|
| Price / ADS | **$408.85** (close 2026-06-01; +15.73% on day; prior close $353.29) | stockanalysis.com quote |
| Day range / 52-wk range | $381.25–$421.69 / **$100.02–$421.69** | stockanalysis.com |
| Shares (diluted wtd-avg FY26) | 1,068 M | Arm 6-K FY2026 |
| Market cap | **$436.7 B** | price × ~1.068 B sh; matches stockanalysis $436.68B |
| Cash + ST investments (3/31/26) | $3,601 M ($2,751M cash + $850M ST inv) | Arm 6-K FY2026 |
| Total debt | ~$491 M (lease liabilities; 6-K reports **no borrowings**) | stockanalysis.com / 6-K |
| Net cash | **~$3.1 B** | computed |
| Enterprise value (EV) | **~$433.6 B** | mktcap − net cash; matches stockanalysis $433.89B |

The day's +15.7% move followed an Nvidia announcement of an Arm-based PC processor and
multiple analyst PT hikes — i.e., the as-of price sits at the **top of a momentum spike**
(stock ~4× its 52-wk low; 200-day MA only $152). Anchoring on a single day's close near a
52-wk high is itself a data-quality caveat (see §8).

---

## 2. FY2026 fundamentals (primary — Arm 6-K, FYE 2026-03-31)

| Metric ($M unless noted) | FY2026 | FY2025 | YoY |
|---|---|---|---|
| Total revenue | **4,920** | 4,007 | +23% |
| — Royalty revenue | 2,613 | 2,160 | +21% |
| — License & other revenue | 2,307 | 1,847 | +25% |
| GAAP operating income | 900 | 831 | +8% |
| GAAP net income | **904** | 792 | +14% |
| GAAP diluted EPS | **$0.85** | $0.75 | +13% |
| Non-GAAP operating income | 2,115 | 1,871 | +13% |
| Non-GAAP operating margin | 43.0% | 46.7% | −3.7pp |
| Non-GAAP net income | **1,889** | 1,737 | +9% |
| Non-GAAP diluted EPS | **$1.77** | $1.63 | +9% |
| Operating cash flow | 1,524 | — | — |
| Non-GAAP free cash flow | 882 | — | — |
| **Stock-based compensation** | **1,052** | — | — |
| EBITDA (approx) | ~1,060 | — | — |

**Q1 FY2027 guidance:** revenue $1.26 B ±$50 M; non-GAAP EPS $0.40 ±$0.04; non-GAAP opex ~$760 M.
**Management LT target (FY2031):** ~$15 B AGI-CPU + ~$10 B IP = **$25 B revenue, ">$9 EPS"** (non-GAAP).

Earnings-quality flags (carried into §6): **SBC = $1,052 M = 21% of revenue**; GAAP net income
($904 M) is only **48% of non-GAAP** net income ($1,889 M); non-GAAP operating margin **declined** YoY
(46.7%→43.0%) even as revenue grew 23%.

---

## 3. Current multiples (computed at $408.85)

| Multiple | Value | Basis |
|---|---|---|
| P/E (GAAP TTM) | **~481×** | $408.85 / $0.85 |
| P/E (non-GAAP TTM) | **~231×** | $408.85 / $1.77 |
| Forward P/E (FY27, non-GAAP) | ~163× | stockanalysis.com (consensus) |
| EV / Sales | **~88×** | $433.6B / $4.92B |
| EV / EBITDA | **~409×** | $433.6B / $1.06B |
| EV / EBIT (GAAP) | ~482× | $433.6B / $0.90B |
| EV / EBIT (non-GAAP) | ~205× | $433.6B / $2.115B |
| P / OCF | ~287× | $436.7B / $1.524B |
| P / FCF (non-GAAP) | ~495× | $436.7B / $0.882B |
| P / Book | ~45× | stockanalysis.com |

**Own history (since Sept-2023 IPO):** P/E has ranged from ~142× (Q1-CY2025 low) to >1,000×
(Q4-CY2023, when EPS was ~$0.07); ~3-yr average ~319×. P/S (TTM) ~88× now vs a lower historical
band. So today's ~231× non-GAAP P/E is **above the 3-yr average and near the upper half of its own
post-IPO range** — there is no "cheap vs its own history" argument.

**Peers (forward P/E / EV-EBITDA, June 2026):** NVDA ~21× / ~32× · AMD ~32–58× · AVGO ~33–38×.
**ARM trades at roughly 5–8× the forward P/E of its fastest-growing large-cap AI-chip peers** and at
an EV/EBITDA more than 10× theirs. ARM's gross margin (~98%, IP-royalty model) is structurally higher,
which supports *some* premium — but not an order-of-magnitude one.

---

## 4. Reverse-DCF — what growth does today's price imply?

Two-stage FCFF model on EV ($433.6 B). Anchored on a **normalized owner-FCF of ~$1.0 B** (between
GAAP NI $904 M and non-GAAP FCF $882 M, both of which sit near $0.9 B once SBC is treated as real).
WACC 11.5% (high-beta, equity-funded, net cash), terminal g 3%.

| Implied path (FCF0 = $1.0 B) | Resulting EV |
|---|---|
| 25% start CAGR, fade to 10% over 10y, then 3% | ~$35 B |
| 35% start CAGR, fade to 10%, then 3% | ~$51 B |
| 30% **flat** for 10y, then 3% | ~$82 B |
| 40% **flat** for 10y, then 3% | ~$161 B |
| 35% **flat** for **15y**, then 3% | ~$309 B |
| **45% flat for 10y / ~35% flat for 15y** | **~$223–310 B (still < $433.6B)** |

**Read:** to justify EV of $433.6 B off a ~$1 B normalized FCF base, the market must believe Arm
compounds owner-FCF at **~35–40% for 15 years** with no margin slippage — i.e., grows FCF ~30–50×.
That is far beyond any historical precedent for a company of this size and beyond management's own
(already aggressive) FY2031 plan. The price only "works" if one values Arm off **non-GAAP** earnings
(ignoring the 21%-of-revenue SBC dilution) **and** assigns a permanently high exit multiple — see §5.

### Management-target cross-check (most decision-relevant)
Even if Arm **hits its own FY2031 target** of >$9 non-GAAP EPS (~$9.9 B net income, ~11× FY26 GAAP):

| FY2031 exit P/E | Implied 5-yr CAGR from $408.85 |
|---|---|
| 25× | **−10.7%/yr** |
| 30× | **−7.4%/yr** |
| 40× | −1.9%/yr |
| 50× | +2.5%/yr |

To merely **earn 11.5%/yr** from today, the market would have to **still pay ~76× earnings on that
$9 EPS in 2031.** Equivalently, at a normal 30× exit multiple the price implies FY2031 non-GAAP EPS of
**~$22.8** (67%/yr growth from $1.77) — ~2.5× management's own bull target.

---

## 5. Forward 3-scenario DCF

Two complementary frames are shown because a pure-DCF off today's tiny FCF base structurally
under-credits a hyper-growth IP licensor; the **exit-multiple frame (5B)** is how the bull case is
actually underwritten and sets the defensible *upper* bound.

### 5A. Pure FCFF DCF (value/sh = (EV + net cash) / 1.10 B sh)

| Scenario | FCF0 | Stage-1 growth | WACC | Term g | Value/sh | MoS vs $408.85 |
|---|---|---|---|---|---|---|
| **Bear** | $0.7 B | 15% → 4% / 10y | 13.0% | 2.5% | **~$13** | −97% |
| **Base** | $1.0 B | 25% → 6% / 10y | 11.5% | 3.0% | **~$31** | −92% |
| **Bull** | $1.8 B | 35% → 10% / 10y | 10.0% | 4.0% | **~$121** | −70% |

*Bull uses the market's non-GAAP FCF lens ($1.8 B ≈ non-GAAP NI) as the starting cash flow.*

### 5B. Exit-multiple / forward-earnings frame (value today = FY2031 non-GAAP EPS × exit P/E, discounted at 11.5%)

| FY2031 non-GAAP EPS | exit 25× | exit 35× | exit 45× | exit 55× |
|---|---|---|---|---|
| Bear $4 | $58 | $81 | $104 | $128 |
| Base $6.5 | $94 | $132 | $170 | $207 |
| **Bull $9 (mgmt target)** | $131 | $183 | **$235** | $287 |

Only the **bull EPS ($9, = hitting management's aggressive plan) at a still-rich 45–55× exit
multiple** approaches today's price; the more reasonable "base" path (~$6.5 FY31 EPS at 35×) ≈
**$132/sh (−68%)**.

### Base-case sensitivity (FCFF DCF, FCF0 $1.0 B, 25%→6% over 10y)

| | gT 2.0% | gT 2.5% | gT 3.0% | gT 3.5% |
|---|---|---|---|---|
| WACC 10.0% | $35 | $37 | $38 | $40 |
| WACC 11.5% | $29 | $30 | $31 | $32 |
| WACC 13.0% | $25 | $26 | $26 | $27 |

The DCF is **insensitive** to discount-rate/terminal-growth tweaks at this base — the gap to price
is driven by the *near-term cash-flow base*, not the tail. You cannot close a ~13× gap with WACC.

---

## 6. Earnings-quality adjustments (why GAAP, not non-GAAP, governs)

- **SBC $1,052 M = 21% of revenue.** It is a real cost of compensating employees and dilutes
  shareholders. Adding it back (as non-GAAP FCF and non-GAAP EPS do) flatters cash flow by ~$1 B/yr.
- **GAAP NI ($904 M) ≈ 48% of non-GAAP NI ($1,889 M).** The ~$985 M gap is mostly SBC + acquired-
  intangible amortization. A Munger-style owner-earnings view sits **near the GAAP figure**, which is
  why the DCF base of ~$1.0 B is generous, not harsh.
- **Margin direction is wrong:** non-GAAP operating margin fell 46.7%→43.0% YoY despite +23% revenue —
  opex (incl. heavy R&D for the data-center push) is scaling faster than the model implies for the bull.

---

## 7. Intrinsic-value range, price, and margin of safety

| | Value/share |
|---|---|
| Bear (DCF) | ~$13 |
| Base (DCF) | ~$31 |
| Base (exit-multiple, $6.5 FY31 EPS × 35×) | ~$132 |
| Bull (exit-multiple, mgmt $9 FY31 EPS × 45–55×) | ~$235–287 |
| **Triangulated intrinsic-value RANGE** | **~$30 – $235 / share** |
| **Midpoint (rough)** | **~$130 / share** |
| **Current price (2026-06-01)** | **$408.85** |
| **Implied margin of safety at midpoint** | **≈ −68%** (price ~3.1× midpoint value) |
| **Margin of safety even at the BULL ceiling ($235)** | **≈ −43%** (price still ~74% above bull value) |

**Method:** blended reverse-DCF + 3-scenario forward DCF (FCFF) + forward-earnings/exit-multiple
cross-check + peer- and own-history multiple context.

**Weakest assumption (stated):** the **normalized starting cash flow** and **terminal exit multiple**.
Bears anchor on GAAP/owner FCF (~$1 B, SBC expensed) → value $13–31. Bulls anchor on non-GAAP EPS and
a durable premium multiple → value up to ~$235. The honest conclusion is robust to that disagreement:
**under every method examined the price exceeds the high end of intrinsic value**, so the margin of
safety is **negative across the entire plausible range.** The judgment call is only *how* negative.

---

## 8. Data gaps & caveats
- As-of price ($408.85) is a single close at the **top of a +15.7% momentum day near a 52-wk high**;
  a 20–30% drawdown to the trailing trend would change multiples materially but not the directional
  conclusion. Quoted market cap/EV vary ±10% across sources/dates in this volatile window.
- Could not fetch the primary SEC 6-K/20-F HTML directly (SEC returned 403 to this tool); FY2026
  figures were taken from a 6-K mirror (stocktitan) and cross-checked against stockanalysis.com and
  Arm's newsroom release. The FY2026 20-F (filed; accession 000197323926000097) should be used to
  confirm SBC, book value, lease detail, and the exact share count if a tighter model is needed.
- No reliable sell-side **consensus FY2027/FY2028 EPS table** was located beyond company guidance and
  the FY2031 target; FY2027 non-GAAP EPS is approximated at ~$1.6–2.0 from quarterly guidance.
- Peer multiples (NVDA/AMD/AVGO) are point-in-time mid-2026 figures from secondary sources; treat as
  order-of-magnitude context, not precise comps.
