<!--
  Per-model write-up. Regression to the Mean (Statistics).
-->
# Regression to the Mean — Arm Holdings plc (ARM)

**Discipline:** Statistics  ·  **Intensity:** standard  ·  **As-of:** 2026-06-01

## What this model predicts

Regression to the mean is the statistical observation that extreme readings of a
noisy variable are usually followed by less-extreme ones, because part of the
extreme was luck (or a transient input) rather than a durable property. The
analyst's job is to separate the **durable signal** (a real moat that holds an
elevated reading aloft) from the **transient component** (a cyclical, lumpy,
borrowed, or one-time tailwind that will fade). Applied to ARM, the model says:

1. **The most mean-reverting variable in finance is the valuation multiple.** A
   ~231x non-GAAP / ~481x GAAP P/E, ~73x forward EV/Sales, on a stock ~2.7x its
   own 200-day moving average, is an extreme reading. If multiples regress toward
   any defensible band — even a generous one — the return is deeply negative even
   if the business performs.  *Prediction: the entry multiple itself is the single
   most transient input, and it is at a peak.*
2. **Growth that is "borrowed" from lumpy, related-party, or comp-flattered
   sources regresses faster than growth from durable end-demand.** If FY2026's
   headline +23% was disproportionately carried by a related-party bucket and a
   strong-comp quarter, the forward print should decelerate toward the underlying
   external run-rate.  *Prediction: reported growth is above its sustainable mean
   and will fall toward the ~5–10% external core.*
3. **Accounting profitability and returns on capital pull back toward a normal
   spread.** Here the model must be applied honestly in *both* directions: ARM's
   GAAP margins and ROE are NOT at a euphoric peak — they are *depressed* by the
   AGI-CPU build — so the naive "super-high margins must fall" story is partly
   wrong. The durable gross margin (~98%) is real, but it is being **mix-diluted**
   downward by the pivot into 40–50%-margin merchant silicon.  *Prediction:
   blended margins regress *down* via mix even though the IP core stays high; ROIC
   stays a thin ~13–15% vs ~10% WACC, not a wide-moat 30%+.*

If the bull thesis is right, the elevated reading is *durable*: royalty share
keeps compounding up the v8→v9→CSS ladder, the moat (>20M developers, 99% of
smartphones) holds the multiple, and the silicon pivot adds rather than dilutes.
The model's question is: **how much of today's extreme is signal vs noise?**

## Evidence

**Supporting the regression read** (cited):

- **Multiple is at/above its own peak, not just peers'.** At $408.85 the stock is
  ~231x non-GAAP / ~481x GAAP TTM EPS, ~88x EV/Sales, ~409x EV/EBITDA; ARM's own
  post-IPO P/E averaged ~319x but today's ~231x non-GAAP sits in the **upper half
  of its own range**, and the price is ~2.7x its 200-day MA ($152.18) and ~4x its
  52-week low ($100.02). [DOSSIER §3.1, §3; valuation.md §1, §3]
- **The +15.7% as-of-day move was a momentum melt-up on a *partner's* news**
  (Nvidia's Arm-based RTX Spark / Grace N1X PC chip at Computex), not on ARM's own
  guidance — and ARM's *own* record Q4 beat fell −7.25% on 5/7. Sentiment is
  ecosystem-narrative-driven, the textbook profile of a transient extreme.
  [DOSSIER §7; valuation.md §1]
- **Growth was borrowed from a related-party bucket.** Related-party revenue =
  $1,499M = **30.5% of FY2026 revenue, +82% YoY** vs **+7% external** — i.e. the
  related-party bucket supplied the **majority of FY26 growth**. Components include
  a SoftBank-affiliate Consulting Agreement of **$704.4M (+384% YoY)**, of which
  **~$645.8M is an unbilled contract asset**. Growth concentrated in a +384%,
  non-arm's-length line is the definition of an extreme reading unlikely to repeat
  at that rate. [DOSSIER §8 item 2; Note 20]
- **Royalty growth already decelerating.** Royalty growth slowed to **+11% in Q4
  FY2026 from +27% in Q3** — management attributes it to a strong Q3 comp plus
  low-end smartphone unit cuts from memory-supply constraints (a ~1–2% drag). This
  is regression in real time. [DOSSIER §8 item 8; Arm Q4 FY2026 call via investing.com]
- **License revenue is structurally lumpy/timing-driven** (~47% of revenue, term
  deals + CSS); management itself says the quarterly print "reflects the timing of
  large multi-year deals" and points to rolling-4-quarter ACV (+22%) as the
  *normalized* figure — an admission that any single elevated quarter mean-reverts.
  [DOSSIER §1; valuation.md §2; Arm Q4 FY2026 call]
- **RPO (contracted backlog) fell −7% YoY** even as ACV rose +22% — forward
  visibility *worsened*, consistent with a peak in the forward-bookings reading.
  [DOSSIER §2.5; financial-summary.md]
- **Owner-FCF has been roughly zero-to-negative for three straight years** (−$39M
  FY24, −$642M FY25, −$73M FY26) once SBC (~21% of revenue) is charged as the real
  cost it is. The cash-generation reading is *already* below the headline, leaving
  little for a "normalize up" surprise. [DOSSIER §2.2; financial-summary.md]
- **Semiconductor-cycle base rate.** The industry is at a **historic peak** (~$975B
  2026, +26%; AI ~half of revenue), funded by debt-financed hyperscaler capex up
  ~36–77% YoY — classic late-cycle markers, with DRAM spiking ~$250→$700/config.
  The SOX has had **five drawdowns of −30% to −82% since 1996**; supply inelasticity
  reliably overshoots. ARM's royalties *lag* (paid on shipments, much on prior-gen
  designs) so it is buffered but **not decoupled**. [DOSSIER §5; Deloitte 2026;
  quantflowlab.com "Semiconductor Cycle History"]

**Disconfirming the regression read** (cited):

- **A real moat can hold an elevated reading aloft — that is the whole point of a
  durable advantage, and ARM has one.** ~99–100% of smartphone app processors,
  ~94% of automakers, >20M developers, >325B cumulative chips, high re-port
  switching costs. Mobile/embedded ISA share is not a noisy variable that regresses;
  it is a near-monopoly. [DOSSIER §4.1, §4]
- **The royalty ladder is a structural up-mechanism, not a lucky peak.** Armv8
  (~2.5–3%) → Armv9 (~5%) → CSS (>10% of ASP) lets royalty revenue grow on roughly
  flat unit volumes; v9 attach is rising toward a 60–70% target and CSS licenses
  reached 21 across 12 companies in Q4. This is a *secular* re-rating of the royalty
  base, which legitimately resists mean-reversion downward. [DOSSIER §4.2;
  tikr.com; Arm Q4 FY2026 call]
- **Data-center share is genuinely gaining**, not reverting: Mercury Q1'26 has Arm
  at **17.7% of total server-CPU units (up from 11.5% YoY)**, driven by hyperscaler
  custom Arm CPUs. A rising, structurally-driven share is the opposite of a peak to
  fade. [DOSSIER §4.1]
- **GAAP margins/ROE are NOT at a euphoric high to regress *down* from** — they are
  *depressed*: GAAP operating margin fell to 18.3% (from 23–25% in FY22–23) and ROE
  to 12% as R&D (56% of revenue) outgrows revenue on the AGI-CPU build. The naive
  "margins must fall" version of this model does not apply; if anything the
  *profitability* reading is below trend, leaving room to regress *up* if the build
  pays off. [DOSSIER §2.1, §2.4; financial-summary.md]

## Reasoning

**Where the model is highly relevant.** Regression to the mean is extremely
relevant to the *price* and to the *growth composition*, and very relevant to the
*sector cycle*. Three facts make this the cleanest possible setup for the model:

1. *The multiple is the most extreme, most noise-laden, and most mean-reverting of
   all the variables.* Even granting ARM a durable moat, a 231x non-GAAP multiple
   has almost no historical persistence at scale. The valuation lane's
   management-target cross-check is the decisive regression arithmetic: even if ARM
   **hits** its aggressive FY2031 >$9 non-GAAP EPS, the 5-yr return from $408.85 is
   −10.7%/yr at a 25x exit, −7.4%/yr at 30x, and only +2.5%/yr at a still-rich 50x.
   To merely earn 11.5%/yr the market must *still* pay ~76x in 2031. The exit
   multiple **must** mean-revert toward a normal band (25–40x for even an
   excellent compounder), and when it does, the price loses 40–70% from here even
   on flawless execution. This is regression to the mean expressed as a return
   forecast, and it is the binding constraint. [valuation.md §4–5]

2. *The growth print is flattered by transient, related-party, comp-driven, and
   lumpy components.* Strip the +82% related-party bucket and external growth was
   +7%; the +384% SoftBank consulting line and the $645.8M unbilled contract asset
   are non-arm's-length and structurally non-repeatable at that rate; Q4 royalty
   already decelerated to +11%; RPO fell. The *underlying* mean growth of the
   external, arm's-length business looks closer to high-single / low-double digits
   than the ~23% headline — and the headline is what the multiple is priced against.
   The market is extrapolating a peak reading. [DOSSIER §8 items 2, 8; §2.5]

3. *The sector is late-cycle.* ARM is a lagging, buffered participant in a possibly-
   peaking AI capex super-cycle on debt-funded demand with unproven ROI. The base
   rate for "extreme semiconductor up-cycle followed by mean reversion" is strong
   (five −30% to −82% SOX drawdowns). ARM won't fall as hard as a memory maker, but
   a 2027 correction sits in some consensus wafer paths and would hit royalties with
   a lag. [DOSSIER §5; quantflowlab.com]

**Where the model is a stretch — and where I must check my own bias.** The
discipline demands I apply regression in *both* directions and not let the
spectacular multiple seduce me into a lazy "everything reverts" conclusion. Two
honest counters:

- *The ISA moat genuinely resists downward reversion.* Smartphone/embedded share
  is not a lucky peak; it is a structural near-monopoly with a working up-mechanism
  (the royalty ladder). A bear who assumes ARM's *operating* business reverts to
  some commodity mean is wrong — the business is durable and probably still grows
  high-single/low-double digits organically for a long time. The regression case is
  about **price and growth-rate**, not about the franchise eroding.
- *The profitability reading is depressed, not euphoric.* This is the most important
  nuance and the reason I do not score this model at maximum strength: the textbook
  "peak margins regress down" story is **half-inverted** here. GAAP margins and ROE
  are *below* their own history because of the silicon build. So one cannot argue
  "margins are unsustainably high." The real margin-regression risk is *mix
  dilution* — moving revenue from ~98%-gross IP to 40–50%-gross merchant silicon —
  which pulls *blended* margins down structurally (not cyclically). That is a real
  regression vector, but it is a *deliberate strategic* one, not a statistical fluke,
  and it argues the *future* blended economics are lower than the IP-only past, which
  the market does not appear to be pricing.

**Net.** The model speaks loudly and in one direction on the two variables that
actually set the return — **valuation multiple** and **growth composition** — and
those readings are at clear extremes that the arithmetic says regress to a
negative forward return. It speaks *against* a naive bear on the operating
franchise. The synthesis-relevant conclusion: the *price* is a peak reading; the
*business* is durable but its forward growth and blended margins are likely lower
than the headline implies. Both point the same way for an investor at $408.85.

## Red flags

| Flag | Severity (low/med/high/fatal) | Rationale |
|---|---|---|
| Entry multiple at a peak (~231x non-GAAP, ~2.7x 200-DMA) on a momentum melt-up | high | Multiples are the most mean-reverting variable; reversion to even a generous 30–50x exit implies −40% to −70% on flawless execution. [valuation.md §4–5] |
| Headline growth carried by a +82% related-party bucket vs +7% external | high | The repeatable, arm's-length growth rate is far below the print the multiple is priced against; the +384% SoftBank consulting line and $645.8M unbilled asset are non-repeatable. [DOSSIER §8 item 2] |
| Royalty growth decelerating +27%→+11% (Q3→Q4) | medium | First soft royalty quarter of the year; may be one comp or the start of regression toward trend. [DOSSIER §8 item 8] |
| Margin mix-dilution from IP (~98%) into merchant silicon (40–50%) | medium | Blended margins regress *down* structurally as silicon scales; market appears to price the IP-only margin. [DOSSIER §6 risks; §2.1] |
| Late-cycle sector with debt-funded AI capex; SOX base rate of −30% to −82% drawdowns | medium | ARM is buffered (royalties lag) but not decoupled; a 2027 correction would hit with a lag. [DOSSIER §5; quantflowlab.com] |
| RPO backlog −7% YoY while price/multiple at peak | medium | Forward-visibility reading worsened even as the optimism reading peaked — divergence consistent with a top. [DOSSIER §2.5] |

## What would flip this read (disconfirmers)

- **Sustained external (ex-related-party) revenue growth re-accelerating to ~20%+**
  for several quarters — would show the headline growth is *durable* end-demand, not
  a borrowed/related-party peak, weakening the "growth regresses to ~7% core" claim.
- **AGI-CPU shipping at scale with gross margins materially above 50%** (vs the
  feared 40–50%), so the silicon pivot *adds* to blended economics rather than
  diluting them — turning the mix-regression flag into a tailwind.
- **A durable structural re-rating of the multiple becomes defensible** — e.g. ARM
  demonstrably converting to a recurring, royalty-rich, ~98%-margin model whose FCF
  compounds 30%+ for a decade *with SBC charged* — which would make today's multiple
  the new mean rather than an extreme. (The reverse-DCF says this requires ~35–40%
  owner-FCF growth for 15 years; observing the first few years of that would be the
  signal.)
- **Royalty growth re-accelerating above 20%** in subsequent quarters (showing the
  Q4 +11% was a comp artifact, not the onset of regression).
- A clean break in the SoftBank-related-party dependence — related-party revenue
  falling as a share while total growth holds — would show the FY26 print was not a
  one-time, non-arm's-length flatter.

## Verdict

| | |
|---|---|
| **Signal** | negative |
| **Relevance** | 4 |
| **Strength** | 4 |
| **Conviction** | 4 |
| **Fatal flaw?** | no — this model is not fatal-capable, and nothing here is a path to *permanent* capital loss or fraud; it is an overvaluation/mean-reversion argument, not a zero |

**Bottom line:** The two variables that determine an investor's return from
$408.85 — the **valuation multiple** and the **growth-rate composition** — are at
clear statistical extremes that regress to a *negative* forward return: a ~231x
non-GAAP multiple has almost no historical persistence, and the +23% headline was
carried by a +82% related-party bucket (vs +7% external) atop a decelerating
royalty line (+27%→+11%). Honesty cuts the other way on the franchise — the ISA
moat and royalty ladder genuinely resist downward reversion, and GAAP margins/ROE
are *depressed* (not euphoric), so the naive "peak margins fall" story is
half-inverted. Net: the **price** is a peak reading and the **forward economics**
are likely lower (blended-margin mix-dilution, growth normalizing toward the
external core) — both pointing to material downside for a buyer at today's price,
even on competent execution.
