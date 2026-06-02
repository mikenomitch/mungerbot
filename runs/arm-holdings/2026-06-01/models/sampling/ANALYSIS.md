<!--
  Per-model write-up. Sampling lens applied to Arm Holdings.
-->
# Sampling — Arm Holdings plc (ARM)

**Discipline:** Statistics  ·  **Intensity:** lens  ·  **As-of:** 2026-06-01

## What this model predicts

The Sampling model asks one disciplined question of any bull (or bear) thesis: **is the
evidence base it rests on a representative sample, or a biased one?** Munger's warning is
that humans extrapolate from whatever data is in front of them, and the data in front of
them is usually selected — by survivorship, by a short and flattering history, by
cherry-picked KPIs, or by a single good quarter mistaken for a trend. The right inference
needs (a) a large-enough N, (b) drawn from the *whole* population (including the failures
and the bad periods), and (c) a stable data-generating process so the past is informative
about the future.

If Arm's reported momentum is built on a **representative** sample, we should observe:

1. **Growth that is broad-based**, not concentrated in one or two non-arm's-length,
   recently-switched-on revenue lines.
2. **KPIs that move together** — backlog, ACV, royalties, and reported revenue all
   confirming the same trajectory rather than diverging.
3. **A trend visible across many quarters**, robust to comp effects, not a single beat or
   a single melt-up day.
4. **Forward extrapolations drawn from the full historical population** of comparable
   companies (including those that decelerated or were disrupted), so the base rate is
   honoured.
5. **A price/valuation anchor sampled from a normal trading regime**, not a single
   outlier print.

If instead the evidence base is biased, the Sampling lens predicts the headline numbers
*overstate* the durable, repeatable economics — and that the gap will reveal itself when
the sample is forced to widen (a fresh comp, a counterparty change, a cycle turn).

## Evidence

**Supporting** (the sample *is* biased — the case the model is built to catch):

- **Concentration of growth in one non-representative bucket.** Related-party revenue =
  **$1,499M = 30.5% of FY2026 revenue, and grew +82% YoY vs +7% for external customers** —
  i.e. the related-party slice supplied the **majority of reported growth**. (DOSSIER §1,
  §8; 20-F FY2026 Notes 4 & 20.) Stripping it out, the "real" arm's-length business grew
  ~7%, not ~23%. A trend computed on the blended number is sampling a population that is
  ~30% non-market-priced transactions with a SoftBank-controlled counterparty.
- **A KPI that exists for ~2 years masquerading as a trend.** The single biggest driver of
  FY26 license growth is the SoftBank-affiliate **Consulting Agreement**: revenue **$0
  (FY24) → $145.5M (FY25) → $704.4M (FY26), +384% YoY**, of which **~$645.8M is an
  *unbilled* contract asset**. (filings-related-party-revenue.csv; 20-F Note 20.) In Q4
  it contributed ~$200M, flat sequentially. ([Investing.com Q4 FY2026 transcript
  coverage](https://www.investing.com/news/transcripts/earnings-call-transcript-arm-holdings-reports-record-q4-fy2026-results-93CH-4665853))
  A two-year-old, internally-controlled, mostly-uncollected revenue line is the textbook
  short-history / cherry-picked-KPI sample.
- **Management's own confession that the prior sample was unrepresentative.** Royalty
  growth **decelerated to +11% in Q4 FY2026 from +27% in Q3**, and management attributes
  it to **"tougher comps from previous overperformance."**
  ([Investing.com transcript coverage](https://www.investing.com/news/transcripts/earnings-call-transcript-arm-holdings-reports-record-q4-fy2026-results-93CH-4665853);
  DOSSIER §8.) "Previous overperformance" is an admission that the earlier high-growth
  quarters were drawn from an upward-biased period, not the steady state.
- **Diverging KPIs — the classic tell that one metric is being cherry-picked.** ACV rose
  **+22%** while **RPO (contracted backlog) FELL −7% YoY**. (DOSSIER §2.5.) When the
  forward-looking measure and the headline measure move in opposite directions, at least
  one is an unrepresentative read of forward demand. The bull cites ACV; the falling RPO is
  the part of the sample being left out.
- **End-market "shares" are stitched from third parties, not Arm primary data.** Arm
  reports a **single operating segment** and discloses only royalty-vs-license, **not
  per-end-market** figures; every "~99% of smartphones / ~94% of automakers / 17.7% of
  servers" number is third-party-assembled. (DOSSIER §1, §4.) The dossier itself flags
  **denominator-mixing** (AMD's x86-only revenue share vs Arm's total-market unit share;
  Arm's "~50% of hyperscaler compute is Arm-based" is a deployment denominator, not market
  share). These are non-comparable samples being read as if they were one consistent series.
- **The forward extrapolation violates the base rate.** Justifying EV ~$433.6B requires
  **~35–40% owner-FCF compounding for ~15 years**. (DOSSIER §3.2.) My lens search found no
  evidence that *any* meaningful number of large-cap companies has sustained ~35% revenue
  growth for 15 years; the only cited large-cap exemplar is **Nvidia** — a single survivor
  — and even AMD's *own* aspirational guidance tops out at "35% for **five** years," treated
  by the press as aggressive. ([Yahoo Finance — AMD 35% five-year guidance](https://finance.yahoo.com/news/amd-sees-35-annual-revenue-192738128.html);
  [U.S. News — >30% is "hyper-growth" for large caps](https://money.usnews.com/investing/articles/blue-chip-stocks-growing-more-than-15-annually).)
  Pricing to a 15-year, 35-40% path samples from the winners and ignores the much larger
  population that decelerated — survivorship bias in its purest financial form.
- **The price anchor itself is a single outlier draw.** $408.85 is a **+15.7% melt-up close
  on a partner's (Nvidia's) product launch**, at a 52-week high, **~2.7x the 200-day MA**
  ($152.18), with **IV Rank/Percentile = 100**. (DOSSIER §3, §7.) The stock **fell −7.25%
  on its *own* record Q4 print** and then doubled on someone else's news. Anchoring value to
  this one print is sampling the extreme tail of the price distribution.
- **Insider-transaction sample is one-sided.** 34 Form 144s / 26 Form 4s in the window, all
  selling; **zero open-market buys**; the Chief Architect holds **zero direct shares**.
  (DOSSIER §6.) The revealed-preference sample of those with the best information contains
  no buy observations.

**Disconfirming** (the sample is broader / more representative than the bear fears):

- **The external (arm's-length) business still grew ~7%** even after stripping related
  parties (DOSSIER §8) — positive, just not hyper-growth; the moat businesses are real, not
  a Potemkin sample.
- **Royalty revenue ($2,613M) is drawn from a genuinely large, diversified population** —
  **>325B cumulative chips, >20M developers, ~99% of smartphones, ~94% of automakers**
  (DOSSIER §1, §4). This is one of the *largest, most representative* installed bases in
  technology; the royalty trend is not a small-N artifact.
- **The royalty ladder (v8→v9→CSS) is a multi-year, structural mix shift**, visible across
  many quarters (DOSSIER §4.2), not a one-quarter pop — so part of the growth story rests on
  a reasonably representative, repeatable mechanism.
- **Server share-gain is corroborated by multiple independent denominators** (Mercury
  Research 17.7% units; hyperscaler custom-silicon programs at AWS/Google/MS/Nvidia) — the
  direction is confirmed by more than one sample even if magnitudes are noisy (DOSSIER §4.1).
- **The financial picture is largely primary-sourced and audited** (20-F filed 2026-05-26;
  Deloitte; no current material weakness) — the *core* income-statement sample is high
  quality even where the related-party and forward inputs are not (DOSSIER §9).

**Independent lens research (cited):**

- Base-rate check on sustained large-cap hyper-growth:
  [U.S. News](https://money.usnews.com/investing/articles/blue-chip-stocks-growing-more-than-15-annually)
  (15-20% is "strong," >30% is "hyper-growth" and rare at scale);
  [Yahoo Finance / AMD](https://finance.yahoo.com/news/amd-sees-35-annual-revenue-192738128.html)
  (a direct AI-CPU peer frames 35% as a **five-year**, not fifteen-year, stretch goal). The
  population of 15-year, 35%+ large-cap compounders is, on this evidence, ~N≤1 (Nvidia).
- Q4 royalty-deceleration and related-party Q4 contribution confirmed in
  [Arm Q4 FY2026 transcript coverage](https://www.investing.com/news/transcripts/earnings-call-transcript-arm-holdings-reports-record-q4-fy2026-results-93CH-4665853)
  (royalty +11%; SoftBank consulting ~$200M, flat QoQ; deceleration blamed on "tougher
  comps from previous overperformance").

## Reasoning

This model is **highly relevant** to Arm right now, because the entire valuation case is an
*extrapolation*, and an extrapolation is only as good as the sample it is drawn from. The
Sampling lens finds the Arm bull sample biased on essentially every axis it tests:

- **Selection / concentration bias:** the headline +23% growth is not a property of the
  representative (external) customer population; it is dominated by a ~30%-of-revenue
  related-party bucket whose prices are set by SoftBank's internal process rather than a
  market. The honest "trend" of the arm's-length franchise is ~7%.
- **Short-history bias:** the largest single growth driver (the $704M consulting agreement,
  ~$646M of it unbilled) has a two-year history and a related counterparty — far too short
  and too non-independent a series to project.
- **Single-good-quarter / comp bias:** the bull narrative leans on a string of strong
  royalty quarters that management *itself* now labels "previous overperformance" as the
  comp normalises to +11%. One good quarter (or run of them against easy comps) is being
  read as the steady state.
- **Cherry-picked-KPI bias:** ACV (+22%) is cited; RPO (−7%) is not. Picking the metric
  that confirms the thesis while a co-moving metric disconfirms it is exactly the failure
  this model exists to flag.
- **Survivorship bias in the forward model:** a 15-year, 35-40% compounding path samples
  only the handful of historical survivors (effectively Nvidia) and ignores the dense
  population of once-hyper-growth franchises that decelerated, got disrupted, or
  de-rated. The base rate for "this works out" is far lower than the price implies.
- **Outlier-anchor bias:** the $408.85 anchor is one extreme draw (+15.7% melt-up, 2.7x the
  200-DMA, IV percentile 100) from a fat-tailed, beta-3.78 distribution.

Crucially, the Sampling discipline must also be turned **on our own analysis** (per the
contract). Two cautions cut the other way, and I have weighted them: (a) the *external*
business and the royalty installed base are genuinely large, representative samples — the
moat is not an illusion, so I must not over-rotate from "the growth sample is biased" to
"the company is hollow"; and (b) the bear's reverse-DCF is itself a model whose inputs
(normalized owner-FCF, 15-year horizon, terminal multiple) are estimates — I should not
treat the −68% margin-of-safety as a precise measurement, only as a robust *direction*. The
dossier's own confidence rating (3/5; direction high-confidence, magnitudes not) is the
correctly-calibrated read, and it matches what Sampling concludes: the *sign* of the
distortion is reliable; its exact size is not.

Net: the model's signal is **negative**, because every place the bull thesis draws its
trend-line, the sample feeding that line is biased toward overstatement. The model is **not
fatal-capable** (Sampling is an evidence-quality lens, not an incentives/accounting/inversion
fatal model), and even if it were, the finding is "the trend is overstated," not "a path to
permanent capital loss / fraud" — so **no fatal flaw is declared**. The earnings-quality and
incentives models are the proper home for the related-party fraud-risk question; Sampling's
contribution is narrower and clear: *do not trust the trend; demand the representative
sample, and when you draw it, the growth and the value are both materially lower.*

## Red flags

| Flag | Severity | Rationale |
|---|---|---|
| Majority of FY26 growth from a ~30%-of-revenue related-party bucket (+82% vs +7% external) | high | Headline trend not a property of the representative customer population; blended growth rate is a biased sample |
| Largest growth driver is a 2-year-old, ~92%-unbilled, related-party consulting line (+384%) | high | Short-history, non-independent KPI projected as if durable; collectibility unproven |
| ACV (+22%) cited while RPO (−7%) ignored | medium | Cherry-picked KPI; co-moving forward metric disconfirms the cited one |
| Reverse-DCF needs 35-40% growth for 15 yrs (base rate ≈ N≤1, Nvidia) | high | Survivorship bias; forward sample drawn only from winners |
| Value/price anchored to one +15.7% melt-up print at 2.7x 200-DMA, IV pctile 100 | medium | Outlier draw from a fat-tailed (beta 3.78) distribution treated as the central tendency |
| Q4 royalty +11% vs +27% prior, management cites "previous overperformance" | medium | Self-admission that the earlier high-growth sample was upward-biased |
| End-market shares third-party-stitched; denominators mixed | medium | Non-comparable samples read as one consistent series; no Arm primary segment data |

## What would flip this read (disconfirmers)

- **Two or more *consecutive* quarters where external (arm's-length) revenue growth
  re-accelerates to ~20%+** — would show the headline trend is broad-based, not a
  related-party artifact.
- **RPO turning back up and re-converging with ACV** — would mean the cited KPI is not
  cherry-picked and forward visibility is intact.
- **AGI-CPU revenue ($1B targeted Q4 FY2027) actually landing at disclosed, market-priced
  margins** — would add a large, *independent* (non-SoftBank) sample to the growth base.
- **The $645.8M unbilled consulting contract asset converting to cash on arm's-length
  terms** — would upgrade that line from "short-history related-party KPI" to a real,
  representative revenue stream.
- **Royalty growth re-accelerating well above +11% on a normalised comp** — would refute the
  "previous overperformance" framing and show the trend, not the comp, was doing the work.
- **The stock holding/building value over many months near current levels** — would turn the
  $408.85 anchor from an outlier draw into part of a representative trading regime (note:
  this is a price observation, not a value observation).

## Verdict

| | |
|---|---|
| **Signal** | negative |
| **Relevance** | 4 |
| **Strength** | 4 |
| **Conviction** | 4 |
| **Fatal flaw?** | no — Sampling is not a fatal-capable model, and its finding ("the trend is overstated") is not a path to permanent loss/fraud; the related-party fraud-risk question belongs to the earnings-quality and incentives models |

**Bottom line:** Almost every trend-line in the Arm bull case is drawn from a biased sample:
the majority of FY26 growth comes from a ~30%-of-revenue, non-arm's-length related-party
bucket; the single biggest driver is a two-year-old, mostly-unbilled SoftBank consulting
line; the cited ACV (+22%) is contradicted by ignored RPO (−7%); management itself concedes
the prior royalty strength was "previous overperformance" as the comp falls to +11%; and the
valuation extrapolates a 15-year, 35-40% growth path whose historical base rate is ~N≤1
(Nvidia) at a price anchored to a single +15.7% melt-up print 2.7x above its 200-day average.
Strip the sample back to the representative, arm's-length, multi-quarter franchise and both
the growth (~7%) and the implied value are dramatically lower than the tape. The model does
not, by itself, disqualify the investment — but it strongly cautions that the headline
evidence cannot be trusted at face value and should be heavily discounted by the synthesis
and decision layers.
