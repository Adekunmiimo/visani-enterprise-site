"use client";

import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button";

export default function PrivacyPage() {
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
            <p className={heroLabel}>Privacy</p>

            <h1 className={heroMainHeading}>
              Privacy Policy
              <span className="block text-white/90">for Visani America</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white">
              This Privacy Policy explains how we collect, use, store, and protect
              information submitted through this site, including executive briefing
              requests, gated resource requests, and direct contact forms.
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
              <h2 className={sectionMainHeading}>How we handle your information</h2>
              <p className="mt-5 text-base leading-relaxed text-brand-muted">
                Visani America collects only the information reasonably necessary to
                respond to inquiries, evaluate executive briefing requests, deliver
                requested resources, improve site experience, and maintain appropriate
                business records.
              </p>
            </div>

            <div>
              <p className={subLabelLight}>1. Information we collect</p>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-brand-muted">
                <p>
                  We may collect information you voluntarily submit, including your
                  name, work email address, company name, job title, phone number,
                  strategic priorities, briefing notes, and any details included in
                  request forms.
                </p>
                <p>
                  We may also collect limited technical information such as browser
                  type, device information, referral source, IP address, and basic
                  usage analytics where enabled.
                </p>
              </div>
            </div>

            <div>
              <p className={subLabelLight}>2. How we use your information</p>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-brand-muted">
                <p>We use submitted information to:</p>
                <div className="space-y-2">
                  <p>• respond to executive briefing requests and contact inquiries</p>
                  <p>• deliver gated resources, documents, and download links</p>
                  <p>• follow up regarding advisory services or requested discussions</p>
                  <p>• maintain internal records and improve service delivery</p>
                  <p>• protect the site against abuse, fraud, or unauthorized activity</p>
                </div>
              </div>
            </div>

            <div>
              <p className={subLabelLight}>3. Work email requirement</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                Certain forms on this site may require a business or company email
                address. Generic personal email providers may be restricted for
                specific executive resources or briefing requests.
              </p>
            </div>

            <div>
              <p className={subLabelLight}>4. Sharing of information</p>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-brand-muted">
                <p>
                  We do not sell your personal information. We may share information
                  only with service providers or systems reasonably necessary to
                  operate the site, process submissions, send requested emails,
                  maintain infrastructure, or comply with legal obligations.
                </p>
                <p>
                  We may disclose information where required by law, regulation,
                  subpoena, court order, or to protect our legal rights, systems,
                  operations, or users.
                </p>
              </div>
            </div>

            <div>
              <p className={subLabelLight}>5. Email communications</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                If you submit a form, we may send you administrative or follow up
                emails related to your request. We do not represent these as general
                marketing subscriptions unless explicitly stated.
              </p>
            </div>

            <div>
              <p className={subLabelLight}>6. Data retention</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                We retain submitted information for as long as reasonably necessary to
                respond to inquiries, maintain business records, deliver requested
                services, enforce our policies, and satisfy legal, tax, security, or
                compliance obligations.
              </p>
            </div>

            <div>
              <p className={subLabelLight}>7. Security</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                We use reasonable administrative, technical, and organizational
                measures to protect submitted information. However, no transmission or
                storage system can be guaranteed completely secure.
              </p>
            </div>

            <div>
              <p className={subLabelLight}>8. Your choices</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                You may request correction or deletion of submitted personal
                information where appropriate, subject to legal, recordkeeping,
                operational, or security requirements.
              </p>
            </div>

            <div>
              <p className={subLabelLight}>9. Third party services</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                This site may rely on third party providers for hosting, analytics,
                form processing, email delivery, and infrastructure. Their handling of
                data may also be subject to their own policies and terms.
              </p>
            </div>

            <div>
              <p className={subLabelLight}>10. Changes to this policy</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                We may update this Privacy Policy from time to time. Changes become
                effective when posted on this page unless otherwise stated.
              </p>
            </div>

            <div>
              <p className={subLabelLight}>11. Contact</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                For privacy related questions, requests, or notices, contact:
                <br />
                <span className="font-semibold text-brand-slate">
                  [Insert your business contact email]
                </span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <ButtonLink href="/terms" variant="primary">
                View Terms of Use
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