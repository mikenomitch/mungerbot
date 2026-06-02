# Artifact — Sector & Macro data tables (BIRD)

**As-of:** 2026-06-01 · **Lane:** sector · Referenced by `research/sector/NOTES.md`.
All figures cited; ranges shown where sources diverge. No opinion rendered.

---

## T1. AI compute market sizing (multiple definitions/vendors)

| Source | Date | Segment | 2025 | 2026 | Out-year | CAGR | URL |
|---|---|---|---|---|---|---|---|
| Synergy Research Group | 2026-04-02 | Neocloud | $25B FY25 (Q4 $9B, +223% YoY) | — | ~$400B (2031) | **~58%** | srgresearch.com/articles/neocloud-market-forecast-to-approach-400b-by-2031 |
| Mordor Intelligence | 2026 | Neocloud | $24.07B | $35.22B | $236.53B (2031) | 46.4% | mordorintelligence.com/industry-reports/neocloud-market |
| The Elec (industry) | 2026 | Neo-cloud | — | — | — | ~50%/yr | thelec.net |
| MarketsandMarkets | 2025 | GPUaaS | $8.21B | — | $26.62B (2030) | 26.5% | marketsandmarkets.com/Market-Reports/gpu-as-a-service-market-153834402 |
| Precedence Research | 2025 | GPUaaS | $6.07B | — | $37.10B (2035) | — | precedenceresearch.com/gpu-as-a-service-market |
| Grand View / Fortune BI | 2025 | GPUaaS | ~$5.7–7.4B | $7.38B | $26.09B (2031) | 28.7% | grandviewresearch.com; fortunebusinessinsights.com |

**Note:** "GPUaaS" (narrow) and "neocloud" (broad, incl. managed AI cloud) are
different scopes — hence the 26% vs 58% CAGR gap. Both are fast-growing.

## T2. Hyperscaler / AI capex (the demand engine)

| Item | Figure | Date/Source |
|---|---|---|
| Big-4 hyperscaler 2026 capex (guided) | ~$660B (Google $185B, Amazon $200B, Microsoft $140B, Meta $135B), +77% YoY | Tom's Hardware; Introl Jan-2026 |
| Goldman: hyperscaler capex 2025–27 | $1.15T (>2x $477B of 2022–24) | Tom's Hardware |
| Projected tech-sector AI-infra debt issuance | ~$1.5T over coming years | Morgan Stanley / JPMorgan via WebSearch |
| Inference share of neocloud by 2030 | ~80% | ABI Research |
| DOE/LBNL: US datacenter electricity by 2030 | up to 12% (from ~4% today) | LBNL via WebSearch |

## T3. GPU rental economics — H100 price collapse & asset thresholds

| Metric | Value | Source |
|---|---|---|
| H100 peak on-demand (late-2024) | ~$8/hr | Introl Dec-2025 |
| H100 on-demand now (early-2026) | $2.85–3.50/hr (budget); decline ~64–75% from peak | Introl; IntuitionLabs |
| H100 long-tail/spot | $0.99–$2.50/hr (RunPod $1.87, Vast.ai $1.80–2.50) | Introl |
| SemiAnalysis H100 index | $3.06 (Sep-2024) → $2.36 (Jun-2025) | SemiAnalysis / Silicon Data |
| H100 acquisition cost | ~$25–30K/GPU; 8-GPU server >$250K | IntuitionLabs; Continuum Labs |
| Payback @ $2.50/hr, 100% util | ~14–16 months (10,000–12,000 hrs) | Introl |
| Effective payback @ late-2025 rates | ~7–10 years (realistic utilization) | SemiAnalysis / Silicon Data |
| Asset viability floor (cannot operate below) | $1.65/hr | Introl |
| Equity-return threshold (beat equities) | $2.85/hr | Introl |
| New H100 providers entering in 2025 | 300+ | Introl |
| AWS H100 price cut | ~30% (Jun-2025) → flips to oversupply pricing | WebSearch synthesis |
| **Conflicting signal:** Nvidia 2026 H100 rental hike | reportedly +20% | CryptoBriefing; ValueTheMarkets |
| **Conflicting signal:** near-term capacity | booked through ~Aug–Sep 2026 | SemiAnalysis via WebSearch |

## T4. Neocloud unit economics & profitability (CoreWeave as pure-play proxy)

| Item | Figure | Source |
|---|---|---|
| Capex mix | ~1% land/power · 18–20% shell/electrical/cooling · ~80% GPUs | Tech Fund (Nebius) |
| Revenue density | ~$9–10B ARR per GW deployed | Tech Fund |
| CoreWeave GAAP op margin | -3% (Q1'25) → 2% (Q2'25) → 4% (Q3'25) | CoreWeave 8-Ks |
| CoreWeave adj. EBITDA margin | 62% (Q1'25), 62% (Q2'25) | CoreWeave 8-Ks |
| CoreWeave revenue | Q3'25 $1,364.7M vs Q3'24 $583.9M (+134%) | CoreWeave Q3'25 8-K |
| CoreWeave backlog | $30.1B (6/30/25) → $66.8B (post-Meta) | CoreWeave; HyperFRAME |
| CoreWeave interest expense | $311M (tripled YoY); ~$34B off-B/S leases | WebSearch / HyperFRAME |
| Nebius 2026 ARR guide | $7–9B on ~0.9GW; 2.5GW contracted power | Tech Fund |
| **Normalized sector ROIC** | **UNKNOWN — no clean audited multi-yr figure (DATA GAP)** | — |

## T5. Regulatory timeline (AI compute)

| Date | Event | Source |
|---|---|---|
| 2026-01-13 | Commerce permits advanced-AI-chip sales to China (H200, AMD MI325X); "presumption of denial" → "case-by-case"; caps ~1M H200s (+ up to ~1M H100s) | CFR; BISI |
| 2026-01 | Remote Access Security Act passes House 369–22 (closes GPU "cloud loophole") | CFR |
| 2026-05-31 | Commerce: export-license rules apply to China-HQ'd entities anywhere; covers Blackwell/Rubin, AMD MI350x | WebSearch (DataCenterKnowledge / gov) |
| ongoing | FERC interconnection-queue reform under evaluation | WEF 2026-05 |

## T6. Power / grid bottleneck (gating constraint)

| Item | Figure | Source |
|---|---|---|
| NoVa interconnection (join May-2026) | utility power not realistic until ~2030–2033 | WebSearch synthesis |
| 2026 US AI-DC pipeline vs under-construction | ~16GW announced vs ~5GW actually building (~½ canceled/delayed) | Tech Insider; EnkiAI |
| Interconnection timelines | 4–7+ years | WEF 2026-05; Tech Fund |
| Hyperscaler workaround | on-site "energy islands" bypassing public grid | WebSearch synthesis |

## T7. AI-bubble / capital-cycle markers

| Marker | Detail | Source |
|---|---|---|
| Circular financing | Mega-caps = supplier+customer+investor+validator (Nvidia↔OpenAI↔Oracle↔CoreWeave) | LongYield; Man Group |
| Concrete crack | OpenAI missed internal revenue/user targets → AI-infra selloff 2026-04-28 (ORCL, NVDA, AVGO, AMD fell) | HeyGoTrade |
| Sentiment | Public-market sentiment turning negative on CoreWeave, Nebius, IREN despite tight near-term supply | WebSearch / Silicon Data |
| Barrier to entry | "Capital is the only real barrier" — no structural moat at sub-scale; shakeout underway | SemiAnalysis; Introl |
| Allocation gatekeeping | MSFT requires ≥1,000 Blackwell chips / ≥1-yr commitments | BigGo Finance |

---

## T8. Legacy sector — athletic/DTC footwear (discontinued context)

| Item | Figure | Source |
|---|---|---|
| Global athletic footwear (2025) | $145.5B → $152.8B (2026); ~5.5% CAGR to $234.7B (2034) | Fortune Business Insights |
| Alt framing | $182.6B (2025) → $194.9B (2026); 6.7% CAGR to $269.8B (2031) | Mordor Intelligence |
| Global sneaker segment | ~$94.1B (2025); ~5.2% CAGR to $156.2B (2035) | Expert Market Research |
| US sneaker | $27.1B (2025) → $28.4B (2026); 4.76% CAGR | Market Data Forecast |
| North America share | ~34.09% (2025) | Mordor Intelligence |
| Nike footwear sales | ~$33.4B (FY24) | WebSearch synthesis |
| **Allbirds Q2'25 net revenue** | **-23.1% to $39.7M** (from $51.6M Q2'24) | Allbirds 8-K Q2'25 |
| Allbirds sale price | ~$39M (vs ~$270M 2021 IPO; ~85% below IPO proceeds) | techbuzz; WWD via RUN.md |
| Peer contrast (Warby Parker) | net rev +12% YoY Q1'25, +15% by Q3'25 | Warby Parker 8-Ks; Placer.ai |

**Driving variables (legacy):** brand/pricing power · CAC vs LTV · channel mix
(DTC vs wholesale). **Cycle:** consumer-discretionary; Allbirds = DTC-bust
cautionary tale (execution/positioning failure within a survivable sector).
