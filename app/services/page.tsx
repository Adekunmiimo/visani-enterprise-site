"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

type CoreIcon =
  | "briefing"
  | "operating"
  | "roadmap"
  | "integration"
  | "adoption"
  | "governance";

type EcosystemIcon = "id" | "lock" | "data" | "ops" | "flow";

function FillImage({
  src,
  alt,
  priority,
  className = "object-cover",
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      className={className}
      sizes={sizes}
    />
  );
}

export default function ServicesPage() {
  useRevealOnScroll();

  // ✅ Theme tokens aligned with Home
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
  const tileShadow =
    "shadow-[0_14px_44px_-28px_rgba(2,6,23,0.40)] ring-1 ring-black/10";

  /**
   * ✅ IMPORTANT FIX
   * Your images are directly under /public (no /public/services folder)
   * So paths must be "/filename.jpg" not "/services/filename.jpg"
   */
  const img = useMemo(
    () => ({
      hero: "/positioning.jpg",
      exec: "/exec-briefing.jpg",
      readiness: "/readiness.jpg",
      roadmap: "/roadmap.jpg",
      integration: "/workflow-integration.jpg",
      adoption: "/adoption.jpg",
      governance: "/governance.jpg",
      ecosystem: "/ecosystem.jpg",
      outcomes: "/outcomes.jpg",
      positioning: "/positioning.jpg",
      cta: "/governance.jpg",
    }),
    []
  );

  const coreServices = useMemo(
    () =>
      [
        {
          title: "Executive Briefing & Decision Alignment",
          desc:
            "Align outcomes, constraints, and decision rights. Clarify what AI is allowed to do and how leadership will govern it.",
          icon: "briefing" as const,
          image: img.exec,
          chips: ["Decision Rights", "Outcome Alignment", "Executive Cadence"],
          deliverables: [
            "Outcome and constraint alignment",
            "Decision rights + ownership outline",
            "Recommended next step (assessment or roadmap)",
          ],
        },
        {
          title: "Readiness Assessment & Operating Model Design",
          desc:
            "Baseline maturity across data, workflows, controls, and organizational readiness—then design the operating model that holds at scale.",
          icon: "operating" as const,
          image: img.readiness,
          chips: ["Baseline", "Roles & Cadence", "Control Gaps"],
          deliverables: [
            "Baseline assessment summary",
            "Operating cadence + role clarity",
            "Control gaps + risk posture",
          ],
        },
        {
          title: "Pilot-to-Scale Roadmap",
          desc:
            "Turn successful pilots into a sequenced plan with dependencies, governance checkpoints, and measurement—so scale doesn’t create risk.",
          icon: "roadmap" as const,
          image: img.roadmap,
          chips: ["Sequencing", "Dependencies", "Checkpoints"],
          deliverables: [
            "Sequenced roadmap + dependencies",
            "Governance checkpoints",
            "Measurement plan (value + risk signals)",
          ],
        },
        {
          title: "AI Delivery & Workflow Integration",
          desc:
            "Embed AI into real operating workflows, with controlled deployment paths and accountability—beyond isolated demos and pilots.",
          icon: "integration" as const,
          image: img.integration,
          chips: ["Workflow", "Rollback", "Runbooks"],
          deliverables: [
            "Workflow integration plan",
            "Controlled deployment/rollback pattern",
            "Operational handoff + runbook outline",
          ],
        },
        {
          title: "Adoption & Change Enablement",
          desc:
            "Drive sustained usage by building enablement, operating routines, and compliance signals into how teams work day to day.",
          icon: "adoption" as const,
          image: img.adoption,
          chips: ["Enablement", "Signals", "Accountability"],
          deliverables: [
            "Enablement plan + completion tracking",
            "Adoption signals and accountability rhythm",
            "Behavior-change reinforcement mechanisms",
          ],
        },
        {
          title: "Governance, Risk & Value Measurement",
          desc:
            "Build evidence, telemetry, and executive-ready reporting so value is defensible under board oversight and audit scrutiny.",
          icon: "governance" as const,
          image: img.governance,
          chips: ["Evidence", "Telemetry", "Board Metrics"],
          deliverables: [
            "Value ledger + risk ledger structure",
            "Evidence artifacts + decision traceability",
            "Executive cadence reporting template",
          ],
        },
      ] as const,
    [img]
  );

  const ecosystemBullets = useMemo(
    () =>
      [
        {
          title: "Identity & Access",
          desc: "SSO/IAM alignment, role-based controls, least-privilege execution",
          icon: "id" as const,
        },
        {
          title: "Security & Risk",
          desc: "Policy mapping, model/data usage controls, evidence and audit trails",
          icon: "lock" as const,
        },
        {
          title: "Data & Platforms",
          desc: "Data readiness, lineage considerations, governance workflows",
          icon: "data" as const,
        },
        {
          title: "Operations & Observability",
          desc: "Runtime telemetry, performance monitoring, incident response patterns",
          icon: "ops" as const,
        },
        {
          title: "Workflow & Automation",
          desc: "Controlled deployment paths, approvals, rollback, accountability",
          icon: "flow" as const,
        },
      ] as const,
    []
  );

  const representativeOutcomes = useMemo(
    () =>
      [
        {
          title: "AI-to-Value Cycle Time",
          metric:
            "Typical improvement: 30–60% faster from approved use case → production value signal",
          evidence:
            "Evidence produced: decision log, rollout cadence, value ledger entries",
          icon: "speed" as const,
        },
        {
          title: "Operational Efficiency & Capacity Redeployment",
          metric:
            "Typical outcome: 8–20% capacity redeployed in targeted functions",
          evidence:
            "Evidence produced: before/after workload baseline, adoption telemetry, policy-controlled automation logs",
          icon: "capacity" as const,
        },
        {
          title: "Risk Reduction & Audit Readiness",
          metric:
            "Typical outcome: 40–70% reduction in “uncontrolled AI activity” (shadow agents, unapproved workflows, untracked data usage)",
          evidence:
            "Evidence produced: agent registry, permissioned execution policies, audit trail coverage map",
          icon: "shield" as const,
        },
        {
          title: "Adoption & Behavior Change",
          metric:
            "Typical outcome: 25–55% increase in sustained adoption within priority user groups",
          evidence:
            "Evidence produced: usage telemetry, enablement completion, workflow compliance signals",
          icon: "adoption" as const,
        },
      ] as const,
    []
  );

  function ServiceIcon({ name }: { name: CoreIcon }) {
    const base = "h-6 w-6 text-brand-slate";
    const stroke = 1.8;

    if (name === "briefing") {
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h7l3 3v15H7V3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v4h4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 11h6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15h4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 14l2 2-2 2" />
        </svg>
      );
    }
    if (name === "operating") {
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 17h16" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 10l2 2-2 2" />
        </svg>
      );
    }
    if (name === "roadmap") {
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 5v14" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h8l-2 2 2 2H6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 9h4a2 2 0 012 2v8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 19h4" />
        </svg>
      );
    }
    if (name === "integration") {
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h7v7H4V4z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 13h7v7h-7v-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 13l2-2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l2 2" />
        </svg>
      );
    }
    if (name === "adoption") {
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 11c1.7 0 3 1.3 3 3v4H5v-4c0-1.7 1.3-3 3-3"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 12a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20h6" />
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
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3l8 4v6c0 5-3.5 8-8 8s-8-3-8-8V7l8-4z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8" />
      </svg>
    );
  }

  function EcosystemIconMark({ name }: { name: EcosystemIcon }) {
    const base = "h-6 w-6 text-brand-slate";
    const stroke = 1.7;

    if (name === "id") {
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10H7z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6" />
        </svg>
      );
    }
    if (name === "lock") {
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 11V8a5 5 0 0110 0v3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 11h12v10H6z" />
        </svg>
      );
    }
    if (name === "data") {
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
        >
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"
          />
        </svg>
      );
    }
    if (name === "ops") {
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 19V9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 19v-5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 19V11" />
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
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h6v6H7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10h4a3 3 0 013 3v1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 13v4a3 3 0 003 3h1" />
      </svg>
    );
  }

  return (
    <>
      {/* HERO */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <FillImage src={img.hero} alt="AI Execution Advisory" priority />
        </div>

        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/85" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div
          className="pointer-events-none absolute -top-16 left-1/2 h-56 w-[min(900px,92vw)] -translate-x-1/2 opacity-55 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(96,165,250,0.22), transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/65">
                Services
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                AI Execution
                <span className="block text-white/85">Advisory &amp; Delivery</span>
              </h1>

              <p className="mt-8 text-lg leading-relaxed text-white/80 sm:text-xl">
                We help enterprise leaders move from isolated pilots to governed,
                scalable execution—without losing control, trust, or accountability.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Execution Control", "Runtime Governance", "Board Metrics"].map((b) => (
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

            <div className="relative lg:flex lg:justify-end">
              <div className="w-full max-w-lg">
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/15 bg-black shadow-[0_60px_120px_-40px_rgba(0,0,0,0.85)]">
                  <FillImage
                    src={img.exec}
                    alt="Enterprise AI advisory and execution services"
                    priority
                    className="object-cover object-[center_top]"
                    sizes="(min-width: 1024px) 480px, 100vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  Designed to integrate AI into real enterprise operating models
                  with clear governance and defensible outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* EXECUTION REALITY */}
      <Section className={`relative overflow-hidden ${sectionDarkAlt} reveal`}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F6F8FC] via-[#F0F4F9] to-[#E8EEF7]" />
        <div
          className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full opacity-35 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(74,222,128,0.16), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                Execution Reality
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-brand-slate sm:text-4xl">
                Designed for enterprise execution
                <span className="block">not experimentation</span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-brand-muted">
                Most AI initiatives stall after early success—not because the technology fails,
                but because execution lacks structure, governance, and ownership.
              </p>

              <p className="mt-4 text-base leading-relaxed text-brand-muted">
                Our services align leadership intent, embed AI into real operating workflows,
                and establish metrics executives can defend in board review, audit, and operational scrutiny.
              </p>

              <div className={`${cardSoft} mt-8 p-6`}>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                  What we eliminate
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  Ambiguity in ownership, decision rights, and accountability—before scale turns it into risk.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              <div className={`${cardBase} overflow-hidden`}>
                <div className="relative h-44 sm:h-48">
                  <FillImage
                    src={img.positioning}
                    alt="Enterprise execution environment"
                    sizes="(min-width: 1024px) 560px, 100vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-brand-slate">
                    AI proves value in pilots. Execution breaks at scale.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    We make execution governable before adoption and automation introduce risk.
                  </p>
                </div>
              </div>

              {[
                {
                  title: "Leadership alignment",
                  desc: "Decision rights, ownership, and sponsorship defined before scale introduces risk.",
                },
                {
                  title: "Embedded execution",
                  desc: "AI integrated into operational workflows—not isolated pilots.",
                },
                {
                  title: "Defensible measurement",
                  desc: "Outcome and risk signals leaders can govern and stand behind.",
                },
              ].map((item) => (
                <div key={item.title} className={`${cardBase} ${cardHover} p-7`}>
                  <p className="text-sm font-semibold text-brand-slate">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CORE SERVICES */}
      <Section className={`relative overflow-hidden ${sectionDark} reveal`}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F3F6FA] via-[#EEF2F7] to-[#E6ECF4]" />
        <div
          className="pointer-events-none absolute -left-24 top-14 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(96,165,250,0.18), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
              Core Services
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-brand-slate">
              Execution-first services leaders can run
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-muted">
              These services convert AI ambition into a governed execution system—operated with clear decision rights,
              permissioned controls, and measurable outcomes.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((item) => (
              <Link
                key={item.title}
                href="/contact#briefing"
                className={`${cardBase} ${cardHover} group block overflow-hidden`}
              >
                <div className="relative h-44">
                  <FillImage
                    src={item.image}
                    alt={item.title}
                    sizes="(min-width: 1024px) 420px, 100vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    {item.chips.map((c) => (
                      <span
                        key={c}
                        className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-start gap-4">
                    <div
                      className={`mt-0.5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/85 ${tileShadow} transition-transform duration-300 group-hover:scale-105`}
                    >
                      <ServiceIcon name={item.icon} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-base font-semibold text-brand-slate">{item.title}</p>
                      <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.desc}</p>
                    </div>
                  </div>

                  <div className={`${cardSoft} mt-6 p-5`}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                      Typical deliverables
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-brand-muted">
                      {item.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <span
                            className={`mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/85 text-xs font-semibold text-brand-slate ${tileShadow}`}
                          >
                            →
                          </span>
                          <span className="leading-relaxed">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-slate">
                    <span>Request briefing</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* ENGAGEMENT MODEL */}
      <Section className={`relative overflow-hidden ${sectionDarkAlt} reveal`}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F6F8FC] via-[#F0F4F9] to-[#E8EEF7]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div className={`${cardBase} overflow-hidden`}>
              <div className="relative h-52">
                <FillImage
                  src={img.roadmap}
                  alt="Engagement cadence"
                  sizes="(min-width: 1024px) 560px, 100vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute left-6 bottom-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                    Engagement Model
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    A clear path from clarity to scale
                  </p>
                </div>
              </div>

              <div className="p-8">
                <p className="text-sm leading-relaxed text-brand-muted">
                  Disciplined cadence that increases control, confidence, and momentum as AI moves into real operations.
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    { t: "Week 1–2", d: "Executive briefing + decision rights alignment" },
                    { t: "Week 2–4", d: "Readiness + operating model design" },
                    { t: "Week 4–6", d: "Roadmap + delivery plan" },
                  ].map((x) => (
                    <div key={x.t} className={`${cardSoft} flex items-start gap-4 p-5`}>
                      <div
                        className={`shrink-0 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-brand-slate ${tileShadow}`}
                      >
                        {x.t}
                      </div>
                      <p className="text-sm leading-relaxed text-brand-muted">{x.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${cardBase} px-8 py-12 sm:px-10 sm:py-16`}>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                Typical steps
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-slate">
                How engagements typically work
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-muted">
                Each phase builds control, confidence, and momentum so leaders can govern progress as AI moves into operations.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Executive briefing and outcome alignment",
                  "Readiness assessment and operating model design",
                  "Pilot-to-scale roadmap",
                  "Delivery and adoption sprints",
                  "Governance and value review cadence",
                ].map((step, i) => (
                  <div
                    key={step}
                    className={`${cardSoft} ${cardHover} flex items-start gap-5 px-6 py-5`}
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/85 text-xs font-semibold text-brand-slate ${tileShadow}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-brand-slate">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href="/downloads/control-plane-checklist.pdf" variant="primary">
                  Download Control Plane Checklist
                </ButtonLink>
                <ButtonLink href="/contact#briefing" variant="secondary">
                  Book Executive Briefing
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ECOSYSTEM */}
      <Section className={`relative overflow-hidden ${sectionDark} reveal`}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F3F6FA] via-[#EEF2F7] to-[#E6ECF4]" />
        <div
          className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full opacity-35 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(74,222,128,0.16), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div className={`${cardBase} overflow-hidden`}>
              <div className="relative h-56">
                <FillImage
                  src={img.ecosystem}
                  alt="Ecosystem ready and vendor neutral"
                  sizes="(min-width: 1024px) 560px, 100vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute left-6 bottom-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                    Ecosystem
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Vendor-neutral by default
                  </p>
                </div>
              </div>

              <div className="p-8">
                <p className="text-sm leading-relaxed text-brand-muted">
                  We partner with your existing teams and providers to operationalize AI at enterprise scale
                  without locking you into a single vendor path.
                </p>

                <div className={`${cardSoft} mt-6 p-6`}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                    How we work
                  </p>
                  <div className="mt-4 grid gap-3 text-sm text-brand-muted">
                    <p>• Align decision rights and governance boundaries</p>
                    <p>• Implement permissioned execution + monitoring</p>
                    <p>• Prove value with an outcome ledger leaders can defend</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4">
                    <ButtonLink href="/#control-plane" variant="primary">
                      View Control Plane
                    </ButtonLink>
                    <ButtonLink href="/contact#briefing" variant="secondary">
                      Book Executive Briefing
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {ecosystemBullets.map((b) => (
                <div key={b.title} className={`${cardBase} ${cardHover} p-7`}>
                  <div className="flex items-start gap-3">
                    <div className={`mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/85 ${tileShadow}`}>
                      <EcosystemIconMark name={b.icon} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-brand-slate">{b.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-brand-muted">{b.desc}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className={`${cardBase} ${cardHover} p-7 sm:col-span-2`}>
                <p className="text-sm font-semibold text-brand-slate">Prefer a redacted proof review?</p>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  We can walk through sample artifacts, evidence patterns, and outcome ledgers leaders can defend.
                </p>
                <div className="mt-5 flex flex-wrap gap-4">
                  <ButtonLink href="/proof" variant="primary">
                    Request Proof Review
                  </ButtonLink>
                  <ButtonLink href="/contact#briefing" variant="secondary">
                    Book Executive Briefing
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* REPRESENTATIVE OUTCOMES */}
      <Section className={`relative overflow-hidden ${sectionDarkAlt} reveal`}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F6F8FC] via-[#F0F4F9] to-[#E8EEF7]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-3 lg:gap-12">
            <div className={`${cardBase} overflow-hidden lg:col-span-1`}>
              <div className="relative h-56">
                <FillImage
                  src={img.outcomes}
                  alt="Representative outcomes"
                  sizes="(min-width: 1024px) 420px, 100vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute left-6 bottom-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                    Representative Outcomes
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Defensible impact ranges
                  </p>
                </div>
              </div>

              <div className="p-8">
                <p className="text-sm leading-relaxed text-brand-muted">
                  Results vary by baseline maturity, scope, and adoption. A baseline assessment determines the expected band.
                </p>

                <div className={`${cardSoft} mt-6 p-6`}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">Note</p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                    Ranges are anonymized and reflect typical outcomes from enterprise execution programs.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <ButtonLink href="/proof" variant="primary">
                    Request Proof Review
                  </ButtonLink>
                  <ButtonLink href="/contact#briefing" variant="secondary">
                    Book Executive Briefing
                  </ButtonLink>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid gap-8 sm:grid-cols-2">
                {representativeOutcomes.map((o) => (
                  <div
                    key={o.title}
                    className={`${cardBase} ${cardHover} group relative overflow-hidden p-8`}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(900px 300px at 10% 0%, rgba(96,165,250,0.18), transparent 55%)",
                      }}
                    />

                    <p className="relative z-10 text-sm font-semibold text-brand-slate">
                      {o.title}
                    </p>
                    <p className="relative z-10 mt-3 text-sm leading-relaxed text-brand-muted">
                      {o.metric}
                    </p>

                    <div className={`${cardSoft} relative z-10 mt-5 p-4`}>
                      <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                        Evidence
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                        {o.evidence}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* POSITIONING */}
      <Section className={`relative overflow-hidden ${sectionDark} reveal`}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F3F6FA] via-[#EEF2F7] to-[#E6ECF4]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className={`${cardBase} overflow-hidden`}>
            <div className="relative h-52">
              <FillImage
                src={img.positioning}
                alt="Positioning"
                sizes="(min-width: 1024px) 1120px, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute left-8 bottom-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  Our Position
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  Built for leaders accountable for real outcomes
                </p>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <p className="max-w-3xl text-base leading-relaxed text-brand-muted">
                Most AI initiatives fail after early success because execution is treated as a technical problem.
                We approach AI as an enterprise operating challenge—governed, measured, and led with explicit decision rights.
              </p>

              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <div className={`${cardSoft} p-8`}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                    Typical Market Approach
                  </p>

                  <ul className="mt-6 space-y-4">
                    {[
                      "Tool-first recommendations",
                      "Disconnected pilots and experiments",
                      "Governance added after deployment",
                      "Success measured by demos, not outcomes",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-brand-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/30" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${cardBase} relative p-8`}>
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(96,165,250,0.85), rgba(74,222,128,0.75))",
                    }}
                  />
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                    Our Approach
                  </p>

                  <ul className="mt-6 space-y-4">
                    {[
                      "Leadership-aligned outcomes first",
                      "AI embedded into real operating workflows",
                      "Governance and risk designed in from day one",
                      "Value measured on an executive cadence",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-brand-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/45" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`${cardSoft} mt-8 p-6`}>
                    <p className="text-sm leading-relaxed text-brand-muted">
                      This is why our work holds up in boardrooms, audits, and operational reality—not just innovation labs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href="/contact#briefing" variant="primary">
                  Book Executive Briefing
                </ButtonLink>
                <ButtonLink href="/proof/library" variant="secondary">
                  View Proof Library (Redacted)
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* EXECUTIVE CTA */}
      <Section className={`relative overflow-hidden ${sectionDarkAlt} reveal`}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F6F8FC] via-[#F0F4F9] to-[#E8EEF7]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
            <div className={`${cardBase} overflow-hidden`}>
              <div className="relative h-full min-h-[260px]">
                <FillImage
                  src={img.cta}
                  alt="Executive call to action"
                  sizes="(min-width: 1024px) 560px, 100vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
                <div className="absolute left-8 top-8 max-w-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Next Step</p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    Move from AI proof to enterprise control
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Designed for leaders accountable to boards, regulators, and real-world outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${cardBase} px-8 py-12 sm:px-10 sm:py-16`}>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                Ready to talk?
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-slate sm:text-4xl">
                Book a briefing built for executives
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-muted">
                If your organization has proven AI can work, the next step is making it governable, scalable,
                and defensible under executive oversight.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href="/contact#briefing" variant="primary">
                  Book Executive Briefing
                </ButtonLink>
                <ButtonLink href="/proof/library" variant="secondary">
                  View Proof Library (Redacted)
                </ButtonLink>
              </div>

              <div className={`${cardSoft} mt-8 p-6`}>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                  What to expect
                </p>
                <div className="mt-3 grid gap-2 text-sm text-brand-muted">
                  <p>• 30 minutes focused on decision rights, controls, and measurable outcomes</p>
                  <p>• Clear next steps and recommended engagement path</p>
                  <p>• Optional redacted proof review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* global reveal styles */}
      <style jsx global>{`
        html,
        body {
          width: 100%;
          overflow-x: hidden;
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