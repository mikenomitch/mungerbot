<!--
  Per-model write-up. One mental-model agent fills this in at
  models/<key>/ANALYSIS.md. Keep it tight: the model's lens, the evidence, the
  honest verdict. Cite facts; mark judgments as judgments.
-->
# Feedback Loops — Arm Holdings (ARM)

**Discipline:** Physics  ·  **Intensity:** standard  ·  **As-of:** 2026-06-01

## What this model predicts

Feedback loops are the engine of nonlinear outcomes. A business is a system of
**reinforcing loops** (flywheels: a turn of the wheel makes the next turn easier
and bigger) and **balancing loops** (governors that resist and eventually halt
the spin). The model's job is not to admire the flywheel but to ask three sharp
questions: **(1) Which loops actually exist and how are they coupled? (2) Which
dominates *now*? (3) Which way is the dominant loop turning — accelerating,
cresting, or reversing?** A flywheel is only worth paying for if it is *still
accelerating* and the balancing loops are weak. The danger is paying a flywheel
multiple at the moment a balancing loop is taking over (the loop is cresting),
or — worse — when management's own action is *converting* a clean reinforcing loop
into a leakier one.

If Arm's flywheel were favorably dominant and accelerating, I should observe:
- **Royalty-per-chip rising faster than unit headwinds** so revenue compounds on
  the price axis even when volume stalls (the "royalty ladder").
- A **developer/installed-base network effect that is widening, not narrowing** —
  switching costs growing relative to substitutes.
- **Customers leaning *in*** (more designs, more lock-in), not hedging out.
- The **balancing loops (substitution, customer in-sourcing, regulation) weak and
  static**, not strengthening.
- Incremental economics *improving* with scale (the canonical scale->cost->price->
  volume flywheel), not capital intensity rising and margins falling.

## Evidence

**Supporting** (the reinforcing loops are real):

- **The royalty-ladder flywheel is genuinely intact on the price axis.** Per-chip
  royalty steps up the architecture ladder: Armv8 ~2.5-3% of chip ASP -> Armv9 ~5%
  -> CSS >10% (highest ever). [DOSSIER §4.2; EE Times; mlq.ai] Armv9 was ~25% of
  royalty sales early-2026 with a 60-70% attach *target* still ahead, and CSS is
  ~20% of royalties and growing (21 CSS licenses across 12 companies). [WebSearch:
  EE Times / Arm Q4 6-K] This is a reinforcing loop that lets royalty revenue grow
  on flat-to-declining *units* — royalty revenue rose +21% in FY26 to $2,613M on
  roughly flat global unit volume. [DOSSIER §2.1, §4.2]
- **Data-center deployment is a self-reinforcing share-gain loop.** Arm reached
  **17.7% of total server-CPU units in Q1'26, up from 11.5% YoY** [DOSSIER §4.1,
  Mercury Research]; data-center royalties **more than doubled** in Q4. [WebSearch:
  Investing.com transcript] More hyperscaler custom Arm CPUs (Graviton/Axion/Cobalt/
  Grace-Vera) deployed -> more Arm-native server software -> cheaper for the next
  hyperscaler to go Arm. Arm-based host CPUs are projected to reach **~90% of custom
  AI-ASIC servers by 2029 (from ~25% in 2025)**. [WebSearch: finance.yahoo via
  DigiTimes] This is the loop *gaining* speed.
- **The developer/ecosystem network effect is the load-bearing flywheel.** >20M
  developers, >325B cumulative chips, mature toolchains across Android/iOS/Windows/
  Linux — a dual-sided loop (more developers -> more hardware partners -> more
  developers). [DOSSIER §1, §4; finviz; Yahoo Finance] Multiple third parties
  independently describe it as a "self-reinforcing ecosystem ... deep moat." [WebSearch]
- **The Nvidia Grace/RTX-Spark launch (May'26) is a positive cross-loop:** a
  partner extending Arm into the PC/AI-workstation domain, widening the installed
  base Arm taxes. [DOSSIER §3 price note]

**Disconfirming** (the balancing loops are strengthening, and one loop is reversing):

- **The volume sub-loop has decayed to flat/negative.** Royalty growth
  **decelerated to +11% in Q4 FY26** from +27% (Q3) — the first soft royalty print
  of the year. [DOSSIER §8.8; WebSearch: Investing.com — Q4 royalty $671M +11%]
  Management warned of **negative smartphone unit growth** and DRAM-driven low-end
  pressure. [DOSSIER §7; WebSearch] The flywheel is now running *entirely on the
  price axis* (ladder) while the volume axis stalls — a flywheel losing one of its
  two drive belts.
- **RISC-V is the strengthening balancing loop — and it has its *own* flywheel.**
  Royalty-free open ISA, now with production GCC/LLVM/Zephyr/FreeRTOS/Linux support
  and **CUDA-on-RISC-V at release-candidate** (which "will materially change the ROI
  calculation for AI inference servers on RISC-V"). [WebSearch: medium/alpinum]
  Backed by Qualcomm (bought RISC-V designer Ventana Dec'25), Google, Meta, Nvidia
  (40+ RISC-V cores inside Blackwell/Rubin), and **China state mandate** (~50% of
  global RISC-V shipments; mandated into finance/energy/telecom infra). [DOSSIER
  §4.3; WebSearch] Trade-press claims "~25% of the processor market" — **directional
  only; the denominator is ambiguous and the source is advocacy/SEO content (DOSSIER
  §9.9 flags this).** [WebSearch: financialcontent] Tenstorrent's Ascalon-X targets
  high-end Neoverse directly. [WebSearch] Crucially, RISC-V's own network effect is
  *gaining* turns — each design win funds the toolchain that lowers the next switch.
- **Arm is *converting its own clean flywheel into a leakier, channel-conflicted
  loop*.** The Mar-2026 AGI-CPU pivot makes Arm a **direct competitor to its
  royalty-paying customers**, "threaten[ing] to alienate its massive base of IP
  licensees." [DOSSIER §1, §4.3; WebSearch: armrinvesting/medium] The predictable
  systems response: customers accelerate the *very* in-house-design / RISC-V hedging
  that strengthens the balancing loop. Qualcomm's Ventana buy and Nvidia's internal
  RISC-V use are early evidence.
- **The scale->cost->price->volume flywheel is running in *reverse* on economics.**
  Building its own silicon, Arm's **capex jumped to 11% of revenue (from 1-3%)**,
  PP&E doubled, **R&D = 56% of revenue**, GAAP operating margin slid 20.7%->18.3%,
  and non-GAAP operating margin fell 46.7%->43.0% *despite* +23% revenue. [DOSSIER
  §2.1, §2.2, §8.6] More scale is currently producing *lower* margins and *higher*
  capital intensity — the opposite of a virtuous cost loop.
- **A balancing loop on *capital*: owner free cash flow has been ~zero-to-negative
  for three straight years** once SBC (~21% of revenue) is expensed (-$39M, -$642M,
  -$73M). [DOSSIER §2.2] The flywheel is not throwing off the cash a flywheel is
  supposed to throw off.
- **Regulatory governor activating:** US FTC formal probe (2026-05-15) into whether
  Arm degrades licenses to favor its own silicon — a balancing loop that could *cap*
  the AGI-CPU loop or force structural separation. [DOSSIER §8.5]

**Independent research run for this model:** WebSearch on (a) the v8->v9->CSS royalty
ladder and attach rates, (b) RISC-V 2026 adoption / toolchain maturity / datacenter
momentum, (c) Arm ecosystem network-effect strength vs RISC-V, (d) hyperscaler
reaction to the AGI-CPU channel conflict, and (e) Q4 royalty deceleration. Sources
cited inline; trade-press magnitudes (RISC-V "25%") treated as directional only per
the dossier's own caution.

## Reasoning

Arm is **not one flywheel; it is a system of four coupled loops moving in different
directions**, and the model's whole value is in scoring the net.

1. **Royalty-ladder loop (price axis): reinforcing, still turning — but maturing.**
   Mixing chips up the v8->v9->CSS ladder is a real, durable mechanism that decouples
   revenue from units. This is Arm's best loop and it is genuinely positive. *But* a
   ladder is a finite climb: it tops out at ~100% v9/CSS attach, and the Q4 +11%
   royalty print suggests the ladder is no longer fully offsetting volume softness at
   the rate it did two quarters ago. A reinforcing loop that is decelerating is still
   reinforcing — but you do not pay a *peak* flywheel multiple for one that is
   cresting.

2. **Data-center deployment loop: reinforcing and accelerating.** This is the one
   loop unambiguously *gaining* speed (17.7% server units and rising, royalties
   doubling). It is the bull's whole case. The risk: it is increasingly powered by
   *hyperscaler in-house* CPUs — the same customers Arm now competes with — so the
   loop's fuel and Arm's biggest channel-conflict exposure are the same thing.

3. **Substitution (RISC-V) loop: balancing, and *strengthening*.** This is the
   decisive judgment. RISC-V is not a static governor; it is a *competing flywheel*
   whose turns are accelerating (toolchain maturing, CUDA-on-RISC-V, state funding,
   marquee backers, China at ~50% of shipments). Most dangerous in Arm's ~19%-of-
   revenue PRC market and in the cost-sensitive MCU/IoT base. Network effects are
   winner-take-most *until a credible second standard reaches escape velocity*, at
   which point the incumbent's loop and the challenger's loop both run and the
   incumbent's pricing power erodes at the margin. The evidence says RISC-V is in
   exactly that escape-velocity phase in its beachhead markets. **(Judgment.)**

4. **The strategic-pivot loop: management is *re-plumbing* the system unfavorably.**
   This is what tips my read negative. A clean IP flywheel (98% margin, capital-
   light, customers as allies) is the platonic Munger flywheel. Arm is voluntarily
   trading it for a merchant-silicon loop that (a) is capital-heavy and margin-
   dilutive *now*, (b) makes customers into adversaries who respond by feeding the
   RISC-V balancing loop, and (c) invites a regulatory governor. Even if the AGI-CPU
   itself succeeds, the *act of building it* weakens the network-effect flywheel that
   was the entire investment thesis. In systems terms: management is adding a
   reinforcing loop (own-silicon revenue) that is **coupled to and antagonistic with
   its strongest existing reinforcing loop** (neutral-IP network effect). That is a
   structurally worse system, not a better one — regardless of near-term revenue.

**Which dominates now, and which way is it turning?** Today the *reinforcing* loops
still dominate the reported numbers (revenue +23%, share gains, ladder mix). But the
**rate of change is deteriorating on every axis that matters**: royalty growth
decelerating, margins compressing, capital intensity rising, owner-FCF negative,
customers hedging, RISC-V accelerating, regulators activating. A feedback-loops
analyst cares about the *second derivative*, and the second derivative has turned
down. The flywheel is still spinning forward but is **cresting and beginning to face
strengthening governors**, while management's own pivot is *adding friction to its
best loop*. Paying ~231x non-GAAP / ~481x GAAP and >2.7x the 200-DMA [DOSSIER §3] is
paying a *still-accelerating-flywheel* price for a system whose dominant loop is
cresting and whose balancing loops are gaining. That is the precise mispricing this
model is built to flag.

**Check on my own bias.** The reinforcing-loop narrative is seductive and is exactly
what the +177% rally is pricing — I must guard against being captured by the same
flywheel story the crowd is. I am *not* claiming the flywheel is broken (it isn't;
the ladder and data-center loops are real and the network effect is wide). I am
making the narrower, model-specific claim that the loops are **net cresting, not
accelerating**, and that management is degrading the best one — which is enough to
make the signal negative at *this price*, without asserting a path to zero.

## Red flags

| Flag | Severity (low/med/high/fatal) | Rationale |
|---|---|---|
| Royalty growth decelerated to +11% (from +27%) while units go negative | high | The price-axis flywheel is no longer fully offsetting the dead volume axis — second derivative turned down. [DOSSIER §8.8] |
| AGI-CPU pivot makes customers into competitors | high | Predictable systems response is accelerated customer in-sourcing + RISC-V hedging — i.e., management is *feeding the balancing loop*. [DOSSIER §4.3] |
| RISC-V balancing loop is itself a strengthening flywheel | high | Toolchain maturity + CUDA-on-RISC-V + China state mandate (~50% of shipments) = a competing network effect reaching escape velocity in beachhead markets. [WebSearch; DOSSIER §4.3] |
| Economics loop running in reverse (capex 1-3%->11%, margins down, owner-FCF negative 3 yrs) | high | The classic scale->cost->price flywheel is producing *lower* margins and *higher* capital intensity — anti-flywheel. [DOSSIER §2.1-2.2] |
| FTC/EU/KFTC regulatory governor activating | medium | Could cap or force separation of the AGI-CPU loop; a balancing loop with binary outcomes. [DOSSIER §8.5] |
| Valuation prices a still-accelerating flywheel | high | ~231x non-GAAP / 2.7x 200-DMA implies the loop is early/accelerating; the loop is cresting. [DOSSIER §3] |

## What would flip this read (disconfirmers)

- **Royalty growth re-accelerates** for 2+ quarters (back toward +25-30%) on CSS/v9
  attach and data-center mix — evidence the ladder loop is *not* cresting.
- **RISC-V momentum stalls** in general-purpose servers/smartphones (toolchain or
  ISV fragmentation proves sticky; CUDA-on-RISC-V underdelivers) — the balancing loop
  weakens rather than strengthens.
- **Customers re-affirm Arm despite the AGI-CPU** (more CSS/architecture licenses
  from the same hyperscalers Arm now competes with) — evidence the channel-conflict
  friction is not feeding the balancing loop.
- **AGI-CPU economics come in high-margin and capital-efficient** (disclosed gross
  margin near IP-like levels, capex normalizing) — i.e., the new loop *adds* to the
  flywheel instead of leaking it. Currently undisclosed. [DOSSIER §9.3]
- **Operating margin and owner-FCF inflect up** as the R&D/capex build rolls off,
  showing the economics loop turning virtuous again.
- **FTC probe closes with no remedy**, removing the regulatory governor.

## Verdict

| | |
|---|---|
| **Signal** | mixed (net negative) |
| **Relevance** | 4 |
| **Strength** | 3 |
| **Conviction** | 3 |
| **Fatal flaw?** | no — feedback-loops is not a fatal-capable model; I find a cresting/decaying loop set, not a credible path to permanent capital loss or fraud |

**Bottom line:** Arm is a system of coupled loops, not a single flywheel. Two
reinforcing loops are real and one (data-center deployment) is still accelerating,
and the royalty-ladder loop genuinely decouples revenue from units — so the signal is
not simply negative. But the second derivative has turned down across the board
(royalty growth +27%->+11%, margins compressing, capex 1-3%->11%, owner-FCF negative
three years), the RISC-V *balancing* loop is itself a strengthening competing
flywheel reaching escape velocity in its beachheads, and — most tellingly — management
is voluntarily re-plumbing the system by adding a capital-heavy, channel-conflicted
merchant-silicon loop that antagonizes its best existing loop (the neutral-IP network
effect). The dominant loop is **cresting while its governors strengthen**, yet the
stock is priced for an *accelerating* flywheel (~231x non-GAAP, 2.7x the 200-DMA).
Net read: **mixed, tilting negative — the flywheel is still turning forward but you
are being asked to pay top-of-cycle flywheel economics for a system whose best loop
is maturing and whose balancing loops are gaining.**
