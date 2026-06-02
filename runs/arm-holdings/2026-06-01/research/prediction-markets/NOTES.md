# Crowd & Market Signal — NOTES (ARM Holdings plc, ARM)

**Lane:** `prediction-markets` · **As-of:** 2026-06-01 · **Discipline:** forward-looking crowd/sentiment cross-check, **not** a buy/sell view and **not** fundamental truth.

Data tables (full detail): [`artifacts/crowd-market-signal.md`](../../artifacts/crowd-market-signal.md).

---

## TL;DR (one paragraph)
The single loudest signal in this lane is a **violent crowd-vs-sell-side divergence**. ARM closed **$408.85 on 2026-06-01 (+15.7% on the day)** — roughly **double** the ~$209 in the lane's mid-May snapshot — after **Nvidia launched an Arm-based PC chip (RTX Spark / Grace N1X) at Computex**. Yet the **average analyst price target is ~$227–241**, implying **~40%+ downside**, and even the Street-high ($425 Mizuho, $410 Wells Fargo, both set 6/1) sits at/below the tape. Valuation is at a momentum extreme (**~163x forward EPS**, 73x forward sales, PEG 5.3, beta 3.78, IV at the **100th percentile**). Short interest is **small** (18.8M sh, ~1.8% of float, ~1.7 days to cover) — no squeeze fuel. There is **no ARM-specific prediction market**, but Polymarket prices a **~24% chance of an "AI bubble burst" by end-2026**, the cleanest external gauge of the tail risk to ARM's AI-capex-dependent thesis. Net: the crowd is paying for AI optionality far beyond what modeled consensus or any conventional multiple supports.

---

## 1. CRITICAL: stale-price reconciliation
- The lane `_snapshot.md` was built on mid-May data (~$209/ADS, $300–376B mkt cap). **It is stale.**
- **Verified current:** ARM **$408.85 close, 2026-06-01, +15.73% day** (after-hours $414.00). 52-wk range $100.02–$421.69; +228% over 52 wks; +~177% YTD. Market cap ~$437B. (stockanalysis.com, 6/1)
- The stock nearly doubled from the snapshot in ~2 weeks. **All multiples and the crowd-vs-analyst gap below use $408.85.** Downstream lanes (valuation, news) should treat $408.85 — not $209 — as the 6/1 anchor.
- **Catalyst:** Nvidia's Computex 2026 launch of the **RTX Spark superchip / 20-core Arm-based Grace N1X** PC processor (co-designed w/ MediaTek). ARM +11.2% pre-open → +15.7% close. (Benzinga, AlphaPilot, investing.com)

## 2. Sell-side consensus & revisions (the central divergence)
- **Consensus rating:** Buy / Moderate Buy across 23–40 analysts (stockanalysis 40; MarketBeat 27; public.com 23). Rating mix (stockanalysis, 40): **21 Strong Buy · 7 Buy · 10 Hold · 0 Sell · 2 Strong Sell.**
- **Avg price target: $226.92 (MarketBeat) / $241.19 (stockanalysis); median $250; high $425; low $120–125.** vs **$408.85 close ⇒ ~−41% to −44% implied downside.**
- **The crowd-vs-analyst gap predates the rally and widened:** early May, consensus PT ~$164 vs price ~$211; now ~$227–241 vs $409. (tikr, 5/2)
- **Estimate revisions are uniformly UP** in two clusters — post-earnings (5/6–5/7: RBC $175→$260, TD Cowen $165→$265, Rosenblatt $175→$270, others to ~$250–255) and post-Nvidia (6/1: **Mizuho → $425** Street-high, **Wells Fargo $255→$410**). New initiations: Bernstein $300 (5/18, Outperform), Jefferies $290 (5/21). **But targets are chasing price — even after the hikes the average implies downside.**
  - *Dating caveat:* some 6/1 articles re-report the 5/7 RBC/TD Cowen boosts as if fresh. Treat the 5/7 cluster and the distinct 6/1 Mizuho/Wells Fargo hikes as the verifiable revision events.
- **Forward consensus:** FY2027 rev ~$5.97B (+21%), EPS ~$1.22 (+44%) (stockanalysis). Q1 FY2027 guide ~$1.26B / $0.40 EPS (mgmt). FY2026 actual: record $4.92B (royalty $2.61B +21%, licensing $2.31B +25%).

## 3. Options-implied volatility & catalyst moves
- **IV 108.4%; 30-day HV 112.8%; IV Rank & Percentile = 100** (top of range). Beta (5Y) 3.78. (Barchart, 6/1) → options price **extreme** two-sided uncertainty.
- **May'26 earnings:** implied move **±11.7%** (ATM straddle, wk 5/4–5/7); **actual −7.25%** to $220.10 on 5/7 — i.e., the event move came *inside* the implied (option sellers paid), but the subsequent +85% drift off the $220 low dwarfed it. **The big moves are between earnings, on ecosystem catalysts.**
- **Next earnings ~2026-07-29.**

## 4. Short interest / days-to-cover / borrow
- **18,788,059 shares short** (settle 5/15, pub 5/27), up **+16.6%** from 16.11M (4/30). **~1.78% of float**, **~1.7 days to cover** (Fintel 1.84). Dollar short ~$3.93B. Off-exchange short-volume ratio 43% (5/29). (MarketBeat, Nasdaq, Fintel)
- **Read:** short base is **small and easily covered** → no crowded-short / squeeze signal in either direction. SI ticked up into mid-May but stays a low % of a thin (~13%) public float (SoftBank ~87%).
- **DATA GAP — cost-to-borrow / hard-to-borrow status:** Fintel's borrow-fee and short-availability fields are paywalled; could not verify. (Given low SI % of outstanding, borrow is *likely* easy/cheap, but unconfirmed.)
- **Labeling flag:** stockanalysis.com shows SI "13.29% of outstanding" — inconsistent with 18.79M ÷ ~1,063M ≈ 1.77%. Treat the **1.78% / ~1.7-DTC** figures as correct; the 13.29% label appears erroneous (or a non-standard float base).

## 5. Prediction markets (Polymarket / Kalshi / Metaculus)
- **No ARM-specific contract** on Polymarket, Kalshi, or Metaculus (6/1). Single-name equity markets are thin/absent → **explicit data gap** for a direct ARM crowd price.
- **Adjacent AI/semi markets (sector-sentiment proxies):**
  - Polymarket **"AI bubble burst by EOY 2026?"** ≈ **24% YES** ($2.86M vol; resolves on ≥3 of 6 conditions incl. NVDA −50% / SOX ETF −40% within 90 days). (Polymarket, 6/2)
  - Polymarket **"Largest company end-Dec-2026"** ≈ **62.5% NVDA** (Alphabet 19%, Apple 12%); earlier-2026 NVDA "largest" hit ~99.8%. (via cryptonomist)
  - Metaculus carries AI-timeline questions (e.g., ~25% AGI-by-2027) but nothing on ARM revenue.
- **Read:** the crowd simultaneously treats **Nvidia/AI dominance as near-certain** and prices a **~1-in-4 AI-sector drawdown by year-end** — a material, externally-sourced tail-risk gauge for a name whose thesis *is* the AI-capex cycle.

## 6. Where crowd and fundamentals disagree (hand-off to model agents)
1. **Tape vs. sell-side:** $408.85 vs ~$227–241 target ⇒ ~40%+ implied downside despite *rising* estimates. Market discounts a steeper AGI-CPU/data-center ramp than modeled consensus.
2. **Momentum vs. valuation:** 163x fwd EPS, 73x fwd sales, PEG 5.3 — a momentum/optionality premium no conventional multiple supports.
3. **Event vs. drift:** ARM's *own* earnings beat sold off −7% (foundry supply cap + negative smartphone-unit warning; mgmt *declined to raise* guidance), then the stock doubled on a *partner's* (Nvidia) launch. Sentiment is narrative-driven, not guidance-driven.
4. **Tail risk:** ~24% crowd-implied "AI bubble burst by 2026" is the cleanest single external "what breaks the thesis" number.

---

## Data gaps (known unknowns)
1. **Cost-to-borrow / hard-to-borrow status** — paywalled (Fintel). Unconfirmed; likely low given small SI but not verified.
2. **No ARM-specific prediction market** on any venue — sector proxies used instead.
3. **Exact 6/1 closing options expected-move table** (weekly/monthly $ bands) — Barchart table not populated on fetch; have IV (108%) and the May earnings implied ±11.7% instead.
4. **Forward-estimate dispersion / revision *breadth*** (# of up vs down EPS revisions, FY28 consensus) — behind paywalls; captured direction (uniformly up) and FY27 point estimate only.
5. **Source freshness/quality:** price-target and rating counts vary by aggregator (23 vs 27 vs 40 analysts; avg $227 vs $241) due to different panels/timestamps — presented as a range, not a point. Many target-change items come from secondary trade-press (StocksToTrade, Benzinga), not the issuing banks' notes; the *direction* (uniformly up, still below price) is robust across sources.

## Method & confidence
Triangulated across ≥5 independent aggregators (stockanalysis, MarketBeat, Fintel, Barchart, Polymarket) plus trade press, cross-checking every number against at least one other source. Confidence **high** on the headline divergence (price >> avg target), short-interest magnitude, and IV extreme; **medium** on exact target averages and revision counts (panel/timestamp variance); **low/gap** on borrow cost and any ARM-specific crowd price.
