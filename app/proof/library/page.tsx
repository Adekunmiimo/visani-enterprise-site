// ✅ REPLACE ENTIRE FILE app/proof/library/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

type LibraryItem = {
  slug: string;
  title: string;
  meta: string;
  excerpt: string;
};

export default function ProofLibraryIndexPage() {
  useRevealOnScroll();

  const sectionLight =
    "bg-gradient-to-b from-[#F6F8FC] via-[#F0F4F9] to-[#E8EEF7]";
  const cardBase =
    "rounded-2xl bg-white/92 ring-1 ring-black/10 shadow-[0_18px_60px_-34px_rgba(2,6,23,0.45)] backdrop-blur-[2px]";
  const cardSoft =
    "rounded-2xl bg-white/88 ring-1 ring-black/8 shadow-[0_16px_52px_-32px_rgba(2,6,23,0.40)] backdrop-blur-[2px]";
  const cardHover =
    "transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_80px_-38px_rgba(2,6,23,0.55)]";

  // ✅ TYPOGRAPHY: aligned to finished HomePage pattern
  const heroLabel =
    "text-[2rem] font-bold tracking-[-0.035em] leading-[1] text-white sm:text-[2.5rem] lg:text-[3rem]";
  const sectionLabelLight =
    "text-2xl font-bold tracking-[-0.03em] leading-[1.02] text-brand-slate sm:text-[2rem]";
  const heroMainHeading =
    "mt-4 text-[2.8rem] font-semibold tracking-[-0.045em] leading-[0.94] text-white sm:text-[3.5rem] lg:text-[4.2rem]";
  const sectionMainHeading =
    "mt-5 text-[2.25rem] font-semibold tracking-[-0.04em] leading-[1.02] text-brand-slate sm:text-[2.9rem]";
  const cardTitleLight =
    "text-[1.3rem] font-bold tracking-[-0.03em] leading-[1.08] text-brand-slate sm:text-[1.5rem]";
  const subLabelLight =
    "text-[1.02rem] font-bold tracking-[-0.02em] leading-[1.08] text-brand-slate sm:text-[1.12rem]";
  const bigChipText =
    "text-white text-base font-bold tracking-[-0.01em] sm:text-[1.05rem]";

  const items: LibraryItem[] = useMemo(
    () => [
      {
        slug: "governance-before-scale",
        title: "Governance established before scale",
        meta: "Governance • Decision rights",
        excerpt:
          "Decision rights, approval thresholds, and escalation paths are defined and enforced prior to rollout.",
      },
      {
        slug: "ownership-explicit",
        title: "Operational ownership is explicit",
        meta: "Ownership • Accountability",
        excerpt:
          "Named executives are accountable for outcomes across workflows. Ownership is explicit, not implied.",
      },
      {
        slug: "value-defensible",
        title: "Value is measured and defensible",
        meta: "Measurement • Board reporting",
        excerpt:
          "Outcome metrics are reviewed on cadence and tied to performance, risk posture, and executive reporting.",
      },
      {
        slug: "permissioned-execution",
        title: "Permissioned execution is enforced",
        meta: "Control • Permissioned execution",
        excerpt:
          "AI is allowed to act only within defined boundaries. Unapproved agents and data access are blocked by policy.",
      },
      {
        slug: "runtime-observability",
        title: "Runtime evidence is produced, not assumed",
        meta: "Evidence • Audit trail",
        excerpt:
          "Telemetry, logs, and decision records provide audit ready traceability for what ran, what changed, and why.",
      },
      {
        slug: "sustained-adoption",
        title: "Adoption survives real operations",
        meta: "Adoption • Operating discipline",
        excerpt:
          "Usage durability is measured with compliance and behavior signals, not vanity metrics or launch spikes.",
      },
    ],
    []
  );

  return (
    <>
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/proof-cta-bg.jpg"
            alt="Proof Library background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <p className={heroLabel}>Proof Library</p>

          <h1 className={heroMainHeading}>
            Redacted evidence packages
            <span className="block text-white">for executive review</span>
          </h1>

          <p className={`${bigChipText} mt-6 max-w-2xl leading-relaxed text-white`}>
            These packages are anonymized and written as execution patterns and artifacts,
            designed for leaders evaluating whether AI is governable, auditable, and accountable.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Execution Signals", "Governance", "Audit Evidence", "Executive Review"].map(
              (b) => (
                <span
                  key={b}
                  className="inline-flex items-center rounded-full bg-white/14 px-5 py-3 text-white backdrop-blur ring-1 ring-white/12"
                >
                  <span className={bigChipText}>{b}</span>
                </span>
              )
            )}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/contact#proof-review" variant="primary">
              Request Proof Review
            </ButtonLink>
            <ButtonLink href="/proof" variant="secondary">
              Back to Proof
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section className={`relative overflow-hidden ${sectionLight} reveal`}>
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className={`${cardBase} p-8 sm:p-10`}>
            <div className="max-w-3xl">
              <p className={sectionLabelLight}>Evidence Index</p>

              <h2 className={sectionMainHeading}>
                Select a package
                <span className="block text-brand-slate/85">to review</span>
              </h2>

              <p className="mt-5 text-base leading-relaxed text-brand-muted">
                Each package includes what executives care about: ownership, approvals, enforcement,
                runtime traceability, and defensible outcomes.
              </p>
            </div>

            <div className={`${cardSoft} mt-8 p-6`}>
              <p className={subLabelLight}>Review standard</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                These redacted packages are structured to reflect how leaders assess governability,
                accountability, evidence quality, and operating discipline under real enterprise conditions.
              </p>
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((x) => (
                <Link
                  key={x.slug}
                  href={`/proof/library/${x.slug}`}
                  className={`${cardBase} ${cardHover} group relative overflow-hidden px-8 py-9`}
                >
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
                    {x.meta}
                  </p>

                  <h3 className={`${cardTitleLight} mt-4`}>{x.title}</h3>

                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                    {x.excerpt}
                  </p>

                  <p className="mt-7 text-sm font-semibold text-brand-slate/80 group-hover:text-brand-slate">
                    Review package →
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/contact#proof-review" variant="primary">
                Request Proof Review
              </ButtonLink>
              <ButtonLink href="/proof" variant="secondary">
                Back to Proof
              </ButtonLink>
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