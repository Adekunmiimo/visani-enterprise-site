"use client";

import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button";

export default function TermsPage() {
  const sectionDarkAlt =
    "bg-gradient-to-b from-[#F6F8FC] via-[#F0F4F9] to-[#E8EEF7]";

  const cardBase =
    "rounded-2xl bg-white/92 ring-1 ring-black/10 shadow-[0_18px_60px_-34px_rgba(2,6,23,0.45)] backdrop-blur-[2px]";

  const heroLabel =
    "text-[2rem] font-bold tracking-[-0.035em] leading-[1] text-white sm:text-[2.5rem] lg:text-[3rem]";

  const heroMainHeading =
    "mt-4 text-[2.8rem] font-semibold tracking-[-0.045em] leading-[0.94] text-white sm:text-[3.5rem] lg:text-[4.2rem]";

  const sectionLabelLight =
    "text-2xl font-bold tracking-[-0.03em] leading-[1.02] text-brand-slate sm:text-[2rem]";

  const sectionMainHeading =
    "mt-5 text-[2.25rem] font-semibold tracking-[-0.04em] leading-[1.02] text-brand-slate sm:text-[2.9rem]";

  const subLabelLight =
    "text-[1.02rem] font-bold tracking-[-0.02em] leading-[1.08] text-brand-slate sm:text-[1.12rem]";

  return (
    <>
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0B1220]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/55" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div
          className="pointer-events-none absolute -top-20 left-1/2 h-64 w-[min(900px,92vw)] -translate-x-1/2 opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(96,165,250,0.18), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className={heroLabel}>Terms</p>

            <h1 className={heroMainHeading}>
              Terms of Use
              <span className="block text-white/90">for Visani America</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white">
              These Terms of Use govern access to and use of this website, including
              executive briefing requests, gated resource downloads, written content,
              and related advisory communications.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Effective date: [Insert Date]
            </p>
          </div>
        </div>
      </Section>

      <Section className={`relative overflow-hidden ${sectionDarkAlt}`}>
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />

        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <div className={`${cardBase} p-8 sm:p-10 lg:p-12 space-y-10`}>
            <div>
              <p className={sectionLabelLight}>Overview</p>
              <h2 className={sectionMainHeading}>Terms governing site use</h2>
              <p className="mt-5 text-base leading-relaxed text-brand-muted">
                By accessing or using this website, you agree to these Terms of Use.
                If you do not agree, you should not use the site.
              </p>
            </div>

            <div>
              <p className={subLabelLight}>1. Website purpose</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                This website is provided for informational, business development,
                advisory inquiry, and executive resource access purposes. Content is
                intended to support professional evaluation of AI governance,
                enterprise execution, and related advisory matters.
              </p>
            </div>

            <div>
              <p className={subLabelLight}>2. No automatic advisory engagement</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                Submission of a contact form, briefing request, or download request
                does not create a formal advisory, consulting, legal, fiduciary, or
                contractual engagement unless separately agreed in writing.
              </p>
            </div>

            <div>
              <p className={subLabelLight}>3. Acceptable use</p>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-brand-muted">
                <p>You agree not to:</p>
                <div className="space-y-2">
                  <p>• use the site for unlawful, fraudulent, or abusive purposes</p>
                  <p>• interfere with site operations, systems, or security</p>
                  <p>• submit false, misleading, or unauthorized information</p>
                  <p>• scrape, copy, reproduce, or republish protected materials without permission</p>
                  <p>• attempt unauthorized access to restricted systems, forms, or files</p>
                </div>
              </div>
            </div>

            <div>
              <p className={subLabelLight}>4. Intellectual property</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                Unless otherwise stated, the site’s content, structure, writing,
                branding, visuals, frameworks, downloadable resources, and associated
                materials are owned by or licensed to Visani America and are protected
                by applicable intellectual property laws.
              </p>
            </div>

            <div>
              <p className={subLabelLight}>5. Downloaded and gated resources</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                Downloaded materials are provided for permitted business evaluation,
                internal review, or other stated purposes only. You may not resell,
                sublicense, misrepresent authorship, or distribute restricted
                materials except where explicitly allowed in writing.
              </p>
            </div>

            <div>
              <p className={subLabelLight}>6. No warranty</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                This site and its materials are provided on an “as is” and “as
                available” basis. To the maximum extent permitted by law, we disclaim
                warranties of accuracy, completeness, merchantability, fitness for a
                particular purpose, non infringement, and uninterrupted availability.
              </p>
            </div>

            <div>
              <p className={subLabelLight}>7. Limitation of liability</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                To the maximum extent permitted by law, Visani America shall not be
                liable for indirect, incidental, consequential, special, exemplary,
                or punitive damages arising from or related to your use of the site,
                submitted requests, reliance on materials, or inability to access the
                site.
              </p>
            </div>

            <div>
              <p className={subLabelLight}>8. Third party links and services</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                The site may contain or rely on third party tools, hosting providers,
                email delivery systems, analytics providers, or external links. We are
                not responsible for third party content, operations, or policies.
              </p>
            </div>

            <div>
              <p className={subLabelLight}>9. Changes to the site or terms</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                We may modify, suspend, restrict, or discontinue any part of the site
                at any time. We may also update these Terms of Use from time to time,
                with updated terms becoming effective when posted.
              </p>
            </div>

            <div>
              <p className={subLabelLight}>10. Governing law</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                These terms shall be governed by and interpreted under the laws of
                [Insert State / Country], without regard to conflict of law rules.
              </p>
            </div>

            <div>
              <p className={subLabelLight}>11. Contact</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                For terms related questions, notices, or permissions, contact:
                <br />
                <span className="font-semibold text-brand-slate">
                  [Insert your business contact email]
                </span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <ButtonLink href="/privacy" variant="primary">
                View Privacy Policy
              </ButtonLink>
              <ButtonLink href="/contact#briefing" variant="secondary">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}