# Sector Data Tables — Semiconductor IP / Compute Industry

**As-of:** 2026-06-01 · Lane: `sector` · For: Arm Holdings plc (ARM)
All figures cited inline in `research/sector/NOTES.md`; this file is the quantitative companion.

---

## Table 1 — Global semiconductor market size & growth (industry, all products)

| Year | Total sales (USD) | YoY growth | Source / basis |
|---|---|---|---|
| 2022 | ~$574B (record at the time) | — | SIA/WSTS historical |
| 2023 | ~$520–527B | −8% to −9% | 7th downturn since 1990 (inventory correction) |
| 2024 | $630.5B | +~19–20% | SIA actual |
| 2025 | **$791.7B** | **+25.6%** | SIA, full-year 2025 actual (Americas led) |
| 2026E | ~$975B (WSTS) / ~$1.0T (SIA "on track to $1T") | **+~25–26%** | WSTS Fall-2025 forecast; SIA |
| 2036E | ~$2T ("seems likely") | ~CAGR mid-single → low-double digits | Deloitte 2026 outlook |

- Q1 2026 industry sales: **$298.5B, +25% vs Q4 2025** (SIA) — confirms the up-cycle was still accelerating into the as-of date.
- WSTS Fall-2025 product split for 2026E: **Logic ~$390.9B (+32% YoY); Memory ~$294.8B (+39% YoY)** — the two AI-levered categories lead.
- 2025 actuals by category: **Logic $301.9B (+39.9%); Memory $223.1B (+34.8%)** (SIA).

## Table 2 — The AI concentration (revenue vs unit volume mismatch)

| Metric | Figure | Source |
|---|---|---|
| Generative-AI chip revenue, 2026E | ~$500B (~half of all chip sales) | Deloitte 2026 outlook |
| AI chip share of total **unit volume** | <0.2% (~20M of ~1.05T chips) | Deloitte 2026 outlook |
| Memory revenue 2026E | ~$200B (~25% of total) | Deloitte |
| DRAM spot example (price spike) | ~$250 (Oct '25) → ~$700 (Mar '26) | Deloitte (supply-constrained) |
| Hyperscaler capex 2026E (MSFT/GOOG/AMZN/META/ORCL) | **~$660–690B**, of which ~$450B (~75%) AI-specific | IEEE ComSoc / CNBC / Futurum, Dec '25–Feb '26 |
| Hyperscaler capex YoY change | +36% to +77% depending on basis | IEEE ComSoc / Tom's Hardware |

## Table 3 — Manufacturing/value-chain structure (where Arm sits)

| Layer | Leaders | Concentration | Notes |
|---|---|---|---|
| **Architecture / CPU IP** | **Arm** (mobile >99%), x86 (Intel+AMD), RISC-V (open ISA) | Arm dominant in mobile/edge; near-duopoly with x86 in CPUs | Arm = the IP/architecture layer; **fab-less, licenses designs** |
| Foundry (manufacturing) | **TSMC ~60–70% overall; >90% at 3nm/2nm**; Samsung; Intel Foundry | Extreme at leading edge | TSMC 2nm entered HVM Q4 2025; advanced (≤7nm) = ~74% of TSMC wafer rev (Q1 2026) |
| EDA tools | Synopsys, Cadence, Siemens EDA | Oligopoly | — |
| Equipment | ASML (EUV monopoly), AMAT, Lam, TEL, KLA | High | — |
| Chip designers (Arm licensees) | Apple, Qualcomm, Nvidia, MediaTek, Amazon, Google, etc. | Fragmented buy-side | Arm's customers; also its potential RISC-V defectors |

## Table 4 — Arm-specific sector position (FY2026, ended 2026-03-31)

| Metric | FY2026 | Growth | Source |
|---|---|---|---|
| Total revenue | **$4.92B** | +23% | Arm Newsroom / 6-K, 6 May 2026 |
| Royalty revenue | **$2.613B** | +21% | Arm |
| Licensing & other | **$2.307B** | +25% | Arm |
| Q4 royalty | $671M | +11% | Arm (Q4 specifically decelerated vs +27% in Q3) |
| Q3 royalty | $737M (record) | +27% | Arm |
| Non-GAAP diluted EPS (FY) | $1.77 | from $1.63 | Arm |
| Cumulative Arm-based chips shipped | **>325B** (since 1990) | — | Arm |
| Royalty per chip (model) | ~$0.10–$2.00, higher for Armv9/CSS/data-center | — | TIKR / industry; Armv9 > Armv8 rate |

### Arm's own TAM framing (from Q4 FY2026 investor slides — COMPANY ESTIMATE, not independent)

| Segment | FY2026 TAM | FY2031E TAM |
|---|---|---|
| Cloud AI | $330B | >$1.15T |
| Edge AI | $180B | $250B |
| Physical AI | $25B | $50B |
| **Total** | **$535B** | **>$1.5T** |

- Arm's **share of cloud compute: 9% (FY2022) → 20% (FY2025)**; automotive/robotics 36% → 44%; mobile >99%. (Arm slides)
- Targets (company): >$15B AGI-CPU chip revenue and >$9 consolidated non-GAAP EPS by FY2031; IP/CSS to ~$10B rev at >65% non-GAAP op margin. **Aspirational/management guidance — treat as such.**
- Agentic-AI compute intensity claim (company): ~120M CPU cores/GW vs ~30M for traditional AI DC (4×).

## Table 5 — RISC-V (the structural headwind) — confront the hype vs. the base rate

| Metric | Figure | Source / caveat |
|---|---|---|
| RISC-V "market penetration" headline | "25% global" (early 2026) | RISC-V International / financialcontent — **ambiguous denominator; embedded/IoT-weighted, NOT high-end CPU** |
| RISC-V IP/tech market size 2025 | ~$1.34–2.30B | Mordor / others (small vs Arm's ~$5B rev) |
| RISC-V market size 2031E | ~$8.6–10.6B | CAGR ~31–41% |
| RISC-V **data-center CPU** share by 2030E | **only 5–8%** | secondary forecast — the high-value segment stays largely Arm/x86 |
| RISC-V cores shipped 2031E | ~36B units | volume-weighted, low-ASA |
| Notable defections | Meta MTIA re-architected on RISC-V (claimed +30% perf/watt); Qualcomm "Oryon-V" via Ventana | secondary; signals real but high-end immature |

> Caveat: many RISC-V "25% share" and Arm "AGI CPU" articles are from low-authority/aggregator outlets (financialcontent, tech-insider.org) and read as promotional. Treated as **directional sentiment**, not verified fact. Primary RISC-V International announcement supports the 25% *penetration* claim but is itself an advocacy body.

## Table 6 — Cyclicality reference

| Attribute | Detail | Source |
|---|---|---|
| Cycle length | Downturn every ~3–4 yrs; >15 downcycles in 70+ yrs | nomadsemi / TMT guides |
| Last trough | 2023 (−8/−9%, inventories >$60B) | SIA / Deloitte 2024 |
| Recovery | 2024 (+~19%), 2025 (+25.6%), 2026 (+~25%) | SIA |
| Amplifier | "Bullwhip": +10% end demand → +~40% equipment orders | nomadsemi |
| Forward risk | Consensus wafer-ship: +5% ('25), +5% ('26), **−6% ('27)**, +10% ('28) — a possible 2027 correction | secondary consensus |
| Arm's cyclical buffer | Royalties lag (paid on shipments, often per-unit on prior-gen designs) + licensing backlog (RPO) smooth, but DO NOT immunize | judgment + Arm model |

---

## The 2–3 variables that most drive SECTOR economics (for the digest)

1. **AI / data-center capex super-cycle** — hyperscaler capex (~$660–690B in 2026, ~$450B AI) is the single largest swing factor for the high-value (logic/memory/accelerator) segment that now is ~half of industry revenue. This is also where Arm's *incremental* growth (Neoverse/CSS/AGI-CPU, royalty-rate uplift) is concentrated.
2. **Architecture royalty-rate / mix migration (Armv8 → Armv9 → CSS → compute subsystems → own silicon)** — for the IP layer specifically, value capture per device (not unit count) drives economics; Armv9 carries materially higher per-chip royalty than v8, and CSS/data-center higher still. The migration rate is the key lever on Arm's revenue independent of unit volume.
3. **Competitive ISA structure & customer in-sourcing (RISC-V + custom silicon)** — the durability of the Arm/x86 architecture rents depends on whether royalty-free RISC-V and customers' own designs erode share, especially in cost-sensitive (IoT/embedded) and, longer-term, data-center segments. This is the principal secular headwind to sector *pricing*.

**Normalized return on capital (sector):** The IP/architecture layer is structurally a very-high-ROIC, capital-light, royalty model (Arm: net-cash balance sheet, IP/CSS targeted >65% non-GAAP operating margin) — far above the capital-intensive foundry/equipment layers (which earn cyclical, mid-teens-to-20s ROIC at peak, much less at trough). Sector "normalized ROIC" is therefore bimodal: light at the IP/design end, heavy and cyclical at the manufacturing end. (Judgment, anchored to Arm's disclosed margins and TSMC/equipment cyclicality.)
