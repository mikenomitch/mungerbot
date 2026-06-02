# Competitive Advantage / Moats — Arm Holdings (ARM)

**Discipline:** Economics  ·  **Intensity:** deep  ·  **As-of:** 2026-06-01

## What this model predicts

A durable moat is the only thing that lets a business out-earn its cost of capital
for long enough to compound. Munger's test is not "is there a moat today?" but **"is
the moat widening or narrowing?"** — because the market pays for *future* excess
returns, and a narrowing moat means the excess returns are being competed away faster
than the price assumes.

If Arm has a **wide and widening** moat, this model predicts we should observe, in
order of evidentiary weight:

1. **Sustained ROIC comfortably above WACC** — and the spread *holding or widening*,
   not compressing. A true wide moat looks like 25–40%+ ROIC, not a thin spread.
2. **Pricing power**: the ability to raise price (here, royalty per chip) faster than
   inflation/volume, *without* losing the customer. The cleanest tell is revenue rising
   while units are flat or falling.
3. **Customer captivity / high switching costs** — customers who *grumble but stay*,
   and who fund alternatives but don't actually leave.
4. **A widening, not eroding, share in the markets that matter** — and critically, the
   incumbent NOT taking actions that invite customers to defect.
5. **No credible, well-funded substitute closing the gap.**

I test each below, then render the central judgment: **direction of the moat.**

## Evidence

**Supporting — the moat is real and, on the pricing axis, WIDENING** (cited):

- **Near-monopoly in the core franchises.** Smartphone/tablet application processors
  are **~99–100% Arm ISA**; automotive **~94% of automakers**; embedded (Cortex-M) is
  the incumbent standard. [DOSSIER §1, §4.1; Arm FY2025 20-F + industry consensus]
- **The royalty ladder is the pricing-power flywheel, and it is climbing.** Royalty per
  chip rises by architecture generation: **Armv8 ~2.5–3.0% of ASP → Armv9 ~5% → CSS
  >10%** (CSS v2 the highest in Arm's history). [DOSSIER §4.2, Table 4; EE Times via
  morethanmoore; mlq.ai] Management is steering the mix up: Armv9 ~25–31% of royalties
  today with a **60–70% long-term attach target**, and CSS already ~20% of royalties and
  growing. [EE Times Q1 FYE26; investing.com SWOT 2026]
- **The textbook signature of pricing power: revenue up while units flatten.** Q2 FY26
  royalty grew **+27% to a record $737M** even as the smartphone market faces *negative
  unit growth*, because higher-value architectures lift royalty per chip "even if unit
  volumes remain flat." The top-4 Android vendors all ship CSS-powered devices. [Arm Q2
  FYE26 6-K via search; investing.com SWOT 2026] **Judgment:** growing revenue on flat/
  declining units is the single most direct empirical proof of pricing power, and Arm
  has it.
- **Switching costs are high and demonstrably binding.** Re-porting/re-validating "the
  vast majority of the world's software" across >20M developers and >325B cumulative
  chips imposes enormous switching cost. The proof is behavioral: **the same hyperscalers
  and Apple/Qualcomm that fund RISC-V and build in-house cores still pay Arm an ALA +
  royalty** — they grumble but stay. [DOSSIER §4; porter-five-forces.md; competition lane]
- **A positive ROIC–WACC spread exists.** Clean ROIC **~13.7%** (NOPAT@22% / IC excl.
  excess cash), with tangible-IC ROIC ~21.5%, vs **WACC ~10.5%**. Third-party TTM ROIC
  prints **~14.3–14.6%**. [DOSSIER §2.4; GuruFocus 12/2025 (ROIC 11.91%, WACC 10.47%);
  Value Sense] So the moat *does* currently generate excess returns — a necessary
  condition is met.
- **Gross margin ~97.5%** and rising — the asset-light IP toll booth still throws off
  near-software economics on the legacy book. [DOSSIER §2.1]
- **Morningstar rates Arm WIDE moat** (independent expert read), grounded in network
  effects + switching costs + R&D scale-amortization. [Morningstar, "A Wide Moat, but We
  Think It's Expensive"; corroborated by competition lane's "wide but softening" read]

**Disconfirming — the moat is NARROWING at every edge, and the economics are only thin**
(cited):

- **The ROIC–WACC spread is THIN, not wide-moat.** ~13.7% ROIC vs ~10.5% WACC is a
  **~3-point** spread — value-creating, but a fraction of the 20–30 point spreads that
  define genuine wide moats (Visa, Moody's, etc.). ROE is **12.0% and *falling*** (from
  13.1%), ROA fell 10.8%→7.2%. **Judgment:** the spread is going the *wrong way* — the
  most important fact for a "widening vs narrowing" verdict, and it points narrowing on
  the *returns* axis even as pricing power rises. [DOSSIER §2.4]
- **The AGI-CPU pivot is self-inflicted moat erosion.** On 2026-03-24 Arm shipped its own
  finished data-center chip, **ending a 35-year neutrality promise** and becoming a
  *direct competitor to its own royalty-paying customers*. Multiple independent analysts:
  this "introduces significant channel conflict, risking alienation of long-standing IP
  licensees and potential adoption of alternative architectures"; "trust forms the
  foundation of licensing relationships." [investing.com SWOT 2026; Tom's Hardware;
  DOSSIER §4.3] A moat built on *being trusted Switzerland* is structurally weakened the
  day you pick up a rifle.
- **Arm LOST the Qualcomm/Nuvia fight — the moat's enforceability is capped.** Dec-2024
  jury + **Sept-30-2025 judgment as a matter of law** found Qualcomm/Nuvia properly
  licensed; Arm's attempt to tighten license terms / control the custom-core market
  **failed**. A second Qualcomm suit (improper interference + antitrust) goes to **trial
  Q4 CY2026**. [DOSSIER §8.4; Qualcomm IR "Complete Victory"; The Register 2025-10-01]
  **Judgment:** a moat you cannot enforce in court against your most sophisticated
  customer is narrower than the headline share suggests — buyer-side leverage just got
  *demonstrated*.
- **Live FTC antitrust probe (opened 2026-05-15)** into whether Arm degrades/denies CPU
  licenses to Apple/Qualcomm/Nvidia to favor its own silicon — plus EU and Korea (KFTC)
  actions. A regulatory outcome could **force structural separation** of the licensing-vs-
  silicon conflict, i.e. forcibly cap the moat. [DOSSIER §8.5; Tom's Hardware]
- **RISC-V is the named, well-funded substitute and it is advancing.** Royalty-free open
  ISA backed by the very firms that pay Arm (Qualcomm, Google, Meta, Nvidia,
  Bosch/Infineon/NXP, Alibaba/Ventana, China's silicon-sovereignty drive). **Qualcomm
  acquired RISC-V server-core designer Ventana (closed ~Dec-2025, ~$2.4B)** explicitly as
  an Arm hedge / "second path." [DOSSIER §4.3; DCD; Tom's Hardware; The Register
  2025-12-10] It is winning in MCU/IoT/auto-MCU *now*; not yet in smartphones or
  general-purpose servers — but it is closing the gap exactly where Arm's *new growth*
  (data center) lives, and is most dangerous in the ~19%-of-revenue China market.
- **The moat is migrating into a more contested arena.** Arm's incremental growth is in
  **data center**, where it holds only **~17.7% of total server-CPU units** (up from
  11.5%, so gaining — but from a minority base, against entrenched x86 AND RISC-V), vs
  ~99% in its legacy mobile fortress. New moat is being built on weaker ground than the
  old one. [DOSSIER §4.1; Mercury Research Q1'26]
- **Customer concentration is a moat *vulnerability*: top-3 = 42%, top-5 = ~56%** of
  revenue; the #1 customer is **Arm China (~16–17%)**, which Arm *does not control* and
  which is its sole China channel sitting atop the strongest RISC-V threat. Concentrated,
  sophisticated buyers who can vertically integrate cap pricing power at the top end.
  [DOSSIER §4.4]
- **The pivot is compressing the very economics the moat is supposed to protect.** Moving
  from a **>95%-gross-margin IP licensor to a 40–50%-margin merchant-silicon** business;
  **capex inflected from ~1–3% to 11% of revenue ($545M)**; non-GAAP operating margin
  already fell 46.7%→43.0% YoY; R&D is now 56% of revenue. **Owner FCF (FCF less SBC) has
  been roughly zero-to-negative for three straight years.** [DOSSIER §2.1–2.2, §8.6]
  **Judgment:** a moat that no longer converts to owner cash is an economically narrower
  moat regardless of the share statistics.
- **Forward visibility softened: RPO (contracted backlog) FELL 7% YoY** even as ACV rose
  22%, and **Q4 royalty growth decelerated to +11%** from +27%. The toll-booth's forward
  ticket sales thinned. [DOSSIER §2.5, §8.8]

**Independent research run for this model** (sources inline above): EE Times/morethanmoore
and mlq.ai on the royalty-rate ladder and v9/CSS attach; investing.com SWOT (Apr-2026) for
the bifurcated bull/bear moat framing; DCD/Tom's Hardware/The Register on the Qualcomm
victory and the Ventana acquisition; Tom's Hardware on the FTC probe; GuruFocus/Value Sense
for third-party ROIC/WACC. Note a **field disagreement**: Morningstar = "wide moat";
algorithmic screens (artificall) = "narrow/eroding, value destruction" — but the latter
uses an **outlier WACC of 24.37%** that is not credible for a net-cash, $437B-cap
business; on a defensible ~10.5% WACC the spread is positive, so I discount the "value
destruction" claim while keeping its directional concern (returns compressing).

## Reasoning

This is a high-relevance model for Arm — competitive advantage *is* the entire investment
thesis at 231x non-GAAP earnings. The lens applies with full force.

**The central finding is a split-direction moat.** On the **pricing-power axis the moat is
genuinely WIDENING**: the v8→v9→CSS royalty ladder lets Arm extract a rising share of each
chip's value, and it is provably doing so — growing royalty revenue while smartphone units
flatten is the cleanest empirical proof of pricing power that exists, and Arm has it. This
is the real, durable part of the story and it is why Morningstar (rightly) calls it a wide
moat. The switching-cost/ecosystem network effect underneath it is also genuine: the
behavioral proof is that customers who *fund the alternative* still pay.

**But on the two axes Munger weighs most heavily for a *widening-vs-narrowing* verdict — the
ROIC-WACC spread and the strategic posture — the moat is NARROWING:**

1. **The excess-return spread is thin AND compressing.** A wide moat should print 20–30+
   points of ROIC over WACC; Arm prints ~3, and ROE/ROA are *falling*. The moat captures
   value at the chip level but leaks it before it reaches owners — via ~21%-of-revenue SBC,
   a margin-mix shift into low-margin silicon, and an 11%-of-revenue capex regime. *Owner
   FCF has been negative-to-zero for three years.* A moat that doesn't compound owner cash
   is, for an owner, a narrowing moat.

2. **Management is actively narrowing its own moat.** The defining strategic act of 2026 —
   shipping the AGI CPU — trades Arm's most valuable, least replicable asset (neutral-
   Switzerland trust across the entire industry) for a contested, capital-heavy, 40-50%-
   margin merchant-silicon business. Every customer now has a *reason* to diversify toward
   in-house designs and RISC-V that did not exist in 2024. The lost Qualcomm case proved
   the license terms are not as enforceable as assumed, and the FTC probe raises the
   probability that the conflict is resolved *against* Arm. **This is the inversion Munger
   would flag: the company is dismantling the very moat the valuation capitalizes.**

The RISC-V substitute is real but *not yet* the binding threat in mobile/servers — its
danger is that it provides customers a credible *exit option*, which structurally caps how
hard Arm can push the royalty ladder before triggering defection. The Ventana acquisition
shows a top customer building exactly that exit ramp.

**Net moat-direction judgment:** Arm has a **wide moat in its legacy franchises whose
pricing power is widening, sitting inside a moat whose *edges and economics are narrowing*
— and management is accelerating the narrowing in pursuit of a larger but lower-quality
business.** For Munger's purposes ("widening or narrowing?"), the honest answer is
**mixed, tilting toward narrowing on the dimensions that determine durable owner returns.**

**Check on our own bias (per the contract):** the bull narrative ("ubiquitous, irreplaceable,
RISC-V can't displace it") is seductive and *partly true* — I must not let the dramatic
price action or the channel-conflict headlines make me under-weight the genuinely durable
pricing-power flywheel. Conversely, "wide moat" is an availability-heuristic trap here: the
*share* is wide, but **share != economic moat width**, and the ~3-point ROIC spread is the
disciplining fact. I weight the spread and the FCF over the share statistic.

This model does **not** by itself disqualify the investment — a thin-but-positive,
softening moat is a *quality* concern, not a *path-to-zero*. The fatal-loss case (SoftBank
pledge / antitrust break-up / China) lives in the inversion and incentives models. My lens
says: the moat is too thin and too clearly narrowing to justify economics that require
35–40% FCF compounding for 15 years. **Signal: mixed, leaning negative** — the moat is real
but is being *traded down*, and the price assumes it is being traded *up*.

## Red flags

| Flag | Severity (low/med/high/fatal) | Rationale |
|---|---|---|
| ROIC–WACC spread only ~3 pts and ROE/ROA falling | **high** | A wide moat should print 20–30+ pts; thin & compressing spread contradicts the "wide-moat compounder" valuation. [DOSSIER §2.4] |
| AGI-CPU pivot ends neutrality -> channel conflict | **high** | Trades the least-replicable moat asset (industry trust) for a low-margin contested business; invites customer defection. [DOSSIER §4.3; investing.com SWOT] |
| Lost Qualcomm/Nuvia case -> license terms not enforceable | **high** | Demonstrated cap on buyer-side leverage; Q4-CY2026 antitrust trial is a binary moat catalyst. [DOSSIER §8.4] |
| FTC + EU + KFTC probes could force structural separation | **high** | A regulatory outcome can forcibly narrow the moat / split licensing from silicon. [DOSSIER §8.5] |
| Margin/FCF compression from silicon mix + 11% capex | **high** | Moat no longer converts to owner cash; owner FCF negative-to-zero 3 yrs running. [DOSSIER §2.2] |
| RISC-V as funded customer exit option (Qualcomm/Ventana) | **med** | Caps royalty-ladder pricing power; advancing in MCU/auto/China, not yet mobile/server. [DOSSIER §4.3] |
| Customer concentration (top-3 42%, Arm China #1, uncontrolled) | **med** | Sophisticated buyers who can vertically integrate; China overlaps strongest RISC-V threat. [DOSSIER §4.4] |
| RPO -7% YoY and royalty growth decel to +11% | **med** | Forward visibility and royalty momentum softened vs a year ago. [DOSSIER §2.5, §8.8] |

## What would flip this read (disconfirmers)

- **Spread widens, not narrows:** clean ROIC moving toward 20%+ with the WACC spread
  expanding, and **owner FCF (post-SBC) turning durably positive** as v9/CSS mix lifts
  blended royalty per chip faster than silicon dilutes margin. That would convert
  "pricing power up but economics thin" into a true widening wide moat -> flip toward
  positive.
- **AGI-CPU proves *accretive to the ecosystem* rather than corrosive:** major customers
  publicly *expand* Arm commitments after the pivot (no defection, no acceleration of
  in-house/RISC-V roadmaps), demonstrating switching costs dominate channel-conflict
  fear -> removes the biggest narrowing factor.
- **Arm wins the Q4-CY2026 Qualcomm trial AND the FTC closes without remedy**, restoring
  demonstrated license enforceability and removing the structural-separation tail ->
  re-widens the enforceable moat.
- **RISC-V stalls in servers/auto** (e.g., Ventana/Qualcomm RISC-V server effort fails to
  reach production scale, China RISC-V remains MCU-only) -> removes the customer exit
  option that caps pricing power.
- **v9/CSS attach hits the 60–70% target ahead of plan with royalty re-accelerating**
  while units recover -> reaffirms pricing-power widening as the dominant force.

Conversely, the read worsens if: a **named top-5 customer migrates a flagship line to
RISC-V end-to-end** (latent -> realized substitution), the **FTC forces structural
separation**, or **royalty growth decelerates for a second consecutive quarter** absent a
clear timing explanation (pricing power eroding, not just lumpy).

## Verdict

| | |
|---|---|
| **Signal** | mixed (leaning negative) |
| **Relevance** | 5 |
| **Strength** | 4 |
| **Conviction** | 3 |
| **Fatal flaw?** | no — a thin, softening moat is a quality/durability concern, not a standalone path to permanent capital loss; the fatal-loss case lives in the inversion/incentives lenses |

**Bottom line:** Arm has a genuinely **wide moat in mobile/embedded with provable,
*widening* pricing power** — the v8->v9->CSS royalty ladder lifts revenue even as smartphone
units fall, the cleanest evidence of pricing power that exists, and switching costs visibly
keep customers who fund the alternative. **But on the dimensions Munger weighs for
"widening vs narrowing," the moat is narrowing:** the ROIC–WACC spread is only ~3 points and
*compressing*, owner FCF has been zero-to-negative for three years, and management is
actively trading away its most irreplaceable asset — neutral-Switzerland trust — by shipping
its own data-center chip into a capital-heavy, 40-50%-margin, channel-conflicted, FTC-probed
business. The moat is real but is being *traded down* in quality precisely as the ~231x
valuation capitalizes it being traded *up*; that mismatch, not a path to zero, is what my
lens flags.
