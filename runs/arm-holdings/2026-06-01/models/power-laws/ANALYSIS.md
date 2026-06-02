<!--
  Per-model write-up: Power-Law Distributions lens applied to Arm Holdings.
-->
# Power-Law Distributions — Arm Holdings (ARM)

**Discipline:** Mathematics  ·  **Intensity:** standard  ·  **As-of:** 2026-06-01

## What this model predicts

Power-law (winner-take-most) distributions appear where small advantages compound:
network effects, increasing returns to scale, standards with switching costs. In
such markets, outcomes are **not** Gaussian — the head captures a hugely
disproportionate share of value, and the long tail earns almost nothing. The
canonical Munger error is **Gaussian thinking where power laws rule**: assuming
"average" outcomes, linear share gains, or that ubiquity equals value.

This lens demands I answer **three** distinct questions, because there are **two
overlapping power laws** here and conflating them is the central analytical trap:

1. **Is the *architecture/ISA* market power-law distributed, and is Arm the head?**
   Prediction if favorable: a handful of ISAs dominate each compute domain; the
   leader holds a near-monopoly defended by software lock-in; share is sticky and
   self-reinforcing. Observable: Arm owns ~all of its strong segments; rivals
   cannot dislodge it despite trying for years.

2. **Is the *AI-compute profit pool* power-law distributed, and where does Arm sit
   on it?** Prediction: the dollars created by the AI buildout concentrate in one
   or two layers of the value chain; everyone else — even ubiquitous players —
   earns a thin slice. Observable: who books the gross-margin dollars, and does
   Arm sit at the head of *that* distribution or in its tail?

3. **Does winning power-law #1 imply winning power-law #2?** The model's sharpest
   warning: **being the head of the architecture distribution does not mean
   capturing the head of the value distribution.** A toll booth on the long tail
   of low-value chips, while a different firm owns the head of the profit pool, is
   the "ubiquitous-but-thin" trap.

For the investment to be a power-law *winner at this price*, I must see Arm as the
head of a distribution whose **per-unit value capture** is high and rising — not
merely high *unit count*. The default-no discipline says ubiquity alone is not
enough.

## Evidence

**Supporting — Arm is the head of the architecture/ISA power law (strong):**
- Arm holds **~41% of the total semiconductor-IP market** — "a concentration
  without precedent in any other segment of the semiconductor supply chain"
  ([SemiconductorX / scoop.market.us, Semiconductor IP Statistics 2026](https://scoop.market.us/semiconductor-ip-statistics/)).
- Smartphone application processors **~99–100% Arm ISA**; automotive **~94% of
  automakers**; embedded/IoT (Cortex-M) incumbent (DOSSIER §4.1). This is the
  signature of a winner-take-most outcome, not a fragmented market.
- The **mechanism** is textbook power-law: software compatibility creates lock-in,
  ">20M developers" and ">325B cumulative chips" create a network effect, and
  re-port switching costs are high (DOSSIER §1, §4). ISA markets have historically
  **consolidated to one or two winners per domain** (x86 desktop/server, Arm
  mobile, Power for big iron) precisely because "with thousands of applications
  running on a particular processor architecture, it is difficult to design a new
  architecture and expect every software vendor to port"
  ([Hackaday, ISA Wars 2025](https://hackaday.com/2025/03/18/checking-in-on-the-isa-wars-and-its-impact-on-cpu-architectures/)).
- The **royalty ladder** (v8 ~2.5–3% → v9 ~5% → CSS >10% of ASP; DOSSIER §4.2)
  shows Arm extracting *rising* value per chip within its head position — the
  right direction for a power-law winner.
- Data-center share is climbing the curve: **Arm = 17.7% of total server-CPU units
  Q1'26, up from 11.5% YoY** (Mercury Research, DOSSIER §4.1); Arm publicly expects
  ~50% of cloud CPU *sales* in 2026
  ([SemiWiki](https://semiwiki.com/forum/threads/exclusive-arm-expects-its-share-of-data-center-cpu-market-sales-to-rocket-to-50-this-year.22441/)).
  Increasing returns appear intact in the one battleground that is still contested.

**Disconfirming — the AI *value* power law has its head elsewhere, and Arm sits in
its tail (strong, and the decisive evidence):**
- The AI profit pool is itself sharply power-law distributed and the **head is
  Nvidia (accelerators), not the CPU layer.** Nvidia data-center revenue hit a
  record **$62.3B in a single quarter** (Q4 FY26, +75% YoY) at ~75% gross margin,
  with ~75–80% AI-GPU share
  ([Silicon Analysts, AMD vs Nvidia 2026](https://siliconanalysts.com/analysis/amd-vs-nvidia-ai-gpu-market-share-2026);
  [Nvidia Q4 FY26 8-K](https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000019/q4fy26pr.htm)).
  Arm's **entire FY2026 royalty revenue was $2.61B for the whole year** (DOSSIER
  §2.1) — i.e., Arm's annual royalty take is **~4% of one Nvidia data-center
  quarter.** That ratio *is* the power law, and Arm is not at its head.
- Arm's per-unit capture is structurally thin: historically a **1–2% royalty,
  "pennies per unit"**
  ([Bradford Stanley CFA, "From Royalties to Racks"](https://bradfordstanleycfa.substack.com/p/from-royalties-to-racks));
  Arm's own filings note royalty per chip **decreases as volume rises** subject to
  a floor ([Arm 6-K FY2026](https://www.sec.gov/Archives/edgar/data/0001973239/000197323926000062/exhibit992fye26q431-marx26.htm)).
  Ubiquity is real; value capture per unit is not commensurate.
- **AI workloads migrating from CPU to accelerators (TPU/Trainium/MTIA/GPU) could
  shrink the very CPU TAM Arm taxes** (DOSSIER §4.4, structural 20-F risk). The
  head of the distribution is actively pulling value *away* from Arm's layer.
- **Management itself concedes the position.** Arm "concluded that collecting
  royalties on other people's silicon captures too little of the value being
  created," prompting the AGI-CPU pivot
  ([Bradford Stanley CFA](https://bradfordstanleycfa.substack.com/p/from-royalties-to-racks)).
  Building finished silicon (DOSSIER §1) is a direct admission that the toll booth
  does **not** sit at the head of the value power law — Arm is reaching up the
  chain to get there, abandoning the 98%-gross-margin model for 40–50%-margin
  merchant silicon (DOSSIER §8.6) and inviting channel conflict + an FTC probe
  (DOSSIER §8.5).

**Disconfirming — the architecture moat is softening at the head (medium):**
- RISC-V is the open, royalty-free substitute that attacks the *foundation* of the
  ISA power law — if a free standard reaches ecosystem critical mass, the
  network-effect head can erode. Winning in MCU/IoT and auto-MCUs; backed by
  Qualcomm/Google/Meta/Nvidia; most dangerous in Arm's ~19%-revenue China market
  (DOSSIER §4.3). Not yet displacing Arm in phones or general servers — but
  power-law positions, once cracked, can flip non-linearly.
- Arm **lost the Qualcomm/Nuvia license fight** (DOSSIER §8.4), demonstrating a top
  customer can resist Arm tightening terms — a cap on how much of the head Arm can
  monetize.

**Independent research run for this model (cited inline above):** semiconductor-IP
concentration data (scoop.market.us), data-center CPU share trajectory (SemiWiki /
SemiAnalysis), ISA-consolidation mechanism (Hackaday), AI profit-pool concentration
(Silicon Analysts, Nvidia 8-K), and Arm royalty-economics commentary (Bradford
Stanley CFA, Beth Kindig). The agentic-AI counter-thesis — that agentic inference
is CPU-bound and could lift CPU core demand ~4x (30M→120M cores/GW)
([Beth Kindig, Apr 2026](https://beth-kindig.medium.com/arm-stock-could-win-as-agentic-ai-shifts-the-bottleneck-to-cpus-a2b6c8d902f6)) —
is noted under disconfirmers as the main bull path that would move Arm toward the
head of the value curve.

## Reasoning

**Where the model is highly relevant:** Compute architecture is one of the cleanest
power-law markets in technology. The lens fits, and on **power law #1 (the ISA
distribution), Arm is unambiguously the head.** A run that ignored this would be
committing the opposite Gaussian error — pretending Arm is "one of several CPU
vendors" when it is the standard. Credit where due: Arm's ~99–100% mobile share,
~41% of all semiconductor IP, and a *rising* royalty ladder are exactly what a
power-law winner looks like, and the data-center curve is bending Arm's way.

**Where the model bites against the investment:** The decisive question is #3, and
here Gaussian thinking is the trap the *bulls* are falling into. The market is
pricing Arm (231x non-GAAP / 481x GAAP TTM EPS, EV ~$434B; DOSSIER §3) as if owning
the architecture standard means owning the head of the **AI-value** power law. It
does not. Two distributions are being conflated:

- **Unit power law:** Arm sits at the head — most chips run Arm. (True.)
- **Value/profit power law:** the head is Nvidia and the accelerator layer; Arm's
  CPU-IP layer is a *thin tax on a high unit count* — closer to the **body/tail of
  the value distribution.** (Also true, and the one that determines returns.)

The mathematics is unforgiving. Arm's whole-year royalty revenue (~$2.6B) is a
rounding error against the head of the pool it is supposedly central to ($62B Nvidia
DC revenue per quarter). The royalty per chip *falls* with volume by contract. And
the AGI-CPU pivot is the clearest possible signal — **revealed preference by
management** — that the toll-booth position captures "too little of the value."
Power-law logic says a firm reaching up the value chain into a lower-margin,
capital-heavy, channel-conflicted, antitrust-exposed business is doing so precisely
because its current perch is *not* the head of the value distribution. That pivot
trades the thing that made Arm a power-law winner (capital-light neutrality at ~98%
GM) for a fight to enter a distribution Nvidia already dominates.

**The price makes the relevance asymmetric.** If Arm traded at a multiple consistent
with being a dominant-but-thin toll booth, the architecture power law would be a
clean positive. At ~231x, the valuation *requires* Arm to migrate to the head of the
value power law (the bull's agentic-CPU / AGI-silicon story) — an outcome the
distribution's incumbent (Nvidia) is actively contesting and that management's own
margin sacrifice implicitly doubts. Reverse-DCF needs ~35–40% FCF compounding for
~15 years (DOSSIER §3.2), i.e., the market is pricing a power-law-head *value*
capture that Arm does not currently have.

**Self-check on our own bias (the model applied to us):** The pro-Arm narrative is
itself a power-law story ("the standard everything runs on") and is seductive
*because* it's true on the unit axis — that is exactly how the value-axis error
sneaks in. I am actively resisting the symmetric trap of declaring the architecture
moat dead: it is not; RISC-V has not cracked phones or general servers, and the
data-center share gain is genuine. The honest read is **mixed**: a real power-law
winner on one axis, a thin-tail player on the axis that justifies the price.

## Red flags

| Flag | Severity | Rationale |
|---|---|---|
| Value-pool head sits at Nvidia/accelerators, not the CPU-IP layer | high | Arm's full-year royalty (~$2.6B) ≈ 4% of one Nvidia DC quarter ($62.3B); the AI profit power law's head is elsewhere ([Nvidia Q4 FY26](https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000019/q4fy26pr.htm)). |
| AGI-CPU pivot = revealed admission the toll booth captures "too little value" | high | Management is sacrificing ~98% GM neutrality for 40–50% merchant silicon to reach up the value curve (DOSSIER §1, §8.6) — a tell that the current perch is not the value-power-law head. |
| Price assumes head-of-value capture Arm doesn't have | high | 231x non-GAAP / EV ~$434B requires ~35–40% FCF CAGR for 15 yrs (DOSSIER §3.2) — pricing the value-axis head, not the unit-axis head. |
| CPU→accelerator workload migration can shrink the taxed TAM | medium | The head of the AI distribution is pulling value away from Arm's layer (DOSSIER §4.4). |
| RISC-V attacks the foundation of the architecture power law | medium | Free open standard; power-law heads can flip non-linearly once ecosystem critical mass is reached; most acute in ~19%-revenue China (DOSSIER §4.3). |

## What would flip this read (disconfirmers)

- **Agentic-AI makes CPUs the binding constraint and Arm captures it at the head.**
  If agentic inference is genuinely CPU-bound and lifts CPU core demand ~4x
  (30M→120M cores/GW) *and* Arm's AGI-CPU + Neoverse royalties capture that at
  rich, rising ASPs, Arm migrates toward the value-power-law head — turning the
  signal positive ([Beth Kindig, Apr 2026](https://beth-kindig.medium.com/arm-stock-could-win-as-agentic-ai-shifts-the-bottleneck-to-cpus-a2b6c8d902f6)).
- **AGI-CPU proves to be a high-margin, high-volume head business** (gross margin
  near IP levels, demand >> the supply-capped ~$1–2B; DOSSIER §1) rather than a
  thin, capex-heavy merchant line — evidence the pivot reached the head, not a
  commodity tail.
- **Royalty per-chip ASP inflects up structurally** (v9/CSS/data-center mix pushes
  blended royalty materially higher per unit, decoupling Arm's take from the
  pennies-per-chip floor) — Arm fattening its slice of the value distribution.
- **Nvidia/accelerator value-capture compresses** (custom-ASIC TCO advantage of
  40–65% collapses Nvidia's ~75% GM), moving the head of the AI profit pool toward
  the CPU/system layer where Arm participates.
- **RISC-V definitively stalls** in MCU/auto and China, confirming the architecture
  power-law head is permanent — strengthens power law #1 (but does not by itself
  fix the value-axis problem).

## Verdict

| | |
|---|---|
| **Signal** | mixed |
| **Relevance** | 5 |
| **Strength** | 4 |
| **Conviction** | 4 |
| **Fatal flaw?** | no — this model is not fatal-capable (it is not incentives/inversion/accounting/redundancy); it cannot on its own establish a path to permanent capital loss. |

**Bottom line:** Arm is a genuine power-law **winner on the architecture/ISA axis**
— ~99–100% of mobile, ~41% of all semiconductor IP, a rising royalty ladder, and
real data-center share gains — and Gaussian "just another CPU vendor" thinking would
badly understate that. But the lens cuts the other way on the axis that sets the
price: the **AI-value profit pool is power-law distributed with its head at Nvidia
and the accelerator layer**, and Arm's CPU-IP toll booth — a thin, volume-decaying
royalty whose full-year take is ~4% of one Nvidia data-center quarter — sits in the
**body/tail of *that* distribution.** Management's own AGI-CPU pivot is a revealed
admission the toll booth captures "too little value." At ~231x, the stock is priced
as if Arm owns the head of the value power law; it owns the head of the *unit* power
law and is merely *trying* to reach the value head against the firm that already
dominates it. Mixed, leaning negative for an investor paying today's price; the read
flips positive only if the agentic-CPU thesis genuinely relocates the value head to
Arm's layer.
