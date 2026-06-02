<!--
  Per-model write-up: Probability & Decision Trees lens applied to URBN.
-->
# Probability & Decision Trees — Urban Outfitters, Inc. (URBN)

**Discipline:** Mathematics  ·  **Intensity:** standard  ·  **As-of:** 2026-06-02

## What this model predicts

Treat the investment as a gamble and decompose it into a tree of mutually
exclusive, collectively exhaustive future states (bear / base / bull, plus the
tails fashion history demands). Assign each branch an *honest* probability and a
*value at that node*, then compute the probability-weighted expected value. The
model's verdict is mechanical and discipline-bound:

- **If this is a good bet,** the EV of return from today's price should be
  clearly **positive** *and* the distribution should be **upside-skewed** — the
  weighted upside contribution materially exceeds the weighted downside, and the
  left tail (permanent-ish impairment) is thin. A Munger-grade bet wants "heads I
  win a lot, tails I don't lose much."
- **If this is a bad bet,** EV is near zero or negative, or — worse — EV is
  positive only because a fat right tail offsets a fat *left* tail (a symmetric or
  left-skewed distribution dressed up as a coin flip). At a ~0% margin of safety,
  the central prediction is that price ≈ probability-weighted fair value, so EV is
  thin and the **shape** of the distribution, not its mean, decides.

The load-bearing question for this lens is therefore not "what is the base case?"
but **"is the left tail fat, and is the whole thing skewed in my favor?"**

## Evidence

**Supporting (a real, achievable base case exists):**
- The reverse-DCF shows $72.26 implies only ~5–7% sustained FCF growth on a
  ~$320–350M normalized FCFE base — "a modest, achievable hurdle, not heroic." The
  market is *not* extrapolating 11% growth to perpetuity. [DOSSIER §3, valuation lane]
- Operating momentum is genuine and broad: **seven consecutive record quarters**;
  Q1 FY2027 EPS $1.30 beat $1.12–1.17 by ~16%, net sales +11.4% to $1.481B, **every
  retail brand positive comp**, Nuuly +50% FY2026. [DOSSIER §1–2; QuiverQuant, Public.com, 2026-05-20]
- Management's own FY2027 guidance is constructive but not heroic: high-single-digit
  sales, mid-single-digit retail comps, Nuuly +mid-to-high-20%. [Yahoo/Globe&Mail Q1 FY27 call, 2026-05-20]
- Net-cash balance sheet ($650.8M, ~$7.60/sh), zero funded debt, ROIC ~14–18%
  above an ~8–10% WACC. This *thins* the probability of the true tail — bankruptcy —
  versus levered peers; there is no debt-maturity path to zero. [DOSSIER §2.3–2.4]
- Sell-side avg PT $87.18 (range $72–$100); FY27 consensus EPS $6.07 (+19.9%). The
  right tail has credible advocates. [DOSSIER §7]

**Disconfirming (the left tail is fat and the skew is unfavorable):**
- **Margin of safety ~0% to slightly negative** at $72.26 vs. a blended intrinsic of
  ~$50 / ~$65–73 / ~$95. Bear downside is −30% to −37%; bull upside +30% to +47% —
  i.e., roughly **symmetric**, the opposite of what a good probability tree wants.
  [DOSSIER §3]
- Margins are **near a 10-year high (GM 36.0%, OM 9.8%)** in a "cyclical, low-barrier"
  industry, and URBN's *own* history proves mean reversion is the base rate, not the
  exception: operating margin swung 9.0% (FY2022) → **4.7% (FY2023)** → 9.8% (FY2026),
  and has cycled in a ~6–13% band for a decade. [DOSSIER §2.1, §8; MacroTrends URBN
  operating margin 2010–2025; FY2016 8-Ks showing OM 6.6–13.3% intra-year]
- The earnings engine is decelerating: **Anthropologie comp fell to +1.9% (Q1 FY27)**
  (net sales $589.1M vs $569.9M, ~+3.4% incl. new stores) while **Aritzia grew US
  revenue +43.8%** — consistent with active share loss in the most profitable brand.
  The namesake turnaround offsetting it is **only ~2 quarters old**. [DOSSIER §1, §4, §8;
  Q1 FY27 release]
- **The tape contradicts the bull case:** a +16% EPS beat moved the stock only
  ~+2.5–3%. A big beat → small move = a crowded long with high embedded expectations
  and **limited cushion to the downside** — exactly the condition that fattens the
  left tail of the *return* distribution even if the *business* is fine. [DOSSIER §7]
- **Short interest ~12% of float and rising** (+4% MoM into strength); informed
  skeptics are sizing the bear branch heavily. [DOSSIER §7]
- Recurring exogenous drags with genuinely uncertain magnitude: tariffs (~−60–75 bps
  GM/qtr), Middle-East fuel surcharge (~−70 bps/qtr), an unfinalized IEEPA refund,
  and a late-cycle / K-shaped consumer (46% of execs expect 2026 to deteriorate).
  These widen the variance of the base node and tilt its mean down. [DOSSIER §5, §8]
- Inventory has grown faster than sales **two years running** (+12.8% vs +11.1%) — a
  latent markdown risk that, if it bites, is the mechanism by which the bear margin
  branch actually fires. [DOSSIER §8]

**Independent research run for this model:** confirmed (1) the NYU Stern apparel
universe runs ~9.1% operating margin (n=35, Jan-2026) — URBN at 9.8% is at/above the
industry's *central* tendency, not establishing a defensible new plateau
(trueprofit.io; pages.stern.nyu.edu/~adamodar margin datafile); (2) URBN's own
10-year operating-margin path is demonstrably cyclical, not a monotone ramp
(MacroTrends); (3) Q1 FY27 print and constructive-but-modest guidance, and the muted
~+2.5% stock reaction (QuiverQuant; Yahoo Finance / Globe & Mail call coverage,
2026-05-20).

## Reasoning

**The tree (≈3-year horizon, total price return to fair value; URBN pays no
dividend).** I extend the dossier's 3-scenario frame to five nodes because a
disciplined fashion tree *must* carry a fat-tail branch — URBN itself printed a
near-halving of operating margin (FY22→FY23) within recent memory, so a severe-bear
node is a real state of the world, not pessimism theater.

| Branch | Prob | Fair value | Return | P × Return |
|---|---:|---:|---:|---:|
| Severe bear — cycle turn + Nuuly stall + de-rate toward peer 7–8x | 0.15 | $42 | −41.9% | −6.28% |
| Bear — margin reversion, Anthro share loss, 0% MoS unwinds | 0.22 | $55 | −23.9% | −5.25% |
| Base — mid-single comps hold, Nuuly ramps, multiple steady | 0.34 | $73 | +1.0% | +0.35% |
| Bull — namesake turn durable, Nuuly→$1B, margins hold | 0.21 | $95 | +31.5% | +6.61% |
| Blue sky — Nuuly>$1B profitable + re-rate on durability proof | 0.08 | $120 | +66.1% | +5.29% |

- **EV fair value ≈ $72.77 vs. $72.26 price → EV total return ≈ +0.7% over ~3 years
  (~+0.2%/yr).** The bet is, to a first approximation, *priced at fair value* — which
  is exactly what a ~0% margin of safety should produce. The model is doing its job:
  it tells you the price already equals the probability-weighted value.
- **The distribution is essentially symmetric, not upside-skewed.** Probability-
  weighted downside contribution −11.5% vs. upside +12.2% → an up/down asymmetry of
  only **~1.06x**. A Munger-grade bet wants this ratio well above 1.5–2x. Here you are
  paid almost nothing in expected skew to accept a real left tail.
- **The left tail is fat.** P(any loss to fair value) ≈ **37%**; E[return | loss] ≈
  **−31%**; P(severe bear, ~−42%) ≈ **15%**. This is not a "tails I don't lose much"
  profile — conditional on being wrong, you lose roughly a third of capital, with a
  one-in-seven shot at losing ~40%.

**Robustness — does the read survive different honest weightings?** I re-ran the tree
under a deliberately momentum-friendly ("bullish") set that credits the seven-record-
quarter streak and the namesake turn, and a "skeptic" set that credits the short
sellers and mean reversion:

| Weighting | EV price | EV return | Implied CAGR |
|---|---:|---:|---:|
| Honest | $72.77 | +0.7% | +0.2%/yr |
| Bullish (severe 8 / bear 17 / base 35 / bull 28 / blue 12) | $79.26 | +9.7% | +3.1%/yr |
| Skeptic (severe 22 / bear 28 / base 30 / bull 15 / blue 5) | $66.79 | −7.6% | −2.6%/yr |

Even the bullish weighting clears only ~+3%/yr. **To earn ~10%/yr** (a reasonable
"clearly better than the index" hurdle), the tree must blend to ~$96 — i.e., the bull
node must become the *base* case. Nothing in the evidence supports promoting a margin-
holds-at-peak-plus-re-rating outcome to the modal expectation; it requires *both* a
2-quarter-old turnaround to prove durable *and* a decelerating flagship to stabilize
*and* the multiple to expand from an already-premium 13.9x (2x Abercrombie). That is a
conjunction of favorable events, and the probability-tree discipline penalizes
conjunctions hard.

**Where the model is highly relevant here:** acutely. The whole investment question
the dossier frames — "durability vs. valuation" — *is* a probability-distribution
question. With ~0% margin of safety, the mean is pinned near the price by
construction, so the analysis collapses onto the shape of the distribution, which is
precisely what this lens measures. **Where it is a stretch:** the node values inherit
the valuation lane's undisclosed maintenance-vs-growth capex split and an estimated
(not sourced) ke ~10%; a ±100bp ke move shifts the base ±$5–10. So the *level* of each
node is soft even if the *shape* is robust. I have low confidence in any single node's
dollar value and higher confidence in the symmetry/fat-left-tail conclusion, which
holds across the sensitivity grid.

**Check on my own analytical bias (the lens turned inward):** the seductive error here
is *narrative-driven probability assignment* — letting "seven record quarters" inflate
the base/bull mass (recency + representativeness). I deliberately resisted by (a)
anchoring node values to the independent valuation lane rather than re-deriving them
optimistically, (b) forcing a fat-tail node justified by URBN's own FY22→FY23 margin
collapse, and (c) testing three weightings rather than defending one. The conclusion is
weighting-robust on shape, so it is not an artifact of my priors. Conversely, I checked
the *pessimistic* error — over-weighting the 12% short interest as if it were proof; it
is a sentiment input, not a probability, so it informs but does not set the bear mass.

## Red flags

| Flag | Severity | Rationale |
|---|---|---|
| Distribution is ~symmetric (up/down ≈1.06x) at 0% MoS | high | A good bet must be upside-skewed; you are paid no expected skew for accepting risk. |
| Fat left tail: P(loss)≈37%, E[ret\|loss]≈−31%, P(−42%)≈15% | high | Fashion mean reversion is the base rate; URBN's own FY22→FY23 OM halving makes the severe node real. |
| Margins at 10-yr high feeding peak-anchored node values | high | If FY2026 is the cycle peak, even the base node is optimistic; the tree's mean drifts down. |
| EV barely positive (~+0.2%/yr); fails any reasonable hurdle | high | Even a momentum-friendly weighting yields only ~+3%/yr — not "clearly better than index." |
| Anthropologie (most profitable brand) decelerating into a fast-growing rival | medium | Raises the probability mass on bear/severe-bear nodes; turnaround offset is only 2 qtrs old. |
| Node dollar values inherit undisclosed capex split + estimated ke | medium | The *shape* is robust but the *level* of each node is soft (data gap, DOSSIER §9). |

## What would flip this read (disconfirmers)

- **Margin durability proof:** 2–3 more quarters of GM ≥ 35.5% *through* the tariff/
  fuel drag would let me move mass from bear → base and lift the base node value,
  pushing EV decisively positive and the skew favorable.
- **Anthropologie re-acceleration** to mid-single-digit comp (vs +1.9%) would refute
  the share-loss thesis and shrink the bear/severe-bear mass.
- **A real margin of safety appears** — a drawdown to the low-$50s (toward the bear
  intrinsic) would, mechanically, flip the distribution to upside-skewed and make the
  same business a *positive*-EV, fat-right-tail bet. **This is a price problem far more
  than a business problem.** At ~$50 the tree's asymmetry inverts in the buyer's favor.
- **Nuuly clears $1B at ≥6% segment margin** ahead of plan, validating the blue-sky
  node and thickening the right tail.
- **Short interest collapses** (squeeze or capitulation) alongside a clean beat — would
  argue the embedded-expectations / crowded-long left-tail risk was overstated.

## Verdict

| | |
|---|---|
| **Signal** | negative |
| **Relevance** | 5 |
| **Strength** | 4 |
| **Conviction** | 3 |
| **Fatal flaw?** | no |

**Bottom line:** As a gamble, URBN is approximately **zero-EV** from $72.26 (honest
tree ≈ +0.7% total / ~+0.2%/yr to fair value over three years) with a **fat left tail**
— ~37% chance of loss, ~−31% conditional severity, a one-in-seven shot at ~−42% — and a
distribution that is **roughly symmetric rather than upside-skewed**. The probability-
tree discipline wants "heads I win big, tails I lose little"; here you get an even coin
priced at fair value while accepting real downside, and even a momentum-friendly
weighting fails a 10%/yr hurdle. This is **not a fatal flaw** (no path to permanent
total loss — the net-cash, debt-free sheet thins the true tail), but it is a clear
**PASS-on-price**: the business may compound, yet the *bet* is unattractively
asymmetric at this entry. A drawdown toward the low-$50s, or durable proof that FY2026
margins are a plateau and not a peak, would flip the skew and the EV.
