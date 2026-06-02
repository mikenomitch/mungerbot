# DOSSIER — Arm Holdings plc (Nasdaq: ARM) — as-of 2026-06-01

**Editor's note.** This is the merged, de-duplicated, cited evidence base for the Munger
mental-model run. It synthesizes eight research lanes (filings, financials, valuation, news,
leadership, competition, sector, prediction-markets). The desk collects facts and does **not**
opine; verdicts are formed downstream. Where lanes disagree, the conflict is shown and
adjudicated inline (look for **[RECONCILED]**). Every material fact carries a source.

**One-paragraph orientation.** Arm designs CPU instruction-set architectures and cores and
licenses them for upfront fees plus per-chip royalties — historically a ~98%-gross-margin,
capital-light IP toll booth on ~99% of smartphones and ~94% of automakers. FY2026 (FYE
2026-03-31) revenue was **$4.92B (+23%)** with a fortress net-cash balance sheet. But three
things now dominate the story: (1) **~30.5% of revenue is related-party** (SoftBank affiliates +
Arm China) and that bucket supplied the **majority of FY26 growth** (+82% YoY vs +7% external);
(2) Arm is **abandoning IP-only neutrality** to sell its own finished data-center chip (the "Arm
AGI CPU," launched Mar-2026), inviting channel conflict, a margin-mix shift, capex intensity, and
a fresh **US FTC antitrust probe (opened 2026-05-15)** plus EU/Korea actions; and (3) the stock
closed **$408.85 on 2026-06-01 (+15.7% on the day, ~doubled in two weeks)** at **~231x non-GAAP /
~481x GAAP TTM EPS**, *above* the average sell-side target (~$227–241) — i.e. priced for >2x
management's own ambitious FY2031 plan. SoftBank controls **~86.4%**, has pledged 72% of the
company against an **$8.5B margin loan**, and Arm **largely lost** the Qualcomm/Nuvia litigation
(now on appeal; a second Qualcomm trial lands Q4 CY2026).

---

## 1. Business & Segments

- **What Arm is.** A fab-less semiconductor-IP company: it designs CPU instruction-set
  architectures (ISAs — Armv8, Armv9), processor cores (Cortex, Neoverse), and pre-integrated
  Compute Subsystems (CSS), and licenses them. Revenue comes in two forms: **upfront license &
  other** fees and **per-chip royalties** (~$0.10–$2.00/chip; materially higher for
  Armv9/CSS/data-center). >325B cumulative Arm-based chips shipped since 1990; >20M developers in
  the ecosystem. [Arm Newsroom 2026-05-06; sector lane; competition lane]
- **Reporting structure.** **Single reportable operating segment** (CODM = the CEO); Arm discloses
  a **royalty vs license** revenue split, **not** per-end-market segments — so all end-market
  shares below are stitched from third parties, not Arm primary data. [20-F FY2026 Note 21;
  financials & competition lanes]
- **FY2026 revenue mix.** Royalty **$2,613M (+21%)**; License & other **$2,307M (+25%)**. License
  is ~47% of revenue and is structurally **lumpy / timing-driven** (term deals, CSS). [Arm 6-K
  FY2026; financials lane]
- **End-market position (third-party-stitched).** Smartphone/tablet application processors **~99–
  100% Arm ISA** (Apple, Qualcomm, MediaTek, Samsung, Google all pay Arm); automotive **~94% of
  automakers**; embedded/IoT (Cortex-M) incumbent; **data center the key battleground** where Arm
  is the share-gainer (see §4). [Arm FY2025 20-F + industry consensus; competition lane]
- **THE STRATEGIC PIVOT — production silicon (single biggest 2026 development).** On **2026-03-24**
  Arm launched its first in-house finished chip in ~35 years: the **"Arm AGI CPU"** (136-core
  Neoverse-V3, **TSMC 3nm**, 300W, claimed ">2x perf/rack vs x86"), co-developed with **Meta** as
  lead customer; partners include **OpenAI, Cloudflare, Cerebras, SAP, SK Telecom, F5**. CEO Rene
  Haas: "We are now in a new business for Arm… supplying CPUs as chips." This makes Arm a **direct
  competitor to its own royalty-paying customers**. The term "Arm AGI CPU" appears **30x** and
  "production silicon" **28x** in the FY2026 20-F vs **ZERO** in the FY2025 20-F. **No material
  FY2026 revenue** yet; first production revenue targeted **Q4 FY2027 (~$1B)**. [Arm Newsroom
  2026-03-24; 20-F FY2026; news + competition + filings lanes]
- **AGI-CPU is SUPPLY-CAPPED (load-bearing nuance).** On the Q4 call, management said FY27–FY28
  customer demand "doubled from $1B to **>$2B**," but capacity (TSMC wafers / memory / packaging)
  is secured for only ~the first **$1B** — supply, not demand, is the near-term constraint.
  **[RECONCILED]** Some outlets reported "$20B" demand; the transcript-based figure is **~$2B** and
  is the number the desk trusts (news lane flagged the $20B as likely error; filings lane to
  confirm against the shareholder letter). [Arm Q4 FY2026 call; news lane]

---

## 2. The Numbers

**Primary sources:** Arm FY2026 20-F (filed **2026-05-26**, FYE 2026-03-31, acc 0001973239-26-000097,
`arm-20260331.htm`; auditor **Deloitte & Touche LLP** since 2022) and the FY2026 Q4/full-year 6-K
(Exhibit 99.2, ~2026-05-06, SEC CIK 0001973239). FY2022–FY2024 from stockanalysis.com, cross-checked
to the 20-F where periods overlap. All US$ millions, GAAP, FYE March 31, unless noted.

> **Filing-structure caveat (UK FPI).** As a foreign private issuer Arm files **20-F + 6-K** and
> files **NO DEF 14A proxy** and **NO 10-Q** — a structural disclosure gap vs US issuers (lighter
> exec-comp/governance detail; interim 6-Ks are unaudited press releases). [filings lane]

### 2.1 Income statement (GAAP)

| Metric | FY2022 | FY2023 | FY2024 | FY2025 | FY2026 |
|---|---:|---:|---:|---:|---:|
| Revenue | 2,703 | 2,679 | 3,233 | 4,007 | **4,920** |
| YoY revenue growth | +33% | −0.9% | +20.7% | +23.9% | **+22.8%** |
| — Royalty | n/a | n/a | ~1,800 | 2,168 | 2,613 |
| — License & other | n/a | n/a | ~1,433 | 1,839 | 2,307 |
| Cost of sales | (131) | (106) | (154) | (121) | (121) |
| Gross profit | 2,572 | 2,573 | 3,079 | 3,886 | 4,799 |
| **Gross margin** | 95.2% | 96.0% | 95.2% | 97.0% | **97.5%** |
| R&D expense | 995 | 1,133 | 1,979 | 2,071 | **2,776** |
| SG&A expense | ~944 | ~769 | 989 | 984 | 1,115 |
| **GAAP operating income** | 633 | 671 | 111 | 831 | **900** |
| **GAAP operating margin** | 23.4% | 25.0% | 3.4% | 20.7% | **18.3%** |
| Income tax (exp)/benefit | n/a | n/a | n/a | +72 | (253) |
| **GAAP net income** | 549 | 524 | 306 | 792 | **904** |
| **GAAP net margin** | 20.3% | 19.6% | 9.5% | 19.8% | 18.4% |
| **Non-GAAP net income** | n/a | n/a | n/a | 1,737 | **1,889** |
| GAAP diluted EPS | $0.54 | $0.51 | $0.29 | $0.75 | **$0.85** |
| Non-GAAP diluted EPS | n/a | n/a | n/a | $1.63 | **$1.77** |

*Margin trend:* GAAP operating margin is volatile and **trending down** — 23–25% (FY22–23) → 3.4%
(FY24 IPO-RSU SBC spike) → 20.7% (FY25) → 18.3% (FY26) — as **R&D (now 56% of revenue)** outgrows
revenue on the AGI-CPU build. Non-GAAP operating margin also **declined 46.7%→43.0%** YoY despite
+23% revenue. [financials + valuation lanes]

### 2.2 Cash flow, FCF, and the SBC adjustment

| Metric | FY2022 | FY2023 | FY2024 | FY2025 | FY2026 |
|---|---:|---:|---:|---:|---:|
| Operating cash flow | 458 | 739 | 1,090 | 397 | **1,524** |
| Capex (PP&E) | (34) | (64) | (92) | (219) | **(545)** |
| **Free cash flow (OCF − capex)** | 424 | 675 | 998 | 178 | **979** |
| FCF margin | 15.7% | 25.2% | 30.9% | 4.4% | 19.9% |
| FCF / net income | 77% | 129% | 326% | 22% | 108% |
| **Equity-settled SBC** | 26 | 79 | 1,037 | 820 | **1,052** |
| **SBC as % of revenue** | 1.0% | 2.9% | 32.1% | 20.5% | **21.4%** |
| **FCF less SBC (owner FCF)** | 398 | 596 | **(39)** | **(642)** | **(73)** |
| Capex / revenue | 1.3% | 2.4% | 2.8% | 5.5% | **11.1%** |

> **Two headline earnings-quality facts** (both lanes agree, this is the crux of the whole case):
> 1. **SBC ~$1,052M = ~21% of revenue** (plus ~$150M employer payroll tax on SBC). Non-GAAP net
>    income ($1,889M) is **~2.1x GAAP** ($904M); the bridge is dominated by the SBC add-back plus
>    one-time gains (a $127M divestiture, $205M equity-investment gains, $131M reversal). The market
>    anchors on non-GAAP EPS $1.77 vs GAAP $0.85.
> 2. Once SBC is charged as the real labor cost it is, **owner free cash flow has been roughly
>    zero-to-negative for three straight years** (−$39M FY24, −$642M FY25, −$73M FY26).
> [financials + valuation lanes]

> **Capex regime change.** Capex jumped from ~$92M (FY24) to **$545M (FY26) = 11% of revenue**
> (was 1–3% historically); PP&E doubled to **$772M**. This is the capital cost of Arm building its
> **own silicon** — a structural move away from the capital-light IP model that compresses FCF.
> [financials lane]

### 2.3 Balance sheet — fortress net cash (FYE March 31)

| Metric | FY2025 | FY2026 |
|---|---:|---:|
| Cash & equivalents | 2,085 | **2,751** |
| Short-term investments | 740 | 850 |
| **Cash + ST investments** | 2,825 | **3,601** |
| Accounts receivable, net | 1,107 | 1,300 |
| Goodwill | 1,620 | 1,623 (15% of assets) |
| **Total assets** | 8,932 | 10,703 |
| Total debt (≈ all leases) | 346 | 432 |
| **Total shareholders' equity** | 6,839 | 8,286 |
| **Net cash (cash+STI − debt)** | 2,479 | **~3,169** |
| Current ratio | 5.2 | **6.0** |
| Book value / share | $6.43 | $7.76 |

- **No bond maturity wall.** The ~$432M "debt" is almost entirely operating/finance leases — **no
  public bonds**, debt/equity 0.05. Financial leverage sits at the **SoftBank parent**, not at Arm
  (see §6). [financials lane]
- **[RECONCILED] Net-cash figure.** Filings/financials cite **~$3.17B** (FYE 2026-03-31); valuation
  cites **~$3.1B** as of 2026-06-01 (cash+STI $3.601B less ~$491M lease liabilities, no borrowings).
  Same balance sheet, trivially different debt definition — treat net cash as **~$3.1–3.2B**.

### 2.4 Returns on capital — only a thin spread (decision-critical)

| Metric | FY2025 | FY2026 |
|---|---:|---:|
| ROE (avg equity, GAAP) | 13.1% | **12.0%** (and falling) |
| ROA | 10.8% | 7.2% |
| **ROIC clean** (NOPAT@22% / IC excl. excess cash) | — | **~13.7%** |
| ROIC on tangible IC excl. cash & goodwill | — | ~21.5% |
| ROIC including cash | — | ~8% |
| **WACC** (3rd-party est., GuruFocus 12/2025) | — | **~10.5%** |

> **Key judgment (financials lane):** clean ROIC **~13–15% vs ~10% WACC is only a *thin* positive
> spread — NOT wide-moat 30%+ economics** — and is far below what a ~$300B+ (now ~$437B) market cap
> implies. **DuPont:** ROE 12.0% = 18.4% margin × 0.50 asset turns × 1.30 leverage; i.e. ROE is
> almost **all margin** with near-zero financial leverage, and the FY25→FY26 decline reflects lower
> net margin + a return to a normal tax charge + de-leveraging as cash piles up undeployed.

### 2.5 Backlog & working capital (forward-visibility flags)

| Metric | FY2025 | FY2026 | YoY |
|---|---:|---:|---:|
| Annualized Contract Value (ACV) | $1,365M | $1,660M | **+22%** |
| Remaining Performance Obligations (RPO) | $2,226M | $2,071M | **−7%** |
| DSO (period-end AR / rev ×365) | 101 d | **96 d** | — |

- **RPO (contracted backlog) FELL 7% YoY** even as ACV rose 22% — a divergence that **reduces
  forward revenue visibility** vs a year ago (management frames it as a shift to consumption/usage-
  based, shorter-dated deals). [financials lane]
- **DSO ~96 days is high for a licensor**, partly reflecting related-party billing: AR of $1,300M
  **includes ~$270–276M due from SoftBank-group related parties**. [financials + filings lanes]

### 2.6 Capital return & dilution

- **NO dividend, NO buyback program** (financials lane). Leadership lane notes **token** buybacks
  (~$119M in Q3 FY26) that do **not** offset SBC (~$285M that quarter, ~$1B+/yr). **[RECONCILED]**
  Net effect either way: diluted share count **rose every year** (1,025M → 1,068M) — owners diluted
  ~0.5–1%/yr via RSUs + ESPP ($74M FY26 proceeds) with no meaningful offsetting repurchase. Capital
  is effectively returned to **employees (equity), not shareholders**.
- **PFIC risk** flagged for US holders given the large passive cash/investment balance. [filings lane]

---

## 3. Valuation & Margin of Safety

**Price anchor (decision-critical). [RECONCILED]** The correct as-of anchor is **$408.85/ADS
(close 2026-06-01, +15.73% on the day, prior close $353.29; AH $414.00)**, per the valuation AND
prediction-markets lanes. The market snapshot's **~$209 is STALE** — and the **financials and
filings lanes' valuation context implicitly used the stale level**, so anything they imply about
"how expensive" must be re-scaled up to $408.85. Market cap **~$437B**; net cash ~$3.1B; **EV
~$433.6B**. The move was a **momentum melt-up**: ~doubled from mid-May on **Nvidia's launch of the
Arm-based RTX Spark / 20-core Grace N1X PC chip** at Computex; 52-wk range **$100.02–$421.69**;
**200-day MA only $152.18** (price ~2.7x its 200-DMA). [stockanalysis.com 6/1; valuation +
prediction-markets lanes]

### 3.1 Current multiples (computed at $408.85)

| Multiple | GAAP TTM | Non-GAAP TTM | Forward (FY27) |
|---|---:|---:|---:|
| P/E | ~481x | ~231x | ~163x |
| EV/Sales | ~88x | — | ~73x (fwd P/S) |
| EV/EBITDA | ~409x | — | — |
| EV/EBIT | ~482x | ~205x | — |
| P/OCF | ~287x | — | — |
| P/FCF | ~495x | — | — |
| P/B | ~45x | — | — |

- **No "cheap vs itself" case.** Arm's own post-IPO P/E ranged ~142x to >1,000x (3-yr avg ~319x);
  today is **above** its own average. [valuation lane]
- **Vs peers (mid-2026, order-of-magnitude only):** NVDA fwd P/E ~21x / EV-EBITDA ~32x; AMD ~32–58x;
  AVGO ~33–38x. Arm trades **~5–8x peers' forward P/E and >10x their EV/EBITDA**. ~98% gross margin
  justifies a premium, **but not an order-of-magnitude one**. [valuation lane]

### 3.2 Reverse-DCF and management-target cross-check (most decision-relevant)

- **Reverse-DCF:** starting from normalized **owner-FCF ~$1.0B** (between GAAP NI $904M and non-GAAP
  FCF $882M once SBC is expensed), justifying EV $433.6B requires **~35–40% FCF compounding for ~15
  years** (grow FCF ~30–50x) at WACC 11.5% / 3% terminal — **beyond any precedent at this scale**
  and beyond management's own plan. [valuation lane]
- **Management-target cross-check:** even if Arm **HITS** its aggressive **FY2031 target of >$9
  non-GAAP EPS** (~$9.9B NI), the 5-yr return from $408.85 is **−10.7%/yr at 25x exit P/E, −7.4%/yr
  at 30x, −1.9%/yr at 40x, +2.5%/yr at 50x**. To earn 11.5%/yr the market must **still pay ~76x
  earnings in 2031**; a 30x exit implies FY2031 EPS ~$22.8 (**~2.5x the bull target**). [valuation lane]

### 3.3 Intrinsic-value range and margin of safety

| Method | Bear | Base | Bull |
|---|---:|---:|---:|
| Pure FCFF DCF (per share) | ~$13 | ~$31 | ~$121 |
| Exit-multiple frame (FY2031 EPS × P/E, disc. 11.5%) | — | ~$132 (6.5×35x) | ~$235–287 (mgmt $9 × 45–55x) |
| **Triangulated** | **~$30** | **~$130 (mid)** | **~$235** |

- **Margin of safety ≈ −68% at the midpoint; still ≈ −43% even at the most generous bull ceiling.**
  **Under every method examined the price exceeds the top of the intrinsic-value range** — only the
  *magnitude* of overvaluation varies. Base-case value stays **$25–40 across WACC 10–13% and
  terminal g 2–3.5%** — i.e. the gap to price is a **cash-flow-base problem, not a discount-rate
  problem**. [valuation lane]
- **Weakest assumption (stated):** the normalized starting cash flow and terminal exit multiple
  (bears anchor GAAP/owner-FCF → $13–31; bulls anchor non-GAAP EPS + a durable premium → ~$235).

---

## 4. Moat & Competition

**Moat read (Porter Five Forces): WIDE but softening at the edges.** The load-bearing, durable moat
is the **software/ecosystem network effect** (>20M developers, >310B cumulative chips, high re-port
switching costs) in mobile and embedded. [competition lane]

### 4.1 Market position & share trajectory

- **Near-monopoly where it's strong:** smartphone app processors **~99–100% Arm ISA**; automotive
  **~94% of automakers**; embedded/IoT (Cortex-M) incumbent. [Arm FY2025 20-F + consensus]
- **Data center = the share-gain battleground.** Mercury Research **Q1'26: Arm = 17.7% of TOTAL
  server-CPU units** (up from 11.5% YoY); Intel total server unit share fell 72.8%→66.8% YoY; AMD
  record 46.2% of x86 **revenue** / 33.2% x86 units. **Caution (don't conflate denominators):**
  AMD's figure is x86-only revenue; Arm's is total-market units — **not additive**. Driver: AI-era
  power efficiency + hyperscaler custom Arm CPUs (AWS Graviton, Google Axion, MS Cobalt, Nvidia
  Grace/Vera). [competition lane, via trade-press secondary]
- **Don't conflate Arm's own metric:** "~50% of compute shipped to top hyperscalers in 2025 is
  Arm-based; >1B Neoverse cores deployed" is a **hyperscaler-deployment denominator, NOT total-
  market share** — keep separate from the 17.7%. [competition lane]

### 4.2 The royalty ladder — the competitive flywheel

The mechanism that has let Arm grow royalty revenue on roughly flat unit volumes: **Armv8 ~2.5–3% →
Armv9 ~5% → CSS ~10%+ of chip ASP** (CSS v2 >10%, highest ever). Mix (Q4 FY25): v8 44% / v9 31% /
v7-older 25%; v9 attach target 60–70%; CSS ~20% of royalties and growing. [competition + sector lanes]

### 4.3 Eroding edges (why the moat is softening)

1. **Self-inflicted channel conflict.** Selling the AGI CPU (Mar-2026) puts Arm in **direct
   competition with its own royalty-paying customers** (Nvidia/AWS/Google/MS merchant ambitions;
   Broadcom/Marvell) — inviting customer diversification toward in-house designs and RISC-V.
2. **Arm LOST the Qualcomm/Nuvia license fight** (see §8) — demonstrating a top customer can
   **successfully resist** Arm tightening license terms, capping buyer-side leverage.
3. **Live FTC antitrust probe** (2026-05-15) into whether Arm restricts architecture access to
   favor its own silicon (see §8).
4. **RISC-V** (royalty-free, open ISA) — the named structural substitute. Backers: Qualcomm,
   Google, Meta, Nvidia (40+ RISC-V MCUs inside Blackwell/Rubin GPUs), Bosch/Infineon/NXP (auto),
   Alibaba/Ventana (servers), China silicon-sovereignty. **Winning in MCU/IoT and increasingly
   auto-MCUs; NOT yet displacing Arm in smartphones or general-purpose servers.** Most dangerous in
   Arm's **~19%-of-revenue PRC market**. Qualcomm acquired RISC-V designer **Ventana Micro
   (Dec-2025)** as an Arm hedge (trade-press; see data gaps). [competition + sector lanes]

### 4.4 Customer concentration (a competitive vulnerability)

- **Top-3 customers = 42% of FY2026 revenue** (16% / 14% / 12%); **top-5 = ~56%**. Names **not
  disclosed** except **Qualcomm (9%)** via litigation. The largest single customer is **Arm China
  (~16–17%)** — which is *also* Arm's sole PRC channel and which **"neither we nor SoftBank Group
  control"** (20-F) — a concentration + geopolitical + governance knot overlapping the strongest
  RISC-V (China) threat. [filings + competition lanes]
- **Structural 20-F risk:** AI workloads migrating from CPU to accelerators (TPU/Trainium/MTIA/GPU)
  could **shrink the very CPU TAM Arm taxes**. [competition lane]

---

## 5. Sector & Macro

- **Industry scale/growth:** global semiconductor sales **$791.7B in 2025 (+25.6%)**; WSTS/SIA
  forecast **~$975B–$1T for 2026 (+~25–26%)**; Q1 2026 was $298.5B (+25% vs Q4'25) — the up-cycle
  was **still accelerating** into the as-of date. [SIA 2025; WSTS Fall-2025; Deloitte 2026]
- **AI is the engine and the concentration:** Deloitte estimates **gen-AI chips ~$500B of revenue
  in 2026 (~half of all chip sales)** at <0.2% of unit volume; funded by hyperscaler capex of
  **~$660–690B for 2026 (~$450B AI-specific), up ~36–77% YoY and increasingly debt-funded** (~$108B
  raised 2025). [Deloitte 2026; IEEE ComSoc 2025-12-22; CNBC 2026-02-06]
- **Where Arm sits:** the **capital-light architecture/CPU-IP layer** — the high-ROIC end of a
  **bimodal** sector (foundry/equipment/memory layers are capital-intensive and cyclical). [sector lane]
- **Manufacturing concentration risk:** **TSMC ~60–70% of foundry overall and >90% at 3nm/2nm**;
  Arm owns no fabs but its ecosystem (and the AGI CPU, on TSMC 3nm) **inherits a Taiwan single-
  point-of-failure**. [TSMC Q1 2026 6-K; sector lane]
- **Cycle position (judgment): late-expansion / elevated.** Two straight ~25% growth years to a
  ~$1T run-rate, AI ~half of revenue, **DRAM prices spiking (~$250→$700 a config Oct'25→Mar'26)**,
  surging debt-funded capex — classic late-cycle markers; **some consensus wafer-ship paths embed a
  2027 correction** (illustrative −6%). Arm's royalties **lag** (paid on shipments, much on
  prior-gen designs) so it is **buffered but NOT decoupled** — Q4 FY2026 royalty growth already
  decelerated to **+11%** (see §7). [Deloitte 2026; nomadsemi; sector lane]
- **Regulatory regime — dominant swing variable, currently LOOSENING but unstable:** the AI
  Diffusion Rule was scrapped (May 2025); BIS moved to **case-by-case** review for advanced AI chips
  to China/Macau (2026-01-13), while Congress pushes to **re-tighten** (Chip Security Act; AI
  Overwatch Act). Industrial-policy subsidies expand capacity **but also fund RISC-V** — a subtle
  Arm headwind inside a sector tailwind. [Morgan Lewis/Mayer Brown Jan 2026; BIS; CRS R48642]
- **TAM caveat:** Arm's **$535B→>$1.5T (FY2026→FY2031)** is a management **silicon-TAM** (not a
  royalty-TAM) embedding aggressive AI assumptions; the $15B-AGI-CPU and $100B-agentic-royalty
  targets are **guidance, not facts** — treat as aspirational. [sector lane]

---

## 6. Leadership & Capital Allocation

- **Control — the governing fact. [RECONCILED]** SoftBank beneficially owns **~86.4%** (922,733,999
  shares as of 2026-05-21; down from 87.1% in the FY2025 20-F due to RSU dilution), per the FY2026
  20-F. The news lane's "~87%/~90%" are secondary approximations; **use 86.4%**. Public float
  **~13.6%** (145,344,760 ADSs; held of record by Kronos II LLC). Arm uses Nasdaq **controlled-
  company exemptions** (no majority-independent board) and a **Shareholder Governance Agreement**
  giving SoftBank board-designation, pre-emptive, registration, and **consent rights over auditor
  changes, material accounting-policy changes, and equity-plan expansions**. **Minority shareholders
  — including on say-on-pay — have effectively no governance leverage.** [20-F FY2026 Items 6–7,
  3.D; filings + leadership lanes]
- **CEO Rene Haas** — CEO & director since Feb 2022; ex-NVIDIA; led the 2023 IPO and ~doubled
  revenue. Strong operator; Glassdoor CEO approval 93%, overall 4.5/5 (89% recommend). **CONFLICT
  FLAG:** on **2026-04-21** SoftBank also named Haas **CEO of SoftBank Group International** (running
  the parent's chip/AI portfolio) **while he remains Arm CEO/director** — a structural divided-
  attention / related-party conflict with **no disclosed safeguards**. [leadership lane]
- **CEO pay:** FY2026 single-figure **~$59.6–60.6M** (up ~143% YoY; only ~2.2% salary), **~4x the
  size-peer median (~$14.7M)**. Proposed (~2026-06-01) one-off grant of **425,000 PSUs** vesting on
  **market-cap milestones** ($1T by 2029, $1.5T by 2030, $2T by 2031), worth **~$800M–$1bn+**; award
  cap raised 125%→200% of salary. Performance-linked, **but "approval" is controlled by SoftBank's
  ~86% vote** (not a true market check), and milestones reward **multiple/share-price expansion, not
  per-share cash generation**. [leadership lane]
- **CFO Jason Child** — EVP & CFO since Nov 2022; ex-CFO Splunk/Opendoor/Groupon, ex-CFO Amazon
  International. Strong capital-markets pedigree. Steady **seller** under a 10b5-1 plan (adopted
  5/30/25; sold ~$3.1M @ $148, ~$3.83M @ $180, ~$7.23M @ $226 across Mar–May 2026). (News lane
  corrected a false rumor he left for OpenAI — he gave Q4 guidance 2026-05-06.) [leadership + news lanes]
- **Insiders are NET SELLERS — no open-market buying observed.** 34 Form 144s / 26 Form 4s in the
  recent window; latest CCO William Abbey −4,200 ADSs. Haas: 5/15/26 PSU vesting then 143,316 shares
  withheld for taxes (not a sale), holds 325,632 direct (~0.037%). **Chief Architect R.
  Grisenthwaite holds ZERO direct shares** (only unvested RSUs) and sold ~$5.09M (5/18/26). A batch
  of **15 new Section-16 insiders all filed Form 3 on 2026-03-18**, coinciding with the silicon
  reorganization. **No insider "conviction buying" signal.** [filings + leadership lanes]
- **Board:** 8 directors, **NOT majority-independent** (controlled-company exemption). **Masayoshi
  Son = Chair** (and SoftBank CEO — controls the controller); Ronald Fisher = SoftBank insider; ~4
  plausibly independent (Karen Dykstra/audit expert, Rosemary Schooler/ex-Intel, Paul Jacobs/ex-
  Qualcomm CEO, Jeffrey Sine/Raine). Avg board tenure ~3.8 yrs; Simply Wall St flags "insufficient
  board refreshment." [leadership lane]
- **Capital-allocation model:** "retain everything, reinvest in R&D, **no return of capital**."
  Defensible **IF** reinvestment earns its keep — but see §2.4 (ROIC only ~thin spread over WACC)
  and §2.6 (persistent dilution leakage). M&A history is mixed/SoftBank-era (Treasure Data ~$600M
  2018, Apical ~$350M 2016 → IoT group later walked back pre-IPO); recent M&A minimal (~0.2
  deals/yr). [leadership lane]
- **Controls/accounting:** disclosure controls **EFFECTIVE** as of 2026-03-31; a prior **material
  weakness** (IT general controls, FY2021–FY2022) was **REMEDIATED in FY2025**; **no current
  material weakness; no restatement** (clawback box unchecked). **Critical Audit Matter = revenue
  recognition on material long-term contracts** (performance-obligation identification, standalone-
  selling-price estimation) — consistent with the related-party/unbilled-contract-asset complexity.
  Goodwill = 15% of assets; prior impairments acknowledged. [filings lane]

### 6.1 SoftBank coupling & parent-contagion (transmitted to the thin float)

- **$8.5B margin loan** (SoftBank Group Facility, since 2023-08-19) **secured by a pledge of
  769,029,000 Arm shares = 72.0% of the company**. A margin-call/foreclosure tied to the ADS price
  could **force share sales or a change of control** with **no offer to minority ADS holders**.
  **Exact LTV / trigger price / current balance are NOT disclosed** (it is SoftBank's loan). [20-F
  FY2026 Item 3.D; filings + leadership lanes]
- SoftBank co-founded the **$500B/10GW Stargate** AI-infra JV (2026-01-21; Arm a named tech
  partner) and **acquired Ampere for $6.5B** (closed 2025-11-25), cashing out Arm's own 8.08% Ampere
  stake. This **tightly couples ARM to AI-data-center capex and OpenAI/Stargate health** — e.g., a
  WSJ report (~2026-04-28) that OpenAI missed revenue/user targets sent ARM **~−8% on the week**.
  SoftBank's margin loan reportedly helps fund commitments incl. **~$22.5B to OpenAI**, so a sharp
  Arm drawdown could force parent selling. [news + leadership lanes]
- **Arm China related-party/control scar:** SoftBank sold 51% of Arm China (~$775M, 2018); ex-CEO
  **Allen Wu (16% stake) refused to leave for ~2 years (2020–22)**, kept the company seal, allegedly
  self-dealt via his Alphatecture fund. Arm regained board control in 2022 (pre-IPO). Arm China is
  now **deconsolidated yet the #1 customer**, a related party, and a US-China-exposed channel. [leadership lane]

---

## 7. Crowd / Market Signal *(sentiment, not truth)*

- **Central divergence:** consensus rating **Buy/Moderate Buy** (23–40 analysts) but **average price
  target only ~$226.92 (MarketBeat) to $241.19 (stockanalysis)** vs the **$408.85 close = ~ −41% to
  −44% implied DOWNSIDE**. Even Street-high targets ($425 Mizuho, $410 Wells Fargo, both 6/1) sit
  **at/below** the tape. **The stock trades ABOVE the average sell-side target even after analysts
  raised numbers — targets are following price, not leading it.** [prediction-markets + news lanes]
- **The skepticism is structural, not new:** in early May, consensus PT ~$164 vs price ~$211; the
  rally only **widened** the gap to ~$227–241 vs $409. [prediction-markets lane]
- **Estimate revisions uniformly UP, in two clusters chasing price:** post-earnings (5/6–5/7: RBC
  $175→$260, TD Cowen $165→$265, Rosenblatt $175→$270) and post-Nvidia (6/1: Mizuho →$425, Wells
  Fargo $255→$410); initiations Bernstein $300, Jefferies $290. Forward consensus FY2027 ~$5.97B rev
  (+21%), EPS ~$1.22. [prediction-markets lane]
- **Valuation/sentiment extreme:** trailing P/E 483x, **fwd P/E ~163x**, fwd P/S 73x, PEG 5.29,
  **beta 3.78**; options **IV 108.4% with IV Rank & Percentile = 100** (top of range). [stockanalysis,
  Barchart 6/1]
- **Short interest MODEST — no squeeze:** ~18.8M shares short (settle 5/15), **~1.78% of float**,
  **~1.7 days-to-cover**, $3.93B dollar-short. Easily covered. [MarketBeat, Nasdaq, Fintel]
- **Event vs drift (telling):** Arm's **own record Q4 beat FELL −7.25% on 5/7** because management
  couldn't secure foundry capacity for the AGI CPU and warned of negative smartphone unit growth;
  then the stock **doubled on a *partner's* (Nvidia) launch**. Sentiment is **ecosystem-narrative-
  driven, not ARM-guidance-driven** (management declined to raise guidance). [prediction-markets lane]
- **No ARM-specific prediction market exists.** Cleanest external tail-risk proxy: Polymarket **"AI
  bubble burst by EOY 2026?" ~24% YES** ($2.86M vol; resolves if ≥3 of 6 conditions incl. NVDA −50%
  / SOX ETF −40%); "Largest company end-2026" ~62.5% NVDA. [Polymarket 6/2]

---

## 8. Risks & Legal

> Ranked, with the most decision-relevant first. **Note:** the deep-tier `legal-regulatory` and
> `scuttlebutt` lanes were **NOT dispatched at standard tier** — litigation/antitrust detail below
> is from the filings/news/competition lanes; tail-risk *sizing* is therefore lighter than a full
> legal lane would provide (see §9).

1. **Valuation / no margin of safety (the binding constraint).** Under **every** method examined the
   price exceeds the top of intrinsic value; even the most generous bull case leaves the price ~74%
   above value (MoS ≈ −43%). Price is set on a **+15.7% momentum day at a 52-wk high, ~2.7x the
   200-DMA** — high risk the **entry multiple itself is transient**. [valuation + prediction-markets]
2. **Related-party revenue quality (single biggest filings-level red flag).** Related parties =
   **$1,499M = 30.5% of FY2026 revenue, +82% YoY** (vs +7% external), i.e. **the majority of
   reported growth**, in **non-arm's-length** transactions. Components: **Arm China IPLA $790.6M**
   (~16% of revenue; Arm holds only ~4.8% indirect economic interest and **relies on Arm China
   self-reported royalty data**; credit-loss allowance up to $28.3M) + **SoftBank-affiliate
   Consulting Agreement $704.4M** (up +384%), of which **~$645.8M is an UNBILLED contract asset**
   owed by a SoftBank-controlled counterparty — collectibility/realization a known unknown. [20-F
   FY2026 Notes 4 & 20; filings lane; `artifacts/filings-related-party-revenue.csv`]
3. **SoftBank control + pledge (governance + forced-seller tail).** ~86.4% control with consent
   rights over Arm's **auditor and accounting policy**, plus **72% of the company pledged** against
   an **$8.5B margin loan** whose foreclosure/margin-call (tied to the ADS price) could **force a
   change of control with no offer to minority ADS holders**. [20-F FY2026 Item 3.D; §6.1]
4. **Qualcomm/Nuvia litigation — Arm largely LOST.** *Case 1* (Arm v. Qualcomm/Nuvia, 2022): Dec-2024
   jury found Qualcomm did **NOT** breach; **Sept 30, 2025 court granted Qualcomm judgment as a
   matter of law**; Arm has **appealed to the Third Circuit** (pending). *Case 2* (Qualcomm v. Arm,
   filed Apr-2024, expanded with **antitrust/TLA** claims; Arm Limited consolidated Mar-2026) goes
   to **TRIAL in Q4 calendar 2026** — a near-term binary catalyst against a counterparty that is
   simultaneously a **9%-of-revenue customer**. [filings + news + competition lanes]
5. **Antitrust overhang (freshest catalyst).** Qualcomm filed antitrust complaints vs Arm with the
   **US FTC + EU Commission + Korea KFTC** (Mar-2025). KFTC ran a Seoul on-site inspection Nov-2025;
   the EU opened an investigation early 2026; and the **US FTC opened a FORMAL probe on 2026-05-15**
   (examining whether Arm refuses/degrades CPU licenses to Apple/Qualcomm/Nvidia while expanding its
   AGI-CPU business). A live, **binary** regulatory overhang that could force constraints or
   structural separation. [news + competition lanes]
6. **Business-model margin dilution.** Moving from a **>95%-gross-margin IP licensor to 40–50%-
   margin merchant silicon**, with an **R&D/opex surge expected to pressure operating income for ~8
   quarters** (Morgan Stanley downgrade OW→EW, 2026-04-07); non-GAAP operating margin already
   declined 46.7%→43.0% YoY. Plus capex inflecting to 11% of revenue. [news + financials lanes]
7. **AGI-CPU is supply-capped & execution-unproven.** Stated demand **>$2B** (FY27–FY28) but
   capacity secured for only ~$1B; **stock fell ~7–10% on record Q4 results** because of this. Unit
   economics, foundry partner, capex, inventory model **all undisclosed**; "production by end of
   CY2026" is an unverified forward milestone. [news + filings lanes]
8. **Royalty deceleration.** Royalty growth **slowed to +11% in Q4 FY2026** from +27% (Q3) — the
   first soft royalty print of the year (management blames timing/mix); unproven whether one-quarter
   comp or a trend. [news + sector lanes]
9. **RISC-V substitution** (esp. China, state-backed) — see §4.3.
10. **SBC dilution + no capital return + PFIC** — ~$1B+/yr SBC vs token/zero buybacks; rising share
    count; PFIC risk for US holders. [financials + leadership + filings lanes]
11. **Sector cycle risk** — elevated, possibly-peak AI up-cycle on debt-funded capex with unproven
    AI ROI; a 2027 correction sits in some consensus paths. [sector lane]
12. **Taiwan/TSMC single-point-of-failure** — ~90% of leading-edge (and the AGI CPU) on TSMC. [sector lane]

**Existential-threat screen:** no *single* item is clearly existential in isolation, but the
**combination** of (a) a forced-seller/change-of-control mechanism in the SoftBank pledge, (b) an
antitrust outcome that could force structural separation of the licensing-vs-silicon conflict, and
(c) a RISC-V/China substitution path against the largest customer, defines the credible left tail.

---

## 9. Data Gaps & Confidence

### Confidence: **3 / 5**

**Why 3, not higher:** the *financial* picture is strong and largely primary-sourced — the FY2026
20-F (filed 2026-05-26) and 6-K give audited revenue, margins, SBC, balance sheet, related-party
detail, and litigation status with citations, and the valuation math is robust across methods and
discount rates. **Why 3, not lower:** several decision-relevant items rest on non-arm's-length,
self-reported, or undisclosed inputs — the realization of the **$645.8M unbilled SoftBank contract
asset**, the **Arm China self-reported royalty base**, the **AGI-CPU economics**, and the **SoftBank
margin-loan trigger price** are genuine known-unknowns; the deep **legal-regulatory** and
**scuttlebutt** lanes were not run at standard tier, so antitrust/litigation tail-risk sizing and
ground-level demand checks are thin; and a chunk of secondary data (peer multiples, Mercury server
shares, some news items) is trade-press, not primary. The *direction* of the evidence is
high-confidence; several *magnitudes* are not.

**Most important data gaps (ranked):**

1. **Realization of the $645.8M unbilled SoftBank-affiliate contract asset** and whether related-
   party pricing (the $790.6M Arm China IPLA + $704.4M consulting revenue) is genuinely arm's-length
   — governed by SoftBank's related-party process, **not** market negotiation. The single biggest
   earnings-quality unknown. [filings]
2. **SoftBank margin-loan live terms** — exact LTV thresholds, the **margin-call trigger ADS
   price**, and current outstanding balance are undisclosed, so the price level that could force a
   change of control **cannot be quantified**. [filings]
3. **AGI-CPU unit economics** — gross margin, capex, inventory model, and the foundry/contract-
   manufacturer partner are not given; the $2B-demand and Q4-FY2027-first-revenue figures are
   forwards. **[RECONCILED] $2B vs $20B demand** resolved to ~$2B (transcript) but flagged
   high-impact; filings lane to confirm against the shareholder letter. [news + filings]
4. **No DEF 14A / no 10-Q (structural UK-FPI gap)** — detailed exec-comp tables, committee charters,
   and *audited* interim statements that a US issuer would file **do not exist**; governance/comp
   depth is lighter; interim 6-Ks are unaudited. [filings + leadership]
5. **Top-3 customer names (16/14/12% of revenue) NOT disclosed** — only Qualcomm (9%) is named;
   Apple/Nvidia/Samsung/MediaTek/CSP identities are inferred, not confirmed. [filings + competition]
6. **No authoritative WACC** — third-party estimates range ~9–24% (used ~10–11.5%); no company
   figure. (Valuation base case is insensitive to this — value stays $25–40 across WACC 10–13%.) [financials + valuation]
7. **Legal-regulatory & scuttlebutt lanes not dispatched** (standard tier) — FTC/EU/KFTC and
   Qualcomm-Case-2 tail-risk sizing, and any ground-level demand/employee/customer checks, are
   thinner than a deep run. [PROGRESS.md]
8. **No clean sell-side FY2027/FY2028 consensus table** beyond company quarter-guidance and the
   FY2031 target; FY2027 non-GAAP EPS approximated. [valuation]
9. **Several secondary sources** — peer multiples (NVDA/AMD/AVGO), Mercury Research server shares,
   the Qualcomm/Ventana RISC-V deal, RISC-V penetration magnitude ("~25%" traces to advocacy/AI
   content with ambiguous denominator) — are trade-press/secondary; confidence on **direction** is
   medium-high, on **magnitude** lower. [competition + sector + valuation]
10. **Stale-anchor hazard:** the run snapshot's **~$209** is stale; the financials/filings lanes'
    "how expensive" framing implicitly used it. The correct as-of anchor is **$408.85** (used
    throughout §3 and §7). Any downstream model still on ~$209 will badly understate the richness. [prediction-markets]

### Cross-lane conflicts adjudicated in this dossier

| Item | Conflict | Resolution |
|---|---|---|
| Price anchor | snapshot ~$209 vs valuation/crowd $408.85 | **$408.85** (close 2026-06-01) — snapshot stale |
| SoftBank ownership | 86.4% (20-F) vs ~87%/~90% (news secondary) | **86.4%** (FY2026 20-F, as of 2026-05-21) |
| AGI-CPU demand | ~$2B (transcript) vs $20B (some outlets) | **~$2B** FY27–FY28 (capacity for ~$1B) |
| Buybacks | "no buyback" (financials) vs "~$119M token" (leadership) | Net effect identical: **share count rose every year; no offset** |
| Net cash | ~$3.17B (filings) vs ~$3.1B (valuation) | **~$3.1–3.2B** (trivial debt-definition diff) |

---

### Source artifacts (full detail)

- `runs/arm-holdings/2026-06-01/artifacts/filings-financial-summary.csv` — FY23–FY26 audited financials (20-F)
- `runs/arm-holdings/2026-06-01/artifacts/filings-related-party-revenue.csv` — related-party revenue by counterparty (Note 20)
- `runs/arm-holdings/2026-06-01/artifacts/financial-summary.md` — 5-yr income/cash-flow/balance-sheet + DuPont + backlog
- `runs/arm-holdings/2026-06-01/artifacts/valuation.md` + `valuation-data.csv` — multiples, reverse-DCF, 3-scenario DCF, exit-multiple frame
- `runs/arm-holdings/2026-06-01/artifacts/competition-market-share.md` + `porter-five-forces.md`
- `runs/arm-holdings/2026-06-01/artifacts/sector-data.md`
- `runs/arm-holdings/2026-06-01/artifacts/leadership-insider-transactions.md`
- `runs/arm-holdings/2026-06-01/artifacts/news-catalysts-timeline.md`
- `runs/arm-holdings/2026-06-01/artifacts/crowd-market-signal.md`
- Lane NOTES.md files under `runs/arm-holdings/2026-06-01/research/<lane>/`

*Dossier compiled 2026-06-01 by the Dossier Editor. Decision support only — not investment advice.*
