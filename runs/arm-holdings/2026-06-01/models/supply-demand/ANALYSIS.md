<!--
  Per-model write-up. Supply & Demand (Economics). Apply the lens, weigh the
  evidence, give an honest verdict. Cite facts; mark judgments as judgments.
-->
# Supply & Demand — Arm Holdings (ARM)

**Discipline:** Economics  ·  **Intensity:** standard  ·  **As-of:** 2026-06-01

## What this model predicts

Supply & demand is a price-discovery lens. It asks: for the **product** (Arm's
licensed IP and the chips that embed it) and for the **industry's capacity** (fabs,
memory, packaging, and the installed base of compute), where are the two curves
heading, and what does the gap do to volumes, prices, and — through the cobweb
mechanism — to the *next* cycle?

For Arm specifically, the model decomposes into three distinct supply/demand
systems, because Arm sits at a *junction*:

1. **Arm's IP "product."** Arm sells two things: licenses (a one-time price) and
   royalties (a per-chip price × units). The model predicts Arm's revenue is the
   product of (a) **end-device unit demand** it cannot control, times (b) a
   **royalty rate** whose pricing power is bounded by the availability of a
   substitute (RISC-V) and the bargaining power of concentrated buyers.
2. **The end-markets whose units Arm taxes.** Chiefly smartphones (~99% Arm,
   Arm's largest and historically most *stable* royalty pool) and, increasingly,
   data-center CPUs. The model predicts Arm's royalty stream inherits the
   **inventory cycle and unit cycle** of these markets, lagged (royalties are paid
   on shipment, much of it on prior-gen designs).
3. **The industry's capacity** — fabs (TSMC 3nm/2nm), HBM/DRAM, advanced packaging
   (CoWoS). The model predicts that where capacity is short, *volumes are capped
   and prices rise*; where capacity floods (the cobweb overshoot), a glut and a
   correction follow. This matters doubly now because Arm has chosen to **become a
   chip supplier itself** (the AGI CPU), so it is suddenly *long* physical capacity
   it must procure.

Testable expectations if the model applies **favorably** (supply/demand tailwinds
for Arm): rising unit demand in Arm's core markets; a royalty rate Arm can keep
lifting (no effective substitute pricing it down); and either ample capacity (so
Arm's own silicon ships freely) or a shortage that Arm is on the *winning* side of.

Testable expectations if the model applies **unfavorably**: a unit demand shock in
the core royalty pool; buyers/substitutes capping the royalty rate; and a capacity
regime that either *starves* Arm's new chip business or sets up a **cobweb
correction** in the AI capex cycle that Arm's royalties (and especially its new
silicon) ride down.

## Evidence

**Supporting (tailwind side, cited):**

- **Data-center CPU demand is structurally inflecting up.** The CPU:GPU ratio in
  AI servers is moving from ~1:8 toward 1:4 and, with agentic/inference workloads,
  potentially 1:1 — i.e. *more* CPU demand per GPU, not less. Server-CPU prices are
  already up ~20% since March 2026, and Intel is reallocating fab capacity from
  consumer to Xeon to meet demand "it can't currently fulfill." [Tom's Hardware,
  2026; SemiAnalysis "CPUs are Back," 2026; TrendForce RP260408AD]. This rebuts the
  dossier's standalone "AI migrates from CPU to accelerators shrinks CPU TAM" worry
  (§4.4) — at least for 2026, the CPU TAM is *expanding*, and Arm is the share-gainer
  (server-unit share 11.5%->17.7% YoY; Neoverse >1B cores deployed). [DOSSIER §4.1]
- **Arm's per-chip *price* (royalty content) is rising independent of units** — the
  royalty ladder: Armv8 ~2.5–3% -> Armv9 ~5% -> CSS ~10%+ of chip ASP. [DOSSIER §4.2].
  This is the model's "the firm raised price into a demand shift" pattern and is the
  one lever that lets royalty revenue grow on *flat or falling* unit volumes.
- **Smartphone ASP and content per device are rising** ($430 global ASP; iPhone ASP
  hit $1,000 in Q4 2025 on premium mix). [Counterpoint/SAG, 2026; SQ Magazine, 2026].
  Richer phones carry richer (v9/CSS) Arm cores — a mix tailwind that partially
  offsets unit weakness.
- **The TSMC capacity *shortage* is, for the incumbents who hold allocation, a
  moat, not a threat.** N3/N2 booked through 2027–28; demand ~3x supply; TSMC
  raising advanced-node prices four years running. [BigGo/Dataconomy, 2026; TrendForce
  2026-04-27; wccftech, 2026]. There is **no capacity glut** at the leading edge today
  — the opposite. That keeps Arm's *customers'* products scarce and priced up.

**Disconfirming (headwind side, cited):**

- **Arm's largest and most stable royalty pool — smartphones — is in the sharpest
  unit decline on record in 2026.** IDC: **−13.9% to ~1.09B units** (revised *down*
  from −12.9%); Counterpoint: **−12%, lowest volumes since 2013**; Q1 2026 already
  −6% YoY. The cause is the **memory shortage** diverting DRAM/HBM to AI data centers,
  starving phone makers of affordable memory. [IDC 2026; Counterpoint 2026; CNBC
  2026-02-27]. This is a textbook **negative demand shock to ~99%-Arm units**, and the
  dossier already shows the first symptom: **Q4 FY2026 royalty growth decelerated to
  +11%** from +27%, with management warning of **negative smartphone unit growth**.
  [DOSSIER §7, §8.8].
- **The memory supercycle that is crushing phone units is "not just cyclical… a
  potentially permanent strategic reallocation of the world's silicon wafer capacity"**
  — data centers now consume ~70% of memory output; relief not expected until
  2028–29. DRAM up ~80–90% in Q1 2026 alone. [IEEE Spectrum 2026; storageswiss
  2026-05-06; TrendForce]. So the headwind on Arm's biggest unit pool is **multi-year,
  not a one-quarter air-pocket**.
- **Replacement cycles are *lengthening* (now ~3.5 yrs globally, 4 yrs in India)** as
  device prices climb. [RefurbMe 2026; Computer Weekly 2026; Mix Vale 2026-04-26]. A
  longer replacement cycle is a *structural* reduction in the unit-demand growth rate
  of Arm's core toll-road — the cobweb's "demand destruction at higher prices."
- **Arm's own new chip business is supply-capped by the very shortage above.** AGI-CPU
  demand >$2B (FY27–28) but capacity (TSMC 3nm wafers / memory / packaging) secured
  for only ~$1B. [DOSSIER §1, §8.7]. Arm just entered a business where it is *short
  capacity it cannot get* — the stock fell ~7% on record Q4 results precisely because
  management couldn't secure foundry allocation. [DOSSIER §7]. Being a new, small
  buyer of the scarcest wafers in the world (behind Apple/Nvidia/AMD/Broadcom in the
  TSMC queue) is the **wrong side** of the shortage.
- **The royalty *rate* has a hard ceiling that buyers have now demonstrated.** Arm
  **lost** the Qualcomm/Nuvia fight (Sept-2025 JMOL for Qualcomm; on appeal), proving a
  top customer can resist Arm tightening license terms — i.e. Arm's pricing power over
  its IP "product" is **capped by buyer power**, and RISC-V (royalty-free open ISA) is
  the substitute that, on any multi-year horizon, bounds how high the royalty rate can
  go. [DOSSIER §4.3, §8.4]. In supply/demand terms: the *supply of an adequate
  substitute is rising*, which flattens Arm's pricing curve.
- **The macro setup is a classic late-cycle cobweb.** Hyperscaler capex ~$660–690B
  for 2026 (~$450B AI-specific), up ~36–77% YoY and increasingly **debt-funded**
  (~$108B raised 2025); DRAM spiking; two straight ~25% semi-growth years to a ~$1T
  run-rate. [DOSSIER §5]. The cobweb mechanism predicts that capacity ordered at the
  top (the $52–56B TSMC capex, the memory fabs being built) *arrives with a lag* and,
  if AI demand normalizes, produces the **2027 correction** some consensus wafer paths
  already embed (illustrative −6%). Arm's royalties lag and are buffered, but its **new
  merchant-silicon revenue and 11%-of-revenue capex are NOT buffered** — they ride the
  capex cycle directly.

**Independent research run for this model (sources above):** smartphone 2026 unit
forecasts (IDC/Counterpoint), the DRAM/HBM memory-supercycle mechanism and duration
(IEEE Spectrum, storageswiss, TrendForce, CNBC), TSMC 3nm/2nm allocation status
(BigGo, Dataconomy, TrendForce, wccftech), the CPU:GPU ratio shift (Tom's Hardware,
SemiAnalysis, TrendForce, AMD), and replacement-cycle/ASP data (RefurbMe, Computer
Weekly, Counterpoint/SAG).

## Reasoning

This model is **moderately-to-highly relevant** to Arm, and what it surfaces is a
genuine **two-sided tension** that the consensus narrative ("Arm = AI data-center
winner") papers over.

**The bear read the model produces.** Arm's revenue is unit-demand × royalty-rate.
The model says: the *single largest, most stable leg* of the unit base (smartphones,
~99% Arm) is taking its worst demand shock on record in 2026, and the cause (the
memory reallocation to AI) is structural and multi-year, not a blip — with the first
proof already in the tape (royalty growth +27%->+11%, management guiding phone units
negative). Meanwhile the *price* leg (the royalty rate) has a demonstrated ceiling:
buyers can litigate it (Qualcomm won) and substitute it (RISC-V supply rising). So
the two levers the bull case needs — units and rate — are each constrained on the
core franchise. The growth must therefore come almost entirely from **data center**,
which is real and inflecting up, but is *also* where Arm has voluntarily moved to the
**wrong side of a capacity shortage** (its own AGI CPU is supply-capped at ~half its
demand), and which sits atop a **debt-funded, late-cycle capex wave** whose cobweb
correction (2027±) Arm's new silicon and capex would ride down with no royalty-lag
buffer.

**The bull rebuttal the model must concede.** Two things genuinely cut Arm's way.
First, the royalty *ladder* lets Arm grow revenue-per-chip even as units fall — this
is the legitimate reason royalties haven't collapsed with the −12% unit print, and it
is a real form of pricing power *within* the installed base (high switching costs),
distinct from raising the headline rate. Second, the CPU:GPU ratio shift (1:8 ->
toward 1:1) is a real, large, *new* source of CPU-unit demand that did not exist two
years ago, and Arm is the structural share-gainer in it. The dossier's own
"accelerators shrink CPU TAM" worry is, for now, **wrong-signed** — 2026 is a CPU
*renaissance*, not a CPU famine. The model has to hold both: a deteriorating core unit
pool **and** a strongly inflecting new one.

**Where the model nets out.** The supply/demand lens is *not* primarily a valuation
tool, and I will not double-count the dossier's −68% margin-of-safety finding. But on
the model's *own* terms — fundamentals of volume and price — the picture is **mixed,
tilting negative on the part that is large and known, positive on the part that is
new and unproven-at-scale.** The decisive supply/demand fact is the timing mismatch:
the *negative* (smartphone unit collapse, multi-year memory reallocation) is **here
now and already in the numbers**; the *positive* (data-center CPU demand, AGI-CPU
ramp) is **partly a forward** (first AGI-CPU revenue Q4 FY2027; the +82% related-party
growth that actually carried FY26 is a *governance* phenomenon, not an organic
supply/demand one — DOSSIER §8.2). A supply/demand analyst underwrites the curve that
exists, discounts the curve that is promised, and watches the cobweb. On that
discipline, the **near-term unit cycle is a headwind**, the **rate ceiling is real**,
and the **late-cycle capex cobweb is the dominant medium-term risk** — outweighing the
genuine secular CPU-demand tailwind for the purpose of a *new buyer at the top of the
cycle.*

**A note on our own bias (the model applied to the market's pricing).** The same lens
turned on the *stock's* supply/demand is damning: the price doubled in two weeks on a
**partner's** (Nvidia) product launch and a momentum melt-up (IV percentile = 100,
beta 3.78, price 2.7x its 200-DMA), while short interest is a trivial ~1.8% of float —
i.e. the price move was **demand for the shares outrunning any change in the supply/
demand of Arm's actual products** (management declined to raise guidance the same
month). [DOSSIER §3, §7]. That is the equity-market analogue of a demand bubble, and
it is the cobweb risk transposed onto the security itself.

## Red flags

| Flag | Severity (low/med/high/fatal) | Rationale |
|---|---|---|
| Smartphone units in record −12–14% decline in 2026, the cause structural/multi-year (memory reallocation to AI) | **high** | Hits Arm's largest, most stable ~99%-Arm royalty pool; first symptom already visible (royalty growth +27%->+11%, phone units guided negative). [IDC/Counterpoint 2026; DOSSIER §7,§8.8] |
| Late-cycle, debt-funded AI capex cobweb; some consensus paths embed a 2027 correction | **high** | Arm's *new* merchant silicon + 11%-of-rev capex ride the capex cycle directly with no royalty-lag buffer; a glut/correction would hit the very growth leg the valuation needs. [DOSSIER §5] |
| AGI-CPU supply-capped at ~$1B vs >$2B demand; Arm now a junior buyer of the scarcest wafers (TSMC 3nm) | **med** | Arm voluntarily moved to the *wrong* side of the shortage; stock fell ~7% on record Q4 over exactly this. [DOSSIER §1,§8.7] |
| Royalty-rate pricing power capped by buyer power (Qualcomm won) + rising substitute supply (RISC-V) | **med** | Bounds the "raise the rate" half of the revenue equation; most acute in the ~19% PRC market. [DOSSIER §4.3,§8.4] |
| Replacement cycles lengthening to ~3.5–4 yrs | **low** | Structural drag on long-run unit-demand growth rate of the core toll-road. [RefurbMe/Computer Weekly 2026] |
| Share price = demand-for-shares bubble, decoupled from product supply/demand | **med** | Cobweb transposed onto the security; entry multiple likely transient (2.7x 200-DMA, IV pctl 100). [DOSSIER §3,§7] |

## What would flip this read (disconfirmers)

- **Smartphone units stabilize / the memory shortage eases faster than 2028–29**, so
  Arm's core royalty pool re-accelerates (royalty growth re-firms above ~+20%). That
  would remove the largest near-term demand headwind.
- **AGI-CPU secures materially more TSMC/packaging capacity** (demand-to-shipment gap
  closes toward the >$2B figure), flipping Arm from the wrong side to a winning side of
  the shortage with real, on-the-books merchant revenue.
- **Data-center CPU demand proves big enough to swamp the smartphone drag organically**
  — i.e. *external* (non-related-party) revenue re-accelerates well above +7% on
  Neoverse/CSS, not on the SoftBank/Arm-China related-party bucket.
- **No 2027 capex correction** — AI demand keeps absorbing the capacity now being
  built, so the cobweb overshoot does not materialize and Arm's new silicon ramps into
  sustained, not glutted, demand.
- **The royalty ladder (v9/CSS attach) outruns unit declines durably**, proving Arm can
  grow revenue-per-chip fast enough that falling units stop mattering — pushing the
  signal from mixed toward positive on the product-pricing leg.

## Verdict

| | |
|---|---|
| **Signal** | mixed (tilting negative near-term) |
| **Relevance** | 4 |
| **Strength** | 3 |
| **Conviction** | 3 |
| **Fatal flaw?** | no — this model is not fatal-capable, and while it finds real headwinds it does not by itself establish a path to permanent capital loss or fraud |

**Bottom line:** Through a supply/demand lens, Arm is caught in a timing mismatch: the
*large, known* leg of its demand — smartphone units, ~99% Arm — is in its sharpest
decline on record (−12–14% in 2026) driven by a structural, multi-year memory
reallocation, and the first symptom (royalty growth +27%->+11%) is already in the
numbers; meanwhile the royalty *rate* is bounded by demonstrated buyer power and rising
RISC-V substitute supply. The *new* leg — data-center CPU demand inflecting up as the
CPU:GPU ratio rises — is genuine and favorable, but it is partly a forward, and Arm has
voluntarily moved to the **wrong side** of the leading-edge capacity shortage (its AGI
CPU is supply-capped at ~half its demand) atop a late-cycle, debt-funded capex wave
whose cobweb correction is the dominant medium-term risk. Net: a real secular tailwind,
overshadowed for a *buyer at the top of the cycle* by a near-term unit-demand shock, a
capped pricing lever, and an unaddressed cobweb — a mixed read that does not support
buying into a doubled, melt-up price.
