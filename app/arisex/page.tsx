import Image from "next/image";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button";
import {
  Target,
  Layers,
  Plug,
  Users,
  ShieldCheck,
  BarChart3,
} from "lucide-react";


export default function ArisexPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <Section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/arisex-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* CINEMATIC GOVERNANCE OVERLAYS */}
        <div className="pointer-events-none absolute inset-0 bg-black/65" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-36">
          <div className="grid items-center gap-20 lg:grid-cols-2">

            {/* LEFT   EXECUTIVE MESSAGE */}
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
                Enterprise Execution System
              </p>

              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                A.R.I.S.E.X™
                <span className="block text-white/85">
                  Governed AI Execution at Scale
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
                A.R.I.S.E.X™ is a repeatable execution system for leaders scaling AI
                inside real enterprises. It converts strategic intent into governed
                delivery, sustained adoption, and measurable outcomes.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">
                Built for organizations that have proven AI can work and now need
                it to scale without losing control, trust, or accountability.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">
                <ButtonLink href="/contact" variant="primary">
                  Discuss an A.R.I.S.E.X™ Engagement
                </ButtonLink>
                <ButtonLink href="/services" variant="secondary">
                  View Services
                </ButtonLink>
              </div>

              <p className="mt-8 max-w-xl text-sm text-white/45">
                Designed for executives accountable to boards, regulators, and
                enterprise outcomes.
              </p>
            </div>

            {/* RIGHT   SYSTEM VISUAL */}
            <div className="relative hidden lg:block">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/15 bg-black/40 backdrop-blur-sm shadow-[0_60px_140px_-40px_rgba(0,0,0,0.8)]">
                
                <Image
                  src="/robo1.png"
                  alt="Governed AI execution system visualization"
                  fill
                  sizes="(min-width: 1024px) 40vw, 0px"
                  priority
                  className="object-cover scale-[1.02] transition-transform duration-[6000ms] ease-out group-hover:scale-[1.06]"
                />

                {/* POLISH */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>

              {/* MICRO-CAPTION */}
              <p className="mt-4 max-w-sm text-xs text-white/45">
                A governed execution layer connecting leadership intent to operational reality.
              </p>
            </div>

          </div>
        </div>
      </Section>


       {/* ================= WHY IT EXISTS (EXECUTIVE OVERLAY   REFINED) ================= */}
      <Section className="relative z-20 -mt-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative mx-auto max-w-5xl rounded-[32px] bg-white/95 px-16 py-20 backdrop-blur-sm shadow-[0_45px_140px_-40px_rgba(0,0,0,0.25)] ring-1 ring-black/5">
            
            {/* Architectural top hairline */}
            <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-black/15 to-transparent" />

            {/* Kicker */}
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted text-center">
              The Structural Failure Pattern
            </p>

            {/* Headline */}
            <h2 className="mt-7 text-center text-[3rem] leading-tight font-semibold tracking-tight text-brand-slate">
              AI does not break at the model layer.
              <span className="block text-brand-slate/75">
                It breaks at the operating layer.
              </span>
            </h2>

            {/* Primary diagnosis */}
            <p className="mx-auto mt-10 max-w-4xl text-center text-[1.125rem] leading-relaxed text-brand-muted">
              Enterprises consistently demonstrate AI value in pilots. Breakdown occurs when experimental success
              meets real operating conditions where ownership is unclear, workflows are misaligned, governance is
              reactive, and value cannot be defended at scale.
            </p>

            {/* Resolution statement */}
            <p className="mx-auto mt-8 max-w-3xl text-center text-[1.05rem] leading-relaxed text-brand-muted">
              A.R.I.S.E.X™ replaces fragmented execution with a governed operating system leaders can run,
              review, and scale with confidence.
            </p>

            {/* Executive signal row */}
            <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-brand-muted">
              <span>• Clear ownership</span>
              <span>• Operational readiness</span>
              <span>• Embedded governance</span>
              <span>• Defensible measurement</span>
            </div>

          </div>
        </div>
      </Section>

      {/* ================= EXECUTION PILLARS (DARK, EXECUTIVE, SPACED, PADDED) ================= */}
      <Section
        className="relative overflow-hidden mt-32"
        style={{
          backgroundImage: "url('/arisex-pillars-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* DARK BACKGROUND CONTROL */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/90" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-40">
          {/* SECTION HEADER */}
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              The A.R.I.S.E.X™ Execution Pillars
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/70">
              These pillars define the non-negotiable execution conditions required
              for AI to scale safely, credibly, and sustainably inside the enterprise.
            </p>
          </div>

          {/* PILLAR GRID */}
          <div className="mt-24 grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Alignment",
                desc: "Leadership intent, outcomes, and decision rights clearly defined before execution begins.",
                href: "/services/alignment",
                Icon: Target,
              },
              {
                title: "Readiness",
                desc: "Data, workflows, teams, and controls prepared before scale introduces friction.",
                href: "/services/readiness",
                Icon: Layers,
              },
              {
                title: "Integration",
                desc: "AI embedded directly into operating workflows, not layered on as a side capability.",
                href: "/services/integration",
                Icon: Plug,
              },
              {
                title: "Adoption",
                desc: "Routines, enablement, and incentives engineered for sustained usage at scale.",
                href: "/services/adoption",
                Icon: Users,
              },
              {
                title: "Governance",
                desc: "Risk, compliance, and accountability designed in from day one.",
                href: "/services/governance",
                Icon: ShieldCheck,
              },
              {
                title: "Measurement",
                desc: "Value continuously measured with metrics executives can trust and defend.",
                href: "/services/measurement",
                Icon: BarChart3,
              },
            ].map(({ title, desc, href, Icon }) => (
              <a
                key={title}
                href={href}
                className="
                  group relative flex flex-col items-center
                  rounded-3xl border border-white/10
                  bg-white/5 backdrop-blur-md
                  px-14 py-20
                  text-center
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:bg-white/10
                  hover:shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)]
                "
              >
                {/* Hover ring */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/0 transition group-hover:ring-white/20" />

                {/* Icon */}
                <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 transition group-hover:bg-white/15">
                  <Icon className="h-8 w-8 text-white/80 transition group-hover:text-white" />
                </div>

                {/* Title */}
                <p className="text-xl font-semibold text-white">
                  {title}
                </p>

                {/* Description */}
                <p className="mt-6 max-w-[22rem] text-sm leading-relaxed text-white/65">
                  {desc}
                </p>

                {/* Hover affordance */}
                <span className="mt-10 text-xs font-semibold uppercase tracking-widest text-white/50 opacity-0 transition-opacity group-hover:opacity-100">
                  Explore pillar →
                </span>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= EXECUTION CADENCE (EXECUTIVE-GRADE) ================= */}
      <Section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6 py-36">
          <div className="grid gap-20 lg:grid-cols-[1fr_1fr] lg:items-start">

            {/* LEFT   STRATEGIC NARRATIVE */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
                How Leaders Operate It
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-brand-slate">
                A governed execution cadence
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-brand-muted">
                A.R.I.S.E.X™ is not a one-time initiative or transformation program.
                It functions as an operating cadence leaders actively govern as AI
                becomes embedded into core business functions.
              </p>

              <p className="mt-6 text-base leading-relaxed text-brand-muted">
                This cadence creates decision clarity, reduces execution risk, and
                ensures AI value remains visible, defensible, and aligned to enterprise
                priorities over time.
              </p>
            </div>

            {/* RIGHT   CADENCE FRAMEWORK */}
            <div className="relative rounded-3xl border border-brand-border bg-brand-offwhite px-12 py-14 shadow-sm">
              <p className="mb-8 text-sm font-semibold uppercase tracking-widest text-brand-muted">
                Operating Rhythm
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-slate/60" />
                  <p className="text-base leading-relaxed text-brand-muted">
                    <span className="font-semibold text-brand-slate">
                      Executive checkpoints
                    </span>{" "}
                    to confirm priorities, resolve trade-offs, and remove blockers
                    before scale introduces friction.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-slate/60" />
                  <p className="text-base leading-relaxed text-brand-muted">
                    <span className="font-semibold text-brand-slate">
                      Delivery cycles
                    </span>{" "}
                    anchored to workflow outcomes and business impact not model demos
                    or experimental releases.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-slate/60" />
                  <p className="text-base leading-relaxed text-brand-muted">
                    <span className="font-semibold text-brand-slate">
                      Governance reviews
                    </span>{" "}
                    aligned to enterprise risk, compliance requirements, and scaling
                    thresholds.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-slate/60" />
                  <p className="text-base leading-relaxed text-brand-muted">
                    <span className="font-semibold text-brand-slate">
                      Measurement reviews
                    </span>{" "}
                    that surface value clearly and allow leaders to defend impact to
                    boards, regulators, and stakeholders.
                  </p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </Section>


      {/* ================= WHAT A.R.I.S.E.X™ IS NOT (EXECUTIVE CLARITY) ================= */}
      <Section className="relative bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-6 py-36">
          <div className="grid gap-20 lg:grid-cols-[1fr_1fr] lg:items-start">

            {/* LEFT   POSITIONING */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
                Clear Boundaries
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-brand-slate">
                What A.R.I.S.E.X™ is not
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-brand-muted">
                A.R.I.S.E.X™ was intentionally designed to avoid the common patterns
                that stall enterprise AI efforts after early success.
              </p>

              <p className="mt-6 text-base leading-relaxed text-brand-muted">
                This clarity matters because leaders need to know exactly what they
                are and are not committing to when they operationalize AI at scale.
              </p>
            </div>

            {/* RIGHT   EXCLUSIONS */}
            <div className="relative rounded-3xl border border-brand-border bg-white px-14 py-16 shadow-sm">
              <p className="mb-8 text-sm font-semibold uppercase tracking-widest text-brand-muted">
                Explicitly Not
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-slate/60" />
                  <p className="text-base leading-relaxed text-brand-muted">
                    <span className="font-semibold text-brand-slate">
                      A tool, platform, or vendor pitch
                    </span>{" "}
                    designed to sell technology rather than improve enterprise
                    execution.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-slate/60" />
                  <p className="text-base leading-relaxed text-brand-muted">
                    <span className="font-semibold text-brand-slate">
                      A maturity model or academic framework
                    </span>{" "}
                    focused on scoring progress instead of delivering outcomes.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-slate/60" />
                  <p className="text-base leading-relaxed text-brand-muted">
                    <span className="font-semibold text-brand-slate">
                      A one-off transformation program
                    </span>{" "}
                    that peaks at launch and degrades once attention shifts.
                  </p>
                </li>
              </ul>

              <p className="mt-10 text-base leading-relaxed text-brand-muted">
                A.R.I.S.E.X™ is a governed execution system leaders operate continuously
                as AI becomes embedded into how the enterprise actually runs.
              </p>
            </div>

          </div>
        </div>
      </Section>

{/* ================= EXECUTIVE CTA (GLASS PANEL   COMPACT, REFINED) ================= */}
<Section
  className="relative overflow-hidden reveal"
  style={{
    backgroundImage: "url('/arisex-cta-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* CINEMATIC GOVERNANCE OVERLAYS */}
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/70" />
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_260px_at_50%_-10%,rgba(56,189,248,0.16),transparent_60%)]" />
  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

  {/* Reduced vertical footprint */}
  <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
    {/* GLASS EXECUTIVE PANEL */}
    <div
      className="
        mx-auto
        max-w-3xl
        rounded-[28px]
        border border-white/15
        bg-white/10
        backdrop-blur-xl
        shadow-[0_55px_120px_-45px_rgba(0,0,0,0.75)]
        px-8 py-10
        sm:px-12 sm:py-12
        lg:px-14 lg:py-14
      "
    >
      {/* LABEL */}
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
        Executive Decision Point
      </p>

      {/* HEADLINE */}
      <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        Ready to govern AI
        <span className="block text-white/85">
          at enterprise scale?
        </span>
      </h2>

      {/* VALUE STATEMENT */}
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75">
        If your organization is moving beyond pilots, A.R.I.S.E.X™ provides the
        operating discipline required to scale AI with confidence, governance,
        and defensible impact without sacrificing control or trust.
      </p>

      {/* CTA ACTIONS */}
      <div className="mt-8 flex flex-wrap gap-4">
        <ButtonLink
          href="/contact"
          variant="primary"
          className="px-9 py-3.5 text-sm"
        >
          Book an Executive Briefing
        </ButtonLink>

        <ButtonLink
          href="/arisex"
          variant="secondary"
          className="px-9 py-3.5 text-sm"
        >
          Explore A.R.I.S.E.X™
        </ButtonLink>
      </div>

      {/* CONFIDENCE LINE */}
      <p className="mt-7 max-w-lg text-xs text-white/55">
        Designed for executives accountable to boards, regulators, and enterprise outcomes.
      </p>
    </div>
  </div>
</Section>


    </>
  );
}
