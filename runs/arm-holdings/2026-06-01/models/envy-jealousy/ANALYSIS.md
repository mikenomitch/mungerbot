<!--
  Per-model write-up. One mental-model agent fills this in at
  models/<key>/ANALYSIS.md. Keep it tight: the model's lens, the evidence, the
  honest verdict. Cite facts; mark judgments as judgments.
-->
# Envy / Jealousy — Arm Holdings plc (ARM)

**Discipline:** Psychology  ·  **Intensity:** lens  ·  **As-of:** 2026-06-01

## What this model predicts

Munger's claim: *"It is not greed that drives the world, but envy."* Envy/jealousy
is the tendency to act not toward an absolute payoff but **relative to a rival's
position** — to do something because a competitor did it, or to covet the margin/
position a peer enjoys, even when the move destroys value. Applied to an industry,
the prediction is sharp and **testable**:

- **If this market is governed by envy**, we should see **irrational "me-too"
  capital allocation**: competitors copying each other's moves (capex, product
  launches, vertical integration) because rivals did, not because the unit
  economics independently justify it — and the copying should **compete away
  industry returns** (price wars, capacity gluts, margin compression, fragmentation
  of a profit pool).
- We should see **incumbents reaching for the position of richer-margin neighbors**
  (a toll-collector enviously moving into its own customers' business to grab the
  bigger dollar) in ways that **invite retaliation and destroy the very neutrality
  that made the toll defensible**.
- We should see **the subject company's own returns** either (a) protected by a
  structural moat that envy can't erode, or (b) flattered today by an envy-fueled
  spending bubble that will mean-revert.
- And — the **mirror discipline** for a Psychology model — we must check **our own
  envy**: is *the market* (and are *we*) bidding ARM up out of FOMO/"everyone owns
  the AI winner" relative-positioning rather than absolute cash-flow math?

A **favorable** envy read for ARM would be: rivals' me-too behavior can't touch
Arm's economics; Arm itself allocates capital on absolute ROIC, not to keep up with
peers; and the market price reflects cash flows, not crowd envy. A **negative**
read is the opposite on each.

## Evidence

**Supporting** (envy IS a material, return-destroying force in this market):

- **Me-too hyperscaler CPU race.** Every major hyperscaler has now launched *its
  own* Arm-based CPU in rapid succession — AWS Graviton -> Google Axion -> Microsoft
  Cobalt -> Nvidia Grace/Vera; "~50% of compute shipped to top hyperscalers in 2025
  is Arm-based." [DOSSIER section 4.1] Trade coverage frames it explicitly as a
  keeping-up dynamic — *"Every Major Hyperscaler Is Moving To Arm"* — with each
  player launching to match the others. [Benzinga 2026-04; Tech Monitor, "Google
  joins fellow 'Big 3' hyperscalers in launching its own Arm-based CPU"]
- **Arm's own merchant-silicon pivot is, in part, position-envy.** Arm abandoned
  ~35 years of IP-only neutrality to sell a finished chip (Arm AGI CPU, Mar-2026),
  with sell-side framing the rationale as escaping *"pennies per chip"* in royalties
  to capture *"thousands of dollars"* in silicon margins. [Motley Fool / Benzinga
  via TIKR 2026-03; DOSSIER section 1] That is the toll-collector coveting the margin
  its own customers earn — and it **directly competes with its royalty-paying
  customers** (Nvidia/AWS/Google/MS/Broadcom/Marvell). [DOSSIER section 4.3]
- **Retaliation is already visible** — the predicted consequence of envy-driven
  channel conflict. Nvidia liquidated its remaining ARM equity stake (Feb-2026) and
  Arm is now a *"direct competitor to Nvidia's own Grace CPU."* [FinancialContent
  2026-03] Qualcomm acquired RISC-V designer **Ventana Micro (Dec-2025)** explicitly
  as a *"hedge against its ongoing licensing disputes and the rising costs of ARM's
  intellectual property,"* giving it a *"permanent, royalty-free foundation."*
  [Tom's Hardware 2026; Technologies.org 2026] Arm *"shed billions in market
  capitalization"* on that signal. [TechRadar 2026]
- **The macro AI-capex arms race is a textbook envy/FOMO bubble** that inflates
  Arm's royalty base. Hyperscaler capex ~$635-725B in 2026, **+67-74% YoY**,
  increasingly **debt-funded** (>$400B debt issuance expected); AI assets depreciate
  ~20%/yr -> ~$400B/yr depreciation, *"more than their combined profits in 2025."*
  [Futurum 2026; Introl 2026; DOSSIER section 5] *"Three of the four hyperscalers
  lost market value"* after recent capex guidance — the market itself is flagging
  overbuild. [BloombergNEF 2026] Polymarket "AI bubble burst by EOY 2026?" sits
  **~24% YES.** [DOSSIER section 7]
- **Our-own-envy mirror is flashing red.** ARM closed **$408.85 (+15.7% in a day,
  ~doubled in two weeks)** on a **partner's** (Nvidia's) product launch, not on its
  own guidance — which management *declined to raise.* [DOSSIER section 3, section 7]
  The stock trades **above the average sell-side target** (~$227-241); *"targets are
  following price, not leading it."* [DOSSIER section 7] IV Rank/Percentile = 100,
  beta 3.78. This is relative-positioning ("must own the AI-CPU winner"), not
  absolute-value, buying.

**Disconfirming** (envy is NOT (yet) destroying Arm's core returns — the moat
absorbs it):

- **The hyperscaler me-too race is largely *rational*, not irrational envy.** The
  custom Arm CPUs deliver real, independently-justified economics: Graviton4 ~168%
  better LLM-inference vs AMD and ~220% better price-performance vs x86; Axion ~60%
  better energy efficiency vs x86. [aarch64.cloud benchmarks; AOL 2026-04] When
  copycat behavior is grounded in genuine TCO advantage, it is *competition*, not
  envy — and critically, **most of these me-too chips still pay Arm a royalty**, so
  the "price war" enriches the toll-collector rather than destroying its returns.
- **No price war in Arm's core toll.** The opposite is happening: Arm has *raised*
  effective take rates up the royalty ladder (Armv8 ~2.5-3% -> Armv9 ~5% -> CSS ~10%+
  of ASP). [DOSSIER section 4.2] Gross margin is **97.5% and rising.** [DOSSIER
  section 2.1] Envy in the *end* market (chip vendors fighting) has not compressed
  Arm's *upstream* IP economics in smartphones or general-purpose servers.
- **RISC-V — the purest envy/resentment substitute — is not yet displacing Arm
  where it matters.** It wins in royalty-sensitive MCU/IoT and auto-MCUs and in
  China (export-control-driven), but *"NOT yet displacing Arm in smartphones or
  general-purpose servers."* [DOSSIER section 4.3] The flight-from-the-toll is real
  at the margin (PRC ~19% of revenue is most exposed) but has not yet broken the core.

**Independent research run for this lens** (cited inline above): hyperscaler
custom-CPU benchmarks (aarch64.cloud), the "every hyperscaler is moving to Arm"
framing (Benzinga/AOL/Tech Monitor), the Qualcomm-Ventana RISC-V-as-hedge thesis
(Tom's Hardware/Technologies.org/TechRadar), Arm's own "pennies vs thousands"
margin-envy framing (FinancialContent/TIKR), and the AI-capex-bubble sizing
(Futurum/Introl/BloombergNEF).

## Reasoning

The envy lens cuts **two ways that point in opposite directions**, and getting the
verdict right means separating *where the envy lands*.

**1. Envy is NOT destroying Arm's core IP economics today — the moat absorbs it.**
The most return-destroying form of envy (a price war that competes away margins) is
absent from Arm's toll booth. The hyperscaler "me-too" CPU race, although it *looks*
like classic imitation, is mostly rational TCO-driven competition, and — the key
asymmetry — **the combatants pay Arm to fight**. A war fought with Arm-licensed
weapons enriches Arm. Gross margins at 97.5% and a *rising* royalty ladder are the
empirical proof that envy-in-the-end-market has not yet reached envy-in-the-toll.
This is why the *core* envy signal for the licensing business is only **mildly
negative / mixed**, not fatal. (Judgment.)

**2. But Arm has now *imported* envy into its own income statement — the
self-inflicted wound.** The decisive new fact is that Arm itself is the envious
actor. Coveting the "thousands of dollars" margins its customers earn on finished
silicon, it broke the neutrality that made its toll uniquely defensible. The
predicted consequences of position-envy are *already observable*: Nvidia exited the
stock and is now a competitor; Qualcomm is funding a royalty-free RISC-V escape
hatch; an FTC/EU/KFTC antitrust thicket has opened (DOSSIER section 8); and the
model shift is compressing Arm's *own* margins (non-GAAP operating margin
46.7%->43.0%, capex to 11% of revenue, R&D to 56%). [DOSSIER section 2.1, section 8]
This is the rare case where the mental model indicts the *subject's* behavior, not
just rivals': a wide-moat toll-collector is voluntarily trading a 97.5%-margin,
capital-light, *neutral* position for a 40-50%-margin, capital-intensive,
*conflicted* one — to keep up with / grab what its neighbors have. Munger would call
this a textbook envy-driven unforced error. Whether it pays off is unproven; the
*neutrality* it spends is not recoverable. (Judgment.)

**3. The macro bubble flatters today's royalty base.** The AI-capex surge is itself
an envy/FOMO arms race (every hyperscaler must out-spend the others; debt-funded;
depreciation already exceeds profits). Arm's royalties **lag and are buffered but
not decoupled** [DOSSIER section 5]; Q4 royalty growth already decelerated to +11%
[DOSSIER section 8]. So part of the revenue the market is capitalizing at ~88x
EV/sales is the *output of other people's envy* — the least durable kind of demand.
(Judgment.)

**4. The mirror discipline — check OUR/the market's envy — is the loudest signal.**
This is where the Psychology model earns its keep. ARM doubled on a *partner's*
launch while management declined to raise guidance, and now trades *above* the
average analyst target, with targets chasing price. [DOSSIER section 3, section 7]
That is the behavioral fingerprint of envy/FOMO: positioning relative to "the crowd
owns the AI winner" rather than to cash flows. The valuation lane independently finds
the price exceeds the top of intrinsic value under *every* method (MoS ~ -68% at
midpoint, ~ -43% even at the bull ceiling). [DOSSIER section 3.3] The envy lens
supplies the *mechanism* for that gap: a crowd bidding on relative status, not
absolute value. For a Munger framework whose default is "no," this is a strong reason
to distrust the entry price even though the underlying business is good.

**Relevance:** moderately high. Semiconductors are an unusually envy-prone industry
(visible rivals, winner-take-most narratives, capacity arms races), and ARM sits at
the intersection of three envy dynamics (hyperscaler me-too, RISC-V resentment, AI
capex FOMO) *plus* is now an envious actor itself. The lens is not a stretch here.

**Where the model over-reaches:** the hyperscaler copying is mostly rational, and
Arm's core moat is real and uncompressed — so I must not over-weight envy as if it
were already destroying the *licensing* franchise. It isn't. The damage is
(a) prospective, in the self-inflicted neutrality loss, and (b) in the *entry
price*, not the *business quality*.

## Red flags

| Flag | Severity (low/med/high/fatal) | Rationale |
|---|---|---|
| Arm imports envy into its own P&L — abandons neutral toll for conflicted merchant silicon to grab customers' margins | **high** | Trades a 97.5%-margin neutral moat for a 40-50%-margin conflicted one; invites Nvidia/Qualcomm retaliation + FTC/EU/KFTC probes; neutrality is non-recoverable. [DOSSIER section 1, section 4.3, section 8] |
| Market/our-own envy in the price (FOMO melt-up, doubled on a partner's launch, trades above analyst targets) | **high** | The entry multiple is set by relative-positioning, not cash flow; MoS negative under every method. [DOSSIER section 3, section 7] |
| Royalty base flattered by an envy/FOMO AI-capex bubble (debt-funded, depreciation > profits) | **med** | Part of capitalized revenue is the output of others' envy — least durable demand; royalty growth already decelerating to +11%. [DOSSIER section 5, section 8] |
| RISC-V as resentment-driven flight from the toll (Qualcomm-Ventana hedge) | **med** | Caps Arm's pricing leverage at the top; most acute in ~19%-of-revenue China; not yet core-displacing. [DOSSIER section 4.3] |

## What would flip this read (disconfirmers)

- **Toward more positive:** Arm proves the AGI-CPU is *incremental* (net-new
  workloads, lead customers like Meta expanding) rather than cannibalizing royalty
  customers, *and* royalty ASPs keep climbing the ladder with no customer defection
  — showing the "envy move" was actually accretive, not destructive. Royalty growth
  re-accelerates above ~20%, refuting the bubble-flattering read.
- **Toward more negative (envy is winning):** a named royalty customer publicly
  diversifies away from Arm in response to the channel conflict (a Nvidia/Qualcomm/
  hyperscaler RISC-V or in-house-ISA migration in *smartphones or general servers*,
  not just MCUs); an FTC/EU/KFTC remedy forces structural separation; or AI capex
  visibly rolls over and Arm royalties follow, exposing the bubble-base.
- **On our-own-envy:** if the price fell back toward the ~$130 base-case intrinsic
  value (DOSSIER section 3.3), the FOMO premium would have unwound and this lens
  would shift toward neutral on the *price*, leaving only the structural
  channel-conflict concern.

## Verdict

| | |
|---|---|
| **Signal** | negative |
| **Relevance** | 3 |
| **Strength** | 3 |
| **Conviction** | 3 |
| **Fatal flaw?** | no — envy/jealousy is not a fatal-capable model in this framework, and while it indicts both the entry price and a self-inflicted strategic error, I found no envy-driven path to *permanent capital loss or fraud* on its own. |

**Bottom line:** Envy is a real and material force around ARM, but it lands in two
places that hurt the *investment* more than the *business*: (1) Arm has itself
become the envious actor — abandoning a 97.5%-margin neutral IP toll to grab its
customers' silicon margins, importing channel conflict, antitrust, and margin
dilution that are already drawing retaliation (Nvidia exit, Qualcomm-Ventana RISC-V
hedge); and (2) the market is pricing ARM on FOMO/relative-positioning (doubled on a
partner's launch, above analyst targets, MoS negative under every method) rather than
cash flow. The core licensing moat has so far *absorbed* end-market envy — the
me-too hyperscaler chips mostly pay Arm to fight — so this is **mildly-to-clearly
negative, not fatal**: a strong caution on the entry price and the strategic pivot,
consistent with the framework's default of PASS.
