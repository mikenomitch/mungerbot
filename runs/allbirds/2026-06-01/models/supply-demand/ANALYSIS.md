<!--
  Per-model write-up. Supply & Demand (Economics) applied to Allbirds, Inc. (BIRD).
  As-of 2026-06-01. Cite facts; mark judgments as [JUDGMENT].
-->
# Supply & Demand — Allbirds, Inc. (BIRD)

**Discipline:** Economics  ·  **Intensity:** standard  ·  **As-of:** 2026-06-01

## What this model predicts

The Supply & Demand lens asks where supply and demand for **the product** and for **the
industry's productive capacity** are heading, and watches for three classic failure
patterns:

1. **Capacity gluts** — when a price spike or a euphoric demand narrative pulls in a wave
   of new capacity that arrives *after* demand has been met, collapsing price and margin.
2. **Inventory cycles** — bullwhip dynamics where each link over-orders into perceived
   scarcity, then dumps when the shortage clears.
3. **The cobweb dynamic** — when production decisions are made on *today's* high price but
   capacity comes online with a lag, the new supply hits a market that has already moved,
   so price oscillates (often violently) and late entrants are the ones who eat the
   downswing.

This company is two businesses, so the model must be applied twice:

- **Legacy footwear (being sold):** *If the legacy demand picture were favorable, we would
  see stable or growing unit sales, controlled inventory, and full-price sell-through.*
- **Forward business — NewBird AI / GPU-as-a-service (the thing actually being valued):**
  *If supply/demand favored a sub-scale new entrant, we would see (a) durable scarcity of
  the specific vintage NewBird is buying, (b) rental prices rising or stable over the
  capital-recovery window (48–60 months), (c) no large wave of competing capacity arriving
  behind them, and (d) the entrant able to lock forward economics.* The cobweb model
  predicts the **opposite** for anyone deciding to add capacity at the top of a euphoric
  cycle on a depreciating asset.

The decision-relevant question is the GPU business, because the $4.18 price is paying ~$20M–
$28M for the un-launched NewBird stub above all disclosed asset values (DOSSIER §3,
"Reverse-DCF read").

## Evidence

**Legacy footwear — demand collapsing, chronic over-supply of own inventory (cited):**
- Net revenue **$297.8M (FY2022) → $152.5M (FY2025), −48.8% from peak**, then **−30.5% YoY
  in Q1-2026**; every 2025 quarter fell ~18–23% YoY (DOSSIER §2.2). The demand curve for the
  *product* has been sliding down and to the left for three years.
- Gross margin fell from low-50s to ~41%, then **collapsed to 27.8% in Q1-2026 on
  clearance/discount selling** (DOSSIER §2.1–2.2) — the textbook signature of supply (own
  inventory) exceeding demand, forcing price cuts to clear.
- **Inventory write-downs every year 2022–2025** ($14.4M / $8.3M / $2.7M / $2.8M) — chronic
  over-buying / weak sell-through, a classic inventory-cycle / bullwhip failure at the firm
  level (DOSSIER §2.2). Allbirds repeatedly produced into demand that did not show up.
- The brand survives only as a **licensed AXNY label** after a $39M IP sale (DOSSIER §1, §4)
  — the operating demand engine is being switched off, not fixed.

**Forward business (GPU/AI compute) — near-term scarcity is REAL, but the forward capacity
cycle is the danger (cited):**
- *Near-term scarcity (supports demand side, short horizon):* Blackwell B200/GB200 are **sold
  out through mid-2026**; backlog ~**3.6M units**; >$500B combined Blackwell+Rubin orders into
  end-2026 (FinancialContent/TokenRing, 2025-12-29). H100 one-year contract pricing actually
  **rose ~40% from ~$1.70/hr (Oct-2025) to ~$2.35/hr (Mar-2026)** and NVIDIA reportedly raised
  2026 H100 rents ~20% (SemiAnalysis; DOSSIER §5). On-demand capacity "sold out across all GPU
  types" in early 2026.
- *But the secular and forward picture is a glut-in-the-making (disconfirms a durable
  scarcity thesis):* H100 on-demand rents fell **~64–75% from the ~$8/hr peak** to ~$2.85–
  3.50 (long-tail <$1); AWS cut H100 ~30% in Jun-2025; **H100 rents resumed sliding after an
  early-May-2026 surge** (CryptoBriefing/Ornn AI). With Blackwell shipping, H100 rates "have
  continued to fall — averaging ~$3.11/GPU-hr in early 2026 … expected to decline throughout
  2026 as Blackwell supply increases" (IntuitionLabs).
- *The cobweb / capital-cycle signal is explicit in the data:* For **2027, 21.5 GW of
  capacity is announced but only 6.3 GW has broken ground** — a wall of supply queued behind
  today's prices (Tech-Insider). Independent analysts warn explicitly: "Once the backlog of
  orders gets fulfilled and new supply floods the market, we could see a glut of chips leading
  to sharp price declines, mirroring … memory chips or disk drives," and of **"periods of
  overcapacity and unstable pricing for multiple years" due to bullwhip effects** (Gad Allon,
  Substack). DOSSIER §5 reaches the same conclusion: "late-stage euphoria with first visible
  cracks … textbook capital-cycle danger zone for a new sub-scale entrant," with ~half of
  2026-planned US AI datacenters canceled/delayed.
- *Depreciation makes the cobweb worse on this specific asset (disconfirms entry economics):*
  GPUs are depreciated over ~3 years; a 2-yr-old H100 keeps ~61% of value, dropping to 45–55%
  by year 3 — the **"Mid-Life Cliff"** — and **"neoclouds that financed GPUs assuming a 3–5
  year life may find revenues plunging ~80% within 12 months"** (DCD; HashrateIndex).
  Post-depreciation gross margins are **14–16%** with capital recovery required in 48–60
  months — but rental prices are projected to keep falling over exactly that window
  (DOSSIER §4).
- *Demand exists but is captured by incumbents, not entrants:* hyperscaler 2026 capex
  ~$660B (+77%); neocloud TAM ~$25B → ~$400B by 2031 (DOSSIER §5). Demand is not the issue —
  *who earns the economics* is. CoreWeave (sole "Platinum," ~45,000 GPUs) vs **NewBird's one
  ~$2.75M GPU lease (~4 orders of magnitude smaller)** (DOSSIER §4).

**The entrant cannot lock forward economics (cited, decisive):**
- "A neocloud … can't lock in a forward price for the compute revenue that cluster will
  generate in 18 months … everyone is simply hoping that the depreciation curves they
  underwrote don't shift beneath them" (Stanley Laman). NewBird is buying depreciating capacity
  at the top of a euphoric price, with revenue tied to spot/short-contract rents that the same
  data say will fall — the cobweb in one sentence.

## Reasoning

**The model is highly relevant** to the forward business and the lens cuts cleanly. The GPU
build-out is a near-perfect natural experiment in the cobweb dynamic: production (capacity)
decisions are being made on a 2024–2026 price spike, but the capacity arrives with a multi-
year construction/allocation lag (21.5 GW announced vs 6.3 GW underway for 2027), and the
underlying asset *depreciates ~80% of its rent-earning power within ~12 months of its prime*.
That is the configuration that produces violent price oscillation and punishes the marginal,
late, sub-scale entrant — which is exactly what NewBird is.

The crucial nuance — and where I check my own bias toward a tidy "glut" narrative — is that
**near-term, supply is genuinely tight**: Blackwell is sold out through mid-2026 and frontier-
vintage rents have risen. A naive reading of the dossier's "H100 −64%" could overstate the
case. So I separate the two clearly: (a) *frontier Blackwell/Rubin scarcity is real but
temporary and accrues to whoever holds NVIDIA allocation and gigawatt power — not to a micro-
entrant subleasing through one partner*; (b) *prior-generation rents are in secular decline,
which is where a small operator's fleet rapidly lands as the next generation ships*. The
demand side of the market is robust; it is the **supply side of competing capacity** that
dooms the entrant economics. High demand with a wave of new supply behind it and a fast-
depreciating asset is the worst possible setup for a price-taker.

For the **legacy footwear** business the model is also clear but no longer investable: it is a
demonstrated multi-year demand contraction plus chronic firm-level over-supply (annual write-
downs, margin collapse on clearance). It is being run off and sold; the model simply confirms
why (DOSSIER §1, §4).

Net: the Supply & Demand lens reads **negative** on the thing being valued. It does not
single-handedly prove permanent capital loss (other models — inversion, incentives, the
death-spiral convertible — carry the going-concern/ruin argument), but it removes the one
thing a bull needs: a credible path to durable pricing power for NewBird's capacity. There
isn't one. [JUDGMENT, well-evidenced.]

## Red flags

| Flag | Severity | Rationale |
|---|---|---|
| Forward capacity glut queued behind today's prices (21.5 GW announced / 6.3 GW underway for 2027; analysts warn of multi-year overcapacity) | high | Classic cobweb; new supply lands as the entrant's fleet ages — collapses rents over the 48–60-mo capital-recovery window. |
| Asset depreciates ~80% of rent-earning power within ~12 months of prime ("Mid-Life Cliff") | high | NewBird buys at the top of the price; residual & rent both fall fast; thin 14–16% post-dep margins can flip negative. |
| Cannot lock forward price for compute revenue | high | Entrant is a pure price-taker into a deflating spot market — no hedge, no contracted backlog beyond one ~$2.75M lease. |
| Legacy product demand −48.8% from peak, −30.5% YoY; gross margin to 27.8% on clearance | medium | Confirms the operating demand engine is dead; relevant to residual/wind-down value, not the forward bet. |
| Chronic inventory over-supply (write-downs every year 2022–2025) | medium | Firm-level bullwhip/over-production history; signals poor demand-sensing — now inherited by a team with no GPU-demand expertise. |
| Near-term Blackwell scarcity could *temporarily* flatter rents | low (counter-flag on our own read) | Keeps me from over-claiming a glut *today*; scarcity accrues to allocation/power holders, not a micro sub-leaser. |

## What would flip this read (disconfirmers)

- **Durable, contracted demand for NewBird specifically:** multi-year take-or-pay leases at
  fixed prices on its GPUs (beyond the single ~$2.75M QumulusAI lease), insulating it from
  the spot cobweb. None disclosed (DOSSIER §3, gap #3).
- **Sustained rising or stable GPU rents through 2026–2028** rather than the projected
  decline — i.e., the bullwhip *not* arriving and frontier scarcity persisting for years. The
  weight of current data (Ornn/IntuitionLabs/SemiAnalysis forward calls, AWS cuts, 21.5 GW
  pipeline) points the other way.
- **Privileged supply position** — direct, large NVIDIA allocation and self-owned gigawatt-
  scale power (the only sustainable cost advantage per DOSSIER §4) — which NewBird conspicuously
  lacks; capacity flows through one partner.
- **Evidence the depreciation curve is flattening** (GPUs holding rent-earning value 5+ years),
  which would lengthen capital recovery and defang the cobweb. Current secondary data show the
  opposite (Mid-Life Cliff).
- On the *legacy* side: a re-acceleration of footwear demand and clean sell-through — moot, as
  the business is being sold.

## Verdict

| | |
|---|---|
| **Signal** | negative |
| **Relevance** | 4 |
| **Strength** | 4 |
| **Conviction** | 4 |
| **Fatal flaw?** | no — Supply & Demand is not, by itself, fatal-capable here; it removes pricing-power but the ruin case belongs to inversion/incentives/accounting. |

**Bottom line:** Both supply/demand stories read against the buyer. The legacy product is in a
demonstrated multi-year demand collapse with chronic over-supply of its own inventory (annual
write-downs; margin cut to 27.8% on clearance) — it is being run off, not repaired. The
forward NewBird GPU business is a textbook cobweb/capital-cycle trap: near-term Blackwell
scarcity is real but temporary and is captured by allocation- and power-holders, while a wall
of 2027 capacity (21.5 GW announced vs 6.3 GW underway) and a fast-depreciating "Mid-Life
Cliff" asset point to falling rents across exactly the 48–60-month window a sub-scale, price-
taking entrant needs to recover capital. The model strips away any durable pricing-power
thesis for the thing the $4.18 price is actually paying for.

Sources: SemiAnalysis (newsletter.semianalysis.com/p/the-great-gpu-shortage-rental-capacity) · IntuitionLabs (intuitionlabs.ai/articles/h100-rental-prices-cloud-comparison) · CryptoBriefing/Ornn AI (cryptobriefing.com/h100-rental-prices-slide-ornn-ai) · FinancialContent/TokenRing (Blackwell sold out / 3.6M backlog) · Tech-Insider (US AI datacenter capacity delays) · Gad Allon Substack (AI infra bullwhip) · DCD (chipping away at neocloud economics) · HashrateIndex (used-GPU depreciation) · Stanley Laman (GPU useful life) · DOSSIER §§1–5.
