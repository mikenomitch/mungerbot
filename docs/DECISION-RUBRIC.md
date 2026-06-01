# Decision Rubric

> "We have three baskets for investing: yes, no, and too tough to understand."
> — Charlie Munger

This rubric is **read and applied by the Decision agent** at the end of every
run. It is also encoded as a deterministic guard in
[`config/decision-rubric.js`](../config/decision-rubric.js); the agent runs that
file and reconciles any divergence between its judgment and the encoded gates.

The governing principle: **the default answer is PASS.** A Buy must overcome a
sequence of gates *and* clear a high conviction bar. Most good companies, at most
prices, should end in PASS. That is the system working, not failing.

## The four outcomes

| Decision | Meaning |
|---|---|
| **BUY** | Wonderful business, understandable, no fatal flaw, bought with a margin of safety, with multiple independent models converging. High conviction only. |
| **PASS** | The default. Either not wonderful enough, or wonderful but too expensive, or thesis not convergent. "No" is a complete sentence. |
| **SELL** | A holder should exit: a fatal flaw is live, the thesis has broken, or the price is far above intrinsic value. (With no position, used as "if you own it, get out.") |
| **TOO_HARD** | Outside the circle of competence, or the evidence base is too thin to judge. Not a knock on the business — a knock on our ability to know. |

## The gates (evaluated in order)

Each gate can **cap** the outcome. You cannot reach BUY without passing all five.

1. **Circle of Competence** — Do we genuinely understand this business well
   enough to hold it through a 50% drawdown without panic?
   - `out` → **TOO_HARD** (terminal).
   - `edge` → cannot be a *high-conviction* BUY; cap at PASS unless everything
     else is overwhelming.
   - `in` → proceed.

2. **No Fatal Flaw** — Did any *fatal-capable* model (incentives, inversion,
   accounting, redundancy/margin-of-safety) surface a credible path to permanent
   loss or fraud that survived the Red Team? Did the Red Team find a
   high-plausibility **ruin** scenario?
   - Any live fatal flaw → cannot BUY. **SELL** if held, else **PASS**.
   - "All I want to know is where I'm going to die, so I'll never go there."

3. **Quality** — Is this a *wonderful* business? Score 0–10 from moat durability
   (widening > narrowing), sustained ROIC vs WACC, pricing power, and management
   capital-allocation quality.
   - `qualityScore < Q_MIN` → **PASS** (a fair business is not enough; Munger
     buys wonderful businesses at fair prices, not fair businesses at wonderful
     prices).

4. **Margin of Safety** — Is the price meaningfully below a conservative
   intrinsic-value estimate?
   - `marginOfSafety% < MOS_MIN` → **PASS** (right business, wrong price).
   - `marginOfSafety% < OVERVALUED_SELL` (i.e. price far *above* IV) → **SELL** if held.

5. **Convergence / Lollapalooza** — Do enough *independent* models, from
   *different disciplines*, point the same way? Is there a positive Lollapalooza
   (compounding forces), not just a flat average?
   - Fewer than `N_CONVERGE` strong-positive models across `<` 3 disciplines, or
     no positive lollapalooza → not a high-conviction BUY; cap at **PASS**.

If all five gates pass, compute conviction. **BUY only if `conviction ≥
CONV_MIN`.** Otherwise **PASS**.

## Opportunity cost (the final sanity check)

Even a gate-passing BUY must beat the obvious alternative. The Decision agent
states `benchmarkComparison`: is this better than adding to a known compounder or
a low-cost index? If not clearly better, downgrade to PASS. Munger: *"The number
one idea is to view a stock as an ownership of the business and to judge the
staying quality of the business in terms of its competitive advantage. … Look for
more value in terms of discounted future cash flow than you're paying for."*

## Thresholds — **you own these numbers**

These constants encode *your* risk appetite and conviction bar. They are
deliberately left for you to set in
[`config/decision-rubric.js`](../config/decision-rubric.js). Suggested starting
points (intentionally demanding, per "high conviction only"):

| Constant | Suggested | Meaning |
|---|---|---|
| `COC_REQUIRED` | `'in'` | Minimum circle-of-competence to allow BUY |
| `Q_MIN` | `7` / 10 | Minimum quality score for BUY |
| `MOS_MIN` | `30` % | Minimum margin of safety for BUY |
| `OVERVALUED_SELL` | `-25` % | Price this far above IV ⇒ SELL if held |
| `N_CONVERGE` | `6` | Strong-positive models required for convergence |
| `MIN_DISCIPLINES` | `3` | Distinct disciplines those models must span |
| `CONV_MIN` | `8` / 10 | Minimum conviction to BUY |
| `DOSSIER_MIN_CONFIDENCE` | `3` / 5 | Below this, return TOO_HARD |

## Conviction (0–10)

Conviction is **not** an average of model scores. It rises with: gates passed
with room to spare, breadth of independent convergence, size of the margin of
safety, business quality, and a thesis that *survived* the Red Team. It falls
with: unresolved conflicts between models, thin dossier confidence, key-person or
single-customer dependence, and a fat left tail. Reserve 9–10 for the rare
"fat pitch."

The exact conviction formula and the gate wiring are yours to define in
`config/decision-rubric.js` — see the `TODO` there.
