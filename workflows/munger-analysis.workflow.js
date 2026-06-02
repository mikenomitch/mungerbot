export const meta = {
  name: 'munger-analysis',
  description:
    "Analyze a company through Charlie Munger's latticework of mental models — deep financial research feeds ~40 multidisciplinary model agents, then adversarial synthesis issues a Buy/Pass/Sell verdict. Buys only on high conviction; the default answer is no.",
  whenToUse:
    'When you want a rigorous, multi-model investment analysis of a single company that ends in an actionable, well-reasoned verdict with a written audit trail.',
  phases: [
    { title: 'Intake', detail: 'Resolve company/ticker, scaffold the run directory and PROGRESS.md' },
    { title: 'Financial Deep Research', detail: 'Parallel research desk: filings, financials, valuation, news, leadership, competition, sector, prediction markets, legal' },
    { title: 'Dossier', detail: 'Merge raw research into one cited, as-of-dated evidence base' },
    { title: 'Mental Models', detail: 'One agent per Munger mental model; each reasons over the dossier plus its own domain research' },
    { title: 'Synthesis', detail: 'Cross-model convergence and the Lollapalooza check' },
    { title: 'Red Team', detail: 'Inversion / pre-mortem: try to kill the thesis' },
    { title: 'Decision', detail: 'Apply the decision rubric; Buy only on high conviction' },
  ],
}

// ---------------------------------------------------------------------------
// Inputs (args). Scripts cannot call Date.now()/new Date(), so `date` is required.
//   args = {
//     company:  string   (required)  e.g. "Costco Wholesale"
//     ticker:   string   (optional)  e.g. "COST"
//     date:     string   (required)  run date "YYYY-MM-DD" (the as-of date)
//     runDir:   string   (optional)  defaults to runs/<slug>/<date>
//     tier:     'quick' | 'standard' | 'deep'   (default 'standard')
//     models:   array    (optional)  override the embedded model registry
//     thesis:   string   (optional)  a prior thesis to stress-test (enables SELL logic)
//   }
// ---------------------------------------------------------------------------
// `args` may arrive as a real object or, depending on how the orchestrating tool
// call encodes it, as a JSON-encoded string. Normalize to an object so the
// workflow is robust to both forms (and to args being omitted entirely).
const ARGS = (typeof args === 'string' ? JSON.parse(args) : args) ?? {}
const company = ARGS.company
const date = ARGS.date
if (!company || !date) {
  throw new Error(
    'munger-analysis requires args.company and args.date ("YYYY-MM-DD"). ' +
      'Date must be passed in because workflow scripts cannot read the system clock.',
  )
}
const ticker = ARGS.ticker ?? ''
const tier = ARGS.tier ?? 'standard'
const priorThesis = ARGS.thesis ?? ''
const slug = company
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')
const runDir = ARGS.runDir ?? `runs/${slug}/${date}`
const label = ticker ? `${company} (${ticker})` : company

// ---------------------------------------------------------------------------
// The Financial Research Desk. Each lane is an independent specialist agent.
// This is the "financial analysis sub-agent with many sub-agents" — realized as
// a parallel desk so each lane runs concurrently and fails independently.
// `tiers` controls which lanes run at each budget level.
// ---------------------------------------------------------------------------
const RESEARCH_DESK = [
  { key: 'filings',            name: 'SEC Filings',            tiers: ['quick', 'standard', 'deep'], mandate: 'Pull the latest 10-K, last 4 10-Qs, recent 8-Ks, the DEF 14A proxy, and insider Form 4s from SEC EDGAR (and home-market equivalents for foreign issuers). Extract: business description, segments, risk factors, MD&A, related-party transactions, off-balance-sheet items, and any restatements. Quote and cite by document + section + date.' },
    { key: 'financials',         name: 'Financial Statements',   tiers: ['quick', 'standard', 'deep'], mandate: 'Build a 5–10 year quantitative picture: revenue & segment growth, gross/operating/net margins, ROIC vs WACC, ROE & its DuPont drivers, free cash flow and FCF conversion, balance-sheet strength, net debt and the maturity wall, working-capital trend, capex intensity, share count history (dilution vs buybacks), and dividends. Flag accounting red flags (accruals, revenue recognition, rising DSO/inventory, capitalized costs). Save a tidy data table artifact.' },
  { key: 'valuation',          name: 'Valuation',              tiers: ['quick', 'standard', 'deep'], mandate: 'Triangulate intrinsic value: current and historical multiples (P/E, EV/EBIT, EV/FCF, P/B) vs the company\'s own history and peers; a reverse-DCF to back out the growth the price implies; and a 3-scenario (bear/base/bull) forward DCF with explicit assumptions. Output an intrinsic-value RANGE, the current price, and the implied margin of safety. Save the model as an artifact.' },
  { key: 'news',               name: 'News & Catalysts',       tiers: ['quick', 'standard', 'deep'], mandate: 'Survey the last ~18 months of material news: earnings surprises, guidance changes, M&A, management changes, product cycles, controversies, short-seller reports, and regulatory actions. Separate signal from noise; date and link every item. Note upcoming catalysts.' },
  { key: 'leadership',         name: 'Leadership & Governance', tiers: ['standard', 'deep'],          mandate: 'Profile the CEO, CFO, and board: tenure, prior track record, and — most importantly — their capital-allocation history (what did they do with a dollar of retained earnings?). Examine insider ownership and recent insider buying/selling, compensation structure and whether incentives align with per-share value creation, founder involvement, and culture signals (Glassdoor, turnover, scuttlebutt).' },
  { key: 'competition',        name: 'Competitive Landscape',  tiers: ['standard', 'deep'],          mandate: 'Map direct and indirect competitors, relative market share and trajectory, and run a Porter Five Forces read. Assess the durability of any advantage: switching costs, scale economics, network effects, brand, regulatory barriers. Identify who is gaining and why.' },
  { key: 'sector',             name: 'Sector & Macro',         tiers: ['standard', 'deep'],          mandate: 'Characterize the industry: structure, TAM and growth, secular tailwinds/headwinds, cyclicality, regulatory regime, and where we are in the cycle. Identify the 2–3 variables that most drive sector economics.' },
  { key: 'prediction-markets', name: 'Crowd & Market Signal',  tiers: ['standard', 'deep'],          mandate: 'Gather forward-looking crowd signal: relevant Polymarket/Kalshi/Metaculus markets, sell-side consensus estimates and revisions, options-implied moves around catalysts, short interest and days-to-cover, and any borrow-cost stress. Treat these as a sentiment cross-check, not truth.' },
  { key: 'legal-regulatory',   name: 'Legal & Regulatory',     tiers: ['deep'],                      mandate: 'Catalog material litigation, regulatory investigations, antitrust exposure, environmental/safety liabilities, and governance flags. Estimate tail risk and any existential threats.' },
  { key: 'scuttlebutt',        name: 'Scuttlebutt / Channel',  tiers: ['deep'],                      mandate: 'Phil Fisher–style channel checks: customer reviews and concentration, supplier power, employee sentiment, product reputation, app-store and review trends, and any primary-source signal on demand direction.' },
]

// ---------------------------------------------------------------------------
// The Latticework. One agent per mental model.
//   intensity: 'deep'      — heavy external research within the model's domain
//              'standard'  — moderate external research + dossier reasoning
//              'lens'      — applies the model as an analytical lens over the dossier
//                            (and as a check on our own reasoning); light external research
//   fatal: true — a strong negative read from this model can, by itself, force PASS/SELL
//                 (Munger's "all I want to know is where I'll die, so I'll never go there")
// ---------------------------------------------------------------------------
const MODELS = [
  // ---- Psychology / Human Misjudgment ----
  { key: 'incentives',              name: 'Reward & Punishment Superresponse (Incentives)', discipline: 'Psychology', intensity: 'standard', fatal: true,  mandate: 'Follow the incentives — of management, employees, the sales channel, and customers. Do incentives drive durable per-share value, or do they reward gaming, empire-building, or pulling demand forward? Mis-set incentives are the single most common cause of disaster.' },
  { key: 'liking-loving',           name: 'Liking / Loving Tendency',                       discipline: 'Psychology', intensity: 'lens',     fatal: false, mandate: 'Do customers love this brand/product in a way that creates pricing power and low churn? Separately: are WE being seduced by an admired CEO or a likeable story?' },
  { key: 'disliking-hating',        name: 'Disliking / Hating Tendency',                    discipline: 'Psychology', intensity: 'lens',     fatal: false, mandate: 'Who hates this company — regulators, customers, communities, ex-employees — and can that hatred translate into regulation, boycotts, or talent flight?' },
  { key: 'doubt-avoidance',         name: 'Doubt-Avoidance Tendency',                       discipline: 'Psychology', intensity: 'lens',     fatal: false, mandate: 'Is the market resolving uncertainty too quickly into a tidy narrative (bull or bear)? Where is genuine doubt being papered over?' },
  { key: 'inconsistency-avoidance', name: 'Inconsistency-Avoidance (Status Quo)',           discipline: 'Psychology', intensity: 'lens',     fatal: false, mandate: 'Are customers locked in by habit/commitment (good moat) — or is management locked into a failing strategy by prior commitments (bad)?' },
  { key: 'social-proof',            name: 'Social Proof',                                   discipline: 'Psychology', intensity: 'standard', fatal: false, mandate: 'Is the stock/story driven by herd behavior (crowded long or short, momentum, meme dynamics)? Does the business benefit from social-proof-driven adoption?' },
  { key: 'authority-misinfluence',  name: 'Authority-Misinfluence',                         discipline: 'Psychology', intensity: 'lens',     fatal: false, mandate: 'Is the thesis leaning on authority figures (a famous investor, a star analyst, the CEO\'s reputation) instead of evidence? Does the company depend dangerously on one key person?' },
  { key: 'reciprocation',           name: 'Reciprocation Tendency',                         discipline: 'Psychology', intensity: 'lens',     fatal: false, mandate: 'Are there reciprocity dynamics — channel kickbacks, sweetheart supplier deals, regulatory capture — propping up the numbers?' },
  { key: 'contrast-misreaction',    name: 'Contrast-Misreaction',                           discipline: 'Psychology', intensity: 'lens',     fatal: false, mandate: 'Is the stock "cheap" only by contrast with a prior bubble price or vs an over-hyped peer? Strip the anchor and judge absolute value.' },
  { key: 'stress-influence',        name: 'Stress-Influence',                               discipline: 'Psychology', intensity: 'lens',     fatal: false, mandate: 'How does the business behave under stress (recession, credit crunch, run on confidence)? Does the balance sheet force bad decisions at the worst time?' },
  { key: 'availability-misweighing',name: 'Availability-Misweighing',                       discipline: 'Psychology', intensity: 'standard', fatal: false, mandate: 'Is the market over-weighting recent, vivid events and under-weighting boring base rates? Re-anchor on base rates for this kind of business.' },
  { key: 'use-it-or-lose-it',       name: 'Use-It-or-Lose-It',                              discipline: 'Psychology', intensity: 'lens',     fatal: false, mandate: 'Is the company\'s core competence atrophying (R&D, engineering talent, distribution) while it coasts on legacy strength?' },
  { key: 'senescence-decline',      name: 'Senescence-Misinfluence',                        discipline: 'Psychology', intensity: 'lens',     fatal: false, mandate: 'Is the business (or its leadership) aging into decline — stale products, aging customer base, founder past their prime, innovation slowing?' },
  { key: 'envy-jealousy',           name: 'Envy / Jealousy',                                discipline: 'Psychology', intensity: 'lens',     fatal: false, mandate: 'Is competitive behavior in this market driven by envy (irrational me-too capex, price wars) that destroys industry returns?' },
  { key: 'deprival-superreaction',  name: 'Deprival-Superreaction (Loss Aversion)',         discipline: 'Psychology', intensity: 'lens',     fatal: false, mandate: 'Where is loss aversion distorting prices — capitulation selling (opportunity) or refusal to sell a deteriorating story (trap)?' },

  // ---- Economics & Business ----
  { key: 'competitive-moats',       name: 'Competitive Advantage / Moats',                  discipline: 'Economics',  intensity: 'deep',     fatal: false, mandate: 'Identify the moat(s) and, crucially, whether they are WIDENING or NARROWING. Quantify with sustained ROIC above WACC and pricing power. No durable moat ⇒ no durable compounding.' },
  { key: 'economies-of-scale',      name: 'Economies of Scale',                             discipline: 'Economics',  intensity: 'deep',     fatal: false, mandate: 'Does scale lower unit costs or strengthen the offering (data, logistics, purchasing)? Or is there diseconomy of scale / bureaucracy? Compare unit economics vs peers.' },
  { key: 'network-effects',         name: 'Network Effects',                                discipline: 'Economics',  intensity: 'deep',     fatal: false, mandate: 'Are there real, direct or indirect network effects? Are they local or global, and are they strengthening with each new user, or saturating / vulnerable to multi-homing?' },
  { key: 'supply-demand',           name: 'Supply & Demand',                                discipline: 'Economics',  intensity: 'standard', fatal: false, mandate: 'Where are supply and demand for the product and for the industry\'s capacity heading? Watch for capacity gluts, inventory cycles, and the cobweb dynamic.' },
  { key: 'comparative-advantage',   name: 'Comparative Advantage',                          discipline: 'Economics',  intensity: 'standard', fatal: false, mandate: 'What does this firm do relatively better than anyone else, and is that comparative edge defensible against lower-cost or better-positioned rivals (incl. geographies)?' },
  { key: 'opportunity-cost',        name: 'Opportunity Cost',                               discipline: 'Economics',  intensity: 'standard', fatal: false, mandate: 'Munger\'s true filter: is this the BEST use of a dollar right now versus the obvious alternatives (an index, a known compounder, cash)? Frame the decision as relative, not absolute.' },
  { key: 'pricing-power',           name: 'Pricing Power',                                  discipline: 'Economics',  intensity: 'deep',     fatal: false, mandate: 'Can the company raise prices ahead of inflation without losing volume? Pricing power is the single best evidence of a moat. Test it against history and elasticity.' },
  { key: 'specialization',          name: 'Specialization & Division of Labor',             discipline: 'Economics',  intensity: 'standard', fatal: false, mandate: 'Is the business organized for productivity — specialization, focus, decentralization — or diversified into mediocrity? Does focus create an edge here?' },

  // ---- Mathematics & Probability ----
  { key: 'compound-interest',       name: 'Compound Interest',                              discipline: 'Mathematics', intensity: 'standard', fatal: false, mandate: 'Model the compounding engine: reinvestment runway × incremental ROIC = the long-run return. How long can it reinvest at high returns? Compounding is where the money is — or isn\'t.' },
  { key: 'permutations-combinations',name: 'Permutations & Combinations',                   discipline: 'Mathematics', intensity: 'lens',     fatal: false, mandate: 'Enumerate the real outcome space — combinations of the key uncertain variables — rather than a single point forecast. What scenarios is the market ignoring?' },
  { key: 'probability-trees',       name: 'Probability & Decision Trees',                   discipline: 'Mathematics', intensity: 'standard', fatal: false, mandate: 'Build an expected-value decision tree across bear/base/bull. Weight by honest probabilities. Is the bet positive-EV with an acceptable distribution, or fat left tail?' },
  { key: 'bayesian-updating',       name: 'Bayesian Updating',                              discipline: 'Mathematics', intensity: 'standard', fatal: false, mandate: 'State priors (base rates for this business type), then update on the specific evidence. Show your prior, the likelihood, and the posterior. Avoid base-rate neglect.' },
  { key: 'inversion',               name: 'Inversion ("Invert, always invert")',           discipline: 'Mathematics', intensity: 'standard', fatal: true,  mandate: 'Ask how this investment goes to ZERO or permanently impairs capital, then check whether those paths are live. This is a primary screen; a credible path to ruin is disqualifying.' },
  { key: 'power-laws',              name: 'Power-Law Distributions',                        discipline: 'Mathematics', intensity: 'standard', fatal: false, mandate: 'Are returns/outcomes in this market power-law distributed (winner-take-most)? Is this firm a likely head or a long-tail loser? Avoid Gaussian thinking where power laws rule.' },

  // ---- Physics & Engineering ----
  { key: 'critical-mass',           name: 'Critical Mass / Tipping Points',                 discipline: 'Physics',     intensity: 'standard', fatal: false, mandate: 'Has the business crossed (or can it cross) a self-sustaining threshold — liquidity, density, install base — beyond which growth compounds on its own?' },
  { key: 'equilibrium',            name: 'Equilibrium',                                    discipline: 'Physics',     intensity: 'lens',     fatal: false, mandate: 'What equilibrium do margins/returns revert to once competition responds? Are current super-normal returns a stable plateau or a temporary disequilibrium?' },
  { key: 'redundancy-backup',       name: 'Backup Systems & Redundancy (Margin of Safety)', discipline: 'Physics',     intensity: 'standard', fatal: true,  mandate: 'Engineering margin of safety: does the firm have redundancy against shocks — liquidity, diversified suppliers/customers, covenant headroom? Single points of failure are the engineer\'s nightmare and the investor\'s.' },
  { key: 'breakpoints',             name: 'Breakpoints / Thresholds',                       discipline: 'Physics',     intensity: 'lens',     fatal: false, mandate: 'Where are the nonlinear breakpoints — a covenant trip, a debt downgrade, a churn threshold, a regulatory line — where small moves cause large state changes?' },
  { key: 'feedback-loops',          name: 'Feedback Loops',                                 discipline: 'Physics',     intensity: 'standard', fatal: false, mandate: 'Identify reinforcing loops (flywheels: scale→cost→price→volume) and balancing loops (decay). Which dominate now, and which way is the loop turning?' },

  // ---- Biology & Evolution ----
  { key: 'natural-selection',       name: 'Natural Selection',                              discipline: 'Biology',     intensity: 'standard', fatal: false, mandate: 'In this competitive ecosystem, what traits are being selected for? Is the company fit for the CURRENT environment, or adapted to a vanishing one?' },
  { key: 'ecosystems-niches',       name: 'Ecosystems & Niches',                            discipline: 'Biology',     intensity: 'standard', fatal: false, mandate: 'Does the firm own a defensible niche, or sit in a contested zone? How healthy is the broader ecosystem (platform, suppliers, complements) it depends on?' },
  { key: 'adaptation',              name: 'Adaptation',                                     discipline: 'Biology',     intensity: 'standard', fatal: false, mandate: 'How well does the organization adapt to disruption (technology, regulation, taste)? Look at its track record of reinvention vs rigidity.' },

  // ---- Accounting ----
  { key: 'double-entry-limits',     name: 'Accounting: What Numbers Hide',                  discipline: 'Accounting',  intensity: 'deep',     fatal: true,  mandate: 'Read the accounting skeptically: GAAP vs non-GAAP gaps, stock-comp add-backs, capitalized vs expensed costs, lease and pension obligations, goodwill, and off-balance-sheet items. What does double-entry NOT capture (brand, liabilities, optionality)? Aggressive/fraudulent accounting is disqualifying.' },
  { key: 'earnings-quality',        name: 'Accounting: Earnings Quality',                   discipline: 'Accounting',  intensity: 'deep',     fatal: false, mandate: 'Assess earnings quality: accruals ratio, cash conversion, one-offs, channel stuffing, reserve cookie-jars, and the gap between reported earnings and owner earnings (FCF − maintenance capex).' },

  // ---- Statistics ----
  { key: 'gaussian-distribution',   name: 'Gaussian Distribution & Tails',                  discipline: 'Statistics',  intensity: 'standard', fatal: false, mandate: 'Is risk being modeled as thin-tailed (normal) when the real distribution is fat-tailed? Size the left tail honestly.' },
  { key: 'regression-to-mean',      name: 'Regression to the Mean',                         discipline: 'Statistics',  intensity: 'standard', fatal: false, mandate: 'Are current margins/growth/returns extreme readings that will regress? Distinguish durable advantage from a lucky/cyclical peak (or an unfair trough = opportunity).' },
  { key: 'sampling',                name: 'Sampling',                                       discipline: 'Statistics',  intensity: 'lens',     fatal: false, mandate: 'Is the evidence base biased — survivorship, short history, cherry-picked KPIs, a single good quarter? Demand a representative sample before trusting a trend.' },
]

// Lollafalooza and the final inversion are handled in Synthesis/Red Team, not as
// individual model agents.

// ---------------------------------------------------------------------------
// Budget tiers: subset the work. Buys still require the same evidentiary bar;
// lower tiers simply do less independent confirmation and should yield PASS/TOO_HARD
// more readily.
// ---------------------------------------------------------------------------
const desk = RESEARCH_DESK.filter((r) => r.tiers.includes(tier))
let models = (ARGS.models ?? MODELS)
if (tier === 'quick') {
  // Marquee, highest-leverage models only.
  const quickKeys = new Set([
    'incentives', 'competitive-moats', 'pricing-power', 'compound-interest',
    'opportunity-cost', 'inversion', 'probability-trees', 'double-entry-limits',
    'earnings-quality', 'regression-to-mean', 'redundancy-backup', 'network-effects',
  ])
  models = models.filter((m) => quickKeys.has(m.key))
}

// ---------------------------------------------------------------------------
// Structured-output contracts (kept in sync with docs/SCHEMAS.md).
// ---------------------------------------------------------------------------
const VERDICT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['model', 'discipline', 'signal', 'strength', 'conviction', 'relevance', 'fatalFlaw', 'summary', 'outputPath'],
  properties: {
    model: { type: 'string' },
    discipline: { type: 'string' },
    signal: { enum: ['positive', 'negative', 'neutral', 'mixed'] },
    strength: { type: 'integer', minimum: 0, maximum: 5, description: 'How strongly this model speaks to THIS company' },
    conviction: { type: 'integer', minimum: 0, maximum: 5, description: 'Confidence in the read given the evidence' },
    relevance: { type: 'integer', minimum: 0, maximum: 5, description: 'How applicable this model is to this business' },
    fatalFlaw: { type: 'boolean', description: 'Does this model alone disqualify the investment?' },
    keyFindings: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['claim'], properties: { claim: { type: 'string' }, evidence: { type: 'string' }, source: { type: 'string' } } } },
    redFlags: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['flag', 'severity'], properties: { flag: { type: 'string' }, severity: { enum: ['low', 'medium', 'high', 'fatal'] }, rationale: { type: 'string' } } } },
    disconfirmers: { type: 'array', items: { type: 'string' }, description: 'What evidence would flip this read' },
    summary: { type: 'string', description: '2-4 sentence bottom line' },
    outputPath: { type: 'string', description: 'Path to this model\'s ANALYSIS.md' },
  },
}

const DOSSIER_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['confidence', 'dataGaps', 'keyFacts', 'dossierPath'],
  properties: {
    confidence: { type: 'integer', minimum: 0, maximum: 5, description: 'How complete/reliable the evidence base is' },
    dataGaps: { type: 'array', items: { type: 'string' } },
    keyFacts: { type: 'array', items: { type: 'string' }, description: 'The handful of facts that most drive the analysis' },
    snapshot: { type: 'object', additionalProperties: true, description: 'price, marketCap, EV, key multiples if known' },
    dossierPath: { type: 'string' },
  },
}

const SYNTH_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['netSignal', 'convergence', 'lollapalooza', 'summary', 'synthesisPath'],
  properties: {
    netSignal: { enum: ['positive', 'negative', 'neutral', 'mixed'] },
    bullCount: { type: 'integer' },
    bearCount: { type: 'integer' },
    strongPositiveModels: { type: 'array', items: { type: 'string' } },
    strongNegativeModels: { type: 'array', items: { type: 'string' } },
    convergence: { type: 'string', description: 'Do independent models point the same way?' },
    lollapalooza: { type: 'object', additionalProperties: false, required: ['present', 'direction'], properties: { present: { type: 'boolean' }, direction: { enum: ['positive', 'negative', 'none'] }, description: { type: 'string' }, convergingModels: { type: 'array', items: { type: 'string' } } } },
    conflicts: { type: 'array', items: { type: 'string' } },
    summary: { type: 'string' },
    synthesisPath: { type: 'string' },
  },
}

const REDTEAM_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['survives', 'killScenarios', 'summary', 'redTeamPath'],
  properties: {
    survives: { type: 'boolean', description: 'Does the bull thesis survive the pre-mortem?' },
    killScenarios: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['scenario', 'plausibility', 'severity'], properties: { scenario: { type: 'string' }, plausibility: { enum: ['low', 'medium', 'high'] }, severity: { enum: ['impairment', 'severe', 'ruin'] }, mitigant: { type: 'string' } } } },
    circleOfCompetence: { enum: ['in', 'edge', 'out'] },
    biggestMisses: { type: 'array', items: { type: 'string' }, description: 'Where the analysis is weakest or most likely wrong' },
    summary: { type: 'string' },
    redTeamPath: { type: 'string' },
  },
}

const DECISION_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['decision', 'conviction', 'oneLiner', 'circleOfCompetence', 'gates', 'summary', 'analysisPath'],
  properties: {
    decision: { enum: ['BUY', 'PASS', 'SELL', 'TOO_HARD'] },
    conviction: { type: 'integer', minimum: 0, maximum: 10 },
    oneLiner: { type: 'string' },
    circleOfCompetence: { enum: ['in', 'edge', 'out'] },
    qualityScore: { type: 'integer', minimum: 0, maximum: 10 },
    moatRating: { enum: ['none', 'narrow', 'wide', 'widening', 'narrowing'] },
    managementRating: { enum: ['poor', 'adequate', 'good', 'exceptional'] },
    valuation: { type: 'object', additionalProperties: true, description: 'intrinsicValueRange, currentPrice, marginOfSafetyPct, method' },
    fatalFlaws: { type: 'array', items: { type: 'string' } },
    gates: { type: 'object', additionalProperties: false, required: ['circleOfCompetence', 'noFatalFlaw', 'quality', 'marginOfSafety', 'convergence'], properties: { circleOfCompetence: { type: 'boolean' }, noFatalFlaw: { type: 'boolean' }, quality: { type: 'boolean' }, marginOfSafety: { type: 'boolean' }, convergence: { type: 'boolean' } } },
    whatWouldChangeMind: { type: 'array', items: { type: 'string' } },
    benchmarkComparison: { type: 'string', description: 'Opportunity cost vs the obvious alternative' },
    positionSizing: { type: 'string' },
    summary: { type: 'string' },
    analysisPath: { type: 'string' },
  },
}

// ---------------------------------------------------------------------------
// Prompt builders. Detailed mandates live in prompts/*.md; agents Read them so
// this script stays the orchestration layer, not the content layer.
// ---------------------------------------------------------------------------
const header = `Company: ${label}\nAs-of date: ${date}\nRun directory (relative to repo root): ${runDir}\n`

const intakePrompt = `${header}
You are the Intake agent for a Munger-style investment analysis. Read prompts/intake.md for your full mandate.

Do all of the following:
1. Resolve the company to a primary listing and ticker${ticker ? ` (caller provided ticker "${ticker}")` : ''}; confirm the exchange and currency.
2. Create the run directory tree under ${runDir}/ : research/, models/, artifacts/, synthesis/, decision/. Create one subdirectory per research lane and per mental model (keys are listed in prompts/intake.md and passed below).
3. Write ${runDir}/RUN.md with the resolved company, ticker, as-of date, tier "${tier}", and the list of research lanes and models that will run.
4. Scaffold ${runDir}/PROGRESS.md from templates/PROGRESS.template.md, pre-listing every research lane and every model as PENDING.
5. Capture a quick market snapshot (price, shares out, market cap, enterprise value) into ${runDir}/research/_snapshot.md if readily available.

Research lanes: ${desk.map((r) => r.key).join(', ')}
Models: ${models.map((m) => m.key).join(', ')}

Return a short confirmation string of what you created.`

const researchPrompt = (r) => `${header}
You are the "${r.name}" research specialist (lane key: ${r.key}) on the financial deep-research desk.
Read prompts/financial-desk.md and apply the section titled "${r.key}".

Your mandate: ${r.mandate}

Rules of the desk:
- COLLECT AND VERIFY FACTS; do not issue a buy/sell opinion. Your job is an evidence base others will reason over.
- Cite every material claim: source name, document/section, URL, and date. Prefer primary sources (filings) over commentary.
- Stamp the as-of date (${date}); flag anything you could not confirm as an explicit data gap.
- Save your full findings to ${runDir}/research/${r.key}/NOTES.md and any data tables or models to ${runDir}/artifacts/ (reference them from your notes).
- Write ${runDir}/research/${r.key}/_status.json = {"lane":"${r.key}","status":"done","updated":"${date}","headline":"<one line>"}.

Return structured output per the schema (a concise digest the dossier agent will merge).`

const RESEARCH_DIGEST_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['lane', 'headline', 'notesPath'],
  properties: {
    lane: { type: 'string' },
    headline: { type: 'string' },
    findings: { type: 'array', items: { type: 'string' } },
    redFlags: { type: 'array', items: { type: 'string' } },
    dataGaps: { type: 'array', items: { type: 'string' } },
    artifacts: { type: 'array', items: { type: 'string' } },
    notesPath: { type: 'string' },
  },
}

const dossierPrompt = (digests) => `${header}
You are the Dossier Editor. Read prompts/financial-desk.md (section "dossier").
The research desk has produced these lane digests (JSON):
${JSON.stringify(digests, null, 2)}

Merge them into ONE coherent, de-duplicated, fully-cited evidence base at ${runDir}/research/DOSSIER.md, organized as: Business & Segments, The Numbers (with a clean financial summary table), Valuation & Margin of Safety, Moat & Competition, Sector & Macro, Leadership & Capital Allocation, Crowd/Market Signal, Risks & Legal, and a "Data Gaps & Confidence" section.
This dossier is the shared source of truth every mental-model agent will read — make it complete and skimmable.
Also append a "Dossier ready" row to ${runDir}/PROGRESS.md status notes.
Return structured output per the schema.`

const modelPrompt = (m) => `${header}
You are the **${m.name}** mental-model analyst (key: ${m.key}, discipline: ${m.discipline}).
Read prompts/mental-model-agent.md for the shared analyst contract, then apply THIS model.

Model mandate: ${m.mandate}
Research intensity: ${m.intensity} — ${m.intensity === 'deep' ? 'do substantial independent research within this model\'s domain in addition to the dossier' : m.intensity === 'standard' ? 'do moderate targeted research plus careful reasoning over the dossier' : 'apply this as an analytical lens over the dossier and as a check on our own reasoning; light external research only'}.
${m.fatal ? 'This model CAN be disqualifying: if it reveals a credible path to permanent capital loss or fraud, set fatalFlaw=true and say so plainly.' : ''}

Inputs to read first:
- ${runDir}/research/DOSSIER.md  (shared evidence base — read this fully)
- prompts/mental-model-agent.md  (how to reason and what to output)

Then:
1. Apply the model rigorously to ${label}. Do your own ${m.intensity} research where the dossier is thin; cite sources.
2. Hold the discipline of the model: state what the model PREDICTS, what evidence confirms/disconfirms it, and your honest confidence.
3. Write a full write-up to ${runDir}/models/${m.key}/ANALYSIS.md (use templates/MODEL-ANALYSIS.template.md).
4. Write ${runDir}/models/${m.key}/_status.json = {"model":"${m.key}","status":"done","signal":"<...>","fatalFlaw":<bool>,"updated":"${date}"}.

Return structured output per the verdict schema. outputPath = ${runDir}/models/${m.key}/ANALYSIS.md.`

const synthesisPrompt = (verdicts) => `${header}
You are the Synthesis agent. Read prompts/synthesis.md.
Here are the mental-model verdicts (JSON):
${JSON.stringify(verdicts, null, 2)}

Your job (Munger's latticework, assembled):
1. Weight each verdict by relevance × strength × conviction — a confident, highly-relevant model counts for more than a weak tangential one. Do NOT just average.
2. Look for CONVERGENCE: multiple INDEPENDENT models (from different disciplines) pointing the same way is the strongest signal there is.
3. Run the LOLLAPALOOZA check: are several forces compounding in the same direction (positive flywheel or negative doom-loop)? This is where outsized outcomes — and Buys — come from.
4. Surface real CONFLICTS between models and adjudicate them with evidence.
5. Flag every fatalFlaw=true verdict prominently.
Write ${runDir}/synthesis/SYNTHESIS.md with the weighted scorecard (a table of all models), the convergence analysis, the lollapalooza read, and unresolved conflicts.
Return structured output per the schema.`

const redTeamPrompt = (synth) => `${header}
You are the Red Team. Read prompts/red-team.md. Your loyalty is to the truth, not the thesis.
Synthesis summary (JSON):
${JSON.stringify(synth, null, 2)}

Invert, always invert:
1. Assume it is three years from now and this investment was a disaster. Write the post-mortem: exactly how did it happen?
2. Enumerate concrete kill scenarios; rate plausibility (low/med/high) and severity (impairment/severe/ruin). For each, check the dossier and filings for whether the path is already live.
3. Make the strongest possible BEAR case, steelmanned — not a strawman.
4. Judge our Circle of Competence honestly: do we actually understand this business well enough to hold it through a 50% drawdown? (in / edge / out)
5. Name the analysis's biggest weaknesses and most likely errors.
Read ${runDir}/research/DOSSIER.md and ${runDir}/synthesis/SYNTHESIS.md first.
Write ${runDir}/synthesis/RED-TEAM.md. Return structured output per the schema.`

const decisionPrompt = (synth, redteam) => `${header}
You are the Portfolio Manager making the final call. Read docs/DECISION-RUBRIC.md and apply it EXACTLY — it encodes the gates and the conviction bar. The default answer is NO (PASS).

Synthesis (JSON): ${JSON.stringify(synth, null, 2)}
Red Team (JSON): ${JSON.stringify(redteam, null, 2)}
${priorThesis ? `A prior thesis is on the table (enables SELL): ${priorThesis}` : 'No position is currently held; choose among BUY / PASS / TOO_HARD (SELL only if the dossier shows a holder should exit).'}

Process:
1. Read docs/DECISION-RUBRIC.md, ${runDir}/synthesis/SYNTHESIS.md, ${runDir}/synthesis/RED-TEAM.md, and ${runDir}/research/DOSSIER.md.
2. Evaluate the GATES in order: Circle of Competence → No Fatal Flaw → Quality → Margin of Safety → Convergence/Lollapalooza. A failure at any gate caps the decision (see rubric).
3. Cross-check your structured verdict against the deterministic gate function: run \`node config/decision-rubric.js\` with your numbers (the file documents how). Reconcile any divergence in writing.
4. Only return BUY if it clears EVERY gate AND the high-conviction bar. State conviction 0-10. Be comfortable returning PASS or TOO_HARD — most analyses should.
5. Write the top-level ${runDir}/ANALYSIS.md from templates/ANALYSIS.template.md: decision, conviction, one-liner, the thesis, the inverted/bear case, the model scorecard, valuation & margin of safety, what would change your mind, and links to every model directory and artifact.
6. Update ${runDir}/PROGRESS.md to mark the run COMPLETE with the final decision.

Return structured output per the decision schema.`

// ---------------------------------------------------------------------------
// A small progress agent regenerates PROGRESS.md from on-disk _status.json files
// at each phase boundary. Phases are sequential (awaited), so these writes never
// race. This is the durable, resumable record of the run.
// ---------------------------------------------------------------------------
const progressPrompt = (phaseName) => `${header}
You are the Progress Tracker. Scan ${runDir}/research/*/_status.json and ${runDir}/models/*/_status.json, then regenerate ${runDir}/PROGRESS.md from templates/PROGRESS.template.md so it reflects reality on disk. Mark the "${phaseName}" phase complete, set per-item status (PENDING/DONE/DEGRADED/MISSING), and write a one-line timestamped log entry "${date} — ${phaseName} complete". Return a one-line summary (e.g. "32/41 models done, 3 degraded").`

async function updateProgress(phaseName) {
  try {
    return await agent(progressPrompt(phaseName), { label: `progress:${phaseName}`, phase: phaseName })
  } catch (e) {
    log(`progress update for "${phaseName}" failed (non-fatal): ${e}`)
    return null
  }
}

// ===========================================================================
// ORCHESTRATION
// ===========================================================================
log(`Munger analysis — ${label} — as-of ${date} — tier "${tier}"`)
log(`${desk.length} research lanes · ${models.length} mental models → ${runDir}`)

phase('Intake')
await agent(intakePrompt, { label: 'intake', phase: 'Intake' })
await updateProgress('Intake')

phase('Financial Deep Research')
log('Dispatching the research desk...')
const digests = (
  await parallel(
    desk.map((r) => () => agent(researchPrompt(r), { label: `research:${r.key}`, phase: 'Financial Deep Research', schema: RESEARCH_DIGEST_SCHEMA })),
  )
).filter(Boolean)
log(`Research desk returned ${digests.length}/${desk.length} lanes`)
await updateProgress('Financial Deep Research')

phase('Dossier')
const dossier = await agent(dossierPrompt(digests), { label: 'dossier', phase: 'Dossier', schema: DOSSIER_SCHEMA })
log(`Dossier confidence: ${dossier?.confidence ?? '?'}/5` + (dossier?.dataGaps?.length ? ` · ${dossier.dataGaps.length} data gaps` : ''))

phase('Mental Models')
log(`Running ${models.length} mental-model agents across the latticework...`)
const verdicts = (
  await parallel(
    models.map((m) => () => agent(modelPrompt(m), { label: `model:${m.key}`, phase: 'Mental Models', schema: VERDICT_SCHEMA })),
  )
).filter(Boolean)
const fatals = verdicts.filter((v) => v.fatalFlaw)
log(`${verdicts.length}/${models.length} models reported` + (fatals.length ? ` · ${fatals.length} FATAL-FLAW votes: ${fatals.map((v) => v.model).join(', ')}` : ' · no fatal flaws flagged'))
await updateProgress('Mental Models')

phase('Synthesis')
const synth = await agent(synthesisPrompt(verdicts), { label: 'synthesis', phase: 'Synthesis', schema: SYNTH_SCHEMA })
log(`Net signal: ${synth?.netSignal} · lollapalooza: ${synth?.lollapalooza?.present ? synth.lollapalooza.direction : 'none'}`)

phase('Red Team')
const redteam = await agent(redTeamPrompt(synth), { label: 'red-team', phase: 'Red Team', schema: REDTEAM_SCHEMA })
log(`Thesis ${redteam?.survives ? 'SURVIVES' : 'FAILS'} the pre-mortem · circle of competence: ${redteam?.circleOfCompetence}`)

phase('Decision')
const decision = await agent(decisionPrompt(synth, redteam), { label: 'decision', phase: 'Decision', schema: DECISION_SCHEMA })
await updateProgress('Decision')
log(`DECISION: ${decision?.decision} · conviction ${decision?.conviction}/10 — ${decision?.oneLiner ?? ''}`)

return {
  company: label,
  ticker,
  date,
  tier,
  runDir,
  decision: decision?.decision,
  conviction: decision?.conviction,
  oneLiner: decision?.oneLiner,
  analysisPath: `${runDir}/ANALYSIS.md`,
  counts: { lanes: digests.length, models: verdicts.length, fatalFlaws: fatals.length },
}
