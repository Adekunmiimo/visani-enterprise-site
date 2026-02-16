"use client";

import Link from "next/link";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import Image from "next/image";
export default function ServicesPage() {
  useRevealOnScroll();

  return (
    <>
     {/* HERO */}
<Section
  className="relative overflow-hidden"
  style={{
    backgroundImage: "url('/sec111.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Cinematic overlays */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/70" />
  <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

  <div className="relative z-10 mx-auto max-w-7xl px-6 py-36">
    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* LEFT — Messaging */}
      <div className="max-w-xl">
        <div className="border border-white/15 bg-white/5 p-12 backdrop-blur-xl shadow-[0_40px_90px_-30px_rgba(0,0,0,0.6)]">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
            Services
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            AI Transformation
            <span className="block">Advisory & Delivery</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/85">
            We help enterprise leaders move from isolated AI pilots to governed,
            scalable execution without losing control, trust, or accountability.
          </p>

          <div className="mt-10">
            <ButtonLink href="/contact" variant="primary">
              Book an Executive Briefing
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* RIGHT — Services Visual */}
      <div className="relative hidden lg:block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/15 bg-black shadow-[0_50px_120px_-40px_rgba(0,0,0,0.7)]">
          <Image
            src="/services-vis.jpg"
            alt="Enterprise AI advisory and execution services"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 0px"
          />

          {/* Executive contrast layers */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>

        {/* Caption — purposeful, executive */}
        <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/60">
          Advisory, delivery, and governance services designed to integrate AI
          into real enterprise operating models.
        </p>
      </div>

    </div>
  </div>
</Section>


      {/* EXECUTION REALITY */}

      <Section className="relative overflow-hidden bg-white reveal">
        {/* Ambient depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white to-brand-offwhite/50" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />

        <div className="relative mx-auto max-w-7xl px-6 py-28">
          <div className="grid items-center gap-20 lg:grid-cols-2">

            {/* LEFT: Strategic narrative */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                Execution Reality
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-brand-slate sm:text-4xl">
                Designed for enterprise execution
                <span className="block">not experimentation</span>
              </h2>

              <p className="mt-8 text-base leading-relaxed text-brand-muted">
                Most AI initiatives stall after early success. Not because the
                technology fails but because execution lacks structure, governance,
                and ownership.
              </p>

              <p className="mt-4 text-base leading-relaxed text-brand-muted">
                Our services align leadership intent, embed AI into real operating
                workflows, and establish metrics executives can confidently defend 
                in the boardroom, audits, and strategic reviews.
              </p>
            </div>

            {/* RIGHT: Executive signal cards */}
            <div className="grid gap-8">
              {[
                {
                  title: "Leadership alignment",
                  desc: "Decision rights, ownership, and sponsorship defined before scale introduces risk.",
                },
                {
                  title: "Embedded execution",
                  desc: "AI integrated directly into operational workflows not isolated pilots.",
                },
                {
                  title: "Defensible measurement",
                  desc: "Outcome metrics executives can explain, govern, and stand behind.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="
                    group relative overflow-hidden
                    rounded-xl
                    border border-brand-border
                    bg-white/80
                    px-10 py-8
                    backdrop-blur
                    shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]
                    transition-all duration-500 ease-out
                    hover:-translate-y-1
                    hover:shadow-[0_45px_120px_-45px_rgba(0,0,0,0.35)]
                  "
                >
                  {/* subtle hover sheen */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(600px_120px_at_10%_0%,rgba(255,255,255,0.35),transparent_60%)]" />

                  <p className="relative z-10 text-sm font-semibold text-brand-slate">
                    {item.title}
                  </p>

                  <p className="relative z-10 mt-3 text-sm leading-relaxed text-brand-muted">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </Section>



   {/* CORE SERVICES */}
<Section
  className="relative overflow-hidden reveal"
  style={{
    backgroundImage: "url('/sec222.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Atmospheric cover */}
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/60 to-black/70" />
  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

  <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-40">
    {/* Section header */}
    <div className="max-w-3xl">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
        Core Services
      </h2>

      <p className="mt-6 text-base leading-relaxed text-white/75">
        Advisory and delivery services designed to move enterprises from AI
        ambition to governed, scalable execution.
      </p>
    </div>

    {/* Services grid */}
    <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Executive AI Advisory",
          desc:
            "Define outcomes, decision rights, and governance expectations with leadership before scale introduces risk.",
          icon: <path d="M12 6v6l4 2M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18z" />,
        },
        {
          title: "Readiness & Operating Model Design",
          desc:
            "Assess data, workflows, teams, and controls to design an AI operating model that scales with discipline.",
          icon: <path d="M4 7h16M4 12h16M4 17h16" />,
        },
        {
          title: "Pilot-to-Scale Roadmapping",
          desc:
            "Translate early AI wins into a sequenced, governed path to enterprise-wide execution.",
          icon: <path d="M4 12h16M14 6l6 6-6 6" />,
        },
        {
          title: "AI Delivery & Workflow Integration",
          desc:
            "Embed AI directly into day-to-day operations so it becomes part of how work gets done.",
          icon: <path d="M4 4h6v6H4zM14 14h6v6h-6zM10 14l4-4" />,
        },
        {
          title: "Adoption & Change Enablement",
          desc:
            "Create routines, enablement, and accountability systems that drive sustained usage at scale.",
          icon: <path d="M12 3v18M5 10l7-7 7 7" />,
        },
        {
          title: "Governance & Value Measurement",
          desc:
            "Design governance, risk, and measurement into execution so value is visible and defensible.",
          icon: <path d="M3 12h3l3 8 4-16 3 8h5" />,
        },
      ].map((item) => (
        <Link
          key={item.title}
          href="/contact"
          className="
            group relative block overflow-hidden
            rounded-2xl
            border border-white/15
            bg-white/10
            p-10
            backdrop-blur-xl
            shadow-[0_35px_90px_-45px_rgba(0,0,0,0.75)]
            transition-all duration-500 ease-out
            hover:-translate-y-2
            hover:bg-white/15
            hover:shadow-[0_55px_140px_-55px_rgba(0,0,0,0.95)]
          "
        >
          {/* Icon */}
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white/80 transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110">
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {item.icon}
            </svg>
          </div>

          {/* Content */}
          <p className="text-base font-semibold text-white">
            {item.title}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {item.desc}
          </p>

          {/* Explore */}
          <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors group-hover:text-white">
            <span>Explore service</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </Link>
      ))}
    </div>
  </div>
</Section>



{/* HOW WE ENGAGE */}
<Section className="relative z-20 -mt-20 reveal">
  <div className="mx-auto max-w-7xl px-6 pb-28">
    {/* Elevated execution panel */}
    <div
      className="
        relative overflow-hidden
        rounded-3xl
        border border-brand-border
        bg-white
        px-10 py-16
        shadow-[0_60px_140px_-40px_rgba(0,0,0,0.25)]
      "
    >
      {/* Subtle executive depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white to-brand-offwhite/40" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />

      <div className="relative grid gap-20 lg:grid-cols-2">
        {/* LEFT: Narrative */}
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
            Engagement Model
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-slate">
            How engagements typically work
          </h2>

          <p className="mt-6 text-base leading-relaxed text-brand-muted">
            While every engagement is tailored, most follow a disciplined
            execution cadence designed to move from clarity to scale without
            rushing decisions or over-engineering solutions.
          </p>

          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            Each phase builds control, confidence, and momentum so leaders can
            govern progress as AI moves into real operations.
          </p>
        </div>

        {/* RIGHT: Execution steps */}
        <div className="space-y-4">
          {[
            "Executive briefing and outcome alignment",
            "Readiness assessment and operating model design",
            "Pilot-to-scale roadmap",
            "Delivery and adoption sprints",
            "Governance and value review cadence",
          ].map((step, i) => (
            <div
              key={step}
              className="
                group flex items-start gap-6
                rounded-xl
                border border-brand-border
                bg-brand-offwhite
                px-6 py-5
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-white
                hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)]
              "
            >
              {/* Step number */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-border bg-white text-xs font-semibold text-brand-muted">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Step text */}
              <p className="text-sm font-medium leading-relaxed text-brand-slate">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</Section>

{/* SPACER   prevents next section from covering overlap */}
<Section className="relative z-0">
  <div className="h-40 sm:h-44 lg:h-48" />
</Section>

{/* POSITIONING — EXECUTIVE POINT OF VIEW (DARK THEME) */}
<Section
  className="relative overflow-hidden reveal"
  style={{
    backgroundImage: "url('/positioning-bg (2).jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Dark discipline overlays */}
  <div className="pointer-events-none absolute inset-0 bg-black/65" />
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/65 to-black/75" />
  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

  <div className="relative mx-auto max-w-7xl px-6 py-32">
    {/* Header */}
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
        Our Position
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Built for leaders accountable
        <span className="block text-white/85">for real outcomes</span>
      </h2>

      <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70">
        Most AI initiatives fail after early success because execution is treated
        as a technical problem. We approach AI as an enterprise operating
        challenge — governed, measured, and led from the top.
      </p>
    </div>

    {/* Visual divider */}
    <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

    {/* Contrast cards */}
    <div className="mt-20 grid gap-14 lg:grid-cols-2">
      {/* Typical approach */}
      <div className="relative rounded-3xl border border-white/15 bg-white/5 px-10 py-12 backdrop-blur-md">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
          Typical Market Approach
        </p>

        <ul className="mt-10 space-y-6">
          {[
            "Tool-first recommendations",
            "Disconnected pilots and experiments",
            "Governance added after deployment",
            "Success measured by demos, not outcomes",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 text-sm leading-relaxed text-white/65"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Our approach */}
      <div className="relative rounded-3xl border border-white/20 bg-black/40 px-10 py-12 backdrop-blur-md shadow-[0_50px_140px_-60px_rgba(0,0,0,0.9)]">
        {/* Executive accent */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-white/70" />

        <p className="text-xs font-semibold uppercase tracking-widest text-white">
          Our Approach
        </p>

        <ul className="mt-10 space-y-6">
          {[
            "Leadership-aligned outcomes first",
            "AI embedded into real operating workflows",
            "Governance and risk designed in from day one",
            "Value measured on an executive cadence",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-4 text-sm leading-relaxed text-white/85"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Closing reinforcement */}
    <div className="mt-24 max-w-3xl border-l-2 border-white/30 pl-6">
      <p className="text-base leading-relaxed text-white/80">
        This is why our work holds up in boardrooms, audits, and operational
        reality — not just innovation labs.
      </p>
    </div>
  </div>
</Section>



{/* EXECUTIVE CTA */}
<Section
  className="relative overflow-hidden reveal"
  style={{
    backgroundImage: "url('/cta-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Cinematic governance overlay */}
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/70" />
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_300px_at_50%_-10%,rgba(56,189,248,0.18),transparent_60%)]" />
  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

  <div className="relative z-10 mx-auto max-w-7xl px-6 py-28">
    {/* Glass executive panel */}
    <div
      className="
        max-w-4xl
        rounded-3xl
        border border-white/15
        bg-white/10
        px-10 py-16
        backdrop-blur-xl
        shadow-[0_60px_140px_-50px_rgba(0,0,0,0.7)]
      "
    >
      {/* Label */}
      <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
        Next Step
      </p>

      {/* Headline */}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Move from AI proof
        <span className="block">to enterprise control</span>
      </h2>

      {/* Reinforcement */}
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75">
        If your organization has already proven AI can work, the next step is
        making it governable, scalable, and defensible at enterprise speed and
        under executive oversight.
      </p>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap gap-4">
        <ButtonLink href="/contact" variant="primary">
          Book an Executive Briefing
        </ButtonLink>

        <ButtonLink href="/arisex" variant="secondary">
          Explore A.R.I.S.E.X™
        </ButtonLink>
      </div>

      {/* Confidence line */}
      <p className="mt-6 max-w-xl text-sm text-white/60">
        Designed for leaders accountable to boards, regulators, and real-world
        outcomes.
      </p>
    </div>
  </div>
</Section>


    </>
  );
}
