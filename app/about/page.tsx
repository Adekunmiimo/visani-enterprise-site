import Image from "next/image";
import { Section } from "@/components/section";

export default function AboutPage() {
  return (
    <>
     {/* ================= ABOUT HERO (EXECUTIVE, BACKGROUND-LED   REFINED) ================= */}
      <Section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/about-hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* EXECUTIVE DEPTH & CONTROL   REBALANCED */}
        <div className="absolute inset-0 bg-white/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/55 to-white/40" />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />

        <div className="relative mx-auto max-w-7xl px-6 py-36">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">

            {/* LEFT   EXECUTIVE POSITIONING */}
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
                About
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-brand-slate sm:text-5xl">
                Visani America
                <span className="block text-brand-slate/85">
                  Enterprise AI Execution Advisory
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-brand-muted">
                Visani America helps enterprises move beyond AI experimentation by
                transforming proven AI capabilities into governed, controllable, and
                accountable operating systems.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-brand-muted">
                Our work begins after pilots succeed   when executive leadership must
                ensure AI can operate reliably under board oversight, regulatory
                scrutiny, risk exposure, and real-world business pressure.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-brand-muted">
                We focus on execution discipline: ownership, governance, operating
                cadence, and defensible value   the conditions required for AI to scale
                as a core enterprise capability.
              </p>
            </div>

            {/* RIGHT   EXECUTIVE VISUAL SIGNAL */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] border border-black/10 shadow-[0_50px_140px_-45px_rgba(0,0,0,0.25)]">
                <Image
                  src="/aboutimg.jpg"
                  alt="Executive leadership, governance, and disciplined enterprise execution"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />

                {/* Subtle executive polish */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/25 via-transparent to-white/10" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
              </div>

              {/* Micro-caption */}
              <p className="mt-4 max-w-sm text-xs text-brand-muted">
                Execution discipline, governance clarity, and enterprise accountability.
              </p>
            </div>

          </div>
        </div>
      </Section>


     {/* ================= WHY WE EXIST ================= */}
    <Section className="bg-brand-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-start">

          {/* LEFT */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
              Why we exist
            </p>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-brand-slate">
              AI proves value in pilots.
              <span className="block">Execution breaks at scale.</span>
            </h2>

            <p className="mt-8 text-base leading-relaxed text-brand-muted">
              Enterprises rarely fail because AI technology falls short. Failure
              occurs when successful pilots encounter real operating conditions
              and expose unresolved questions of ownership, governance, workflow
              integration, incentives, and accountability.
            </p>

            <p className="mt-6 text-base leading-relaxed text-brand-muted">
              As AI becomes embedded in core business functions, ambiguity turns
              into risk. Without execution discipline, confidence erodes,
              scrutiny increases, and progress stalls.
            </p>

            <p className="mt-6 text-base leading-relaxed text-brand-muted">
              Visani America exists to eliminate that ambiguity   replacing it with
              a governed execution system leaders can operate, review, and sustain
              under executive, board, and regulatory oversight.
            </p>
          </div>

          {/* RIGHT   VISUAL SIGNAL */}
          <div className="relative rounded-[28px] overflow-hidden border border-brand-border shadow-sm">
            <div className="relative aspect-[16/10]">
              <Image
                src="/about-execution.jpg"
                alt="Disciplined enterprise execution systems"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="bg-white px-14 py-16">
              <p className="mb-10 text-sm font-semibold uppercase tracking-widest text-brand-muted">
                What we focus on
              </p>

              <ul className="space-y-7">
                {[
                  "Converting AI strategy into repeatable operating execution",
                  "Designing governance before scale   not after incidents",
                  "Making ownership, decision rights, and accountability explicit",
                  "Ensuring AI value is measurable, explainable, and defensible",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-slate/60" />
                    <p className="text-base leading-relaxed text-brand-muted">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </Section>


 {/* ================= OUR POSITION (EXECUTIVE, STRUCTURED) ================= */}
<Section
  className="relative overflow-hidden"
  style={{
    backgroundImage: "url('/about-position-bg.jpg')", // architectural, neutral, light
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Soft executive overlay */}
  <div className="absolute inset-0 bg-white/85" />
  <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/95" />
  <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />

  <div className="relative mx-auto max-w-7xl px-6 py-36">
    <div className="grid gap-20 lg:grid-cols-2 lg:items-start">

      {/* LEFT   POSITIONING COPY */}
      <div className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
          Our position
        </p>

        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-brand-slate">
          Clear by design.
          <span className="block text-brand-slate/80">
            Deliberate by intent.
          </span>
        </h2>

        <p className="mt-8 text-base leading-relaxed text-brand-muted">
          Visani America occupies a deliberately narrow position in the AI
          ecosystem. We do not compete with vendors, platforms, or integrators  
          and we do not operate as an innovation partner or experimentation arm.
        </p>

        <p className="mt-6 text-base leading-relaxed text-brand-muted">
          Our work begins after pilots succeed   when leadership must ensure AI
          operates reliably inside the enterprise under risk, scrutiny, and
          accountability.
        </p>

        <p className="mt-6 text-base leading-relaxed text-brand-muted font-medium">
          Our role is to reinforce executive control   not dilute it.
        </p>
      </div>

      {/* RIGHT   POSITION CARDS */}
      <div className="grid gap-8 sm:grid-cols-2">

        {/* CARD 1 */}
        <div className="rounded-[26px] border border-brand-border bg-white px-10 py-12 text-center shadow-sm">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-offwhite">
            {/* Icon */}
            <svg
              className="h-6 w-6 text-brand-slate"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 6v6l4 2" />
              <circle cx="12" cy="12" r="9" />
            </svg>
          </div>

          <p className="text-sm font-semibold text-brand-slate">
            What we are not
          </p>

          <p className="mt-4 text-sm leading-relaxed text-brand-muted">
            Not a software vendor, systems integrator, innovation lab, or
            transformation program.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="rounded-[26px] border border-brand-border bg-white px-10 py-12 text-center shadow-sm">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-offwhite">
            {/* Icon */}
            <svg
              className="h-6 w-6 text-brand-slate"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 12h18" />
              <path d="M12 3v18" />
            </svg>
          </div>

          <p className="text-sm font-semibold text-brand-slate">
            What we are
          </p>

          <p className="mt-4 text-sm leading-relaxed text-brand-muted">
            An execution system advisor helping enterprises design, govern, and
            operate AI as a core capability.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="rounded-[26px] border border-brand-border bg-white px-10 py-12 text-center shadow-sm">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-offwhite">
            {/* Icon */}
            <svg
              className="h-6 w-6 text-brand-slate"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12l5 5L20 7" />
            </svg>
          </div>

          <p className="text-sm font-semibold text-brand-slate">
            Where we engage
          </p>

          <p className="mt-4 text-sm leading-relaxed text-brand-muted">
            When AI becomes material to performance, risk exposure, and executive
            accountability.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="rounded-[26px] border border-brand-border bg-white px-10 py-12 text-center shadow-sm">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-offwhite">
            {/* Icon */}
            <svg
              className="h-6 w-6 text-brand-slate"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l9 4v6c0 5-3.5 9.7-9 10-5.5-.3-9-5-9-10V6l9-4z" />
            </svg>
          </div>

          <p className="text-sm font-semibold text-brand-slate">
            What we protect
          </p>

          <p className="mt-4 text-sm leading-relaxed text-brand-muted">
            Executive control, governance clarity, and defensible AI outcomes
            under scrutiny.
          </p>
        </div>

      </div>
    </div>
  </div>
</Section>


    {/* ================= HOW WE THINK (EXECUTION PHILOSOPHY) ================= */}
    <Section className="bg-brand-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-32">

        {/* HEADER */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
            How we think
          </p>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-brand-slate sm:text-4xl">
            Execution before optimism
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-brand-muted">
            We assess AI using the same standards executives apply to any material
            operating capability: clear ownership, enforceable controls, risk
            posture, incentive alignment, and sustained outcomes.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-brand-muted">
            If AI cannot be governed, explained, and defended under pressure, it is
            not ready to scale   regardless of technical performance.
          </p>
        </div>

        {/* THINKING PRINCIPLES */}
        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Ownership first",
              desc: "Every AI capability must have clear executive and operational accountability."
            },
            {
              title: "Governance is built in",
              desc: "Controls are embedded before scale, not retrofitted after incidents."
            },
            {
              title: "Risk is explicit",
              desc: "AI exposure is understood, reviewed, and managed like any other enterprise risk."
            },
            {
              title: "Outcomes must hold up",
              desc: "Value must be measurable, explainable, and defensible to boards and regulators."
            }
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="rounded-[24px] border border-brand-border bg-white px-10 py-12 text-center shadow-sm"
            >
              <p className="text-sm font-semibold text-brand-slate">
                {title}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </Section>


      {/* ================= OPERATING PRINCIPLES ================= */}
     {/* ================= OPERATING PRINCIPLES (EXECUTIVE, STRUCTURED) ================= */}
<Section
  className="relative overflow-hidden"
  style={{
    backgroundImage: "url('/execution-principles-bg.jpg')", // abstract, architectural, neutral
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* EXECUTIVE DEPTH */}
  <div className="absolute inset-0 bg-black/65" />
  <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/65 to-black/80" />
  <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

  <div className="relative mx-auto max-w-7xl px-6 py-36">

    {/* HEADER */}
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
        How we operate
      </p>

      <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Execution principles
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-white/75">
        Every engagement is governed by principles designed to preserve executive
        authority, organizational trust, and long-term operational integrity
        under real enterprise conditions.
      </p>
    </div>

    {/* PRINCIPLE CARDS */}
    <div className="mt-24 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          title: "Governance before scale",
          icon: (
            <path d="M12 2l9 4v6c0 5-3.5 9.7-9 10-5.5-.3-9-5-9-10V6l9-4z" />
          ),
        },
        {
          title: "Ownership is explicit",
          icon: (
            <path d="M12 6v6l4 2M12 3a9 9 0 100 18 9 9 0 000-18z" />
          ),
        },
        {
          title: "Execution over experimentation",
          icon: (
            <path d="M5 12h14M12 5v14" />
          ),
        },
        {
          title: "Value must be defensible",
          icon: (
            <path d="M5 12l5 5L20 7" />
          ),
        },
      ].map(({ title, icon }) => (
        <div
          key={title}
          className="
            group
            relative
            rounded-[28px]
            border border-white/15
            bg-white/10
            px-12 py-16
            text-center
            backdrop-blur-lg
            shadow-[0_40px_120px_-40px_rgba(0,0,0,0.7)]
            transition-all duration-300
            hover:-translate-y-1
            hover:bg-white/15
          "
        >
          {/* ICON */}
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-inset ring-white/15">
            <svg
              className="h-7 w-7 text-white/80"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {icon}
            </svg>
          </div>

          {/* TITLE */}
          <p className="text-base font-semibold text-white">
            {title}
          </p>
        </div>
      ))}
    </div>

  </div>
</Section>

    </>
  );
}
