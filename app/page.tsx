// ✅ REPLACE ENTIRE FILE — app/page.tsx (HomePage)

"use client";

import { useMemo } from "react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import Image from "next/image";
import { Section } from "@/components/section";
import { CinematicSection } from "@/components/cinematic-section";
import { CTABand } from "@/components/cta-band";
import { ButtonLink } from "@/components/button";

export default function HomePage() {
  useRevealOnScroll();

  // ✅ Representative Outcomes (Anonymized Ranges) — stakeholder copy
  const representativeOutcomes = useMemo(
    () =>
      [
        {
          title: "AI-to-Value Cycle Time",
          metric:
            "Typical improvement: 30–60% faster from approved use case → production value signal",
          evidence:
            "Evidence produced: decision log, rollout cadence, value ledger entries",
          icon: "speed",
        },
        {
          title: "Operational Efficiency & Capacity Redeployment",
          metric:
            "Typical outcome: 8–20% capacity redeployed in targeted functions (IT, Ops, Customer, Shared Services)",
          evidence:
            "Evidence produced: before/after workload baseline, adoption telemetry, policy-controlled automation logs",
          icon: "capacity",
        },
        {
          title: "Risk Reduction & Audit Readiness",
          metric:
            "Typical outcome: 40–70% reduction in “uncontrolled AI activity” (shadow agents, unapproved workflows, untracked data usage)",
          evidence:
            "Evidence produced: agent registry, permissioned execution policies, audit trail coverage map",
          icon: "shield",
        },
        {
          title: "Adoption & Behavior Change",
          metric:
            "Typical outcome: 25–55% increase in sustained adoption within priority user groups",
          evidence:
            "Evidence produced: usage telemetry, enablement completion, workflow compliance signals",
          icon: "adoption",
        },
      ] as const,
    []
  );

  // ✅ Ecosystem bullets — stakeholder copy
  const ecosystemBullets = useMemo(
    () =>
      [
        {
          title: "Identity & Access",
          desc: "SSO/IAM alignment, role-based controls, least-privilege execution",
          icon: "id",
        },
        {
          title: "Security & Risk",
          desc: "policy mapping, model/data usage controls, evidence and audit trails",
          icon: "lock",
        },
        {
          title: "Data & Platforms",
          desc: "data readiness, lineage considerations, governance workflows",
          icon: "data",
        },
        {
          title: "Operations & Observability",
          desc: "runtime telemetry, performance monitoring, incident response patterns",
          icon: "ops",
        },
        {
          title: "Workflow & Automation",
          desc: "controlled deployment paths, approvals, rollback, and accountability",
          icon: "flow",
        },
      ] as const,
    []
  );

  // Light blue-gray section backgrounds (consistent, executive)
  const sectionDark =
    "bg-gradient-to-b from-[#F3F6FA] via-[#EEF2F7] to-[#E6ECF4]";
  const sectionDarkAlt =
    "bg-gradient-to-b from-[#F6F8FC] via-[#F0F4F9] to-[#E8EEF7]";

  // Stronger + cleaner cards
  const cardBase =
    "rounded-2xl bg-white/92 ring-1 ring-black/10 shadow-[0_18px_60px_-34px_rgba(2,6,23,0.45)] backdrop-blur-[2px]";
  const cardSoft =
    "rounded-2xl bg-white/88 ring-1 ring-black/8 shadow-[0_16px_52px_-32px_rgba(2,6,23,0.40)] backdrop-blur-[2px]";
  const cardDark =
    "rounded-2xl bg-black/55 ring-1 ring-white/10 shadow-[0_28px_90px_-56px_rgba(0,0,0,0.78)] backdrop-blur-md";
  const cardHover =
    "transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_80px_-38px_rgba(2,6,23,0.55)]";

  // Small chips/tiles (make them pop too)
  const tileShadow =
    "shadow-[0_14px_44px_-28px_rgba(2,6,23,0.40)] ring-1 ring-black/10";

  /**
   * ✅ ICON UPGRADE
   * - Premium icon treatment: gradient halo, ring, subtle shine, hover lift.
   */
  const iconWrap =
    "relative grid h-12 w-12 place-items-center rounded-2xl bg-white/85 ring-1 ring-black/10 shadow-[0_18px_52px_-34px_rgba(2,6,23,0.42)]";
  const iconGlow =
    "pointer-events-none absolute -inset-2 rounded-[18px] opacity-70 blur-xl";
  const iconShine =
    "pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100";
  const iconSvg =
    "h-6 w-6 text-brand-slate drop-shadow-[0_10px_18px_rgba(2,6,23,0.12)]";

  const OutcomeIcon = ({
    kind,
  }: {
    kind: (typeof representativeOutcomes)[number]["icon"];
  }) => {
    const glow =
      kind === "speed"
        ? "bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.38),transparent_60%)]"
        : kind === "capacity"
        ? "bg-[radial-gradient(circle_at_30%_20%,rgba(74,222,128,0.34),transparent_60%)]"
        : kind === "shield"
        ? "bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.30),transparent_60%)]"
        : "bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.30),transparent_60%)]";

    return (
      <div className="group relative">
        <div className={`${iconGlow} ${glow}`} />
        <div
          className={`${iconWrap} transition-transform duration-300 group-hover:-translate-y-0.5`}
        >
          <div
            className={iconShine}
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.55), transparent 45%)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/50" />

          {kind === "speed" && (
            <svg
              viewBox="0 0 24 24"
              className={iconSvg}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a9 9 0 109 9" />
              <path d="M12 12l4-2" />
              <path d="M3 12h3" />
              <path d="M12 21h0" />
            </svg>
          )}

          {kind === "capacity" && (
            <svg
              viewBox="0 0 24 24"
              className={iconSvg}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 7h16" />
              <path d="M4 12h10" />
              <path d="M4 17h16" />
              <path d="M16 10l2 2-2 2" />
              <path d="M18 12h2" />
            </svg>
          )}

          {kind === "shield" && (
            <svg
              viewBox="0 0 24 24"
              className={iconSvg}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3l8 4v6c0 5-3.5 8-8 8s-8-3-8-8V7l8-4z" />
              <path d="M9 12l2 2 4-5" />
            </svg>
          )}

          {kind === "adoption" && (
            <svg
              viewBox="0 0 24 24"
              className={iconSvg}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 11c1.7 0 3 1.3 3 3v4H5v-4c0-1.7 1.3-3 3-3" />
              <path d="M12 12a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
              <path d="M8.5 11.5l-1.5 1.5" />
              <path d="M15.5 11.5l1.5 1.5" />
            </svg>
          )}
        </div>
      </div>
    );
  };

  const EcosystemIcon = ({
    kind,
  }: {
    kind: (typeof ecosystemBullets)[number]["icon"];
  }) => {
    const glow =
      kind === "id"
        ? "bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.34),transparent_60%)]"
        : kind === "lock"
        ? "bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.28),transparent_60%)]"
        : kind === "data"
        ? "bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.28),transparent_60%)]"
        : kind === "ops"
        ? "bg-[radial-gradient(circle_at_30%_20%,rgba(74,222,128,0.30),transparent_60%)]"
        : "bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.26),transparent_60%)]";

    return (
      <div className="group relative">
        <div className={`${iconGlow} ${glow}`} />
        <div
          className={`${iconWrap} transition-transform duration-300 group-hover:-translate-y-0.5`}
        >
          <div
            className={iconShine}
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.55), transparent 45%)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/50" />

          {kind === "id" && (
            <svg
              viewBox="0 0 24 24"
              className={iconSvg}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h10v10H7z" />
              <path d="M9 10h6" />
              <path d="M9 13h6" />
              <path d="M7 17h10" />
            </svg>
          )}

          {kind === "lock" && (
            <svg
              viewBox="0 0 24 24"
              className={iconSvg}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 11V8a5 5 0 0110 0v3" />
              <path d="M6 11h12v10H6z" />
              <path d="M12 15v2" />
            </svg>
          )}

          {kind === "data" && (
            <svg
              viewBox="0 0 24 24"
              className={iconSvg}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <ellipse cx="12" cy="6" rx="7" ry="3" />
              <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
              <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
            </svg>
          )}

          {kind === "ops" && (
            <svg
              viewBox="0 0 24 24"
              className={iconSvg}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19V5" />
              <path d="M8 19V9" />
              <path d="M12 19V7" />
              <path d="M16 19v-5" />
              <path d="M20 19V11" />
            </svg>
          )}

          {kind === "flow" && (
            <svg
              viewBox="0 0 24 24"
              className={iconSvg}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h6v6H7z" />
              <path d="M13 10h4a3 3 0 013 3v1" />
              <path d="M10 13v4a3 3 0 003 3h1" />
              <path d="M6 10h1" />
            </svg>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* HERO (cinematic) */}
      <CinematicSection
        backgroundImage="/richheroimg.png"
        overlay="dark"
        reveal={false}
      >
        <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-32">
          <div
            className="pointer-events-none absolute -top-12 left-1/2 h-56 w-[min(720px,92vw)] -translate-x-1/2 opacity-35 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,255,255,0.12), transparent 70%)",
            }}
          />

          <div className="relative max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Enterprise AI Execution Advisory
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              AI Strategy Is Easy. AI Execution Is the Differentiator.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85">
              Visani America helps executives scale AI with an execution operating
              model, a permissioned control plane, and measurable outcomes—without
              losing governance or clarity.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Execution Control", "Runtime Governance", "Board Metrics"].map(
                (b) => (
                  <span
                    key={b}
                    className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur"
                  >
                    {b}
                  </span>
                )
              )}
            </div>

            {/* ✅ REDUCED CTA: keep ONE primary action on hero */}
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/contact#briefing" variant="primary">
                Book Executive Briefing
              </ButtonLink>
            </div>

            {/* Value strip */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  k: "Permissioned execution",
                  v: "AI acts only within defined authority.",
                },
                { k: "Runtime evidence", v: "Telemetry and logs leaders can defend." },
                { k: "Outcome ledger", v: "Value and risk tracked on cadence." },
              ].map((x) => (
                <div key={x.k} className={`${cardDark} p-5`}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                    {x.k}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">
                    {x.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CinematicSection>

      {/* TRUST STRIP */}
      <Section className={`relative overflow-hidden ${sectionDarkAlt} reveal`}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F6F8FC] via-[#F0F4F9] to-[#E8EEF7]" />
        <div
          className="pointer-events-none absolute -top-16 left-1/2 h-56 w-[min(820px,92vw)] -translate-x-1/2 opacity-45 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(96,165,250,0.16), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-12">
          <div className={`${cardBase} px-8 py-10`}>
            <div className="grid items-center gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                  Executive-ready delivery
                </p>
                <p className="mt-3 text-base leading-relaxed text-brand-muted">
                  Board oversight, operational risk review, and measurable outcomes—without
                  hype or ambiguity.
                </p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {["AI Governance", "Security", "Data", "Ops"].map((label) => (
                    <div
                      key={label}
                      className={`flex h-14 items-center justify-center rounded-xl bg-white/75 text-xs font-semibold tracking-wide text-brand-slate ${tileShadow}`}
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ✅ REDUCED CTA: none here (trust strip should not sell) */}
          </div>
        </div>
      </Section>

      {/* CONTROL PLANE */}
      <div id="control-plane">
        <Section
          className={`relative overflow-hidden ${sectionDark} reveal`}
          style={{ scrollMarginTop: "90px" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F3F6FA] via-[#EEF2F7] to-[#E6ECF4]" />
          <div
            className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full opacity-45 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(96,165,250,0.22), transparent 70%)",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-6 py-20">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              {/* TEXT */}
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                  Control Plane
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-slate">
                  The AI Execution Control Plane
                </h2>

                <p className="mt-5 text-base leading-relaxed text-brand-muted">
                  Inventory agents and automations, enforce permissioned execution, monitor runtime
                  behavior, and produce audit-ready evidence—so AI can operate safely at enterprise
                  scale.
                </p>

                <div className="mt-8 grid gap-4">
                  {[
                    {
                      t: "Agent and automation inventory",
                      d: "Know what exists, who owns it, and what it touches.",
                    },
                    {
                      t: "Permissioned execution",
                      d: "Define what AI can do and block everything else.",
                    },
                    {
                      t: "Runtime monitoring",
                      d: "Observe performance, drift, and policy compliance.",
                    },
                  ].map((x) => (
                    <div key={x.t} className={`${cardSoft} p-5`}>
                      <p className="text-sm font-semibold text-brand-slate">{x.t}</p>
                      <p className="mt-2 text-sm leading-relaxed text-brand-muted">{x.d}</p>
                    </div>
                  ))}
                </div>

                {/* ✅ REDUCED CTA: keep ONE relevant secondary action */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <ButtonLink
                    href="/downloads/control-plane-checklist.pdf"
                    variant="secondary"
                  >
                    Download Control Plane Checklist
                  </ButtonLink>
                </div>
              </div>

              {/* IMAGE */}
              <div className="relative">
                <div className={`relative aspect-[16/11] overflow-hidden ${cardBase}`}>
                  <Image
                    src="/img222.jpg"
                    alt="AI execution control plane visualization"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {[
                    { k: "Evidence", v: "Audit-ready logs with decision traceability." },
                    { k: "Controls", v: "Least-privilege execution with policy gates." },
                  ].map((x) => (
                    <div key={x.k} className={`${cardBase} p-5`}>
                      <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                        {x.k}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-brand-slate">{x.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* AUTHORITY / TRUST */}
      <Section className={`relative overflow-hidden ${sectionDarkAlt} reveal`}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F6F8FC] via-[#F0F4F9] to-[#E8EEF7]" />
        <div
          className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(74,222,128,0.18), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className={`${cardBase} px-10 py-16`}>
            <div className="grid items-center gap-14 lg:grid-cols-2">
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
                  Decision rights, controls, and measurement are built in—so scale does not create risk.
                </p>

                <div className="mt-8 grid gap-3">
                  {[
                    "Decision rights are explicit.",
                    "Governance is proactive, not reactive.",
                    "Outcomes are measurable and defensible.",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3">
                      <span
                        className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/80 text-xs font-semibold text-brand-slate ${tileShadow}`}
                      >
                        →
                      </span>
                      <p className="text-sm leading-relaxed text-brand-muted">{t}</p>
                    </div>
                  ))}
                </div>

                {/* ✅ REDUCED CTA: make it informational, point to Proof */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <ButtonLink href="/proof" variant="secondary">
                    View Proof (Redacted)
                  </ButtonLink>
                </div>
              </div>

              {/* IMAGE */}
              <div className="relative">
                <div className={`relative aspect-[4/3] overflow-hidden ${cardBase}`}>
                  <Image
                    src="/img111.png"
                    alt="Enterprise AI execution visualization"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-black/45 px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur shadow-[0_22px_70px_-40px_rgba(0,0,0,0.70)] ring-1 ring-white/10">
                  Operating model + control plane + metrics
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PROBLEM (cinematic) */}
      <CinematicSection backgroundImage="/robo1.png" overlay="dark">
        <div className="relative mx-auto max-w-7xl px-6 py-28">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <div className="relative">
              <div className={`relative aspect-[4/5] overflow-hidden ${cardDark}`}>
                <Image
                  src="/humanoid-execution.png"
                  alt="AI capability without execution discipline"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                The Execution Gap
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                Why AI programs stall
                <span className="block text-white/90">after the pilot</span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-white/80">
                AI doesn’t fail because it can’t generate answers. It fails because organizations
                lack ownership, controls, integration, and measurement.
              </p>

              <div className={`${cardDark} mt-8 p-6`}>
                <p className="text-sm font-semibold text-white">What breaks at scale:</p>
                <div className="mt-4 grid gap-2 text-sm text-white/75">
                  <p>• Ownership and accountability blur</p>
                  <p>• Shadow agents and untracked automations appear</p>
                  <p>• Governance becomes reactive</p>
                  <p>• Value is hard to defend under scrutiny</p>
                </div>
              </div>

              {/* ✅ REDUCED CTA: none here (this is a problem narrative section) */}
            </div>
          </div>
        </div>
      </CinematicSection>

      {/* SOLUTION */}
      <Section className={`relative overflow-hidden ${sectionDark} reveal`}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F3F6FA] via-[#EEF2F7] to-[#E6ECF4]" />
        <div
          className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full opacity-45 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(96,165,250,0.18), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* IMAGE */}
            <div className="order-2 relative lg:order-1">
              <div className={`relative aspect-[5/4] overflow-hidden ${cardBase}`}>
                <Image
                  src="/img333.jpg"
                  alt="Governed enterprise AI execution system visualization"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className={`${cardBase} mt-5 p-6`}>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                  Executive outcome
                </p>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                  AI scales quickly without breaking governance, trust, or accountability.
                </p>
              </div>
            </div>

            {/* TEXT */}
            <div className="order-1 max-w-xl lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                The Solution
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-slate">
                A governed system
                <span className="block">for scaling AI</span>
              </h2>

              <p className="mt-5 text-base leading-relaxed text-brand-muted">
                Scaling requires an execution system that aligns leadership intent, organizational readiness,
                workflow integration, governance, and measurement into one cadence.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  { t: "Operating model", d: "Decision rights, governance cadence, roles, accountability." },
                  { t: "Execution control", d: "Permissioned AI execution with controls before scale." },
                  { t: "Measurement", d: "Value and risk ledgers that stand up to scrutiny." },
                ].map((x) => (
                  <div key={x.t} className={`${cardBase} ${cardHover} p-6`}>
                    <p className="text-sm font-semibold text-brand-slate">{x.t}</p>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">{x.d}</p>
                  </div>
                ))}
              </div>

              {/* ✅ REDUCED CTA: ONE clear next step */}
              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href="/services" variant="primary">
                  View Services
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* REPRESENTATIVE OUTCOMES */}
      <Section className={`relative overflow-hidden ${sectionDarkAlt} reveal`}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F6F8FC] via-[#F0F4F9] to-[#E8EEF7]" />
        <div
          className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full opacity-45 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(96,165,250,0.16), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-start gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                Representative Outcomes
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-slate">
                Outcomes leaders can defend
              </h2>

              <p className="mt-4 text-base leading-relaxed text-brand-muted">
                Ranges vary by baseline maturity, scope, and adoption.
              </p>

              <div className={`${cardSoft} mt-8 p-6`}>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                  Note
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  A baseline assessment determines the expected band for your organization.
                </p>
              </div>

              {/* ✅ REDUCED CTA: keep ONE, aligned with outcomes → proof */}
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/proof" variant="secondary">
                  See Evidence Patterns
                </ButtonLink>
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

                    <div className="relative z-10 flex items-start gap-4">
                      <OutcomeIcon kind={o.icon} />

                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-brand-slate">{o.title}</p>
                        <p className="mt-3 text-sm leading-relaxed text-brand-muted">{o.metric}</p>

                        <div className={`${cardSoft} mt-5 p-4`}>
                          <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                            Evidence
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-brand-muted">{o.evidence}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                <div className={`relative aspect-[16/10] overflow-hidden ${cardBase}`}>
                  <Image
                    src="/img444.jpg"
                    alt="Outcome ledger and executive reporting visualization"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className={`${cardBase} p-8`}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                    What leaders receive
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                    Board-ready artifacts, decision traceability, and measurable adoption signals.
                  </p>
                  <div className="mt-6 grid gap-3 text-sm text-brand-muted">
                    <p>• Value ledger entries</p>
                    <p>• Policy-controlled execution logs</p>
                    <p>• Audit trail coverage map</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PARTNER ECOSYSTEM */}
      <Section className={`relative overflow-hidden ${sectionDark} reveal`}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F3F6FA] via-[#EEF2F7] to-[#E6ECF4]" />
        <div
          className="pointer-events-none absolute -right-32 top-28 h-72 w-72 rounded-full opacity-45 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(74,222,128,0.18), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* LEFT */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                Ecosystem
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-slate">
                Vendor-neutral execution that fits your stack
              </h2>

              <p className="mt-5 text-base leading-relaxed text-brand-muted">
                We partner with your teams across AI platform, cloud, security, data, and service operations
                to operationalize AI at scale without locking you into a single vendor path.
              </p>

              <div className={`${cardBase} mt-10 p-8`}>
                <p className="text-sm font-semibold text-brand-slate">How we work</p>

                <div className="mt-6 grid gap-4">
                  {[
                    "Align decision rights and governance boundaries",
                    "Implement permissioned execution and monitoring",
                    "Prove value with ledgers leaders can defend",
                  ].map((s, idx) => (
                    <div key={s} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-navy text-xs font-semibold text-white shadow-[0_14px_44px_-30px_rgba(2,6,23,0.45)] ring-1 ring-white/10">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-relaxed text-brand-muted">{s}</p>
                    </div>
                  ))}
                </div>

                {/* ✅ REDUCED CTA: none here (this block already provides direction) */}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className={`relative aspect-[16/11] overflow-hidden ${cardBase}`}>
                <Image
                  src="/img555.jpg"
                  alt="Enterprise ecosystem integration visualization"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {ecosystemBullets.map((b) => (
                  <div key={b.title} className={`${cardBase} ${cardHover} group p-7`}>
                    <div className="flex items-start gap-3">
                      <EcosystemIcon kind={b.icon} />

                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-brand-slate">{b.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-brand-muted">{b.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ✅ REDUCED CTA: one subtle nudge after the ecosystem grid */}
              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href="/contact#briefing" variant="secondary">
                  Talk to Us
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* LEADERSHIP */}
      <Section className={`relative overflow-hidden ${sectionDarkAlt} reveal`}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F6F8FC] via-[#F0F4F9] to-[#E8EEF7]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* IMAGE */}
            <div className="relative order-2 lg:order-1">
              <div className={`relative aspect-[4/5] overflow-hidden ${cardBase}`}>
                <Image src="/imgerich.jpg" alt="Richie Adetimehin" fill className="object-cover" />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { k: "Board-ready", v: "Artifacts designed to survive scrutiny." },
                  { k: "Execution control", v: "Permissioned operation with measurable outcomes." },
                ].map((x) => (
                  <div key={x.k} className={`${cardBase} p-6`}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                      {x.k}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-brand-slate">{x.v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* TEXT */}
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                Leadership
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-slate">
                Leadership built for enterprise scale
              </h2>

              <div className={`${cardBase} mt-8 p-8`}>
                <p className="text-sm font-semibold text-brand-slate">
                  Visani America is led by Richie Adetimehin
                </p>

                <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                  Richie helps leadership teams move from pilots to scalable AI by defining decision rights,
                  implementing runtime controls, and measuring value with evidence.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-brand-muted">
                  <li>
                    <span className="font-semibold text-brand-slate">Operating rigor:</span>{" "}
                    governance cadence, roles, accountability
                  </li>
                  <li>
                    <span className="font-semibold text-brand-slate">Controls:</span>{" "}
                    permissioned execution, audit-ready evidence
                  </li>
                  <li>
                    <span className="font-semibold text-brand-slate">Cross-functional alignment:</span>{" "}
                    AI, security, data, operations, business
                  </li>
                </ul>

                {/* ✅ REDUCED CTA: ONE (leadership section shouldn’t have 3) */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <ButtonLink href="/proof/library" variant="secondary">
                    View Proof Library (Redacted)
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS (cinematic) */}
      <CinematicSection backgroundImage="/img777.jpg" overlay="dark">
        <div className="mx-auto max-w-7xl px-6 py-28 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
              How It Works
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A clear path from clarity to scale
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/85">
              Scaling AI is a controlled progression—designed, governed, and measured at each stage.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Executive Briefing", desc: "Align outcomes, constraints, and decision rights." },
              { step: "02", title: "Readiness Assessment", desc: "Identify gaps before scale exposes them." },
              { step: "03", title: "Pilot-to-Scale Roadmap", desc: "Define sequencing, dependencies, and measurement." },
              { step: "04", title: "Delivery and Adoption Sprints", desc: "Embed workflows, govern expansion, and prove value." },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative overflow-hidden rounded-2xl bg-white/10 p-8 backdrop-blur-md shadow-[0_18px_70px_-42px_rgba(0,0,0,0.70)] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/14"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(900px 260px at 15% 0%, rgba(255,255,255,0.12), transparent 55%)",
                  }}
                />
                <span className="relative text-xs font-semibold tracking-widest text-white/60">
                  {item.step}
                </span>

                <h3 className="relative mt-4 text-sm font-semibold text-white">
                  {item.title}
                </h3>

                <p className="relative mt-4 text-sm leading-relaxed text-white/80">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ✅ REDUCED CTA: none here (CTABand handles global conversion) */}
        </div>
      </CinematicSection>

      {/* ✅ Keep ONE global conversion module at the end */}
      <CTABand />

      {/* ✅ reveal styles must exist so useRevealOnScroll can work */}
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