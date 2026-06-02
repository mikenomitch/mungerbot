<!--
  Per-model write-up: Bayesian Updating applied to Arm Holdings.
-->
# Bayesian Updating — Arm Holdings plc (ARM)

**Discipline:** Mathematics  ·  **Intensity:** standard  ·  **As-of:** 2026-06-01

## What this model predicts

Bayesian discipline says: do not start from the company's own narrative. Start from
the **base rate** — what happens to the *class* of situations this one belongs to —
then move that prior only as far as the *new, specific* evidence honestly warrants.
The single most common analytical error this model exists to prevent is **base-rate
neglect**: being so dazzled by a vivid, specific story ("Arm taxes 99% of phones, AI
is exploding, Nvidia just launched an Arm PC chip") that you forget the boring, decisive
question — *of all the companies that ever looked like this, at this price, how did
owners actually do?*

For an investment decision the posterior I care about is:

> **P(an owner buying ARM at $408.85 on 2026-06-01 earns an acceptable (≈ market-or-better, ~10%/yr) forward return over ~5–10 years | all evidence).**

The model also requires me to update three sub-questions whose evidence is more concrete
than the return distribution itself, because the return posterior is largely *built* from them:

1. **Valuation gravity** — base rate for stocks bought at extreme price/sales and price/earnings multiples.
2. **Reported-earnings reliability** — base rate that headline growth/earnings are *real and durable* when a large, fast-growing slice comes from a controlling related party.
3. **Strategy-shift success** — base rate that a high-margin IP licensor successfully bolts on a low-margin merchant-silicon business without destroying its own economics.

If ARM is a good buy here, the specific evidence must be strong enough to *overpower* hostile base rates. The model predicts it usually is not — extraordinary stories rarely beat extraordinary prices.

---

## The four Bayesian updates

I show each as **prior → likelihood (how diagnostic is the ARM-specific evidence?) → posterior.** Probabilities are explicit, deliberately rounded judgments (marked as judgments), anchored to cited base rates. The point is the *direction and magnitude* of the updates, not false precision.

### Update 1 — Valuation: will the price let an owner win? (the dominant term)

**Prior (base rate for the valuation bucket).** The relevant reference class is "stock bought at an extreme multiple of sales/earnings." The base rates here are not subtle:
- Stocks trading **>20x price/sales** beat the market only **~31% / 25% / 23%** of the time over 1 / 2 / 3-year horizons, and **~55% had delisted by year 10** — i.e. the modal outcome is gross underperformance, and a coin-flip-plus chance of *disappearing* over a decade [Kailash Concepts, "Market Cap vs Revenue: Implications of 20x P/S Ratios," kailashconcepts.com]. ARM trades at **~73x forward and ~88x trailing EV/Sales** (DOSSIER §3.1) — **3–4x past** the threshold at which that already-catastrophic base rate was measured.
- The canonical anchor: Sun's Scott McNealy, at **10x revenue**, told investors the price implied paying *100% of revenue as dividends for 10 straight years* with zero COGS, zero opex, zero tax, zero R&D, and asked "*What were you thinking?*" [BusinessWeek 2002, via kailashconcepts.com / thefelderreport.com]. ARM is at **~7–9x that** multiple. Sun fell from $64 to ~$5.
- Across the whole market, higher starting valuations reliably foreshadow lower 10-year returns; the relationship is one of the tightest in finance [DayTrading.com, "Forward P/E vs 10-Year Forward Returns"; LSEG/FTSE-Russell valuation study].

Base rate that a buyer at this multiple earns an acceptable long return ≈ **15–25%** *(judgment, anchored to the <31% 1-yr / 23% 3-yr "beat" rates and the 55% 10-yr delist rate; ~20% midpoint).*

**Likelihood (does ARM-specific evidence justify moving off the base rate?).** Bulls argue the base rate doesn't bind because ARM is a ~98%-gross-margin near-monopoly toll-booth — a genuinely rare franchise (cf. Amazon, which *did* grow into a 3-digit P/E). That is a real argument and I weight it. But the dossier supplies unusually *quantified* disconfirmation that the price is beyond even the optimistic story:
- The **reverse-DCF** requires **~35–40% FCF compounding for ~15 years (grow owner-FCF ~30–50x)** to justify EV $433.6B — "beyond any precedent at this scale" and beyond management's own plan [DOSSIER §3.2].
- The **management-target cross-check** is the cleanest single fact: *even if Arm HITS its aggressive FY2031 >$9 non-GAAP EPS target,* the 5-yr return from $408.85 is **−10.7%/yr at 25x exit, −1.9%/yr at 40x, +2.5%/yr at 50x**; to earn ~11.5%/yr the market must *still* pay **~76x** earnings in 2031 [DOSSIER §3.2]. So the favorable outcome requires *both* a flawless decade *and* a permanently extreme exit multiple.
- **Triangulated intrinsic value $30 / $130 / $235 (bear/base/bull)** — the price exceeds the **top of the range under every method**; margin of safety ≈ **−43% even at the bull ceiling**, ~−68% at the midpoint [DOSSIER §3.3].
- The entry print is itself fragile: **+15.7% on the day, ~doubled in two weeks, ~2.7x the 200-DMA, beta 3.78, options IV percentile 100**, and the rally was triggered by a *partner's* (Nvidia's) product, not ARM's own guidance — which management *declined to raise* [DOSSIER §3, §7]. High probability the entry multiple is transient.
- The crowd, even while bullish on the business, puts **average price targets ~$227–241 — ~41–44% below the tape**; the stock trades *above* its average sell-side target [DOSSIER §7].

This evidence is **strongly confirmatory of the hostile prior, not disconfirmatory.** The "rare franchise" argument earns ARM a *better-than-bucket* prior, but the price is so far beyond what even the franchise + a hit FY2031 plan supports that the specific evidence pushes the posterior *down*, not up.

**Posterior:** P(acceptable forward return | valuation evidence) ≈ **10–18%** *(judgment).* The McNealy math, applied to ARM's own numbers, is decisive: this is base-rate neglect's textbook setup — a great story priced past even the great outcome.

### Update 2 — Earnings reliability: is the reported growth real and arm's-length?

**Prior (base rate for related-party-heavy reported growth under a controlling shareholder).** The accounting/audit literature is consistent: related-party transactions that **grow faster than third-party revenue**, are **concentrated with a controlling shareholder**, and cluster as **large balances near period-end** are a recognized earnings-quality red flag — auditors are measurably more likely to modify opinions, and these are exactly the vectors used in earnings management/expropriation [NACVA *J. of Forensic & Investigative Accounting* 2012; AAA *Auditing: A Journal of Practice & Theory* 37(2); CFA Institute, "Related-Party Transactions: Cautionary Tales for Investors in Asia"; winvesta.in]. Base rate that headline growth is *fully real and durable* when its largest, fastest component is related-party ≈ I treat as materially *below* the ~85–90% I'd assign a clean third-party-only top line — call it **~55–65%** *(judgment)*.

**Likelihood (ARM-specific).** The ARM fact pattern hits **every** marker in the base-rate template, which makes the evidence highly diagnostic (it moves me *toward* the red-flag tail, not away):
- Related parties = **$1,499M = 30.5% of FY2026 revenue, +82% YoY vs +7% external** — i.e. **the majority of reported growth** came from non-arm's-length parties [DOSSIER §8.2].
- **$704.4M SoftBank-affiliate "Consulting Agreement," +384% YoY, of which ~$645.8M is an UNBILLED contract asset** owed by a SoftBank-controlled counterparty — collectibility a known unknown [DOSSIER §8.2, §9].
- **$790.6M Arm China IPLA (~16% of revenue) where Arm holds only ~4.8% economic interest and relies on Arm-China self-reported royalty data** [DOSSIER §8.2].
- SoftBank has **consent rights over Arm's auditor and accounting-policy changes** [DOSSIER §6] — the very control that the literature says neuters the normal arm's-length check.
- The auditor's **Critical Audit Matter is revenue recognition on long-term contracts** (performance-obligation ID, standalone-selling-price estimation) — the auditor itself is flagging the soft spot [DOSSIER §6].
- Mitigants (genuine, weighted): clean Deloitte opinion, **no current material weakness, no restatement**, a prior material weakness **remediated** [DOSSIER §6]. So this is "low-quality/aggressive presentation," **not** evidence of fraud.

**Posterior:** P(reported growth is fully real, arm's-length, and durable | evidence) ≈ **45–55%** *(judgment).* The update is *downward* from an already-cautious prior because ARM matches the entire red-flag template. The honest read: a large and *growth-dominating* chunk of FY26 revenue is **non-market-priced and partly unbilled**, so the "+23% growth" the market is capitalizing at ~480x GAAP is materially lower-quality than it looks — and external growth was only **+7%**.

### Update 3 — Strategy shift: will the AGI-CPU pivot create value without wrecking the model?

**Prior (base rate for high-margin IP licensor → merchant silicon).** Business-model transitions that trade a >95%-gross-margin asset-light franchise for a 40–50%-margin, capex-heavy, channel-conflicted hardware business have a poor base rate; the near-universal pattern is **margin dilution, multiple compression, and customer defection toward in-house/alternative designs**, and clean precedents of an IP-licensor pulling it off are thin [trade-press analysis of Arm's move, ainvest.com / datacenterknowledge.com; Imagination/MIPS as a cautionary IP-pivot case, EE Times / VentureBeat]. Base rate this is *net value-accretive within ~5 yrs* ≈ **~30–40%** *(judgment)*.

**Likelihood (ARM-specific).** Mixed-to-confirmatory of the hostile prior:
- Confirming the downside: the move puts Arm in **direct competition with its own royalty-paying customers** (Nvidia/AWS/Google/MS/Broadcom/Marvell), inviting diversification toward in-house and **RISC-V** [DOSSIER §4.3]; it triggered a **US FTC formal antitrust probe (2026-05-15)** plus EU/KFTC actions [DOSSIER §8.5]; **capex inflected to 11% of revenue, FCF-less-SBC negative three straight years, R&D now 56% of revenue, non-GAAP op margin 46.7%→43.0%** [DOSSIER §2.2, §2.4]; Morgan Stanley downgraded on ~8 quarters of margin pressure [DOSSIER §8.6]; the AGI-CPU is **supply-capped (~$1B secured vs >$2B demand), no material revenue yet, unit economics undisclosed** [DOSSIER §1, §8.7]; and the stock **fell ~7% on its own record Q4** precisely because of this [DOSSIER §7].
- Disconfirming the downside (weighted): real lead customers (**Meta**, plus OpenAI/Cloudflare/Cerebras/SAP), demand that *doubled* to >$2B, and an operator (Haas, ex-Nvidia) credible at this [DOSSIER §1].

**Posterior:** P(pivot is net value-accretive on a ~5-yr view *and* the market still rewards it) ≈ **30–40%** *(judgment)* — roughly *unchanged* from the prior. The demand signal offsets the prior's pessimism, but the antitrust/channel-conflict/margin/capex evidence keeps it a coin-flip-or-worse, and it is *already partly* what the §1 update penalizes in earnings quality and the §3 valuation penalizes in margin trajectory.

### Update 4 — Combining into the decision posterior

The return question is the product of these (with a left-tail governance overlay). Even being generous and treating them as only loosely dependent:

- The **valuation term (~10–18%) dominates** and is hard to escape because it binds *even if the franchise is real and the plan is hit*.
- The **earnings-quality term (~45–55%)** says the growth being capitalized is lower-grade than the multiple assumes — it makes the valuation term *worse*, not better.
- The **pivot term (~30–40%)** is, at best, neutral and at worst the mechanism that compresses the very margins/FCF the multiple needs.
- **Governance left tail (not a probability of *good* outcome but of *bad*):** SoftBank ~86.4% control with **72% of the company pledged against an $8.5B margin loan** whose trigger price is undisclosed → a credible forced-seller / change-of-control path with **no offer to minority ADS holders** [DOSSIER §6.1, §8.3]; plus a Q4 CY2026 Qualcomm antitrust trial as a binary catalyst [DOSSIER §8.4]. This *fattens the left tail* and lowers the probability of an acceptable owner outcome further.

**Decision posterior:** P(owner buying at $408.85 earns an acceptable forward return) ≈ **10–15%** *(judgment).* The base rates were hostile; the specific, *quantified* evidence (reverse-DCF, the "even-if-they-hit-the-plan" return math, the related-party growth concentration, the margin/capex inflection, the pledge) is **confirmatory of those base rates, not exculpatory.** This is precisely the configuration Bayesian discipline is built to catch: a vivid bull narrative whose every concrete number, run through the prior, *lowers* the posterior.

---

## Evidence

**Supporting the model's (negative) read** (cited):
- Stocks >20x P/S beat the market ~31%/25%/23% (1/2/3-yr) and ~55% delist by yr 10 [Kailash Concepts]; ARM at ~73–88x EV/Sales [DOSSIER §3.1].
- McNealy's "10x revenue / what were you thinking" math; ARM at ~7–9x that level [BusinessWeek 2002 via thefelderreport.com].
- Even hitting the FY2031 >$9 EPS plan ⇒ −10.7%/yr to +2.5%/yr depending on a 25x–50x exit; needs ~76x to clear ~11.5% [DOSSIER §3.2].
- Triangulated value $30/$130/$235 — price above the top under every method; MoS ≈ −43% even at the bull ceiling [DOSSIER §3.3].
- Related-party revenue 30.5% of total, +82% YoY vs +7% external; $645.8M unbilled SoftBank contract asset; Arm-China self-reported royalties [DOSSIER §8.2]; RPT-faster-than-revenue + controlling-shareholder concentration is a textbook earnings-quality flag [AAA AJPT; CFA Institute].
- Pivot evidence: FTC probe, channel conflict, capex 11% of revenue, owner-FCF negative 3 yrs, non-GAAP margin 46.7%→43.0% [DOSSIER §2, §4.3, §8].
- Entry print extreme/fragile: +15.7% day, ~2.7x 200-DMA, beta 3.78, above average sell-side target [DOSSIER §3, §7].

**Disconfirming the negative read / supporting a bull update** (cited):
- Genuinely rare ~98%-gross-margin near-monopoly across ~99% of smartphones and ~94% of automakers [DOSSIER §1, §4] — the kind of franchise that *can* occasionally beat a high-multiple base rate (Amazon precedent [DayTrading.com]).
- Real AGI-CPU lead customers (Meta/OpenAI) and demand that doubled to >$2B [DOSSIER §1].
- Fortress balance sheet (~$3.1–3.2B net cash, no bond wall) lowers near-term ruin risk [DOSSIER §2.3].
- Clean audit, no restatement, prior material weakness remediated [DOSSIER §6] — the related-party concern is *quality*, not proven fraud.

**Independent research run for this model** (sources): Kailash Concepts >20x-P/S survival/batting-average study and its Sun Microsystems/McNealy "greatest quote" framing; DayTrading.com and LSEG/FTSE-Russell on starting-valuation→forward-return base rates; AAA *Auditing: A Journal of Practice & Theory* and CFA Institute on related-party-transaction red-flag base rates; ainvest.com / Data Center Knowledge / EE Times / VentureBeat on IP-licensor→merchant-silicon transitions and the Imagination/MIPS cautionary case. (Full URLs in §"Sources" at end.)

## Reasoning

This model is **highly relevant** here because ARM is the archetypal base-rate-neglect trap: a *true* and *exciting* specific story (AI, the Arm tax, the Nvidia catalyst) layered on a price whose reference class has a brutal historical record. Bayesian discipline forces the boring question and answers it cleanly.

The crucial methodological point — and where most ARM bulls go wrong — is the **order of operations**. They reason story-first ("Arm is unique, so base rates don't apply") and then back into a price. Bayes reasons base-rate-first and asks whether the specific evidence is *diagnostic enough* to move the prior. Here the franchise *does* earn ARM a better-than-bucket prior (I do not put it at the raw 20% bucket rate). But the specific, quantified evidence the dossier supplies — most decisively the "you lose money even if management hits its own ambitious 2031 plan" math — does not rescue the prior; it *confirms* it. The valuation is beyond not just the base rate but beyond the bull's own best case.

A genuine Bayesian also checks the **base rate of the disconfirmer**. "This time the franchise is special enough to grow into the multiple" is itself a claim with a base rate, and that base rate (survivorship-biased Amazon/Nvidia anecdotes notwithstanding) is low: most ">20x sales, but *this one* is different" bets lost. The dossier's reverse-DCF (~30–50x FCF growth needed) quantifies just *how* special ARM would have to be — beyond any precedent at scale.

**Self-check on my own bias (the model applied to us).** The risk on my side is *anchoring to a dramatic prior* and dismissing real franchise quality — i.e. over-updating toward the bear. I have guarded against it by (a) giving ARM an explicitly better-than-bucket starting prior, (b) weighting the Amazon "grew-into-it" counter-precedent and the real Meta/OpenAI demand, and (c) noting the fortress balance sheet caps *near-term* ruin. Even after those concessions the posterior stays low, because the binding constraint (valuation vs. *even the hit-plan* outcome) is arithmetic, not sentiment. The opposite bias — the market's — is textbook **base-rate neglect plus recency/salience** (doubling on a partner's launch) and **denominator confusion** (Arm-deployment % mistaken for market share; $2B AGI demand mis-reported as $20B/$15B TAM). My read survives steel-manning; theirs depends on the base rate not applying.

One honest limit: Bayesian updating is **mathematics, not a moat or quality verdict.** It tells you the odds given the reference class and the evidence; it does not, by itself, tell you ARM is a bad *business* (it is a very good one). The signal is **negative on the investment at this price**, driven by the valuation and earnings-quality posteriors — not a claim that the franchise is weak.

## Red flags

| Flag | Severity | Rationale |
|---|---|---|
| Price beyond intrinsic value under *every* method; loses money even if FY2031 plan is hit | high | Valuation posterior ~10–18%; the dominant, hard-to-escape term [DOSSIER §3.2–3.3] |
| ~73–88x EV/Sales — 3–4x past the >20x-P/S bucket whose 10-yr delist rate is ~55% | high | Hostile base rate; only ~23% beat-market at 3 yrs even *at* 20x [Kailash Concepts] |
| Related-party revenue 30.5% of total, +82% YoY (majority of growth), $645.8M unbilled | high | Matches the entire RPT earnings-quality red-flag template [DOSSIER §8.2; AAA AJPT] |
| SoftBank 72%-of-company pledge vs $8.5B margin loan, trigger undisclosed | high | Forced-seller/change-of-control left tail with no minority offer [DOSSIER §6.1] — fattens the bad tail |
| Margin/capex/FCF inflection from the merchant-silicon pivot | medium | Owner-FCF negative 3 yrs; non-GAAP op margin 46.7%→43.0%; capex 11% of rev [DOSSIER §2] |
| Entry multiple transient (momentum, ~2.7x 200-DMA, above avg target) | medium | High odds the *purchase* multiple itself does not persist [DOSSIER §3, §7] |

**Fatal flaw?** **No** — for *this* model. Bayesian Updating is not on the fatal-capable list (incentives / inversion / accounting / margin-of-safety), and although the analysis surfaces a credible left tail (the pledge), I do not assert a *probable* path to permanent capital loss from this lens; the franchise + net cash make total impairment unlikely even if returns are poor. The honest call is a **strongly negative return signal**, not a fatal one. (The accounting/inversion/incentives agents are better placed to adjudicate the related-party and pledge tails as potentially fatal.)

## What would flip this read (disconfirmers)

- A **materially lower entry price** (toward the ~$130 base / even ~$235 bull ceiling) — the posterior is overwhelmingly a *price* problem; cut the price ~40–70% and the Bayesian read flips toward neutral/positive on the *investment*.
- **External (non-related-party) revenue re-accelerating from +7% toward the headline +23%**, with the SoftBank consulting/unbilled balance *billed and collected* and Arm-China royalties independently verified — that would lift the earnings-quality posterior and show the growth is real and arm's-length.
- **AGI-CPU shipping at disclosed, healthy (>50%) gross margins with capex normalizing and no customer defection** — would move the pivot posterior up and de-risk the margin trajectory.
- **Antitrust (FTC/EU/KFTC) and Qualcomm Case-2 resolving favorably** with no structural separation — removes a binary left-tail term.
- **SoftBank reducing/removing the share pledge** or disclosing comfortable LTV/trigger headroom — collapses the forced-seller tail.
- Evidence that ARM is in fact the rare franchise that *grows into* a 3-digit multiple at this scale (i.e. demonstrated ~30–40% FCF compounding *delivered*, not projected) — would partially rehabilitate the "base rate doesn't apply" claim.

## Verdict

| | |
|---|---|
| **Signal** | negative |
| **Relevance** | 5 |
| **Strength** | 4 |
| **Conviction** | 4 |
| **Fatal flaw?** | no (model not fatal-capable; left tail flagged for inversion/accounting/incentives agents) |

**Bottom line:** Run through the proper Bayesian order — base rate first, then update — ARM at $408.85 is the textbook base-rate-neglect setup: a genuinely great, exciting business priced past the reference class's grim record *and* past even its own best-case plan, with reported growth that is disproportionately related-party (lower-quality) and a margin-dilutive pivot. My posterior that an owner buying here earns an acceptable forward return is roughly **10–15%**. The specific evidence the bulls cite is, almost without exception, *confirmatory* of the hostile prior rather than exculpatory of it. The signal is strongly **negative on the investment at this price** (not on the franchise); the binding constraint is arithmetic, and the read flips mainly on a much lower price or proof the growth is real and arm's-length.

---

### Sources (independent research)
- Kailash Concepts — "Market Cap vs Revenue: Implications of 20x P/S Ratios" — https://kailashconcepts.com/market-cap-vs-revenue-implications-of-20x-price-to-sales-ratio/
- Kailash Concepts — "Sun Microsystems: The Greatest Quote & The Rise of the Reckless" (McNealy 10x-revenue framing) — https://kailashconcepts.com/sun-microsystems-the-greatest-quote-the-rise-of-the-reckless/
- The Felder Report — "What Were You Thinking?" (McNealy quote) — https://thefelderreport.com/2017/10/26/what-were-you-thinking/
- DayTrading.com — "Forward P/E ratios vs. 10-Year Forward Returns" — https://www.daytrading.com/forward-p-e-ratios-vs-10-year-forward-returns
- LSEG / FTSE Russell — "Do valuations predict long-term returns? Examining US equities…" — https://www.lseg.com/en/insights/ftse-russell/do-valuations-predict-long-term-returns-examining-us-equities-through-various-size-and-style-indices
- AAA, Auditing: A Journal of Practice & Theory 37(2) — "Auditing Related Party Transactions: Evidence from Audit Opinions and Restatements" — https://publications.aaahq.org/ajpt/article/37/2/73/6148
- CFA Institute — "Related-Party Transactions: Cautionary Tales for Investors in Asia" — https://rpc.cfainstitute.org/sites/default/files/-/media/documents/article/position-paper/related-party-transactions-cautionary-tales-for-investors-in-asia.pdf
- AInvest — "Broadcom and Marvell Could Be the Big Losers If Arm Moves Into Chipmaking" — https://www.ainvest.com/news/broadcom-marvell-big-losers-arm-moves-chipmaking-2502/
- EE Times — "Re-imagining Imagination Technologies" (IP-pivot cautionary case) — https://www.eetimes.com/re-imagining-imagination-technologies/
