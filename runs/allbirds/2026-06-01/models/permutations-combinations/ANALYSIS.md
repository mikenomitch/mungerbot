<!--
  Per-model write-up. Permutations & Combinations (Mathematics).
  Cite facts; mark judgments as [JUDGMENT].
-->
# Permutations & Combinations — Allbirds, Inc. (BIRD)

**Discipline:** Mathematics  ·  **Intensity:** lens  ·  **As-of:** 2026-06-01

## What this model predicts

Munger's Mathematics latticework insists you reason over the **whole outcome space**,
not a single point forecast: enumerate the combinations of the key uncertain variables,
attach honest probabilities, and weight the payoffs. The model's expectation is sharp
and testable here:

> **If a security is fairly priced, its market price should sit at (or below) the
> probability-weighted average of the enumerated terminal outcomes.** If the price sits
> *above the best plausible branch*, the market is either pricing a branch I have failed
> to enumerate, or it is mispricing the distribution.

The discipline forces three specific questions:
1. **What are the actual axes of uncertainty** (the independent variables that multiply
   out into the outcome space)?
2. **Where in that space does the current price land** — is $4.18 inside the support of
   the distribution at all, or is it in the right tail?
3. **What scenario is the market ignoring** (the un-enumerated branch a point forecast
   hides)?

This is a near-textbook situation for the model: BIRD is no longer a going-concern P&L
to be forecast as a single number — it is an **event-driven shell with a forking,
sequential decision tree** (a binary vote, then a pivot-vs-dissolution fork, then a
levered IP recovery, then a near-binary AI stub). That is exactly the structure
permutations/combinations is built to dissect. **[JUDGMENT: relevance is high.]**

## Evidence

I treat the dossier's facts as the parameters of the tree, then enumerate.

**The axes of uncertainty (the variables to combine):**

- **V1 — June-3 vote** (approve all special-meeting proposals vs. reject). Support
  Agreements signed 2026-04-08 lock **~71% of total voting power FOR** all proposals;
  dual-class super-voting means minority Class A cannot block (DOSSIER §6, §7). The vote
  is **2 days after the as-of date** and there is **no Item 5.07 results 8-K** through
  the last pre-as-of filing (2026-05-28) — so it is **approved-pending, not consummated**
  (DOSSIER §8, §9 gap #1).
- **V2 — pivot-vs-dissolution fork.** *Both* the NewBird AI pivot and a dissolution /
  Plan-of-Distribution proposal sit on the **same June-3 ballot**; a "yes" to the asset
  sale **does not settle which path the residual shell takes** (DOSSIER §1, §7).
- **V3 — final IP realization** inside the disclosed **$30–40M** range; equity value is
  brutally levered to it — **a $10M swing moves ~$1.80/share** (IP $30M ⇒ ~$0.02; $35M ⇒
  ~$0.92; $40M ⇒ ~$1.83) (DOSSIER §3; valuation NOTES §Sensitivity). The signed price is
  **$39.0M**, net proceeds **~$35.0–36.2M** (DOSSIER §1).
- **V4 — dividend-vs-retained split.** "Amount and timing… determined by the Board in its
  discretion"; Board *currently anticipates* **~$1.34/share**, explicitly "may vary
  significantly… positively or negatively" (DOSSIER §3; valuation NOTES key-fact 5).
  Every ~$9.2M distributed ≈ $1.00/share of dividend; retained cash shifts value into the
  riskier stub.
- **V5 — NewBird AI stub outcome** (only live on the pivot branch): zero/delist vs. modest
  survival vs. speculative multi-bagger, *interacted with* the convertible-dilution state
  (how much of the **optional $44.75M** is drawn, and at what VWAP-linked "Alternate
  Conversion Price = 93% of lowest 10-day VWAP" — full $50M ⇒ investor owns **~72.9% of
  Class A**) (DOSSIER §2.4, §4).
- **V6 — deal-break tail.** APA can terminate (superior-proposal fiduciary out with
  $1.25M break fee; MAC; financing failure). The company states that **if the asset sale
  fails it cannot meet its liquidity needs** ⇒ insolvency / near-zero equity (DOSSIER §1,
  §8). Cash $14.4M, net cash **−$3.0M**, burning ~$12.1M/qtr — roughly **one quarter from
  exhaustion absent the sale** (DOSSIER §2.3).

**Supporting (price is in the right tail of the enumerated space) — cited:**
- Price **$4.18** sits **above the high end of the company's own fairness range ($1.83)**
  and **above the arms-length whole-company bid ($2.25)** (DOSSIER §3). In an enumeration
  anchored to disclosed values, *no single branch except an unproven-AI-multi-bagger
  reaches $4.18*.
- Triangulated intrinsic range **~$0.50–$2.25/share**, midpoint ~$1.40, prob-weighted
  ~$1.55–$1.58 (DOSSIER §3; valuation NOTES). The point estimate is ~**63–67% below**
  the price.
- The reverse-DCF residual: the price implies the market assigns **~$20–28M** to the
  un-launched NewBird stub whose only asset is a single **~$2.75M** GPU lease, with no
  disclosed backlog, utilization, or unit economics (DOSSIER §3, §4).

**Disconfirming (branches that could justify a higher price) — cited:**
- The IP-high × full-dividend × stub-optionality corner *does* exist: bull case ~$3.00
  (IP near $40M + "some AI optionality realized") (DOSSIER §3). It is a real, enumerable
  branch — just a low-probability one.
- Crowd structure can detach price from value over the relevant horizon: **~16–18% short
  interest** on a low float into a **71%-locked "yes"** is **squeeze-prone both ways**;
  realized vol ~87%; the 4/15 pivot drove **+~582% intraday** (DOSSIER §7). A combinatorial
  *value* model says nothing about *path* over days — a squeeze is a real branch of the
  *price* tree even if not of the *value* tree. **[JUDGMENT: this is the one honest reason
  the price can exceed every value branch — it is a reflexive/technical branch, not a
  fundamental one.]**

I ran one confirmatory external search (the June-3 result). Consistent with the as-of
discipline, **the outcome is not yet public** as of 2026-06-01; secondary coverage merely
restates the *scheduled* meeting and the board's FOR recommendation (stocktitan,
tipranks, SEC DEFM14A acc. 0001193125-26-213226). I therefore keep V1 as a probability,
not a fact.

## Reasoning

### The enumeration (joint outcome tree)

I build the tree in the order the variables resolve. Probabilities are **[JUDGMENT]**,
calibrated to the dossier; the *structure* is what the model contributes — the point is
that **the price lies outside the bulk of the mass.**

**Stage 1 — V1 (vote).** With ~71% voting power contractually locked FOR, I put
**P(approve) ≈ 0.92**, **P(reject/fail) ≈ 0.08** (reject would require a locked holder to
breach, a fiduciary intervention, or a superior proposal surfacing — low but not zero).

**Stage 2 — V2 (fork), conditional on approval.** Management has loudly signaled the
NewBird pivot, the convertible is wired to it, and insiders resigning/locking-up suggests
they prefer the shell route over a clean wind-down. I put **P(pivot | approve) ≈ 0.75**,
**P(clean dissolution | approve) ≈ 0.25**.

**Stage 3 — V3×V4 (IP recovery × distribution).** I collapse these into the
**realized cash-to-common** the dossier already triangulated, because they enter value
the same way. Across the disclosed support:

| Cash-to-common branch | Per-share | Rough conditional weight |
|---|--:|--:|
| Low IP (~$30M), heavy wind-down claims, AI stub ≈ 0 | ~$0.60 | 25% |
| Mid (~$1.34 dividend + modest residual) | ~$1.50–$1.65 | 55% |
| High IP (~$40M) + dividend + stub optionality realized | ~$3.00 | 20% |

**Stage 4 — V5 (stub), on the pivot branch only.** The competition lens is damning: no
moat on any axis, ~0% share, post-depreciation GPU gross margins **14–16%**, "small-scale
survival unlikely" (Vultr), "going to need a lot more than $50M" (Constellation), and the
toxic convertible dilutes *worse as the stock falls* (DOSSIER §4, §2.4). I split the stub:
**P(≈zero/delist) ≈ 0.55**, **P(modest going concern) ≈ 0.35**, **P(speculative
multi-bagger) ≈ 0.10**. Critically, in the *modest* and *multi-bagger* states the
**convertible-dilution variable interacts adversely**: realizing AI value generally
requires drawing the optional $44.75M, which at sub-VWAP conversion hands the investor up
to ~72.9% of Class A — so **per-share** value to today's Class A holder is throttled even
when enterprise value rises. **[JUDGMENT: this interaction term is the subtle thing a
point forecast misses — the variable that creates AI upside (more capital) is the same
variable that confiscates the upside from existing holders.]**

**Combining.** The probability-weighted *value* lands at **~$1.40–$1.60/share**, fully
consistent with the valuation lane's independent ~$1.55–$1.58. The right tail (the ~$3.00
branch) carries only **~15–18%** of the mass after compounding V1×V2×V3×V5, and even it
sits **below** the $4.18 price. **A branch that *reaches* $4.18 on disclosed economics
essentially does not exist in the enumeration** — it requires an AI-multi-bagger outcome
*and* minimal dilution, two variables that the convertible mechanically makes mutually
exclusive.

### What scenario is the market ignoring? (the model's headline question)

Two answers, in opposite directions:

1. **The market is ignoring the left tail and the dilution interaction.** A point
   "story" forecast ("Allbirds is now an AI compute play") collapses a fat, ugly
   distribution — a ~25–30% combined chance of a **near-zero terminal outcome** (deal
   break ~8%, plus stub-zero on the pivot branch) — into a single optimistic narrative.
   The **expected value is dragged down by the zero-states**, which is precisely what the
   crowd's anchoring-on-the-headline omits. The Long Island Iced Tea → "Long Blockchain"
   analog the dossier invokes is the same combinatorial error: pricing the *best* branch
   as if it were the *mean* (DOSSIER §7).
2. **What a bear might be ignoring (kept honest):** the *price*-path tree is not the
   *value* tree. Over the 2-day-to-vote and weeks-to-dividend horizon, a 16–18% short book
   on a low float can force a squeeze branch that has nothing to do with intrinsic value
   (DOSSIER §7). My model is **silent on timing/technicals** and only speaks to terminal
   value — so I flag this as the boundary of the lens, not as support for the price.

### Where the model is a stretch

Permutations/combinations is a *value-distribution* tool. It does **not** forecast the
*path* of price, the squeeze dynamics, or the reflexive feedback the death-spiral
convertible creates between price and dilution. It also depends on probabilities I am
assigning by judgment to genuinely unknowable events (the vote, the IP print, the stub).
So I hold conviction moderate: the **structure** of the conclusion is robust (price > top
of the enumerated value support), but the **exact EV** is soft.

## Red flags

| Flag | Severity (low/med/high/fatal) | Rationale |
|---|---|---|
| Price ($4.18) exceeds the top of the entire disclosed value support ($2.25 bid; $1.83 fairness high) | high | In a faithful enumeration, no fundamental branch reaches the price; the gap is narrative/technical, not value. |
| Fat left tail compressed by the AI headline | high | ~25–30% combined mass on near-zero (deal-break ~8% + pivot-stub-zero); a story forecast hides it. |
| Adverse interaction: AI-upside variable (more capital) = dilution variable (≤72.9% to noteholder) | high | The two variables that would justify >$3 are mechanically mutually exclusive via the sub-VWAP convertible (DOSSIER §2.4). |
| Most decision-relevant variables unresolved as of as-of date | med | Vote, final dividend, IP print, stub economics all unknowable 2026-06-01 (DOSSIER §9) — the EV is an estimate, not a measurement. |
| Reflexive price-path branch (squeeze) outside the model | med | A real *price* branch the value enumeration cannot price; cuts against over-confidence in a short-horizon directional call. |

## What would flip this read (disconfirmers)

- **A post-6/03 8-K** disclosing a **final Asset Sale Dividend materially above ~$2.25**
  (e.g., from IP realized well over $40M or near-100% distribution) — would push the
  *base* branch toward the price and shrink the negative gap.
- **NewBird AI signs real, disclosed, multi-customer GPU backlog** with credible unit
  economics **without** drawing the dilutive optional notes — would fatten the right tail
  enough to overlap the price on fundamentals (currently a near-empty branch).
- **The convertible's optional $44.75M proves *not* to dilute existing Class A**
  (e.g., never drawn, or converted near a high VWAP) — would remove the interaction term
  that caps per-share upside.
- **Evidence the vote fails or the APA breaks** — would *confirm* the left-tail mass and
  push EV toward the ruin branch (a downside disconfirmer of any bullish read).

## Verdict

| | |
|---|---|
| **Signal** | negative |
| **Relevance** | 5 |
| **Strength** | 4 |
| **Conviction** | 4 |
| **Fatal flaw?** | no — this model is not fatal-capable (it is a distribution lens, not incentives/inversion/accounting/margin-of-safety); the near-zero left tail it surfaces is severe but is owned by Inversion/Margin-of-Safety. |

**Bottom line:** Enumerating the real outcome space — vote × pivot-vs-dissolution × IP
recovery × distribution split × AI stub × deal-break — puts the probability-weighted
value at roughly **$1.40–$1.60/share**, and **no fundamental branch reaches the $4.18
price** except an AI-multi-bagger corner that the toxic convertible mechanically makes
mutually exclusive with low dilution. The market is pricing the single most optimistic
*story* as if it were the *mean*, ignoring a fat (~25–30%) near-zero left tail; the only
honest reason the price can exceed every value branch is a reflexive short-squeeze
*price* path, which is outside this model's lane. **Negative signal, high relevance.**
