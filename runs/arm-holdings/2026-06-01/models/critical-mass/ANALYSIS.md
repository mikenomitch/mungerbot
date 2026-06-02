<!--
  Per-model write-up. One mental-model agent fills this in at
  models/<key>/ANALYSIS.md. Keep it tight: the model's lens, the evidence, the
  honest verdict. Cite facts; mark judgments as judgments.
-->
# Critical Mass / Tipping Points — Arm Holdings (ARM)

**Discipline:** Physics  ·  **Intensity:** standard  ·  **As-of:** 2026-06-01

## What this model predicts

Critical mass is the physics of self-sustaining reactions: below a threshold the
chain dies out; above it, the reaction propagates on its own and accelerates. In a
business, the analogue is a **self-reinforcing flywheel** — usually a two-sided
network effect, density economy, or installed base — past which each additional
unit of adoption *lowers the cost or raises the payoff* of the next unit, so growth
compounds without proportional new effort or spend. The tell is **autocatalysis**:
adoption that pulls in more adoption.

If Arm has crossed (or can cross) critical mass, we should observe:

1. **A two-sided network that feeds itself** — more hardware licensees => a larger
   software/developer base => that base makes Arm the default for the *next*
   licensee, and so on, with measurable scale on both sides.
2. **An installed base so large that switching costs are prohibitive** — incumbents
   stay not because Arm is cheapest but because porting the world's software off
   the ISA is uneconomic. Share should be durable, not just high.
3. **A new battleground crossing its own threshold** — in data center, evidence the
   reaction has gone self-sustaining (default status at hyperscalers, a royalty
   ladder that compounds ASP per chip), not merely early share gains.
4. **No rival network reaching *its* critical mass faster** — the chief disconfirmer.
   A competing standard (RISC-V) that crosses its own software/ecosystem threshold
   in Arm's core markets would cap or reverse the flywheel.

The model also predicts the *failure* mode: if Arm's strategy (selling its own
finished AGI CPU) makes licensees defect, it can **damp its own chain reaction** by
pushing the ecosystem toward a rival network — a self-inflicted move *down* the
critical-mass curve.

## Evidence

**Supporting** (cited):

- **Mobile/embedded: textbook crossed threshold.** ~99-100% of smartphone
  application processors are Arm ISA (Apple, Qualcomm, MediaTek, Samsung, Google
  all pay Arm); automotive ~94% of automakers; Cortex-M the embedded incumbent.
  [DOSSIER §4.1; Arm FY2025 20-F + consensus]
- **Both sides of the network are at enormous scale.** >325B cumulative Arm-based
  chips shipped since 1990 and >20M developers in the ecosystem (Arm now claims
  **22M+ developers and 350B+ chips**). [DOSSIER §1; Arm Newsroom / Finviz
  2026, "ARM's Self-Reinforcing Ecosystem Strengthens Its Industry Dominance",
  finviz.com/news/325612]
- **The network effect is explicitly two-sided and self-reinforcing.** Hardware
  makers license Arm because a vast software library already runs on it; developers
  write for Arm because it is the largest installed base — "growing developer
  support attracts more hardware partners and expanding hardware adoption draws in
  even more developers." [Finviz 2026, finviz.com/news/325612; Bitget Academy 2026]
- **Data center: the reaction appears to be going self-sustaining now.** Arm says
  **~50% of compute shipped to top hyperscalers in 2025 is Arm-based** ("on track"
  after three quarters), and **AWS Graviton has been >half of all *new* CPU
  capacity at AWS for three straight years**, with **98% of the top-1,000 EC2
  customers using it in production**. [DOSSIER §4.1; Arm Newsroom
  "arm-converged-ai-data-center-aws-graviton5"; Tom's Hardware 2026]
- **Mercury Research: Arm = 17.7% of *total* server-CPU units in Q1'26, up from
  11.5% YoY** — Intel total server unit share fell 72.8%->66.8%. The share curve is
  inflecting upward at the expense of the incumbent. [DOSSIER §4.1]
- **The royalty ladder is an ASP flywheel layered on top of the unit flywheel.**
  Armv8 ~2.5-3% -> Armv9 ~5% -> CSS >10% of chip ASP; CSS is ~20% of royalties and
  growing; hyperscalers designing higher core counts and ASPs on Neoverse CSS.
  [DOSSIER §4.2; Arm 6-K FYE26]
- **CSS deepens lock-in.** Compute Subsystems "command higher royalty rates per
  chip and lock customers deeper into the Arm ecosystem, further strengthening
  switching costs beyond just the architectural layer." [Bitget Academy 2026]
- **The supposed CPU-TAM-shrink threat is, near-term, inverted.** Agentic AI is
  *tightening* the CPU:GPU ratio (from ~1:4-8 toward ~1:1), and AMD raised its
  server-CPU TAM growth estimate to **>35%/yr, >$120B by 2030** (from 18%) — i.e.
  the base Arm taxes is widening, not narrowing, in the inference era. [Tom's
  Hardware 2026 "CPU requirements for AI workloads are multiplying"; Futuriom 2026]

**Disconfirming** (cited):

- **A rival network is racing toward its own critical mass.** RISC-V is the
  royalty-free open ISA backed by Qualcomm, Google, Meta, Nvidia (40+ RISC-V cores
  inside Blackwell/Rubin GPUs), Bosch/Infineon/NXP, Alibaba/Ventana, and Chinese
  silicon-sovereignty. It is **winning MCU/IoT and increasingly auto-MCUs**, and
  most dangerous in Arm's ~19%-of-revenue PRC market. [DOSSIER §4.3]
- **The RISC-V "software gap" is claimed closed.** Trade press asserts EDA flows
  (Synopsys/Cadence/Siemens) now match Arm parity for verification and ISO 26262
  safety collateral — the precondition for a rival ecosystem to ignite. [Stromasys
  2026; Mordor Intelligence 2026] — *treat as direction-positive, magnitude-soft
  (advocacy-tinged).*
- **A widely-cited "RISC-V hit 25% market share" claim circulates (Jan 2026).**
  *Judgment:* low credibility — it traces to a single syndicated wire
  (TokenRing via financialcontent.com) with an undefined denominator (almost
  certainly counting tiny embedded controllers, not the CPU sockets Arm monetizes);
  the dossier independently flags the "~25%" figure as advocacy-sourced with an
  ambiguous denominator. [DOSSIER §9 gap #9; financialcontent.com 2026-01-02]
- **Self-inflicted damping risk: channel conflict.** Arm launched its own finished
  **AGI CPU (Mar-2026)**, making it a *direct competitor to its royalty-paying
  customers* — inviting Nvidia/AWS/Google/MS to accelerate in-house and RISC-V
  designs and a fresh **US FTC antitrust probe (2026-05-15)**. This is precisely
  the move that can push the ecosystem toward a rival network. [DOSSIER §1, §4.3, §8]
- **Arm *lost* the Qualcomm/Nuvia license fight**, proving a top customer can resist
  Arm tightening terms — a cap on how hard Arm can squeeze its installed base.
  [DOSSIER §8]
- **Buyers are diversifying *because* they're locked in.** The deepest, most
  capable customers (the hyperscalers) are the ones building custom silicon and
  hedging with RISC-V — the same density that is the moat also concentrates the
  incentive and the means to attack it. [DOSSIER §4.3, §4.4]

*Independent research run for this model (cited inline above):* Arm Newsroom
Graviton5/converged-AI posts; Tom's Hardware (Graviton, CPU-TAM, Nvidia stake);
Futuriom and AMD CPU-TAM commentary; Finviz/Bitget ecosystem write-ups; Stromasys
and Mordor Intelligence on RISC-V; the contested financialcontent.com "25%" item.

## Reasoning

**This model is highly relevant to Arm — arguably one of the cleanest critical-mass
cases in technology.** An instruction-set architecture is *the* canonical two-sided
standards network: its value is the software written for it, and software is written
for it because of its installed base. Arm in mobile/embedded is unambiguously
**past critical mass**: 99% share, 350B chips, 22M developers, and switching costs
that are "prohibitively expensive and technically daunting" because the world's
software is compiled for the ISA. The chain reaction here is self-sustaining and has
been for over a decade; this is not in dispute and is the bedrock of the franchise.

**The live, decision-relevant question is whether the *data-center* reaction has
crossed its threshold — and the evidence says it is crossing it right now.** When
~50% of new hyperscaler compute is Arm-based, Graviton is a majority of AWS's new
CPU capacity three years running, and 98% of AWS's largest customers run on it in
production, the data-center chain reaction is no longer "early" — it is approaching
self-sustaining default status, with the royalty ladder (v9->CSS) compounding ASP on
top of unit growth. *Judgment:* this is the most important *new* positive in the
whole Arm story from a critical-mass lens, and it is genuinely autocatalytic — each
hyperscaler's Arm investment makes Arm the lower-risk default for the next workload
and the next licensee. The agentic-AI inversion (CPU:GPU ratios tightening, server-
CPU TAM growth re-rated *up* to >35%/yr) means the substrate the reaction propagates
through is *expanding*, which is the opposite of the "accelerators eat the CPU"
disconfirmer the model would worry about.

**But critical mass cuts both ways, and two damping forces keep this read from being
a clean positive.** First, **RISC-V is a rival network attempting to reach its own
critical mass**, and the model is explicit that the chief disconfirmer is a
competing standard igniting. The honest read: RISC-V has *crossed* threshold in
MCU/IoT (a low-royalty tier Arm barely monetizes) and is *approaching* it in
auto-MCU and Chinese sovereign silicon, but has **not** crossed in smartphones or
general-purpose/AI servers — the tiers that actually carry Arm's economics. The
"25%" headline is, in my judgment, a denominator illusion. So RISC-V is a real
secular headwind and a genuine left-tail (especially the ~19% PRC revenue), not a
present-tense displacement of Arm's core flywheel. Second — and more in Arm's own
control — the **AGI-CPU pivot is a self-inflicted damping risk**: by competing with
its licensees, Arm raises their incentive to defect to in-house and RISC-V designs.
A standards network's worst enemy is alienating the participants who *are* the
network. The FTC probe and the lost Qualcomm fight show the constraint is already
biting.

Where the model is a **stretch**: critical mass speaks to the *durability and
self-reinforcement of the franchise*, not to *price*. It tells us the reaction is
self-sustaining; it says nothing about paying ~231x non-GAAP / ~88x EV/sales for it
(DOSSIER §3). A self-sustaining flywheel can be a magnificent business and a terrible
investment at the wrong entry multiple. This lens should be read as **"is the moat a
real chain reaction?" (largely yes) — not "is it cheap?" (emphatically not, per
valuation)**. I keep this verdict to the franchise question and leave price to the
valuation/decision layer.

*Check on our own bias (the model applied to us):* the seductive error here is to
let the genuinely impressive flywheel narrative (and a stock that doubled in two
weeks on an ecosystem story) launder into a valuation justification. Crossing
critical mass is necessary, not sufficient. I am deliberately scoring **signal
positive but strength moderate**, because the *new* (data-center) reaction is still
early-of-self-sustaining and faces credible rival-network and self-inflicted damping.

## Red flags

| Flag | Severity (low/med/high/fatal) | Rationale |
|---|---|---|
| RISC-V approaching critical mass in adjacent/edge tiers (MCU, auto-MCU, China sovereign) | med | A rival standard igniting is the model's defining disconfirmer; real in low-royalty tiers and the ~19% PRC market, not yet in Arm's economic core. [DOSSIER §4.3] |
| Self-inflicted damping: AGI-CPU channel conflict pushes licensees off the network | med | Competing with the participants who *are* the two-sided network is the textbook way to slow your own chain reaction; FTC probe + lost Qualcomm fight already constrain the squeeze. [DOSSIER §1, §8] |
| Data-center reaction is *crossing*, not long-since-crossed | low | Self-sustaining default status is recent (3-yr Graviton trend); reversible if a hyperscaler re-standardizes or RISC-V matures faster than expected. [Arm Newsroom 2026] |
| "25% RISC-V share" headline could mislead the synthesis layer | low | Denominator illusion (embedded controllers, not CPU sockets); flag so it isn't over-weighted. [DOSSIER §9 #9] |
| Model is silent on price | n/a (out of lens) | Critical mass validates the franchise, not the ~231x multiple; defer to valuation. [DOSSIER §3] |

## What would flip this read (disconfirmers)

- **A credible, primary-sourced RISC-V crossing in a *core* Arm tier** — e.g. a top-5
  smartphone SoC or a major hyperscaler general-purpose server line ported to RISC-V
  in volume. That would be a rival network reaching critical mass in the tiers that
  carry Arm's economics, flipping signal toward negative.
- **A hyperscaler reversing course** — a public decision to *reduce* Arm/Neoverse
  share or re-standardize on x86/RISC-V for new compute would show the data-center
  reaction was not yet self-sustaining.
- **Stalling of the ~50%-hyperscaler-compute / Graviton-share trend** — if the
  next two prints show Arm's share of *new* hyperscaler CPU capacity plateauing or
  rolling over, the data-center flywheel is not autocatalytic after all.
- **Licensee defection traced to the AGI-CPU conflict** — a named customer cutting
  Arm content because Arm now competes with it would confirm self-inflicted damping.
- **AI accelerators actually shrinking the CPU base** — if the agentic-era CPU:GPU
  tightening reverses and CPU sockets per rack fall, the substrate the reaction
  needs would be contracting (current evidence points the other way).

## Verdict

| | |
|---|---|
| **Signal** | positive |
| **Relevance** | 5 |
| **Strength** | 3 |
| **Conviction** | 3 |
| **Fatal flaw?** | no — this model is not fatal-capable; no path to permanent capital loss is identified through this lens (that risk lives in valuation/governance) |

**Bottom line:** Arm is a near-textbook critical-mass case — long past the
self-sustaining threshold in mobile/embedded (99% share, 22M developers, 350B chips,
prohibitive switching costs) and, more interestingly, **crossing its threshold in
data center right now** (~50% of new hyperscaler compute, Graviton a 3-year majority
of AWS's new CPU capacity, a v9->CSS royalty ladder that compounds ASP), with the
agentic-AI CPU-TAM expansion widening the substrate rather than shrinking it. The
flywheel is real and autocatalytic. The two checks that keep this from being a strong
positive: a rival network (RISC-V) racing toward its *own* critical mass in
edge/China tiers, and Arm's self-inflicted damping risk from competing with its own
licensees via the AGI CPU. The model validates the *durability of the franchise*; it
explicitly does **not** validate the ~231x multiple — that judgment belongs to the
valuation and decision layers.
