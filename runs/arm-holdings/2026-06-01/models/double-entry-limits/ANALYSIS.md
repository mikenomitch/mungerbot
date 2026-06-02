# Accounting: What Numbers Hide — Arm Holdings (ARM)

**Discipline:** Accounting  ·  **Intensity:** deep  ·  **As-of:** 2026-06-01

## What this model predicts

Double-entry bookkeeping is a closed loop: every debit has a credit, the statements
foot, and an auditor can sign a clean opinion — and *all of that can be true while the
reported earnings still mislead*. This lens asks a different question than "are the books
fraudulent?": it asks **what economic reality does the accounting fail to capture, and
where do the permitted choices flatter the picture?** Munger's frame: GAAP is a floor for
honesty, not a ceiling for truth; "the audited financials of American business are doing
a disservice" precisely because they let real costs (especially stock-based pay) be
dressed up as non-cash.

If Arm's accounting is *clean and the earnings are high-quality*, I should observe: (a) a
small, explicable GAAP-vs-non-GAAP gap; (b) free cash flow that, after charging the real
cost of paying people in stock, roughly tracks reported profit; (c) revenue from
arm's-length customers who actually pay cash on commercial terms; (d) no large, soft,
self-reported, or unbilled balances propping up the top line; (e) conservative
capitalization (costs expensed, not parked on the balance sheet); (f) no off-balance-sheet
leverage or goodwill that is one impairment away from a write-down.

If instead the *numbers hide* the real economics, I should see the opposite: a huge
non-GAAP bridge dominated by compensation add-backs, owner free cash flow near zero, a
large slug of related-party / unbilled / self-reported revenue driving the growth, and an
audit "critical matter" sitting right on top of the softest revenue. **The evidence lands
heavily on the second list — without any finding of fraud.** That tension is the whole
read.

## Evidence

**Supporting (the bookkeeping itself is clean / conservative — cited):**

- **Clean audit, no restatement, remediated control.** Deloitte & Touche (auditor since
  2022) issued an unqualified opinion on the FY2026 20-F (filed 2026-05-26). Disclosure
  controls were **effective** at 2026-03-31; a prior IT-general-controls **material
  weakness (FY2021-22) was remediated in FY2025**; no current material weakness, no
  restatement, clawback box unchecked. [DOSSIER section 6; 20-F FY2026]
- **R&D is expensed, not capitalized.** As a US-GAAP filer Arm expenses research &
  development as incurred (R&D = $2,776M, 56% of revenue), the conservative treatment.
  Only qualifying internal-use *operating/back-office* software is capitalized and
  amortized over 3-5 years, and intangible-asset *purchases* were tiny ($30M FY26).
  Intangible assets net are only **$230M**. There is no evidence of dev-cost capitalization
  inflating earnings. [Arm FY2026 6-K cash-flow statement; web research on Arm's software-
  capitalization policy]
- **No balance-sheet leverage games, no off-balance-sheet SPEs.** "Debt" of ~$432M is
  almost entirely operating/finance **leases**; there are **no public bonds**, debt/equity
  ~0.05, and net cash is **~$3.1-3.2B**. Leverage sits at the SoftBank *parent*, not at
  Arm. Leases are on the balance sheet (ASC 842); nothing material appears hidden
  off-sheet. [DOSSIER section 2.3]
- **Goodwill is stable and not being used to defer write-downs.** Goodwill $1,623M
  (FY26) vs $1,620M (FY25) — flat, ~15% of assets, no FY26 impairment. [Arm FY2026 6-K
  balance sheet]
- **Non-GAAP is *fully reconciled* and the add-backs are disclosed line by line.** Arm
  publishes a complete GAAP->non-GAAP bridge; the adjustments are visible, not buried.
  Transparency of *disclosure* is good even where the *substance* is generous. [Arm
  FY2026 6-K, "GAAP to Non-GAAP Reconciliation"]

**Disconfirming (what the numbers hide — cited):**

- **The non-GAAP bridge is ~half compensation add-backs.** FY2026: GAAP net income
  **$904M** -> non-GAAP **$1,889M (~2.1x)**. The dominant adjustment is **equity SBC
  $1,052M (21.4% of revenue)** plus ~$150M employer payroll tax on SBC, with smaller help
  from one-time items (a $131M divestiture gain, $205M equity-investment gains/realizations,
  amortization). In Q4 alone GAAP NI $313M became non-GAAP **$641M**, of which **$261M SBC
  + $29M SBC-related employer tax = $290M** of the $328M uplift. [Arm FY2026 6-K
  reconciliation + cash-flow statement; DOSSIER section 2.1-2.2]
- **Charge SBC as the labor cost it is and owner free cash flow is ~zero/negative for
  three years.** Reported OCF $1,524M - capex $545M = "$979M FCF," but OCF is built by
  **adding back the entire $1,052M SBC**. Owner FCF (FCF - SBC) = **-$73M FY26**, after
  **-$642M FY25** and **-$39M FY24**. The market anchors on non-GAAP EPS $1.77 vs GAAP
  $0.85. [Arm FY2026 6-K cash-flow statement; DOSSIER section 2.2]
- **Arm's headline "non-GAAP free cash flow" itself adds back SBC** and is quoted as
  "$882M TTM, +791% YoY" — but the 791% is off a tiny $99M FY25 base, and the metric
  treats stock pay as free. The general critique applies directly: a firm can lift this
  number simply by paying people in shares. [Arm FY2026 6-K Q4 metrics table; web research
  on SBC-in-FCF debate]
- **30.5% of revenue is related-party, and it drove the *majority* of growth.**
  Related-party revenue = **$1,499M = 30.5% of FY26 revenue, +82% YoY** vs **+7%**
  external. Components: **Arm China IPLA $790.6M (~16% of revenue)** — where Arm holds only
  ~4.8% indirect economic interest and **relies on Arm-China-self-reported royalty data**
  (ECL allowance $28.3M) — plus a **SoftBank-affiliate Consulting Agreement $704.4M
  (+384% YoY)**. These are **non-arm's-length** transactions priced by SoftBank's
  related-party process, not market negotiation. [20-F FY2026 Notes 4 & 20;
  artifacts/filings-related-party-revenue.csv]
- **~$645.8M of that SoftBank revenue is recognized but UNBILLED** (a current contract
  asset owed by a SoftBank-controlled counterparty); contract assets *grew $309M* for the
  year and another $320M sits in non-current contract assets. Revenue is being booked ahead
  of billing and cash, concentrated in the party that controls the company. Realization is
  a known unknown. [20-F FY2026 Note 20; Arm FY2026 6-K cash-flow & balance sheet]
- **The audit's Critical Audit Matter sits exactly on the soft revenue.** The CAM =
  **revenue recognition on material long-term contracts** (identifying performance
  obligations; estimating standalone selling price). Arm states directly that "directly
  observable prices are generally not available," standalone sales "are rare," and pricing
  "varies from one transaction to another" — i.e. the most judgmental, least-observable
  revenue is also the related-party/term-deal revenue. Auditors flagged the same area I am
  flagging. [Arm 20-F FY2026 auditor's report + revenue policy; web research]
- **Working capital is a persistent drain that flatters the P&L vs cash.** FY26 changes
  in assets/liabilities were a **net ~$602M use of cash** (AR -$201M, contract assets
  -$309M, prepaids -$117M), partly offset by contract liabilities +$135M; FY25 was worse.
  Earnings are being recognized faster than they convert to cash. [Arm FY2026 6-K
  cash-flow statement]
- **DSO ~96 days is high for a pure licensor**, and AR of $1,300M **includes ~$270-276M
  due from SoftBank-group related parties** — collection quality is entangled with the
  controller. [DOSSIER section 2.5; related-party CSV]
- **Capital is returned to employees, not owners.** No dividend, no real buyback (~$119M
  token vs ~$1B+/yr SBC); diluted share count rose every year (1,025M->1,068M). The economic
  cost of SBC is *also* a permanent transfer of ownership that the income statement
  smooths and the non-GAAP number erases. [DOSSIER section 2.6]

**Independent research run for this model:** I pulled the FY2026 6-K (Exhibit 99.2) directly
from SEC EDGAR and extracted the full GAAP->non-GAAP reconciliation and the complete
statement of cash flows to verify the SBC bridge, the working-capital drains, the $309M
contract-asset build, capex $545M, and the goodwill/intangibles lines first-hand (not just
from the dossier). I cross-checked Arm's revenue-recognition policy and software-
capitalization treatment, the Critical Audit Matter, and third-party commentary (TradingView/
Leverage Shares) flagging the related-party and SBC earnings-quality issues, and the export-
control "front-loading" hypothesis for the China spike.

## Reasoning

This model is **highly relevant** to Arm and the evidence is **strong**, but it splits into
two findings that must not be collapsed.

**Finding 1 — the bookkeeping is honest; this is not a fraud case.** Auditor clean, no
restatement, a real prior control weakness already remediated, R&D conservatively expensed,
no off-balance-sheet leverage, stable goodwill, and a fully itemized non-GAAP bridge. By the
standards of "aggressive or fraudulent accounting is disqualifying," I find **no disqualifying
accounting**. The reconciliations are transparent. A skeptic is *given* the numbers needed to
undo the adjustments — which is exactly what I did.

**Finding 2 — but double-entry is hiding the two things that matter most: the real cost of
labor and the real quality of revenue.** This is the heart of the lens.
- *What it hides on cost:* SBC ~$1,052M is a genuine, recurring economic cost (cash-equivalent
  pay + permanent dilution), yet it is added back to reach the non-GAAP EPS the market
  capitalizes at ~231x. Strip the disguise and **owner free cash flow has been roughly
  zero-to-negative for three straight years** while the business is celebrated as a
  ~98%-gross-margin cash machine. The gross margin is real; the *owner* economics are not what
  the headline implies. Munger would say the accounting is technically correct and
  economically fictional.
- *What it hides on revenue:* nearly a third of revenue, and the *majority of the growth*, comes
  from parties the controller also controls, on prices the market never set, with ~$646M of it
  unbilled and ~$276M of receivables owed by the same family — and the auditor's single
  Critical Audit Matter is the judgment underlying exactly this revenue. Double-entry records
  these as revenue and a contract asset; it cannot tell you whether the price is arm's-length or
  whether the unbilled balance ever turns to cash. Those are precisely the unknowns this lens
  exists to surface. The "front-loading ahead of export controls" hypothesis, if right, also
  makes the China royalty stream **pulled-forward and less durable** than the run-rate suggests.

**What double-entry does NOT capture (the classic blind spots), applied here:** it under-counts
the **ecosystem/brand asset** (>20M developers, >325B chips — a real moat carried at ~nothing on
the balance sheet, a *positive* omission); and it under-counts **contingent liabilities and
optionality erosion** — the Qualcomm/Nuvia loss, the live FTC/EU/KFTC antitrust probes, and the
SoftBank $8.5B margin loan (72% of shares pledged, undisclosed trigger) are off the balance
sheet yet define the left tail. So the ledger flatters Arm in *both* directions: it ignores a
valuable moat **and** ignores existential contingencies.

**Check on my own bias (the lens turned inward):** the temptation is to over-weaponize "SBC is
fake FCF" into a fraud verdict. It is not fraud, and many high-quality software firms run
similar SBC and disclose it the same way. The honest, calibrated read is *negative on
earnings quality and durability*, not *disqualifying on integrity*. The related-party block is
the one place I would not over-discount the alarm: non-arm's-length + unbilled + self-reported +
controller-priced + audit-flagged is a genuine quadruple-soft combination, and it is carrying
the growth.

**Does this model alone disqualify the investment?** No. I find a credible path to **disappointing
returns and to a sharp earnings/cash re-rating** if the related-party revenue proves pulled-forward
or non-recurring and SBC stays ~21% of revenue — but I do **not** find, *within the accounting
itself*, a credible path to fraud or permanent capital loss that stands on its own. The
permanent-loss tail (margin-loan foreclosure, antitrust structural separation) lives in
governance/legal, not in the ledger. So **fatalFlaw = false** — while flagging that the
related-party realization risk is the item most likely to migrate toward "fatal" if it sours, and
that it compounds badly with the -68% margin-of-safety the valuation lane already finds.

## Red flags

| Flag | Severity | Rationale |
|---|---|---|
| SBC ~21% of revenue add-back -> owner FCF ~zero/negative 3 yrs | high | The headline ~98%-margin "cash machine" generates no owner free cash once stock pay is charged; market capitalizes the disguised number (~231x non-GAAP). |
| 30.5% of revenue related-party; majority of growth; non-arm's-length | high | Top line is propped by SoftBank/Arm-China transactions the controller prices; +82% RP vs +7% external means reported growth is not externally validated. |
| ~$645.8M unbilled SoftBank contract asset; +$309M contract-asset build | high | Revenue recognized ahead of billing/cash from a controlled counterparty; realization is a genuine known-unknown and is the CAM's subject. |
| Arm-China revenue is self-reported; Arm holds ~4.8% economic interest | high | Arm depends on the counterparty's own royalty data for ~16% of revenue; ECL allowance $28.3M; weak verification. |
| Non-GAAP NI ~2.1x GAAP; "non-GAAP FCF +791%" off tiny base | medium | Aggressive framing; the metric adds back SBC and the YoY optics are flattered by a $99M comp base. |
| Persistent working-capital drain (~$602M FY26); DSO ~96d | medium | Earnings convert to cash slowly; collection quality entangled with related parties. |
| Goodwill 15% of assets; prior impairments acknowledged | low | Flat, no FY26 impairment, but a SoftBank-era acquired balance to watch if growth stalls. |
| FPI structure: no 10-Q, no DEF 14A; interim 6-Ks unaudited | low/med | Less granular, less frequently *audited* disclosure than a US issuer — fewer checkpoints on the soft items above. |

## What would flip this read (disconfirmers)

- **External revenue re-accelerates and related-party share falls** toward its historical ~20% with arm's-length pricing evidence — would show the growth is real, not controller-manufactured (would move signal toward neutral).
- **The $645.8M unbilled SoftBank contract asset is billed and collected in cash** over FY27 with no markdown — would retire the largest earnings-quality unknown.
- **SBC declines materially as a % of revenue** (post-IPO RSU cliff rolls off) and **owner FCF turns durably positive** — would close the gap between headline and owner economics.
- **Arm begins meaningful buybacks that more than offset SBC dilution** — would show capital returned to owners, not just employees.
- **Independent verification of Arm-China royalties** (audit-grade, not self-reported) confirming the ~16% revenue line — would remove the self-reporting flag.
- Conversely, **any markdown of the contract asset, an ECL spike, a China royalty air-pocket post-front-loading, or a restatement/CAM escalation** would push toward fatal.

## Verdict

| | |
|---|---|
| **Signal** | negative |
| **Relevance** | 5 |
| **Strength** | 4 |
| **Conviction** | 4 |
| **Fatal flaw?** | no — bookkeeping is clean and not fraudulent; the related-party/unbilled revenue and SBC-erased owner-FCF are serious *earnings-quality and durability* defects, not a self-standing path to fraud/permanent loss. The realization of the ~$646M unbilled SoftBank asset is the item most able to migrate toward fatal. |

**Bottom line:** Arm's ledger is honest — clean audit, conservative R&D expensing, no leverage
tricks, no off-balance-sheet SPEs, fully reconciled non-GAAP — so this is **not** an
accounting-fraud disqualifier. But double-entry is hiding the two things that decide the
investment: the **real cost of labor** (SBC ~21% of revenue, which turns the celebrated
~98%-margin "cash machine" into **roughly zero owner free cash flow for three straight years**),
and the **real quality of revenue** (**30.5% related-party, the majority of growth, much of it
non-arm's-length, self-reported, and ~$646M unbilled** — the exact area the auditor singled out
as its Critical Audit Matter). The numbers foot; the economics they imply do not. Negative on
earnings quality and durability, not fatal on integrity — but a sharp red flag that compounds the
valuation lane's lack of margin of safety.
