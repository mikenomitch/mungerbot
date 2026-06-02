<!--
  Per-model write-up. comparative-advantage / Economics.
-->
# Comparative Advantage — Arm Holdings (ARM)

**Discipline:** Economics  ·  **Intensity:** standard  ·  **As-of:** 2026-06-01

## What this model predicts

Ricardo's law of comparative advantage, applied to a firm: a company prospers durably when it does *one thing relatively better than anyone else* and that edge is **defensible** against lower-cost or better-positioned rivals (including across geographies). The discipline forces three questions, in order:

1. **What is the firm's true comparative advantage** — not "what is it good at," but "what does it do better, per unit of resource consumed, than the next-best alternative the customer could choose?"
2. **What is the *source* of that edge** — is it a structural asset (network effect, installed base, scale economies, proprietary process) or merely a head start that rivals can copy?
3. **Is the edge defensible** against (a) lower-cost competitors, (b) better-positioned competitors, and (c) competitors operating under different rules (different geographies, different business models, state subsidy)?

**If Arm has a genuine, defensible comparative advantage, we should observe:** (a) near-monopoly share that *persists* where the edge is strongest; (b) pricing power *rising* over time (the firm captures more value, not less); (c) rivals failing to displace it even when heavily funded and strongly motivated; (d) the edge rooted in something rivals cannot cheaply replicate; and (e) the firm staying *within* its zone of advantage rather than venturing into arenas where it is the weaker party.

**If the comparative advantage is shallow or eroding, we should observe:** the edge being attacked precisely at its source; the firm's own best customers funding the substitute; share gains concentrated in a *new* arena where the firm is *not* the low-cost or best-positioned player; and the firm voluntarily leaving its zone of advantage to chase growth.

The honest read on Arm is that **both pictures are simultaneously true** — and that the model's most uncomfortable signal is #e: Arm is leaving the arena where it has a real comparative advantage to enter one where it does not.

## Evidence

**Supporting — Arm has a genuine comparative advantage (cited):**

- **Near-monopoly where the edge is real, and it persists.** Smartphone/tablet application processors are **~99–100% Arm ISA**; automotive **~94% of automakers**; embedded/IoT (Cortex-M) the incumbent. Apple, Qualcomm, MediaTek, Samsung, and Google *all* pay Arm. This share has held for years, not quarters. [DOSSIER §1, §4.1; Arm FY2025 20-F + industry consensus]
- **Pricing power is *rising*, not competed away — the strongest single piece of evidence for a real edge.** The royalty ladder climbs **Armv8 ~2.5–3% → Armv9 ~5% → CSS >10% of chip ASP** (CSS v2 the highest royalty in Arm's history). A firm without comparative advantage cannot raise its take-rate on roughly flat unit volume; Arm has roughly *doubled* its rate per chip across a generation. [DOSSIER §4.2, Table 4]
- **The edge is a network effect, the most durable moat type.** >20M developers, >325B cumulative chips, "the vast majority of the world's software" compiled for Arm, and high re-port/re-validation switching costs. One ISA is amortized across the entire industry — a scale economy in R&D no single rival can match. [DOSSIER §1, §4 net moat read]
- **Genuine design-productivity advantage in low-power CPU IP.** Arm's comparative advantage is not merely the ISA but the *organizational capability* to ship a steady cadence of power-efficient cores (Cortex/Neoverse) that a fragmented set of licensees would each have to fund alone. The AGI-CPU's claimed perf/rack (8,160 cores in a 36kW envelope, ">2x perf/rack vs x86" on internal estimates) reflects real engineering competence in dense, efficient CPU design. [tomshardware.com 2026-03; developer.arm.com]
- **Independent confirmation that the *ecosystem* edge is real and hard to replicate.** Analysts note "Arm's lead in toolchain, profilers, certified compilers, ISV software packages, and support contracts exists for Arm but not yet for RISC-V" — substantial though narrowing. RISC-V, despite years of effort and elite backers, is "*not yet* displacing Arm in smartphones or general-purpose servers." [nextwavesinsight.com 2026; DOSSIER §4.3]

**Disconfirming — the comparative advantage is shallower and more contested than it looks (cited):**

- **The source of the edge is *not* an intrinsic technical superiority — it is ecosystem incumbency, which is copyable in principle.** The widely-believed "Arm ISA is more power-efficient than x86" thesis is contested by the people best placed to know: **AMD argues the ISA "doesn't offer an efficiency advantage over x86,"** that efficiency comes from microarchitecture, process node, and system design — *not* the instruction set — and points to Lunar Lake / Strix Point x86 parts matching Arm on efficiency. Industry consensus: "ISA choice matters far less than implementation details, process node, and overall system design." This matters enormously for the model: if Arm's advantage were a *physics* edge, it would be defensible; because it is an *ecosystem/standards* edge, it is defensible only as long as the ecosystem stays put. [techpowerup.com 2025; xda-developers.com]
- **Arm's own best customers fund the substitute — the textbook signature of an eroding comparative advantage.** Qualcomm, Google, Meta, and Nvidia are *simultaneously* Arm's largest royalty payers and RISC-V's biggest backers; Arm's 20-F concedes "many of our customers are also major supporters of RISC-V." Nvidia already ships 40+ RISC-V microcontrollers inside Blackwell/Rubin GPUs. Qualcomm acquired RISC-V designer Ventana Micro (Dec-2025) explicitly as an Arm hedge. When the people who pay you are building your replacement, the edge is being actively dismantled at its source. [DOSSIER §4.3, Table 3]
- **A lower-cost rival operating under different rules is gaining where Arm is most exposed.** RISC-V is **royalty-free** and Switzerland-domiciled (shielded from US export controls). China "now accounts for nearly 50% of all global RISC-V shipments," explicitly to "bypass restrictive licensing fees" — directly attacking Arm's **~19%-of-revenue PRC market**. Alibaba's T-Head XuanTie C930 / "Kunminghu" core is designed to *match Neoverse N2* as a royalty-free server alternative. This is the classic comparative-advantage threat: a competitor who is structurally lower-cost (zero royalty) and better-positioned geopolitically (export-control-immune) in a market Arm cannot defend on price. [tomshardware.com 2025-12; financialcontent.com 2026; DOSSIER §4.3]
- **Arm is voluntarily LEAVING its zone of comparative advantage.** The March-2026 AGI-CPU launches Arm into selling *finished merchant silicon* — an arena where it has **no comparative advantage**: it is a first-time entrant against incumbents (Broadcom, Marvell) with decades of merchant-silicon, supply-chain, and customer-relationship experience, and against its *own customers'* in-house teams (AWS Graviton, Google Axion, MS Cobalt, Nvidia Grace/Vera) who design Arm CPUs better-tailored to their own workloads. Arm's edge is *designing IP cheaply for everyone*; that edge does **not** transfer to *building, yielding, packaging, inventorying, and selling a 300W data-center chip*. The capex regime change confirms the shift — capex jumped from ~$92M (FY24) to **$545M (FY26, 11% of revenue)**, abandoning the capital-light model that *was* the advantage. [DOSSIER §1, §2.2; Table 1]
- **A top customer successfully resisted Arm tightening its terms — a visible cap on the edge's pricing power.** Arm *largely lost* the Qualcomm/Nuvia litigation (Sept 2025 JMOL for Qualcomm; Arm on appeal), demonstrating that a sophisticated, cash-rich buyer can defeat Arm's attempt to extract more. The follow-on Qualcomm antitrust trial (Q4 CY2026) plus the **US FTC probe (opened 2026-05-15)** into whether Arm degrades licenses to favor its own silicon together signal that Arm's leverage over its ecosystem is being legally constrained at the exact moment it tries to monetize it harder. [DOSSIER §4.3, §8.4–8.5]

**Independent research run for this model (sources below):**
- AMD's public position that the Arm ISA confers *no* intrinsic efficiency advantage over x86 (TechPowerUp, 2025) — load-bearing because it reframes Arm's edge as ecosystem-incumbency, not physics.
- RISC-V ecosystem-maturity reads (Next Waves Insight, 2026): production GCC/LLVM/Linux/Zephyr support exists, but RISC-V still lags Arm on trace tooling, certified compilers, safety-certification track record, and ISV packages — confirming the *direction* (gap narrowing) and the *pace* (slow, uneven, MCU-first).
- China RISC-V substitution (Tom's Hardware, FinancialContent, 2025–26): ~50% of global RISC-V shipments, explicit royalty-avoidance motive, server-grade Kunminghu/C930 targeting Neoverse parity.
- AGI-CPU perf/rack claims (Tom's Hardware; Arm developer blog, 2026): confirm genuine design competence but also confirm these are *Arm's own internal* benchmarks, not independent.

## Reasoning

**Where the model is highly relevant.** Comparative advantage is *the* right lens for a licensing/IP business, because such a business has no physical scarcity to defend — its entire value is "we do CPU-IP design-and-ecosystem better, per dollar, than the customer's alternatives." So the model speaks loudly here. The verdict is **mixed**, and the mix is the whole point.

**The bull half is real.** Arm has a genuine, presently-dominant comparative advantage in *mobile and embedded CPU IP*. The proof is not the share alone (a monopoly can be undefended) but the **rising take-rate**: a firm that can climb from a ~2.5% to a >10% royalty across a generation, on flat units, is capturing *more* value over time — the unmistakable fingerprint of a real and currently-widening edge. The source — an ecosystem/standards network effect amplified by R&D scale economics — is among the more durable moat archetypes. On a 3–5 year horizon, nobody re-ports the world's smartphone software stack to RISC-V; the switching cost is the moat, and it is large.

**The bear half is equally real, and the model weights it heavily because it attacks the *source*.** Three things the discipline insists on flagging:

1. **The edge is ecosystem, not physics.** Because the technical-efficiency advantage is contestable (AMD's own argument; industry consensus that ISA ≠ efficiency), Arm's moat rests entirely on incumbency. Incumbency moats are durable *until they aren't* — they erode slowly, then suddenly, once a credible alternative ecosystem reaches "good enough." RISC-V is the first ISA in 35 years engineered specifically to reach "good enough" *for free*.

2. **The defenders are funding the attack.** The comparative-advantage model treats "your customers building your substitute" as a near-fatal tell, and here it is explicit and documented (Qualcomm/Ventana, Nvidia's in-GPU RISC-V, the Meta/Google/Qualcomm RISC-V backing). A lower-cost rival (zero royalty) with better-positioned geographic sponsorship (China's export-control-immune sovereignty push, ~50% of RISC-V shipments) is attacking the *highest-margin growth markets* (servers) and the *most-exposed geography* (PRC, ~19% of revenue). This is precisely the configuration — lower-cost + better-positioned-in-a-key-geography — that the model says erodes a comparative edge.

3. **Most damning for *this* model: Arm is abandoning its zone of advantage.** Ricardo's insight is that you should specialize in what you do *relatively* best and *trade for the rest*. Arm's relatively-best thing is capital-light IP design; its relatively-*worst* thing — where it has zero accumulated advantage — is fabricating and merchandising finished silicon against entrenched merchant vendors and its own customers' bespoke teams. By launching the AGI CPU, Arm is doing the *opposite* of what comparative advantage prescribes: leaving a ~98%-gross-margin arena it dominates to enter a 40–50%-margin, capex-heavy arena where it is the weaker party, *and* simultaneously antagonizing the customers who underwrite its real moat (channel conflict → faster customer diversification to in-house designs and RISC-V → FTC probe). The model reads the pivot as **negative for the durability of the original advantage**, somewhat independent of whether the AGI CPU itself sells — because the strategic cost is paid in customer trust, which is the connective tissue of the ecosystem moat.

**Check on our own bias (the discipline cuts both ways).** I should guard against *recency-driven catastrophizing*: RISC-V has been "about to disrupt Arm" in trade-press for years, and the dossier flags much RISC-V data as low-confidence content-farm material. The hard facts remain that RISC-V has **not** displaced Arm in either smartphones or general-purpose servers, and Arm's take-rate is still *rising*. So the comparative advantage is **intact today and eroding at the edges**, not broken. The model's signal is about *trajectory and the pivot*, not an imminent collapse. Equally, I should not let Arm's genuine engineering competence (the perf/rack numbers are impressive) launder into a *comparative* advantage in a business (merchant silicon) where competence is necessary but not sufficient and where the incumbents are also competent.

**Net.** Arm clears the comparative-advantage bar in its core (mobile/embedded IP) decisively, but the model's forward-looking verdict is **mixed-to-mildly-negative**: the source of the edge is the contestable kind, the best-funded and lower-cost attack is aimed straight at it from a geography Arm can't defend on price, and management is voluntarily stepping out of the arena where the advantage is real. This is *not* a fatal flaw for the model (the moat is wide and present-tense), but it is a reason the durability assumptions baked into a ~231x non-GAAP multiple are aggressive.

## Red flags

| Flag | Severity | Rationale |
|---|---|---|
| Advantage is ecosystem-incumbency, not intrinsic technical superiority | med | AMD/industry argue ISA confers no efficiency edge; the moat is "switching cost," which erodes once a free alternative is "good enough." [techpowerup 2025] |
| Best customers fund the substitute (RISC-V) | high | Qualcomm/Google/Meta/Nvidia back RISC-V while paying Arm; Qualcomm bought Ventana as a hedge — the classic eroding-edge tell. [DOSSIER §4.3] |
| Lower-cost, geopolitically-better-positioned rival in a key geography | high | Royalty-free RISC-V, China ~50% of shipments, export-control-immune, targeting Arm's ~19% PRC revenue and the server growth vector. [tomshardware 2025-12] |
| Management leaving the zone of comparative advantage (AGI CPU) | high | Entering merchant silicon (no accumulated edge; 40–50% margins; 11% capex) against incumbents + own customers, antagonizing the ecosystem the moat depends on. [DOSSIER §1, §2.2] |
| Take-rate gains rely on tightening terms a top customer already defeated | med | Qualcomm/Nuvia loss + FTC/EU/KFTC probes cap Arm's ability to monetize the edge harder. [DOSSIER §8.4–8.5] |

## What would flip this read (disconfirmers)

- **Toward more positive:** Arm's v9/CSS take-rate keeps climbing *and* a flagship smartphone or a Tier-1 hyperscaler general-purpose server line publicly *re-commits* to Arm over RISC-V — evidence the ecosystem edge is widening, not narrowing. Or the AGI CPU is structured as a thin reference/CSS play that *pulls through* royalties rather than competing with customers (channel conflict defused).
- **Toward more negative:** A major customer ships a *flagship* (not MCU) product end-to-end on RISC-V — converting latent substitution into realized share loss; or PRC revenue steps down materially as China standardizes on domestic RISC-V; or take-rate growth stalls as antitrust action forces Arm to license on non-discriminatory terms.
- **On the pivot specifically:** Customers (AWS/Google/MS/Nvidia) visibly accelerate in-house design or RISC-V hedging *in response to* the AGI CPU — proof the pivot is eroding the very ecosystem trust that is the comparative advantage.

## Verdict

| | |
|---|---|
| **Signal** | mixed |
| **Relevance** | 5 |
| **Strength** | 4 |
| **Conviction** | 4 |
| **Fatal flaw?** | no — this model is not fatal-capable, and the core comparative advantage is present-tense and wide; the concern is durability/trajectory, not an imminent path to zero |

**Bottom line:** Arm has a real, currently-widening comparative advantage in mobile/embedded CPU IP — proven by a rising royalty take-rate on flat units atop a 20M-developer ecosystem network effect that RISC-V has *not* displaced. But the model flags three durability problems that justify a mixed signal: the edge is contestable ecosystem-incumbency rather than intrinsic technical superiority, Arm's own largest customers fund the lower-cost, export-control-immune substitute (RISC-V) aimed at its highest-margin server growth and its undefendable ~19% China revenue, and — most tellingly for this lens — management is voluntarily leaving the capital-light arena it dominates to sell finished silicon where it has *no* comparative advantage and where the pivot itself corrodes the customer trust the moat depends on. The advantage is wide today and narrowing at the edges; at ~231x non-GAAP earnings, the price assumes the edge both holds *and* extends into an arena where the model says it does not exist.
