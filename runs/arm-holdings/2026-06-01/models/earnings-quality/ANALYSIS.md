<!--
  Per-model write-up. earnings-quality model.
-->
# Accounting: Earnings Quality — Arm Holdings (ARM)

**Discipline:** Accounting  ·  **Intensity:** deep  ·  **As-of:** 2026-06-01

## What this model predicts

Earnings quality asks one question: **how closely do reported profits track the cash a
disciplined owner could actually pull out, year after year, without starving the business?**
High-quality earnings are *conservative* (cash arrives at or before the income statement
recognizes it), *recurring* (few one-offs, stable cash-conversion), and *honest about labor
cost* (stock comp expensed, not airbrushed out of the headline). The lens is fatal-capable: if
GAAP profit is an accounting artifact while owner cash is zero, the "earnings" the market is
capitalizing do not exist in a form an owner can spend.

If Arm's earnings are **high quality**, I should observe:
1. **Cash conversion >= ~1.0 and stable** — operating cash flow and free cash flow that reliably
   meet or exceed net income, not whipsawing year to year.
2. **Owner earnings ~ reported earnings** — FCF *after* charging stock-based compensation (SBC)
   as the real labor cost it is, roughly in line with GAAP net income.
3. **Low working-capital accruals** — revenue recognized roughly when billed/collected, not
   parked in growing unbilled "contract assets."
4. **Clean, recurring composition** — non-GAAP not built on one-off gains; few reversals,
   restructurings, or related-party-driven jumps; arm's-length counterparties.
5. **No reserve/timing levers** — no cookie-jar reserves, no channel stuffing, no
   recognition-ahead-of-cash that flatters the comparison to a year ago.

If earnings are **low quality**, I should see the opposite: cash that lags profit, SBC papered
over, a swelling unbilled receivable from a controlling related party, and a non-GAAP number the
market anchors on that bears little resemblance to owner cash.

**The finding: Arm fails tests 1-3 outright and partially fails 4-5. By the only definition that
matters to an owner, the earnings are LOW quality** — though, importantly, the problem is
*structural and disclosed*, not hidden fraud.

## Evidence

All figures USD millions, GAAP, fiscal year ending March 31, unless noted. Primary sources: Arm
FY2026 20-F (filed 2026-05-26) and FY2026 Q4/full-year 6-K Exhibit 99.2 (~2026-05-06), CIK
0001973239; auditor Deloitte & Touche LLP. Cash-flow and reconciliation line items pulled from the
6-K results release; cross-checked to the dossier artifacts.

### A. The headline: owner earnings have been ~zero-to-negative for three straight years

| Metric | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---:|---:|---:|---:|---:|
| GAAP net income | 549 | 524 | 306 | 792 | **904** |
| OCF | 458 | 739 | 1,090 | 397 | **1,524** |
| FCF (OCF - capex) | 424 | 675 | 998 | 178 | **979** |
| Equity-settled SBC | 26 | 79 | 1,037 | 820 | **1,052** |
| SBC % of revenue | 1.0% | 2.9% | 32.1% | 20.5% | **21.4%** |
| **Owner FCF (FCF - SBC)** | 398 | 596 | **(39)** | **(642)** | **(73)** |

Source: 6-K FY2026 cash flow statement; dossier section 2.2; my computation. The pre-IPO years
(FY22-23) had clean owner FCF. **Post-IPO, once RSUs vest at scale, owner FCF has been negative or
trivially negative every single year (-$39M, -$642M, -$73M).** [Arm 6-K FY2026; dossier section 2.2]

### B. The GAAP->non-GAAP bridge is ~122% stock-comp — and one-offs *reduce* non-GAAP

I reconstructed the full FY2026 bridge from the 6-K reconciliation:

| Bridge item | $M |
|---|---:|
| GAAP net income | 904 |
| + Stock-based compensation (equity-settled) | +1,052 |
| + Employer payroll tax on SBC (net of R&D credit) | +150 |
| + Restructuring & related | +8 |
| + Other operating (income)/expense, net | +2 |
| + Disposal-activity costs | +1 |
| - **Gain on disposal of business** | **-131** |
| - Income from equity investments, net | -14 |
| - Income from debt investments, net | -5 |
| - Tax effect on non-GAAP adjustments | -80 |
| = **Non-GAAP net income** | **1,889** |

Source: Arm FY2026 6-K Exhibit 99.2 non-GAAP reconciliation; my arithmetic.

Two things matter here, and **one of them corrects the dossier's framing**:
- **The uplift is overwhelmingly SBC.** SBC + employer tax = **$1,202M = ~122% of the $985M
  GAAP->non-GAAP increase.** The market's anchor (non-GAAP EPS $1.77 vs GAAP $0.85, a **2.1x**
  gap) is almost entirely the decision to treat ~21% of revenue in employee stock as if it were
  free. It is not. SBC is a real, recurring transfer of ownership; over FY24-FY26 it totaled
  **~$2.9B** while buybacks were token-to-zero, so the dilution is permanent. [6-K FY2026;
  dossier section 2.6]
- **[Correction to dossier section 2.2.]** The dossier states the non-GAAP bridge is "dominated by
  the SBC add-back **plus one-time gains** (a $127M divestiture, $205M equity-investment gains,
  $131M reversal)." That is not how the FY2026 *net-income* reconciliation works. The **gain on
  disposal is *subtracted* (-$131M)** in the bridge — Arm correctly excludes it *from* non-GAAP —
  and the equity/debt investment items are also net subtractions (-$19M). The one-off items
  therefore **lower** non-GAAP net income by ~$139M, not inflate it. **This is a point in Arm's
  favor on non-GAAP hygiene:** the non-GAAP number is "clean" of one-offs; the quarrel is purely
  the SBC add-back. (The $205M equity-gain and $127M-divestiture figures the dossier cited appear
  to be pre-tax/gross or located elsewhere in the statements; they are not net add-backs in the
  net-income bridge.) [6-K FY2026 reconciliation]

### C. Cash conversion is volatile — the tell of timing-driven, not cash-backed, earnings

| | FY22 | FY23 | FY24 | FY25 | FY26 |
|---|---:|---:|---:|---:|---:|
| OCF / NI | 0.83 | 1.41 | **3.56** | **0.50** | 1.69 |
| FCF / NI | 0.77 | 1.29 | 3.26 | 0.22 | 1.08 |

Source: 6-K FY2026; my computation. A high-quality compounder shows OCF/NI hovering near and
above 1.0 *consistently*. Arm's swings from **3.56x (FY24) to 0.50x (FY25) to 1.69x (FY26)** —
a >7x range in three years — signal earnings whose cash translation is dominated by working-capital
and tax-payment **timing**, not steady cash generation. Independent screens flag this directly:
StockTitan/koalagains assign Arm an **"earnings quality ratio" of 0.50x** (TTM OCF/NI through an
earlier quarter), explicitly noting earnings "rely on accounting accruals rather than actual cash
generation." [stocktitan.net/financials/ARM; koalagains.com/stocks/NASDAQ/ARM]

Management itself attributes the FY26 cash improvement partly to **timing**: non-GAAP FCF rose to
$882M (from $99M) "benefiting from improvements in working capital in revenue accounts **and the
timing of tax payments**" — i.e. not a durable step-up. [StockTitan 6-K summary]

### D. Revenue is recognized ahead of cash — the licensor's channel-stuffing analog

Arm doesn't stuff distribution channels (no physical product), but the equivalent quality risk for
an IP licensor is **recognizing licence revenue up front and parking it in unbilled "contract
assets"** that may take years to convert to cash. The FY26 cash-flow statement shows this is large
and persistent:

| Working-capital cash item (- = cash outflow) | FY26 | FY25 |
|---|---:|---:|
| Change in accounts receivable | -201 | -331 |
| **Change in contract assets (unbilled)** | **-309** | **-412** |
| Change in contract liabilities (deferred rev) | +135 | -4 |
| Change in prepaids | -117 | -140 |
| Change in accrued compensation | +24 | -152 |
| Change in other liabilities | -79 | -381 |
| **Total WC change** | **-558** | **-1,426** |

Source: Arm FY2026 6-K cash flow statement.

- The **contract-asset build alone consumed $309M of cash in FY26 (6.3% of revenue) and $412M
  (10.3%) in FY25.** Revenue is hitting the P&L well before the cash does. [6-K FY2026]
- **DSO ~96 days is high for a pure licensor** (a toll-booth should collect fast); period-end AR is
  $1,300M. [dossier section 2.5]
- The most acute version: of the **$704.4M SoftBank-affiliate "Consulting Agreement" revenue
  (+384% YoY)** booked in FY26, **~$645.8M is an *unbilled contract asset*** owed by a
  SoftBank-controlled counterparty (up from $145.5M a year earlier). That single related-party line
  is ~13% of FY26 revenue **recognized but not yet billed**, with collectibility governed by
  SoftBank's internal related-party process rather than an arm's-length customer. [20-F FY2026 Note
  20; dossier section 8.2, section 9]

### E. Related-party revenue supplied the *majority* of reported growth — the cookie-jar risk

| | FY24 | FY25 | FY26 |
|---|---:|---:|---:|
| Related-party revenue | 724 | 823 | **1,499** |
| % of total revenue | 22.4% | 20.5% | **30.5%** |
| External-customer revenue | 2,509 | 3,184 | 3,421 |

Source: 20-F FY2026 Note 4; dossier artifacts. Related-party revenue **+82% YoY** vs external
**+7%** — so **~84% of the $913M of FY26 revenue growth came from non-arm's-length parties**
(Arm China IPLA $790.6M + SoftBank Consulting $704.4M). [20-F FY2026 Notes 4 & 20]

This is the earnings-quality equivalent of a cookie jar: a controlling shareholder who also sets
the price can, in principle, dial revenue up or down across periods. Two specific quality concerns:
- **Arm China ($790.6M, ~16% of revenue) is self-reported.** Arm holds only ~4.8% indirect
  economic interest, does **not control** Arm China, and **relies on Arm China's self-reported
  royalty data** to recognize revenue; it carries a $28.3M expected-credit-loss allowance against
  the related receivable. Revenue you cannot independently verify is, by definition, lower quality.
  [20-F FY2026 Note 20; dossier section 4.4, section 8.2]
- **The SoftBank Consulting Agreement jumped from $145.5M to $704.4M in one year**, +384%, almost
  entirely unbilled. A near-quadrupling of a related-party line, recognized but not collected, in
  the year before the stock melted up, is exactly the pattern this model is built to flag — *not*
  as proven manipulation, but as revenue whose timing and pricing are not market-disciplined. [20-F
  FY2026 Note 20]

### F. What the model does NOT find (disconfirming / mitigating)

- **No restatement, no current material weakness.** A prior IT-general-controls material weakness
  (FY21-22) was **remediated in FY2025**; FY2026 disclosure controls assessed **effective**; the
  clawback box is unchecked (no restatement). [20-F FY2026; dossier section 6]
- **Cost of sales is genuinely tiny** (~$121M on $4.9B revenue; ~97.5% GAAP gross margin) — the
  gross-margin quality is real and not the issue. [6-K FY2026]
- **Non-GAAP is *clean of one-offs*** (see B) — Arm correctly strips its disposal gain *out*. The
  company is not dressing up the headline with non-recurring gains.
- **The Critical Audit Matter is exactly the right one** — Deloitte flags **revenue recognition on
  material long-term contracts** (performance-obligation identification, standalone-selling-price
  estimation), i.e. the auditor independently identified the same recognition-judgment area this
  model worries about, and signed the opinion. [20-F FY2026; dossier section 6]
- **No documented forensic/short-seller report** alleging fraud or round-tripping turned up in my
  searches. The related-party concern is a *structural quality* flag, not an alleged scheme.
  (Absence of a published bear case is weak evidence, but it is evidence against the strongest
  version of the claim.)

## Reasoning

This model is **highly relevant** to Arm, because the single widest gap in the whole investment
case is the gap between three different "earnings" numbers the market is asked to choose among:
- **Non-GAAP NI $1,889M** (what bulls capitalize; the market pays ~231x it),
- **GAAP NI $904M** (what the income statement says; ~481x), and
- **Owner FCF ~ -$73M** (what an owner could actually pocket after the real cost of the stock used
  to pay employees).

The honest answer is that **owner earnings are the lowest of the three and have been ~zero for
three years.** Everything above that is either a non-cash labor subsidy (SBC) the market is choosing
to ignore, or revenue recognized ahead of cash (the $300-400M/yr contract-asset build), or growth
sourced from a controlling related party that prices its own transactions. None of those three is
*illegitimate* under GAAP — Arm discloses all of them, the auditor signed off, and the SBC add-back
is a standard (if abusive) industry convention. But "legal and disclosed" is not the same as "high
quality." The model's job is to translate reported profit into owner cash, and that translation
collapses Arm's earnings by roughly an order of magnitude.

**Where the model is a stretch / must stay honest:**
- SBC is non-cash *today*; a company can suppress dilution with buybacks. Arm chooses not to (token
  buybacks vs ~$1B+/yr SBC), so for Arm the SBC charge is genuinely borne by owners — but a reader
  who believes SBC will moderate as the company scales would weight owner FCF less harshly. I have
  applied the strict view (SBC is a real cost) because the dilution is actually happening (share
  count 1,025M -> 1,068M).
- The contract-asset build can be benign growth mechanics for a licensor signing large multi-year
  term deals; it only becomes a *quality* problem if it doesn't convert. The acute case is the
  related-party portion ($645.8M unbilled from SoftBank), where collection is not market-disciplined.
  For the external book, the build is a yellow flag, not red.
- I corrected the dossier's claim that one-off gains inflate non-GAAP; in fact Arm's non-GAAP is
  *conservative* on one-offs. Intellectual honesty requires booking that point in Arm's favor even
  though my overall signal is negative.

**Net:** the earnings are low quality on the dimensions that decide whether a $437B price can be
serviced by cash — owner FCF, cash-conversion stability, and the arm's-length-ness of the
fastest-growing revenue. They are *not* low quality in the "fraud / aggressive non-GAAP cosmetics /
material weakness" sense.

## Red flags

| Flag | Severity | Rationale |
|---|---|---|
| Owner FCF (FCF - SBC) negative/zero for 3 straight years (-$39M, -$642M, -$73M) | high | The cash an owner can actually extract after the real cost of stock-comp labor is ~nil; the market capitalizes non-GAAP NI ~21x larger. |
| SBC ~$1,052M (~21% of revenue); non-GAAP NI = 2.1x GAAP, ~122% of the bridge | high | Headline EPS the market pays 231x for is mostly a labor cost airbrushed out; dilution is permanent (no offsetting buyback). |
| $645.8M SoftBank-affiliate revenue recognized but **unbilled** (related-party contract asset, +384% YoY) | high | Largest single quality unknown: recognized, not collected, priced by the controller — collectibility/realization not market-tested. |
| ~84% of FY26 revenue growth from non-arm's-length related parties (+82% vs +7% external) | high | A controller who sets the price can shift revenue across periods; reported growth is not independently disciplined. |
| Arm China ($790.6M, ~16% of revenue) recognized on **self-reported** royalty data; entity not controlled | medium | Revenue Arm cannot independently verify; $28.3M ECL allowance acknowledges credit risk. |
| Cash conversion (OCF/NI) swings 0.50x->3.56x->1.69x; FY26 FCF lift partly "timing of tax payments" | medium | Earnings do not translate to cash on a stable cadence; current-year strength is partly non-durable timing. |
| Contract-asset build $309-412M/yr (6-10% of revenue) recognized ahead of cash; DSO ~96 days | medium | Revenue-recognition-ahead-of-collection — the licensor analog of channel stuffing; elevated for a "toll booth." |
| SoftBank consent rights over **auditor change and accounting-policy change** | medium | The controller can veto the very gatekeepers that police earnings quality; reduces the independence of the controls that produced these numbers. |

## What would flip this read (disconfirmers)

- **SBC moderates AND is offset by real buybacks**, so owner FCF (FCF - SBC) turns durably positive
  and converges toward GAAP NI for 2-3 years. That would move the signal toward neutral/positive.
- **The $645.8M SoftBank unbilled contract asset is billed and *collected in cash*** in FY27 (watch
  the FY27 cash-flow statement: "amounts due from related parties" falling and contract-assets
  reversing into cash) — converting the biggest related-party quality unknown into demonstrated cash.
- **Related-party revenue shrinks as a share of the mix** while external revenue re-accelerates,
  showing the FY26 growth was not a related-party push but a leading indicator of arm's-length demand.
- **Cash conversion stabilizes** — OCF/NI lands in a ~0.9-1.3x band for several years rather than
  whipsawing — evidencing recurring, cash-backed earnings.
- **Independent verification of Arm China royalties** (e.g. audit access, a control change that lets
  Arm verify rather than rely on self-reported data) would upgrade ~16% of revenue.
- Conversely, the read **hardens to worse** if: the SoftBank contract asset grows again unbilled; a
  restatement or new material weakness appears; or DSO/contract-assets keep climbing while cash lags.

## Verdict

| | |
|---|---|
| **Signal** | negative |
| **Relevance** | 5 |
| **Strength** | 4 |
| **Conviction** | 4 |
| **Fatal flaw?** | **No** — but a serious, near-fatal *quality* discount, not a clean bill |

**Bottom line:** Arm's earnings are **low quality where it counts for an owner**: free cash flow
after the genuine cost of stock-comp labor has been roughly **zero-to-negative for three straight
years (-$39M, -$642M, -$73M)**, yet the market capitalizes a non-GAAP number that is **2.1x GAAP and
~122% built from the SBC add-back**, and the **majority of FY26's growth (+82% vs +7% external) came
from non-arm's-length related parties** — including a **$645.8M SoftBank receivable recognized but
not billed** and ~$791M of Arm China revenue booked on **self-reported** data. Cash conversion is
volatile (OCF/NI 0.50x->3.56x->1.69x) and this year's strength is partly tax-timing. This is **not**
fraud — no restatement, no current material weakness, non-GAAP is actually *clean of one-off gains*
(correcting the dossier), and the auditor flagged the right Critical Audit Matter — so I do **not**
call a fatal flaw. But the quality discount is large enough that the relevant "earnings" for
servicing a ~$437B valuation are an order of magnitude smaller than the headline the market is
paying for. **Strongly negative for the Munger "default is no" discipline.**
