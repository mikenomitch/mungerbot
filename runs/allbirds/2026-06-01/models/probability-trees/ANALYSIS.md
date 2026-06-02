<!--
  Per-model write-up. probability-trees.
-->
# Probability & Decision Trees — Allbirds, Inc. (BIRD)

**Discipline:** Mathematics  ·  **Intensity:** standard  ·  **As-of:** 2026-06-01

## What this model predicts

Treat the BIRD common share as a **gamble**, not a business. Build a decision tree
across discrete future states (bear / base / bull), attach **honest** probabilities
that sum to 1, value each leaf, and compute **expected value (EV)**. The model says
to buy only if **EV >> price** *and* the **distribution is acceptable** — i.e., the
downside leaves are shallow enough that the bet survives a bad draw. A positive
headline EV that is built on one fat right-tail while the left tail is "near-zero" is
a **Kelly trap**: a bet you must size near zero even if mean-positive, and a bet you
should *decline* if the mean is also negative.

Concretely, if this model is **favorable** at $4.18, we should observe:
- A probability-weighted intrinsic value materially **above $4.18**, and
- A left tail (the worst ~20–30% of outcomes) that is **bounded well above zero**, so
  the bet is not a lottery ticket whose modal outcome is a large loss.

If **unfavorable**, we should observe the opposite: EV below price, and a **fat,
heavy left tail** (meaningful probability of ~80–100% permanent loss) that no
plausible right tail offsets on a risk-adjusted basis.

The single clarifying decomposition: **Share value = (near-certain cash) + (speculative
NewBird stub).** Almost all the *uncertainty* lives in the stub; almost all the
*price* ($4.18) is *also* the stub. The tree's job is to price that stub honestly.

## Evidence

**Supporting** (that a tree can be built with usable inputs — cited):

- Board estimates the **Asset Sale Dividend at ~$1.34/share**, "may vary
  significantly," expected paid Q3 2026; record date 2026-05-20; net proceeds
  ~$35.0M–$36.2M. (DEFM14A 2026-05-08; Dossier §3.)
- Company's own **Duff & Phelps / Kroll fairness opinion**: liquidation per-share
  value **$0.02–$1.83**, with equity value highly levered to the IP sale price
  ($30M IP ⇒ ~$0.02; $35M ⇒ ~$0.92; $40M ⇒ ~$1.83). Term Loan/ABL repaid at 100%.
  (DEFM14A pp.56–57; Dossier §3.)
- Arms-length anchors: AXNY verbally offered **$2.00–$2.25/share for the WHOLE
  company** (2026-02-24); a separate party offered **$30–40M for the IP alone**
  (2026-03-05). Both below the $4.18 price. (DEFM14A background; Dossier §3.)
- Vote approval is **near-certain**: ~71% of total voting power locked FOR via Support
  Agreements signed 2026-04-08 (Maveron, Zwillinger, Brown, Boyce). (Dossier §6, §7.)
- Independent merger-arb base rate: **~90–95% of announced deals close** 2010–2021
  (InsideArbitrage; CFA/AnalystPrep). With insider votes locked, the asset-sale leg is
  even higher-probability than the typical announced deal.
- Triangulated intrinsic value (valuation lane): **bear ~$0.60 / base ~$1.65 / bull
  ~$3.00; prob-weighted ~$1.55**. (Dossier §3.)

**Disconfirming** (that the tree's right tail is real / left tail is shallow — cited):

- **NewBird stub has no measured value.** Only operating asset is a single **~$2.75M,
  3-year GPU lease to a QumulusAI subsidiary**; no disclosed backlog, utilization, or
  pricing; company calls the venture **"highly speculative, uncertain, unproven... no
  operating history."** (Dossier §1, §2.4, §8.)
- QumulusAI is **real but debt-funded and early**: deployed 1,144 Blackwell GPUs (Feb
  2026) under a **$500M non-recourse USD.AI facility**, plus a **$45M convertible from
  ATW Partners** ($15M drawn), targeting >20,000 GPUs by end-2026. (QumulusAI press
  release 2026-02-19; DataCenterDynamics 2026.) — i.e., the counterparty is itself
  levered and scaling, not investment-grade.
- The forward business is a **sub-scale entrant in a brutal market**: CoreWeave is the
  sole "Platinum" provider (~45,000 GPUs); NewBird is ~4 orders of magnitude smaller
  and **below the rated universe**; post-depreciation GPU gross margins **14–16%**;
  Vultr concludes small-scale survival is **"unlikely"**; Constellation Research:
  NewBird "is going to need a lot more than $50 million to become a neocloud."
  (Dossier §4; SemiAnalysis, Vultr, Constellation.)
- **Death-spiral convertible** caps the right tail and deepens the left: floating
  conversion at 93% of the lowest 10-day VWAP (85% on default), 12% coupon, 5% OID,
  25% premiums; full $50M ⇒ investor gets **~72.9% of Class A**; investor holds a
  **55% co-invest right** on all future financings for 24 months. Dilution **worsens
  as the stock falls**. (Dossier §2.4.)
- Only **~$5.25M of the "$50M" is committed**; ~$44.75M is at the investor's option.
  (Dossier §2.4.) — the "war chest" that the bull case needs is conditional, not real.
- Direct reference-class outcome — **Long Blockchain Corp** (Long Island Iced Tea →
  blockchain rebrand, 2017): stock spiked ~380%, then **delisted within ~4 months**,
  shareholders effectively wiped out; SEC subpoena. (Bloomberg 2018; Cointelegraph;
  Wikipedia.) The dossier itself invokes this analog (§7).

**Independent research I ran (sources):**

- QumulusAI counterparty health — more substantial than the dossier's "opaque" framing,
  but still levered/early. (QumulusAI 2026-02-19; DataCenterDynamics 2026.)
- Convertible-investor ecosystem: **ATW Partners** is the financier behind QumulusAI's
  $45M convertible. The BIRD note's terms (senior secured floating-VWAP convertible,
  OID, large co-invest right) match ATW's structured-finance template; the BIRD filings
  do not name the investor. [JUDGMENT: not confirmed identical, but the same
  structured-credit ecosystem appears on **both sides** of the NewBird↔QumulusAI lease
  and the BIRD financing — a circularity/captive-financing risk that thickens the left
  tail, since the "arms-length" lease and the dilutive financing may share an interested
  sponsor.] (StockTitan 8-K; DataCenterDynamics.)
- Merger-arb / deal-completion base rate (~90–95% close). (InsideArbitrage; AnalystPrep.)

## Reasoning

### Step 1 — Decompose the share into cash + stub

At $4.18 the market is paying roughly:

```
$4.18 price  ≈  ~$1.34 (expected asset-sale dividend)  +  ~$2.84 (implied NewBird stub)
```

So **~68% of today's price is the speculative stub** — a pre-revenue GPU shell whose
only asset is one $2.75M lease. The reverse-DCF in the dossier independently reaches
the same place: the market assigns **~$20M–$28M** to NewBird (Dossier §3). My tree
therefore prices two semi-independent things: (A) the cash leg, and (B) the stub.

### Step 2 — The cash leg (shallow tree, high-probability)

| Cash-leg state | Prob | Net dividend/share | Note |
|---|--:|--:|---|
| Deal closes ~as estimated | 0.82 | $1.34 | base estimate |
| Closes, IP/proceeds disappoint; heavier wind-down claims | 0.13 | $0.80 | escrow holdback, claims (D&P midpoints) |
| Deal fails / re-trades down / dissolution drags | 0.05 | $0.30 | going-concern; ABL must be repaid by ~6/19; insolvency tail |

Cash-leg EV ≈ 0.82·$1.34 + 0.13·$0.80 + 0.05·$0.30 ≈ **$1.21/share.**

[JUDGMENT on probabilities: vote approval is near-certain (71% locked), and the merger-arb
base rate is ~90–95% close, so I put **0.95 on "closes in some form"** and only 0.05 on
"fails/dissolution-drag." But "closes" ≠ "$1.34 lands intact" — the dividend explicitly
"may vary significantly," depends on escrow release and wind-down claims, and the value
already *eroded inside the negotiation* (from a ~$2.00–$2.25 whole-co bid to ~$1.34).
Hence I split the 0.95 into 0.82 at ~$1.34 and 0.13 at a haircut.]

### Step 3 — The stub (where the real distribution lives)

The stub is the gamble. I value it on a 3-year horizon and discount the right tail
hard because the death-spiral convertible **transfers most upside to the noteholder**
(full draw ⇒ noteholder owns ~72.9% of Class A; common is diluted to a ~27% sliver
of whatever NewBird becomes).

| Stub state | Prob | Stub value/share | Reasoning |
|---|--:|--:|---|
| **Bear — value trap / death spiral** | **0.60** | **$0.00–$0.30** | Sub-scale entrant in a commoditizing market (GPU rents −64% peak-to-trough; 14–16% gross margins); the convertible converts down the VWAP and dilutes common toward zero; Long-Blockchain reference-class outcome. Stub ≈ a worthless-to-near-worthless option. |
| **Base — muddle / slow bleed, no blow-up yet** | **0.27** | **$0.60–$1.10** | NewBird stands up a small GPU book (QumulusAI + a couple of leases), survives 1–2 years on optional convertible draws, but never reaches escape velocity; residual equity small after dilution. |
| **Bull — narrative + execution both work** | **0.13** | **$2.50–$6.00+** | AI-compute trade stays hot; NewBird scales the book, draws capital on tolerable terms, and the market keeps paying a momentum multiple. Wide because a momentum micro-cap can re-rate violently (the 4/15 spike hit $24.31 intraday). |

Stub-leg EV ≈ 0.60·$0.15 + 0.27·$0.85 + 0.13·$3.75 ≈ **$0.81/share.**

[JUDGMENT on stub probabilities: I anchor the **bear weight at 0.60** because (a) the
*reference class* — dying-shell-rebrands-into-hot-sector — has a dismal historical hit
rate (Long Blockchain is the canonical wipeout, and the dossier invokes it directly);
(b) the **management lacks any cloud/GPU/enterprise expertise** (Dossier §6) — a base
rate for first-time operators entering a capital-intensive, scale-driven business is
poor; (c) the **death-spiral convertible mechanically harvests the upside** and worsens
as the stock falls; (d) **no insider bought a single share** around or after the pivot
spike (Dossier §6) — the people with the most information are not taking this bet. The
**bull weight of 0.13** is deliberately non-trivial — momentum micro-caps *do*
occasionally compound a narrative for a year or two, and the AI-capex backdrop is
real ($660B 2026 hyperscaler capex) — but I will not let a fat right tail launder a
modal loss.]

### Step 4 — Combine

**EV per share ≈ cash-leg $1.21 + stub-leg $0.81 ≈ $2.02.**

Against a **$4.18 price**, the probability-weighted EV is **~$2.02 — roughly half the
price.** Independent triangulation (Dossier §3 prob-weighted ~$1.55) is even lower; my
$2.02 is *more generous* than the valuation lane because I assign a non-trivial 0.13 to
the bull stub. Either way: **negative expected value at the current price.**

### Step 5 — Distribution shape (the part the model cares about most)

EV is only half the test; the **shape** is the other half. Tally the loss-vs-price by leaf
(price = $4.18; combine cash $1.21 baseline with each stub leaf):

- **P(total value < $1.50)** — i.e., a **>64% loss** from $4.18 — is roughly the bear
  stub (0.60) plus part of the disappointing-cash mass: **~0.55–0.60.**
- **P(total value ≥ $4.18)** — i.e., **break-even or better** — requires the bull stub
  to mostly land: **~0.10–0.13.**

So the **modal outcome is a large permanent loss**, and break-even-or-better is a
~1-in-8 event. This is the textbook **fat left tail**: a lottery ticket priced *above*
its expected payoff, where you lose ≥60% in the most likely world and the right tail
(however juicy) is too thin to rescue the risk-adjusted bet. A Kelly calculation on
these inputs returns a **negative fraction** — the discipline says *do not bet* (or, for
those who can borrow, this is the short side, not the long).

### Where the model is highly relevant vs. a stretch

- **Highly relevant.** This is almost a *pure* probabilistic gamble: a binary-ish event
  (the vote/dividend) bolted onto a speculative option (the stub). Decision-tree EV is
  arguably the single most natural lens for a special-situation shell. Relevance is high.
- **The stretch / honest limits.** The leaf *values* and *probabilities* are my
  judgments, not measured facts — the dossier itself flags the dividend, the stub
  economics, and the convertible terms as the top data gaps (Dossier §9). The bull-leaf
  value is especially soft (a momentum re-rate is not an intrinsic value). I have
  stress-tested the conclusion against this: even if I **double the bull probability to
  0.26** and lift its value to $4.50, EV only rises to ~$2.7–$2.9 — *still below $4.18*,
  and the left tail is still fat. The negative-MoS conclusion is **robust to generous
  assumptions**, which is what gives me conviction despite soft inputs.

## Red flags

| Flag | Severity | Rationale |
|---|---|---|
| Probability-weighted EV (~$2.02) is ~half the $4.18 price | high | Negative expected value before any risk adjustment. |
| Fat left tail: modal outcome (~0.55–0.60) is a >60% permanent loss | high | Distribution is lottery-shaped; Kelly fraction is negative ⇒ decline (or short). |
| Death-spiral convertible mechanically harvests the right tail | high | Floating-VWAP conversion dilutes common toward a ~27% sliver on full draw; upside accrues to the noteholder, not the buyer at $4.18. |
| Direct reference-class wipeout (Long Blockchain) | medium | The closest historical analog to a dying-shell hot-sector rebrand ended in delisting within ~4 months. Base rate is grim. |
| Possible circular/captive financing (ATW ecosystem on both sides) | medium | If the convertible sponsor and QumulusAI's financier overlap, the "arms-length" lease and the dilutive financing share an interested party — thickens the left tail. [JUDGMENT, not confirmed.] |
| Stub value and leaf probabilities are judgments, not measured | medium | Top data gaps per Dossier §9; mitigated by robustness check (conclusion holds even doubling the bull case). |

## What would flip this read (disconfirmers)

- **The asset-sale dividend is confirmed materially higher than ~$1.34** (e.g., a
  closing 8-K showing ≥$2.50/share returned to common). This would lift the cash leg
  toward/above the price and de-risk the bet substantially.
- **NewBird discloses real, contracted backlog** — multiple creditworthy lease
  counterparties, disclosed utilization, and capital drawn on terms that are *not*
  death-spiral (a fixed-price convert or straight equity) — converting the stub from an
  option-near-zero into a valuable going concern. This would shift mass from the bear
  leaf to base/bull.
- **Insiders buy stock in the open market** post-pivot at ~$4 (none have). High-conviction
  insider buying would force me to up-weight the bull leaf.
- **The convertible is restructured to remove the floating/sub-VWAP feature**, ending the
  mechanical harvest of common upside — this would widen the realizable right tail.
- **Evidence that the AI-compute reference class is *not* a Long-Blockchain analog** — a
  credible cohort of micro-cap GPU-shell pivots that compounded for shareholders. (I did
  not find one; the available analogs cut the other way.)

## Verdict

| | |
|---|---|
| **Signal** | negative |
| **Relevance** | 5 |
| **Strength** | 4 |
| **Conviction** | 4 |
| **Fatal flaw?** | no — see note |

**Note on fatal flaw:** Probability/decision-trees is *not* a fatal-capable model under
the contract (the fatal-capable set is incentives, inversion, accounting,
redundancy/margin-of-safety). I therefore return `fatalFlaw = false` even though the
distribution carries a large left tail. The path-to-loss judgment belongs to Inversion;
my contribution is the **EV-and-shape verdict**, which is clearly negative.

**Bottom line:** At $4.18, the share is a lottery ticket priced **above** its expected
payoff. A disciplined tree puts probability-weighted EV at **~$2.02** (the valuation lane
is lower still at ~$1.55), with the **modal ~55–60% outcome being a >60% permanent loss**
and break-even-or-better only a ~1-in-8 event. The death-spiral convertible mechanically
strips the right tail away from the common buyer, and the closest reference class (Long
Blockchain) wiped out. Negative EV **and** a fat left tail is the rare double-fail that
makes this a clear **decline** on probabilistic grounds — and, for those equipped to act
on it, more naturally the short side than the long.
