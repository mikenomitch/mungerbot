#!/usr/bin/env node
/*
 * decision-rubric.js — the deterministic gate check behind every verdict.
 *
 * The Decision agent runs this with its numbers and reconciles any divergence
 * between its judgment and these encoded gates. Keeping the rubric in code (not
 * just prose) gives the LLM decision a hard, auditable guardrail — a core
 * best-practice for letting a model make a high-stakes call.
 *
 * Usage:
 *   node config/decision-rubric.js --json '{ ...inputs... }'   # evaluate
 *   node config/decision-rubric.js --test                      # run self-tests
 *
 * Input shape (see docs/SCHEMAS.md):
 *   {
 *     circleOfCompetence:   'in' | 'edge' | 'out',
 *     fatalFlaws:           <number of LIVE fatal flaws that survived the Red Team>,
 *     redTeamSurvives:      <bool>,        // did the thesis survive the pre-mortem?
 *     qualityScore:         <0-10>,
 *     marginOfSafetyPct:    <number, e.g. 35 means 35% below intrinsic value;
 *                            negative means trading ABOVE intrinsic value>,
 *     strongPositiveModels: <count of strong-positive model verdicts>,
 *     disciplinesConverging:<count of distinct disciplines in that cluster>,
 *     lollapalooza:         'positive' | 'negative' | 'none',
 *     dossierConfidence:    <0-5>,
 *     conviction:           <0-10>,
 *     heldPosition:         <bool>         // do we currently own it? (enables SELL)
 *   }
 */

"use strict";

// ===========================================================================
// TODO(you): THESE NUMBERS AND THE decide() TREE ENCODE *YOUR* CONVICTION BAR.
// The framework runs out of the box with the demanding defaults below (per
// "Buy only on high conviction"). Review them, and the decision tree further
// down, and make them yours — this is the one place your investment philosophy
// should live, not Claude's. See docs/DECISION-RUBRIC.md for the rationale.
// ===========================================================================
const THRESHOLDS = {
  COC_REQUIRED: "in", // minimum circle-of-competence to allow BUY ('in' or 'edge')
  Q_MIN: 8, // minimum quality score (0-10) for BUY
  MOS_MIN: 30, // minimum margin of safety (%) for BUY
  OVERVALUED_SELL: -25, // price this far ABOVE intrinsic value (%) ⇒ SELL if held
  N_CONVERGE: 6, // strong-positive models required for convergence
  MIN_DISCIPLINES: 3, // distinct disciplines those models must span
  CONV_MIN: 8, // minimum conviction (0-10) to BUY
  DOSSIER_MIN_CONFIDENCE: 3, // below this (0-5), the evidence is too thin ⇒ TOO_HARD
};

const cocRank = { out: 0, edge: 1, in: 2 };

/**
 * Pure function: inputs → { decision, gates, conviction, reasons, thresholds }.
 * decision ∈ 'BUY' | 'PASS' | 'SELL' | 'TOO_HARD'.
 */
function decide(input, t = THRESHOLDS) {
  const reasons = [];

  // --- Compute each gate (mechanical) ---
  const gates = {
    circleOfCompetence:
      cocRank[input.circleOfCompetence] >= cocRank[t.COC_REQUIRED],
    noFatalFlaw:
      (input.fatalFlaws || 0) === 0 && input.redTeamSurvives !== false,
    quality: input.qualityScore >= t.Q_MIN,
    marginOfSafety: input.marginOfSafetyPct >= t.MOS_MIN,
    convergence:
      input.strongPositiveModels >= t.N_CONVERGE &&
      input.disciplinesConverging >= t.MIN_DISCIPLINES &&
      input.lollapalooza === "positive",
  };

  // -----------------------------------------------------------------------
  // TODO(you): THE DECISION TREE.
  // This default encodes Munger's discipline: default to PASS, never BUY without
  // every gate AND high conviction, exit (or avoid) on a live fatal flaw, and
  // treat thin evidence as "too hard". Adjust the ordering and conditions to
  // match how *you* want to behave — e.g. you might allow an 'edge' BUY at very
  // high conviction, or make a negative lollapalooza an automatic SELL.
  // -----------------------------------------------------------------------
  let decision;

  if (input.dossierConfidence < t.DOSSIER_MIN_CONFIDENCE) {
    decision = "TOO_HARD";
    reasons.push(
      `Dossier confidence ${input.dossierConfidence} < ${t.DOSSIER_MIN_CONFIDENCE}: evidence too thin to judge`,
    );
  } else if (input.circleOfCompetence === "out") {
    decision = "TOO_HARD";
    reasons.push("Outside circle of competence");
  } else if (!gates.noFatalFlaw) {
    decision = input.heldPosition ? "SELL" : "PASS";
    reasons.push(
      `Live fatal flaw / failed pre-mortem ⇒ ${decision} ("never go where you'll die")`,
    );
  } else if (
    input.marginOfSafetyPct <= t.OVERVALUED_SELL &&
    input.heldPosition
  ) {
    decision = "SELL";
    reasons.push(
      `Price ${Math.abs(input.marginOfSafetyPct)}% above intrinsic value (≥ ${Math.abs(t.OVERVALUED_SELL)}%) ⇒ exit`,
    );
  } else if (
    gates.circleOfCompetence &&
    gates.quality &&
    gates.marginOfSafety &&
    gates.convergence &&
    input.conviction >= t.CONV_MIN
  ) {
    decision = "BUY";
    reasons.push(
      `All gates pass and conviction ${input.conviction} ≥ ${t.CONV_MIN}: fat pitch`,
    );
  } else {
    decision = "PASS";
    const failed = Object.entries(gates)
      .filter(([, ok]) => !ok)
      .map(([k]) => k);
    if (input.conviction < t.CONV_MIN) failed.push(`conviction<${t.CONV_MIN}`);
    reasons.push(
      `Default PASS — unmet for BUY: ${failed.join(", ") || "none (conviction bar)"}`,
    );
  }

  return {
    decision,
    gates,
    conviction: input.conviction,
    reasons,
    thresholds: t,
  };
}

// --------------------------------------------------------------------------
// Self-tests: `node config/decision-rubric.js --test`. Extend these to lock in
// your intended behavior before trusting the gate in a real run.
// --------------------------------------------------------------------------
function runTests() {
  const base = {
    circleOfCompetence: "in",
    fatalFlaws: 0,
    redTeamSurvives: true,
    qualityScore: 8,
    marginOfSafetyPct: 35,
    strongPositiveModels: 7,
    disciplinesConverging: 4,
    lollapalooza: "positive",
    dossierConfidence: 4,
    conviction: 8,
    heldPosition: false,
  };
  const cases = [
    ["fat pitch ⇒ BUY", base, "BUY"],
    ["no margin of safety ⇒ PASS", { ...base, marginOfSafetyPct: 5 }, "PASS"],
    ["mediocre quality ⇒ PASS", { ...base, qualityScore: 5 }, "PASS"],
    ["weak convergence ⇒ PASS", { ...base, strongPositiveModels: 3 }, "PASS"],
    ["low conviction ⇒ PASS", { ...base, conviction: 6 }, "PASS"],
    [
      "only edge of competence ⇒ PASS",
      { ...base, circleOfCompetence: "edge" },
      "PASS",
    ],
    [
      "outside competence ⇒ TOO_HARD",
      { ...base, circleOfCompetence: "out" },
      "TOO_HARD",
    ],
    ["thin dossier ⇒ TOO_HARD", { ...base, dossierConfidence: 2 }, "TOO_HARD"],
    ["fatal flaw, not held ⇒ PASS", { ...base, fatalFlaws: 1 }, "PASS"],
    [
      "fatal flaw, held ⇒ SELL",
      { ...base, fatalFlaws: 1, heldPosition: true },
      "SELL",
    ],
    [
      "richly overvalued + held ⇒ SELL",
      { ...base, marginOfSafetyPct: -30, heldPosition: true },
      "SELL",
    ],
  ];
  let pass = 0;
  for (const [name, input, expected] of cases) {
    const got = decide(input).decision;
    const ok = got === expected;
    pass += ok ? 1 : 0;
    console.log(
      `${ok ? "ok  " : "FAIL"}  ${name}  →  ${got}${ok ? "" : ` (expected ${expected})`}`,
    );
  }
  console.log(`\n${pass}/${cases.length} passed`);
  process.exit(pass === cases.length ? 0 : 1);
}

// --------------------------------------------------------------------------
// CLI
// --------------------------------------------------------------------------
if (require.main === module) {
  const argv = process.argv.slice(2);
  if (argv.includes("--test")) {
    runTests();
  } else {
    const i = argv.indexOf("--json");
    if (i === -1 || !argv[i + 1]) {
      console.error(
        "usage: node config/decision-rubric.js --json '{...}'  |  --test",
      );
      process.exit(2);
    }
    let input;
    try {
      input = JSON.parse(argv[i + 1]);
    } catch (e) {
      console.error("invalid --json:", e.message);
      process.exit(2);
    }
    console.log(JSON.stringify(decide(input), null, 2));
  }
}

module.exports = { decide, THRESHOLDS };
