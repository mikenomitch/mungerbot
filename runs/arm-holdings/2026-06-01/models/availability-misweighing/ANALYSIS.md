<!--
  Per-model write-up. availability-misweighing.
-->
# Availability-Misweighing — Arm Holdings (ARM)

**Discipline:** Psychology  ·  **Intensity:** standard  ·  **As-of:** 2026-06-01

## What this model predicts

The availability heuristic (Tversky & Kahneman) says people judge probability by how *easily examples come to mind*, not by frequency. Vivid, recent, emotionally charged events get over-weighted; boring, ambient base rates get under-weighted. Munger's corollary for markets: prices over-react to salient narratives and forget the dull arithmetic of how this *kind* of business, and this *kind* of valuation, actually tends to play out.

Applied to ARM, the model is a lens with two testable expectations and a self-check:

1. **On the subject (the market's pricing).** If availability bias is driving ARM's price, we should see: (a) the move concentrated around *vivid, recent, easily-recalled events* (a flashy chip launch, an "AI/AGI" headline) rather than around ARM's own dull fundamentals; (b) the price detached from the *boring base rate* of the business's actual long-run growth; and (c) the valuation detached from the *boring base rate* of what extreme-multiple stocks have historically returned. If instead the move tracks a sober re-rating of cash flows, the model does **not** apply and I should say so.
2. **Re-anchor on base rates.** The model's prescription is constructive, not just diagnostic: replace the vivid story with the relevant reference classes — (i) ARM's own multi-year growth rate, (ii) the fade rate of hyper-growth companies generally, (iii) the forward-return distribution of stocks bought at >40x sales. Then ask whether today's price is consistent with those base rates.
3. **Self-check (apply the bias to our own analysis).** Am *I* over-weighting a vivid bear anecdote (Sun Microsystems, the dot-com crash) and under-weighting the genuinely changed base rate — that ARM is a near-monopoly ISA with a software network effect that the typical 2000-vintage hardware bubble stock never had? A disciplined application must steelman the bull's "this time the base rate is different" claim.

**If the model applies favorably to a SHORT/PASS read, we should observe:** the rally pinned to partner/narrative events, price implying growth far above ARM's demonstrated base rate, and a multiple in the tail of the historical loss distribution. **If it does not apply, we should observe:** the move explained by ARM's own raised guidance and a multiple within hailing distance of the base rates.

## Evidence

**Supporting** (the market is over-weighting vivid recent events; cited):

- **The doubling was driven by a *partner's* launch, not ARM's numbers.** ARM closed **$408.85 on 2026-06-01, +15.73% on the day**, after **Nvidia launched the Arm-based RTX Spark / Grace N1X PC chip at Computex** — a vivid, headline-grade event. The stock **roughly doubled from mid-May (~$209) in ~2 weeks** and is up **+228% over 52 weeks**. [DOSSIER §3, §7; crowd-market-signal.md §1]
- **ARM's *own* record results were sold off.** "Arm's own record Q4 beat **FELL −7.25% on 5/7**" because management couldn't secure foundry capacity for the AGI CPU and warned of negative smartphone unit growth; "then the stock **doubled on a *partner's* (Nvidia) launch**. Sentiment is **ecosystem-narrative-driven, not ARM-guidance-driven** (management declined to raise guidance)." This is the model's signature: the salient narrative (AI/Nvidia) swamped the boring fundamental (ARM's actual guidance, which went *down* on the day of its own earnings). [DOSSIER §7; crowd §2, §6]
- **The "AGI CPU" narrative is itself a vivid recency artifact.** The term "Arm AGI CPU" appears **30x** and "production silicon" **28x** in the FY2026 20-F vs **ZERO** in the FY2025 20-F — a brand-new, maximally-available story. Yet it carries **no material FY2026 revenue**; first production revenue is targeted **Q4 FY2027 (~$1B)** and the program is **supply-capped at ~$1B** near-term. The market is pricing a story whose cash flows do not yet exist. [DOSSIER §1]
- **The tape is above the sell-side's own (already-raised) targets.** Average analyst PT **~$227–241 vs $408.85 close ⇒ ~ −41% to −44% implied downside**, even after two clusters of upward revisions; "targets are **following price, not leading it**." When even the cheerleaders' fair-value estimates sit 40% below the tape, the marginal buyer is anchoring on the story, not a valuation. [DOSSIER §7; crowd §2]
- **Options/sentiment are at a vivid-extreme:** IV **108.4%**, IV Rank & Percentile **= 100** (top of range), beta **3.78**, price **~2.7x its 200-day MA ($152.18)**. These are the fingerprints of a narrative-driven melt-up, not a calm re-rating. [DOSSIER §3, §7]
- **Base rate #1 — ARM's own boring growth.** ARM's demonstrated revenue CAGR is *low-double-digit-to-high-teens*, decelerating, not 35–40%:
  - **~12.6%/yr** over 10 years (FY2016 ~$1.5B → FY2026 $4.92B) [stockanalysis.com revenue; Wikipedia FY2016 £968.3M ≈ $1.4–1.5B].
  - **~19.4%/yr** over 5 years (FY2021 $2.03B → FY2026 $4.92B); **~16.2%/yr** FY2022→FY2026 [stockanalysis.com/stocks/arm/revenue].
  - And it is *slowing*: revenue +33% (FY22) → −1% (FY23) → +21% → +24% → **+23%** (FY26); **royalty growth decelerated to +11% in Q4 FY2026** from +27% the prior quarter. [DOSSIER §2.1, §8]
  - Management's *own* aggressive FY2031 plan implies **~20% royalty CAGR** — already far below the price's implied requirement. [search: TIKR/RBC FY26–31 royalty 20% CAGR]
- **Base rate #2 — the price implies a growth rate almost no firm sustains.** The reverse-DCF requires **~35–40% FCF compounding for ~15 years (FCF grows ~30–50x, i.e. ~119x at 37.5%/15y)** — "beyond any precedent at this scale." Against that, McKinsey finds the typical company grows **~2.8%/yr** and **only ~1 in 8** sustains >10%/yr over a decade; Bessemer's empirical growth-decay rule is that next-year growth is **~70% of this year's** (growth *fades* mechanically as scale rises). Sustaining 35%+ for 15 years is a far-tail outcome. [DOSSIER §3.2; mostlymetrics/Bessemer; McKinsey via search]
- **Base rate #3 — extreme price-to-sales is a documented forward-loss zone.** ARM trades at **EV/Sales ~88x** (fwd P/S ~73x). The canonical reference point: **Scott McNealy at 10x sales** called the math absurd ("zero COGS, zero expenses, zero taxes, zero R&D… to give you a 10-year payback"); **Sun fell >95%** from peak. ARM is **~8.8x richer than the multiple McNealy mocked.** Academic work (Wharton/LSEG/FTSE-Russell) confirms high starting multiples are **strongly, negatively** associated with 10-year forward returns, with **~75% of valuation dispersion showing up as return dispersion**, not faster earnings. [DOSSIER §3.1; Yahoo Finance/Smead "McNealy Problem"; Knowledge@Wharton; LSEG]
- **Management-target cross-check (boring arithmetic).** Even if ARM **hits** >$9 FY2031 non-GAAP EPS, the 5-yr return from $408.85 is **−10.7%/yr at 25x exit, −7.4%/yr at 30x, −1.9%/yr at 40x**. To earn 11.5%/yr the market must *still* pay **~76x earnings in 2031**. The dull arithmetic says the vivid story is already more than fully paid for. [DOSSIER §3.2]

**Disconfirming** (the base rate may genuinely be different; cited):

- **ARM is not a 2000-vintage hardware company — the "this time the base rate is different" case has real content.** The durable moat is a **software/ecosystem network effect** (>20M developers, >325B cumulative chips, high re-port switching costs) and a **near-monopoly** in smartphone app processors (~99–100% Arm ISA) and automotive (~94%). Sun sold boxes into a competitive market; ARM taxes an installed base. A monopoly toll-booth *can* defensibly carry a higher multiple than a commodity-hardware vendor — so the McNealy analogy is directionally right but not numerically transferable. [DOSSIER §4]
- **The sector tailwind is real and large, not imagined.** Global semis **$791.7B in 2025 (+25.6%)**, forecast **~$975B–$1T for 2026**; ARM is gaining real share in data center (**17.7% of total server-CPU units, up from 11.5% YoY**) on a genuine power-efficiency advantage. The AI capex cycle funding this is **~$660–690B in 2026**. The story has a factual core; it is not pure availability illusion. [DOSSIER §4.1, §5]
- **The royalty ladder is a real, mechanical growth lever** independent of unit volume: **Armv8 ~2.5–3% → Armv9 ~5% → CSS >10% of ASP**, with v9 only ~31% attach vs a 60–70% target. This can lift royalty per chip for years on flat units — a base-rate-beating mechanism the 10-year CAGR (which predates it) understates. [DOSSIER §4.2]
- **The base-rate-fade literature is about medians; ARM is explicitly a right-tail candidate.** The bull's fair retort: of course the *median* company fades to 2.8%; the question is whether ARM is in the 2.4% of firms (Bessembinder) that drive all wealth creation. Near-monopolies with network effects are over-represented in that tail. Dismissing ARM purely on the median base rate would itself be a base-rate error of the opposite kind (ignoring relevant subgroup membership).

*Independent research run for this model (cited inline above):* McNealy 10x-sales reference and Sun's >95% drawdown [Yahoo Finance; Smead Capital "The McNealy Problem"]; growth-endurance/decay base rates [mostlymetrics growth-endurance; Bessemer; McKinsey]; high-multiple → low-forward-return evidence [Knowledge@Wharton; LSEG/FTSE-Russell]; ARM 10-yr revenue path [stockanalysis.com; Wikipedia FY2016].

## Reasoning

**On the subject — the model fits the tape almost too cleanly.** Three of three predictions hold. (1) The +228%/+15.7% move is *pinned to vivid partner/narrative events* (Nvidia RTX Spark, the brand-new "AGI CPU" story) and ran *opposite* to ARM's own guidance on its own earnings day. (2) The price implies **35–40% FCF growth for 15 years** against a demonstrated **~13–19% revenue base rate** that is *decelerating* — a ~2x detachment from the business's own reference class. (3) The **~88x EV/Sales** sits in the documented tail of the worst-forward-return cohort and is **~9x** the multiple a CEO once called self-evidently absurd before his stock fell 95%. The availability heuristic predicts exactly this configuration: the easily-recalled AI/AGI/Nvidia narrative is *over-weighted*, and the dull arithmetic of (a) ARM's actual growth and (b) what happens after you pay 88x sales is *under-weighted*. The fact that ARM trades **above its own analysts' raised targets** is the cleanest single tell that the marginal price-setter is buying a story, not a spreadsheet.

**The re-anchoring is decisive.** When I replace the vivid story with the three base rates, the price is not within hailing distance of any of them: not ARM's own growth (implied 35–40% vs actual ~13–19%), not the hyper-growth-fade base rate (15-year 35% sustenance is a far-tail event), and not the extreme-multiple forward-return base rate (negative across the board; the management-target cross-check yields **−7% to −11%/yr even if the bull plan is hit**). Availability-misweighing is not a peripheral lens here — it is close to the central explanation for the gap between price and value.

**Where the model is a stretch / the honest counter.** The model is weakest on *one* of its three anchors: the McNealy/Sun analogy. ARM genuinely is a higher-quality asset than a 2000 hardware vendor — a network-effect monopoly with a mechanical royalty-ladder lever — so a *premium* base rate is warranted; the question is only whether **88x sales / 231x non-GAAP earnings** is the right premium, and on that the other two base rates (growth fade, multiple-vs-return) still say no by a wide margin. The model is strongest on the growth and multiple anchors, weaker (but not refuted) on the moat anchor. Net: the disconfirmers compress *how far* the price overshoots; they do not reach the price.

**Self-check (the bias applied to our own analysis).** The biggest risk to *my* read is that **Sun Microsystems is itself an availability anecdote** — vivid, emotionally satisfying to bears, and possibly the wrong reference class for a monopoly IP licensor. I have tried to neutralize this by leaning on *frequency* base rates (McKinsey's 1-in-8, Bessemer's decay rule, the academic multiple→return distribution) rather than the single Sun story, and by explicitly crediting ARM's network effect and royalty ladder as legitimate reasons the base rate is *better* than the median. A second self-check: availability also predicts *bears* over-weight the freshest scary headline (FTC probe 2026-05-15, the OpenAI-miss −8% week). Those are real, but I have kept this model's verdict resting on the *valuation-vs-base-rate* arithmetic, which does not depend on any single news item. After both corrections, the read holds: the market is over-weighting a vivid AI narrative and under-weighting boring arithmetic — the magnitude of the gap is too large to be explained by a higher-but-finite quality premium.

**Stay in lane.** This is not a sell/short order. The model reports what *availability-misweighing* sees: a price set by salient recency, sitting two-to-nine-fold outside the relevant reference classes.

## Red flags

| Flag | Severity (low/med/high/fatal) | Rationale |
|---|---|---|
| Price set by a partner's launch, not ARM's own numbers (own beat sold off −7%, stock then doubled on Nvidia) | high | Classic availability-driven mispricing; the price anchor is a transient narrative event, not fundamentals. [DOSSIER §7] |
| Price implies ~35–40% FCF CAGR for 15y vs ~13–19% demonstrated, decelerating base rate | high | ~2x detachment from the business's own reference class; royalty growth already slowing to +11%. [DOSSIER §3.2, §8] |
| EV/Sales ~88x — ~9x the multiple (10x) that preceded Sun's 95% loss; in documented forward-loss tail | high | Extreme-multiple cohort base-rate is sharply negative forward returns. [DOSSIER §3.1; Wharton/LSEG] |
| Trades *above* its own (raised) average sell-side target (~$227–241) | medium | The marginal buyer is paying past even the optimists' fair value — story over spreadsheet. [DOSSIER §7] |
| IV at 100th percentile, beta 3.78, ~2.7x 200-DMA | medium | Sentiment at a vivid extreme; entry multiple likely transient. [DOSSIER §3] |
| Risk of *bearish* availability (Sun anecdote, FTC/OpenAI headlines) coloring the read | low–med | Mitigated by anchoring on frequency base rates, not single anecdotes; flagged as a self-check. |

## What would flip this read (disconfirmers)

- **ARM's *own* fundamentals re-accelerate to validate the price** — e.g., royalty growth re-accelerates well above the +11% Q4 print and sustains 30%+, and AGI-CPU production revenue converts the narrative into cash (first ~$1B Q4 FY2027 lands and scales toward the $15B-by-FY2031 plan). If the boring base rate *itself* shifts to 30%+, the "over-weighting recency" charge weakens — the recency would be predictive.
- **The price comes back to the base rates** — a 30–50% drawdown to the trailing trend (the 200-DMA is **$152**) would re-anchor the multiple near the reference classes and largely neutralize this model (the *business* would still be excellent; the *availability* mispricing would be gone). The model is about price-vs-base-rate, so it flips primarily on price.
- **Evidence the moat makes ARM a true right-tail compounder** — durable v9/CSS attach pushing royalty-per-chip such that ARM demonstrably joins the rare cohort sustaining 30%+ for a decade. That would convert the "different base rate" disconfirmer from plausible to proven and undercut the growth anchor.
- **The sell-side stops chasing and *leads*** — targets moving sustainably *above* the tape on raised cash-flow estimates (not price-chasing revisions) would signal the move is a re-rating of fundamentals, not a narrative melt-up.
- **A demonstration that 88x sales is a sustainable clearing multiple for monopoly IP** — i.e., the comp set (not 2000-hardware, but durable IP toll-booths) historically holds such multiples without mean-reverting. Absent that, the multiple anchor stands.

## Verdict

| | |
|---|---|
| **Signal** | negative |
| **Relevance** | 5 |
| **Strength** | 4 |
| **Conviction** | 4 |
| **Fatal flaw?** | no — this model is not fatal-capable (not incentives/inversion/accounting/margin-of-safety); it diagnoses mispricing, not a path to zero |

**Bottom line:** Availability-misweighing is close to the central explanation for ARM's price: the stock **doubled on a partner's chip launch and a brand-new "AGI CPU" narrative while selling off on its own record results**, and now trades **above even its raised analyst targets** at **~88x sales**. Re-anchoring on the boring base rates — ARM's own **~13–19% (decelerating) revenue growth**, the empirical **fade rate of hyper-growth firms**, and the **negative forward-return distribution of >40x-sales stocks** (Sun fell 95% from a multiple one-eighth as rich) — the price is **two-to-nine-fold outside every relevant reference class**, with the management-target arithmetic implying **−7% to −11%/yr even if the bull plan is hit**. The genuine counter (ARM is a network-effect monopoly, not a 2000 hardware vendor, with a real royalty-ladder lever) earns a *premium* base rate and compresses how far the price overshoots — but does not close a gap this large. The model says the vivid story is dramatically over-paid relative to the dull arithmetic.
