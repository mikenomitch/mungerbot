# Economies of Scale — Arm Holdings (ARM)

**Discipline:** Economics  ·  **Intensity:** deep  ·  **As-of:** 2026-06-01

## What this model predicts

Economies of scale exist when **unit cost falls (or the offering strengthens) as
volume grows**, creating a self-reinforcing cost/quality advantage that a
sub-scale rival cannot replicate. Munger treats scale as a real but *bounded*
advantage — it can compound into a moat (Walmart, GEICO), but past a point it
inverts into **diseconomy**: bureaucracy, dis-incentivized agents, complexity,
and territorial behavior that *raise* unit cost. The discipline is to ask which
regime a business is in, and which direction it is trending.

For Arm specifically, the model makes four testable predictions. **If favorable
scale economics dominate, we should observe:**

1. **Near-zero marginal cost of supply.** Arm's product is design IP; once a core
   is designed, each additional chip that ships pays a royalty against a cost of
   reproduction of ~$0. Gross margin should be ~98% and *rise* with volume.
2. **Fixed-cost amortization (the supply-side scale engine).** Arm's large,
   rising R&D should be spread across a vast and growing installed base
   (>325B cumulative chips), so **R&D per chip and per dollar of royalty should
   fall** even as absolute R&D climbs. A customer designing a CPU from scratch
   should face a *far higher* per-unit design cost — Arm's relative unit-economics
   advantage.
3. **Demand-side scale / ecosystem network effect.** >20M developers and a
   software base ported to Arm should make the *offering itself* stronger as it
   grows — a flywheel where more chips → more software → more chips. (This overlaps
   the Network-Effects model; here I treat it only as a *scale-driven* strengthening
   of the offer.)
4. **Operating leverage.** With a fixed cost base and ~98% incremental margins,
   revenue growth should convert to *expanding* operating margin.

If **diseconomies** dominate instead, we should see R&D outrunning revenue,
operating margin compressing despite growth, capital intensity rising, and the
business losing its cost-structure advantage as it scales into new (lower-margin,
more bureaucratic, capital-heavy) activities.

## Evidence

**Supporting — the classic scale economics are real and largely intact (cited):**

- **Near-zero marginal cost / ~98% gross margin.** FY2026 gross margin **97.5%**,
  up from 97.0% (FY25) and 95.2% (FY24); cost of sales was only **$121M on $4,920M
  revenue** [Dossier §2.1, Arm FY2026 6-K]. "Because the cost of reproducing and
  distributing intellectual property is virtually zero, Arm consistently posts
  world-class profitability… Each new chip shipment generates profit with minimal
  incremental cost" [ainvest.com, "Arm's Royalty S-Curve Accelerates"]. This is the
  textbook supply-side scale signature: the *next* unit costs essentially nothing
  to serve, so margin rises with volume. **Prediction 1 confirmed.**
- **Fixed-cost amortization is the load-bearing scale advantage.** A chip designer
  building a CPU from scratch faces NRE design cost of **~$249M at 7nm, $449M at
  5nm, $581M at 3nm, and ~$724M at 2nm** [patentpc.com; futunn.com; LinkedIn/Mila
  Liu, all citing SemiEngineering data]. Arm amortizes its single design across
  **>325B cumulative chips and >20M developers** [Dossier §1] and "can charge each
  licensee only a fraction of what it would cost them to develop internally"
  [openpr.com, Semiconductor IP Market]. This is the genuine engine: Arm converts
  one rising fixed cost into a near-zero per-chip cost for thousands of licensees —
  a *shared-cost* economy of scale. **Prediction 2 confirmed** (with a caveat below
  on who is *catching* the amortized cost).
- **Demand-side ecosystem scale (the flywheel).** Arm's two-sided ecosystem
  "unites software developers and hardware manufacturers… one of the semiconductor
  industry's strongest and most durable competitive moats… more developers attract
  more manufacturers, which then bring in even more developers" [finviz.com/Zacks;
  Globe and Mail; Nasdaq, "ARM's Dual-Sided Network Effect"]. Result: ~99–100% Arm
  ISA in smartphone app processors, ~94% of automakers [Dossier §1, §4.1]. The
  offering *strengthens* with scale — Prediction 3 confirmed, though this is more a
  network-effect than a cost effect (so I down-weight it for *this* lens).
- **The royalty ladder lets scale economics compound *in value* even on flat
  units.** Armv8 ~2.5–3% → Armv9 ~5% → CSS ~10%+ of chip ASP [Dossier §4.2]. So
  Arm captures *more dollars per chip over time* against the same ~$0 marginal
  cost — a value-side complement to volume scale.
- **Scale of R&D as a competitive barrier.** Arm out-invests pure-IP rivals in
  CPU: FY2026 GAAP R&D **$2,776M** (non-GAAP $1,911M, +43% YoY) [Dossier §2.1;
  investing.com Q4 transcript]. CEVA and Imagination cannot fund a comparable CPU
  roadmap; this is scale buying an R&D moat in the CPU niche.

**Disconfirming — the scale advantage is *narrowing*, and the company is
deliberately walking *out* of its highest-scale-economics regime (cited):**

- **R&D is outrunning revenue — operating leverage is running in reverse.** GAAP
  R&D rose to **56% of revenue** (from ~49% FY25; was ~31% FY22) [Dossier §2.1].
  GAAP operating margin **fell 20.7% → 18.3%** YoY *despite* +23% revenue, and even
  **non-GAAP operating margin fell 46.7% → 43.0%** [Dossier §2.1; investing.com Q4
  transcript: non-GAAP opex +33% YoY]. With ~98% incremental gross margins,
  positive operating leverage was the model's core prediction — and the data show
  the **opposite**. **Prediction 4 disconfirmed for FY2025–FY2026.**
- **The silicon pivot moves Arm *out* of its capital-light, high-scale-economics
  business into a lower-margin, capital-heavy one.** Arm launched its own finished
  data-center chip (Mar-2026) and is moving toward **40–50% gross-margin merchant
  silicon** vs its **>95% IP-licensing** margin [Dossier §4.3, §8(6); Morgan
  Stanley downgrade OW→EW 2026-04-07]. Capex inflected from ~$92M (FY24) to
  **$545M = 11% of revenue** (was 1–3%); PP&E doubled to $772M [Dossier §2.2]. The
  silicon business also has the **opposite** scale curve: it now carries inventory,
  foundry-capacity constraints, and per-unit COGS — and is **supply-capped** (~$1B
  capacity vs >$2B demand) [Dossier §1, §8(7)]. *Arm is voluntarily diluting its own
  economies of scale.*
- **"Owner" free cash flow has been ~zero-to-negative for three years** once SBC
  (~$1,052M, ~21% of revenue) is charged as the real labor cost: **−$39M (FY24),
  −$642M (FY25), −$73M (FY26)** [Dossier §2.2]. Scale is *not* dropping to owner
  cash flow — the supposed operating leverage is being consumed by labor (equity)
  and now capex. This is the single most important disconfirmer for the "scale →
  cash machine" thesis.
- **Only a *thin* ROIC spread.** Clean ROIC **~13–15% vs ~10.5% WACC** [Dossier
  §2.4]. True scale-moat economics (Munger's Walmart/See's) throw off 30%+ returns
  on capital; Arm's spread is positive but **not** wide-moat — i.e., scale is *not*
  translating into the durable supernormal returns the model would predict if the
  advantage were dominant and uncontested.
- **A competing cost structure (RISC-V) pools development costs *across the
  industry* and undercuts the upfront-fee leg of Arm's scale model.** RISC-V is a
  royalty-free, open ISA whose shared/open development "can drive down chip
  development costs — often by as much as 50%" [patentpc.com; electronicdesign.com,
  "Arm Eases Upfront Licensing Fees to Head Off RISC-V"]. Arm has *already cut
  upfront fees* in response — direct evidence that its scale-derived pricing power
  is being competed away at the margin, hardest in the **~19%-of-revenue PRC market**
  [Dossier §4.3]. RISC-V is an *alternative scale economy* (industry-wide cost
  pooling) attacking Arm's *firm-level* one.
- **Bureaucracy/diseconomy markers.** Arm grew to **8,330 employees**
  (2026) [Owler; macrotrends], reorganized for the silicon business (a batch of
  **15 new Section-16 insiders all filed Form 3 on 2026-03-18** coinciding with the
  reorg) [Dossier §6], and the CEO now also runs SoftBank Group International — a
  **divided-attention conflict with no disclosed safeguards** [Dossier §6]. None is
  fatal, but they are the textbook early symptoms Munger warns of when an
  organization scales into adjacent, more complex businesses.

**Independent peer unit-economics comparison (my research):**

- **Revenue per employee.** Arm ≈ **$591K** ($4.92B / 8,330) [stockanalysis.com;
  Owler]. Healthy, but *not* exceptional for an IP licensor — and it has fallen
  on a *forward* basis as headcount and R&D climb faster than revenue. For
  reference, the EDA/IP "big three" run **R&D at 30–35% of revenue**
  [embedded.com]; Arm's **GAAP R&D is 56%** and even non-GAAP ~39% — Arm is now a
  **materially heavier R&D spender per revenue dollar than its closest IP peers**,
  the wrong direction for a scale story.
- **Operating margin vs peers.** Cadence runs **~44% non-GAAP operating margin**
  on **>85% gross margin** with S&M only ~20% of revenue [koalagains; CDNS 8-K
  FY2025]; Synopsys' Design Automation segment ~38–41% [SNPS 8-K]. Arm's non-GAAP
  operating margin (**43.0%, falling**) is now *roughly in line with — not above —*
  Cadence, **despite Arm's ~98% gross margin** (vs Cadence's ~85%). That gap
  between a 13-point gross-margin *lead* and a *level/lagging* operating margin is
  the clearest single proof that Arm's scale is **not** currently converting into
  superior operating economics — its cost base (R&D + the silicon build) is eating
  the structural gross-margin advantage.
- **Direction matters more than level.** Cadence's and Synopsys' EDA margins are
  *stable-to-rising* on ~10–15%/yr growth [wing.vc]; Arm's are *compressing* on
  +23% growth. A scale advantage that erodes *as the company grows* is the signature
  of a business entering, not exiting, the diseconomy regime — at least through the
  current investment cycle.

## Reasoning

This is a **genuinely high-relevance** model for Arm, because Arm is close to the
purest expression of supply-side scale economics in public markets: a single
fixed design cost amortized across hundreds of billions of units at ~zero marginal
cost. Predictions 1–3 hold cleanly. The amortization argument (Prediction 2) is
the real moat: a customer building a 3nm CPU eats a ~$581M NRE; an Arm licensee
rents the same design for a fraction. That is a durable, structural cost advantage
the model is built to identify, and it is intact.

But the model also insists on asking **which direction unit economics are
trending and whether the firm is exiting its high-scale regime — and here Arm
fails the test it should be passing.** Three things break the "scale → expanding
returns" prediction:

1. **The fixed-cost denominator is shrinking faster than the numerator grows in
   the near term.** R&D is up 43% (non-GAAP) while revenue is up 23%; the
   amortization base (royalty-bearing chips) is growing only modestly (royalty
   revenue +21%, and Q4 royalty growth decelerated to **+11%** [Dossier §8(8)]).
   When the fixed cost you must amortize grows faster than the volume you amortize
   it over, **per-unit economics deteriorate** — the scale engine runs backward.
   Management's bull case is that this reverses as CSS designs convert to royalties
   ("development costs get distributed across a larger revenue base" [tikr.com]) —
   but that is a *forward promise*, not realized scale, and it depends on winning
   the data-center battle against customers it is now also competing with.

2. **Arm is deliberately leaving its highest-economies-of-scale business.** The
   move from ~98%-margin, capital-light IP to ~40–50%-margin, capex-heavy,
   inventory-bearing, *supply-capped* merchant silicon is a strategic choice to
   trade the best unit economics in the industry for a TAM expansion. Whether that
   is wise is the Capital-Allocation model's job; for *this* lens, the verdict is
   blunt: **the silicon pivot reduces blended economies of scale** (lower marginal
   margin, real COGS, foundry dependence, working capital) and imports a *different,
   worse* cost curve. The capex jump to 11% of revenue is the receipt.

3. **An alternative scale economy is attacking Arm's.** RISC-V pools R&D across the
   *entire industry* (open ISA, royalty-free) — a broader cost-sharing economy than
   any single firm can match on the *upfront-fee* dimension. It has already forced
   Arm to cut upfront fees and is winning in MCU/IoT and auto-MCU. It does not yet
   threaten Arm's installed-base/ecosystem scale in phones or general servers (the
   demand-side flywheel still holds), but it caps Arm's *pricing-power* expression
   of scale at the low end and in China.

**Net:** the *structural* scale advantage (Predictions 1–2) is real and is the best
thing about the business — it is why ~98% gross margins and the royalty toll booth
exist. But the *dynamic* picture (Prediction 4) is the opposite of what a healthy
scale flywheel produces: **operating margin compressing, owner-FCF ~zero, ROIC only
a thin spread, R&D-intensity well above peers and rising, and the company migrating
into a lower-scale business.** Holding the discipline of the model honestly, the
signal is **mixed, leaning cautious**: a powerful latent scale engine whose *current
trajectory* is diseconomy, not economy. Importantly for the decision layer, **none
of this is a path to permanent capital loss** — Arm is not over-leveraged and its
core IP economics remain world-class — so this model does **not** flag a fatal flaw.
The damage this model does to the thesis is to **deny the bull's central premise**:
that scale will imminently produce gushing operating leverage and cash. The evidence
says it is doing the reverse right now, and the price (~231x non-GAAP earnings,
[Dossier §3.1]) is paid as if the leverage were already arriving.

**Check on our own analytical bias.** The seductive error here is to over-credit the
~98% gross margin and conclude "obvious scale moat → buy." The discipline of the
model is precisely to look one layer down at *operating* economics and *direction*,
where the gross-margin headline is contradicted. I have weighted the disconfirmers
(R&D-intensity, margin compression, owner-FCF, the silicon-pivot cost curve)
deliberately so as not to let the spectacular top line launder a deteriorating
operating reality.

## Red flags

| Flag | Severity | Rationale |
|---|---|---|
| Operating margin compressing despite +23% revenue (GAAP 20.7%→18.3%; non-GAAP 46.7%→43.0%) | high | Direct contradiction of the scale-leverage prediction; the engine is running backward this cycle. |
| GAAP R&D at 56% of revenue (non-GAAP ~39%) vs EDA/IP peers' 30–35%, and rising faster than revenue | high | Fixed-cost denominator growing faster than the amortization base — per-unit economics deteriorating. |
| Voluntary migration into ~40–50%-margin, capex-heavy, supply-capped merchant silicon (capex 11% of revenue) | high | Arm is exiting its highest-economies-of-scale regime by choice, diluting blended unit economics. |
| Owner-FCF (FCF less SBC) ~zero-to-negative for 3 years (−$39M / −$642M / −$73M) | high | Scale is not dropping to owner cash; "operating leverage" is consumed by equity comp and now capex. |
| Clean ROIC ~13–15% vs ~10.5% WACC — only a thin spread | med | Scale is not producing wide-moat (30%+) returns the model would predict if the advantage were dominant. |
| RISC-V pooled-cost alternative forcing upfront-fee cuts, esp. ~19%-of-revenue China | med | A competing, industry-wide scale economy capping Arm's pricing-power expression of scale at the low end. |
| Reorg/bureaucracy markers (15 new Section-16 insiders 2026-03-18; CEO split across Arm + SoftBank Intl) | low | Early Munger-style diseconomy symptoms as the org scales into a more complex, multi-business shape. |

## What would flip this read (disconfirmers)

- **Operating leverage re-appears:** R&D growth decelerates below revenue growth
  and non-GAAP operating margin re-expands back toward/above ~47% over 2–4 quarters
  — evidence the CSS→royalty amortization story is real and scale is reasserting.
- **Royalty volume/ASP re-accelerates** (royalty growth back to mid-20s% with CSS
  attach rising), re-growing the amortization base faster than R&D — restoring
  falling per-unit cost.
- **The silicon business proves *accretive* at scale** (data-center chip reaches
  high volume at gross margins well above the feared 40–50%, with capex/revenue
  normalizing) — converting the pivot from a diseconomy into a new scale curve.
- **Owner-FCF turns durably positive** (SBC normalizes toward peer ~5–8% of
  revenue while margins hold) — proof that scale finally drops to owners, not just
  employees.
- **RISC-V stalls** and Arm restores upfront-fee pricing power — evidence the
  firm-level scale economy is not being competed away.

A sustained reversal on the first two would move this signal from mixed toward
positive; continued compression with the silicon build consuming cash would move it
toward negative.

## Verdict

| | |
|---|---|
| **Signal** | mixed |
| **Relevance** | 5 |
| **Strength** | 4 |
| **Conviction** | 4 |
| **Fatal flaw?** | no — the scale advantage is narrowing and currently inverting toward diseconomy, but Arm's core IP economics remain world-class and there is no path to *permanent capital loss* from this model alone. The valuation risk this creates is real but is the Valuation/Margin-of-Safety model's call, not a scale-model fatal flaw. |

**Bottom line:** Arm owns one of the purest supply-side scale advantages in public
markets — a single design cost (rising to ~$581M at 3nm for those who build from
scratch) amortized across >325B chips at ~zero marginal cost, yielding ~98% gross
margins and a real ecosystem flywheel. **But the dynamic evidence runs the wrong
way:** operating margin is compressing despite +23% growth, R&D-intensity (56% GAAP)
now exceeds peers and is *rising*, owner free cash flow has been ~zero for three
years, ROIC is only a thin spread over WACC, and management is voluntarily migrating
into a lower-margin, capex-heavy merchant-silicon business — i.e., *out of* its
best-scale regime. The model's central prediction (scale → expanding operating
leverage and cash) is being **disconfirmed right now**, even as the stock is priced
as if that leverage had already arrived. A latent scale engine, currently idling in
reverse.
