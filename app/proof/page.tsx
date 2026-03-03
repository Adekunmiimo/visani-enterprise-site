// ✅ REPLACE ENTIRE FILE — app/proof/page.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

type ProofCard = {
  title: string;
  desc: string;
  href: string;
  meta: string;
};

function MiniIcon({
  kind,
  className = "",
}: {
  kind: "shield" | "owner" | "ledger" | "telemetry";
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
        aria-hidden="true"
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
        aria-hidden="true"
      >
        <path d="M20 21a8 8 0 10-16 0" />
        <path d="M12 11a4 4 0 100-8 4 4 0 000 8z" />
        <path d="M16.5 14.5l2 2 4-4" transform="translate(-1 -1)" />
      </svg>
    );
  }

  if (kind === "ledger") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={base}
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 3h11a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
        <path d="M7 7h13" />
        <path d="M7 12h13" />
        <path d="M7 17h13" />
        <path d="M4 5v14" />
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
      aria-hidden="true"
    >
      <path d="M4 19V5" />
      <path d="M8 19V9" />
      <path d="M12 19V7" />
      <path d="M16 19v-5" />
      <path d="M20 19V11" />
    </svg>
  );
}

export default function ProofPage() {
  useRevealOnScroll();

  // ✅ Theme tokens aligned with your other pages (Insights/Home)
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

  // ✅ Images in /public root (no folders)
  const img = useMemo(
    () => ({
      hero: "/proof1.jpg",
      evidence: "/proof2.jpg",
      cta: "/proof-cta-bg.jpg",
    }),
    []
  );

  const signalBullets = useMemo(
    () => [
      "Ownership and decision rights are explicit across AI workflows",
      "Governance is embedded before scale, not retrofitted after incidents",
      "Outcomes are measurable and defensible under executive and board review",
      "Adoption is sustained inside real operating environments, not staged pilots",
    ],
    []
  );

  // ✅ UPDATED: match Proof Library slugs
  const proofCards: ProofCard[] = useMemo(
    () => [
      {
        meta: "Governance • Decision rights",
        title: "Governance established before scale",
        desc:
          "Decision rights, approval thresholds, and escalation paths are formally defined and enforced prior to enterprise rollout.",
        href: "/proof/library/governance-before-scale",
      },
      {
        meta: "Ownership • Accountability",
        title: "Operational ownership is explicit",
        desc:
          "Named executives are accountable for outcomes across workflows — ownership is never informal, implied, or distributed into ambiguity.",
        href: "/proof/library/ownership-explicit",
      },
      {
        meta: "Measurement • Board reporting",
        title: "Value is measured and defensible",
        desc:
          "Outcome metrics are reviewed on a recurring cadence and tied to business performance, risk posture, and executive reporting.",
        href: "/proof/library/value-defensible",
      },
      {
        meta: "Control • Permissioned execution",
        title: "Permissioned execution is enforced",
        desc:
          "AI is allowed to act only within defined boundaries. Unapproved agents, workflows, and data access are blocked by policy.",
        href: "/proof/library/permissioned-execution",
      },
      {
        meta: "Evidence • Audit trail",
        title: "Runtime evidence is produced, not assumed",
        desc:
          "Telemetry, logs, and decision records provide audit-ready traceability for what ran, who approved it, what changed, and why.",
        href: "/proof/library/runtime-observability",
      },
      {
        meta: "Adoption • Operating discipline",
        title: "Adoption survives real operations",
        desc:
          "Usage durability is measured with compliance and behavior signals — not vanity metrics or initial launch spikes.",
        href: "/proof/library/sustained-adoption",
      },
    ],
    []
  );

  const maturitySteps = useMemo(
    () => [
      {
        n: "01",
        t: "AI experiments",
        d: "Capabilities exist, but governance is informal. Risk is unpriced. Ownership is unclear.",
      },
      {
        n: "02",
        t: "AI pilots",
        d: "Value is shown in controlled settings. Approvals exist, but enforcement is not systemic.",
      },
      {
        n: "03",
        t: "AI deployments",
        d: "Systems run in production. Telemetry exists. Evidence is partial. Drift becomes visible.",
      },
      {
        n: "04",
        t: "AI governed systems",
        d: "Decision rights, boundaries, evidence trails, and outcomes are enforced under executive cadence.",
      },
    ],
    []
  );

  const controlDepth = useMemo(
    () => [
      {
        t: "Authorization logs",
        d: "Who authorized the capability, under what scope, and when.",
      },
      {
        t: "Decision rights registry",
        d: "Approval thresholds and escalation paths tied to roles.",
      },
      {
        t: "Runtime telemetry",
        d: "What ran, what it touched, and what it produced — audit ready.",
      },
      {
        t: "Boundary enforcement",
        d: "Permissioned execution with blocks, gates, and safe fallbacks.",
      },
      {
        t: "Escalation artifacts",
        d: "Exception handling that preserves executive control.",
      },
      {
        t: "Outcome variance reporting",
        d: "Value defended with cadence, variance, and narrative clarity.",
      },
    ],
    []
  );

  // ✅ NEW: micro trust signals strip under hero
  const trustStrip = useMemo(
    () => [
      { t: "Governance charter excerpts", d: "Decision rights + approval thresholds" },
      { t: "Runtime evidence trails", d: "What ran, what changed, who approved" },
      { t: "Value ledger snapshots", d: "Outcomes on cadence + variance narrative" },
      { t: "Control enforcement proof", d: "Blocks, gates, and exception handling" },
    ],
    []
  );

  // ✅ NEW: quick jump links to each proof detail page (connect Proof → all detail pages)
  const quickLinks = useMemo(
    () => [
      { t: "Governance before scale", href: "/proof/library/governance-before-scale" },
      { t: "Ownership explicit", href: "/proof/library/ownership-explicit" },
      { t: "Value defensible", href: "/proof/library/value-defensible" },
      { t: "Permissioned execution", href: "/proof/library/permissioned-execution" },
      { t: "Runtime observability", href: "/proof/library/runtime-observability" },
      { t: "Sustained adoption", href: "/proof/library/sustained-adoption" },
    ],
    []
  );

  return (
    <>
      {/* ================= PROOF HERO (MATCHES INSIGHTS STYLE) ================= */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={img.hero}
            alt="Proof — executive evidence of governed AI execution"
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
                Proof
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Evidence of governed
                <span className="block text-white/85">AI execution at scale</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">
                Not case studies. Not testimonials. Documented execution signals showing how AI operates
                under governance, scrutiny, and sustained enterprise conditions.
              </p>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65">
                Built for executives, boards, and risk leadership evaluating whether AI is truly under control —
                or merely producing outputs.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Execution Control", "Runtime Governance", "Audit Evidence", "Board Metrics"].map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur"
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* ✅ CONNECTED: Proof → Contact anchor + Proof Library */}
              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href="/contact#proof-review" variant="primary">
                  Request Executive Proof Review
                </ButtonLink>
                <ButtonLink href="/proof/library" variant="secondary">
                  View Proof Library (Redacted)
                </ButtonLink>
              </div>

              <p className="mt-8 max-w-xl text-xs leading-relaxed text-white/55">
                Proof content is anonymized and presented as execution patterns and artifacts — designed for private executive review.
              </p>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 bg-black shadow-[0_60px_130px_-45px_rgba(0,0,0,0.75)]">
                <Image
                  src={img.evidence}
                  alt="Evidence under real enterprise conditions"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>

              <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/60">
                Evidence patterns leaders can review: decision rights, controls, telemetry, and defensible outcomes.
              </p>
            </div>
          </div>

          {/* ✅ NEW: micro trust signals strip under hero */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustStrip.map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-white/12 bg-white/10 px-5 py-4 backdrop-blur-md"
              >
                <p className="text-xs font-semibold text-white/85">{x.t}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/60">{x.d}</p>
              </div>
            ))}
          </div>

          {/* ✅ NEW: Quick links row (connect Proof → ALL 6 detail pages) */}
          <div className="mt-8 flex flex-wrap gap-2">
            {quickLinks.map((x) => (
              <Link
                key={x.href}
                href={x.href}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur transition hover:bg-white/15 hover:text-white"
              >
                {x.t} →
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= PROOF STANDARD (LIGHT) ================= */}
      <Section className={`relative overflow-hidden ${sectionDarkAlt} reveal`}>
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-muted">
                Proof standard
              </p>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-brand-slate sm:text-4xl">
                What executives
                <span className="block text-brand-slate/85">accept as evidence</span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-brand-muted">
                Enterprise proof is not a demo, a chart, or a pilot story. Proof is operating discipline under scale,
                risk, and sustained scrutiny.
              </p>

              <p className="mt-5 text-base leading-relaxed text-brand-muted">
                This page lists the execution signals leaders use to determine whether AI is governable — not just impressive.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Decision rights", "Permissioned execution", "Evidence trails", "Outcome cadence"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold text-brand-muted ring-1 ring-inset ring-black/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* ✅ NEW: Primary path to the library from the standard section */}
              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href="/proof/library" variant="primary">
                  Explore the Proof Library
                </ButtonLink>
                <ButtonLink href="/contact#proof-review" variant="secondary">
                  Request Proof Review
                </ButtonLink>
              </div>
            </div>

            <div className={`${cardBase} relative p-8 sm:p-10`}>
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(96,165,250,0.85), rgba(74,222,128,0.75))",
                }}
              />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-muted">
                Signals that matter
              </p>

              <ul className="mt-6 space-y-4">
                {signalBullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-brand-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/35" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className={`${cardSoft} mt-8 p-6`}>
                <p className="text-sm leading-relaxed text-brand-muted">
                  Proof should answer: who owns this, who approved it, what ran, what changed, and what value was produced —
                  with evidence.
                </p>
              </div>

              {/* ✅ CONNECTED: Icon tiles now link to the correct proof detail pages */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: "shield" as const,
                    t: "Governance",
                    d: "Decision rights + boundaries",
                    href: "/proof/library/governance-before-scale",
                  },
                  {
                    icon: "owner" as const,
                    t: "Ownership",
                    d: "Accountability per workflow",
                    href: "/proof/library/ownership-explicit",
                  },
                  {
                    icon: "ledger" as const,
                    t: "Ledgers",
                    d: "Value + risk on cadence",
                    href: "/proof/library/value-defensible",
                  },
                  {
                    icon: "telemetry" as const,
                    t: "Evidence",
                    d: "Telemetry + audit trail",
                    href: "/proof/library/runtime-observability",
                  },
                ].map((x) => (
                  <Link
                    key={x.t}
                    href={x.href}
                    className="group flex gap-3 rounded-2xl border border-black/10 bg-white/70 px-5 py-4 transition hover:bg-white"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-black/5 ring-1 ring-inset ring-black/10">
                      <MiniIcon kind={x.icon} className="text-black/70" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-slate">
                        {x.t}
                        <span className="ml-2 text-xs font-semibold text-brand-muted group-hover:text-brand-slate/80">
                          View →
                        </span>
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-brand-muted">{x.d}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ================= MATURITY LADDER ================= */}
          <div className="mt-16">
            <div className={`${cardBase} p-8 sm:p-10`}>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
                Governance maturity
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-brand-slate">
                Where most enterprises stall
              </h3>

              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-brand-muted">
                Many organizations confuse deployment with governability. The maturity gap is not technical —
                it is executive enforcement: decision rights, boundaries, evidence, and measurable outcomes on cadence.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {maturitySteps.map((s) => (
                  <div
                    key={s.t}
                    className="rounded-3xl border border-black/10 bg-white/80 p-7 shadow-[0_18px_55px_-40px_rgba(0,0,0,0.35)]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
                      {s.n}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-brand-slate">{s.t}</p>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">{s.d}</p>
                  </div>
                ))}
              </div>

              {/* ✅ CONNECTED: maturity section nudges to library */}
              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href="/proof/library" variant="secondary">
                  View Evidence Packages
                </ButtonLink>
                <ButtonLink href="/contact#proof-review" variant="primary">
                  Request Proof Review
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* ================= CONTROL DEPTH ================= */}
          <div className="mt-12">
            <div className={`${cardBase} p-8 sm:p-10`}>
              <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
                    Control depth
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-brand-slate">
                    What real proof includes
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                    Proof becomes credible when it shows enforcement, not intent. The blocks below reflect
                    the artifacts executives expect when AI is enterprise-critical.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <ButtonLink href="/proof/library" variant="secondary">
                      View Proof Library (Redacted)
                    </ButtonLink>
                    <ButtonLink href="/contact#proof-review" variant="primary">
                      Request Proof Review
                    </ButtonLink>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {controlDepth.map((x) => (
                    <div
                      key={x.t}
                      className="rounded-2xl border border-black/10 bg-white/80 p-6"
                    >
                      <p className="text-sm font-semibold text-brand-slate">{x.t}</p>
                      <p className="mt-2 text-sm leading-relaxed text-brand-muted">{x.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ✅ CONNECTED: direct links to the two most relevant detail pages */}
              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink href="/proof/library/permissioned-execution" variant="secondary">
                  Permissioned execution evidence →
                </ButtonLink>
                <ButtonLink href="/proof/library/runtime-observability" variant="secondary">
                  Runtime evidence trail →
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ================= DOCUMENTED PROOF (DARK IMAGE FEED) ================= */}
      <Section className="relative overflow-hidden reveal">
        <div className="absolute inset-0">
          <Image
            src={img.evidence}
            alt="Documented proof background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-black/70" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/70 to-black/85" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/65">
                Documented proof
              </p>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Evidence of execution
                <span className="block text-white/85">under real enterprise conditions</span>
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80">
                The items below represent anonymized evidence patterns — how AI behaves under scale,
                governance pressure, and sustained executive scrutiny.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ButtonLink href="/contact#proof-review" variant="primary">
                Request Proof Review
              </ButtonLink>
              <ButtonLink href="/proof/library" variant="secondary">
                View Proof Library (Redacted)
              </ButtonLink>
            </div>
          </div>

          {/* ✅ CONNECTED: card grid links to all detail pages */}
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {proofCards.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className={`group relative rounded-[28px] border border-white/15 bg-white/10 px-9 py-10 backdrop-blur-md ${cardHover}`}
              >
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/65">
                  Execution signal
                </p>

                <h3 className="mt-5 text-xl font-semibold leading-snug text-white">
                  {post.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  {post.desc}
                </p>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
                  {post.meta}
                </p>

                <div className="mt-9">
                  <span className="text-sm font-semibold text-white/80 transition group-hover:text-white">
                    Review evidence →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className={`mt-14 ${cardBase} p-8 sm:p-10`}>
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
                  Executive review
                </p>
                <p className="mt-3 text-base leading-relaxed text-brand-muted">
                  If your organization has proven AI can work, the next step is making it governable, scalable,
                  and defensible under executive oversight — with evidence you can explain.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <ButtonLink href="/contact#proof-review" variant="primary">
                  Request Proof Review
                </ButtonLink>
                <ButtonLink href="/insights" variant="secondary">
                  Read Executive Briefs
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ================= FINAL CTA ================= */}
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
          <div className={`${cardBase} mx-auto max-w-4xl p-8 sm:p-10 text-center`}>
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-muted">
              Executive decision point
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-brand-slate sm:text-4xl">
              Proof matters
              <span className="block text-brand-slate/85">
                when AI becomes enterprise critical
              </span>
            </h2>

            <p className="mt-6 mx-auto max-w-3xl text-base leading-relaxed text-brand-muted">
              When AI influences core operations, leaders require verified evidence that systems remain governable,
              auditable, and accountable under pressure.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/contact#proof-review" variant="primary">
                Request Executive Proof Review
              </ButtonLink>
              <ButtonLink href="/proof/library" variant="secondary">
                View Proof Library (Redacted)
              </ButtonLink>
            </div>

            <p className="mt-8 mx-auto max-w-xl text-sm leading-relaxed text-brand-muted">
              Conducted privately for executives, boards, and risk leadership. No marketing material. No public client disclosure.
            </p>
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