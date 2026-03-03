// ✅ REPLACE ENTIRE FILE — app/proof/library/[slug]/page.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useMemo } from "react";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

type LibraryDoc = {
  slug: string;
  title: string;
  meta: string;
  summary: string;
  bullets: string[];
};

export default function ProofLibrarySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Next.js 16: params is a Promise, unwrap it first
  const { slug } = use(params);

  useRevealOnScroll();

  const sectionLight =
    "bg-gradient-to-b from-[#F6F8FC] via-[#F0F4F9] to-[#E8EEF7]";
  const cardBase =
    "rounded-2xl bg-white/92 ring-1 ring-black/10 shadow-[0_18px_60px_-34px_rgba(2,6,23,0.45)] backdrop-blur-[2px]";

  // ✅ IMPORTANT: These MUST match the hrefs you use on /proof page
  const docs: LibraryDoc[] = useMemo(
    () => [
      {
        slug: "governance-before-scale",
        meta: "Governance • Decision rights",
        title: "Governance established before scale",
        summary:
          "Decision rights, approval thresholds, and escalation paths are defined and enforced before enterprise rollout.",
        bullets: [
          "Decision rights + approval thresholds are explicit",
          "Escalation paths are defined and used",
          "Governance is enforced before scale",
          "Exceptions are handled without losing executive control",
        ],
      },
      {
        slug: "ownership-explicit",
        meta: "Ownership • Accountability",
        title: "Operational ownership is explicit",
        summary:
          "Named executives are accountable for outcomes across workflows — ownership is never informal or implied.",
        bullets: [
          "Named ownership exists per workflow and domain",
          "Accountability survives real operations, not pilots",
          "Escalation ownership is clear and used",
          "Ownership is measurable under executive cadence",
        ],
      },
      {
        slug: "value-defensible",
        meta: "Measurement • Board reporting",
        title: "Value is measured and defensible",
        summary:
          "Outcomes are reviewed on cadence and tied to business performance, risk posture, and executive reporting.",
        bullets: [
          "Outcome metrics reviewed on cadence",
          "Variance narrative exists and is explainable",
          "Value is tied to business performance",
          "Exec reporting is board-ready, not vanity metrics",
        ],
      },
      {
        slug: "permissioned-execution",
        meta: "Control • Permissioned execution",
        title: "Permissioned execution is enforced",
        summary:
          "AI is allowed to act only within defined boundaries. Unapproved agents, workflows, and data access are blocked by policy.",
        bullets: [
          "Clear permission scopes exist by workflow",
          "Out-of-policy actions are blocked",
          "Safe fallbacks exist when uncertain",
          "Escalation triggers preserve human control",
        ],
      },
      {
        slug: "runtime-observability",
        meta: "Evidence • Audit trail",
        title: "Runtime evidence is produced, not assumed",
        summary:
          "Telemetry, logs, and decision records provide audit-ready traceability for what ran, who approved it, what changed, and why.",
        bullets: [
          "Audit-ready telemetry exists",
          "Decision records explain what happened and why",
          "Approvals link to runtime actions",
          "Change history is visible and attributable",
        ],
      },
      {
        slug: "sustained-adoption",
        meta: "Adoption • Operating discipline",
        title: "Adoption survives real operations",
        summary:
          "Usage durability is measured with compliance and behavior signals — not vanity metrics or initial launch spikes.",
        bullets: [
          "Durable adoption is measured over time",
          "Behavior signals are used, not vanity metrics",
          "Compliance indicators exist",
          "Drift and breakdown signals are visible",
        ],
      },
    ],
    []
  );

  // ✅ FIX: use `slug` (unwrapped), NOT `params.slug`
  const doc = docs.find((d) => d.slug === slug);
  if (!doc) return notFound();

  return (
    <>
      {/* HERO */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/proof2.jpg"
            alt={doc.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/65">
            {doc.meta}
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {doc.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80">
            {doc.summary}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/proof/library" variant="secondary">
              Back to Proof Library
            </ButtonLink>
            <ButtonLink href="/contact#proof-review" variant="primary">
              Request Proof Review
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2 text-xs">
            <Link
              href="/proof"
              className="font-semibold text-white/70 hover:text-white"
            >
              Proof
            </Link>
            <span className="text-white/40">/</span>
            <Link
              href="/proof/library"
              className="font-semibold text-white/70 hover:text-white"
            >
              Library
            </Link>
            <span className="text-white/40">/</span>
            <span className="font-semibold text-white/85">{doc.slug}</span>
          </div>
        </div>
      </Section>

      {/* CONTENT */}
      <Section className={`relative overflow-hidden ${sectionLight} reveal`}>
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className={`${cardBase} p-8 sm:p-10`}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
              What this evidence package includes
            </p>

            <ul className="mt-6 space-y-4">
              {doc.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm leading-relaxed text-brand-muted"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/35" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

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
    </>
  );
}