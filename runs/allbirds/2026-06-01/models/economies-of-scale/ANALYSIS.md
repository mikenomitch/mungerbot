<!--
  Per-model write-up: Economies of Scale lens applied to Allbirds, Inc. (BIRD).
-->
# Economies of Scale — Allbirds, Inc. (BIRD)

**Discipline:** Economics  ·  **Intensity:** deep  ·  **As-of:** 2026-06-01

## What this model predicts

Economies of scale exist when **unit cost falls (or the offering strengthens) as
volume rises** — through fixed-cost spreading, purchasing power, logistics density,
data/learning loops, or capital-recovery over a larger base. The corollary Munger
insists on is the inverse: **diseconomies of scale** (bureaucracy, sub-scale cost
penalties, the "minimum efficient scale" trap where a small player simply cannot
match a large rival's unit costs no matter how well it executes).

If this model applied *favorably* to the business being valued, we should observe:

1. **Falling unit costs / rising gross margin as volume grows** — or, at minimum,
   unit economics that **converge toward** larger peers as the company scales.
2. **Purchasing / input-cost advantage** — better COGS, freight, or component terms
   than smaller rivals because volume commands discounts.
3. **Fixed-cost leverage** — SG&A, marketing, fulfillment, or capex spread over a
   larger revenue base, so incremental volume drops more to the bottom line.
4. **A defensible position at or above minimum efficient scale** — the company is
   big enough that sub-scale entrants cannot undercut it.

Two distinct businesses must be tested, because BIRD is mid-transformation:
- **Legacy footwear** (being sold to American Exchange Group for ~$39M; run-off).
- **NewBird AI** — the GPU-as-a-Service (GPUaaS) pivot that holds ~90% of the
  forward analytical weight. **This is what a buyer at $4.18 is actually paying for.**

The model's verdict on both: **the scale lens speaks loudly and NEGATIVELY in both
directions.** This is unusual — most models are a stretch on a shell like this — but
scale is one of the few lenses that is *highly* relevant here, because both the
business BIRD failed at and the business it is fleeing toward are industries where
scale is the dominant cost driver.

---

## Evidence

### A. Legacy footwear — the unit-economics gap vs peers is the whole story

**Disconfirming the favorable case (i.e., evidence of sub-scale diseconomy):**

- **Gross margin sits far below every scaled footwear peer, and the gap widened as
  Allbirds shrank.** Allbirds GM fell from low-50s (2020-21) to **41.0% (FY2025)**,
  then **collapsed to 27.8% in Q1-2026** on clearance selling. (DOSSIER §2.1-2.2;
  financials lane §2.) Compare scaled peers over the same window:
  - **On Holding (ONON):** FY2025 gross margin **62.8%**, guiding **>=63.0% for 2026**,
    adj. EBITDA margin 18.8%. (On FY2025 results, 2026-03-03,
    press.on-running.com.)
  - **Hoka / Deckers (DECK):** consolidated GM **56.2%**. (Retail Dive, "Margins
    balloon at Deckers as Hoka takes off".)
  - **Nike (NKE):** 5-yr average GM **~44.4%**. (Macrotrends, NKE gross margin.)

  Allbirds at **41% -> 28%** is **15-35 points below** the scaled premium players.
  In a business where the bill of materials for a $130 shoe is a small fraction of
  price, a 15-35-point gross-margin deficit is overwhelmingly a **scale and pricing-
  power** problem, not a materials problem. [JUDGMENT: well-evidenced.]

- **SG&A and fixed costs never found operating leverage; they de-levered.**
  Operating margin was **~ -50% for three straight years** (FY2023 -60.2%, FY2024
  -51.4%, FY2025 -52.4%), and **-98.6% in Q1-2026**. (DOSSIER §2.1.) Independent
  DTC analysis shows the mechanism: as revenue fell, **SG&A rose from ~45% to ~66%
  of revenue** and **revenue per employee fell from ~$290K to ~$280K** — the exact
  *reverse* of fixed-cost leverage. (Drivepoint, "DTC Business Breakdown: Allbirds".)

- **The store rollout was a textbook diseconomy of scale-up.** Allbirds added
  expensive full-price retail (60 stores by 2024) chasing growth, then had to close
  them (-> **23 stores Q3 2025**, -> **2 US outlets + 2 London** by Q1-2026), eating
  lease write-offs along the way. (DOSSIER §1; financials lane §5.) Operating-lease
  liabilities fell $53.7M -> $22.3M -> $15.8M as the footprint was dismantled. Fixed
  retail capital was added *below* the volume needed to support it, then reversed —
  cost without the offsetting scale.

- **No purchasing-power advantage; the opposite.** Recurring **inventory write-downs
  every year 2022-2025** ($14.4M / $8.3M / $2.7M / $2.8M, + $0.7M Q1-26) signal
  chronic over-buying relative to a shrinking demand base. (DOSSIER §2.2; financials
  §6.) A scale advantage in procurement shows up as *lower* COGS and clean sell-
  through; Allbirds shows the inverse — small volumes, weak forecasting, repeated
  markdowns. Peers buy and move far more units across the same supplier base.

- **The peers gaining share are gaining it partly *because* of scale.** On +32-36%
  YoY; Hoka FY2025 $2.23B (+23.6%); both took US road-running share. (DOSSIER §4.)
  Their volume funds athlete/marketing spend, supplier terms, and wholesale +
  retail reach that a $152M-and-falling brand cannot match — the minimum-efficient-
  scale wall in consumer footwear is real and Allbirds was on the wrong side of it.

**Supporting the favorable case (thin):**

- DTC *gross* margin in apparel can optically exceed wholesale by 24-28 points
  because the brand captures the retail markup. (Eightx, gross-vs-operating gap.)
  But this is a channel-mix artifact, not a scale economy — and BMO data cited in
  the same literature shows wholesale **EBIT** margins run ~10 points *higher* than
  DTC once CAC ($30-70/customer post-iOS14), fulfillment ($12-15/order), and 20-30%
  return rates are loaded in. So even the one "advantage" inverts at the
  contribution line. [JUDGMENT: not a real scale economy in Allbirds' hands.]

### B. NewBird AI (GPUaaS) — an industry where scale is decisive, entered ~4 orders of magnitude below minimum efficient scale

**The model is *highly* relevant here:** GPUaaS/neocloud is one of the most
scale-driven cost structures in the modern economy. Scale lowers unit cost through
at least four independent channels, all of which favor the largest players:

- **Bulk GPU purchasing + preferential NVIDIA allocation.** NVIDIA directed supply
  toward CoreWeave (its first "Elite" provider) and even **provides financing
  guarantees and invested $2B to help CoreWeave add 5GW**; NVIDIA agreed to
  **purchase CoreWeave's unused capacity ($6.3B)**. (TechCrunch, 2026-01-26;
  datacenters.com.) A sub-scale buyer gets neither preferential allocation nor
  financing support — it pays list and queues behind giants.
- **Power procurement at scale.** CoreWeave locks **long-term PPAs and land**;
  operates **43 data centers, 850+ MW active power, racks to 130 kW**, with
  direct-to-chip cooling that lifts performance-per-watt and "up to 20% higher GPU
  cluster performance." (CoreWeave capacity plans; DeployBase pricing.) Power is the
  **binding constraint** in the sector (DOSSIER §4-5); only scaled, capitalized
  players secure it on favorable terms.
- **Capital-recovery / depreciation spread.** GPUaaS requires recovering GPU capex
  (capex ~ **3.7x hosting cost**; ~80% of capex is GPUs) within a **48-60-month**
  window before the next hardware generation, against **post-depreciation gross
  margins of just 14-16%** and **GPU rental prices down ~50% over five years / H100
  on-demand -64% from peak**. (DOSSIER §4-5; competition lane §1.4.) Spreading that
  capex over tens of thousands of GPUs at high utilization is the *only* way the math
  works — and reserved/volume commitments unlock a **~60% discount** that only large,
  creditworthy buyers can offer or absorb. (Introl, CoreWeave deep dive.)
- **Operational scale ("AI factories").** Mega-clusters of 100,000+ GPUs amortize
  orchestration (SLURM/K8s), InfiniBand, SOC2/ISO compliance, and 15-min SLAs over a
  huge base. (CoreWeave; SemiAnalysis ClusterMAX 2.0, DOSSIER §4.)

**Disconfirming the favorable case for NewBird — decisive:**

- **NewBird is below the *rated* universe.** SemiAnalysis rated 84 / tracked 209
  providers; **CoreWeave is the sole Platinum** (FY2025 rev $5.1B, ~45,000 GPUs);
  Nebius (~$530M) is ~1/10th of CoreWeave. **NewBird's entire footprint is a single
  ~$2.75M, 3-year GPU lease to a QumulusAI subsidiary** — roughly **4 orders of
  magnitude** below CoreWeave by GPU count. (DOSSIER §4; competition lane §1.1, §1.3.)
- **Scale economics are explicitly ADVERSE for sub-scale entrants.** The sector
  literature concludes small-scale survival is **"unlikely"** (Vultr, 2026-01-28),
  the consolidation thesis is that **a handful control 80%+ by 2027**, and
  Constellation Research (2026-04-15): NewBird **"is going to need a lot more than
  $50 million to become a neocloud."** (DOSSIER §4; competition lane §1.1, §1.5.)
- **NewBird is even worse than sub-scale — it is a *lessee/reseller* of a mid-tier
  neocloud's capacity** (QumulusAI), which is itself still scaling on convertible
  debt. Two layers of scale disadvantage sit between NewBird and end demand: it
  captures neither the purchasing nor the power nor the depreciation economies — it
  pays QumulusAI's price plus its own cost of (toxic) capital. (Competition §1.2.)
- **Its only funding is a death-spiral convertible**, of which only **~$5.25M is
  committed** (~$44.75M optional, at the investor's discretion). (DOSSIER §2.4.) You
  cannot buy your way to minimum efficient scale on ~$5M of committed capital in a
  business where the leader just took an **$8.5B loan** and a **$6.8B Anthropic
  contract**. (CoreWeave $8.5B loan, 2026-03-31; Anthropic $6.8B, 2026-04-10.)

---

## Reasoning

**Where the model is highly relevant.** Both of BIRD's businesses sit in industries
where scale is *the* cost driver, so this lens is unusually applicable for a micro-cap
shell. The legacy footwear failure is, in large part, a failure to reach the scale at
which DTC fixed costs and purchasing leverage pay off — the 15-35-point gross-margin
deficit vs On/Hoka/Nike and the SG&A-de-leveraging (45%->66% of revenue) are the
signature of a brand stuck *below* minimum efficient scale, compounded by a store
build-out that added fixed cost ahead of (never-arriving) volume. That is diseconomy
of sub-scale, full stop.

The forward business makes the problem *worse*, not better. GPUaaS has even steeper,
more decisive scale economies — bulk silicon, preferential allocation, PPAs, and
depreciation spread over 100,000-GPU "AI factories" — and NewBird enters ~4 orders of
magnitude below the only Platinum-tier player, as a *reseller* of someone else's
capacity, on ~$5M of committed capital. The scale curve in this sector is so steep
that the literature flatly calls sub-scale survival "unlikely." A company that could
not win the scale game in a mature, survivable footwear market (where peer Warby
Parker grew +12-15%) is pivoting into a market where the scale bar is dramatically
higher and the incumbents are spending billions. The model predicts the unit
economics will be punishing; the disclosed economics (one $2.75M lease, no
utilization, no backlog) give no evidence to the contrary.

**Check on our own bias (the inverse discipline Munger demands).** I actively looked
for a scale *advantage* and found only one candidate — the DTC channel's optically
high gross margin — which inverts to a *disadvantage* at the contribution/EBIT line
once CAC, returns, and fulfillment load in. I also considered whether NewBird's
*smallness* could be an advantage (niche/vertical focus, asset-light reselling).
Asset-light reselling is real, but it is the antithesis of a scale economy: it means
NewBird permanently rents its cost structure from a larger party and can never get
below that party's unit cost — so even the "bull" framing concedes the model's point.
I see no credible path by which scale works *for* this entity on either side.

**Materiality.** Scale is not the *only* thing wrong here (governance, going-concern,
valuation > every intrinsic anchor are covered by other lenses), so I do not claim
this single model disqualifies the investment by itself. But within its own
discipline, the evidence is one-directional and strong: **no scale economy supports
the price.**

---

## Red flags

| Flag | Severity | Rationale |
|---|---|---|
| Gross margin 15-35 pts below scaled footwear peers (28-41% vs On 63% / Hoka 56% / Nike 44%) | high | Direct measurement of sub-scale cost penalty; widened as the company shrank. |
| SG&A de-leveraged (45%->66% of revenue) as volume fell | high | The literal opposite of fixed-cost operating leverage; reverse-scale dynamics. |
| NewBird ~4 orders of magnitude below minimum efficient scale in a scale-decisive industry | high | GPUaaS economies (bulk silicon, PPAs, depreciation spread) all favor giants; "small-scale survival unlikely" (Vultr). |
| NewBird is a *reseller* of a mid-tier neocloud's capacity, not an owner-operator | high | Permanently rents its cost base from a larger party; structurally cannot reach a unit-cost advantage. |
| ~$5.25M committed capital vs incumbents' $8.5B loans / $6.8B contracts | high | Cannot fund the volume required to climb the scale curve; sub-scale is locked in. |
| Recurring annual inventory write-downs 2022-2025 | medium | Evidence of *negative* purchasing/forecasting scale benefit (over-buying into falling demand). |

No **fatal flaw** is declared under this model: Economies of Scale is not a
fatal-capable lens in the framework's taxonomy (incentives / inversion / accounting /
margin-of-safety are), and while the scale picture is bleak, the path-to-zero call
belongs to those lenses. This model's role is to report that **scale offers no
support and is in fact a strong headwind** in both businesses.

## What would flip this read (disconfirmers)

- **NewBird discloses a path to scale:** a multi-thousand-GPU contracted backlog, a
  signed PPA / gigawatt-class power allocation, direct (not via QumulusAI) NVIDIA
  allocation, or a capital commitment large enough (hundreds of millions+) to reach
  minimum efficient scale. None disclosed as of 2026-06-01.
- **Evidence of a real per-unit cost advantage** — e.g., NewBird securing GPUs or
  power below prevailing market rates, or a differentiated/vertical offering that
  escapes commodity GPU pricing (no such differentiation disclosed).
- **Legacy:** a structural reason the 28-41% gross margin would converge toward
  peers at *lower* volume (none exists; it is moving the wrong way into run-off).
- A credible argument that asset-light reselling at small scale earns durable excess
  returns in GPUaaS despite renting its cost base — I could not find one; the sector
  evidence runs strongly the other way.

## Verdict

| | |
|---|---|
| **Signal** | negative |
| **Relevance** | 5 |
| **Strength** | 4 |
| **Conviction** | 4 |
| **Fatal flaw?** | no (model is not fatal-capable; scale is a strong headwind, not a declared path-to-zero) |

**Bottom line:** Scale is one of the most *relevant* lenses for this name and it reads
firmly negative on both halves of the business. The legacy footwear brand failed in
large part because it never reached minimum efficient scale — its gross margin sits
15-35 points below scaled peers (On 63%, Hoka 56%, Nike 44% vs Allbirds 28-41%) and
its fixed costs de-levered as it shrank. The NewBird AI pivot heads into GPUaaS, where
scale economies are even steeper and decisive, as a sub-scale *reseller* roughly four
orders of magnitude below the only Platinum-tier player and funded by only ~$5M of
committed capital — a position the sector literature calls unlikely to survive. There
is no scale economy here to underwrite the $4.18 price.
