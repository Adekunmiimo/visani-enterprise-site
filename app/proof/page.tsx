import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button";

export default function ProofPage() {
  return (
    <>
      {/* ================= PROOF HERO ================= */}
      <Section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/proof1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* EXECUTIVE CONTROL LAYERS */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/60 to-black/75" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-40">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/65">
              Proof
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Evidence of governed
              <span className="block text-white/85">
                AI execution at scale
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/80">
              Not case studies. Not testimonials. Documented execution signals
              showing how AI operates under governance, scrutiny, and sustained
              enterprise conditions.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65">
              Designed for executives, boards, and regulators evaluating whether
              AI is truly under control   or merely producing outputs.
            </p>
          </div>
        </div>
      </Section>

      {/* ================= WHAT COUNTS AS PROOF ================= */}
      <Section className="bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="grid gap-20 lg:grid-cols-2">
            {/* LEFT */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
                Proof standard
              </p>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-brand-slate">
                What executives
                <span className="block">accept as evidence</span>
              </h2>

              <p className="mt-8 text-base leading-relaxed text-brand-muted">
                Enterprise proof is not performance charts or innovation demos.
                It is the presence of operating discipline under scale, risk,
                and sustained scrutiny.
              </p>

              <p className="mt-5 text-base leading-relaxed text-brand-muted">
                This page documents the execution signals leaders look for when
                determining whether AI is governable   not just impressive.
              </p>
            </div>

            {/* RIGHT */}
            <div className="rounded-[28px] border border-brand-border bg-white px-14 py-16 shadow-sm">
              <p className="mb-10 text-sm font-semibold uppercase tracking-widest text-brand-muted">
                Signals that matter
              </p>

              <ul className="space-y-7">
                {[
                  "Clear ownership and decision rights across AI workflows",
                  "Governance embedded before scale, not retrofitted",
                  "Measurable outcomes executives can defend publicly",
                  "Sustained adoption inside real operating environments",
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
      </Section>

      {/* ================= DOCUMENTED PROOF (BRIGHT, CLICKABLE) ================= */}
      <Section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/proof2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* LIGHTER DEPTH */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/50 to-black/65" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-36">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Documented proof
            </p>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Evidence of execution
              <span className="block text-white/85">
                under real enterprise conditions
              </span>
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/80">
              This evidence reflects how AI behaves under scale, governance
              pressure, and sustained executive scrutiny   not pilot scenarios.
            </p>
          </div>

          {/* BRIGHT CARDS */}
          <div className="mt-24 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Governance established before scale",
                desc:
                  "Decision rights, approval thresholds, and escalation paths are formally defined and enforced prior to enterprise rollout.",
                href: "/proof/governance",
              },
              {
                title: "Operational ownership is explicit",
                desc:
                  "Named executives are accountable for AI outcomes across workflows   ownership is never informal or implied.",
                href: "/proof/ownership",
              },
              {
                title: "Value is measured and defensible",
                desc:
                  "Outcome metrics are reviewed on a recurring cadence and tied to business performance and board-level reporting.",
                href: "/proof/measurement",
              },
            ].map(({ title, desc, href }) => (
              <a
                key={title}
                href={href}
                className="
                  group
                  block
                  rounded-[26px]
                  border border-white/30
                  bg-white/30
                  px-10 py-12
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-white/40
                  hover:shadow-[0_40px_120px_-35px_rgba(0,0,0,0.6)]
                "
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
                  Execution signal
                </p>

                <h3 className="mt-6 text-xl font-semibold text-black">
                  {title}
                </h3>

                <p className="mt-6 text-sm leading-relaxed text-black/80">
                  {desc}
                </p>

                <div className="mt-10">
                  <span className="text-sm font-semibold text-black/70 group-hover:text-black">
                    Review evidence →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= FINAL CTA (EXECUTIVE DECISION MOMENT   PREMIUM) ================= */}
      <Section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/proof-cta-bg.jpg')", // dark, architectural, restrained
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Executive depth + control */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/90" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-32">
          {/* Centered executive glass panel */}
          <div
            className="
              mx-auto
              max-w-4xl
              rounded-[32px]
              border border-white/15
              bg-white/10
              backdrop-blur-2xl
              px-14 py-16
              shadow-[0_70px_180px_-60px_rgba(0,0,0,0.9)]
              text-center
            "
          >
            {/* Executive signal */}
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/55">
              Executive decision point
            </p>

            {/* Headline */}
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Proof matters
              <span className="block text-white/85">
                when AI becomes enterprise-critical
              </span>
            </h2>

            {/* Primary value statement */}
            <p className="mt-8 max-w-3xl mx-auto text-lg leading-relaxed text-white/85">
              When AI moves beyond experimentation and begins influencing core
              operations, executives require more than confidence. They require
              verified evidence that systems remain governable, auditable, and
              accountable under real enterprise conditions.
            </p>

            {/* Reinforcement */}
            <p className="mt-5 max-w-3xl mx-auto text-base leading-relaxed text-white/65">
              This executive review walks through documented execution proof  
              anonymized, enterprise-grade signals demonstrating how AI behaves
              under governance pressure, operational scale, and sustained scrutiny.
            </p>

            {/* CTA actions */}
            <div className="mt-14 flex flex-wrap justify-center gap-8">
              <ButtonLink
                href="/contact"
                variant="primary"
                className="px-12 py-4 text-base"
              >
                Request Executive Proof Review
              </ButtonLink>

              <ButtonLink
                href="/arisex"
                variant="secondary"
                className="px-12 py-4 text-base"
              >
                Understand the Execution Framework
              </ButtonLink>
            </div>

            {/* Trust & confidence line */}
            <p className="mt-10 max-w-xl mx-auto text-sm leading-relaxed text-white/55">
              Conducted privately for executives, boards, and risk leadership.
              No marketing material. No case studies. No testimonials.
            </p>
          </div>
        </div>
      </Section>

    </>
  );
}
