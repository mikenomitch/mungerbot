# SEC Filings — Arm Holdings plc (ARM) — Research Notes

**Lane:** filings · **As-of:** 2026-06-01 · **Analyst:** SEC Filings specialist
**Entity:** Arm Holdings plc /UK · **CIK:** 0001973239 · **Ticker:** ARM (Nasdaq Global Select)
**Filer status:** Large accelerated filer; **UK foreign private issuer (FPI)** · **FYE:** March 31 · **Reporting currency:** USD
**Auditor:** Deloitte & Touche LLP (since 2022; PCAOB-registered, issues ICFR opinion)

> **Desk discipline:** Facts only, every material claim cited to primary filing + section + date. Judgments flagged as such. Known unknowns listed as Data Gaps. No buy/sell view.

---

## 0. Filing universe pulled (primary sources)

Source: SEC EDGAR submissions index `data.sec.gov/submissions/CIK0001973239.json` (retrieved 2026-06-01) and individual filing documents.

| Filing | Form | Filed | Period | Accession | Primary doc |
|---|---|---|---|---|---|
| **Annual report FY2026** | **20-F** | 2026-05-26 | 2026-03-31 | 0001973239-26-000097 | `arm-20260331.htm` |
| Annual report FY2025 (prior, for risk diff) | 20-F | 2025-05-28 | 2025-03-31 | 0001973239-25-000016 | `arm-20250331.htm` |
| Q4/FY2026 results | 6-K | 2026-05-06 | 2026-05-06 | 0001973239-26-000062 | `arm-20260506.htm` |
| Q3 FY2026 results | 6-K | 2026-02-04 | 2025-12-31 | 0001973239-26-000006 | `arm-20251231.htm` |
| Q2 FY2026 results | 6-K | 2025-11-05 | 2025-09-30 | 0001973239-25-000043 | `arm-20250930.htm` |
| Q1 FY2026 results | 6-K | 2025-07-30 | 2025-06-30 | 0001973239-25-000024 | `arm-20250630.htm` |
| Conflict-minerals (Specialized Disclosure) | SD | 2026-05-26 | — | 0001973239-26-000099 | `cye25formsd.htm` |
| Iran Section 13(r) notice | IRANNOTICE | 2026-05-26 | — | 0001973239-26-000098 | `irannoticefye26.htm` |
| Equity plan refresh | S-8 | 2026-05-14 | — | 0001973239-26-000066 | — |
| Insider transactions | Form 4 (×26 in recent window) | ongoing | — | various | — |
| New §16 insiders (batch) | Form 3 (×15) | 2026-03-18 | — | various | — |
| Proposed insider sales | Form 144 (×34 in recent window) | ongoing | — | various | — |

**Structural note (FPI):** As a UK foreign private issuer, Arm files a **20-F** (not 10-K) and furnishes **6-K** current reports (not 10-Q/8-K). **It does NOT file a DEF 14A proxy** and is **not required to file quarterly financial statements** on Form 10-Q. Executive compensation, governance and related-party detail live inside the 20-F (Items 6–7), not a separate proxy. The 6-K earnings releases are press-release exhibits, not full GAAP interim statements. See Data Gaps §11.

---

## 1. Business & segment description (20-F Item 4)

- **What Arm is:** "a global leader in the semiconductor industry"; principal activity = **licensing, marketing, R&D of CPU IP, GPU IP, system IP, compute subsystems (CSS), and associated software/tools/services** (20-F Item 4.A, Corporate Information). Founded 1990 (Acorn/Apple/VLSI JV); LSE+Nasdaq listed 1998–2016; taken private by SoftBank 2016; re-IPO'd on Nasdaq **Sept 14, 2023 at $51/ADS** (selling shareholder sold 102.5M ADSs; **Arm received no IPO proceeds**) (Item 4.A, IPO).
- **Business model:** License IP for upfront/term fees **plus a per-unit royalty on substantially every chip shipped** (royalty = % of chip ASP or fixed fee per unit; rises as more Arm content is added). "Long tail of recurring royalty revenues" because chips ship for years (Item 4.B, Business Model and Customers).
- **MAJOR NEW (FY2026): expansion into production silicon.** "In March 2026, the Company announced it is expanding its compute platform into **production silicon products with the Arm AGI CPU**," with **production expected by end of calendar year 2026** (Item 4.A; Item 4.B). This is a fundamental shift from a pure-IP model toward selling finished/fabricated silicon — and is the dominant new theme across the entire filing (see §3 and §4).
- **Scale metrics:** **>350 billion** cumulative Arm-based chips reported shipped as of 2026-03-31; **>22 million** developers; "most pervasive architecture in the world" (Item 4.B, Our Company).
- **Reorganized into three AI domains (FY2026):** **Edge AI** (smartphones, IoT, consumer), **Physical AI** (automotive, robotics), **Cloud AI** (data center, networking) (Item 4.B).
- **Segment reporting:** **Single operating segment** (CODM = the CEO, reviews consolidated financials) (Note 21 — Segment and Geographic Information).
- **Mobile dominance:** ">99% market share in mobile applications processors for many years"; mobile = **~43% of total royalty revenue** FY2026 (Item 4.B, Edge AI).
- License models offered: CSS, Arm Total Access, Arm Flexible Access, TLAs, Architecture Licenses (Item 4.B).
- **Artisan divestiture:** Sold its Artisan foundation-IP business (standard-cell libraries, memory compilers, I/Os) **to Cadence on 2026-08-26** [NOTE: the filing states the sale "completed" on August 26, 2025 — see correction below], under a definitive agreement signed April 2025, with an 18-month transition-services agreement (Item 7.B; Note 5 — Acquisitions and Divestitures). **Correction:** the 20-F text reads "On August 26, **2025**, the Company completed the sale of its Artisan foundation IP business … to Cadence." (Item 7.B, Young Sohn). Cadence relationship is also a related-party item because director Young Sohn sits on Cadence's board.

---

## 2. The numbers (audited, 20-F FY2026 + XBRL `companyfacts`)

Full table → **`artifacts/filings-financial-summary.csv`**. Headline figures ($M, FYE Mar 31):

| Metric | FY2023 | FY2024 | FY2025 | FY2026 | YoY FY26 |
|---|---|---|---|---|---|
| Total revenue | 2,679 | 3,233 | 4,007 | **4,920** | +23% |
| — License & other | (n/a split) | 1,431 | 1,839 | 2,307 | +25% |
| — Royalty | (n/a split) | 1,802 | 2,168 | 2,613 | +21% |
| — **of which related-party** | — | 724 | 823 | **1,499** | **+82%** |
| Gross profit | 2,573 | 3,079 | 3,886 | 4,799 | +23% |
| R&D expense | 1,133 | 1,979 | 2,071 | **2,776** | +34% |
| Operating income | 671 | 111 | 831 | 900 | +8% |
| Operating margin | 25% | 3% | 21% | **18%** | −3pp |
| Share-based comp (equity) | n/a | 1,037 | 820 | 1,052 | +28% |
| Net income | 524 | 306 | 792 | **904** | +14% |
| Diluted EPS (GAAP) | $0.51 | $0.29 | $0.75 | **$0.85** | +13% |
| Operating cash flow | 739 | 1,090 | 397 | 1,524 | +284% |
| Cash & equivalents | 1,554 | 1,923 | 2,085 | 2,751 | — |
| Short-term investments | — | — | — | 850 | — |
| Total assets | 6,866 | 7,927 | 8,932 | 10,703 | — |
| Stockholders' equity | 4,051 | 5,295 | 6,839 | 8,286 | — |

Notes for downstream lanes (financials/valuation/earnings-quality):
- **Net-cash balance sheet.** ~$3.6B liquid (cash $2,751M + ST investments $850M); total debt negligible (no long-term-debt concept reported in XBRL; market snapshot put total debt ~$24M). No debt maturity wall at the Arm level. (The $8.5B margin loan is **SoftBank's**, not Arm's — see §5.)
- **Cost of sales is tiny** ($121M) — gross margin ~97.5%, characteristic of an IP-licensing model.
- **R&D is the dominant cost** ($2,776M, +34%) — explicitly attributed to "investments in next-generation products, such as the Arm AGI CPU" (MD&A, R&D).
- **Share-based compensation $1,052M** (equity-settled) ≈ 21% of revenue — large non-cash add-back inflating the GAAP→cash gap; plus employer taxes on SBC $160M (Note 21).
- **Operating margin compressed** to 18% (from 21%) as R&D outran revenue; segment table (Note 21) is the cleanest expense bridge.
- **Net income mix FY2026:** operating income $900M + interest income net $111M + other non-operating income $132M + equity-investment income $14M (vs −$237M loss FY2025, which included an Ampere write-down) − tax expense $253M = $904M. So ~$257M of pre-tax income (≈22%) came from non-operating/financial/equity lines, including items tied to the SoftBank/Ampere transaction. Income-tax line swung from a **$72M benefit FY2025 to a $253M expense FY2026** (Note 21).
- **OCF FY2025 was anomalously low ($397M)** then rebounded to $1,524M FY2026 — financials lane should reconcile the working-capital/contract-asset swings (esp. the $645.8M SoftBank-affiliate unbilled contract asset, §4).
- **Revenue recognition basis (earnings-quality flag):** Royalty revenue is **accrued on estimates** in the quarter chips ship ("industry estimates of expected shipments, the mix of products sold, the percentage of markets using our products, and average selling price"), then **trued-up in later periods** including via royalty-audit resolutions (Note 4, accounting policy). Arm does not receive actual unit data until after it books the accrual.
- **Geographic revenue FY2026 ($M, by customer HQ):** US 1,761 · PRC 874 · Japan **825** (up from 296 FY25, +179% — largely the SoftBank-affiliate consulting arrangement, §4) · Taiwan 695 · Korea 392 · Other 373 (Note 4). 64% of revenue is outside the US.

---

## 3. Risk factors (20-F Item 3.D) — full taxonomy + what is NEW/changed in FY2026

The 20-F groups risks under three headers: **Business & Industry**, **Government Regulation & Legal Compliance**, and **Controlled Company & Foreign Private Issuer**. Full summary-of-risk bullet list was extracted; below are the material items, with **NEW/CHANGED vs the FY2025 20-F** flagged (diff performed against `arm-20250331.htm`).

### 3a. NEW or materially changed in FY2026 (highest signal)
- **★ Production-silicon / Arm AGI CPU risk (NEW emphasis).** The phrase **"Arm AGI CPU" appears 30× and "production silicon" 28× in the FY2026 20-F vs ZERO times in FY2025.** New/expanded factors:
  - *"Our development of production silicon products, such as the Arm AGI CPU, CSS, chiplets, complete chip solutions … may subject us to new or enhanced competitive, brand, technological, regulatory, operational and financial risks."* Details: **dependence on third-party foundries/contract manufacturers** with limited control over capacity/costs/yields; manufacturing defects, recalls, warranty claims; **significant upfront capital and wafer/packaging/test purchase commitments**; inventory obsolescence/write-downs; longer cash-conversion cycles; **margin compression and greater quarter-to-quarter revenue volatility**; increased working-capital and capital intensity (Item 3.D, Business & Industry).
  - *"The demand for new products, including those manufactured through third-party foundry partners and contract manufacturers, may be difficult to accurately predict."* (essentially a NEW standalone factor in FY2026).
  - **Channel conflict (NEW emphasis):** "Our direct commercial relationships with hyperscale, cloud, enterprise, and AI infrastructure customers increase the potential for competitive conflicts with our traditional licensing customers… these customers or partners may terminate or materially reduce their relationship with us, seek alternative architectures … or pursue legal action." (Item 3.D).
- **★ Pricing/business-model factor broadened.** FY2025 read "reductions in our pricing"; FY2026 reads "changes in our pricing or our **business terms or business model**." Adds a NEW disclosure: Arm "recently entered into an agreement to arrange for certain semiconductor products to be supplied by a third party to a customer," with **purchase commitments of ~$100M over the next 12 months**, "likely to grow materially in subsequent years" — exposing Arm to third-party default, order cancellation, and inventory risk (Item 3.D).
- **Litigation factor updated** for the Qualcomm/Nuvia JMOL loss and the Q4-CY2026 trial (see §6).

### 3b. Business & Industry (continuing)
- Demand depends on volatile, cyclical **semiconductor/electronics industries**; ASPs decline over a chip generation and **royalty/chip generally decreases as volume rises** (subject to agreed minimum).
- **Intense competition** from **x86** (established) and **RISC-V** (free, open-source) — "many of our customers are also major supporters of RISC-V." Aug 2023 customer/competitor **RISC-V automotive joint venture** cited. Customers building **bespoke AI accelerators** alongside the Arm core could shrink the CPU TAM. Competitors may use AI tools to port Arm-ISA software to competing ISAs.
- **Customer concentration:** "A significant portion of our total revenue comes from a limited number of customers." (quantified in §2/§7).
- **Revenue from a limited number of end markets**; mobile share is already saturated (>99%) limiting upside.
- **PRC concentration + Arm China dependency** (two distinct factors): "Our concentration of revenue from the PRC … makes us particularly susceptible to economic and political risks," and **"Neither we nor SoftBank Group control the operations of Arm China, which operates independently of us."** Arm accesses the PRC market only through its IPLA with Arm China (§5/§7).
- Semiconductor manufacturing is **geographically concentrated** (Taiwan/PRC-Taiwan tensions explicitly cited).
- Reliance on key management/talent; IP protection/enforcement risk; **errors/defects/security-vulnerability** liability.

### 3c. Government Regulation & Legal Compliance
- International operations exposed to **export restrictions, tariffs, trade barriers**, sanctions/technology controls (US-PRC tensions explicitly). Data-privacy/data-localization (China CAC, GDPR cross-border transfer) risk.

### 3d. Controlled Company & FPI (governance — see §5 for detail)
- **"Controlled company"** under Nasdaq rules → Arm has **elected exemptions** from (i) majority-independent board, (ii) independent director nomination, and (iii) independent compensation-committee requirements.
- SoftBank control + Shareholder Governance Agreement → minority holders have **limited ability to influence** shareholder votes or board composition.
- **SoftBank's interests may conflict** with Arm's/minority holders' (esp. related-party transactions).
- **★ SoftBank share-pledge / margin-loan risk** (the $8.5B "SoftBank Group Facility" — §5). Margin-call / foreclosure could force share sales and/or **change of control**.
- **FPI-status loss risk:** tested at end of Q2 each FY; if SoftBank ceases to hold a majority, Arm would likely **lose FPI status** and have to adopt the full US domestic-issuer reporting regime (higher cost, 10-K/10-Q/DEF 14A).
- English-law shareholder rights differ from Delaware (75% supermajority for some actions; statutory pre-emptive rights). **ADS holders waive jury-trial** under the deposit agreement. **PFIC risk** flagged for US holders (passive-income test, given large cash/investment balances).

---

## 4. Related-party transactions (20-F Item 7.B + Note 20) — ★ the central earnings-quality issue

Full breakdown → **`artifacts/filings-related-party-revenue.csv`**.

> **Headline:** **Related-party revenue = $1,499M = 30.5% of total FY2026 revenue**, up **+82% YoY** (from $823M / 20.5% in FY2025), while **external-customer revenue grew only +7%**. Related-party **License & other** revenue alone jumped **+141%** to $1,009M. **Most of Arm's reported FY2026 revenue growth came from related parties** (Note 4; MD&A revenue table).

### 4a. Arm China (IPLA) — largest single related-party stream
- Arm holds a **10% non-voting interest in Acetone Limited**, which owns **48.2% of Arm China** → Arm's **indirect economic interest in Arm China ≈ 4.8%** (Item 7.B; Note 20). Acetone is **controlled by SoftBank Group**.
- **IPLA revenue: $790.6M FY2026** (FY2025 $670.4M; FY2024 $670.8M) — ~16% of total revenue (17% FY25; 21% FY24) (Note 20).
- **Amount due from Arm China FY2026 = $276.2M** ($296.5M receivable − $20.3M payable) (Note 20). Contract liabilities $30.3M current / $23.3M non-current.
- **Expected-credit-loss allowance against Arm China grew to $28.3M** (from $16.0M); Arm booked $12.3M of credit-loss expense FY2026 (Note 20).
- **Dependency / control flag:** Arm China's payments are "determined based on the financial information **that Arm China provides to us**"; Arm has had **past issues obtaining timely/accurate information and enforcing audit rights** and **past late payments**, which it "believes" are resolved (Item 3.D; Item 7.B). Arm must **indemnify Arm China and its PRC sublicensees** for IP-infringement claims.

### 4b. SoftBank Group affiliate "Consulting Agreement" — ★ NEW and material
- Revenue from **licensing/servicing arrangements with a SoftBank affiliate** under a **Consulting Agreement: $704.4M FY2026, up from $145.5M FY2025** (+384%) (Note 20).
- **Current contract asset of $645.8M** from this SoftBank affiliate as of 2026-03-31 (up from $145.5M) — i.e., **~$646M of revenue recognized but NOT yet billed/collected** (Note 20). This single arrangement explains the bulk of the +141% related-party license-revenue jump and a large part of the Japan-geography revenue surge (Japan revenue $825M vs $296M).
- **Earnings-quality implication (for earnings-quality / valuation lanes):** ~$646M of FY2026 reported revenue sits in unbilled contract assets owed by a SoftBank-controlled counterparty; combined with Arm China ($790.6M), **~$1.5B of revenue is related-party and largely SoftBank-orbit.** Pricing/terms are set under the Shareholder Governance Agreement's related-party process, not arm's-length market negotiation (§5).

### 4c. Ampere (SoftBank acquired Nov 2025) — ★ NEW related-party event
- SoftBank agreed (Mar 19, 2025) to acquire **Ampere** (an Arm-architecture server-CPU maker in which Arm held a minority equity stake + a convertible note); **closed Nov 2025** (Item 7.B; Note 20).
- **Dec 2025: Arm received $143.4M gross proceeds** for its Ampere equity interest **+ $39.3M** from settlement of the Ampere convertible note (Item 7.B; Note 20). (These cash inflows partly explain the FY2026 non-operating income and OCF.)
- **March 2026: Ampere Development Agreement** — Ampere (now SoftBank-controlled) will **provide development/consulting services to Arm** under SOWs (Item 7.B; Note 20). Revenue from Ampere was only $3.6M FY2026 (was $49.3M FY2024).

### 4d. Other related-party items
- **Kigen** (IoT SIM authentication; SoftBank Vision Fund controls ~73.5%): Arm invested $10M (2023) + $5.0M (Sept 2024) + $1.4M (April 2025) for preference shares (~15.2% FD interest) (Item 7.B).
- **Tax Sharing Agreement with SoftBank** (April 2025) re: OECD Pillar Two minimum taxes (Item 7.B).
- **Director-related:** **Jeffrey Sine** (co-founder/partner of The Raine Group, which advises SoftBank and in which SoftBank holds an indirect minority stake); **Young Sohn** (Cadence board — counterparty to the Artisan sale); **Tony Fadell** (post-board advisory agreement, $220k/yr RSUs) (Item 7.B).
- **Linaro** ceased to be a related party Dec 1, 2025. **Arduino** loan ($16.6M) fully repaid Oct 2025 (Arduino acquired by a third party); $5.4M Arduino guarantee terminated Nov 2025. **Cerfe Labs** $3.2M loan fully reserved (Note 20).
- **Service-share expense to Arm China** $63.3M FY2026; rental income from Arm China $1.0M (Note 20).

### 4e. Related-party approval governance
- Material related-party transactions go to the **Audit Committee**; but the Shareholder Governance Agreement **carves out** pre-existing/IPO-disclosed SoftBank arrangements and sets **dollar thresholds**: ordinary-course ≤$20M needs no review; >$20M needs Board review/ratification; arm's-length items between $1.5M–$20M go to Audit Committee, >$20M to the Board (Item 7.B, Related Party Transactions Policy).

---

## 5. Governance & control — SoftBank (20-F Items 6–7) — ★ existential governance overhang

- **SoftBank beneficially owns ~86.4% of issued share capital (922,733,999 shares) as of 2026-05-21** (down from **87.1%** in the FY2025 20-F, due to RSU dilution). **Public float = 145,344,760 ADSs (~13.6%)** (Item 7.A, Controlled Company). Shares held of record by **Kronos II LLC**, an indirect wholly-owned SoftBank subsidiary.
- **Masayoshi Son** = Chairman & Director of Arm's board **and** Representative Director/Chairman/CEO of SoftBank Group (Item 7.A footnote). Mr. Son disclaims beneficial ownership.
- **★ SoftBank Group Facility (margin loan):** On **Aug 19, 2023**, SoftBank subsidiaries entered an **$8.5 billion margin loan facility** secured by a **pledge of 769,029,000 Arm ordinary shares = 72.0% equity interest** (Item 7.A; Item 7.B, SoftBank Group Facility; Item 3.D). Key terms/risks:
  - Arm "**has no material obligations**" with respect to the facility, **but** has given customary undertakings to facilitate the pledge and **agreed to facilitate foreclosure** upon an event of default (Item 7.B).
  - **Margin-call / forced-sale risk:** prepayment can be required on certain change-of-control events **or if the trading price of Arm's ADSs declines below certain thresholds**; a "margin call" can force SoftBank to post collateral or **sell pledged shares** (Item 3.D). **Foreclosure could cause a change of control of Arm** and a sharp ADS price decline.
  - **Private-sale / change-of-control overhang:** while the UK Takeover Code does not apply, SoftBank can sell a controlling stake privately **with no concurrent offer to ADS holders** — minority holders may not capture any control premium (Item 3.D).
- **Shareholder Governance Agreement** (entered at IPO) gives SoftBank, scaled to ownership:
  - **Board designation rights:** 7 candidates while >70% ownership (up to 8 if it expands the board to 9 and appoints a non-independent director), scaling down to 1 candidate at >5%. **All current non-executive directors were SoftBank-designated** (Item 6; Item 7.B). No standing nominating committee.
  - **Pre-emptive rights** to maintain its proportional stake on new issuances (minority holders bear the dilution; SoftBank can avoid it) (Item 3.D; Item 7.B).
  - **Registration rights** (demand + piggyback) — SoftBank can register resale of its shares; perception of large SoftBank sales is itself a flagged price risk.
  - **Consent right over auditor & accounting-policy changes:** while Arm is a SoftBank-consolidated subsidiary, Arm must consult and seek SoftBank consent before changing its auditor away from a Big Four firm or making material IFRS accounting-policy changes (Item 7.B). **[Governance flag — limits audit-committee independence over the auditor relationship.]**
  - **Consent right over equity-incentive plans** above 5% of issued capital (Item 7.B).
- **Controlled-company exemptions taken:** no majority-independent board, no independent nominating process, compensation of non-CEO executives not required to be set by an all-independent committee (Item 3.D; Item 16G).

---

## 6. Legal proceedings (20-F Item 4.B "Legal Proceedings"; Item 8 "Litigation with Qualcomm and Nuvia"; Item 3.D)

**Qualcomm / Nuvia — the material litigation. Qualcomm is simultaneously a major customer (9% of FY2026 revenue).**

- **Case 1 — Arm v. Qualcomm & Nuvia** (D. Del., filed **Aug 31, 2022**): Arm alleged Qualcomm/Nuvia breached the termination provisions of Nuvia's Architecture License Agreement (which Arm terminated Mar 2022 after Nuvia's assignment to Qualcomm without Arm's consent). **Dec 2024 jury trial:** jury found **Qualcomm did NOT breach the Nuvia ALA** and that certain technology was licensed to Qualcomm, but **hung** on whether Nuvia breached. **Sept 30, 2025: the Court granted Qualcomm judgment as a matter of law** (Nuvia did not breach the Nuvia ALA) and affirmed the jury's other findings. **Arm has appealed to the U.S. Court of Appeals for the Third Circuit (pending).** → Net: **Arm largely lost Case 1 at the trial-court level.**
- **Case 2 — Qualcomm v. Arm** (D. Del., filed **Apr 18, 2024**): Qualcomm alleges Arm failed delivery obligations under the Qualcomm ALA; amended (Dec 2024 and 2025) to add tort/anti-competition and **Technology License Agreement breach** claims. Jan 7, 2026: Qualcomm's motion to add subsidiary Arm Limited was denied; Qualcomm then sued Arm Limited separately; **consolidated March 2026**. Mar 30, 2026: Qualcomm added another breach claim (Arm moved to strike). **Trial expected Q4 calendar 2026.**
- **Customer-relationship risk:** Qualcomm = **9% of total revenue FY2026**; outcome "may affect our relationship with or revenue from Qualcomm" (Item 3.D).
- Arm also flags routine commercial/IP/antitrust/privacy/employment matters and **customer IP-indemnification obligations** (Item 4.B, Legal Proceedings). No other individually material proceeding is disclosed by name.

---

## 7. Customer concentration, revenue mix, off-balance-sheet (Note 4; MD&A; Notes 20–22)

- **Customer concentration (Note 4):**
  - **FY2026:** three customers = **42%** of total revenue (largest **16%**, 2nd **14%**, 3rd **12%**).
  - **FY2025:** four customers = **49%** (17/11/11/10).
  - **FY2024:** three customers = **42%** (21/11/10).
  - (Names not disclosed in Note 4; Qualcomm separately stated at 9% — i.e., not in the top-3 disclosed buckets for FY2026.)
- **Revenue split FY2026:** License & other $2,307M (47%) / Royalty $2,613M (53%); over-time revenue $1,080M, point-in-time $1,227M within License & other (Note 4). Royalty growth driven by "improved mix of products with higher royalty rates per chip, such as **Armv9** technology" (MD&A).
- **Off-balance-sheet / commitments:**
  - **Non-cancelable purchase obligations ~$1,056.5M** (cloud computing, data centers, software/licenses), remaining term ≥12 months, **through 2036** (Note — Purchase Obligations). **Subsequent event:** April 2026, increased a cloud-services purchase commitment by **$305.0M through 2029** (Note 22).
  - **~$100M** of third-party semiconductor-supply purchase commitments over the next 12 months under the new "arrange-for-supply" arrangement, "likely to grow materially" (Item 3.D).
  - **No material guarantees** outstanding at FY2026 (the $5.4M Arduino guarantee was terminated Nov 2025); no special-purpose/off-balance-sheet financing vehicles disclosed. Operating leases run to 2044; **no material covenants or residual-value guarantees** (Note 9).
- **Subsequent events (Note 22):** Omnibus + ESPP share pool **auto-increased by 13,821,271 shares on 2026-04-01**; bought **$67.9M** more Raspberry Pi Holdings shares (April 2026); the $305M cloud commitment increase.

---

## 8. Controls, auditor, accounting (Item 15; Item 16C/16F; Reports of IRPA; Note 2)

- **Auditor: Deloitte & Touche LLP** — issues the ICFR opinion (Item 15) and has **served as auditor since 2022** (Report of IRPA). Audit conducted under PCAOB standards. **[Governance flag:** SoftBank holds a consent right over any change of auditor away from a Big Four firm — §5.]
- **Disclosure controls concluded EFFECTIVE as of 2026-03-31** by CEO + CFO (Item 15.A).
- **Material weakness — REMEDIATED.** A prior material weakness (**IT general controls** over financial-reporting systems, identified for **FY2021 and FY2022**) was remediated; "**remediation plan … was completed during the fiscal year ended March 31, 2025, and management has concluded that the material weakness has been remediated**" (Item 3.D). **No current material weakness disclosed.**
- **No restatement.** The 20-F cover-page Rule 10D-1(b) clawback/restatement checkbox is **unchecked** (no error correction requiring incentive-comp recovery) (cover page). No restatement narrative anywhere in the filing.
- **Critical Audit Matter (CAM):** **Revenue recognition on material long-term customer contracts** — identifying performance obligations and estimating standalone selling prices "required a high degree of auditor judgment" due to complex/non-standard terms and a "lack of observable standalone selling prices" (Report of IRPA, CAM). This aligns with the related-party / unbilled-contract-asset complexity in §4.
- **Accounting framework:** US GAAP consolidated statements (USD). Adopted ASU 2023-09 (income-tax disclosures) in FY2026; ASU 2024-03 (expense disaggregation) effective FY2028 (Note 2).
- **Goodwill = 15% of total assets** (18% FY2025), other intangibles 2%; "We have recognized impairments in the past" (Item 3.D) — watch for impairment risk on the production-silicon build-out.

---

## 9. Capital return & share count (Item 9; Item 5; XBRL)

- **No dividends.** "We intend to retain earnings, if any, for use in our business and **do not anticipate paying any cash dividends in the foreseeable future**" (Item 9.C; Item 10 / dividend policy). Under English law, distributable profits are required before any dividend. **No share-repurchase program disclosed.** Any future buyback/dividend decision sits with the **SoftBank-controlled board** (Item 3.D).
- **Dilution trend:** diluted weighted-avg shares **1,028M → 1,068M** FY2023→FY2026 (~+1.3%/yr); shares outstanding **1,025.2M → 1,064M**. Ongoing dilution from RSUs/PSUs/ESPP (equity SBC $1,052M FY2026; share pool auto-increases 13.8M/yr). SoftBank's pre-emptive right lets it avoid this dilution; minority holders cannot.

---

## 10. Insider transactions (Forms 3/4/144) — direction only; $ values for leadership lane

- **Direction is net selling.** In the recent EDGAR window: **34 Form 144s** (notices of proposed sale) and **26 Form 4s**; **no insider open-market buying visible.** Example: latest Form 4 (filed 2026-06-01, acc 0001973239-26-000103) = **CCO William Abbey disposed 4,200 ADSs** (transaction code S) on 2026-05-28. Most insider dispositions appear tied to RSU vesting / 10b5-1 sales.
- **★ Form 3 batch — 15 new §16 insiders all dated 2026-03-18.** A cluster of newly-reporting officers/directors filed Forms 3 on the same day — consistent with a **section-16 officer-designation event**, plausibly tied to the production-silicon reorganization (new AGI-CPU/silicon leadership) announced March 2026. **[Flag for leadership lane to identify the individuals and roles.]**
- Note: SoftBank's 86.4% stake and the Kronos II LLC record holding are the dominant ownership facts; granular insider $ amounts and 10b5-1 plan details are deferred to the **leadership** lane.

---

## 11. Data gaps & caveats (as-of 2026-06-01)

1. **No DEF 14A / no 10-Q (structural, FPI).** Arm files no proxy and no quarterly GAAP financials. Detailed executive-comp tables, board-committee charters, and audited interim statements that a US issuer would provide are **not available**; what exists is inside the 20-F (Items 6–7) and unaudited 6-K press releases. Compensation/governance depth is therefore lighter than for a domestic filer.
2. **Customer names not disclosed.** Note 4 gives concentration percentages but not names of the top-3 customers (16/14/12% FY2026). Only Qualcomm (9%) is named (via the litigation disclosure). Apple, Nvidia, Samsung, MediaTek, Qualcomm, and the CSPs are widely assumed but **not confirmed in the filing** — competition/scuttlebutt lanes should source names independently.
3. **Related-party pricing is not independently verifiable.** Whether the $790.6M Arm China IPLA revenue and the $704.4M SoftBank-affiliate consulting revenue are on true arm's-length terms cannot be confirmed from the filing; they are governed by the SoftBank-negotiated related-party process, not market negotiation. The **$645.8M unbilled SoftBank-affiliate contract asset** is a known collection/realization unknown.
4. **Arm China data reliability.** Arm depends on Arm China self-reporting royalty data and has a history of late payments / audit-access friction; "believes" issues are resolved but gives no assurance (Item 3.D). The 4.8% economic interest means Arm has little control.
5. **SoftBank Group Facility live terms.** The $8.5B facility's exact LTV thresholds, margin-call trigger price, and current loan balance are **not disclosed** in Arm's 20-F (it is SoftBank's facility) — the precise ADS price that would trigger a margin call is unknown. This is a material but unquantified overhang.
6. **6-K interim figures not yet reconciled here.** I confirmed the existence/periods of the last four FY2026 quarterly 6-Ks (Q1 2025-06-30 → Q4 2026-05-06) but did not extract per-quarter GAAP/non-GAAP figures or guidance; that is the **financials/news** lanes' scope. The Q4/FY2026 6-K (2026-05-06) likely contains forward guidance the valuation lane needs.
7. **Production-silicon economics undisclosed.** The Arm AGI CPU had **no material FY2026 revenue impact**; unit economics, gross margin, capex, and the foundry partner are not disclosed. Production is "expected by end of CY2026" — a forward, unverified milestone.
8. **Artisan/Cadence sale date typo risk.** The 20-F states the Artisan sale "completed" on **August 26, 2025** (within FY2026); the agreement was signed April 2025. (One internal cross-reference earlier in this note initially mis-stated 2026 — corrected to 2025 per Item 7.B.)

---

## 12. Source register (primary)

- **20-F FY2026** (filed 2026-05-26, period 2026-03-31): `https://www.sec.gov/Archives/edgar/data/1973239/000197323926000097/arm-20260331.htm` — Items 3 (risk factors), 4 (business), 5 (MD&A), 6 (directors), 7 (major shareholders & related-party), 8 (financial statements: Notes 4, 5, 10, 20, 21, 22; Reports of IRPA/CAM), 15 (controls), 16C/16F/16G.
- **20-F FY2025** (filed 2025-05-28, period 2025-03-31): `https://www.sec.gov/Archives/edgar/data/1973239/000197323925000016/arm-20250331.htm` — used for risk-factor and ownership diff (87.1% → 86.4%; production-silicon language absent in FY2025).
- **SEC EDGAR submissions index** (retrieved 2026-06-01): `https://data.sec.gov/submissions/CIK0001973239.json`.
- **SEC XBRL company facts** (retrieved 2026-06-01): `https://data.sec.gov/api/xbrl/companyfacts/CIK0001973239.json` — audited multi-year financial line items.
- **Form 4** (latest, 2026-06-01): `https://www.sec.gov/Archives/edgar/data/1973239/000197323926000103/`.
- Quarterly 6-Ks FY2026: accessions 0001973239-25-000024 (Q1), -25-000043 (Q2), -26-000006 (Q3), -26-000062 (Q4 results).

**Artifacts produced:**
- `artifacts/filings-financial-summary.csv` — 4-year audited financial summary.
- `artifacts/filings-related-party-revenue.csv` — related-party revenue/balance breakdown by counterparty.
