# Arm Holdings — Competitive Landscape Data Tables

**As-of: 2026-06-01.** Compiled by the `competition` lane. All figures sourced; see `../research/competition/NOTES.md` for full citations and caveats. Where a figure comes from low-quality/AI-generated content farms it is flagged `[LOW-CONF]`.

---

## Table 1 — Competitive arena by end market (who Arm fights, and how)

| End market | Arm position (2025–26) | Direct ISA / architecture rivals | "Make vs license" threat (customers building own) | Trajectory |
|---|---|---|---|---|
| **Smartphone / tablet app processors** | ~99–100% ISA share (near-monopoly) | RISC-V (nascent in app processors); x86 irrelevant here | Apple (own Arm cores under ALA), Qualcomm (Oryon/Nuvia-derived, now ruled licensed) — all still pay Arm ALA royalties | Stable share; royalty/chip rising via Armv9 + CSS |
| **PCs / client** | Rising (Apple Mac 100% Arm; Windows-on-Arm via Qualcomm, Nvidia entering) | x86 (Intel, AMD) still dominant in Windows PCs | Apple, Qualcomm, Nvidia (RTX Spark / "Snapdragon C") build own Arm SoCs | Arm gaining vs x86, slowly |
| **Data center / server CPU** | ~17.7% of total server CPU *units* Q1'26 (up from 11.5% YoY); Arm claims ~50% of *compute shipped to top hyperscalers* | x86 (Intel ~67% total server units; AMD gaining), RISC-V (long-dated) | AWS Graviton, Google Axion, Microsoft Cobalt, Nvidia Grace/Vera — all Arm-based but in-house designs | Arm gaining fast; biggest growth vector |
| **AI accelerators (XPU/GPU/TPU)** | CPU host role, not the accelerator itself | Nvidia GPU, Google TPU, AWS Trainium, Meta MTIA, custom ASICs | Workloads shifting from CPU→accelerator is a structural risk to CPU TAM (20-F flags this) | Mixed: grows host-CPU attach, but accelerator $ bypass the CPU |
| **Automotive** | ~94% of automakers use Arm IP | RISC-V (gaining in MCUs; Bosch/Infineon/NXP/Qualcomm backing RISC-V consortium "Quintauris") | Nvidia Drive (Arm Neoverse), Qualcomm Snapdragon Digital Chassis (Arm) | Arm strong; RISC-V encroaching at MCU/low end |
| **IoT / embedded / microcontrollers** | Dominant incumbent (Cortex-M) | RISC-V (most advanced displacement here — no legacy SW stack to protect) | Many silicon vendors dual-sourcing RISC-V for cost | Share erosion at the low end most visible here |

---

## Table 2 — Data center / server CPU share (denominators differ — read carefully)

**Mercury Research, Q1 2026 (cited via Tom's Hardware / AnalyticsInsight / TechPowerUp, ~May 14 2026):**

| Vendor | Basis | Q1 2026 | Prior period | Note |
|---|---|---|---|---|
| Intel | Total server CPU **unit** share | ~66.8% | 72.8% (Q1'25) | Losing share but still largest shipment base |
| AMD | x86 server **revenue** share | 46.2% (record) | 41.3% (Q4'25) | x86-only denominator |
| AMD | x86 server **unit** share | 33.2% | 28.8% (Q4'25) | x86-only denominator |
| Intel | x86 server **revenue** share | 53.8% | — | x86-only denominator |
| **Arm** | Total server CPU **unit** share | **17.7%** | 11.5% (Q1'25) | Counts Arm vs the *whole* market, not x86-only |

> CAUTION: AMD's "46.2%" is **x86-only revenue**; Arm's "17.7%" is **total-market units**. They are NOT directly additive. The clean read: of *all* server CPUs shipped in Q1'26, ~17.7% were Arm; the remaining ~82% x86 split ~54/46 Intel/AMD by revenue.

**Forward projection [secondary/mixed-conf]:** server CPU market $27.7B (2025) → $56.2B (2028); Arm server share 13.4% → 23.1%; Intel 52.0% → 43.9% (semiengineering, citing analyst model).

**Arm's own claim:** "~50% of compute shipped to top hyperscalers in 2025 is Arm-based" and "nearly 50% share of CPUs deployed by top hyperscalers this year." Source: Arm Newsroom blog + Q2 FYE26 release + FY26 results (DCD). NOTE: this is a *hyperscaler-internal-deployment* metric (favorable denominator), not total-market share — do not conflate with the 17.7%.

---

## Table 3 — RISC-V threat read (open-source ISA, Arm's structural rival)

| Claim | Figure | Confidence | Source |
|---|---|---|---|
| RISC-V global processor-market "penetration" | ~25% (Jan 2026) | **LOW** — repeated by AI content farms (FinancialContent/"tokenring", programming-helper); no primary methodology | financialcontent.com / programming-helper |
| Cumulative RISC-V cores shipped | >13 billion (vs Arm's >310B cumulative) | MEDIUM | RISC-V-adjacent reporting; Arm cumulative is primary (20-F) |
| Automotive silicon containing RISC-V cores | ~25%, +66% YoY [LOW-CONF] | LOW | content-farm + Yole-adjacent commentary |
| RISC-V automotive CPU market | ~$500M (2025), ~25% CAGR to 2033 | LOW-MED | archivemarketresearch (vendor report) |
| Major backers | Qualcomm, Google, Meta, Nvidia (uses RISC-V microcontrollers inside Blackwell/Rubin GPUs), Bosch/Infineon/NXP (auto), Alibaba/Ventana (servers); China "silicon sovereignty" push | MEDIUM | multiple; Arm 20-F confirms "many of our customers are also major supporters of RISC-V" |
| Consensus on where RISC-V wins | IoT/embedded/MCU and deeply-embedded controllers first; NOT yet displacing Arm in smartphones or general-purpose servers (no SW stack to displace; ecosystem immature) | MEDIUM | nextwavesinsight / multiple analysts |

---

## Table 4 — Royalty-rate ladder (why mix-shift matters competitively)

| Product generation | Approx. royalty (% of chip ASP) | Source |
|---|---|---|
| Armv7 / older | low (<~1.5%); ~$0.05–0.50 per app processor historically | TIKR / EE Times commentary |
| Armv8 | ~2.5–3.0% | morethanmoore / EE Times |
| Armv9 | ~5% (roughly 2x v8) | morethanmoore / EE Times / Arm commentary |
| CSS (Compute Subsystems) v1 | ~10% | EE Times / Arm |
| CSS v2 | **>10%** (highest in Arm's history) | morethanmoore (Arm Q2 FYE26) |

Mix as of FY2026: Armv9 ≈ 25–31% of royalties (Q4 FY25: v8 44% / v9 31% / v7-older 25%); Arm targets 60–70% v9 attach long-term. CSS ≈ "almost 20% of royalties" and growing (Rene Haas, Mar 2026).

---

## Table 5 — Customer concentration (a competitive vulnerability)

Source: Arm FY2025 20-F (FYE 2025-03-31), Risk Factors & Item 5.

| Metric | FY2025 | FY2024 | FY2023 |
|---|---|---|---|
| Top 5 customers (incl. Arm China) as % of revenue | ~56% | 54% | 57% |
| Largest single customer (**Arm China**) as % of revenue | ~17% | 21% | 24% |
| PRC-sourced revenue as % of total | ~19% | 22% | 25% |

> Arm China is Arm's single largest customer AND its sole channel to the PRC market, yet "neither we nor SoftBank Group control the operations of Arm China, which operates independently of us" (20-F). This is simultaneously a concentration risk, a geopolitical risk, and a governance oddity directly relevant to competitive durability in China (where RISC-V "silicon sovereignty" is strongest).
