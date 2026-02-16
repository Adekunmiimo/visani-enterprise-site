import { Section } from "@/components/section";
// import Image from "next/image";

export default function InsightsPage() {
  return (
    <>
      {/* ================= INSIGHTS HERO (EXECUTIVE — BALANCED, CONTROLLED) ================= */}
      <Section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/aboutimg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* BALANCED EXECUTIVE CONTROL LAYERS */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/25" />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-36">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* LEFT — EXECUTIVE MESSAGE */}
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/65">
                Insights
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Executive briefs on
                <span className="block text-white/80">governed AI execution</span>
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/75">
                Decision-grade perspectives for enterprise leaders responsible for scaling
                AI with control, accountability, and defensible outcomes.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
                Written for executives moving beyond experimentation and into real operating
                environments where governance, cadence, and incentives determine success.
              </p>
            </div>

            {/* RIGHT — CLASSY AUTOMOTIVE VISUAL (visible on ALL breakpoints) */}
            {/* <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_50px_120px_-35px_rgba(0,0,0,0.35)]">
                <Image
                  src="/services-vis.jpg"
                  alt="Executive leadership and disciplined execution"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>

              <p className="mt-4 max-w-sm text-xs text-white/55">
                Precision, discipline, and control — the same standards executives apply
                to enterprise execution.
              </p>
            </div> */}
          </div>
        </div>
      </Section>

      {/* ================= POSITIONING STATEMENT (EXECUTIVE, REFINED — FIXED PADDING) ================= */}
      <Section className="relative bg-brand-offwhite">
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />

        <div className="relative mx-auto max-w-7xl px-6 py-32">
          <div className="grid gap-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            {/* LEFT — EXECUTIVE CONTEXT */}
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-muted">
                Perspective
              </p>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-brand-slate">
                Built for leaders
                <span className="block text-brand-slate/85">accountable for outcomes</span>
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-brand-muted">
                These insights are not trend commentary, vendor positioning, or speculative
                forecasts. They are disciplined examinations of how AI actually behaves inside
                complex enterprises once pilots collide with real operating constraints.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-brand-muted">
                Each brief is designed to support executive judgment in boardrooms, operating
                committees, risk reviews, and regulatory conversations where clarity,
                defensibility, and accountability matter.
              </p>
            </div>

            {/* RIGHT — EXECUTIVE SIGNAL PANEL (FIX: single-line className) */}
            <div className="relative rounded-[28px] border border-brand-border bg-white shadow-[0_30px_90px_-35px_rgba(0,0,0,0.15)] px-10 py-12 sm:px-12 sm:py-14 lg:px-14 lg:py-16">
              <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

              <p className="mb-10 text-sm font-semibold uppercase tracking-[0.3em] text-brand-muted">
                What these briefs focus on
              </p>

              <ul className="space-y-7">
                {[
                  "Operating models that translate AI strategy into repeatable execution.",
                  "Governance structures that scale without slowing delivery.",
                  "Readiness and adoption disciplines that survive real operations.",
                  "Measurement approaches executives can explain, defend, and govern.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-5">
                    <span className="mt-2.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-brand-slate/60" />
                    <p className="text-base leading-relaxed text-brand-muted">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ================= INSIGHT FEED (EXECUTIVE — IMAGE-BACKED, HIGH-CONTRAST) ================= */}
      <Section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/insights-feed-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-black/65" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/65 to-black/80" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-32">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Recent executive briefs
            </h2>

            <p className="mt-6 text-base leading-relaxed text-white/80">
              Published perspectives on enterprise AI execution, governance, and operating
              discipline written for leaders accountable for real-world outcomes.
            </p>
          </div>

          <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <a
                key={i}
                href="/insights/example"
                className="group relative rounded-[28px] border border-white/15 bg-white/10 px-10 py-12 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-[0_45px_130px_-40px_rgba(0,0,0,0.7)]"
              >
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/65">
                  Executive Brief
                </p>

                <h3 className="mt-5 text-xl font-semibold leading-snug text-white">
                  Why most AI programs stall after early success
                </h3>

                <p className="mt-6 text-sm leading-relaxed text-white/80">
                  A structural analysis of where execution breaks when pilots collide with
                  real enterprise operating conditions.
                </p>

                <div className="mt-10">
                  <span className="text-sm font-semibold text-white/80 transition group-hover:text-white">
                    Read brief →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
