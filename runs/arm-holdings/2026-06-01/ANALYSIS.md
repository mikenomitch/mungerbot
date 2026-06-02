<!--
  Top-level deliverable for a run. Written by the Decision agent (Portfolio Manager).
  Stands alone: a reader who sees only this file understands the business, the
  call, and exactly why. Decision support only — not investment advice.
-->
# Arm Holdings plc (ARM) — Investment Analysis

| | |
|---|---|
| **Decision** | **PASS** (SELL if held — see note) |
| **Conviction** | **9** / 10 (conviction in the PASS; a BUY is foreclosed) |
| **As-of date** | 2026-06-01 |
| **Current price** | $408.85 / ADS (close 2026-06-01, +15.7% on the day) |
| **Intrinsic value (range)** | ~$30 (bear) – ~$130 (base) – ~$235 (bull ceiling) |
| **Margin of safety** | ≈ **−68%** at midpoint (≈ **−43%** even at the bull ceiling) |
| **Tier** | standard |

> **Thesis in one line:** A genuinely wonderful, non-decaying franchise wrapped in a misaligned control structure and priced where *even the bull case loses money* — the price exceeds the top of every intrinsic-value method, so the default-is-no discipline is emphatically earned.

## Bottom line

Arm designs and licenses the CPU instruction-set architectures that sit under ~99% of smartphones, ~94% of automakers, and a fast-growing share of data-center compute — historically a ~98%-gross-margin, capital-light IP toll booth. The business is **not** decaying: the royalty ladder (Armv8 ~2.5–3% → Armv9 ~5% → CSS >10% of ASP) is real pricing power, R&D is 56% of revenue, and the franchise is crossing critical mass in the data center right now. That is the entire bull case, and the two positive models (critical-mass, use-it-or-lose-it) certify it.

But the latticework returns the cleanest negative convergence it can produce: **21 of the heaviest models across all six disciplines** independently conclude the same thing from independent premises — the **price** is wrong and the **control structure** is fragile. At $408.85 (~231x non-GAAP / ~481x GAAP TTM EPS, ~88x EV/Sales), the forward earnings yield (~0.6%) is *below the 3.68% T-bill*; under every valuation method the price sits *above* the top of the intrinsic-value range; and — the single most damning fact in the file, which the Red Team tried and failed to break — a buyer earns a **negative ~7%/yr 5-year return even if management hits its aggressive FY2031 >$9 EPS plan**. Layered on top is a control structure (SoftBank ~86.4%, 72% of the company pledged against a margin loan with a forced-seller/no-minority-offer tail, 30.5% controller-priced related-party revenue driving the majority of growth, a $645.8M unbilled SoftBank asset). **No position is held, so the call is PASS.** It is a strongly-earned PASS, not a marginal one: the price fails on its own arithmetic before any judgment about the structure or the AGI-CPU pivot is even needed.

## Bull thesis vs. inverted (bear) case

| Bull case | Inverted / bear case (Red Team steelman) |
|---|---|
| Near-monopoly ISA with a >20M-developer ecosystem and prohibitive re-port switching costs; royalty-per-chip *rises* on flat units via the v8→v9→CSS take-rate ladder — the cleanest signature of real pricing power. | **Valuation is unrebuttable.** Forward yield ~0.6% is below the T-bill. Bull DCF = ~$121; bull exit-multiple ($9 FY31 EPS × 45x) = ~$235; both far below $409. You lose money *even if they hit the plan* (−7.4%/yr at a 30x exit). The only winning path needs a ~76x exit multiple in 2031. |
| Crossing critical mass in data center: ~50% of new hyperscaler compute Arm-based, Graviton a multi-year majority of new AWS CPU capacity, CPU:GPU ratio tightening in the agentic era. | **Earnings quality is lower than the tape.** Charge SBC (21% of revenue) as the real labor cost it is and owner-FCF has been ~zero/negative three years. A third of revenue is related-party — controller-priced, partly controller-*funded* ($645.8M unbilled, +384%), controller-*voted*; the majority of FY26 *growth* is non-arm's-length. Not one cent is returned to the float. |
| AGI-CPU pivot (Meta/OpenAI lead customers) could be a *second* toll booth — incremental high-dollar silicon revenue capturing value the IP toll was leaking, not a substitution of the base. | **The structure is a trap.** SoftBank (86.4%) pledged 72% of the company to help fund ~$22.5B of OpenAI commitments; a drawdown can force a sale or change of control with **no offer to the 13.6% minority**. CEO paid on $1T/$1.5T/$2T *market-cap* milestones — paid to feed the multiple, not generate cash. FTC/EU/KFTC probes live; Arm already *lost* the Qualcomm rate fight. |
| A wonderful business compounding at 30%+ can grow into a rich multiple; "expensive" is not, by itself, a thesis. | **Mean-reversion alone is −65% to −75%.** The price (2.7x its 200-DMA, beta 3.78, IV at the 100th percentile, set on a +15.7% melt-up day on a *partner's* Nvidia news while ARM's own record Q4 fell −7.25%) is the unstable variable; mere normalization to a still-rich 60–80x is catastrophic, no bad event required. |

The bull and bear verdicts do not truly conflict — they describe **two different objects.** The positives certify the *business* is alive; almost every negative condemns the *price and the structure*. They agree on the only question that sets a buyer's return.

## The gates

| Gate | Pass? | Reason |
|---|---|---|
| Circle of competence (`in`/`edge`/`out`) | ✗ (`edge`) | We understand the IP-licensing business and the valuation arithmetic cold. We do **not** understand the AGI-CPU unit economics (margin/capex/demand all undisclosed), the SoftBank margin-loan trigger price (cannot quantify where ruin activates), or the $646M unbilled related-party realization (a third of revenue we cannot independently verify). `edge` is plenty to *decline*; disqualifying to *own*. Caps at PASS. |
| No fatal flaw | ✗ | `incentives` set fatalFlaw=TRUE: a controller who simultaneously sets the related-party price, owes the cash, votes the proxy, and consents to auditor changes — a credible *path to permanent loss* (not proven fraud; books are audited clean), plus the 72%-pledge forced-seller tail. The Red Team survived but agreed it is a real *quality + structure* flaw. A live fatal flaw forecloses BUY. |
| Quality (score **6**/10) | ✗ | Moat: wide and widening *at the chip level* but narrowing in *quality/returns at the enterprise level* (98%-GM IP → 40–50%-GM silicon by design). ROIC vs WACC: only ~13–15% vs ~10.5% — a *thin* spread, not 30%+ wide-moat economics, and falling. Management: capable operator, but capital allocation returns nothing to the float and the controller's incentives are milestone/multiple-driven. Below Q_MIN (8). |
| Margin of safety | ✗ | MoS ≈ **−68%** at the ~$130 midpoint; ≈ **−43%** even at the ~$235 bull ceiling. Price exceeds the top of *every* method examined; value stays $25–40 across WACC 10–13%. Far below MOS_MIN (30%) and far past OVERVALUED_SELL (−25%). |
| Convergence / Lollapalooza | ✗ (negative) | Only **2** strong-positive models across **1** discipline-pair, and both disclaim the price. The convergence — 21 strongly-weighted models across **all 6** disciplines — points **negative**, and the Lollapalooza is a **negative** correlated doom-loop. There is no *positive* convergence to clear the BUY gate. |

**Deterministic cross-check** (`config/decision-rubric.js`): inputs `{circleOfCompetence:'edge', fatalFlaws:1, redTeamSurvives:true, qualityScore:6, marginOfSafetyPct:-68, strongPositiveModels:2, disciplinesConverging:2, lollapalooza:'negative', dossierConfidence:3, conviction:9, heldPosition:false}` → **`PASS`**, with all five gates `false`. The first binding trigger in the tree is the live fatal flaw (`fatalFlaws=1`), which routes to PASS for a non-holder. No divergence from the judgment above. **Note on SELL:** the same function returns **`SELL`** if `heldPosition:true` — both because the fatal flaw is live and because MoS (−68%) is well past the −25% overvalued-sell line. So for *any current holder*, the verdict is exit; for a non-holder (our case), it is PASS.

## Valuation & margin of safety

Method: triangulation of a pure FCFF DCF (3 scenarios), an exit-multiple frame off management's FY2031 target, and a reverse-DCF cross-check — all anchored to **$408.85** (the correct as-of close; the run's earlier ~$209 snapshot was stale). Full detail in [`artifacts/valuation.md`](artifacts/valuation.md) and [`artifacts/valuation-data.csv`](artifacts/valuation-data.csv).

- **Reverse-DCF:** to justify EV ~$433.6B from normalized owner-FCF ~$1.0B requires **~35–40% FCF compounding for ~15 years** — beyond any precedent at this scale and beyond management's own plan.
- **Triangulated intrinsic value:** **~$30 bear / ~$130 base / ~$235 bull ceiling.** Under *every* method the price exceeds the top of the range; only the magnitude of overvaluation varies. ⇒ **MoS ≈ −68% midpoint, −43% at the ceiling.**
- **Even-if-they-win (the decisive fact):** hit the FY2031 >$9 non-GAAP EPS plan and a buyer at $408.85 still earns **−10.7%/yr at a 25x exit, −7.4%/yr at 30x, −1.9%/yr at 40x.** To earn 11.5%/yr the market must *still* pay ~76x in 2031.
- **Weakest assumption (stated honestly):** the normalized owner-FCF base (~$1.0B) is depressed by a single peak-capex year (capex 11% of revenue) and a one-time IPO-RSU SBC cliff. Even on a generous normalized ~$2–2.5B owner-FCF, EV/owner-FCF is still ~170–215x — the gap is a *cash-flow-base* problem, not a discount-rate problem, and does not close at this price. This dents a few of the heavy negatives that lean on the *current* depressed figure but does **not** rescue the valuation.

## The Lollapalooza read

**Present: YES. Direction: NEGATIVE.** Not five independent risks — the *same* AI-sentiment shock viewed through six lenses, which *tightens* the bad corner rather than diversifying it (permutations-combinations and gaussian-distribution both flag the axes as positively correlated). The chain:

1. An AI-narrative crack or royalty deceleration (already +27%→+11%) **normalizes** the ~231x / 2.7x-200-DMA / IV-100th-pct / beta-3.78 melt-up multiple — mere normalization to 60–80x is ~−65% to −75% (breakpoints, regression-to-mean, gaussian, contrast, availability, social-proof).
2. The falling ADS price pulls SoftBank's **72%-pledged collateral** toward its undisclosed margin-call band — a reflexive lower-price → lower-collateral → forced-selling spiral that can force a **change of control with no offer to the 13.6% minority** (stress-influence, inversion, redundancy-backup, deprival-superreaction, incentives).
3. The same down-state **exposes the related-party props** ($645.8M unbilled SoftBank asset, 30.5% revenue, self-reported Arm China) and **coincides with the binary legal calendar** (FTC/EU/KFTC structural-separation, Qualcomm Case-2 Q4 CY2026, RISC-V/China).

probability-trees sizes the catastrophe node at ~10% for ~−85%. A real *positive* franchise flywheel exists (royalty ladder × ecosystem lock-in × data-center crossing) but every model reporting it says it is cresting/narrowing and none defends the price — so it cannot power a BUY. Full reasoning in [`synthesis/SYNTHESIS.md`](synthesis/SYNTHESIS.md) §3.

## Key risks & what would change my mind

A PASS at this price is robust; the question is what would re-open the file. Tellingly, nearly every negative model lists the *same two* disconfirmers:

- **Price re-rates to intrinsic value.** A drawdown toward the **~$130 midpoint / ~$200s ceiling** (the stock was ~$150–210 two weeks earlier and traded most of FY26 there) — *and* growth that defends the lower multiple — would restore a margin of safety and warrant a fresh look. At ~$130–200 the entire arithmetic spine changes.
- **The SoftBank pledge + related-party quality are defused.** SoftBank de-levering into strength (secondary sale, margin loan repaid, pledge removed) **and** the $645.8M unbilled asset converting to cash on schedule (retroactively proving arm's-length pricing) would remove the structure flaw and the fatal incentive setup.
- **The AGI-CPU pivot proves margin-accretive.** Disclosed unit economics showing the silicon is *incremental* high-dollar value capture (not 98%→50% margin substitution) — management's explicit bet, and the single biggest swing factor — would invert a large chunk of the qualitative bear case. (Would not, by itself, fix the valuation.)
- **Royalty re-acceleration.** The +11% Q4 print proving a one-quarter comp/timing artifact rather than a trend, with v9/CSS attach and the data-center royalty (already +>100% in Q3 FY26) re-accelerating, would weaken the regression-to-mean leg.

What would *deepen* the negative: an AI-capex rollover (a hyperscaler trims 2027 guidance), an FTC structural-separation consent, a write-down of the unbilled SoftBank asset, or any sign the margin-loan band is being approached.

## Opportunity cost

This is the cleanest part of the case. The heaviest single model (opportunity-cost, weight 125) is decisive on its own: the forward earnings yield (~0.6%) is **below the 3.68% T-bill** — the position is strictly dominated by *cash*, before considering the index, a known compounder, or even a cheaper way to own the same AI-CPU tailwind (NVDA at ~21x forward / ~32x EV-EBITDA captures the actual AI profit-pool head that Arm's pivot is a revealed admission it cannot reach). A buyer here is paying ~5–8x peers' forward P/E and >10x their EV/EBITDA for a business with a *thinner* ROIC-minus-WACC spread. Adding to a low-cost index or holding T-bills clearly dominates. PASS is not a close call against the alternative.

## Position sizing

n/a — PASS (no position). For a current holder, the framework returns SELL (live fatal flaw; price −68% below intrinsic value, past the −25% overvalued line). If anyone were to underwrite a *short*, the Red Team's caution governs: it is a lower-conviction trade than the bear tone implies — a wonderful, accelerating franchise, anchored to a single momentum-day price that could be 30% lower next week, with the ruin leg gated on an undisclosed trigger, and **not** a crowded short (~1.78% of float, ~1.7 days to cover — the smart money is not pressing it). Decline with conviction; do not revile.

## Provenance

- Model scorecard & convergence: [synthesis/SYNTHESIS.md](synthesis/SYNTHESIS.md)
- Pre-mortem / red team: [synthesis/RED-TEAM.md](synthesis/RED-TEAM.md)
- Evidence base: [research/DOSSIER.md](research/DOSSIER.md)
- Deterministic gate check: `config/decision-rubric.js` (run with the inputs above ⇒ PASS)
- Per-model analyses (42 models): `models/<key>/ANALYSIS.md` — fatal-capable gates: incentives (fatalFlaw=TRUE), inversion, redundancy-backup, double-entry-limits; positives: critical-mass, use-it-or-lose-it; heaviest negative: opportunity-cost
- Artifacts (valuation, financials, related-party, competition, sector, leadership, news, crowd): `artifacts/`

<!-- Generated by mungerbot. This is decision support, not investment advice, and
     not an order to trade. A human reviews before any capital is committed. -->
