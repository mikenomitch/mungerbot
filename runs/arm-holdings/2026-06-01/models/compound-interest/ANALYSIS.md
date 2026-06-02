<!--
  Per-model write-up. Compound Interest lens applied to Arm Holdings.
-->
# Compound Interest — Arm Holdings (ARM)

**Discipline:** Mathematics  ·  **Intensity:** standard  ·  **As-of:** 2026-06-01

## What this model predicts

The long-run return on a business held forever converges on the value its compounding
engine generates, which is the product of two terms:

> **Intrinsic compounding ≈ Reinvestment rate × Incremental ROIC** (the rate at which
> equity value compounds), bounded by **how many years** the company can keep
> reinvesting at that incremental return (the *runway*).

The price you pay is a separate, third lever: even a great compounder delivers a poor
return if you overpay, because your return ≈ (business compounding) adjusted for the
multiple you enter and exit at. Munger: *"The first rule of compounding: never interrupt
it unnecessarily"* — but also, the engine only matters if **incremental ROIC > cost of
capital**. Below WACC, reinvestment *destroys* value, and more reinvestment makes it
worse.

If this model applies **favorably** to Arm, we should observe:
1. **High and stable/rising incremental ROIC** — each new dollar Arm retains and
   reinvests (mostly R&D) should throw off well above its ~10–11% WACC.
2. **A long reinvestment runway** — a large, growing TAM into which Arm can pour capital
   at those high returns for a decade-plus.
3. **High reinvestment rate** financed internally — retaining most earnings (no
   dividend) is *correct* if and only if (1) holds.
4. **Owner earnings that actually compound** — real, distributable cash that grows, not
   accounting earnings inflated by non-cash add-backs.
5. **An entry price that lets the owner capture the compounding** rather than pre-paying
   decades of it.

## Evidence

**Supporting** (cited):
- **The royalty ladder is a genuine compounding flywheel on the IP side.** Arm grows
  royalty revenue on roughly *flat* unit volume by climbing per-chip take rates:
  Armv8 ~2.5–3% → Armv9 ~5% → CSS >10% of chip ASP (CSS v2 the highest ever). v9 attach
  target 60–70% (currently ~25–31% of royalties), CSS ~20% of royalties and growing.
  [DOSSIER §4.2; Arm Q1 FY26; Futurum Q2 FY26] This is value-accretive reinvestment with
  little incremental capital — the textbook high-ROIC mechanism.
- **The reinvestment *runway* is real and large.** Management's silicon-TAM goes
  $535B (FY2026) → >$1.5T (FY2031); data-center server-CPU share rose 11.5% → 17.7% of
  units YoY (Mercury Research Q1'26); ~50% of compute shipped to top hyperscalers in 2025
  is Arm-based. [DOSSIER §4.1, §5] There is, undeniably, *somewhere to put the money* for
  many years.
- **Reinvestment is heavy and internally funded.** R&D is now **$2,776M = 56% of
  revenue** (up from ~31% in FY22); capex inflected to **$545M = 11% of revenue**.
  Combined gross reinvestment ≈ **67% of revenue**, funded entirely from a fortress
  net-cash balance sheet (~$3.1–3.2B net cash, debt/equity 0.05). [DOSSIER §2.1, §2.2,
  §2.3] No dividend, no buyback — by the book for a putative compounder.
- **Contracted visibility de-risks part of the runway.** 60–70% of forecast royalty
  revenue through 2031 is under existing contracts; ~85% of expected Cloud-AI royalties
  already contracted. [investing.com Q4 FY26; gurufocus] The runway is not purely
  speculative.

**Disconfirming** (cited):
- **Incremental ROIC is thin and *falling* — the load-bearing failure.** Clean ROIC is
  **~13–15% vs ~10.5% WACC — only a thin positive spread, NOT wide-moat 30%+ economics**;
  ROE fell 13.1% → **12.0%** and ROA 10.8% → **7.2%** YoY *as cash piles up undeployed and
  the AGI-CPU R&D is expensed ahead of revenue*. [DOSSIER §2.4] Third-party ROIC
  estimates cluster 11.9–14.9% (GuruFocus 11.91% Dec-2025; ValueSense/MLQ ~14.3–14.9%),
  *below the ~22.7% peer median*. [gurufocus.com/term/roic/ARM; valuesense.io;
  mlq.ai/stocks/ARM/roic]
- **Marginal returns on the *latest* reinvestment are worse than the average.**
  FY25→FY26: revenue grew **+$913M** but GAAP operating income grew only **+$69M** — a
  **~7.6% incremental operating margin** on a business whose *average* operating margin is
  ~18%. NOPAT@22% on that increment ≈ **+$54M** against an invested-capital increase of
  hundreds of millions (R&D +$705M; PP&E doubled to $772M; capex $545M). The newest
  dollars are compounding *below* the average and plausibly **below WACC**. [DOSSIER §2.1,
  §2.2] (Judgment: a fair chunk of this is the AGI-CPU pre-revenue R&D drag, but that is
  exactly the point — the *next leg* of reinvestment is a lower-return, capital-heavier
  business by management's own model.)
- **The "compounding owner earnings" are largely accounting, not cash.** Once SBC
  (~$1,052M = 21% of revenue) is charged as the real labor cost it is, **owner free cash
  flow has been roughly zero-to-negative for three straight years: −$39M (FY24), −$642M
  (FY25), −$73M (FY26)**. [DOSSIER §2.2] A compounding machine that produces ~zero
  distributable owner cash is, on this lens, *not yet compounding* for shareholders — it
  is compounding the engineering headcount's equity.
- **The pivot lowers the incremental ROIC by design.** Management's *own* FY2031 model
  splits into IP/CSS at >65% non-GAAP operating margin **and AGI-CPU silicon at only >30%**
  — i.e. Arm is deliberately redirecting the marginal reinvestment dollar from a
  ~98%-gross-margin / capital-light toll into a **40–50%-gross-margin, capex- and
  inventory-heavy merchant-silicon** business. [investing.com Q4 FY26; DOSSIER §8 item 6]
  Mix shift = a structurally *lower* blended incremental ROIC and a *higher* capital
  intensity going forward (capex 1–3% → 11% of revenue already).
- **Royalty growth — the high-ROIC flywheel — is decelerating.** Royalty growth slowed to
  **+11% in Q4 FY26** (from +27% in Q3); smartphone unit growth is turning *negative* on
  the memory shortage, so the ladder must do more work just to stand still. [DOSSIER §8
  item 8; Arm Q4 FY26 release; heygotrade] The very mechanism that delivers high
  incremental returns is losing pace.
- **Reported growth quality is poor.** Related parties supplied the **majority of FY26
  growth (+82% YoY vs +7% external)**, including a **$645.8M unbilled** SoftBank-affiliate
  contract asset and Arm-China self-reported royalties. [DOSSIER §8 item 2] If the
  high-quality *external* compounding is only +7%, the genuine reinvestment-driven
  compounding engine is running far slower than the headline +23%.

**Independent research run for this model:**
- Confirmed management's FY2031 frame: ~$25B total revenue ($10B IP/CSS at >65% op
  margin + $15B AGI-CPU at >30% op margin), >$9 non-GAAP EPS. [investing.com 2026; gurufocus
  "Arm Targets $9 EPS by FY31"] This is the cleanest statement of the deliberate
  *down-shift* in incremental margin/ROIC as the business mix changes.
- Confirmed ROIC magnitude across independent sources (11.9–14.9%) and that it sits
  *below* the semiconductor-peer median (~22.7%) despite Arm's ~98% gross margin — the
  thin-spread read is not an artifact of one data provider. [gurufocus; valuesense; mlq.ai]
- Confirmed CSS royalty rate >10% of ASP and the v9/CSS ladder as the per-chip ASP driver
  offsetting flat/negative units. [Futurum Q2 FY26; TIKR; morethanmoore Q2 FY26]

## Reasoning

**The runway is long; the *return on the runway* is the problem — and the price negates
even the optimistic version.** Compound Interest decomposes into three questions, and Arm
splits cleanly: it passes the *runway* test, fails the *incremental-return* test, and the
*price* lever then overwhelms everything.

1. **Runway (favorable).** There is plainly a multi-decade TAM (mobile lock-in +
   data-center share gains + AI). On runway alone, Arm is a rare "still has somewhere to
   reinvest" business. This is the model's positive contribution and it is real.

2. **Incremental ROIC (unfavorable, and this is decisive for the model).** The math of
   compounding is unforgiving: value compounds at *reinvestment rate × incremental ROIC*,
   and Arm's incremental ROIC is **~13–15% and falling**, against a ~10.5% WACC. A high
   reinvestment rate (67% of revenue) **multiplied by a thin, deteriorating spread**
   produces only *modest* intrinsic compounding — and the *marginal* dollar (FY25→FY26
   incremental op margin ~7.6%; the AGI-CPU mix at >30% vs >65% IP margin) is compounding
   at a *lower* rate than the average. When you reinvest aggressively at a return that is
   converging toward (or below) WACC, you are not getting Munger's "sit-on-your-ass"
   compounder; you are getting a capital-hungry growth business whose *quality of
   compounding is degrading*. The fortress balance sheet and zero leverage mean the engine
   is honestly funded — but honest funding of low-spread reinvestment still compounds
   slowly.

3. **Owner earnings (unfavorable).** The compounding the market is paying for is
   *non-GAAP* ($1.77 EPS, ~2.1x GAAP $0.85). On an owner-earnings basis — SBC expensed —
   the machine has thrown off **~zero net distributable cash for three years**. You cannot
   compound owner wealth on cash that is being handed to employees as equity. The "no
   dividend / no buyback, retain-and-reinvest" policy is *defensible only if incremental
   ROIC is high*; here it sits atop a thin spread and persistent ~0.5–1%/yr dilution, so
   the retention is leaking, not compounding.

4. **Price (fatal to the *thesis*, though not to the *business*).** This is where the
   model is most emphatic. Even granting the bull runway and management *hitting* >$9
   FY2031 EPS, the 5-yr return from $408.85 is **−10.7%/yr at 25x exit, −1.9%/yr at 40x,
   +2.5%/yr at 50x**; to earn ~11.5%/yr the market must *still* pay ~76x in 2031. [DOSSIER
   §3.2] The entry multiple (~231x non-GAAP / ~481x GAAP, ~88x EV/Sales) **pre-pays the
   entire decade of compounding and then some.** Munger's rule cuts the other way here:
   *the surest way to interrupt compounding is to pay a price that already contains it.*
   You are not buying a compounding engine; you are buying its next ~15–20 years of
   best-case output up front.

**Where the model is a stretch:** Arm is genuinely an IP/optionality business in a
hyper-growth end-market, so a pure mechanical "reinvestment × ROIC" frame understates the
*option value* of the data-center and AI ramp (a real call option if the AGI-CPU works).
The model also can't fully price the convexity of the royalty ladder if v9/CSS attach
overshoots. So I down-weight slightly for relevance — but not much, because the model's
*central* claim (thin, falling incremental ROIC + a price that has already capitalized the
runway = poor forward owner-return) is exactly the disease this lens is built to detect,
and the evidence for it is strong and primary-sourced.

**Check on our own bias:** the bullish trap is to see the long runway and a 98% *gross*
margin and assume high *incremental ROIC* follows. It does not — the bottleneck is R&D and
(now) capex intensity, which compress the return on each reinvested dollar. I have tried to
falsify the negative read (see disconfirmers) and the strongest counter is the contracted
60–70% of FY2031 royalties; but contracted *revenue* at a *lower incremental margin* does
not rescue incremental *ROIC*.

## Red flags

| Flag | Severity | Rationale |
|---|---|---|
| Incremental ROIC ~13–15% and falling, only ~3–5pts over WACC | high | Compounding ≈ reinvestment × spread; a thin, shrinking spread means slow intrinsic compounding despite heavy reinvestment. |
| Marginal reinvestment compounding *below* the average (FY25→FY26 incremental op margin ~7.6%) | high | The newest dollars — and the AGI-CPU mix at >30% vs >65% IP margin — earn less; mix shift lowers blended incremental ROIC by design. |
| Owner FCF (SBC-expensed) ~zero/negative for 3 yrs | high | No distributable owner cash means the "compounding" accrues to employees' equity, not shareholders. |
| Capital intensity inflecting (capex 1–3% → 11% of revenue) | medium | Merchant-silicon pivot raises the capital each reinvested dollar requires, mechanically lowering ROIC and FCF conversion. |
| Royalty (high-ROIC flywheel) decelerating to +11% | medium | The mechanism that delivers high incremental returns is losing momentum just as units turn negative. |
| Price has pre-capitalized the entire runway (~231x non-GAAP) | high (to the investment) | Even best-case compounding to FY2031 yields negative-to-low forward returns at any sane exit multiple. |

## What would flip this read (disconfirmers)

- **Incremental ROIC inflects clearly upward** — e.g., AGI-CPU ramps to material revenue at
  the promised >30% non-GAAP op margin *and* IP/CSS holds >65%, lifting *blended* return on
  the marginal dollar back toward 20%+ with capex/revenue stabilizing. Watch the FY27–FY28
  incremental operating margin on each new revenue dollar.
- **Owner FCF turns durably and materially positive** (SBC normalizes toward <10% of
  revenue and FCF-less-SBC compounds), proving the engine produces distributable cash, not
  just non-GAAP EPS.
- **Royalty re-accelerates** (back above ~20%) on v9/CSS attach overshoot + data-center,
  demonstrating the high-ROIC flywheel still has slope and units no longer cap it.
- **External (non-related-party) revenue compounds at 20%+**, showing the genuine
  reinvestment engine — not SoftBank-affiliate bookings — is what's growing.
- **Price resets** to a level where the entry multiple no longer pre-pays the runway (a
  multiple at which even base-case compounding clears WACC) — this would convert a great
  *business runway* into a buyable *owner return*.

## Verdict

| | |
|---|---|
| **Signal** | negative |
| **Relevance** | 4 |
| **Strength** | 4 |
| **Conviction** | 4 |
| **Fatal flaw?** | no — this model is not fatal-capable (no path to permanent loss/fraud *from this lens*); the negative signal is about return adequacy, not solvency |

**Bottom line:** Arm has the rare thing a compounder needs — a long reinvestment runway —
but fails the part of the equation that actually creates value: its **incremental ROIC is
only ~13–15% and falling**, barely above a ~10.5% WACC, and the **marginal** dollar
(FY25→FY26 incremental op margin ~7.6%; the AGI-CPU pivot at >30% vs >65% IP margin)
compounds even *worse* while capital intensity rises and owner FCF (SBC-expensed) has been
~zero for three years. Heavy reinvestment × a thin, deteriorating spread = modest intrinsic
compounding — and at ~231x non-GAAP the price has already capitalized the entire best-case
decade, so even if management hits its >$9 FY2031 EPS the forward owner return is negative
to low-single-digit. The compounding engine is real but slow, and the price has interrupted
it before the owner can collect.
