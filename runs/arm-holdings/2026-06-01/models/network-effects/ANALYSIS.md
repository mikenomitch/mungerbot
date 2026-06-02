<!--
  Per-model write-up. Network Effects lens applied to Arm Holdings.
-->
# Network Effects — Arm Holdings (ARM)

**Discipline:** Economics  ·  **Intensity:** deep  ·  **As-of:** 2026-06-01

## What this model predicts

A network effect exists when each additional participant makes the product more
valuable to other participants. For a semiconductor-IP company the relevant network
is **indirect / two-sided**: a software-and-tools side (compilers, OSes, runtimes,
libraries, ISVs, ~22M developers) and a hardware side (chip designers, foundries,
end devices). More Arm-compatible software makes Arm silicon more attractive; more
Arm silicon shipped makes it more worthwhile to build/optimize software for Arm. The
binding asset is the **ISA as a coordination standard** ("Arm-compatible") plus the
installed base of code written against it.

If this model applies **favorably** to Arm today, I should observe:

1. **Direct, demonstrable feedback:** new design wins pull software/tooling toward
   Arm, and that tooling in turn pulls the next design win — a self-reinforcing loop,
   not just a large static base.
2. **High switching/porting cost** that rises with the installed code base, so an
   incumbent socket is sticky and a challenger ISA cannot simply "buy in."
3. **Strengthening, not saturating:** the loop is still adding value at the margin
   (room to grow share, deepening lock-in), rather than having maxed out.
4. **Global, not merely local:** the standard is industry-wide and one ecosystem
   serves all geographies/segments, so a regional or segment rival can't reach
   escape velocity.
5. **Resistant to multi-homing:** participants can't cheaply run on a rival ISA in
   parallel; the cost of supporting two architectures is prohibitive enough to keep
   them single-homed on Arm.
6. **Owned by Arm:** the network value accrues to Arm specifically, not to a generic
   "RISC CPU" category any competitor can free-ride on.

The model is **highly relevant** here — the dossier's own moat read names the
"software/ecosystem network effect" as *the* load-bearing, durable moat (§4). So
this lens is close to the center of the bull case, and its verdict matters a lot.

## Evidence

**Supporting** (cited):

- **Massive, growing developer base.** >20M developers in the Arm ecosystem
  (DOSSIER §1); independent reporting puts it at **>22M developers, ~80% of the
  global total** as of 2026 (Arm Newsroom / DevOps.com, 2026). This is the
  software side of the two-sided network.
- **Enormous installed base / standard status.** >325B cumulative Arm chips since
  1990 (DOSSIER §1); ~99–100% of smartphone application processors, ~94% of
  automakers, incumbent in embedded/IoT Cortex-M (DOSSIER §1, §4.1). "Arm-compatible"
  is a genuine industry coordination point.
- **Real switching/porting cost in long-lived products.** Architecture choice
  "locks you in for 5–15 years of product lifecycle" in embedded; Arm offers the
  mature toolchain, certified compilers, profilers, ISV packages and support
  contracts that "exist for Arm and not yet for RISC-V" (Inovasense / Alpinum
  Consulting, 2026). This is the switching cost the model predicts.
- **The loop is visibly working in the data-center battleground.** Arm went from
  11.5% → **17.7% of total server-CPU units YoY** (Mercury, DOSSIER §4.1); ~50% of
  compute shipped to top hyperscalers in 2025 is Arm-based; >1B Neoverse cores
  deployed (DOSSIER §4.1). Hyperscalers cite Arm's **proven ecosystem maturity** —
  not just power efficiency — as the reason they chose Arm over RISC-V for Graviton/
  Axion/Cobalt (Tom's Hardware; DCD, 2026). One forecast: **90% of custom-CPU AI
  servers on Arm by 2029/2030** (Tom's Hardware, 2026) — that is a network-effect
  prediction (everyone standardizes on the same ISA).
- **Two-sided reinforcement is being actively engineered.** Arm's **CoreCollective**
  (Feb 2026, with Google, Microsoft, Qualcomm, Red Hat, Canonical, SUSE, Samsung,
  Fujitsu, Ampere) standardizes open-source tooling so apps port cleanly *between
  Arm instances*; the **Software Ecosystem Dashboard** and an **agentic GitHub
  Copilot integration** (Oct 2025) lower the cost of getting software onto Arm
  (Arm Newsroom; DevOps.com, 2026). These are deliberate moves to thicken the
  software side of the network.
- **The "ladder" monetizes the loop.** Armv8 ~2.5–3% → Armv9 ~5% → CSS ~10%+ of ASP
  (DOSSIER §4.2): as the ecosystem deepens, Arm extracts more per chip — evidence
  that the network position has pricing power.

**Disconfirming** (cited):

- **Saturated where it is strongest — no growth left in the core loop.** ~99–100%
  of smartphones and ~94% of automakers are *already* Arm. A network effect that has
  reached ~100% penetration cannot add value through "more users" in that domain; it
  can only **defend**, not compound. The model's "strengthening with each new user"
  prediction **fails** in mobile/auto — the very domains where the moat is widest.
  (DOSSIER §4.1)
- **Multi-homing is rising fast and cheap — the anti-network-effect.** The single
  most important disconfirmer. Porting friction that once protected Arm is
  collapsing: AWS Graviton compatibility checks are "a distant memory" in 2026;
  Google ported 30,000 apps (incl. YouTube, Gmail, BigQuery) to Arm; the standard CI
  pattern is now **multi-architecture Docker images via `docker buildx`** that serve
  x86 and Arm from one pipeline (Hykell; oneuptime, 2026). The same toolchain that
  made it easy to *leave x86 for Arm* makes it easy to *leave Arm for RISC-V*. If
  software is architecture-portable by construction, the installed-code lock-in that
  underpins the network effect erodes.
- **The substitute free-rides on open-ecosystem dynamics.** RISC-V now has stable
  toolchains, Linux/FreeRTOS/GCC/LLVM support, and the **RVA23 profile (2024)** that
  explicitly "solved the software fragmentation problem that had blocked enterprise
  adoption" (Embedded.com; Alpinum, 2026). **Android officially supports RISC-V**
  (ARM v7/64, x86, x86-64, *and* RISC-V) with canary CI builds and Cuttlefish virtual
  devices in 2026 (SamMobile; DeepComputing FOSDEM 2026). **Binary translation**
  (Arm→RISC-V) already hits ~65% native performance (Newswise, 2026). A rival ISA
  that can run Arm software and shares the open-source tool stack neutralizes the
  "Arm-only software" leg of the network.
- **RISC-V is reaching its *own* escape velocity in adjacent nodes.** It has won
  MCU/IoT, is winning auto-MCUs, and is claimed at ~25% of the global processor
  market by Jan 2026 (multiple trade-press; DOSSIER §4.3). **Caveat:** the dossier
  explicitly flags this "~25%" as **advocacy-sourced with an ambiguous denominator**
  (DOSSIER §9 gap #9) — I down-weight the *magnitude*. But the *direction* (RISC-V
  building its own self-reinforcing developer/silicon loop, backed by Qualcomm—which
  bought Ventana—Google, Meta, Nvidia, Bosch/Infineon/NXP, and Chinese silicon
  sovereignty) is well-corroborated. A network effect is only a moat if the rival
  *cannot* build a competing network; RISC-V is visibly building one.
- **The AGI-CPU pivot damages the neutrality the network depends on.** Arm's value
  as a coordination standard rested on being a **neutral** IP supplier every chipmaker
  could trust. By shipping its own finished CPU (Mar 2026) it becomes a **direct
  competitor to its own royalty-paying customers** (DOSSIER §1, §4.3), inviting them
  to diversify toward in-house designs and RISC-V — i.e., to *thin* the very network
  Arm monetizes. A live **FTC probe** (2026-05-15) into whether Arm degrades license
  access to favor its own silicon (DOSSIER §8.5) is the regulatory shadow of exactly
  this network-governance conflict.
- **Customers have demonstrated they can resist.** Arm **lost** the Qualcomm/Nuvia
  fight (DOSSIER §4.3, §8.4): a top customer successfully refused tighter terms. A
  true network monopolist dictates terms; Arm could not, which caps the
  buyer-side lock-in the model assumes.
- **Fragmentation risk inside Arm's own ISA.** SVE2/SME and the Armv9 extension
  sprawl mean "Arm-compatible" is not monolithic; SVE2 adoption "will take time" and
  rolls out in variable implementations (AnandTech; Phoronix, 2026). Internal
  fragmentation slightly weakens the "one standard, write-once" promise that makes
  the network valuable — though Arm polices this far better than RISC-V polices its
  custom extensions.

**Independent research run for this model (2026):** searches on (a) Arm developer
base size, (b) RISC-V toolchain maturity/fragmentation, (c) x86→Arm porting and
multi-arch CI, (d) Arm→RISC-V binary translation & Android RISC-V support, (e)
hyperscaler ISA choice rationale, and (f) RISC-V data-center traction. Sources:
Arm Newsroom, DevOps.com, Hykell, oneuptime, SamMobile, DeepComputing (FOSDEM 2026),
Newswise, Tom's Hardware, DCD, Embedded.com, Alpinum/Inovasense, AnandTech, Phoronix,
SDxCentral/DCD on RISC-V data center, financialcontent (RISC-V 25% — treated as
advocacy/secondary per DOSSIER §9).

## Reasoning

**Is there a real network effect? Yes — but it is the *indirect/installed-base*
kind, and it is being attacked from three sides.** Arm clearly enjoys a two-sided
software↔silicon loop and a genuine standard ("Arm-compatible"). Where the model is
most relevant, though, the honest answers to its own sub-questions are unflattering:

- **Direct or indirect?** *Indirect* — value comes from complementary software/tools,
  not from users connecting to each other. Indirect network effects are weaker and
  more contestable than direct ones (a rival can subsidize the complement side, as
  the open-source community is effectively doing for RISC-V).

- **Local or global?** *Global as a standard, but segment-local in strength.* It is
  near-total in mobile/auto/embedded and **contested-and-rising** in data center —
  while RISC-V is building a *competing* global network in the low-power/sovereign
  tail. Critically, the loci where Arm could still *grow* the loop (data center, AI
  edge) are precisely the loci where the rivals (RISC-V, in-house silicon, and the
  risk that AI compute migrates from CPU to accelerators — DOSSIER §4.4) are most
  active. Munger's question — is it strengthening with each new user, or saturating?
  — resolves to: **saturating where widest, strengthening only where most contested.**

- **Strengthening or saturating / multi-homing-vulnerable?** This is where the lens
  turns negative. The defining 2026 fact is that **portability is now the norm**:
  multi-arch container builds, broad ISV multi-targeting, Android-on-RISC-V, and
  Arm↔RISC-V binary translation collectively mean the **switching cost that powers
  the network effect is falling, not rising.** A network effect whose underlying
  lock-in (recompile/port cost) is being engineered away by the industry's own tools
  is a *decaying* moat, not a compounding one. The hyperscalers proved this against
  x86; the same playbook is available against Arm.

- **Does Arm own the network?** *Partially, and decreasingly.* The value is migrating
  toward a generic "open, portable, power-efficient CPU" category that RISC-V can
  inhabit royalty-free. Arm's own strategic response — shipping silicon and
  (allegedly) restricting license access — is a tacit admission that pure
  IP-neutrality no longer captures enough of the value, and it **trades long-run
  network trust for near-term silicon revenue.** That is the opposite of nurturing a
  network effect.

**Where the model is a stretch:** the network effect is *real and large today* and
will not collapse on any short horizon — mobile/auto lock-in is durable for years,
and Arm is genuinely the share-gainer in servers right now. So a flatly "negative"
read would overstate the speed of decay. The accurate read is **mixed**: a powerful
but *saturating and increasingly multi-homing-vulnerable* network effect, strong
enough to defend the base for years but **not** the kind of compounding,
strengthening-with-each-user moat that could justify ~231x non-GAAP / ~481x GAAP
earnings (DOSSIER §3.1). From the *valuation* standpoint that matters: the network
effect supports "durable franchise," not "30–40% FCF compounding for 15 years"
(DOSSIER §3.2) — and the model gives no support to the latter.

**Check on our own bias (the model applied to us):** the bull narrative leans hard on
"22M developers / 99% of phones" as if scale alone equals an impregnable network. The
disconfirming discipline forces the question Munger insists on — *what would the
other side say?* — and the other side (multi-homing, RISC-V's parallel network,
Android-on-RISC-V, the self-inflicted neutrality loss) is strong and concrete. Big
installed base ≠ strengthening network. I have weighted the disconfirmers heavily to
avoid laundering "large" into "compounding."

## Red flags

| Flag | Severity | Rationale |
|---|---|---|
| Network effect saturated in core (mobile ~99–100%, auto ~94%) | medium | The widest moat has no "more users" left to compound; can only defend. |
| Multi-homing rising — portability is now the industry default | high | Multi-arch CI, broad ISV multi-targeting, Arm↔RISC-V binary translation erode the recompile/port switching cost that *is* the network effect. |
| RISC-V building a competing open network (RVA23, Android support, hyperscaler interest) | high | A substitute that runs Arm software and shares the open tool stack neutralizes the software-lock-in leg; most acute in the ~19%-revenue China channel. |
| AGI-CPU pivot forfeits the neutrality the network is built on | high | Competing with customers + FTC probe invites diversification to in-house/RISC-V — Arm thinning its own network for silicon revenue. |
| Lost Qualcomm/Nuvia case | medium | Demonstrates a top customer can resist term-tightening — caps the buyer-side lock-in the model assumes. |
| AI compute migrating CPU→accelerator | medium | Could shrink the CPU TAM the network taxes, independent of ISA share (DOSSIER §4.4). |

No fatal flaw: the Network Effects model is **not fatal-capable** (it is not
incentives/inversion/accounting/margin-of-safety), and the moat, while softening, is
real and defensible for years — there is no network-driven path to *permanent capital
loss* on this lens alone.

## What would flip this read (disconfirmers)

- **Toward more positive:** RVA23 and Android-on-RISC-V stall; major ISVs *retreat*
  from multi-arch and re-consolidate on Arm; Arm wins material data-center share into
  the 30–40%s with *deepening* (not just broadening) lock-in (e.g., proprietary
  Arm-only AI extensions that ISVs adopt and can't easily replicate on RISC-V); the
  AGI-CPU is sold without alienating royalty customers (no customer defections, FTC
  closes with no action).
- **Toward more negative:** a flagship hyperscaler or a top-3 smartphone SoC vendor
  ships a RISC-V part at volume; Android RISC-V phones reach retail; binary
  translation closes to ~90%+ native; the FTC forces license-access remedies that let
  competitors weaken Arm's standard; the "~25% RISC-V share" gets *primary-source*
  confirmation in a denominator that overlaps Arm's core (not just MCU/IoT).
- **Key data gap whose resolution would move conviction:** a credible, primary-sourced
  measure of (a) RISC-V penetration by segment with a clean denominator, and (b) the
  real, current cost of porting a production workload Arm→RISC-V. The dossier (§9)
  flags both as thin; today's "~25%" is advocacy-grade.

## Verdict

| | |
|---|---|
| **Signal** | mixed (net cautionary — large but saturating/contestable) |
| **Relevance** | 5 |
| **Strength** | 3 |
| **Conviction** | 3 |
| **Fatal flaw?** | no — model is not fatal-capable; moat real but softening, no path to permanent loss on this lens |

**Bottom line:** Arm has a genuine, large, two-sided (indirect) network effect built
on "Arm-compatible" software and a >22M-developer ecosystem — but through this lens it
is **saturating where it is strongest (mobile/auto ~99%/94%) and strengthening only in
the contested data-center fight**, while the switching cost that powers it is being
*engineered away* by industry-standard multi-arch tooling, Arm↔RISC-V binary
translation, and Android-on-RISC-V. RISC-V is assembling a competing royalty-free
network in exactly the open way Arm cannot block, and Arm's AGI-CPU pivot trades the
neutrality the network depends on for near-term silicon revenue (with an FTC probe to
match). The network effect justifies "durable franchise defensible for years," **not**
the compounding, strengthening-with-each-user moat that the ~231x/~481x multiple
requires — so on valuation grounds this lens is a brake, not an accelerant.
