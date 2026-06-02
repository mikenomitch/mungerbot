<!--
  Per-model write-up. Pricing Power lens applied to Arm Holdings (ARM).
-->
# Pricing Power — Arm Holdings (ARM)

**Discipline:** Economics  ·  **Intensity:** deep  ·  **As-of:** 2026-06-01

## What this model predicts

Munger's claim: *pricing power is the single best evidence of a moat.* "The most
important decision in evaluating a business is pricing power. If you've got the
power to raise prices without losing business to a competitor, you've got a very
good business."

The lens, stated as testable expectations. **If Arm has durable pricing power, we
should observe:**

1. **Price (per-unit economics) rising faster than inflation, on flat-to-modest
   unit volume** — i.e. revenue growth decomposing into *price/mix*, not just
   units. For Arm specifically: rising **royalty per chip** and rising **royalty
   as a % of chip ASP**.
2. **Customers absorbing increases rather than defecting** — low realized
   elasticity; no measurable volume loss when Arm raises take-rates.
3. **The supplier setting price, not the customer** — Arm able to *enforce* higher
   rates on existing relationships, including against its largest, most
   sophisticated buyers.
4. **A pricing umbrella that competitors/substitutes can't undercut** — no
   royalty-free alternative bleeding off the price-sensitive tail.
5. **Pricing power that is *banked, not borrowed*** — extracted without inviting
   regulatory, contractual, or channel retaliation that claws it back.

I will test each. Arm is an unusually clean subject for this model: a near-monopoly
IP toll booth at ~98% gross margin is the *prototype* of where pricing power should
show up. That makes the **disconfirming** evidence especially diagnostic — if a
99%-share monopolist *still* can't freely raise price, that tells us exactly where
the moat ends.

## Evidence

**Supporting** (cited):

- **The royalty ladder is the clearest pricing-power signature in the business.**
  Arm has walked ASP capture up the stack: **Armv8 ~2.5–3% → Armv9 ~5% → CSS v2
  >10% of chip ASP** (CSS v2 "the highest rates Arm has ever achieved"). Armv9
  royalty rates are "on average at least **double**" the equivalent Armv8 rate — a
  >100% per-unit increase in one architecture generation. [DOSSIER §4.2; NextPlatform
  2025-05-13; SemiAnalysis "Arm and a Leg"; The Motley Fool / Sahm Capital 2025-02-06]
- **Royalty revenue is growing on ~flat industry unit volume — the textbook
  fingerprint of price/mix.** FY2026 royalty **$2,613M (+21%)** while smartphone
  units were *flat-to-negative* (management warned of negative smartphone unit
  growth on the Q4 call). Growth is coming from **higher royalty per chip
  (v9/CSS), not more chips** — i.e. price, not volume. [DOSSIER §2.1, §7; Arm Q2
  FY2026 release: royalty +21% YoY "driven by higher royalty rates per chip such as
  Armv9 and CSS"]
- **Near-monopoly share = structurally low *competitive* elasticity in the core
  markets.** Smartphone application processors **~99–100% Arm ISA**; automotive
  **~94% of automakers**; embedded/IoT (Cortex-M) incumbent. There is no
  drop-in alternative for an Android/iOS-class SoC, so a price increase has nowhere
  to go in the near term. [DOSSIER §4.1]
- **Switching costs are real and rising.** >20M developers, >325B cumulative
  chips, an entire compiled-software base targeting the Arm ISA; re-porting to a
  new ISA is expensive and slow. CSS deepens this by bundling more pre-integrated
  Arm IP, making a customer's eventual "design-around" harder. [DOSSIER §4; Arm
  product pages for CSS-N2/V3; SemiAnalysis]
- **The data-center mix shift is a genuine price escalator.** Data-center/CSS
  royalties carry materially higher per-chip rates and are "doubling YoY" as custom
  Arm CPUs (Graviton, Axion, Cobalt, Grace/Vera) scale. Mix migration toward the
  highest-rate tier raises *blended* royalty/chip even if no single contract is
  re-priced. [DOSSIER §4; morethanmoore Q2-FY26; Futurum]
- **The "headroom" thesis quantifies how underpriced the core arguably is.** Arm
  collects only **~$0.30–0.60 per smartphone SoC (Apple <$0.30)** — vs ~$13 in
  cellular IP and ~$25 for a baseband that the *same* phone pays others. SemiAnalysis
  argues Arm could segment to **$3/$6/$12 per phone** and add **~$5.4B operating
  profit (~10x current)**. This is a real measure of *latent* pricing power: the
  gap between what Arm charges and the value it delivers is enormous. [SemiAnalysis
  "Arm and a Leg"; Tom's Hardware on Apple <$0.30/chip] — *(treat the $5.4B as the
  bull's analytical estimate, not a booked fact.)*

**Disconfirming** (cited — and decisive for calibrating the ceiling):

- **Arm tried to FORCE a ~2x rate increase on its #2 customer and LOST in court.**
  The whole Qualcomm/Nuvia fight was a pricing-power test: Arm wanted Qualcomm to
  pay **Nuvia's higher ALA royalty rate** rather than Qualcomm's own more favorable
  rate (an ~$50M/yr delta Arm was trying to capture). A Delaware jury (Dec-2024) and
  then the court (JMOL, **Sept 30 2025**) found Qualcomm did **not** breach — Arm
  could **not** unilaterally re-price the relationship. Arm is on appeal. **This is
  the single most important pricing-power datapoint in the file: when Arm pushed a
  determined, well-resourced customer on price, the customer won.** [DOSSIER §8.4;
  Qualcomm IR 2025-10-01; DCD; TrendForce]
- **Pricing power here is *opt-in upsell*, not *rate-hiking*.** Arm raises price by
  selling a **new, higher-value product** (v9, CSS) at a higher rate — the customer
  consents because the bundle is bigger. It has **not** demonstrated the ability to
  raise the rate on an *existing* product/contract against resistance (see
  Qualcomm). That is a weaker, more conditional form of pricing power than the model
  ideal ("raise prices without losing business"). The customer still chooses the
  tier. [judgment, from the v8→v9→CSS mechanism + the Qualcomm outcome]
- **A royalty-free substitute caps the price ceiling exactly where price matters
  most.** RISC-V is **$0 royalty** vs Arm's $0.10–$2.00/chip. It is already winning
  in **MCU/IoT** (~30% of RISC-V volume) and increasingly auto-MCU — the
  price-sensitive, thin-software-moat tail — and is **state-backed in China (~19%
  of Arm revenue)**. Realized elasticity is therefore **not zero** at the low end:
  the more aggressively Arm prices, the faster the substitute compounds. Qualcomm
  bought RISC-V designer **Ventana (Dec-2025)** explicitly as an Arm hedge.
  [DOSSIER §4.3; FinancialContent/RISC-V 2025-12-24; ThinkRobotics; patentpc]
- **The pricing grab has triggered a live antitrust counter-reaction — pricing
  power being clawed back by regulators.** A **US FTC formal probe (opened
  2026-05-15)** plus EU and Korea (KFTC) actions are examining whether Arm
  restricts/degrades licenses to favor its own silicon — i.e. whether it is abusing
  exactly the pricing/leverage this model prizes. Aggressive price extraction by a
  ~99%-share monopolist is the classic antitrust trigger; the bull's "$13/phone"
  dream is the precise behavior that would draw a remedy. [DOSSIER §8.5; Investing.com;
  PYMNTS]
- **Customer concentration *inverts* the leverage.** Top-3 = **42%** of revenue,
  top-5 = ~56%, and the #1 customer (**Arm China ~16–17%**) is a related party Arm
  "neither controls" and which **self-reports its own royalty base**. When 42% of
  revenue sits with five buyers — several of whom (Apple, Qualcomm, the
  hyperscalers) are building in-house cores and bankrolling RISC-V — the *buyer*
  holds meaningful counter-power over price. Apple's <$0.30/chip (half what Qualcomm
  pays) is itself evidence that the largest buyer negotiated a *discount*, not that
  Arm dictated terms. [DOSSIER §4.4; Tom's Hardware]
- **Royalty growth just decelerated to +11% in Q4 FY2026** (from +27% in Q3). One
  quarter is not a trend, but it is the opposite of what an unconstrained
  price-raiser would print, and it coincides with flat/negative units — i.e. the
  price/mix engine sputtered for a quarter. [DOSSIER §8.8]

**Independent research run for this model (sources above):** SemiAnalysis "Arm and
a Leg" (the canonical deep-dive on Arm's value-extraction strategy and its limits);
NextPlatform on the v9 ASP step-up; Qualcomm IR + DCD + TrendForce on the Nuvia
verdict mechanics; Tom's Hardware on Apple's <$0.30/chip rate; multiple RISC-V
2025–2026 trade pieces on cost-driven substitution; Arm's own Total Access /
Flexible Access licensing-model pages (subscription packaging that *bundles*
access but still collects per-chip royalty at distribution — i.e. packaging
innovation, not a demonstrated forced rate hike on shipped units).

## Reasoning

**The model is highly relevant here (relevance 5).** Arm is close to the purest
test case the pricing-power lens ever gets: a ~99%-share, ~98%-gross-margin IP
monopoly. If pricing power lives anywhere, it lives here — so both the confirming
*and* disconfirming reads are unusually informative.

**Verdict of the lens: pricing power is REAL but BOUNDED, CONDITIONAL, and largely
already harvested into the multiple — net mixed.**

What the model *confirms*: Arm has unmistakably grown **price per unit faster than
inflation on flat volume**. Royalty/chip has roughly doubled v8→v9 and more than
tripled into CSS, and royalty revenue compounds at ~20% while smartphone units are
flat-to-down. By expectation (1) and (4) above, that is a genuine moat signature,
and the *latent* headroom (charging cents on a product worth dollars) is large and
real. A Munger checklist would tick "can raise price ahead of inflation: yes."

But the model's *core* claim is stronger than "rising ASP" — it is **"raise prices
without losing business, and without it being competed/clawed away."** On that
sharper test Arm **fails three sub-tests**:

- **Enforcement (expectation 3): FAILS.** The Qualcomm/Nuvia loss is dispositive.
  Arm's pricing power is the power to *introduce* a higher-priced tier that
  customers opt into for more value — **not** the power to *impose* a higher rate on
  an unwilling large customer. Against the buyers who matter most (the 42%
  concentration), Arm is a price *negotiator*, not a price *setter*. Apple's
  half-rate discount is the same lesson in commercial form.
- **Elasticity at the margin (expectation 2): PARTIAL FAIL.** Competitive
  elasticity is ~zero in smartphones/servers *today*, but **not** zero in IoT/MCU
  and China, where a $0 substitute is compounding at 40%+. Pricing power that holds
  only where there is no substitute, and erodes exactly where you try to monetize
  the price-sensitive tail, is a pricing power with a hard ceiling. The bull's
  "$13/phone" is self-limiting: push rates that hard and you manufacture the
  RISC-V/in-house exit you fear.
- **Bankability (expectation 5): FAILS — this is the subtle, important one.** The
  more Arm *exercises* its latent pricing power (litigating customers, building rival
  silicon to capture system value, eyeing OEM-direct pricing), the more it provokes
  the **FTC/EU/KFTC** and accelerates customer diversification. Pricing power that
  triggers an antitrust remedy or a coordinated customer defection isn't durable
  pricing power — it's a one-time draw against the moat. A monopolist that has to go
  to court to collect a 2x rate, and gets a regulator in return, is showing the
  *limits* of its pricing power, not its strength.

**Check on our own bias (Munger discipline — apply the lens to the market's pricing
too).** The market has already capitalized the *bull* reading of pricing power: at
**$408.85 / ~231x non-GAAP / ~481x GAAP**, the price embeds the SemiAnalysis-style
"$13/phone, $5.4B incremental profit" upside as if it were *banked* and frictionless
— ignoring that the one time Arm tried to force a 2x rate it lost in court, and that
the strategy is generating antitrust and channel blowback. The pricing-power story
is *true enough to be dangerous*: it's a real moat being used as the narrative
justification for a price that requires the moat to be exercised far more
aggressively (and more successfully) than the evidence supports. From this lens,
the moat is positive; the **moat-at-this-price** is not — but I leave the valuation
verdict to that lens and the decision layer.

**Net for the pricing-power model:** the *business* earns a clear positive on
"price ahead of inflation on flat volume." But the model's strongest formulation —
*set* price, against your biggest customers, without competitive/regulatory
clawback — is only partly satisfied and is visibly fraying at the edges (Qualcomm
loss, RISC-V, FTC). I therefore score the signal **mixed**, tilting positive on the
underlying mechanism but explicitly flagging that the pricing power is **opt-in, not
imposed; bounded by a royalty-free substitute; and partially self-defeating when
fully exercised.** No fatal flaw — pricing power, even bounded, doesn't create a path
to *permanent capital loss* by itself (that case lives in the valuation/inversion
lenses).

## Red flags

| Flag | Severity (low/med/high/fatal) | Rationale |
|---|---|---|
| Arm lost the Qualcomm/Nuvia case — could not enforce a ~2x rate on its #2 customer | high | Direct evidence the supplier cannot *set* price against a determined large buyer; caps the model's strongest claim. [DOSSIER §8.4] |
| Royalty-free RISC-V substitute, $0 vs $0.10–$2.00/chip, winning the price-sensitive tail (IoT/MCU/China ~19% of rev) | high | Imposes a hard ceiling on pricing power exactly where Arm would monetize the long tail; realized elasticity is non-zero. [DOSSIER §4.3] |
| Aggressive price extraction has triggered live FTC/EU/KFTC antitrust probes | high | Regulators can claw back the very pricing leverage this model prizes; the "$13/phone" upside is the behavior most likely to draw a remedy. [DOSSIER §8.5] |
| Top-3 customers = 42% of revenue; largest buyer (Apple) pays a *discounted* <$0.30/chip | med | Buyer concentration + customer self-builds invert the leverage; Arm negotiates rather than dictates with the accounts that matter. [DOSSIER §4.4] |
| Pricing power is "sell a new higher tier" (opt-in), not "raise the rate on shipped product" (imposed) | med | A weaker, more conditional form of pricing power than the model ideal; depends on continuously out-running customers with new value. [judgment] |
| Royalty growth decelerated to +11% in Q4 FY2026 vs +27% prior quarter, on flat/negative units | low | One quarter, but the price/mix engine sputtered; not what an unconstrained price-raiser prints. [DOSSIER §8.8] |
| The full bull pricing case (~$5.4B incremental profit) is already in a ~231x multiple | med | Market has capitalized *unexercised, frictionless* pricing power as if banked — a bias to guard against, not a property of the business. [DOSSIER §3; SemiAnalysis] |

## What would flip this read (disconfirmers)

**Would push the signal more POSITIVE:**
- Arm **wins the appeal** of Qualcomm/Nuvia (Third Circuit) *and/or* prevails in the
  Q4-CY2026 second Qualcomm trial — demonstrating it can in fact enforce higher
  rates against a top customer.
- Evidence Arm successfully **re-prices existing high-volume contracts upward**
  (not just sells new CSS tiers) without volume loss — e.g. a disclosed step-up in
  *blended royalty/chip* on a stable design base, or successful OEM-direct pricing
  at scale.
- FTC/EU/KFTC probes **close without remedy**, removing the regulatory clawback risk
  on price.
- RISC-V share **stalls** outside IoT (fails to take any meaningful smartphone/
  general-server socket by FY2028), confirming a durable price umbrella.

**Would push the signal more NEGATIVE:**
- A **major customer publicly moves volume** (Qualcomm/Apple/a hyperscaler) to an
  in-house ISA or RISC-V in response to Arm pricing — realized elasticity made
  visible.
- An **FTC/EU consent decree** that constrains Arm's license pricing or forces
  separation of the licensing-vs-silicon conflict.
- Royalty/chip growth **decelerates further** (the +11% Q4 print becomes a trend),
  showing the v9/CSS upgrade cycle, not durable pricing power, was doing the work.
- Arm China royalty **self-reporting** is revised down, revealing the "price"
  captured from the #1 customer was overstated.

## Verdict

| | |
|---|---|
| **Signal** | mixed (mechanism positive; the strong form of pricing power is bounded and partly self-defeating) |
| **Relevance** | 5 |
| **Strength** | 3 |
| **Conviction** | 4 |
| **Fatal flaw?** | no — bounded pricing power does not by itself create a path to permanent capital loss; that case sits in the valuation/inversion lenses |

**Bottom line:** Arm passes the *first* pricing-power test cleanly — it has raised
price per unit (royalty/chip roughly doubled v8→v9, tripled into CSS) far ahead of
inflation on flat-to-negative volume, the signature of a real moat, with large
latent headroom (cents charged on IP worth dollars). But it **fails the model's
stronger test**: when Arm tried to *impose* a ~2x rate on its #2 customer it **lost
in court (Qualcomm/Nuvia)**, its biggest buyer (Apple) pays a *discounted* rate, a
**$0-royalty substitute (RISC-V)** caps the ceiling where price matters most, and
aggressively exercising the pricing power has summoned a **live FTC antitrust probe**.
The pricing power is therefore real but **opt-in, bounded, and partially
self-defeating** — and the market at ~231x has already capitalized the *frictionless
bull* version of it. Positive lens on the business; this model is not, on its own,
a reason to underwrite the price.
