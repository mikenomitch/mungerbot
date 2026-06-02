<!--
  Per-model write-up. Permutations & Combinations lens over the ARM dossier.
  Cite facts; mark judgments as judgments.
-->
# Permutations & Combinations — Arm Holdings plc (ARM)

**Discipline:** Mathematics  ·  **Intensity:** lens  ·  **As-of:** 2026-06-01

## What this model predicts

Permutations & Combinations is the discipline of refusing the single point forecast.
The future is not one story; it is a **product of independent-ish uncertain variables**,
each with several possible states. The honest object is the *joint outcome space* — the
Cartesian product of those states — and the probability mass spread across it. Munger's
warning (after Pascal/Fermat): the market routinely prices **one favorable permutation**
as if it were the expected value, ignoring that the favorable corner is the *conjunction*
of many things going right at once, whose joint probability is the **product** of the
individual probabilities — a number that collapses fast.

Stated as testable expectations, **if ARM at $408.85 is a defensible price, then:**

1. **The price should correspond to a fat region of the outcome space, not a single corner.**
   If only one joint permutation (everything right simultaneously) clears the price, the
   bet is mispriced by construction.
2. **The favorable corner's joint probability should be non-trivial** — not a sub-1% tail.
   Conjunction is multiplicative; six favorable coin-flips at ~50–65% each multiply to a
   few percent, and that is *before* the more adverse axes.
3. **The probability-weighted value across the whole space should be at least near the price.**
   A point estimate (the bull narrative) is only legitimate if it approximates the mean of
   the distribution, not its 99th percentile.
4. **The "scenarios the market is ignoring" should be immaterial.** If large, plausible
   regions of the space (cycle correction, antitrust remedy, RISC-V cap, multiple
   normalization, SoftBank forced-seller) are simply absent from the price, the price is a
   narrative, not an expectation.

If those hold, signal is positive. If the price is a thin corner and the mass sits far
below it, signal is negative.

## Evidence

**Supporting (that ARM has many *favorable* states to combine — the bull's raw material):**

- Multiple genuinely independent growth vectors exist: royalty-ladder climb (Armv8 ~2.5–3%
  → v9 ~5% → CSS ~10%+ of ASP; v9 attach target 60–70%), data-center share gains (Arm 17.7%
  of total server-CPU **units** Q1'26, up from 11.5% YoY), and the new AGI-CPU merchant line
  (>$2B FY27–FY28 demand, ~$1B supply-secured). [Dossier §1, §4.2, §4.1]
- The sector tailwind is real and still accelerating: global semis ~$791.7B 2025 (+25.6%),
  ~$975B–$1T forecast 2026; gen-AI chips ~half of 2026 revenue. [Dossier §5]
- Fortress balance sheet (~$3.1–3.2B net cash, no bond wall) means the company itself is not
  fragile to most adverse states — the left tail is to the *equity multiple and to SoftBank*,
  not to insolvency. [Dossier §2.3]

**Disconfirming (that the price prices a single thin corner, not the distribution):**

- The reverse-DCF already shows the price requires **~35–40% owner-FCF compounding for ~15
  years** (grow FCF ~30–50×), "beyond any precedent at this scale and beyond management's own
  plan." [Dossier §3.2; valuation.md §4] That is itself a single, extreme permutation.
- Even **hitting** management's aggressive FY2031 plan (>$9 non-GAAP EPS) yields **−10.7%/yr
  to +2.5%/yr** depending only on the exit-multiple axis (25×→50×); to earn 11.5%/yr the
  market must *still* pay ~76× in 2031. [Dossier §3.2]
- The price ($408.85) sits **above the average sell-side target (~$227–241)** and ~2.7× its
  200-DMA, on a +15.7% momentum day driven by a **partner's** (Nvidia) launch, not ARM
  guidance — management *declined to raise guidance* and the stock had fallen −7.25% on its
  own record Q4. [Dossier §3, §7] The price encodes one narrative state, not a distribution.
- Several large adverse regions are live and roughly coin-flip, not tail: a live **FTC probe**
  (opened 2026-05-15) + EU + KFTC; a **Qualcomm Case-2 trial Q4 CY2026** after Arm **largely
  lost** Case 1; RISC-V substitution (esp. ~19%-of-revenue China); a 2027 sector correction in
  some consensus paths; and a SoftBank **$8.5B margin loan** pledging 72% of the company with
  undisclosed trigger price. [Dossier §8 items 4,5,9,11; §6.1]

**Independent lens research (base rates for the favorable corner — cited):**

- Sanford C. Bernstein (≈50-yr study to 2000): only **~10%** of S&P 500 firms grew earnings
  ≥20%/yr for *five* years; only **~3%** for a *decade*. [alphaarchitect.com summary of
  Bernstein; en route via Counterpoint Global / Mauboussin discussion]
- Counterpoint Global (Mauboussin): of ~1,400 firms with >$500M sales, only **48 (~3.4%)**
  compounded sales ~20%/yr for a decade. [morganstanley.com Counterpoint Global Insights,
  "Stock Market Concentration"]
- **Read:** the *necessary* growth permutation the price requires (~35–40% FCF for 10–15y)
  sits in roughly the **top ~0.5% tail of corporate history** — and that is the demand-side
  axis *alone*, before multiplying in the AGI-silicon, regulatory, RISC-V, governance, and
  multiple-regime axes.

Sources: https://alphaarchitect.com/persistence-of-growth-and-value-stocks/ ·
https://www.morganstanley.com/im/publication/insights/articles/article_stockmarketconcentration.pdf

## Reasoning

I enumerated the outcome space over **six load-bearing axes**, each reduced to a few discrete
states with subjective probabilities calibrated to the dossier. The axes are not perfectly
independent (a sustained AI cycle correlates with a premium multiple), but they are distinct
enough that treating them as a product is the right first-order discipline — and where they
correlate, the correlation makes the favorable corner *rarer*, not more common, because the
good states cluster.

**The six axes (state : P), all judgments:**

| Axis | States and rough probabilities |
|---|---|
| 1. AI / data-center CPU cycle | sustains 0.55 / plateau-correct 0.45 |
| 2. AGI-CPU merchant silicon | scales-big 0.20 / modest 0.45 / value-destructive 0.35 |
| 3. Royalty ladder vs RISC-V | keeps-climbing 0.55 / capped 0.45 |
| 4. Regulatory / litigation | clean 0.45 / constrained 0.40 / structural-separation 0.15 |
| 5. SoftBank / governance | benign 0.65 / forced-seller-or-impair 0.35 |
| 6. Exit multiple regime | premium ~45–50× 0.20 / normal ~30–32× 0.45 / de-rate ~22–24× 0.35 |

This yields **2×3×2×3×2×3 = 216 enumerated joint paths**. I mapped each path to a FY2031
EPS (scaling a base case by the operational axes) × an exit multiple, discounted 5y at 11.5%,
to get a value-today and a 5-yr return from $408.85. (Reproducible arithmetic; numbers are
illustrative of *structure*, not precise.)

**Result (base parameterization, anchored to the valuation lane's ~$6.5 FY31 base EPS):**

- The **single "everything-goes-right" corner** (cycle sustains, AGI scales big, ladder
  climbs, regulation clean, SoftBank benign, premium multiple) has joint probability
  **~0.35%** — about 1-in-285. That is the corner the price narrates.
- **Probability-weighted intrinsic value across the full space ≈ $66**, vs the $408.85 price
  — a probability-weighted margin of safety of **≈ −84%**.
- **0.0%** of the enumerated probability mass produces a value ≥ the entry price; **~99.6%**
  of paths are "big-loss" (worse than −10%/yr) from this entry.

**Stress test — be generous to the bull (guarding against a rigged frame):** I re-ran starting
from management's **full $9 FY2031 EPS** target, added blue-sky upside on the best cycle, and
let the premium multiple reach **50×**. Even then:

- The **perfect corner reaches only ~$370/share** — *still below* the $408.85 price, an
  implied **−2.0%/yr** — at ~0.35% joint probability.
- Probability-weighted value ≈ **$101** (MoS ≈ −75%); **P(not overpaying) = 0.0%**;
  **P(5-yr return > 0%) = 0.0%**.

**This is the model's load-bearing conclusion.** The whole point of Permutations &
Combinations is to catch a point forecast masquerading as an expectation. Here the diagnosis
is even sharper than "the bull corner is improbable": **even the bull corner, fully credited,
does not clear today's price.** The market is not over-weighting a 10% scenario; it is pricing
~$370–408 of value into a corner worth ~0.35% of the space whose *own* best case is a small
loss. The remaining ~99.65% of the space is materially worse.

**What the market is ignoring (the underpriced regions):**
- **Multiple normalization** (axis 6): ~80% of the mass sits at ≤32× exit, yet the price needs
  ~45–76×. This single axis, by itself, is the largest source of negative expected return.
- **The regulatory fork** (axis 4): ~55% of mass is "constrained" or "structural-separation,"
  each of which both lowers EPS and compresses the multiple — a double hit the narrative omits.
- **AGI-silicon value-destruction** (axis 2, ~35%): channel conflict + 40–50% merchant margins
  + 11%-of-revenue capex with *no* payoff is a real and probable state, not a tail. The model
  treats the pivot as a **call option the market is pricing as if already in-the-money**.
- **The SoftBank forced-seller tail** (axis 5, ~35%): a margin-loan/foreclosure or the
  impairment of the **$645.8M unbilled related-party contract asset** is a discrete negative
  with no offsetting upside — pure left-tail mass the price excludes.

**Where this model is a stretch:** the axis probabilities are my judgments; a true believer
could argue the axes are more favorable and more correlated (a sustained AI cycle *causes* a
premium multiple, clean regulation, and AGI success together). I tested that by re-running
generous: it does not rescue the price, because the binding constraint is **arithmetic** —
even the joint-best corner is below the price. The model is *highly* relevant precisely
because ARM's bull case is the textbook case of a single narrated permutation (AI + data-center
+ AGI-silicon + premium multiple, all at once) sold as a base case.

**Check on our own reasoning (the model applied inward):** the discipline also warns *us* not
to collapse to a single bear permutation. So I credit that ARM has genuine optionality and a
fortress balance sheet; the company is unlikely to *die* in most states. The negative signal is
about **the price**, not the business — most of the distribution is "fine company, owners lose
money from this entry," not "company fails." That is the calibrated read, and it is robust to
generous bull inputs.

## Red flags

| Flag | Severity | Rationale |
|---|---|---|
| Price = single ~0.35%-probability corner of a 216-path space | high | The bull narrative is one joint permutation priced as the mean; ~99.6% of mass is below the price. [enumeration; Dossier §3.2] |
| Even the joint-best corner (generous: $9 EPS × 50×) is **below** the price | high | ~$370 < $408.85 ⇒ implied −2%/yr in the *perfect* outcome; there is no winning corner. |
| Multiple-regime axis alone is fatal to the math | high | ~80% of mass at ≤32× exit; price needs 45–76×. The richest single source of negative EV. [Dossier §3.2] |
| Two-way regulatory fork (FTC/EU/KFTC + Qualcomm Case-2) is coin-flip, not tail | medium | ~55% mass in constrained/structural states, each a double hit (EPS × multiple). [Dossier §8.4–8.5] |
| Adverse states cluster (correlation tightens, not loosens, the good corner) | medium | A cycle correction tends to co-occur with de-rating + AGI demand softening — the bad axes move together. [judgment; Dossier §5 cycle] |

## What would flip this read (disconfirmers)

- **A much lower entry price.** At ~$130 (the dossier midpoint) a meaningful *fraction* of the
  enumerated space clears; the model would turn neutral-to-mixed. The signal is price-specific.
- **Evidence the axes are not independent and resolve together favorably** — e.g. the FTC
  formally closes with no remedy *and* Qualcomm Case-2 is settled on Arm's terms *and* AGI-CPU
  books >$2B at disclosed ≥60% gross margin — collapsing several adverse states at once and
  fattening the favorable corner toward double-digit probability.
- **A structurally higher sustainable multiple** (a regime where ~50× is the durable norm for
  ~98%-gross-margin AI-IP compounders), which would lift axis 6 and pull the EV up materially.
- **A demonstrated growth permutation outside the historical base rate** — ARM actually printing
  ~35%+ FCF compounding for several years — which would justify weighting the right tail higher.
- Disconfirming the *bear*: if related-party revenue ($1,499M, 30.5%) proves durable and
  arm's-length and the AGI-CPU scales profitably, axes 2 and 5 improve — but this still must
  beat the multiple-regime arithmetic, which the stress test shows it does not at $408.85.

## Verdict

| | |
|---|---|
| **Signal** | negative |
| **Relevance** | 5 |
| **Strength** | 4 |
| **Conviction** | 4 |
| **Fatal flaw?** | no — Permutations & Combinations is not a fatal-capable model (not incentives/inversion/accounting/redundancy); the negative read is about price vs. the outcome distribution, not a path to permanent capital loss or fraud per se. |

**Bottom line:** Enumerated across the six load-bearing uncertain variables, ARM's outcome
space is 216 joint paths, and the current $408.85 price corresponds to a **single ~0.35%-
probability corner** in which everything goes right at once — yet even that corner, credited
generously to management's full FY2031 plan at a 50× exit, only reaches ~$370 and implies a
*loss*. The probability-weighted value sits ~$66–101 (margin of safety ≈ −75% to −84%), and
essentially **0% of the distribution justifies the price**. The market is pricing a narrated
permutation as if it were the expected value while ignoring large, roughly coin-flip adverse
regions (multiple normalization, the antitrust fork, AGI-silicon value-destruction, the
SoftBank forced-seller tail). This is the canonical failure the model exists to flag.
