<!--
  Per-model write-up: Accounting — Earnings Quality.
  Cite facts (source + section + date); judgments marked [JUDGMENT].
  As-of: 2026-06-01. The legacy footwear P&L is a RUN-OFF; the go-forward NewBird AI
  entity is pre-revenue with no financial statements.
-->
# Earnings Quality — Allbirds, Inc. (BIRD)

**Discipline:** Accounting · **Intensity:** deep · **As-of:** 2026-06-01

## What this model predicts

The earnings-quality lens asks one question: **do the reported numbers represent real,
repeatable, owner-distributable economics, or are they an accounting construction that
will not convert to cash?** It is one of the few *fatal-capable* models — if I find
evidence that earnings are being manufactured (channel stuffing, cookie-jar reserve
releases, capitalizing operating costs, premature revenue, one-offs masquerading as
recurring profit), that alone can disqualify an investment.

If earnings quality here were **high**, I would expect to see:
- **Cash conversion >= ~1.0** — operating cash flow tracking or exceeding net income, and
  free cash flow ~ net income over a cycle.
- **Low / stable accruals** — the gap between accrual earnings and cash earnings small and
  not drifting; no large discretionary reserves swinging the P&L.
- **Reported earnings ~ owner earnings** (FCF - maintenance capex), so the headline number
  is something an owner could actually take out.
- **Clean revenue** — no deferred-revenue pull-forward, no receivables ballooning faster
  than sales, no end-of-period channel loading.
- **No recurring "one-time" charges**, no impairment treadmill, an unqualified audit, and
  no restatements or control weaknesses.

A footwear company that destroyed ~99% of its equity value and is selling itself for $39M
is a natural place to hunt for accounting cosmetics covering a worse reality. So I went
looking for manipulation. **What I found is the opposite of the usual fraud pattern — but
also the opposite of a business with any earnings to be "quality."**

## Evidence

I pulled the actual FY2025 10-K and Q1-2026 10-Q cash-flow statements from SEC EDGAR and
reconciled them line-by-line (not just the dossier summary).

**The accrual / cash picture (cited — figures in $M):**

| Period | Net income | CFO | Accrual = NI-CFO | Capex | FCF (~owner earn.) |
|---|--:|--:|--:|--:|--:|
| FY2021 | -45.4 | -50.9 | +5.5 | 24.2 | -75.0 |
| FY2022 | -101.4 | -90.6 | -10.8 | 31.4 | -121.9 |
| FY2023 | -152.5 | -30.2 | -122.2 | 10.9 | -41.1 |
| FY2024 | -93.3 | -63.9 | -29.5 | 4.1 | -68.0 |
| FY2025 | -77.3 | -55.1 | -22.2 | 3.1 | -58.2 |
| Q1-2026 | -20.7 | -12.1 | -8.7 | 0.07 | -12.1 |

Source: FY2025 10-K Consolidated Statements of Cash Flows (filed 2026-03-31, acc
0001628280-26-022192); Q1-2026 10-Q (filed 2026-05-15, acc 0001628280-26-035302);
`artifacts/financial-summary.csv`.

**Supporting (earnings are NOT being inflated above cash — cited):**
- **Sloan cash-flow accruals ratio is *negative*: ~ -13.6% of avg total assets in FY2025
  and ~ -12.6% in FY2024** [my calc: accruals = NI - (CFO + CFI); avg total assets $149.1M
  / $250.8M]. Negative accruals normally signal *conservative*, high-quality earnings — the
  book loss is *larger* than the cash outflow, the inverse of the classic manipulation flag.
- **The FY2025 net loss is fully supported by non-cash charges, not by soft revenue.** The
  CFO bridge adds back **D&A $8.0M, stock-based comp $7.8M, inventory write-down $2.75M,
  impairment $4.2M, loss on disposal $0.4M** — ~ $21.2M of non-cash items. Net loss + non-cash
  add-backs ~ -$56M pre-working-capital, almost exactly the -$55.1M CFO; **working-capital
  swing was ~ +$0.5M net** (FY2025). (FY2025 10-K Stmt of Cash Flows.) So earnings and cash
  are tightly reconciled — there is no unexplained accrual cushion.
- **No deferred-revenue pull-forward (rules out a key channel/revenue trick).** Deferred
  revenue *declined* every period (-$0.21M FY2025; -$0.47M FY2024; -$0.09M Q1-2026) — the
  company is releasing, not building, customer prepayments, the opposite of revenue
  front-loading. (FY2025 10-K & Q1-2026 10-Q Stmts of Cash Flows.)
- **No channel-stuffing signature.** Allbirds is DTC-led; **accounts receivable is
  immaterial (~$4-7M) and DSO is trivial** — there is no wholesale receivable balance to
  stuff, and AR actually *fell* to $4.4M at 3/31/2026. (DOSSIER 2.2, 6; 10-Q balance sheet.)
- **No earnings-flattering capitalization scheme.** Capitalized internal-use software is
  immaterial; SBC capitalized into software was only **$0.11M (FY2025) / $0.27M (FY2024)** —
  costs are being expensed, not parked on the balance sheet. (FY2025 10-K Stmt of Cash Flows,
  noncash disclosures; financials NOTES 9.)
- **Capex is maintenance-only (~$3.1M, ~2% of revenue)**, so for the legacy business FCF and
  "owner earnings" (FCF - maint. capex) are essentially the same number — there is no hidden
  growth-capex inflating reported FCF, and no deferred-maintenance gimmick (the fleet is being
  closed, not starved to flatter cash). (DOSSIER 2.2; financials NOTES 4.)
- **Audit & controls are clean on the integrity axis.** Deloitte (auditor since 2017);
  **no restatements, no Item 4.02 non-reliance 8-K, management concluded ICFR effective at
  12/31/2025, no material weakness disclosed.** (filings NOTES 7.)

**Disconfirming / quality-eroding (cited):**
- **The audit opinion carries a going-concern "substantial doubt" emphasis paragraph in TWO
  consecutive 10-Ks (FY2024 & FY2025) and the Q1 10-Q.** This is the single most serious
  quality signal: the auditor is telling you the entity may not survive to realize the
  carrying values it reports. (filings NOTES 7; DOSSIER 8.)
- **A "one-time" gift-card breakage benefit flatters FY2025.** The cash-flow statement shows
  **Gift card breakage of $(1,995)K in FY2025** (a non-cash reduction of cash because it was
  booked as *revenue/income* that did not collect cash) — recognized **almost entirely in
  Q1 2025** [10-Q shows $(1,901)K in Q1-2025 vs **$0 in Q1-2026**]. It boosted FY2025 revenue
  / gross profit / reduced operating loss by ~$2.0M. Non-cash, estimate-driven, and
  non-repeating. (FY2025 10-K & Q1-2026 10-Q Stmts of Cash Flows.)
  **[Correction to a dossier note]:** DOSSIER 2.2 and filings NOTES 5 imply this benefit fell
  in **Q1 2026** — the filings show it was a **Q1 2025** item; **Q1 2026 had zero breakage
  benefit**, so the YoY revenue decline (-30.5%) is, if anything, *understated* in quality
  terms (the prior-year base was flattered, not the current quarter).
- **A recurring inventory-write-down treadmill.** Write-downs *every* year:
  **$14.4M (2022) / $8.3M (2023) / $2.7M (2024) / $2.75M (2025) / $0.67M Q1-2026.** Chronic
  over-buying and weak sell-through — each write-down is a prior-period earnings figure that
  proved too optimistic, and the gross margin shown in any given year was being supported by
  carrying inventory that later had to be marked down. (FY2025 10-K Stmt of Cash Flows;
  financials NOTES 6, 9.)
- **Recurring impairments and restructuring dressed as one-offs.** Impairment expense
  **$4.2M (FY2025) [of which $3.5M long-lived store assets per MD&A] / $1.8M (FY2024) /
  $1.0M Q1-2026**; restructuring in multiple years. When "non-recurring" items recur every
  year, they are an operating reality, not a one-off — a quality-of-earnings yellow flag.
  (FY2025 10-K Item 7 / Stmt of Cash Flows; financials NOTES 9.)
- **Accounts payable stretched as a financing tactic.** AP rose from **$5.9M (FY2023) ->
  $17.8M (FY2025) -> $23.2M (3/31/2026)** *while revenue fell* — leaning on vendors for
  liquidity. This temporarily flatters CFO (a financing-via-payables effect inside operating
  cash) and is unwindable. The Q1-2025 comparison proves the sensitivity: a **$(10.4)M AP /
  accrual paydown** in Q1-2025 inflated that quarter's cash *outflow* to -$27.9M, so headline
  CFO swings are distorted by payables timing. (10-Q Stmt of Cash Flows; financials NOTES 6.)
- **New $0.96M provision for bad debt in Q1-2026 (vs $0 prior).** Small, but a fresh sign that
  wholesale/distributor receivables are souring as the business winds down. (Q1-2026 10-Q Stmt
  of Cash Flows.)
- **Cash conversion looks "fine" only because of the inventory liquidation.** CFO/NI ran
  0.20 (2023) -> 0.68 (2024) -> 0.71 (2025) — i.e., the *cash* loss was smaller than the *book*
  loss. But the 2023 "improvement" was a **one-time ~$59M inventory drawdown**
  ($116.8M -> $57.8M), not operational. Strip the destocking and the underlying operating cash
  burn re-widens (-$64M in 2024). This is balance-sheet shrinkage being read as cash
  generation. (financials NOTES 4, 6; DOSSIER 2.2.)

**Independent research I ran for this model:**
- Re-derived the accruals ratio and the NI->CFO bridge from the **actual EDGAR cash-flow
  statements** (FY2025 10-K and Q1-2026 10-Q), not the dossier table, and confirmed the
  reconciliation ties (non-cash add-backs ~ the entire gap; working-capital net ~ 0 in
  FY2025).
- Confirmed the **gift-card breakage timing** (Q1-2025, not Q1-2026) and the **bad-debt
  provision** ($963K, Q1-2026 only) directly from the filings — correcting a dossier ambiguity.
- Confirmed **deferred revenue is declining** in all periods (no revenue pull-forward) and
  **internal-use-software capitalization is immaterial** (no cost-capitalization game).
- Verified **no restatement / no Item 4.02 / no material-weakness** disclosure in the reviewed
  filings.

## Reasoning

The earnings-quality model is **highly relevant to the legacy footwear entity** (it has a
five-year audited history I can interrogate) and **near-irrelevant to the go-forward NewBird
AI shell** (which has *no* financial statements at all — a single ~$2.75M GPU lease, pre-
revenue; DOSSIER 1, 4). I weight the verdict toward what is actually measurable, then carry
the implication forward.

On the **manipulation axis, the legacy numbers are surprisingly clean.** The tell-tale fraud
signatures are absent: accruals are *negative* (conservative direction), the net-loss-to-cash
bridge reconciles almost entirely through legitimate non-cash charges, deferred revenue is
falling (no pull-forward), receivables are immaterial (no channel stuffing), costs are
expensed not capitalized, and there are no restatements or control weaknesses. **There is no
cookie jar being raided to manufacture profit, and no evidence the reported loss understates a
worse cash reality** — if anything the GAAP loss is *more* pessimistic than the cash burn in a
given year because it front-loads write-downs and impairments. [JUDGMENT] This matters: it
means the catastrophe is *real and honestly reported*, not an accounting illusion that might
unwind into either a positive or negative surprise. A Munger earnings-quality red team usually
fears that "good" earnings are fake; here the "bad" earnings are, unfortunately, entirely true.

But the model's *second* job is to ask whether reported earnings equal **owner earnings**, and
here the answer is devastating in a different way: **there are no owner earnings to have any
quality.** FCF - maintenance capex has been negative every year, cumulatively
**-$364M (FY2021-25)**; CFO has been negative every year. Owner earnings ~ FCF here (capex is
maintenance-only), and that number is a deep, persistent negative. So the gap between
"reported earnings" and "owner earnings" — the model's central diagnostic — is small in
*direction* (both are losses) but the *level* is fatal to the business: an owner has only ever
*funded* this company, never received cash from it.

The few places where the headline looks *better* than reality are exactly the soft spots the
model is built to catch: (1) the **gift-card breakage** boosting FY2025 revenue by ~$2M
(non-cash, non-repeating); (2) the **AP stretch** flattering operating cash (unwindable
financing-via-vendors); (3) the **2023 inventory liquidation** masquerading as a cash-flow
turnaround; and (4) the **recurring "one-off" impairments/restructuring/write-downs** that are
really an annual operating cost. Each is individually small, but together they confirm the
direction of bias is *toward* a rosier headline than the underlying economics warrant — the
classic late-stage pattern of a melting business managing optics while it shrinks.

**On our own analytical bias** [JUDGMENT]: I deliberately checked the inverse error. A clean
audit, conservative accruals, and "no fraud found" could lull an analyst into treating the
numbers as *reassuring*. They are not — clean accounting on a company burning ~$20M/quarter
into a $14.4M cash balance, with a going-concern qualification, is clean accounting of a
near-death. The quality of the *reporting* is decent; the quality of the *earnings* is nil.

**Forward (NewBird AI):** the model cannot assess what does not exist. There is no revenue,
no cost structure, no utilization, no audited segment — only a single lease and management's
own words that the venture is "highly speculative, unproven." [JUDGMENT] When a brand-new
GPU-leasing business *does* start reporting, the earnings-quality risks shift to the textbook
neocloud traps this lens is primed for — **aggressive residual-value / useful-life assumptions
on rapidly-deflating GPUs, "adjusted EBITDA" that excludes the depreciation and interest that
are the whole cost** (the dossier notes CoreWeave's GAAP operating margin was -3%/2%/4% vs
~62% adjusted EBITDA; DOSSIER 5), and lease-accounting timing. None of that is yet present to
judge, so it is a *future* quality risk, not a current finding.

## Red flags

| Flag | Severity (low/med/high/fatal) | Rationale |
|---|---|---|
| Going-concern "substantial doubt" in 2 consecutive 10-Ks + 10-Q | high | Auditor signals carrying values may not be realizable; ~1 quarter of cash at the burn rate (DOSSIER 8; filings 7). |
| No owner earnings to assess — FCF/CFO negative every year, cumulative FCF -$364M | high | The model's core diagnostic returns "there is nothing distributable"; quality of *earnings* is nil even though *reporting* is clean (10-K cash flows; my calc). |
| Recurring inventory write-downs every year ($14.4/8.3/2.7/2.75M) | med | Chronic over-optimistic inventory carrying values; prior-period gross margins were over-stated and later trued up (10-K Stmt of Cash Flows; financials 6). |
| Recurring impairment/restructuring billed as "one-offs" | med | $4.2M FY2025 / $1.8M FY2024 / $1.0M Q1-26 — an annual operating reality, not non-recurring (10-K Item 7). |
| Gift-card breakage (~$2.0M) flatters FY2025 revenue/GM | med | Non-cash, estimate-driven, non-repeating income; concentrated in Q1-2025, zero in Q1-2026 (10-K & 10-Q cash flows). |
| Accounts payable stretched 3-4x while revenue falls | med | Vendor financing flatters operating cash and is unwindable; distorts CFO comparisons (10-Q; financials 6). |
| New $0.96M bad-debt provision in Q1-2026 | low | Receivables beginning to sour into the wind-down (Q1-2026 10-Q cash flows). |
| Forward NewBird entity has zero financial statements | high (relevance caveat) | Earnings quality cannot be assessed for the business actually being bought at $4.18; future GPU residual-value/adjusted-EBITDA traps loom (DOSSIER 4-5). |

**Manipulation / fraud finding:** **none.** No channel stuffing (immaterial AR, no wholesale
loading), no cookie-jar reserve releases driving the P&L, no deferred-revenue pull-forward
(it declined), no cost-capitalization game, no restatements, no material weakness, conservative
(negative) accruals. **The fatal-flaw trigger for *this* model — manipulated earnings masking a
healthier or sicker reality — does not fire.** The company is sick, and it is *honestly*
reported to be sick.

## What would flip this read (disconfirmers)

- **A restatement, Item 4.02 non-reliance 8-K, or newly disclosed material weakness** —
  would convert "clean reporting" into an integrity red flag (none exists through 2026-05-28).
- **Evidence of channel stuffing or revenue pull-forward** — e.g., a sudden AR or deferred-
  revenue *build* into the wind-down, or wholesale shipments spiking ahead of the sale. The
  current data shows the opposite (AR and deferred revenue falling).
- **Positive, cash-backed owner earnings** — if some part of the business (or NewBird) began
  producing CFO > capex with low accruals, the "no earnings to have quality" finding would
  weaken. No such evidence today.
- **NewBird AI publishing GAAP segment financials** with conservative GPU useful lives /
  residual-value assumptions and CFO tracking adjusted EBITDA — would let the model actually
  *score* the go-forward entity rather than flag it as unmeasurable. Conversely, an "adjusted
  EBITDA" headline that strips the GPU depreciation + interest would be a fresh, serious
  quality flag.
- **The asset sale closing and a clean post-close balance sheet** showing the ~$1.34/share
  cash is real and segregated — would shift the analysis from "going concern" to "cash + stub"
  and remove the going-concern overhang from the quality picture.

## Verdict

| | |
|---|---|
| **Signal** | negative |
| **Relevance** | 4 |
| **Strength** | 4 |
| **Conviction** | 4 |
| **Fatal flaw?** | no — earnings are *honestly* reported (clean audit, conservative accruals, no manipulation); the model finds no fraud. The capital-loss path is real but is owned by the going-concern / valuation / inversion lenses, not by an earnings-*quality* defect. |

**Bottom line:** The unusual result here is that Allbirds' **reporting integrity is good while
its earnings quality is effectively zero.** There is no channel stuffing, no cookie-jar
release, no deferred-revenue pull-forward, no capitalization game, and no restatement — accruals
are even negative (conservative), and the net loss reconciles cleanly to the cash burn through
legitimate non-cash charges. But the model's central test — *do reported earnings convert to
owner-distributable cash?* — fails completely: CFO and FCF have been negative every year
(cumulative FCF ~ -$364M), the headline is modestly flattered by a non-recurring gift-card
breakage, an AP stretch, recurring "one-off" write-downs, and a 2023 inventory liquidation read
as cash generation, and the audit is going-concern-qualified. The forward NewBird AI entity has
no financials to assess at all, deferring (not removing) the textbook neocloud quality risks
(GPU residual-value and "adjusted-EBITDA" optics). Negative signal, no fatal flaw — the
numbers are honest, and they honestly say there is nothing to own here on an earnings basis.
