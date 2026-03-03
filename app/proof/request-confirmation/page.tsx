// ✅ CREATE NEW FILE — app/proof/request-confirmation/page.tsx
"use client";

import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export default function ProofRequestConfirmationPage() {
  useRevealOnScroll();

  const sectionDark =
    "bg-gradient-to-b from-[#F3F6FA] via-[#EEF2F7] to-[#E6ECF4]";
  const cardBase =
    "rounded-2xl bg-white/92 ring-1 ring-black/10 shadow-[0_18px_60px_-34px_rgba(2,6,23,0.45)] backdrop-blur-[2px]";

  return (
    <Section className={`relative overflow-hidden ${sectionDark} reveal`}>
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className={`${cardBase} mx-auto max-w-3xl p-8 sm:p-10 text-center`}>
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-brand-muted">
            Request received
          </p>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-brand-slate sm:text-4xl">
            Thanks.
            <span className="block text-brand-slate/85">
              We’ll route the right evidence package.
            </span>
          </h1>

          <p className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-brand-muted">
            We’ve received your request for the redacted evidence package. We respond with the most relevant
            package options and (if appropriate) propose a private executive review to walk through the evidence.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/contact#briefing" variant="primary">
              Book Executive Briefing
            </ButtonLink>
            <ButtonLink href="/proof/library" variant="secondary">
              Back to Proof Library
            </ButtonLink>
          </div>

          <p className="mt-8 mx-auto max-w-xl text-sm leading-relaxed text-brand-muted">
            Evidence is shared privately to protect confidentiality and prevent misinterpretation outside governance context.
          </p>
        </div>
      </div>
    </Section>
  );
}