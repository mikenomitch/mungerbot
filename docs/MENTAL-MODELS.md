# The Latticework — Mental Model Catalog

> "You've got to have models in your head. And you've got to array your
> experience — both vicarious and direct — onto this latticework of models. …
> The first rule is that you can't really know anything if you just remember
> isolated facts and try and bang 'em back." — Charlie Munger

This is the human-readable catalog of the models the workflow runs. The
**authoritative, runnable registry** (with each model's exact mandate, research
intensity, and whether it can be disqualifying) lives in the `MODELS` array in
[`workflows/munger-analysis.workflow.js`](../workflows/munger-analysis.workflow.js).
To customize the set, edit that array or pass an override via `args.models`.

Each model becomes **one subagent** that (a) reads the shared dossier, (b) does
its own research at its assigned intensity, and (c) returns a structured verdict
(signal, strength, conviction, relevance, red flags, and whether it sees a fatal
flaw). See [`prompts/mental-model-agent.md`](../prompts/mental-model-agent.md) for
the shared analyst contract.

### Research intensity

- **deep** — substantial independent research within the model's domain on top of the dossier (moats, scale, pricing power, accounting).
- **standard** — moderate targeted research plus careful reasoning over the dossier.
- **lens** — applied as an analytical lens over the dossier *and* as a check on our own reasoning; light external research. Most psychology tendencies are lenses.

### Fatal models

A handful of models can, on their own, force a PASS/SELL if they surface a
credible path to permanent capital loss or fraud — **incentives, inversion,
accounting (what numbers hide), and engineering margin-of-safety/redundancy**.
This encodes Munger's "invert" and "where am I going to die" discipline.

---

## 1. Psychology / Human Misjudgment

Munger's most original contribution. Each tendency is applied in **two
directions**: to the *subject* (how it shapes management, employees, customers,
and the market's pricing of the stock) and to the *analyst* (as a check on our
own reasoning).

| Model | What it asks here |
|---|---|
| Reward & Punishment Superresponse (**Incentives**) | Follow the incentives. Do they drive durable per-share value or reward gaming? *(can be fatal)* |
| Liking / Loving | Do customers love the brand (pricing power)? Are *we* seduced by a likeable story? |
| Disliking / Hating | Who hates this company, and can that become regulation, boycotts, or talent flight? |
| Doubt-Avoidance | Is uncertainty being resolved too quickly into a tidy narrative? |
| Inconsistency-Avoidance | Customer lock-in (good) vs management committed to a failing strategy (bad). |
| Social Proof | Herd/momentum/meme dynamics in the stock; social-proof-driven adoption in the product. |
| Authority-Misinfluence | Is the thesis leaning on a famous name instead of evidence? Key-person dependence. |
| Reciprocation | Kickbacks, sweetheart deals, regulatory capture propping up numbers. |
| Contrast-Misreaction | "Cheap" only relative to a prior bubble price or an over-hyped peer? |
| Stress-Influence | How does the business behave under recession / credit crunch / loss of confidence? |
| Availability-Misweighing | Over-weighting vivid recent events; re-anchor on base rates. |
| Use-It-or-Lose-It | Is core competence (R&D, talent, distribution) atrophying while it coasts? |
| Senescence-Misinfluence | Is the business or its leadership aging into decline? |
| Envy / Jealousy | Envy-driven me-too capex or price wars that wreck industry returns. |
| Deprival-Superreaction (Loss Aversion) | Capitulation selling (opportunity) vs refusal to sell a broken story (trap). |

> The **Lollapalooza effect** — several tendencies compounding at once — is not a
> single agent; it is the explicit job of the **Synthesis** phase.

## 2. Economics & Business

| Model | What it asks here |
|---|---|
| Competitive Advantage / **Moats** *(deep)* | What is the moat, and is it widening or narrowing? Sustained ROIC > WACC. |
| Economies of Scale *(deep)* | Does scale lower unit cost / strengthen the offering — or breed bureaucracy? |
| Network Effects *(deep)* | Real, strengthening network effects — or saturating and multi-homeable? |
| Supply & Demand | Capacity gluts, inventory cycles, the cobweb dynamic. |
| Comparative Advantage | What does this firm do *relatively* best, and is it defensible? |
| Opportunity Cost | Munger's true filter: best use of a dollar *vs the obvious alternative*. |
| **Pricing Power** *(deep)* | Can it raise prices above inflation without losing volume? The best moat evidence. |
| Specialization & Division of Labor | Organized for productivity, or diversified into mediocrity? |

## 3. Mathematics & Probability

| Model | What it asks here |
|---|---|
| Compound Interest | Reinvestment runway × incremental ROIC = the long-run return. |
| Permutations & Combinations | Enumerate the real outcome space, not one point forecast. |
| Probability & Decision Trees | EV across bear/base/bull, honestly weighted. Fat left tail? |
| Bayesian Updating | State the prior (base rate), update on evidence, show the posterior. |
| **Inversion** ("invert, always invert") | How does this go to zero? Is that path live? *(can be fatal)* |
| Power-Law Distributions | Winner-take-most market? Is this firm a head or a long-tail loser? |

## 4. Physics & Engineering

| Model | What it asks here |
|---|---|
| Critical Mass / Tipping Points | Has it crossed a self-sustaining threshold (liquidity, density, install base)? |
| Equilibrium | What do margins/returns revert to once competition responds? |
| Backup Systems & Redundancy | Engineering margin of safety against shocks. Single points of failure. *(can be fatal)* |
| Breakpoints / Thresholds | Covenant trips, downgrades, churn thresholds — nonlinear state changes. |
| Feedback Loops | Reinforcing flywheels vs balancing decay — which dominates, which way is it turning? |

## 5. Biology & Evolution

| Model | What it asks here |
|---|---|
| Natural Selection | What traits is this ecosystem selecting for? Is the firm fit for the *current* one? |
| Ecosystems & Niches | Defensible niche vs contested zone; health of the broader ecosystem. |
| Adaptation | Track record of reinvention vs rigidity under disruption. |

## 6. Accounting

| Model | What it asks here |
|---|---|
| What Numbers Hide *(deep)* | GAAP vs non-GAAP, leases/pensions, goodwill, off-balance-sheet; what double-entry can't capture. *(can be fatal)* |
| Earnings Quality *(deep)* | Accruals, cash conversion, one-offs, owner earnings vs reported. |

## 7. Statistics

| Model | What it asks here |
|---|---|
| Gaussian Distribution & Tails | Thin-tailed model of a fat-tailed risk? Size the left tail. |
| Regression to the Mean | Are extreme margins/growth a durable edge or a cyclical peak? |
| Sampling | Survivorship, short history, cherry-picked KPIs — is the sample representative? |

---

## Adding a model

1. Append an entry to the `MODELS` array in the workflow with `key`, `name`,
   `discipline`, `intensity`, `fatal`, and a one-paragraph `mandate` phrased as
   *what this model investigates about this specific company.*
2. Add a row to the relevant table above.
3. No other change is needed — the workflow creates the `models/<key>/` directory,
   dispatches the agent, and folds the verdict into synthesis automatically.
