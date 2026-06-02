<!--
  Live run tracker. Scaffolded by Intake; regenerated from on-disk _status.json
  files by the Progress Tracker at every phase boundary. This is the durable,
  resumable record — if the run is interrupted, this file plus the run directory
  tell a fresh agent exactly what is done and what remains.
  Status legend: PENDING · RUNNING · DONE · DEGRADED (partial) · MISSING (failed)
-->
# Progress — Arm Holdings plc (ARM) — 2026-06-01

**Run:** runs/arm-holdings/2026-06-01  ·  **Tier:** standard  ·  **Overall:** COMPLETE
**Final decision:** **PASS** (SELL if held) · conviction **9/10** · MoS ≈ −68% at $408.85

## Phases

| Phase | Status |
|---|---|
| Intake | DONE |
| Financial Deep Research | DONE |
| Dossier | DONE |
| Mental Models | DONE |
| Synthesis | DONE |
| Red Team | DONE |
| Decision | DONE |

## Research desk

| Lane | Status | Headline |
|---|---|---|
| filings | DONE | FY2026 20-F: rev $4.92B (+23%) but ~30.5% is related-party (SoftBank/Arm China) growing +82%; NEW pivot to production silicon (Arm AGI CPU); SoftBank 86.4% control + $8.5B share-pledge margin loan; Qualcomm/Nuvia JMOL loss on appeal, Case 2 trial Q4-CY2026; auditor Deloitte, prior material weakness remediated, no restatement. |
| financials | DONE | FY26 rev $4,920M (+23%), 97.5% gross margin, net cash ~$3.2B; but ~$1.05B SBC (21% of rev) makes FCF-less-SBC ~zero/negative 3 yrs running, ROIC ~13-15% vs ~10% WACC, capex inflecting to 11% of rev. |
| valuation | DONE | At $408.85 (~231x non-GAAP / ~481x GAAP TTM EPS, ~88x EV/Sales, ~409x EV/EBITDA), reverse-DCF needs ~35-40% FCF growth for 15y; intrinsic value ~$30-235/sh (mid ~$130) ⇒ margin of safety ~-68% (still -43% at bull ceiling). |
| news | DONE | FY2026 3rd straight >20% growth year ($4.92B rev, $1.77 EPS); historic AGI-CPU in-house silicon launch (Meta lead, Mar-2026) breaks neutrality but is supply-capped (~$1B vs >$2B demand); Arm LOST the Qualcomm litigation and now faces a fresh US FTC antitrust probe (opened 2026-05-15) plus EU/Korea; SoftBank ~87% owner deepens AI coupling via $500B Stargate and $6.5B Ampere buyout. |
| leadership | DONE | Capable, well-regarded CEO Haas (also now CEO of SoftBank Int'l — conflict) and strong-pedigree CFO Child; but SoftBank ~86.4% control + controlled-company exemptions gut minority governance; insiders are net sellers; SBC dilution exceeds token buybacks; no dividend; proposed ~$800M-$1bn+ CEO grant; Arm China related-party scar. |
| competition | DONE | Near-monopoly in mobile (~99%) and strong in auto (~94%); gaining fast in servers (Arm ~17.7% of server-CPU units Q1'26, up from 11.5%); moat is the software ecosystem/switching costs, but eroding at the edges from RISC-V (embedded/auto/China) and self-inflicted channel conflict — Arm's own AGI CPU (Mar 2026), the lost Qualcomm/Nuvia suit, and an FTC antitrust probe (May 2026). |
| sector | DONE | AI super-cycle has the chip industry at a ~$1T/+25% peak; Arm captures the high-ROIC IP layer via Armv9/CSS royalty-rate uplift, but the cycle is elevated and RISC-V/in-sourcing is the open structural risk. |
| prediction-markets | DONE | Crowd vs sell-side wildly split: ARM closed $408.85 (+15.7%, doubled in 2wks on Nvidia Arm-PC chip) vs avg analyst target ~$227-241 (~40%+ implied downside); 163x fwd P/E, IV at 100th pct, short interest small (~1.8% float, ~1.7 DTC); no ARM-specific prediction market but Polymarket prices ~24% 'AI bubble burst by 2026'. |

<!-- legal-regulatory and scuttlebutt are deep-tier lanes; not dispatched at standard tier. -->

## Mental models

| Model | Discipline | Status | Signal | Fatal? |
|---|---|---|---|---|
| incentives | Psychology | DONE | negative (fatal flaw) | Yes |
| liking-loving | Psychology | DONE | negative | |
| disliking-hating | Psychology | DONE | mixed | |
| doubt-avoidance | Psychology | DONE | mixed | |
| inconsistency-avoidance | Psychology | DONE | mixed | |
| social-proof | Psychology | DONE | negative | |
| authority-misinfluence | Psychology | DONE | negative | |
| reciprocation | Psychology | DONE | negative | |
| contrast-misreaction | Psychology | DONE | negative | |
| stress-influence | Psychology | DONE | mixed | |
| availability-misweighing | Psychology | DONE | negative | |
| use-it-or-lose-it | Psychology | DONE | positive | |
| senescence-decline | Psychology | DONE | mixed | |
| envy-jealousy | Psychology | DONE | negative | |
| deprival-superreaction | Psychology | DONE | negative | |
| competitive-moats | Microeconomics | DONE | mixed | |
| economies-of-scale | Microeconomics | DONE | mixed | |
| network-effects | Microeconomics | DONE | mixed | |
| supply-demand | Microeconomics | DONE | mixed | |
| comparative-advantage | Microeconomics | DONE | mixed | |
| opportunity-cost | Microeconomics | DONE | negative | |
| pricing-power | Microeconomics | DONE | mixed | |
| specialization | Microeconomics | DONE | mixed | |
| compound-interest | Mathematics | DONE | negative | |
| permutations-combinations | Mathematics | DONE | negative | |
| probability-trees | Mathematics | DONE | negative | |
| bayesian-updating | Mathematics | DONE | negative | |
| inversion | Mathematics | DONE | negative | Yes |
| power-laws | Mathematics | DONE | mixed | |
| critical-mass | Mathematics | DONE | positive | |
| equilibrium | Mathematics | DONE | negative | |
| redundancy-backup | Engineering | DONE | negative | Yes |
| breakpoints | Engineering | DONE | negative | |
| feedback-loops | Engineering | DONE | mixed | |
| natural-selection | Biology | DONE | mixed | |
| ecosystems-niches | Biology | DONE | mixed | |
| adaptation | Biology | DONE | mixed | |
| double-entry-limits | Accounting | DONE | negative | Yes |
| earnings-quality | Accounting | DONE | negative | |
| gaussian-distribution | Statistics | DONE | negative | |
| regression-to-mean | Statistics | DONE | negative | |
| sampling | Statistics | DONE | negative | |

<!--
  42 models dispatched; 42 DONE, 0 DEGRADED, 0 MISSING (every models/<key>/ has a
  done _status.json on disk).
  Signal tally from disk: positive 2 (critical-mass, use-it-or-lose-it); mixed 17;
  negative 23.
  Registry-fatal gates (Fatal? = Yes): incentives, inversion, redundancy-backup,
  double-entry-limits — all four returned a negative signal. On disk, only
  incentives carries fatalFlaw=true in its _status.json (fatal flaw explicitly live).
-->

## Log

- 2026-06-01 — run initialized (Intake): company resolved to Arm Holdings plc (Nasdaq: ARM, ADSs, USD, FYE Mar 31); directory tree, RUN.md, PROGRESS.md, and market snapshot scaffolded. 8 research lanes + 42 models pending.
- 2026-06-01 — Intake complete
- 2026-06-01 — Financial Deep Research complete
- 2026-06-01 — Dossier ready: 8 lane digests merged into research/DOSSIER.md (Business & Segments · The Numbers · Valuation & MoS · Moat & Competition · Sector & Macro · Leadership & Capital Allocation · Crowd Signal · Risks & Legal · Data Gaps & Confidence). Confidence 3/5. Key reconciliations: price anchor $408.85 (snapshot ~$209 stale); SoftBank 86.4%; AGI-CPU demand ~$2B (not $20B). Top gaps: $645.8M unbilled SoftBank contract-asset realization, undisclosed margin-loan trigger price, AGI-CPU economics; legal-regulatory & scuttlebutt lanes not run (standard tier).
- 2026-06-01 — Mental Models complete
- 2026-06-01 — Synthesis complete: net signal NEGATIVE (strong); weighted net −0.62 to −0.77; bull:bear = 2:23 (17 mixed); 21 strongly-weighted models converge negative across all 6 disciplines; negative Lollapalooza (correlated AI-sentiment doom-loop) live. (synthesis/SYNTHESIS.md)
- 2026-06-01 — Red Team complete: bearish thesis SURVIVES the pre-mortem; valuation spine "close to unbreakable" (negative 5-yr return even if mgmt hits FY2031 plan). Circle of competence = edge. Dents two supporting bear claims (owner-FCF leans on a peak-capex/IPO-RSU window; "fatal flaw" framing overshoots clean audited books). High-conviction PASS; lower-conviction SELL; never a BUY. (synthesis/RED-TEAM.md)
- 2026-06-01 — Decision complete: **PASS** (SELL if held), conviction **9/10**. All five gates fail — circle (edge), fatal flaw (incentives live), quality (6/10, thin ROIC−WACC spread + narrowing return quality), margin of safety (≈ −68%), convergence (negative, only 2 positive models). Deterministic check `config/decision-rubric.js` ⇒ PASS (heldPosition=false; would be SELL if held). Default-is-no discipline emphatically earned: price exceeds the top of every intrinsic-value method. ANALYSIS.md written. RUN COMPLETE.
