# Allbirds (BIRD) — Crowd & Market-Signal Data Tables

**As-of:** 2026-06-01 · **Lane:** prediction-markets · **Currency:** USD
**Caveat:** All figures below are *sentiment / positioning* data, not fundamentals.
Treat as a cross-check. Microcap (~$37M cap) ⇒ data is thin, volatile, and
distorted by an April-2026 trading frenzy around the AI-pivot announcement.

---

## 1. Short-interest time series (NASDAQ bi-monthly settlement; via MarketBeat / Fintel)

| Settlement date | Shares short | % of float | Days to cover | Note |
|---|---:|---:|---:|---|
| 2026-03-31 | 1,041,526 | 18.3% | 4.17 | Pre-pivot baseline |
| 2026-04-15 | 432,322 | 7.2% | 0.02 | Covering into the AI-pivot spike (Apr 15); DTC distorted by frenzy volume |
| 2026-04-30 | 1,108,752 | 18.4% | 0.16 | Shorts re-loaded post-spike; DTC distorted by huge volume |
| 2026-05-15 | 1,012,875 | 16.6% | 1.9 | Price back to ~$4.41 |
| 2026-05-29 (Fintel) | 1,012,875 | 17.38% | 2.20 | Same share count carried; float-pct varies by source's float input |

- **Days-to-cover is unreliable here.** The 0.02 / 0.16 readings are mechanical
  artifacts of the April volume explosion (avg daily volume ran ~250k–500k+),
  not a sign that shorts can exit costlessly. Use the share count (~1.0–1.1M) and
  %-float (~16–18%) as the durable signals.
- **S3 Partners** estimated **16–21% of shares shorted** *before* the pivot spike
  (cited via James Seyffart / X, Apr 2026).
- **Off-exchange short volume ratio** ~62.4% on 2026-05-29 (Fintel) — typical for a
  retail-heavy, low-float name; not independently corroborated.

## 2. Borrow / hard-to-borrow

| Metric | Value | Source / date |
|---|---|---|
| Cost-to-borrow (CTB) rate | **DATA GAP** (paywalled: Fintel/S3) | as-of 2026-06-01 |
| Borrow availability | Qualitatively "minimal free float, no way to borrow shares" during Apr-2026 squeeze | trade press (MEXC/Cryptopolitan), Apr 2026 |
| Shares available to short | DATA GAP (paywalled) | — |

## 3. Options-implied signal

| Metric | Value | Source / date |
|---|---|---|
| 30-day **implied** volatility (mean/call/put) | **No data populated ("--")** | AlphaQuery, 2026-05-29 |
| 30-day **realized** vol (close-to-close) | **~86.7%** (annualized) | AlphaQuery, 2026-05-29 |
| 30-day realized vol (Parkinson) | ~88.0% | AlphaQuery, 2026-05-29 |
| Beta (5Y) | 2.57 | stockanalysis.com, 2026-06-01 |
| Implied move / straddle for catalysts | **DATA GAP** — no liquid IV surface | — |

- **Interpretation:** listed BIRD options exist but appear too illiquid to generate
  a usable implied-vol / expected-move read. The forward "crowd" view on the
  catalyst is therefore expressed in the *stock* (and in lockup math), not options.
- Realized vol ~87% + beta 2.57 quantify an extreme-volatility regime.

## 4. Sell-side consensus & revisions

| Metric | Value | Source / date |
|---|---|---|
| Analysts covering | **~1** (effectively abandoned) | Public.com / MarketBeat, May–Jun 2026 |
| Consensus rating | "Hold" / "Neutral" | Public.com (2026-06-02), MarketBeat (2026-05-14) |
| Price target (single, stale) | $8.00 | Public.com, 2026-06-02 |
| Other targets seen (conflicting, mostly pre-pivot) | $4.38 (6-analyst aggregate), $11 (2-analyst) | MarketScreener / TipRanks aggregators |
| Forward revenue / EPS estimates | **None usable** — residual notes cite 2023-era footwear guidance ("positive adj. EBITDA by 2025", "Q4 2023 rev -15% to -22%") | Public.com, 2026-06-02 |

- **Key point:** there is **no live forward consensus**. Coverage is a stale relic
  of the footwear business; targets and estimates pre-date the AI pivot and the
  asset sale and should be ignored as a forward signal.

## 5. Prediction markets (Polymarket / Kalshi / Metaculus)

| Venue | BIRD / NewBird market found? |
|---|---|
| Polymarket | **None** (searched 2026-06-01) |
| Kalshi | **None** (searched 2026-06-01) |
| Metaculus | **None** (searched 2026-06-01) |

No public prediction market exists on BIRD's deal close, delisting, or AI-pivot
outcome. Expected for a sub-$50M-cap single name.

## 6. Best available "event-odds" proxy — the June 3 shareholder vote

The cleanest crowd/event signal is the **locked-up vote**, not a market price:

| Item | Value | Source / date |
|---|---|---|
| Special meeting (vote) date | **2026-06-03, 12:00 PT** (rescheduled from 2026-05-18) | SEC DEFM14A / proxy, 2026-05-08; rescheduling per proxy |
| Proposals | Asset Sale · Charter Amendment · Nasdaq Proposal · **Dissolution** · Adjournment | DEFM14A 2026-05-08 |
| Board recommendation | "FOR" all proposals (unanimous) | DEFM14A 2026-05-08 |
| **Support Agreements locked** | **~71% of voting power** (as of 2026-02-28): Maveron, Joey Zwillinger, Tim Brown, Dick Boyce | DEFM14A / 8-K, 2026 |
| Convertible facility gating | Larger draw ($2.0M of initial $5.25M, then up to $50M) conditioned on **Nasdaq Proposal approval** at this vote | 8-K (Securities Purchase Agreement, 2026-04-14, A&R 2026-04-19) |

- With ~71% of voting power committed via Support Agreements (amplified by Class B
  super-voting), the **asset sale is highly likely to be approved**. The market is
  effectively pricing approval as near-certain; the open question is the *go-forward*
  (AI pivot execution + dilution) vs. *dissolution* path, which the same meeting
  leaves as a live fork.
- **Vote is 2 days after the as-of date ⇒ outcome is NOT yet known as of 2026-06-01.**

## 7. Price / froth context (the stock as the crowd signal)

| Item | Value | Source / date |
|---|---|---|
| Last price (Class A) | $4.18 | stockanalysis.com, 2026-06-01 16:00 EDT |
| Market cap | ~$36.8M | stockanalysis.com, 2026-06-01 |
| Enterprise value | ~$55.7M (> mkt cap ⇒ net debt incl. convert) | stockanalysis.com, 2026-06-01 |
| Cash & equivalents | ~$14.4M | stockanalysis.com, 2026-06-01 |
| 50-day / 200-day MA | $5.15 / $5.07 | stockanalysis.com, 2026-06-01 |
| 52-week price change | -40.7% | stockanalysis.com, 2026-06-01 |
| AI-pivot spike (Apr 15, 2026) | +~580–600% intraday: $6.82 open → $24.31 high → $16.99 close; +~$120–150M cap | CNN/CNBC/CoinDesk/Bloomberg, 2026-04-15/16 |
| Next-day reversal (Apr 16) | -25% to -36%, closed ~$12.03 | Bloomberg/StocksToTrade, 2026-04-16 |

**Crowd-vs-fundamentals tension (the headline of this lane):** A ~6–7x one-day
move on a business the company has *no demonstrated expertise in* is textbook
speculative froth (IBKR's Steve Sosnick: "the motivation behind the corporate
pivot is sensible, the market reaction less so"). Press repeatedly invoked the
**Long Island Iced Tea → "Long Blockchain" (2017)** precedent — surged then
delisted — as the cautionary analog.
