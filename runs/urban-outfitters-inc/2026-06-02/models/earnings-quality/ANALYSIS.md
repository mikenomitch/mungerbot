<!--
  Per-model write-up: Accounting — Earnings Quality.
-->
# Earnings Quality — Urban Outfitters, Inc. (URBN)

**Discipline:** Accounting  ·  **Intensity:** deep  ·  **As-of:** 2026-06-02

## What this model predicts

The earnings-quality lens asks one question: *are the reported profits real, repeatable cash, or are
they manufactured by accounting choices?* Reported net income is an opinion; cash is closer to a fact.
This model treats the gap between the two as the signal. If URBN's earnings are **high quality**, we
should observe:

1. **Cash backs the accrual.** Operating cash flow (OCF) ≥ net income over time; the cash-flow accruals
   ratio `(NI − OCF)` is negative or small. Low quality looks like the inverse — earnings persistently
   exceeding cash, financed by a rising balance sheet (Sloan: high-accrual firms mean-revert and
   underperform).
2. **No working-capital channel games.** Receivables and inventory do not balloon faster than sales for
   long (the signature of channel-stuffing or pull-forward); DSO/DIO stable.
3. **"One-offs" are genuinely one-off and disclosed.** A clean issuer takes a discrete charge and adds
   it back transparently; a dirty one *serially* reclassifies recurring operating cost as "non-GAAP
   adjustment," or quietly *releases reserves* into earnings to hit a number.
4. **Owner earnings ≈ reported earnings.** Net income + D&A − **maintenance** capex tracks reported NI,
   so the "earnings" the company prints are the cash an owner could actually pocket.
5. **A clean auditor opinion, no restatement, no material weakness.**

Where the prediction holds, the model says *positive* (and de-risks the rest of the lattice, because it
is a fatal-capable discipline — fraud or systematic earnings-inflation is a path to permanent loss).
Where it fails, the model can veto an otherwise attractive business.

## Evidence

**Supporting** (cited):

- **Cash conversion is strong and consistent — the opposite of the low-quality signature.** OCF exceeded
  net income in **four of the last five fiscal years**; OCF/NI = **1.24 (FY2026)**, 1.25 (FY2025), 1.77
  (FY2024), 0.89 (FY2023), 1.16 (FY2022). Cumulative **OCF/NI = 1.29 over 5 years and 1.58 over 10
  years**. [own calc from `artifacts/financial-summary.csv` (XBRL OCF, NetIncomeLoss); DOSSIER §2.2]
- **Cash-flow accruals ratio is firmly negative** (earnings are *under*-stated vs cash, not over): `(NI −
  OCF)` = **−$110.3M FY2026** (−23.7% of NI), −$100.3M FY2025, −$221.7M FY2024. Scaled to revenue, the
  accrual is **−1.8% FY2026** — comfortably in the high-quality zone (Sloan flags *positive* high-accrual
  deciles, not this). [own calc; method = Sloan 1996 cash-flow accruals]
- **The depressed FY2026 FCF/NI of 0.68 is an *investing* phenomenon, not an *operating*/accrual one.**
  It is driven entirely by elevated **growth** capex (4.2% of sales: new stores + Nuuly rental fleet +
  the Raymore, MO fulfillment-center purchase) and an inventory build — *below* the OCF line the picture
  is clean. CapEx is guided to ~$475M for FY2027, so reported FCF will stay below NI while the company
  invests; this is a quality-of-*FCF* nuance, not an earnings-quality defect. [DOSSIER §2.2; financials
  NOTES §5; filings NOTES §3]
- **The GAAP→adjusted bridge is the cleanest possible kind — a single, fully-disclosed, genuinely
  one-time item.** FY2026 adjusted NI ($499.2M) exceeds GAAP NI ($464.9M) by **$34.25M**, and the **sole**
  add-back is a **$46.0M pre-tax charitable contribution to a donor-advised fund** ($11.75M tax effect).
  **No other adjustment exists.** Crucially, the **GAAP and adjusted effective tax rates are nearly
  identical (22.1% vs 22.4%)**, so there is *no tax-rate gaming* inside the non-GAAP number. This resolves
  the dossier's most-flagged earnings-quality open item (the "un-itemized ~$34M add-back"). [verified
  against the FY26 Q4 8-K reconciliation via stocktitan mirror of acc. 0001193125-26-074606; DOSSIER §2.1]
- **Receivables credit risk is negligible.** DSO ~**5.7 days** (receivables $95.7M on $6.17B revenue) —
  a card/cash retail book; the +29% YoY receivables jump is off a tiny base (Nuuly + wholesale). No
  pull-forward-via-credit-terms risk. [financials NOTES §7; `financial-summary.md` §7]
- **D&A tracks capex over a decade** — no sign of under-depreciation flattering margins (D&A $128.5M
  FY2026 vs capex $260.2M; over 10 yrs D&A and capex move together). [financial-summary.csv]
- **SBC is modest and stable (~$30M/yr, ~0.5% of sales)** and the share count is *net* falling (−21.7%
  since FY2017). Buybacks are real reductions, not dilution-masking. [DOSSIER §2.5; financials NOTES §8]
- **Audit hygiene is pristine.** Deloitte & Touche (PCAOB ID 34) issued an **unqualified opinion on both
  the financial statements *and* ICFR** (COSO 2013), **no material weakness, no restatement**, single
  Critical Audit Matter = retail-location asset impairment (standard for a store-heavy retailer).
  No delinquent Section 16 reports; Dodd-Frank clawback box checked. [DOSSIER §2, §6; filings NOTES §7]
- **No activist short-seller report; no regulatory investigation; no auditor change** found to reasonable
  search effort. [DOSSIER §8; news NOTES §8]
- **Segment economics are internally consistent** — the Nuuly inflection (−$17.1M FY2024 → +$34.9M
  FY2026 segment income) is a *primary-filing* fact from the 10-K segment footnote (R80.htm), not a
  press-release adjustment. [`filings-segment-summary.md` §2]

**Disconfirming / quality caveats** (cited):

- **FY2025's reported tax rate (19.5%) was artificially low** due to a non-recurring **~$22.2M
  tax-reserve release** (a classic "cookie-jar" mechanic — releasing a previously-built reserve into
  earnings). FY2026 normalized to 22.1%. This **flatters the FY2025 base**, so headline YoY EPS growth
  (FY2025→FY2026) overstates the underlying improvement and must be normalized. Note: this is the prior
  year's reserve release, disclosed; no evidence of a *new* discretionary reserve change in FY2026.
  [DOSSIER §2.1, §8; filings NOTES §3; news NOTES §2]
- **A ~$100M one-time IEEPA tariff refund is expected in Q2 FY2027 and management will book it as a
  "one-time benefit."** CFO Marein-Efron (Q1 FY27 call): *"we... expect to receive approximately $100
  million in refunds in the second quarter. We are planning to record these refunds as a 1-time benefit
  in the second quarter."* That sum is **~21% of FY2026 net income concentrated in a single quarter** —
  a forward quality-of-earnings distortion. (Transparency credit: management is *pre-flagging* it as
  one-time rather than burying it; the line-item treatment — COGS credit vs discrete — was not specified.)
  [Motley Fool Q1 FY27 transcript, 2026-05-20; DOSSIER §8; news NOTES §5]
- **Nuuly rental-product amortization is a subjective, usage-based estimate.** Rental product (net
  $246.4M, in "other assets") is amortized to COGS *based on the expected number of times each unit is
  rented*. The 10-K itself warns that if actual rents per unit "vary significantly from estimates, it
  could materially affect the amount of rental product amortization included in cost of sales." As Nuuly
  scales (now ~9% of sales, just turned profitable), an optimistic useful-life assumption would
  *under*-amortize and flatter Nuuly's thin 6.1% segment margin. No evidence this is happening — but it
  is the one place in URBN's accounting with genuine estimate leverage over margin. [URBN 10-K
  significant-accounting-policies (confirmed via search of FY24–FY26 10-K language); DOSSIER §1, §4]
- **Inventory grew faster than sales two years running** (FY2025 +12.9% vs +7.7%; FY2026 +12.8% vs
  +11.1%) — the textbook *early-warning* shape for future markdowns / a demand-vs-stock mismatch. It is
  **not yet** showing in margins (GM is at a 10-yr high), and MD&A attributes the build to "increase in
  sales and timing of inventory receipts," with **comparable** inventory up only +5.3% (below sales).
  Management guided FY2027 inventory to grow "at or below sales." Mild watch, not a present defect.
  [DOSSIER §8; filings NOTES §3; news Q1 FY27 transcript]
- **A small recurring one-off cadence exists.** The CFO disclosed that **Q1 FY2026 contained a "$5M /
  36 bps one-time benefit"** (the reason Q1 FY27 GM optically declined 16 bps YoY). Small, but a reminder
  that "record" comparisons carry minor one-time noise both ways. [Motley Fool Q1 FY27 transcript]
- **Q1 FY2027 figures are press-release/unaudited** (10-Q not yet filed as of 2026-06-02; expected
  ~06-09/10). No Q1 cash-flow statement is yet available to confirm the cash-conversion trend held into
  the most recent quarter. [DOSSIER §9; filings NOTES §0]

**Independent research run for this model (with sources):**

- Recomputed the **cash-flow accruals ratio** and OCF/NI and FCF/NI series from the XBRL-sourced CSV
  (own Python). Result above.
- Recomputed a **balance-sheet (Sloan/Richardson) accruals ratio** via Net-Operating-Assets growth
  (NOA = Equity − cash − marketable securities, valid because funded debt = $0): FY2025 **+12.2%**,
  FY2026 **−11.6%**. **I discount the FY2026 −11.6% as an artifact**: NOA fell only because the company
  parked a surge of retained cash into marketable securities (cash+sec $610M→$1,158M), which mechanically
  shrinks NOA without any real operating-accrual reversal. The FY2025 +12.2% is the more informative read
  and is consistent with a *growing* retailer building stores + Nuuly fleet + inventory — not with
  earnings manipulation. The **cash-flow accruals measure is the more reliable signal for URBN** and it
  is unambiguously clean. [own calc]
- **Verified the GAAP→adjusted reconciliation** against the primary FY26 Q4 8-K exhibit (EDGAR direct
  fetch 403-blocked, as the dossier warned; confirmed via stocktitan mirror of acc.
  0001193125-26-074606): single $46.0M pre-tax / $34.25M after-tax charitable-contribution add-back, GAAP
  vs adjusted tax rate 22.1% vs 22.4%.
- **Confirmed Nuuly rental-product accounting policy** (usage-based amortization to COGS; "could
  materially affect... cost of sales") via search of URBN's FY24–FY26 10-K language.
- **Confirmed the ~$100M IEEPA refund treatment** directly from the Q1 FY2027 earnings-call transcript
  (Motley Fool, 2026-05-20).

## Reasoning

URBN is, on the core quality tests, a **high-quality earner**. The single most important fact is that
**cash exceeds reported profit, consistently** — OCF/NI of 1.29 (5-yr) and 1.58 (10-yr) is the
fingerprint of conservative, cash-generative accounting, not the rising-accrual, mean-reverting profile
Sloan warned about. The scariest-looking metric in the dossier — FY2026 FCF/NI of 0.68 — is a *capital
allocation* fact (growth capex for Nuuly and stores), not an *earnings-quality* fact; it lives below the
OCF line and is fully explained. Anyone reading "0.68" as low earnings quality has confused investing
cash flow with operating accruals.

The "one-offs," examined closely, *raise* rather than lower my confidence in management's reporting
hygiene. The much-flagged $34M GAAP-to-adjusted gap turns out to be a **single, clean, discretionary
charitable gift** with the tax rate held constant — the antithesis of the serial-adjuster playbook where
restructuring, "transformation," and stock-comp get perpetually excluded to flatter "adjusted" EPS. And
on the genuinely awkward item — the ~$100M tariff refund — management **volunteered** that it is one-time
and which quarter it lands in. A company intent on manufacturing a "record streak" narrative would have
let that $100M masquerade as operating strength. URBN flagged it. That is the behavior of a clean issuer.

The model is **highly relevant** to this business but **not, on current evidence, a veto.** Where it
keeps me honest:

- **The FY2025 tax-reserve release is a real cookie-jar mechanic.** It is the prior year's, disclosed,
  and there is no sign of a *new* one in FY2026 — but it means the headline FY25→FY26 EPS acceleration is
  partly a normalization optical, and downstream growth/momentum models should use normalized figures.
- **The two highest-leverage *future* quality risks both sit in the newest, fastest, thinnest-margin
  part of the business: Nuuly.** (a) Rental-product useful-life amortization is the one real
  estimate-driven margin lever, and Nuuly's 6.1% margin is thin enough that a modest assumption change
  matters. (b) Nuuly's profitability inflection is only one year old and depends on at-cost internal
  sourcing — an economic, not an accounting, fragility, but it interacts with (a). Neither is a present
  defect; both are *watch the next two 10-Ks* items.
- **The inventory-vs-sales divergence** is the classic leading indicator I am paid to flag, even though
  GM is rising and comparable inventory is contained. If GM rolls over *while* inventory stays elevated,
  that ordering pattern would retroactively look like demand was weaker than the printed comps. The
  FY2027 "inventory at or below sales" guide is the thing to hold management to.

**Check on my own bias (the discipline cuts both ways):** the accounting cleanliness is seductive and
could tempt over-confidence — a pristine audit and great cash conversion say nothing about *durability*
of the underlying brand/merchandising taste (that is the moat lane's problem) or about *valuation*
(margin of safety ~0%, per DOSSIER §3). Clean earnings of a peaking cyclical at peak margins are still
the earnings of a peaking cyclical. I am scoring the *quality* of the reported numbers, which is high;
I am explicitly **not** vouching for their *persistence*. The accruals look clean partly *because*
business is good right now; a fashion-cycle turn would pressure both margins and the inventory position
at once, and that is when reserve/amortization estimates get tested.

Net: from the earnings-quality vantage, the reported profits are **real cash, conservatively stated, and
transparently reconciled**, with a handful of disclosed normalization items and two forward watch-items
(the Q2 refund optics; Nuuly amortization). **Positive signal, no fatal flaw.**

## Red flags

| Flag | Severity | Rationale |
|---|---|---|
| ~$100M IEEPA tariff refund booked as one-time benefit in Q2 FY2027 | medium | ~21% of FY26 NI in one quarter; will distort Q2 optics if read as operating strength. Mitigant: management pre-flagged it as one-time; strip it when judging trend. |
| Nuuly rental-product usage-based amortization (subjective useful-life estimate) | low-med | 10-K warns it "could materially affect... cost of sales"; thin 6.1% Nuuly margin gives the estimate margin leverage as the segment scales. No evidence of abuse today. |
| FY2025 ~$22.2M tax-reserve release (cookie-jar mechanic) flatters the prior-year base | low-med | Disclosed, prior-year; inflates headline FY25→FY26 EPS growth. No new reserve release evident in FY26. Normalize comparisons. |
| Inventory grew faster than sales two years running (FY25, FY26) | low-med | Classic markdown/demand-mismatch early-warning; not yet in margins (comparable inv +5.3% < sales). FY27 guide: inventory ≤ sales — hold them to it. |
| FY2026 FCF/NI 0.68 (sub-1.0) | low | *Growth-capex* driven (Nuuly fleet/fulfillment + stores), below the OCF line — not an accrual problem. Reported FCF stays < NI while investing (capex ~$475M FY27e). |
| Q1 FY2027 figures unaudited / 10-Q not yet filed | low | Most recent quarter is press-release quality; no Q1 cash-flow statement to confirm conversion held. Expected ~06-09/10. |

## What would flip this read (disconfirmers)

- **OCF/NI falls below ~1.0 for multiple consecutive periods** without a clean growth-capex explanation
  (i.e., the *operating* accrual goes positive and stays there) — would signal real accrual buildup.
- **Q2 FY2027 reported as another "record" with the ~$100M refund embedded in operating income / COGS
  and *not* clearly stripped** — would show management leaning on a one-time item to extend the streak.
- **GM holds or rises while inventory stays elevated and Nuuly amortization-per-unit assumptions are
  quietly extended** — the combination would suggest margin is being borrowed from the rental-fleet
  estimate; watch the FY2027 10-K significant-accounting-policies and any change in rental-product
  amortization disclosure.
- **A *new* discretionary reserve release** (tax or otherwise) used to hit a number in a future period —
  would turn the isolated FY2025 release into a pattern.
- **Receivables or DSO start climbing materially faster than sales**, or a shift toward
  bill-and-hold/extended wholesale terms — channel-stuffing signature (none present today).
- **Any restatement, material-weakness disclosure, auditor change, or short-seller report** — would
  immediately escalate toward a fatal-flaw reconsideration.

## Verdict

| | |
|---|---|
| **Signal** | positive |
| **Relevance** | 4 |
| **Strength** | 4 |
| **Conviction** | 4 |
| **Fatal flaw?** | no — strong cash conversion, clean single-item non-GAAP bridge, unqualified Deloitte opinion on financials *and* ICFR, no restatement/material weakness. The disclosed cookie-jar (FY25 tax release), the pre-flagged Q2 refund, and Nuuly amortization are normalization/watch items, not a path to permanent loss or fraud. |

**Bottom line:** URBN's reported earnings are **high quality** — cash backs the accrual (OCF/NI 1.29 5-yr,
1.58 10-yr; cash-flow accruals firmly negative), the much-feared GAAP-to-adjusted gap is a **single,
clean, one-time charitable contribution** with no tax-rate gaming, and the audit is pristine (Deloitte
unqualified on financials and ICFR, no restatement). The low FY2026 FCF/NI is a growth-capex story below
the OCF line, not an earnings-quality defect. The honest caveats are *normalization*, not *manipulation*:
strip the disclosed FY2025 ~$22M tax-reserve release and the pre-announced ~$100M Q2-FY2027 tariff refund
before judging the trend, and watch Nuuly's subjective rental-product amortization and the two-year
inventory-over-sales build as the business scales. No fatal flaw; this model **does not** disqualify the
investment — but it scores the *quality* of the numbers, not their *durability* or the (absent) margin of
safety, which are other lanes' calls.
