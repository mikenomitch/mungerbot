# Competitive Landscape — Arm Holdings plc (ARM)

**Lane:** `competition` · **As-of:** 2026-06-01 · **Analyst role:** Competitive Landscape research specialist
**Mandate:** map direct/indirect competitors, relative share & trajectory, Porter Five Forces, moat durability, who is gaining & why.
**Method note:** Primary sources are Arm's FY2025 20-F (FYE 2025-03-31) and Arm Newsroom/IR earnings releases. Secondary sources (Mercury Research via trade press, Omdia, CNBC, court records, FTC reporting) are used for current-market color. **Several "RISC-V penetration" statistics circulating for 2026 originate from AI-generated content farms (FinancialContent/"tokenring", programming-helper, etc.) and are flagged `[LOW-CONF]`** — I down-weight them and prefer Arm's own filing language and reputable analyst firms.

Artifacts (data tables):
- `../../artifacts/competition-market-share.md` — share by end-market, server-CPU share, RISC-V, royalty ladder, customer concentration
- `../../artifacts/porter-five-forces.md` — full Five Forces grid + moat read

---

## 1. What Arm sells, and therefore what "competition" means

Arm is an **IP/architecture licensor**, not (historically) a chipmaker. It licenses (a) the **Arm ISA** (architecture licenses / ALAs, e.g., to Apple, Qualcomm/Nuvia, that let the licensee design its own compatible cores) and (b) **off-the-shelf core IP** (Cortex/Neoverse) and now **Compute Subsystems (CSS)** — pre-integrated multi-IP blocks. It earns up-front **license fees** + per-chip **royalties**. Cumulatively, customers have shipped **>310 billion Arm-based chips** (FY2025: ~7.9B in the year alone), and the platform supports **>20 million developers** running "the vast majority of the world's software." [Arm FY2025 20-F, Item 4/Business — sec.gov/Archives/edgar/data/0001973239/000197323925000016/arm-20250331.htm]

Because Arm sells the *language* the industry's chips speak, competition is fought at three levels:
1. **ISA-level** (will customers use the Arm ISA at all?) → rivals are **x86** (Intel/AMD) and **RISC-V** (open-source).
2. **Core-IP / CSS level** (will customers license Arm's cores, or design their own / buy a rival's?) → rivals are **customers' in-house teams** (Apple, Qualcomm/Nuvia, AWS, Google, Microsoft, Nvidia) and merchant design houses.
3. **Finished-silicon level (NEW, since March 2026)** — Arm now sells a complete CPU, putting it head-to-head with Broadcom, Marvell and its own customers.

---

## 2. The single most important 2025–26 development: Arm moved up the stack and provoked everyone

### 2a. Arm launched its own "AGI CPU" (March 24, 2026)
At "Arm Everywhere," CEO **Rene Haas** unveiled Arm's first complete production chip, the **Arm AGI CPU**: **136 Arm Neoverse V3 cores @ ~3.7 GHz, TSMC 3nm, 300W TDP**; "twice the performance of equivalent x86 at the same power." Co-developed with **Meta** (first customer); early adopters named: **OpenAI, Cerebras, Cloudflare, F5, SAP, SK Telecom, Positron, Rebellions**. Haas: *"We are now in a new business for Arm, and we are supplying CPUs as chips."* He pegged the data-center CPU opportunity at *">$1 trillion through 2030."* Arm later said AGI CPU demand exceeds **$2B across FY27–FY28**.
[CNBC, 2026-03-24, cnbc.com/2026/03/24/arm-launches-its-own-cpu-with-meta-as-first-customer.html; DataCenterKnowledge, 2026-03/04, datacenterknowledge.com/data-center-chips/arm-enters-data-center-chip-fray-with-agi-cpu-for-ai-infrastructure; Tom's Hardware (AGI CPU coverage)]

**Why it matters competitively:** Arm has abandoned pure neutrality. It now **competes with the very customers who pay its royalties** (Nvidia Vera, AWS Graviton, Microsoft Cobalt, Google Axion all target the same socket). Notably Broadcom/Marvell/Nvidia/AWS/Azure/Google execs *publicly endorsed* the launch — Omdia and analyst Matt Kimball read this as Arm targeting **neoclouds / smaller CSPs that can't afford custom silicon**, limiting (but not eliminating) channel conflict. [Omdia, 2026-04, omdia.tech.informa.com/blogs/2026/apr/arm-steps-deeper-into-silicon-implications-for-the-semiconductor-value-chain]

### 2b. Arm LOST the Qualcomm/Nuvia license fight — buyers proved they can resist
- **Dec 20, 2024:** Delaware jury unanimously found **Qualcomm did NOT breach** Arm's ALA when it used Nuvia-acquired ($1.4B, 2021) tech under Qualcomm's own ALA. Qualcomm's Oryon cores are properly licensed.
- **Sep–Oct 2025:** Court denied Arm's motion for a new trial and **dismissed Arm's final claim**; "full and final judgment" for Qualcomm. Qualcomm declared "complete victory." Arm indicated intent to appeal; **Qualcomm's counter-suit (breach/interference) reportedly heading to trial ~March 2026.**
[Qualcomm IR press release 2025-09; Nasdaq/Reuters; The Register 2025-10-01; Paul Weiss client note; RCRWireless 2025-10-01]

**Why it matters:** Arm tried to use license terms to capture more value from a customer's vertical integration and a jury slapped it down. This both **caps Arm's pricing/term leverage over large ALA holders** and signals to *every* customer that Arm may push aggressively — a motive to diversify toward RISC-V or in-house designs.

### 2c. FTC antitrust probe (reported May 17, 2026)
The **U.S. FTC reportedly opened an antitrust investigation** into whether Arm is trying to **monopolize the Arm architecture** by denying rivals license access or steering them to **lower-quality designs** while favoring its own AGI CPU. Trigger: the silicon pivot + Qualcomm's antitrust campaign. [Tom's Hardware, 2026-05-17, tomshardware.com/tech-industry/big-tech/us-ftc-reportedly-launches-antitrust-probe-into-arm...]
**Status:** early-stage probe; no findings/charges as of 2026-06-01. Flag as live regulatory-competitive overhang. (Hand-off to the `legal-regulatory` lane for tail-risk sizing.)

---

## 3. Competitive position by end market (who's gaining, and why)

### Smartphone / tablet — **near-monopoly, stable**
Arm holds **~99–100% ISA share** in smartphone application processors. [thechipletter / industry consensus]. All majors (Apple A/M-series, Qualcomm Snapdragon, MediaTek Dimensity, Samsung Exynos, Google Tensor) are Arm-based and pay Arm. Royalty per phone is rising via **Armv9 + CSS** even with flat unit volumes. As of Q2 FYE26, the **top-4 Android vendors all ship CSS-powered devices** (Samsung joined). [Arm Q2 FYE26 release; morethanmoore Q2 FY26]. Threat here is *rate compression from in-house designs* and a *long-dated* RISC-V risk, not near-term share loss.

### Data center / server — **Arm GAINING fastest; the key battleground**
- **Mercury Research, Q1 2026:** Arm = **17.7% of total server CPU units** (up from 11.5% YoY). Intel total server unit share fell to **66.8%** (from 72.8% YoY). AMD = 46.2% of **x86** revenue / 33.2% of **x86** units (records). [Tom's Hardware / AnalyticsInsight / TechPowerUp, ~2026-05-14]. **CAUTION (denominators differ):** AMD's 46.2% is *x86-only revenue*; Arm's 17.7% is *total-market units* — not additive.
- **Arm's own claim:** "~50% of compute shipped to top hyperscalers in 2025 is Arm-based"; "nearly 50% share of CPUs deployed by top hyperscalers this year"; **>1 billion Neoverse cores** deployed. [Arm Newsroom "Half of compute…2025"; Arm Q2 FYE26 release]. This is a *hyperscaler-deployment* metric (favorable denominator), distinct from total-market share — do not conflate.
- **Why Arm wins here:** power efficiency for AI-era racks; hyperscaler custom Arm CPUs — **AWS Graviton** (Gen4 = 96 Neoverse V2 cores; ~100k cloud customers; >half of AWS CPU demand; Graviton5/192-core in dev), **Google Axion**, **Microsoft Cobalt**, **Nvidia Grace/Vera**. Google reportedly migrated 30,000+ cloud apps to Arm. [semiengineering.com/data-center-cpu-dominance-is-shifting-to-amd-and-arm; Arm Q2 FYE26; Tech Monitor on Axion]
- **Forward [secondary/mixed-conf]:** server CPU market $27.7B(2025)→$56.2B(2028); Arm 13.4%→23.1%. [semiengineering, analyst model]
- **Cross-current:** Nvidia enlisted **Arm as an NVLink Fusion partner** — a partnership signal that complicates the "Arm vs Nvidia" framing. [SDxCentral]

### AI accelerators — **indirect; double-edged**
The accelerator silicon (Nvidia GPU, Google TPU, AWS Trainium, Meta MTIA, custom ASICs) is **not Arm's product**; Arm supplies the **host CPU**. Arm's own 20-F flags the risk that "**if, over time, more of the workloads move to accelerators away from the CPU, the CPU market size may decrease**," cutting Arm's fees/royalties; mitigations = NPUs + AI features in CPUs/GPUs. [20-F Risk Factors]. So the AI boom both **lifts host-CPU attach** and **threatens the CPU's share of compute $**.

### Automotive — **Arm strong (~94% of automakers), RISC-V encroaching at the low end**
~**94% of global automakers use Arm vehicle technology**. [arm.com/markets/automotive; ARM-processors market reports]. High-perf AV compute is Arm-based: **Nvidia DRIVE AGX Thor (Neoverse)**, **Qualcomm Snapdragon Digital Chassis (Arm)**. Counter-trend: **RISC-V** is winning **auto MCUs** — Bosch, Infineon, NXP, Qualcomm formed/back a RISC-V auto venture (Quintauris) and committed to standardizing on it; [LOW-CONF] claims of "~25% of new auto silicon contains RISC-V cores, +66% YoY." [Yole-adjacent + content-farm sources — treat as directional]. Net: Arm dominant in performance compute, **share erosion at MCU/low end**.

### IoT / embedded / microcontrollers — **incumbent, but where RISC-V bites first**
Arm Cortex-M is the embedded incumbent. This is where **RISC-V displacement is most advanced** — no legacy software stack to protect and royalty cost matters at volume. Consensus: "RISC-V wins where there is no incumbent SW stack to displace and where royalty costs matter at scale." [nextwavesinsight; multiple]. >13B cumulative RISC-V cores shipped (vs Arm's >310B). [RISC-V-adjacent reporting].

---

## 4. The RISC-V threat — sized and caveated

**Confirmed (primary, Arm 20-F):** Arm explicitly names RISC-V a competitive threat: *"We anticipate continued challenges from current and new competitors, including established technologies such as the x86 architecture… as well as by free, open-source technologies, including the RISC-V architecture. Many of our customers are also major supporters of the RISC-V architecture… If RISC-V-related technology continues to be developed and market support… increases, our customers may choose to utilize this free, open-source architecture instead of our products."* It also flags **customer RISC-V joint ventures** pooling resources. [20-F Risk Factors]

**Backers (corroborated across sources):** Qualcomm (acquired RISC-V high-perf player **Ventana** in late 2025 per trade press [verify — see gap]), Google, Meta (RISC-V in MTIA orchestration), **Nvidia (40+ RISC-V microcontrollers inside Blackwell/Rubin GPUs for system management)**, Bosch/Infineon/NXP (auto), Alibaba (servers), and **China "silicon sovereignty"** (RISC-V sidesteps US/UK export-license exposure on Arm IP — most dangerous in Arm's ~19%-of-revenue PRC market).

**Sizing — explicitly low confidence:** the widely-quoted **"RISC-V = ~25% of the processor market (2026)"** comes from **AI-generated content farms** (FinancialContent/"tokenring", programming-helper) with no disclosed methodology. I do **not** trust the precise figure. The defensible statements: RISC-V is (a) real and growing, (b) winning **MCU/IoT and increasingly auto-MCU**, (c) **not yet** displacing Arm in smartphones or general-purpose servers because the software ecosystem is immature and there is an incumbent stack to overcome, and (d) most threatening to Arm in **China** and at the **low-royalty embedded edge**. **Time horizon matters:** near-term (1–3yr) limited; medium-term (3–7yr) a genuine erosion risk to the embedded/auto royalty base and a wildcard in servers.

---

## 5. Moat / durability of advantage (Five Forces summary — detail in artifact)

| Force | Intensity (judgment) | One-line basis |
|---|---|---|
| ISA-level substitutes/new entrants (RISC-V, x86) | **HIGH, rising** | Free open ISA named in 20-F; backed by Arm's own customers + China |
| Rivalry | **MODERATE→HIGH, rising** | Near-monopoly in mobile, but data-center contest + Arm's own silicon pivot |
| Buyer power | **MODERATE→HIGH** | Top-5 = 56% of rev; buyers can self-design (Apple/Qualcomm) or go RISC-V; Qualcomm won in court |
| Supplier power | **LOW** | IP house; minor new TSMC/packaging dependence via AGI CPU |
| Business-model substitution (vertical integration) | **MODERATE** | Hyperscalers/Apple internalize design but mostly still pay Arm |

**Moat sources (durable):** (1) **software-ecosystem network effect** — >20M devs, world's software runs on Arm, high re-port/re-validation switching costs (this is the load-bearing moat); (2) **standards incumbency** — >310B chips, de-facto standard in mobile/embedded; (3) **R&D scale economics** — one ISA amortized industry-wide.
**Moat weaknesses (eroding edges):** (1) **no exclusivity on the ISA idea** — RISC-V is a clean-room open substitute; (2) **buyers are also rivals** funding alternatives; (3) **self-inflicted trust erosion** — AGI CPU channel conflict + lost Qualcomm suit + FTC probe give customers a reason to diversify away from a vendor that now competes with them.
**Judgment:** moat is **wide but softening at the edges** — durable in mobile/embedded on a 3–5yr view; the *new growth* (data center, finished silicon) is won in a more contested, regulatorily-exposed arena than Arm's historic "neutral Switzerland" position.

---

## 6. Who is gaining share, and why (one-paragraph synthesis)

In **servers**, **AMD and Arm are taking share from Intel** (Intel total server units 72.8%→66.8% YoY; Arm 11.5%→17.7%; AMD record x86 share) — driven by AI-era power-efficiency demand and hyperscalers' custom Arm CPUs (Graviton/Axion/Cobalt/Grace). In **embedded/IoT and auto-MCU**, **RISC-V is the share-gainer at Arm's expense**, because there's no incumbent software lock-in and royalty cost matters. In **mobile**, **no one is taking share from Arm** at the ISA level; the dynamic is Arm *raising revenue per device* via Armv9/CSS. The wildcard everywhere is **Arm itself** — by selling finished silicon it is trying to capture more value per chip, but at the cost of competing with customers and inviting regulators.

---

## 7. Financial corroboration (competition-relevant only; defer to financials/valuation lanes)

- **Q2 FYE26 (qtr ended ~Sep 2025):** revenue **$1.14B (+34% YoY)**; royalty **$620M (+21% YoY, record)**; licensing **$515M (+56% YoY)**. CSS royalty rate **>10% of ASP (CSS v2)** — "highest Arm's rates have ever been." Royalty mix (Q4 FY25 ref): **v8 44% / v9 31% / v7-older 25%**; v9 attach target 60–70%. CSS ≈ "almost 20% of royalties" (Haas, Mar 2026). [Arm Newsroom Q2 FYE26; morethanmoore "Arm 2026 Q2 Financials"; EE Times; Futurum]
- **Royalty ladder** (why mix-shift is the competitive flywheel): v8 ~2.5–3% → v9 ~5% → CSS ~10%+ of chip ASP. This lets Arm grow royalty revenue even on flat unit volumes — the core reason rivalry has not (yet) competed away Arm's economics.

---

## 8. Data gaps & confidence

- **Precise RISC-V share figures are unverified** — the "~25% penetration" numbers trace to AI content farms; no primary methodology found. **Confidence LOW on magnitude, MEDIUM on direction.**
- **Qualcomm/Ventana acquisition** (RISC-V high-perf) is reported by trade press but I did not confirm it in a Qualcomm primary release in this pass. **Verify before relying on it.**
- **20-F is FY2025 (pre-AGI-CPU)** — it frames "complete end chip solutions" as exploration/risk, not an active product; the competitive picture has materially changed since (AGI CPU launch Mar 2026, FTC probe May 2026). Pull the **FY2026 20-F** when available to see updated competition/risk language and any segment-share disclosure.
- **No granular per-end-market revenue split** disclosed by Arm (they report royalty vs licensing, not strict end-market segments); end-market shares above are stitched from third parties.
- **Mercury Research server numbers** come via trade-press secondary reporting, not a primary Mercury document; denominators (x86-only revenue vs total-market units) must be kept straight (see artifact CAUTION).
- **FTC probe outcome unknown**; **Qualcomm counter-suit (~Mar 2026 trial) outcome not captured** — hand to `legal-regulatory`.
- **Arm China** is the #1 customer (~17% of revenue) yet operates outside Arm/SoftBank control — quantify the dependency and RISC-V-substitution risk in PRC with the `filings`/`legal-regulatory` lanes.

**Overall lane confidence: 3.5/5.** The structural competitive narrative (mobile near-monopoly; data-center share gains; RISC-V threat concentrated in embedded/auto/China; Arm's silicon pivot + regulatory blowback) is well-supported by primary filings and reputable analysts. The quantitative *magnitude* of the RISC-V threat and exact forward server shares are the soft spots.

---

### Source ledger (key)
- Arm Holdings FY2025 **Form 20-F** (FYE 2025-03-31): sec.gov/Archives/edgar/data/0001973239/000197323925000016/arm-20250331.htm — competition risk factors, RISC-V/x86 language, customer concentration (top-5 ~56%; Arm China ~17%; PRC ~19%), >310B cumulative chips, CSS/end-chip risk, accelerator-shift risk, switching costs.
- Arm **Q2 FYE26 results** (Arm Newsroom): newsroom.arm.com/news/arm-q2-fye26-results — $1.14B rev / $620M royalty / CSS / hyperscaler ~50% / >1B Neoverse cores.
- **morethanmoore** (Smith & Cutress), "Arm 2026 Q2 Financials": morethanmoore.substack.com/p/arm-2026-q2-financials — licensing $515M (+56%), royalty mix, CSS v2 >10%.
- **CNBC** 2026-03-24 (AGI CPU launch): cnbc.com/2026/03/24/arm-launches-its-own-cpu-with-meta-as-first-customer.html
- **DataCenterKnowledge** (AGI CPU specs/customers): datacenterknowledge.com/data-center-chips/arm-enters-data-center-chip-fray-with-agi-cpu-for-ai-infrastructure
- **Omdia** 2026-04 (silicon-pivot implications): omdia.tech.informa.com/blogs/2026/apr/arm-steps-deeper-into-silicon-implications-for-the-semiconductor-value-chain
- **Tom's Hardware** 2026-05-17 (FTC probe): tomshardware.com/tech-industry/big-tech/us-ftc-reportedly-launches-antitrust-probe-into-arm...
- **Mercury Research** via Tom's Hardware / AnalyticsInsight / TechPowerUp (~2026-05-14): server CPU shares Q1 2026.
- **semiengineering.com** (data-center share shift; forward model; Graviton): semiengineering.com/data-center-cpu-dominance-is-shifting-to-amd-and-arm
- **Qualcomm IR / Nasdaq / The Register / Paul Weiss / RCRWireless** (Qualcomm v. Arm outcome Dec 2024 + Sep/Oct 2025).
- Automotive: arm.com/markets/automotive; ARM-processors market reports; Yole-adjacent RISC-V auto commentary.
- RISC-V context: nextwavesinsight.com/risc-v-2026-ai-accelerators-enterprise; **[LOW-CONF]** financialcontent/"tokenring", programming-helper (flagged).
- Nvidia–Arm NVLink Fusion: sdxcentral.com/news/nvidia-enlists-arm-as-nvlink-fusion-partner-in-major-ai-interconnect-coup
