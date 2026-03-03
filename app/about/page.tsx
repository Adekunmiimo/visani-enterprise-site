"use client";

import Image from "next/image";
import { useMemo } from "react";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

type Pillar = {
  title: string;
  desc: string;
};

function MiniIcon({
  kind,
  className = "",
}: {
  kind: "shield" | "owner" | "ops" | "value";
  className?: string;
}) {
  const base = `h-5 w-5 ${className}`;
  const stroke = 1.9;

  if (kind === "shield") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={base}
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3l8 4v6c0 5-3.5 8-8 8s-8-3-8-8V7l8-4z" />
        <path d="M9 12l2 2 4-5" />
      </svg>
    );
  }

  if (kind === "owner") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={base}
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21a8 8 0 10-16 0" />
        <path d="M12 11a4 4 0 100-8 4 4 0 000 8z" />
        <path d="M16.5 14.5l2 2 4-4" transform="translate(-1 -1)" />
      </svg>
    );
  }

  if (kind === "ops") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={base}
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M4.93 19.07l2.83-2.83" />
        <path d="M16.24 7.76l2.83-2.83" />
        <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={base}
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 3h11a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
      <path d="M7 7h13" />
      <path d="M7 12h13" />
      <path d="M7 17h13" />
      <path d="M4 5v14" />
    </svg>
  );
}

export default function AboutPage() {
  useRevealOnScroll();

  const sectionDark =
    "bg-gradient-to-b from-[#F3F6FA] via-[#EEF2F7] to-[#E6ECF4]";
  const sectionDarkAlt =
    "bg-gradient-to-b from-[#F6F8FC] via-[#F0F4F9] to-[#E8EEF7]";

  const cardBase =
    "rounded-2xl bg-white/92 ring-1 ring-black/10 shadow-[0_18px_60px_-34px_rgba(2,6,23,0.45)] backdrop-blur-[2px]";
  const cardSoft =
    "rounded-2xl bg-white/88 ring-1 ring-black/8 shadow-[0_16px_52px_-32px_rgba(2,6,23,0.40)] backdrop-blur-[2px]";
  const cardHover =
    "transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_80px_-38px_rgba(2,6,23,0.55)]";

  const img = useMemo(
    () => ({
      hero: "/about-hero-bg.jpg",
      right: "/aboutimg.jpg",
      execution: "/about-execution.jpg",
      position: "/about-position-bg.jpg",
      principles: "/execution-principles-bg.jpg",
    }),
    []
  );

  const focusPillars: Pillar[] = useMemo(
    () => [
      {
        title: "Operating model",
        desc: "Decision rights, governance cadence, roles, and accountability that survive scale.",
      },
      {
        title: "Execution control",
        desc: "Permissioned execution boundaries and controls embedded before incidents.",
      },
      {
        title: "Integration & change",
        desc: "Workflow integration, adoption signals, incentives, and operating rhythms.",
      },
      {
        title: "Measurement",
        desc: "Value ledger + risk ledger leaders can explain, govern, and defend.",
      },
    ],
    []
  );

  const principles = useMemo(
    () => [
      { title: "Governance before scale" },
      { title: "Ownership is explicit" },
      { title: "Execution over experimentation" },
      { title: "Value must be defensible" },
    ],
    []
  );

  const mandateCards = useMemo(
    () => [
      {
        title: "Pilot phase",
        desc: "Value discovery, experimentation, technical feasibility.",
      },
      {
        title: "Operationalization",
        desc: "Workflow integration, adoption durability, process discipline.",
      },
      {
        title: "Executive infrastructure",
        desc: "Governance enforcement, audit evidence, measurable value defense.",
      },
    ],
    []
  );

  const lifecycle = useMemo(
    () => [
      { n: "01", t: "Strategic authorization", d: "Leadership authorizes scope, accountability, and constraints." },
      { n: "02", t: "Operational ownership", d: "Named owners are accountable for outcomes and risk exposure." },
      { n: "03", t: "Control architecture", d: "Approval gates, boundaries, and policies are designed before scale." },
      { n: "04", t: "Runtime enforcement", d: "Execution is permissioned, logged, and reviewable under scrutiny." },
      { n: "05", t: "Outcome cadence", d: "Value + risk are reviewed and defended on executive cadence." },
    ],
    []
  );

  return (
    <>
      {/* ================= ABOUT HERO ================= */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={img.hero}
            alt="About Visani America — executive AI execution advisory"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div
          className="pointer-events-none absolute -top-20 left-1/2 h-64 w-[min(900px,92vw)] -translate-x-1/2 opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(96,165,250,0.18), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                About
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Visani America
                <span className="block text-white/85">
                  Enterprise AI Execution Advisory
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">
                Visani America helps enterprises move beyond AI experimentation by transforming proven capabilities into governed, controllable, and accountable operating systems.
              </p>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65">
                Our work begins after pilots succeed — when leadership must ensure AI can operate reliably under board oversight, regulatory scrutiny, operational risk, and real business pressure.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Executive Control", "Governance Clarity", "Defensible Outcomes"].map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href="/contact#briefing" variant="primary">
                  Book Executive Briefing
                </ButtonLink>
                <ButtonLink href="/downloads/board-brief.pdf" variant="secondary">
                  Download Board Brief (PDF)
                </ButtonLink>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/15 bg-black shadow-[0_60px_130px_-45px_rgba(0,0,0,0.75)]">
                <Image
                  src={img.right}
                  alt="Executive leadership, governance, and disciplined enterprise execution"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>

              <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/60">
                Execution discipline, governance clarity, and enterprise accountability.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ================= WHY WE EXIST ================= */}
      <Section className={`relative overflow-hidden ${sectionDarkAlt} reveal`}>
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-muted">
                The scale problem
              </p>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-brand-slate sm:text-4xl">
                AI proves value in pilots.
                <span className="block text-brand-slate/85">Execution breaks at scale.</span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-brand-muted">
                Enterprises rarely fail because AI technology falls short. Failure happens when successful pilots collide with operating reality and expose unresolved questions of ownership, authorization, controls at runtime, risk review, and value defensibility.
              </p>

              <p className="mt-5 text-base leading-relaxed text-brand-muted">
                As AI becomes embedded in core functions, ambiguity becomes material risk. Confidence erodes, scrutiny rises, and progress stalls.
              </p>

              <div className={`${cardSoft} mt-8 p-6`}>
                <p className="text-sm leading-relaxed text-brand-muted">
                  Visani America exists to replace ambiguity with an execution system leaders can operate, review, and sustain under executive, board, and regulatory oversight.
                </p>
              </div>
            </div>

            <div className={`${cardBase} overflow-hidden p-0`}>
              <div className="relative aspect-[16/10]">
                <Image
                  src={img.execution}
                  alt="Disciplined enterprise execution systems"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              <div className="p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
                  What we reinforce
                </p>

                <ul className="mt-6 space-y-4">
                  {[
                    "Executive control: ownership, decision rights, and accountability",
                    "Governance clarity: controls before scale, not after incidents",
                    "Operating cadence: review rhythms leaders can sustain",
                    "Defensible outcomes: evidence that holds up under scrutiny",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-brand-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/35" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="/services" variant="secondary">
                    View Services
                  </ButtonLink>
                  <ButtonLink href="/proof/library" variant="secondary">
                    View Proof Library (Redacted)
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {focusPillars.map((p) => (
              <div key={p.title} className={`${cardBase} ${cardHover} p-7`}>
                <p className="text-sm font-semibold text-brand-slate">{p.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* ================= ENTERPRISE MANDATE (NEW) ================= */}
          <div className="mt-14">
            <div className={`${cardBase} p-8 sm:p-10`}>
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-muted">
                  Enterprise mandate
                </p>

                <h3 className="mt-6 text-3xl font-semibold text-brand-slate sm:text-4xl">
                  AI is no longer experimental infrastructure
                </h3>

                <p className="mt-6 text-base leading-relaxed text-brand-muted">
                  Once AI begins influencing revenue, operations, compliance, or customer experience, it becomes executive infrastructure.
                </p>

                <p className="mt-5 text-base leading-relaxed text-brand-muted">
                  Infrastructure requires governance architecture. Governance architecture requires ownership clarity. Ownership clarity requires executive discipline.
                </p>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {mandateCards.map((x) => (
                  <div
                    key={x.title}
                    className="rounded-3xl border border-black/10 bg-white/80 p-8 shadow-[0_18px_55px_-40px_rgba(0,0,0,0.35)]"
                  >
                    <p className="text-sm font-semibold text-brand-slate">{x.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">{x.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= EXECUTION LIFECYCLE (NEW) ================= */}
          <div className="mt-12">
            <div className={`${cardBase} p-8 sm:p-10`}>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-muted">
                Execution lifecycle
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-brand-slate">
                The AI governance stack
              </h3>

              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-brand-muted">
                Every scalable AI capability must pass through five enforcement layers. This is how pilots become governable enterprise operating systems.
              </p>

              <div className="mt-10 space-y-8">
                {lifecycle.map((s) => (
                  <div key={s.t} className="flex gap-6 items-start">
                    <div className="text-2xl font-semibold text-brand-slate">{s.n}</div>
                    <div>
                      <p className="text-base font-semibold text-brand-slate">{s.t}</p>
                      <p className="mt-2 text-sm leading-relaxed text-brand-muted">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href="/services" variant="secondary">
                  View Services
                </ButtonLink>
                <ButtonLink href="/contact#briefing" variant="primary">
                  Book Executive Briefing
                </ButtonLink>
              </div>
            </div>
          </div>

        </div>
      </Section>

      {/* ================= OUR POSITION (DARK IMAGE) ================= */}
      <Section className="relative overflow-hidden reveal">
        <div className="absolute inset-0">
          <Image
            src={img.position}
            alt="Our position background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/70 to-black/85" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/65">
                Our position
              </p>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Clear by design.
                <span className="block text-white/85">Deliberate by intent.</span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-white/80">
                Visani America occupies a deliberately narrow position in the AI ecosystem. We do not compete with vendors, platforms, or integrators. We are not an experimentation arm.
              </p>

              <p className="mt-5 text-base leading-relaxed text-white/75">
                We step in when leadership must ensure AI can operate inside the enterprise with control, accountability, and measurable outcomes — under scrutiny.
              </p>

              <p className="mt-6 text-base leading-relaxed text-white/85 font-medium">
                Our role is to reinforce executive control — not dilute it.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href="/contact#briefing" variant="primary">
                  Book Executive Briefing
                </ButtonLink>
                <ButtonLink href="/insights" variant="secondary">
                  Read Executive Briefs
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  t: "What we are not",
                  d: "Not a vendor, systems integrator, innovation lab, or transformation program.",
                },
                {
                  t: "What we are",
                  d: "An execution system advisor helping enterprises design, govern, and operate AI as a core capability.",
                },
                {
                  t: "Where we engage",
                  d: "When AI becomes material to performance, risk exposure, and executive accountability.",
                },
                {
                  t: "What we protect",
                  d: "Executive control, governance clarity, and defensible outcomes under board and regulatory scrutiny.",
                },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-[28px] border border-white/15 bg-white/10 px-8 py-9 backdrop-blur-md shadow-[0_45px_130px_-40px_rgba(0,0,0,0.7)]"
                >
                  <p className="text-sm font-semibold text-white">{x.t}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ================= HOW WE THINK (LIGHT) ================= */}
      <Section className={`relative overflow-hidden ${sectionDark} reveal`}>
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
        <div
          className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(96,165,250,0.18), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
              How we think
            </p>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-brand-slate sm:text-4xl">
              Execution before optimism
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-brand-muted">
              We evaluate AI using the same standards executives apply to any material operating capability:
              ownership, enforceable controls, risk posture, incentive alignment, and sustained outcomes.
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-brand-muted">
              If AI cannot be governed, explained, and defended under pressure, it is not ready to scale —
              regardless of technical performance.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "owner" as const,
                title: "Ownership first",
                desc: "Every AI capability has clear executive and operational accountability.",
              },
              {
                icon: "shield" as const,
                title: "Governance built in",
                desc: "Controls embedded before scale, not retrofitted after incidents.",
              },
              {
                icon: "ops" as const,
                title: "Risk explicit",
                desc: "Exposure reviewed and managed like enterprise risk.",
              },
              {
                icon: "value" as const,
                title: "Outcomes defendable",
                desc: "Value measurable and credible to boards and regulators.",
              },
            ].map((x) => (
              <div key={x.title} className={`${cardBase} ${cardHover} p-8 text-center`}>
                <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-black/5 ring-1 ring-inset ring-black/10 text-black/70">
                  <MiniIcon kind={x.icon} className="text-black/70" />
                </div>
                <p className="mt-5 text-sm font-semibold text-brand-slate">{x.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= OPERATING PRINCIPLES (DARK IMAGE) ================= */}
      <Section className="relative overflow-hidden reveal">
        <div className="absolute inset-0">
          <Image
            src={img.principles}
            alt="Execution principles background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/70 to-black/90" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/65">
              How we operate
            </p>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Execution principles
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/80">
              Every engagement is governed by principles designed to preserve executive authority,
              organizational trust, and operational integrity under real enterprise conditions.
            </p>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div
                key={p.title}
                className="group rounded-[28px] border border-white/15 bg-white/10 px-8 py-10 text-center backdrop-blur-md shadow-[0_45px_130px_-40px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <p className="text-base font-semibold text-white">{p.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Built to survive scale, scrutiny, and executive accountability.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/proof/library" variant="secondary">
              View Proof Library (Redacted)
            </ButtonLink>
            <ButtonLink href="/contact#briefing" variant="primary">
              Book Executive Briefing
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* ================= GLOBAL REVEAL STYLES ================= */}
      <style jsx global>{`
        html,
        body {
          width: 100%;
          overflow-x: hidden;
        }

        body {
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .reveal {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease;
          will-change: opacity, transform;
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal {
            transition: none;
            transform: none;
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}