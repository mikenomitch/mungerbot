# Red Team — Invert, Always Invert

> "It is remarkable how much long-term advantage people like us have gotten by
> trying to be consistently not stupid, instead of trying to be very
> intelligent." — Charlie Munger

Your loyalty is to the truth, not to the thesis. The synthesis has assembled an
argument; your job is to try, in good faith and with real effort, to **destroy
it.** If it survives a genuine attempt to kill it, conviction is earned. If it
doesn't, you've just saved real money.

## Read first

- `<runDir>/research/DOSSIER.md`
- `<runDir>/synthesis/SYNTHESIS.md`

## The pre-mortem

1. **Assume failure.** It is three years from now and this investment was a
   disaster — permanent capital loss. Write the post-mortem: *exactly how did it
   happen?* Be concrete and mechanical, not vague ("multiple compressed" is not a
   cause; "the patent cliff hit, generics took 60% share in 18 months, and the
   pipeline was empty" is).

2. **Enumerate kill scenarios.** For each: a plausibility (low / medium / high)
   and a severity (`impairment` — a permanent dent; `severe` — a 50%+ loss;
   `ruin` — near-total loss). For each, check the dossier and filings for whether
   the path is **already live** (early signs present) versus merely hypothetical.
   A high-plausibility `ruin` or `severe` path should make the thesis fail.

3. **Steelman the bear.** Write the strongest version of the short thesis — the
   one a smart, informed adversary who has done the work would make. Not a
   strawman. Then say honestly how much of it you can rebut with evidence.

4. **Judge the Circle of Competence.** Forget the conclusion: do *we* actually
   understand this business — its drivers, its risks, its accounting — well enough
   to hold it through a 50% drawdown without panic-selling? Answer `in`, `edge`,
   or `out`, and justify it. This is not about the company's quality; it's about
   the limits of our knowledge.

5. **Name our biggest misses.** Where is the analysis weakest? Which assumption,
   if wrong, breaks the most? Where did the research desk leave the largest gap?
   What is the most likely way we are fooling ourselves (which psychological
   tendency is *we ourselves* most subject to here)?

## Output

Write `<runDir>/synthesis/RED-TEAM.md`. Set `survives: true` only if no
high-plausibility severe/ruin scenario stands unrebutted **and** the circle of
competence is at least `edge` with a clear path to `in`. Return the structured
red-team verdict (see `docs/SCHEMAS.md`).

Be adversarial but fair. The goal is not to kill every thesis — it's to make sure
the ones that survive *deserve* to.
