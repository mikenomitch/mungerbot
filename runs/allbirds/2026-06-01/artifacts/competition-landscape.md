# Competitive Landscape Tables — Allbirds / NewBird AI (BIRD)

**As-of:** 2026-06-01 · Lane: competition · All figures cited in `research/competition/NOTES.md`.

---

## Table A — GPUaaS / Neocloud competitive set (the FORWARD business, "NewBird AI")

Tiers per SemiAnalysis ClusterMAX 2.0 (2025-11-06), which rated 84 providers and tracked 209.

| Player | ClusterMAX tier | ~Scale signal | Capital backing | Notes |
|---|---|---|---|---|
| **CoreWeave (CRWV)** | **Platinum (sole member)** | FY2025 rev **$5.1B** (+168% YoY); ~45,000 GPUs | Public; ~$14.2B Meta commitment; OpenAI deal | Premium pricing; Microsoft ~67% of FY25 rev (concentration risk) |
| **Nebius (NBIS)** | Gold | FY2025 rev **~$530M** (~1/10 of CRWV) | Public; MSFT sovereign-cloud partner | EU sovereign focus |
| **Oracle (OCI)** | Gold | Hyperscaler-scale | Mega-cap balance sheet | Cloud + GPU |
| **Microsoft Azure** | Gold | Hyperscaler "Big Three" | Mega-cap | Also a CoreWeave customer/competitor |
| **Crusoe Cloud** | Gold | Renewable-powered DCs | Well funded | Power-advantaged |
| **Fluidstack** | Gold | New entrant | Funded | Rose into Gold |
| **Google Cloud** | Silver | Hyperscaler | Mega-cap | Pushing TPUs |
| **AWS** | Silver | Hyperscaler | Mega-cap | Customer + competitor to neoclouds |
| **Lambda** | Silver | Long-time GPU-cloud | Billions raised | |
| **Together.ai** | Silver | Inference/training | Funded | |
| **+ ~32 more rated; 209 tracked** | Silver/Bronze/NR | Long tail | Mixed | Extreme fragmentation |
| **QumulusAI** (NewBird's lessor) | Not separately tiered in ClusterMAX list seen | Targeting **>21,000 Blackwell GPUs by YE2026**; B200/H200/H100 today | **$500M** USD.AI facility; **$45M** convertible notes | "Hyper-distributed" model; NewBird leases capacity FROM a QumulusAI subsidiary |
| **NewBird AI (BIRD, post-pivot)** | **Unrated / micro-entrant** | **~$2.75M, 3-yr GPU lease** (initial Blackwell servers) | **$50M** convertible facility (not yet fully drawn) | Sub-scale lessee of QumulusAI capacity; "needs a lot more than $50M to become a neocloud" |

**Market structure:** Hyperscalers (AWS+Azure+GCP) >60% of broad GPU/cloud share; CoreWeave ~18% of the dedicated AI-training/HPC tier-two segment. ~1/3 of AI workloads run on neoclouds. Analyst forecast: CoreWeave+Lambda+Nebius+others ≈ **$20B** neocloud revenue (next year), ≈ **$180B by 2030**.

---

## Table B — Five Forces read on the GPUaaS pivot (NewBird AI)

| Force | Intensity | Evidence |
|---|---|---|
| **Rivalry** | **Extreme** | 209 providers tracked; consolidation thesis: by 2027 "a handful control 80%+"; post-depreciation gross margins **14–16%**. NewBird is a tiny new entrant. |
| **Threat of new entrants** | High *into* the segment, but **barriers to a DURABLE position are very high** | Capital ($3.1T into chips by 2030; GPU capex 3.7x hosting cost), **power allocation now the binding constraint**, NVIDIA allocation/embargo-program access, orchestration (SLURM/K8s), InfiniBand security, SOC2/ISO. NewBird clears none of these at scale. |
| **Supplier power (NVIDIA, power/DC, capital)** | **Very high** | NVIDIA controls GPU allocation; power is scarce; NewBird depends on **QumulusAI** for capacity AND on a single convertible investor for capital (investor holds 24-mo right to fund 55% of future raises). |
| **Buyer power** | High | Compute is increasingly commoditized; buyers compare on price, reliability, SLAs. Sub-scale providers "can't sustain premium pricing." NewBird has no differentiated offering disclosed. |
| **Substitutes** | High | Hyperscaler on-demand GPU, other neoclouds, customer self-build, TPUs/AMD, inference-optimized clouds. |

**Net:** No identifiable durable moat for NewBird AI as of 2026-06-01. It is a sub-scale, single-supplier-dependent, single-financier-dependent micro-entrant in a consolidating, capital-intensive, low-margin segment.

---

## Table C — Legacy footwear competitive set (the business being DIVESTED)

Allbirds is selling substantially all IP/assets to American Exchange Group (AXNY) for ~$39M (DEFM14A 2026-05-08; expected close Q2 2026), then winding down. Footwear is therefore discontinued; this table is historical context only.

| Player | Trajectory (latest) | Position vs Allbirds |
|---|---|---|
| **On Holding (ONON)** | Sales +32–36% YoY; record profits | **Gaining share**; took premium-performance positioning Allbirds aspired to |
| **Hoka (Deckers / DECK)** | FY2025 rev **$2.23B** (+23.6%); +2 pts US road-running share | **Gaining share**; growth moderating but dominant in performance running |
| **Nike (NKE)** | Reporting sales declines; ceding share to On/Hoka | Incumbent under pressure; dwarfs Allbirds |
| **Adidas, Puma** | Embraced sustainability lines | Scale incumbents; sustainability no longer a niche differentiator |
| **Veja** | Niche sustainable peer | Direct sustainable-DTC comp |
| **Allbirds** | Rev **$152.5M FY2025** (per aggregated press); peak **$4.1B** valuation (Nov 2021) → **$39M** IP sale; stores 60 (2024) → 23 (Q3 2025) | **Losing share / exiting**; brand identity eroded |

### Allbirds revenue & loss history (footwear)
| FY | Net revenue | Net loss |
|---|---|---|
| 2021 | $277.5M | $(46.7)M |
| 2022 | $297.8M | $(101.4)M |
| 2023 | $254.1M | $(152.5)M |
| 2024 | $189.8M | $(93.3)M |
| 2025 | **$152.5M** (press aggregate) | $(77.3)M |

> DATA-GAP / RECONCILE: one secondary source reports "net loss of $77.3M on $152.5M revenue for 2025"; a separate figure lists FY2023 net loss at $152.5M. The $152.5M value appears in two different roles across sources — financials lane should confirm FY2025 revenue and the FY-by-FY losses against the 10-K/10-Q. Revenue clearly declined every year from the 2022 peak.

**Why Allbirds lost:** over-expansion into running shoes & apparel that diluted the core wool-sneaker identity; durability complaints on sustainable materials; aggressive (then reversed) retail build-out; On and Hoka captured the premium/performance demand. (WWD, Yahoo Finance, Glossy, 2025–2026.)

**AXNY as acquirer:** a licensing/accessories house (~30 brands incl. Aerosoles, Ed Hardy, Ecko Unltd.). It intends to **license** the Allbirds name to third-party producers — i.e., the brand survives as a licensed label, NOT as an operating DTC competitor. (FashionNetwork, WWD, BoF, 2026.)
