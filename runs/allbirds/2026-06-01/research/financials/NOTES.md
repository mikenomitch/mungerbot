# Financial Statements — Allbirds, Inc. (BIRD)

**Lane:** financials · **As-of:** 2026-06-01 · **Analyst:** Financial Statements specialist
**Primary sources:** SEC EDGAR (CIK 0001653909). FY2025 10-K (filed 2026-03-31, acc
0001628280-26-022192); Q1-FY2026 10-Q (filed 2026-05-15, acc 0001628280-26-035302);
FY2024 10-K (filed 2025-03-12, acc 0001628280-25-012130); SEC XBRL `companyfacts` API
(`https://data.sec.gov/api/xbrl/companyfacts/CIK0001653909.json`, retrieved 2026-06-01).
**Artifacts:** [`artifacts/financial-summary.md`](../../artifacts/financial-summary.md) ·
[`artifacts/financial-summary.csv`](../../artifacts/financial-summary.csv).

---

## 0. HEADLINE — read this first

Allbirds is **not a going-concern operating company you can value on its footwear cash
flows.** It is a **melting ice cube undergoing a corporate transformation**:

1. **Legacy footwear business** — six straight years of operating losses, revenue down
   **−49% from its 2022 peak** ($297.8M → $152.5M), gross margin stuck at a commodity-apparel
   **~41%**, **−50% operating margins**, and **$326M of cumulative operating cash burn since
   2020.** The FY2024 *and* FY2025 10-Ks both carry an explicit **going-concern "substantial
   doubt"** disclosure. The board has agreed to **sell substantially all assets to American
   Exchange Group (Aerosoles owner) for $39M cash**, close expected Q2-2026.
2. **The pivot (post-balance-sheet, April 2026)** — management *reversed* an initial plan to
   dissolve and instead will keep the public shell, **rename it, and pivot into a GPU-leasing
   "Electronics Infrastructure Business"** funded by up to **$50M of 12% senior secured
   convertible notes (5% OID)** plus an open ATM. As of the latest filing only **$3.25M** of
   those notes was actually issued, and the first GPU lease is a token **~$2.75M** deal with
   QumulusAI.

The historical financial statements below describe item (1), most of which is leaving the
entity. Any forward analysis must be driven by **pro-forma net cash after the $39M sale** and
the credibility/dilution of item (2), not by the footwear P&L. See §8 for the transformation.

---

## 1. Revenue & growth (single segment)

Allbirds reports **one operating / reportable segment** (FY2025 10-K, Segments note R15;
R60: "Number of operating segments: 1"). It no longer breaks out DTC vs. wholesale as
reportable lines; it discloses only **geography**.

| FY | Revenue ($M) | YoY | Source |
|---|---:|---:|---|
| 2020 | 219.3 | — | XBRL `RevenueFromContractWithCustomerIncludingAssessedTax` |
| 2021 | 277.5 | +26.5% | " |
| 2022 | **297.8 (peak)** | +7.3% | " |
| 2023 | 254.1 | −14.7% | " |
| 2024 | 189.8 | −25.3% | FY2025 10-K Stmt of Ops (prior-yr col) |
| 2025 | **152.5** | −19.7% | FY2025 10-K Stmt of Ops |
| Q1-26 | 22.3 | −30.5% vs Q1-25 (32.1) | Q1-FY2026 10-Q Stmt of Ops |

- **5-yr revenue CAGR (2020→2025): −7.0%.** From the 2022 peak the decline is **−48.8%
  cumulative** (≈ −20%/yr). The decline accelerated, not decelerated, into Q1-2026 (−30.5%).
- FY2024 10-K attributes the drop "primarily to lower unit sales within the **direct
  business**" (the DTC engine that was the entire brand thesis) — i.e., demand erosion, not a
  deliberate channel shift. (FY2024 10-K MD&A; corroborated by IR FY2024 release,
  https://ir.allbirds.com/news-releases/news-release-details/allbirds-reports-fourth-quarter-and-full-year-2024-financial , 2025-03-11.)
- **Geographic split (FY2025 10-K, Segments note):** US $118.6M (78%), International $33.8M
  (22%). US revenue fell −17.6% YoY; International −26.2%. International is being run largely
  through third-party distributors (40+ countries; FY2024 10-K).

## 2. Margins & their trend

| Margin | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | Q1-26 |
|---|---:|---:|---:|---:|---:|---:|---:|
| Gross % | 51.4 | 52.9 | 43.5 | 41.0 | 42.7 | **41.0** | **27.8** |
| Operating % | −13.3 | −11.8 | −33.7 | −60.2 | −51.4 | **−52.4** | −98.6 |
| Net % | −11.8 | −16.4 | −34.0 | −60.0 | −49.2 | **−50.7** | −92.9 |

- **Gross margin de-rated permanently** from low-50s (2020–21) to ~41–43% (2022→), reflecting
  loss of pricing power, promotional selling, and recurring inventory write-downs. This is
  *apparel-commodity* gross margin, **not** the premium-brand margin the $4B-IPO thesis assumed.
- **Q1-2026 gross margin collapsed to 27.8%** (from 44.8% in Q1-2025) — consistent with
  liquidation/clearance selling as stores close. Treat the legacy business as effectively
  in run-off.
- **Operating margin has been ~−50% for three straight years** even after deep cost cuts.
  The company has *never* posted a positive operating or net result in any year on record.

## 3. Profitability / returns on capital (capital destruction)

- **Cumulative net loss FY2020–FY2025: −$495.6M** (sum of annual net losses). Accumulated
  deficit **$561.8M** at Dec-31-25, rising to **$582.5M** at Mar-31-26 (10-Q balance sheet).
- **ROE:** −82% (2023), −92% (2024), **−215% (2025)** as the equity base shrank to $35.9M.
- **ROA:** roughly −49% to −71%.
- **ROIC vs WACC is not a meaningful exercise here.** ROIC has been deeply negative every
  year (no operating profit), so the company has destroyed value on every dollar of invested
  capital regardless of WACC. **DuPont decomposition is uninformative** — net margin is the
  binding negative term; turnover and leverage cannot rescue a −50% margin.

## 4. Free cash flow & conversion

| ($M) | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 |
|---|---:|---:|---:|---:|---:|---:|
| CFO | −34.6 | −50.9 | −90.6 | −30.2 | −63.9 | −55.1 |
| Capex | 14.4 | 24.2 | 31.4 | 10.9 | 4.1 | 3.1 |
| **FCF** | −48.9 | −75.0 | −121.9 | −41.1 | −68.0 | −58.2 |
| FCF margin | −22% | −27% | −41% | −16% | −36% | −38% |

- **Negative FCF every single year**; cumulative FCF FY2020–25 = **−$413M.** **FCF conversion
  vs. net income is not meaningful** (both deeply negative).
- **Capex slashed to maintenance-only ~$3M** (2.1% of revenue) as retail expansion stopped and
  stores closed — there is essentially no "growth capex" left; the business is being shrunk.
- The 2023 CFO improvement (−$30M) was largely a **one-time working-capital release** from
  liquidating the bloated 2021–22 inventory (inventory fell $116.8M→$57.8M), not operational
  improvement; burn re-widened to −$64M (2024) and −$55M (2025).
- **Q1-2026 CFO −$12.1M.** (Q1-2025 was −$27.9M but that was inflated by a $10.4M AP/accrual
  paydown; underlying quarterly burn is ~$12–16M.)

## 5. Balance sheet, liquidity & the burn clock (THE key risk)

- **Cash & equivalents: $66.7M (2024) → $26.7M (2025) → $14.4M (Mar-31-26).** Restricted cash
  adds ~$0.9–1.2M. (FY2025 10-K & 10-Q balance sheets.)
- **Net cash flipped negative:** +$66.7M (2024) → +$9.3M (2025) → **−$3.0M (Mar-31-26)** once
  the $17.4M revolver draw is netted. The IPO war chest ($288.6M cash at YE2021) is essentially
  gone.
- **Stockholders' equity: $35.9M (2025) → $16.3M (Mar-31-26)** and falling ~$20M/quarter at the
  current loss run-rate — i.e., **equity would be exhausted within ~1 quarter** absent the
  asset sale / financing.
- **Going concern:** explicit **"substantial doubt"** language in both the FY2024 10-K and
  FY2025 10-K (FY2025 10-K, Going-Concern Details R38, citing net loss $77.3M, operating burn
  $55.1M, cash $26.7M). The Q1-FY2026 10-Q repeats a Liquidity & Going-Concern note (R29).
- **Leases:** total operating-lease liabilities cut from **$53.7M (2024) → $22.3M (2025) →
  $15.8M (Mar-31-26)** as US full-price stores closed (closed remaining US full-price stores in
  Q1-2026; now operates 2 US outlets + 2 London stores — 10-Q/10-K Subsequent Events). No
  pension obligations disclosed.

### Debt & facilities
- **Revolving credit facility with Second Avenue Capital Partners LLC** (an asset-based /
  distressed lender, *not* a bank — itself a distress signal): up to **$50M** capacity (+$25M
  accordion), SOFR-based pricing (SOFR floor + 5.75%), **~$17.4M drawn** at both Dec-31-25 and
  Mar-31-26. (FY2025 10-K Long-term Debt note R13/R57.) Amended twice in 2026 to (a) permit the
  asset sale and lower the minimum-cash cash-dominion trigger from $10M to $7.5M, and (b) permit
  the new convertible notes and subordinate them to the revolver.
- **No conventional maturity wall** in the legacy entity; the binding constraint is the
  **liquidity covenant + cash burn**, not scheduled maturities.

## 6. Working capital

- **AR is immaterial** (~$4–7M; DTC collects at point of sale) → no DSO concern.
- **Inventory is the working-capital story.** It ballooned to $116.8M in 2022 (DIO 254 days),
  was aggressively liquidated, and now sits at $37.2M (Mar-31-26). **Inventory write-downs
  every year since 2022** ($14.4M / $8.3M / $2.7M / $2.8M for 2022–25 + $0.7M in Q1-26) →
  chronic over-buying and weak sell-through; a quality-of-earnings yellow flag.
- **AP rose** ($5.9M 2023 → $17.8M 2025 → $23.2M Mar-31-26) even as revenue fell — stretching
  payables is a classic late-stage **liquidity-management** signal.

## 7. Share count, dilution, dividends

- **No dividends ever. No buybacks ever.** The company has only consumed capital.
- **1-for-20 reverse stock split** effective **2024-09-05** (announced 2024-08-30; stockholder
  authorization 2024-08-13) for Nasdaq minimum-bid compliance; new CUSIP 01675A208. (8-K
  2024-08-30; https://ir.allbirds.com/news-releases/news-release-details/allbirds-announces-1-20-reverse-stock-split .)
- Weighted-avg diluted shares (post-split basis): **7.86M (2024) → 8.16M (2025) → 8.74M
  (Q1-26).** Class A ~6.22M + Class B ~2.54M ≈ **8.76M** total at Mar-31-26 (10-Q cover, per
  intake snapshot). **Dual-class:** only Class A trades; Class B is super-voting/unlisted.
- **Forward dilution risk is severe and is the central capital-structure issue going forward**:
  (i) up to **$50M of 12% senior secured convertible notes** (5% OID) convertible into Class A
  at a "Conversion Price," subject to a 4.99%/9.99% ownership blocker, with the holder granted a
  right to **co-invest in ≥55% of any future financing for 24 months**; (ii) a new **Chardan
  ATM** (replacing the prior TD Securities ATM) off an effective S-3 shelf. Against an ~8.8M
  share base and a ~$38M market cap, full draw of the notes would be massively dilutive.

## 8. THE TRANSFORMATION (subsequent events — reshapes everything)

Two filings tell two stages of one story; reconciled here:

**Stage A — FY2025 10-K (filed 2026-03-31), Subsequent Events (R23):**
- **Asset Purchase Agreement dated 2026-03-29** to sell **substantially all assets & certain
  liabilities to American Exchange Group** for **$39M cash** (subject to adjustments); approved
  by a special committee of independent directors and the full board; **requires stockholder
  approval**; expected to **close in Q2-2026.**
- At that time, the stated plan was for the company to **"dissolve and distribute proceeds to
  stockholders"** under a Certificate of Dissolution and Plan of Distribution.
- Executive retention bonuses approved ($500K Vernachio / CEO, $400K Mitchell / CFO) to keep
  them through close.

**Stage B — Q1-FY2026 10-Q (filed 2026-05-15), Subsequent Events (R19) — the reversal:**
- Management **changed course**: it now intends to **continue operating the public company
  after the Asset Sale**, **rename it**, and pursue an **"Electronics Infrastructure Business"**
  — acquiring and monetizing **NVIDIA Blackwell GPUs** and high-performance-computing
  infrastructure ("Electronics Assets").
- **Securities Purchase Agreement (Apr-14, A&R Apr-19, 2026):** up to **$50.0M senior secured
  convertible notes**, **12% interest** (payable in stock or cash), **5% original issue
  discount**, **2-year maturity**, secured by the Electronics Assets (and, post-asset-sale, all
  assets). **Only $3.25M issued at initial close (Apr-19)**; +$2.0M subject to stockholder
  approval; remaining up to **$44.75M solely at the holders' option** (i.e., not committed
  capital). 17% default late charge; holder co-invest right on ≥55% of future deals for 24 mo.
- **GPU lease:** the new subsidiary ("Lessor") bought Blackwell servers and leased them under a
  **~$2.75M, 3-year** lease to a subsidiary of **QumulusAI, Inc.** — i.e., the new "business"
  is, so far, a **single ~$2.75M lease.**
- Revolver subordinated to the notes (to be repaid at asset-sale close); new **Chardan ATM**
  (Apr-28-2026).

**Implication for valuation:** post-close, the entity is best modeled as **≈ pro-forma cash
(legacy net cash + ~$39M sale proceeds, less wind-down/retention costs and the revolver
payoff) + a nascent, sub-scale GPU-leasing venture funded by expensive, dilutive, largely
*optional* convertible debt.** The legacy footwear P&L in §§1–6 is a run-off and should not be
extrapolated.

## 9. Accounting red flags & quality-of-earnings notes

- **Going-concern "substantial doubt"** in two consecutive 10-Ks — the most serious flag.
- **Recurring inventory write-downs** every year 2022–2025 (+Q1-26) → persistent over-buying /
  weak demand; gross margin and inventory carrying values have repeatedly required true-ups.
- **Stretching accounts payable** while revenue falls (AP up 3x since 2023) → liquidity
  management.
- **Provision for bad debt $0.96M in Q1-2026** (vs $0 prior) — small but new; worth watching as
  wholesale/distributor receivables sour during wind-down.
- **Capitalized internal-use software** exists but is immaterial (SBC capitalized into software
  only ~$0.1–0.3M/yr) — *not* an earnings-flattering capitalization scheme.
- **Gift-card breakage** recognized as income ($2.0M FY2025; $1.9M in Q1-2025) — standard but
  non-cash/non-operating; note it inflates "other income."
- **No restatements or material weaknesses** found in the reviewed filings (auditor opinion
  present; see filings lane for auditor identity/changes).
- **Reverse-split optics:** the EPS figures look large per-share only because of the 1-for-20
  split; do not mistake the $9–12 per-share losses for a high-priced stock.

## 10. Data gaps / caveats (as-of 2026-06-01)

- **DTC vs. wholesale revenue split** is no longer broken out as a reportable line in FY2024–25
  filings (single segment); only geography is disclosed. Third-party estimates (~70–75% DTC)
  are commentary, not filed data — **flagged as a gap.**
- **Pro-forma post-asset-sale balance sheet not yet filed.** The $39M proceeds, final
  purchase-price adjustments, wind-down costs, retention payouts, and revolver payoff are not
  yet reflected in any GAAP balance sheet. The DEFM14A (2026-05-08, per intake snapshot) and a
  future 8-K/10-Q will carry pro-forma figures — **assign final net-cash math to the valuation
  lane once filed.**
- **Convertible-note conversion price** (and therefore the precise dilution) is defined by
  formula in the A&R Purchase Agreement but the effective price/share count is not yet
  determinable from the 10-Q text — **gap.**
- **Tariff exposure unresolved:** FY2025 10-K notes the Feb-2026 Supreme Court IEEPA-tariff
  ruling and a replacement Section-122 tariff (150 days from 2026-02-24); the company is "still
  assessing" the P&L impact and any recovery of incremental tariffs paid — **open item.**
- **FY2026 GPU-business economics** (utilization, counterparty credit of QumulusAI, lease
  yields, capital required to scale) are entirely unproven — no financial track record exists.
- **XBRL share-count caveat:** the 2022 weighted-average diluted share figure in `companyfacts`
  (148.75M) is on a **pre-reverse-split** basis and is not comparable to the 7.6M (2023)+
  post-split figures; the income statements (post-split) are the authoritative source for EPS.

---

### Reconciliation of conflicting headline numbers (resolved)
Early aggregator/news sources mixed two periods: **"$189.8M revenue / $93.3M net loss"** = **FY2024**;
**"$152.5M revenue / −$9.47 EPS / $77.3M net loss"** = **FY2025.** Both reconcile exactly to the
FY2025 10-K (which shows FY2025 and FY2024 side by side). The intake snapshot's "AI compute pivot"
and the 10-K's "dissolution" narratives are reconciled in §8 (the pivot is the April-2026 *reversal*
of the dissolution plan).
