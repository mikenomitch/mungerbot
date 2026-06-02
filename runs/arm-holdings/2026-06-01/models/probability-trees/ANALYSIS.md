<!--
  Per-model write-up. probability-trees model. Mathematics discipline.
-->
# Probability & Decision Trees — Arm Holdings (ARM)

**Discipline:** Mathematics  ·  **Intensity:** standard  ·  **As-of:** 2026-06-01

## What this model predicts

This model holds that an investment is a **gamble with a payoff distribution**, and the
only honest way to judge it is to enumerate the outcomes, attach calibrated
probabilities, and compute the **expected value (EV)** — then inspect the *shape* of the
distribution, not just its mean. Munger's discipline (borrowed from Pascal/Fermat and the
parimutuel track): *you do not bet on the best horse, you bet when the odds are mispriced
in your favor*; and you **avoid bets with fat left tails even when the mean looks fine**,
because permanent capital loss is not recoverable by averaging.

If ARM is a good probabilistic bet at $408.85, we should observe:
1. **Positive EV vs the opportunity-cost hurdle** (~8-10%/yr for a diversified equity
   alternative). The probability-weighted forward return should *clear* that hurdle, not
   merely be positive.
2. **An acceptable distribution shape** — the left tail (paths to large permanent loss)
   should be thin and bounded, and the upside should be fat enough to pay for whatever
   left tail exists. A bet can be "exciting" and still be uninvestable if it is a
   negatively-skewed lottery sold at a premium.
3. **Robustness to honest disagreement on the weights** — if flipping the conclusion
   requires implausibly optimistic probabilities, the bet is bad regardless of which
   bull you talk to.

I anchor the *outcome values* on the valuation lane's already-rigorous scenario work
(DCF + exit-multiple frame; DOSSIER section 3.2-3.3, artifacts/valuation.md section 5) so
that **my probabilities do the work**, not a re-derivation of intrinsic value. My
contribution is the honest weighting and the tail enumeration.

## Evidence

**Supporting** (that this is a *poor* probabilistic bet — cited):

- **The starting point is extreme.** Price $408.85 = ~231x non-GAAP / ~481x GAAP TTM EPS,
  EV/Sales ~88x, and sits **above** the average sell-side target (~$227-241). [DOSSIER
  section 3.1, section 7] A high entry multiple mathematically compresses the probability
  mass that lies *above* today's price.
- **Even the bull node barely returns par.** If ARM *hits* management's aggressive FY2031
  target (>$9 non-GAAP EPS, ~$9.9B NI) the 5-yr return from $408.85 is **-10.7%/yr at 25x,
  -7.4%/yr at 30x, -1.9%/yr at 40x, +2.5%/yr at 50x** exit P/E. To earn 11.5%/yr the
  market must *still* pay ~76x earnings in 2031. [DOSSIER section 3.2; artifacts/valuation.md
  section 4] The *upside branch is structurally short* — the thing that should pay for the
  left tail does not.
- **Base-rate evidence against the hyper-growth branch.** The reverse-DCF requires ~35-40%
  owner-FCF compounding **for 15 years** (grow FCF ~30-50x) to justify EV. [DOSSIER section
  3.2] Sustaining 30%+ revenue growth for a decade at large-cap scale is exceptionally
  rare; the canonical exemplar (Alphabet, ~38.8% EPS CAGR 2004-2014) still decelerated, and
  reaching the implied figure would have required earning ~26x more in ten years — judged
  unlikely even at the time. [Motley Fool / valuespreadsheet.com growth base-rate context,
  ret. 2026-06-01] The empirical base rate for the bull branch is *low*, not even.
- **The left tail is real and multi-sourced.** A *combination* of (a) the SoftBank
  forced-seller mechanism, (b) an antitrust outcome forcing structural separation, and (c)
  RISC-V/China substitution against the largest customer "defines the credible left tail."
  [DOSSIER section 8 existential-threat screen]
- **The SoftBank tail is thickening, not static** (my independent research, beyond the
  dossier snapshot). SoftBank's borrowing against Arm shares is reportedly rising from
  ~$8.5B toward **~$18.5B** (a new ~$5B margin loan in arrangement), it is racing to fund a
  **~$22.5B-by-year-end OpenAI commitment** (total OpenAI exposure ~$64.6B), and **S&P
  downgraded SoftBank's outlook to negative in March 2026** citing liquidity and the
  "weakest credit quality" of the OpenAI stake. [Bloomberg 2026-04-23; Reuters/Yahoo
  Finance "SoftBank races to fulfill $22.5B" 2026; Tom's Hardware 2026, ret. 2026-06-01] A
  sharp ARM drawdown could force parent selling into the same down-tape — a *correlated*
  (not independent) tail. ARM already fell ~8% the week of a WSJ OpenAI-miss report.
  [DOSSIER section 6.1]
- **The cycle-correction node is near-dated and confirmed.** AI capex growth decelerates
  from **51% (2026) -> 13% (2027) -> ~5% (2028)** per Allianz Research; Goldman warns
  slowing capex "will force investors to choose winners and losers." [Allianz Research AI
  capex special, March 2026; Goldman via search, ret. 2026-06-01] ARM royalties already
  decelerated to **+11% in Q4 FY2026** (from +27% in Q3). [DOSSIER section 8.8] The bear
  branch has a live trigger calendar.
- **Near-term binary catalysts cluster against ARM.** Live **US FTC formal probe** (opened
  2026-05-15, document-preservation orders in place — confirmed early-stage and active as
  of mid-May 2026 [GuruFocus / PYMNTS / Tom's Hardware, ret. 2026-06-01]); **Qualcomm Case
  2 antitrust/TLA trial in Q4 CY2026**; ARM *already lost* Case 1 (JMOL for Qualcomm
  Sept-2025, on appeal). [DOSSIER section 8.4-8.5] Coin-flip-ish events with asymmetric
  downside given the priced-for-perfection multiple.
- **Sentiment/positioning is a top-of-range signal.** Options IV 108.4% with IV
  Rank/Percentile = 100, beta 3.78, price ~2.7x its 200-DMA; the stock *doubled in two
  weeks on a partner's (Nvidia) launch*, not its own guidance (which management declined to
  raise). [DOSSIER section 3, section 7]

**Disconfirming** (that this could still be a *fair-or-better* bet — cited):

- **Real, durable franchise underneath.** ~99-100% of smartphone app processors are Arm
  ISA, ~94% of automakers, >20M developers, >325B cumulative chips — a genuine ecosystem
  network-effect moat that lowers the probability of the *true* catastrophe (zero) and
  supports a non-trivial bull branch. [DOSSIER section 1, section 4]
- **Fortress balance sheet.** ~$3.1-3.2B net cash, no bond maturity wall, current ratio
  6.0. [DOSSIER section 2.3] Permanent loss via *insolvency* is essentially off the table —
  the left tail is a *valuation/governance* tail, not a *bankruptcy* tail. This caps how
  deep the catastrophe node realistically goes (repricing to deep value, not zero).
- **The royalty ladder is a genuine upward driver.** Armv8 ~2.5-3% -> Armv9 ~5% -> CSS
  ~10%+ of ASP; v9 attach target 60-70%; CSS growing. [DOSSIER section 4.2] Gives the
  base/bull branches a credible mechanism for royalty growth on flat units — the upside is
  *not* fantasy, just over-priced.
- **AGI-CPU demand is real (if supply-capped).** FY27-FY28 customer demand "doubled to
  >$2B"; Meta lead customer, OpenAI/Cloudflare/SAP partners. [DOSSIER section 1] Genuine
  optionality that feeds the blue-sky tail.
- **The Street is *raising* numbers.** Post-earnings and post-Nvidia PT hikes (to $410-425
  high). [DOSSIER section 7] Reflexivity can keep the rich multiple aloft longer than a DCF
  implies — which is why I do not put the bull branch at zero.

## Reasoning

**The decision tree (5-year horizon to FY2031, terminal price in 2031, return computed
from $408.85).** I span the full distribution and let the valuation lane's scenario values
anchor the *nodes*; my judgment is in the *probabilities*. (Judgment — probabilities are
mine, calibrated to the cited evidence and base rates.)

| Branch | Terminal price (2031) | What it assumes | Prob | 5-yr CAGR |
|---|---:|---|---:|---:|
| **Catastrophe / permanent impairment** | ~$60 | SoftBank forced-sell + antitrust structural separation + AI-bust *combine*; reprices to deep value (not zero — net-cash floor) | **10%** | -31.9%/yr |
| **Bear (disappointment + multiple reset)** | ~$130 | Growth fades / royalties soften / SBC dilution persists; multiple normalizes toward *base intrinsic* | **30%** | -20.5%/yr |
| **Base (executes ~base plan)** | ~$230 | ~$6.5 FY31 non-GAAP EPS at ~35x; the valuation lane's defensible mid-bull | **34%** | -10.9%/yr |
| **Bull (hits mgmt $9 EPS, holds 45-55x)** | ~$470 | Management's *aggressive* FY2031 target hit AND a rich multiple persists | **20%** | +2.8%/yr |
| **Blue-sky (beats plan, AGI-CPU compounds, premium holds)** | ~$820 | ~2x today; AGI-CPU scales to a second franchise, premium multiple durable | **6%** | +14.9%/yr |

**Probability-weighted terminal price ~= $266** -> **EV ~= -8.2%/yr** (a 5-yr total return
of about **-35%**). The median outcome (~$230) is also a ~-11%/yr loss.

**The distribution is the indictment, not just the mean:**
- **P(price below today's at the 5-yr horizon) ~= 74%.** Three of every four honestly-drawn
  futures leave the holder underwater.
- **P(>=68% drawdown, to <=$130) ~= 40%.** The "base intrinsic value" itself is a *large
  loss* from here — the core problem: even being *right* about the business (base case
  executes) loses ~11%/yr because **you are paying ~3x intrinsic value at entry.** [DOSSIER
  section 3.3: MoS ~= -68% at midpoint, ~= -43% even at the bull ceiling]
- **P(catastrophe, ~85% drawdown) ~= 10%** — a genuine fat left tail, and a *correlated*
  one (SoftBank forced-selling, the AI cycle, and the antitrust/Qualcomm outcomes are not
  independent; they tend to fire in the same bad state of the world). Correlated tails are
  exactly what break naive EV math and argue for a *lower* allocation than the point-EV
  alone would suggest.

**This is a negatively-skewed bet sold at a premium** — the textbook configuration to
avoid. The upside branch returns ~15%/yr at 6% probability; the left tail loses ~32%/yr at
10% probability. The "good horse" (a real franchise) is being bet at terrible odds.

**Robustness check (the decisive part for this model).** I re-ran the tree under
deliberately *generous* reweightings to see whether an honest bull can rescue it:

| Weighting | EV terminal | EV annualized | P(loss @ 5y) |
|---|---:|---:|---:|
| My base tree | $266 | **-8.2%/yr** | 74% |
| Optimistic (halve catastrophe, lift bull->30%, blue->10%) | $332 | -4.0%/yr | 60% |
| Very-bullish (bull->35%, blue->15%, catastrophe->4%) | $380 | -1.5%/yr | 50% |

To clear even a **10%/yr hurdle**, the expected terminal price must be ~$658, which
requires assigning **~50% to the bull node AND ~0% to the bear/catastrophe nodes** — i.e.,
near-certainty that ARM hits an aggressive plan *and* keeps a rich multiple, with
essentially no probability of disappointment, antitrust, or a cycle turn. No honest reading
of the dossier supports that distribution. **The negative-EV conclusion survives across the
entire plausible range of weights** — the only question is *how* negative, the same
robustness signature the valuation lane found on margin of safety. Two independent
disciplines (probability and DCF) converge.

**Where this model is highly relevant:** ARM is a wide-distribution, multiple-driven,
catalyst-rich situation priced for a single optimistic branch — the ideal subject for
EV/decision-tree reasoning. **Where it is a stretch:** my terminal-node *values* inherit
the valuation lane's assumptions (especially the FY2031 EPS path and exit multiples), and
my probabilities are inherently subjective — a determined bull will argue the bull/blue-sky
mass is larger. I stress-tested exactly that objection above and the bet still fails the
hurdle, which is why conviction is high despite the subjectivity.

**Check on my own bias (Munger's "other side"):** the danger is anchoring on the bearish
valuation lane and importing its pessimism as "probability." I guarded against this by
(1) giving the bull+blue-sky branches a combined **26%** weight, (2) capping the
catastrophe at $60 (not zero) to respect the net-cash floor, and (3) explicitly running
the very-bullish reweight — even handing the bull 50% of the mass only reaches ~+1%/yr. I
also note *reflexivity* cuts the other way (a rich multiple can persist on narrative far
longer than a DCF says), which is why I do not call the right tail negligible. The
conclusion is not a vibe; it is arithmetic that holds under adversarial reweighting.

## Red flags

| Flag | Severity (low/med/high/fatal) | Rationale |
|---|---|---|
| Negative expected value vs hurdle | high | EV ~= -8%/yr (base tree); fails a 10% hurdle across all honest reweightings. |
| Fat, *correlated* left tail (~10% mass at ~-85%) | high | SoftBank forced-selling + antitrust + AI-cycle fire together in the bad state; ~$18.5B-and-rising pledged against ARM, S&P negative outlook. |
| Short upside branch | high | Even *hitting management's aggressive plan* returns ~-2% to +3%/yr; upside cannot pay for downside. |
| Entry at top of a momentum spike | med | Price ~2.7x 200-DMA, IV percentile 100; raises probability the entry multiple is transient. |
| Base case is itself a large loss | med | "Being right" (base execution) still ~= -11%/yr because entry MoS is ~= -68%. |
| Near-dated binary catalysts (FTC, Qualcomm Case 2) | med | Coin-flip events with asymmetric downside given the priced-for-perfection multiple. |

## What would flip this read (disconfirmers)

- **A large price reset.** At ~$130 (the base intrinsic), the same tree flips to materially
  positive EV with a far thinner left tail — *this is a price problem, not a business
  problem.* Signal turns positive on a 60-70% drawdown, all else equal.
- **The SoftBank pledge tail is *defused*** — SoftBank refinances off ARM collateral,
  publishes LTV/trigger terms showing wide headroom, or sells down via a marketed offering
  with minority protections. Shrinks the ~10% catastrophe node toward ~3-4% and lifts EV by
  several points.
- **AGI-CPU economics disclosed and strong** (gross margin near IP-licensing, capex-light,
  >$2B demand converting) — thickens the bull/blue-sky branches and lengthens the short
  upside.
- **Antitrust resolves cleanly** (FTC closes with no action; Qualcomm Case 2 settles on
  terms that *preserve* license pricing power) — removes two binary downside nodes.
- **Royalty re-acceleration** (Q1-Q2 FY2027 royalties back to 20%+ on durable Armv9/CSS
  attach) — raises the base-branch probability and value, undermines the cycle-correction
  bear node.
- **Sustained >35% revenue/FCF compounding actually printing for several years** — raises
  the empirical base rate I assigned to the hyper-growth branch (currently low).

## Verdict

| | |
|---|---|
| **Signal** | negative |
| **Relevance** | 5 |
| **Strength** | 4 |
| **Conviction** | 4 |
| **Fatal flaw?** | no — this model is not fatal-capable (probability/EV is a sizing-and-odds lens, not an inversion/accounting/incentive fatal check); the bet is sharply negative-EV with a fat correlated left tail, but the net-cash balance sheet keeps it from being a clean *path-to-zero*. The fatal call belongs to the inversion/accounting/incentives nodes. |

**Bottom line:** Treated as a gamble and weighted honestly, ARM at $408.85 is a
**negative-EV bet (~-8%/yr over five years) with a negatively-skewed, fat-and-correlated
left tail** — ~74% of outcomes leave the holder underwater, ~40% imply a >=68% drawdown,
and even *hitting management's aggressive plan* barely returns par. The conclusion is
robust: only by assigning ~50% probability to the bull case **and** ~0% to disappointment
could you reach a 10% hurdle, which no honest reading supports. This is the classic Munger
configuration to avoid — *a good horse bet at terrible odds* — and the probability lens
converges with the valuation lens on the same answer. The bet would become attractive
mainly on a large price reset (to ~$130) or a genuine defusing of the SoftBank/antitrust
tails.
