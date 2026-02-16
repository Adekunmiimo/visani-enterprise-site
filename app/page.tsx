"use client";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import Image from "next/image";
import { Section } from "@/components/section";
import { CinematicSection } from "@/components/cinematic-section";
import { CTABand } from "@/components/cta-band";
import { ButtonLink } from "@/components/button";
import Link from "next/link";

export default function HomePage() {
  useRevealOnScroll();

  // ✅ Keep ONCE (you had it duplicated)
  const executiveProofItems = [
    {
      title: "From pilots to governed platforms",
      img: "/img444.jpg",
      desc:
        "Move from isolated AI experiments to enterprise platforms with clear ownership, cadence, and executive control.",
      href: "/contact",
    },
    {
      title: "Measurable value realization",
      img: "/img555.jpg",
      desc:
        "Establish defensible metrics tied to cost reduction, productivity gains, and strategic outcomes executives can defend.",
      href: "/contact",
    },
    {
      title: "Confidence in governance and risk",
      img: "/img666.jpg",
      desc:
        "Withstand audit, compliance, and board scrutiny because controls are embedded, not retrofitted.",
      href: "/contact",
    },
  ] as const;

  return (
    <>
      {/* HERO (cinematic) */}
      <CinematicSection backgroundImage="/richheroimg.png" overlay="medium" reveal={false}>
        <div className="mx-auto max-w-7xl px-6 py-36">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Enterprise AI Transformation Advisory & Delivery
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              AI transformation that scales
              <span className="block">governed, adopted, measurable.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              Visani America helps enterprise leaders convert AI ambition into disciplined
              execution and measurable outcomes powered by A.R.I.S.E.X™,
              our proprietary execution system.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/contact" variant="primary">
                Book a 30-min Executive Briefing
              </ButtonLink>
              <ButtonLink href="/arisex" variant="secondary">
                Explore A.R.I.S.E.X™
              </ButtonLink>
            </div>

            <p className="mt-6 max-w-xl text-sm text-white/70">
              Built for leaders who need outcomes they can defend in the boardroom, in risk
              reviews, and in day-to-day operations.
            </p>
          </div>
        </div>
      </CinematicSection>

      {/* AUTHORITY / TRUST */}
      <Section className="relative -mt-24 bg-transparent reveal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative grid gap-16 border border-brand-border bg-white px-10 py-20 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.15)] lg:grid-cols-2">
            {/* TEXT */}
            <div className="relative max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                Built for Enterprise Execution
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-slate">
                Not experimentation.
                <span className="block">A system leaders can run.</span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-brand-muted">
                We design AI execution the way enterprises actually operate through
                operating models, governance, adoption systems, and measurable outcomes.
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-brand-border">
              <Image
                src="/img111.png"
                alt="Enterprise AI operating model visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* PROBLEM (cinematic) */}
      <CinematicSection backgroundImage="/robo1.png" overlay="medium">
        {/* Contrast control (kept from your original, stacked on top of CinematicSection overlay) */}
        {/* <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/40" /> */}

        <div className="relative mx-auto max-w-7xl px-6 py-28">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* LEFT   HUMANOID */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/15 bg-black shadow-[0_40px_90px_-35px_rgba(0,0,0,0.25)]">
                <Image
                  src="/humanoid-execution.png"
                  alt="AI capability without execution discipline"
                  fill
                  className="object-cover"
                  priority
                />

                {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" /> */}
              </div>

              <p className="mt-4 text-xs text-white/60">
                Capability without structure introduces risk, friction, and stalled scale.
              </p>
            </div>

            {/* RIGHT   TEXT */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                The Execution Gap
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                Why AI programs stall
                <span className="block text-white/90">after the pilot</span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-white/80">
                AI doesn’t fail because it can’t generate answers. It fails because
                organizations lack a system to align outcomes, readiness, workflows,
                governance, and measurement.
              </p>

              <div className="mt-8 border-l-2 border-white/30 pl-6">
                <p className="text-sm font-semibold text-white">The technology is ready.</p>
                <p className="mt-2 text-sm text-white/75">
                  Enterprise execution usually is not.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CinematicSection>

      {/* EXECUTION GAP – VISUAL */}
      <Section className="relative overflow-hidden bg-white reveal">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-offwhite/40 via-white to-white" />

        <div className="relative mx-auto max-w-7xl px-6 py-32">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* TEXT SIDE */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                The Execution Gap
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-brand-slate">
                When pilots succeed
                <span className="block">but scale fails</span>
              </h3>

              <p className="mt-6 text-base leading-relaxed text-brand-muted">
                Enterprises routinely prove that AI works in controlled pilots. The
                breakdown happens when those pilots collide with real operating
                models decision rights blur, workflows resist change, and accountability
                fragments.
              </p>

              <p className="mt-4 text-base leading-relaxed text-brand-muted">
                Without a system to align execution, governance, and measurement, early
                success becomes organizational drag instead of momentum.
              </p>

              <div className="mt-8 border-l-2 border-brand-border pl-6">
                <p className="text-sm font-semibold text-brand-slate">
                  The technology isn’t the constraint.
                </p>
                <p className="mt-2 text-sm text-brand-muted">The system to scale it is.</p>
              </div>
            </div>

            {/* IMAGE SIDE */}
            <div className="relative">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-brand-border bg-black shadow-[0_40px_90px_-30px_rgba(0,0,0,0.35)]">
                <Image
                  src="/img222.jpg"
                  alt="Enterprise AI execution gap visualization"
                  fill
                  className="object-cover"
                  priority
                />

                {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-black/25" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" /> */}
              </div>

              <p className="mt-4 text-xs text-brand-muted">
                AI pilots operating independently from enterprise governance and workflows.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SOLUTION */}
      <Section className="relative overflow-hidden bg-brand-offwhite reveal">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-brand-offwhite to-brand-offwhite" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* IMAGE */}
            <div className="order-2 lg:order-1 relative">
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-brand-border bg-black shadow-[0_35px_80px_-30px_rgba(0,0,0,0.3)]">
                <Image
                  src="/img333.jpg"
                  alt="Governed enterprise AI execution system visualization"
                  fill
                  className="object-cover"
                  priority
                />

                {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" /> */}
              </div>

              <p className="mt-3 text-xs text-brand-muted">
                A governed execution layer connecting leadership intent to operational reality.
              </p>
            </div>

            {/* TEXT */}
            <div className="order-1 lg:order-2 max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                The Solution
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-slate">
                A governed system
                <span className="block">for scaling AI</span>
              </h2>

              <p className="mt-5 text-base leading-relaxed text-brand-muted">
                The answer is not more experimentation, larger pilots, or faster models. It
                is a disciplined execution system that aligns leadership intent,
                organizational readiness, workflow integration, governance, and measurement
                into a single operating cadence.
              </p>

              <p className="mt-4 text-base leading-relaxed text-brand-muted">
                This allows AI to move from isolated success to enterprise capability without
                eroding trust, control, or accountability.
              </p>

              <div className="mt-7 border-l-2 border-brand-border pl-6">
                <p className="text-sm font-semibold text-brand-slate">
                  A.R.I.S.E.X™ creates cadence, control, and continuity.
                </p>
                <p className="mt-1 text-sm text-brand-muted">
                  So scale feels intentional not risky.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* EXECUTIVE PROOF */}
      <Section className="relative overflow-hidden bg-white reveal">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white to-brand-offwhite/40" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
              Executive Proof
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-slate">
              Outcomes leaders can <span className="block">stand behind</span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-brand-muted">
              This is what changes when AI is treated as an enterprise operating capability,
              not a collection of pilots.
            </p>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {executiveProofItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                aria-label={item.title}
                className="
                  group relative block overflow-hidden rounded-2xl
                  border border-brand-border bg-white
                  shadow-[0_30px_70px_-30px_rgba(0,0,0,0.25)]
                  transition-all duration-500 ease-out
                  hover:-translate-y-2
                  hover:border-brand-border/70
                  hover:shadow-[0_50px_120px_-40px_rgba(0,0,0,0.4)]
                "
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="
                      object-cover
                      transition-transform duration-700 ease-out
                      group-hover:scale-105
                    "
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />

                  {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" /> */}
                </div>

                <div className="relative p-8">
                  <p className="text-sm font-semibold text-brand-slate">{item.title}</p>

                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.desc}</p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-slate transition-colors group-hover:text-brand-navy">
                    <span>Discuss this outcome</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 max-w-3xl">
            <p className="text-base leading-relaxed text-brand-muted">
              These outcomes are not theoretical. They are the result of applying enterprise
              discipline to AI execution.
            </p>

            <div className="mt-8">
              <ButtonLink href="/contact" variant="primary">
                Book an Executive Briefing
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS (cinematic) */}
      <CinematicSection backgroundImage="/img777.jpg" overlay="dark">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
              How It Works
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A clear path from clarity to scale
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/85">
              Scaling AI is not a leap of faith. It is a controlled progression designed,
              governed, and measured at every stage so leaders can move fast without losing
              control.
            </p>
          </div>

          <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Executive Briefing",
                desc:
                  "Align leadership on outcomes, constraints, and decision rights so speed does not create risk.",
              },
              {
                step: "02",
                title: "Readiness Assessment",
                desc:
                  "Identify data, process, people, and governance gaps before scale exposes them.",
              },
              {
                step: "03",
                title: "Pilot-to-Scale Roadmap",
                desc:
                  "Define sequencing, dependencies, and measurement so pilots convert into platforms.",
              },
              {
                step: "04",
                title: "Delivery & Adoption Sprints",
                desc:
                  "Embed AI into real workflows, govern expansion, and prove value on a defined cadence.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative border border-white/15 bg-white/5 p-8 backdrop-blur-md"
              >
                <span className="text-xs font-semibold tracking-widest text-white/60">
                  {item.step}
                </span>

                <h3 className="mt-4 text-sm font-semibold text-white">{item.title}</h3>

                <p className="mt-4 text-sm leading-relaxed text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-2xl border-l-2 border-white/20 pl-6">
            <p className="text-base leading-relaxed text-white/85">
              This is not acceleration for its own sake. It is deliberate momentum where every
              increase in speed is matched by governance, adoption, and measurement.
            </p>
          </div>
        </div>
      </CinematicSection>

      {/* A.R.I.S.E.X (cinematic) */}
      <CinematicSection backgroundImage="/img888.jpg" overlay="dark">
        <div className="mx-auto max-w-7xl px-6 py-36">
          <div className="mx-auto max-w-5xl">
            <div className="relative border border-white/15 bg-white/5 p-16 backdrop-blur-2xl shadow-[0_60px_140px_-40px_rgba(0,0,0,0.75)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                Execution System
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Powered by A.R.I.S.E.X™
              </h2>

              <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/85">
                A.R.I.S.E.X™ is not a framework to admire. It is an enterprise execution system
                leaders can run. It aligns leadership intent, operational readiness, workflow
                integration, adoption, governance, and continuous measurement into a single,
                repeatable operating cadence.
              </p>

              <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    slug: "leadership-alignment",
                    title: "Leadership alignment",
                    desc: "Clear decision rights, ownership, and executive sponsorship tied to outcomes.",
                    type: "clock",
                  },
                  {
                    slug: "operational-readiness",
                    title: "Operational readiness",
                    desc: "Processes, data, teams, and tooling prepared before scale creates friction.",
                    type: "list",
                  },
                  {
                    slug: "workflow-integration",
                    title: "Workflow integration",
                    desc: "AI embedded directly into business workflows not layered on as an add-on.",
                    type: "grid",
                  },
                  {
                    slug: "adoption-systems",
                    title: "Adoption systems",
                    desc: "Routines, incentives, and enablement that drive sustained usage at scale.",
                    type: "arrow",
                  },
                  {
                    slug: "governance-by-design",
                    title: "Governance by design",
                    desc: "Risk, privacy, and compliance embedded from day one not retrofitted later.",
                    type: "shield",
                  },
                  {
                    slug: "continuous-measurement",
                    title: "Continuous measurement",
                    desc: "Metrics reviewed on cadence so value is visible, defensible, and improving.",
                    type: "pulse",
                  },
                ].map((item) => (
                  <Link
                    key={item.slug}
                    href={`/arisex#${item.slug}`}
                    className="
                      group relative block overflow-hidden
                      border border-white/15
                      bg-white/5
                      p-10
                      backdrop-blur-xl
                      shadow-[0_35px_80px_-35px_rgba(0,0,0,0.7)]
                      transition-all duration-500 ease-out
                      hover:-translate-y-2
                      hover:border-white/30
                      hover:bg-white/10
                      hover:shadow-[0_55px_140px_-55px_rgba(0,0,0,0.95)]
                      focus:outline-none
                      focus:ring-2 focus:ring-white/30
                    "
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(900px 200px at 20% 0%, rgba(255,255,255,0.18), transparent 55%)",
                      }}
                    />

                    <div className="relative z-10 mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-white/85 transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110">
                      {item.type === "clock" && (
                        <svg
                          className="h-7 w-7"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 7v5l3 2"
                          />
                        </svg>
                      )}
                      {item.type === "list" && (
                        <svg
                          className="h-7 w-7"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 7h16M4 12h16M4 17h16"
                          />
                        </svg>
                      )}
                      {item.type === "grid" && (
                        <svg
                          className="h-7 w-7"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 4h6v6H4zM14 14h6v6h-6zM10 14l4-4"
                          />
                        </svg>
                      )}
                      {item.type === "arrow" && (
                        <svg
                          className="h-7 w-7"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 17l-4 4-4-4M12 3v18"
                          />
                        </svg>
                      )}
                      {item.type === "shield" && (
                        <svg
                          className="h-7 w-7"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3l8 4v6c0 5-3.5 8-8 8s-8-3-8-8V7l8-4z"
                          />
                        </svg>
                      )}
                      {item.type === "pulse" && (
                        <svg
                          className="h-7 w-7"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 12h3l3 8 4-16 3 8h5"
                          />
                        </svg>
                      )}
                    </div>

                    <div className="relative z-10">
                      <p className="text-base font-semibold text-white">{item.title}</p>
                      <p className="mt-3 text-sm leading-relaxed text-white/70">{item.desc}</p>

                      <div className="mt-6 text-sm font-semibold text-white/80 transition-colors group-hover:text-white">
                        Explore →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="my-20 h-px bg-white/15" />

              <p className="max-w-3xl text-base leading-relaxed text-white/80">
                The result is controlled momentum. AI scales at enterprise speed without
                breaking governance, trust, or accountability.
              </p>

              <div className="mt-14">
                <ButtonLink href="/arisex" variant="primary">
                  Explore the Framework
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </CinematicSection>

      <CTABand />

      {/* GLOBAL reveal styles (you removed this in your current file; it must exist somewhere)
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style> */}
    </>
  );
}
