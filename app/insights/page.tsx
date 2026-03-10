"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { DownloadGateModal } from "@/components/download-gate-modal";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

type PostCategory = "Governance" | "Operating Model" | "Control Plane" | "Measurement";

type InsightPost = {
  href: string;
  label: "Executive Brief" | "Field Note" | "Board Brief";
  title: string;
  excerpt: string;
  meta: string;
  category: PostCategory;
  cover: string;
  featured?: boolean;
};

function MiniIcon({ kind }: { kind: "memo" | "shield" | "flow" | "chart" }) {
  const base = "h-5 w-5 text-white";
  const stroke = 1.9;

  if (kind === "memo") {
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
        <path d="M7 3h7l3 3v15H7V3z" />
        <path d="M14 3v4h4" />
        <path d="M9 11h6" />
        <path d="M9 15h4" />
      </svg>
    );
  }

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

  if (kind === "flow") {
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
        <path d="M7 7h6v6H7z" />
        <path d="M13 10h4a3 3 0 013 3v1" />
        <path d="M10 13v4a3 3 0 003 3h1" />
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
      <path d="M4 19V5" />
      <path d="M8 19V9" />
      <path d="M12 19V7" />
      <path d="M16 19v-5" />
      <path d="M20 19V11" />
    </svg>
  );
}

export default function InsightsPage() {
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

  const heroLabel =
    "text-[2rem] font-bold tracking-[-0.035em] leading-[1] text-white sm:text-[2.5rem] lg:text-[3rem]";
  const sectionLabelLight =
    "text-2xl font-bold tracking-[-0.03em] leading-[1.02] text-brand-slate sm:text-[2rem]";
  const sectionLabelDark =
    "text-2xl font-bold tracking-[-0.03em] leading-[1.02] text-white sm:text-[2rem]";

  const heroMainHeading =
    "mt-4 text-[2.8rem] font-semibold tracking-[-0.045em] leading-[0.94] text-white sm:text-[3.5rem] lg:text-[4.2rem]";
  const sectionMainHeading =
    "mt-5 text-[2.25rem] font-semibold tracking-[-0.04em] leading-[1.02] text-brand-slate sm:text-[2.9rem]";
  const sectionMainHeadingDark =
    "mt-5 text-[2.25rem] font-semibold tracking-[-0.04em] leading-[1.02] text-white sm:text-[2.9rem]";

  const bigChipText =
    "text-white text-base font-bold tracking-[-0.01em] sm:text-[1.05rem]";
  const cardTitleDark =
    "text-[1.24rem] font-bold tracking-[-0.03em] leading-[1.08] text-white sm:text-[1.42rem]";
  const subLabelLight =
    "text-[1.02rem] font-bold tracking-[-0.02em] leading-[1.08] text-brand-slate sm:text-[1.12rem]";
  const subLabelDark =
    "text-[1.02rem] font-bold tracking-[-0.02em] leading-[1.08] text-white sm:text-[1.12rem]";

  const heroSecondaryButtonClass =
    "inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/16";

  const lightPrimaryButtonClass =
    "inline-flex items-center justify-center rounded-full bg-[#4ade80] px-6 py-3 text-sm font-semibold text-[#111827] transition hover:opacity-90";

  const lightSecondaryButtonClass =
    "inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-brand-slate transition hover:bg-black/[0.03]";

  const img = useMemo(
    () => ({
      hero: "/aboutimg.jpg",
      heroSide: "/insights-feed-bg.jpg",
      feedBg: "/insights-feed-bg.jpg",
      controlPlane: "/governance.jpg",
      featured: "/positioning.jpg",
    }),
    []
  );

  const posts: InsightPost[] = useMemo(
    () => [
      {
        href: "/insights/ai-programs-stall",
        label: "Executive Brief",
        title: "Why most AI programs stall after early success",
        excerpt:
          "Where execution breaks when pilots collide with real enterprise operating conditions: ownership, decision rights, controls, and cadence.",
        meta: "8 min read • Governance",
        category: "Governance",
        cover: img.featured,
        featured: true,
      },
      {
        href: "/insights/permissioned-execution",
        label: "Executive Brief",
        title: "Permissioned execution is the missing layer in enterprise AI",
        excerpt:
          "Define what AI can do, block everything else, and produce evidence executives can defend under scrutiny.",
        meta: "10 min read • Control Plane",
        category: "Control Plane",
        cover: img.controlPlane,
      },
      {
        href: "/insights/operating-model",
        label: "Field Note",
        title: "Operating models that survive scale",
        excerpt:
          "A practical lens on roles, cadence, and accountability so execution doesn’t collapse into ambiguity.",
        meta: "7 min read • Operating Model",
        category: "Operating Model",
        cover: img.heroSide,
      },
      {
        href: "/insights/board-metrics",
        label: "Executive Brief",
        title: "Board metrics for AI: value that holds up under scrutiny",
        excerpt:
          "How to measure outcomes and risk signals with a ledger leaders can explain, govern, and defend.",
        meta: "9 min read • Measurement",
        category: "Measurement",
        cover: img.feedBg,
      },
      {
        href: "/insights/adoption-signals",
        label: "Field Note",
        title: "Adoption signals that indicate durable behavior change",
        excerpt:
          "Move beyond usage spikes: define compliance signals, reinforcement mechanisms, and executive review rhythms.",
        meta: "6 min read • Measurement",
        category: "Measurement",
        cover: img.heroSide,
      },
      {
        href: "/insights/governance-before-scale",
        label: "Board Brief",
        title: "Governance before scale: how to prevent shadow agents",
        excerpt:
          "Reduce uncontrolled AI activity with registry, policy gates, and runtime observability designed in from day one.",
        meta: "11 min read • Governance",
        category: "Governance",
        cover: img.controlPlane,
      },
    ],
    [img]
  );

  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.href !== featured.href);

  const chips: { label: PostCategory; icon: "memo" | "shield" | "flow" | "chart" }[] = [
    { label: "Governance", icon: "shield" },
    { label: "Operating Model", icon: "flow" },
    { label: "Control Plane", icon: "memo" },
    { label: "Measurement", icon: "chart" },
  ];

  return (
    <>
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={img.hero}
            alt="Insights governed AI execution"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/55" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[min(980px,92vw)] -translate-x-1/2 opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(96,165,250,0.22), transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full opacity-45 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(74,222,128,0.16), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-2xl">
              <p className={heroLabel}>Insights</p>

              <h1 className={heroMainHeading}>
                Executive briefs on
                <span className="block text-white">governed AI execution</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white">
                Decision grade perspectives for leaders scaling AI with control, accountability,
                and defensible outcomes beyond pilots, hype, and isolated experimentation.
              </p>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-white">
                Built for boardrooms, risk reviews, operating committees, and regulatory conversations
                where evidence matters.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {["Execution Control", "Runtime Governance", "Board Metrics"].map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center rounded-full bg-white/14 px-5 py-3 backdrop-blur text-white ring-1 ring-white/12"
                  >
                    <span className={bigChipText}>{b}</span>
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href="/contact#briefing" variant="primary">
                  Book Executive Briefing
                </ButtonLink>

                <DownloadGateModal
                  buttonText="Download Board Brief (PDF)"
                  fileUrl="/downloads/board-brief.pdf"
                  fileName="board-brief.pdf"
                  title="Download board brief"
                  description="Complete this short form to access the board brief. This helps us understand your current priorities and route the right follow up."
                  heroImage="/aboutimg.jpg"
                  className={heroSecondaryButtonClass}
                />
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  { k: "Control", v: "Decision rights and policy gates." },
                  { k: "Evidence", v: "Telemetry and audit ready logs." },
                  { k: "Outcomes", v: "Value and risk ledgers on cadence." },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl bg-black/35 px-5 py-4 ring-1 ring-inset ring-white/10 backdrop-blur"
                  >
                    <p className={subLabelDark}>{x.k}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white">{x.v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:flex lg:justify-end">
              <div className="w-full max-w-lg">
                <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black shadow-[0_70px_150px_-55px_rgba(0,0,0,0.85)]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={img.heroSide}
                      alt="Executive operating environment"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/18 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                  </div>

                  <div className="absolute inset-x-6 bottom-4 sm:bottom-5">
                    <div className="rounded-2xl bg-black/42 p-5 backdrop-blur-md ring-1 ring-white/10">
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white">
                        Featured brief
                      </p>
                      <p className={`${cardTitleDark} mt-3`}>
                        {featured.title}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white">
                        {featured.excerpt}
                      </p>

                      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                        <span className="text-xs font-semibold uppercase tracking-widest text-white">
                          {featured.meta}
                        </span>
                        <Link
                          href={featured.href}
                          className="text-sm font-semibold text-white transition hover:text-white"
                        >
                          Read brief →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {chips.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur ring-1 ring-inset ring-white/10"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/10">
                  <MiniIcon kind={c.icon} />
                </div>
                <div className="min-w-0">
                  <p className={subLabelDark}>{c.label}</p>
                  <p className="text-xs text-white">Executive ready analysis</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className={`relative overflow-hidden ${sectionDarkAlt} reveal`}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F6F8FC] via-[#F0F4F9] to-[#E8EEF7]" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-2xl">
              <p className={sectionLabelLight}>Perspective</p>

              <h2 className={sectionMainHeading}>
                Built for leaders
                <span className="block text-brand-slate/85">accountable for outcomes</span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-brand-muted">
                These briefs are disciplined examinations of how AI behaves inside complex enterprises
                once pilots meet operating reality. No trend chasing. No vendor theatre.
              </p>

              <p className="mt-5 text-base leading-relaxed text-brand-muted">
                The goal is executive clarity: decision rights, controls, cadence, incentives, evidence,
                and measurement that hold up under scrutiny.
              </p>

              <div className={`${cardSoft} mt-8 p-6`}>
                <p className={subLabelLight}>What we eliminate</p>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  Ambiguity in ownership, decision rights, and accountability before scale turns it into risk.
                </p>
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
              <p className={subLabelLight}>What these briefs focus on</p>

              <ul className="mt-6 space-y-4">
                {[
                  "Operating models that translate AI strategy into repeatable execution.",
                  "Governance structures that scale without slowing delivery.",
                  "Readiness and adoption disciplines that survive real operations.",
                  "Measurement approaches executives can explain, defend, and govern.",
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

              <div className={`${cardSoft} mt-8 p-6`}>
                <p className={subLabelLight}>Format</p>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  Executive briefs. Field notes. Board ready summaries written to be used, not skimmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className={`relative overflow-hidden ${sectionDark} reveal`}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F3F6FA] via-[#EEF2F7] to-[#E6ECF4]" />
        <div
          className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(96,165,250,0.18), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="max-w-2xl">
              <p className={sectionLabelLight}>Control Plane</p>

              <h2 className={sectionMainHeading}>
                The AI Execution Control Plane
              </h2>

              <p className="mt-6 text-base leading-relaxed text-brand-muted">
                Inventory every agent and automation, enforce permissioned execution, monitor runtime behavior,
                and produce audit ready evidence so AI can operate safely at enterprise scale.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { t: "Inventory", d: "Know what exists, who owns it, and what it touches." },
                  { t: "Permissioned execution", d: "Define what AI can do and block everything else." },
                  { t: "Runtime evidence", d: "Telemetry and logs leaders can defend." },
                  { t: "Outcome ledger", d: "Value and risk tracked on cadence." },
                ].map((x) => (
                  <div key={x.t} className={`${cardSoft} p-5`}>
                    <p className={subLabelLight}>{x.t}</p>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">{x.d}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <DownloadGateModal
                  buttonText="Download Control Plane Checklist"
                  fileUrl="/downloads/control-plane-checklist.pdf"
                  fileName="control-plane-checklist.pdf"
                  title="Download control plane checklist"
                  description="Complete this short form to access the control plane checklist. This helps us understand where your organization is in its execution journey."
                  heroImage="/governance.jpg"
                  className={lightPrimaryButtonClass}
                />

                <ButtonLink href="/contact#briefing" variant="secondary">
                  Book Executive Briefing
                </ButtonLink>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-black/10 bg-black shadow-[0_40px_120px_-55px_rgba(2,6,23,0.35)]">
                <Image
                  src={img.controlPlane}
                  alt="Governance and execution control"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 44vw, 100vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-4 rounded-full bg-black/45 px-4 py-2 text-xs font-semibold text-white backdrop-blur ring-1 ring-white/10 shadow-[0_22px_70px_-40px_rgba(0,0,0,0.70)]">
                  Permissioned execution • Telemetry • Evidence
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  { k: "Audit ready", v: "Decision traceability and evidence artifacts." },
                  { k: "Executive cadence", v: "Value and risk review rhythm leaders can run." },
                ].map((x) => (
                  <div key={x.k} className={`${cardBase} p-5`}>
                    <p className={subLabelLight}>{x.k}</p>
                    <p className="mt-2 text-sm leading-relaxed text-brand-slate">{x.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden reveal">
        <div className="absolute inset-0">
          <Image
            src={img.feedBg}
            alt="Insights feed background"
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
            <div className="max-w-3xl">
              <p className={sectionLabelDark}>Recent briefs</p>

              <h2 className={sectionMainHeadingDark}>
                Recent executive briefs
              </h2>

              <p className="mt-6 text-base leading-relaxed text-white">
                Governance, operating model design, adoption discipline, and measurement written for leaders
                accountable for real world outcomes.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {(["Governance", "Operating Model", "Control Plane", "Measurement"] as const).map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full bg-white/14 px-5 py-3 backdrop-blur text-white ring-1 ring-white/12"
                  >
                    <span className={bigChipText}>{t}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <ButtonLink href="/proof/library" variant="secondary">
                View Proof Library (Redacted)
              </ButtonLink>
              <ButtonLink href="/contact#briefing" variant="primary">
                Book Executive Briefing
              </ButtonLink>
            </div>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.slice(0, 6).map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group block overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/14 hover:shadow-[0_45px_130px_-40px_rgba(0,0,0,0.7)]"
              >
                <div className="relative h-44">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 420px, 100vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/76 via-black/22 to-transparent" />

                  <div className="absolute inset-x-4 bottom-3 flex flex-wrap gap-2 sm:bottom-4">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
                      {post.label}
                    </span>
                    <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className={cardTitleDark}>
                    {post.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-white">
                    {post.excerpt}
                  </p>

                  <div className="mt-7 flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-white">
                      {post.meta}
                    </span>
                    <span className="text-sm font-semibold text-white transition group-hover:text-white">
                      Read brief →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-white/15 bg-black/35 p-8 shadow-[0_18px_60px_-34px_rgba(2,6,23,0.45)] backdrop-blur-md ring-1 ring-white/10 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="max-w-2xl">
                <p className={sectionLabelDark}>Ready to talk?</p>
                <p className="mt-3 text-base leading-relaxed text-white">
                  If your organization has proven AI can work, the next step is making it governable, scalable,
                  and defensible under executive oversight.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <ButtonLink href="/contact#briefing" variant="primary">
                  Book Executive Briefing
                </ButtonLink>

                <DownloadGateModal
                  buttonText="Download Board Brief (PDF)"
                  fileUrl="/downloads/board-brief.pdf"
                  fileName="board-brief.pdf"
                  title="Download board brief"
                  description="Complete this short form to access the board brief. This helps us understand your current priorities and route the right follow up."
                  heroImage="/insights-feed-bg.jpg"
                  className={heroSecondaryButtonClass}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

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