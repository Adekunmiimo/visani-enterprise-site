// ✅ CREATE FILE app/proof/request-confirmation/page.tsx
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
  const cardSoft =
    "rounded-2xl bg-white/88 ring-1 ring-black/8 shadow-[0_16px_52px_-32px_rgba(2,6,23,0.40)] backdrop-blur-[2px]";

  // ✅ TYPOGRAPHY: aligned to finished HomePage pattern
  const sectionLabelLight =
    "text-2xl font-bold tracking-[-0.03em] leading-[1.02] text-brand-slate sm:text-[2rem]";
  const sectionMainHeading =
    "mt-5 text-[2.25rem] font-semibold tracking-[-0.04em] leading-[1.02] text-brand-slate sm:text-[2.9rem]";
  const subLabelLight =
    "text-[1.02rem] font-bold tracking-[-0.02em] leading-[1.08] text-brand-slate sm:text-[1.12rem]";

  return (
    <>
      <Section className={`relative overflow-hidden ${sectionDark} reveal`}>
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className={`${cardBase} mx-auto max-w-3xl p-8 text-center sm:p-10`}>
            <p className={sectionLabelLight}>Request received</p>

            <h1 className={sectionMainHeading}>
              Thank you
              <span className="block text-brand-slate/85">
                Your request has been received
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-muted">
              We have received your request for a redacted evidence package.
              Our team will review the request and respond with the most relevant
              package options. If appropriate, we may also propose a private
              executive review session to walk through the evidence.
            </p>

            <div className={`${cardSoft} mx-auto mt-8 max-w-2xl p-6 text-left`}>
              <p className={subLabelLight}>What happens next</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                Your request will be reviewed for relevance, confidentiality,
                and fit. Where appropriate, the response may include guided
                package options or a recommendation for a private executive
                review conversation.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/contact#briefing" variant="primary">
                Book Executive Briefing
              </ButtonLink>

              <ButtonLink href="/proof/library" variant="secondary">
                Back to Proof Library
              </ButtonLink>
            </div>

            <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-brand-muted">
              Evidence is shared privately to protect confidentiality and to
              ensure proper interpretation within a governance context.
            </p>
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