"use client";

import Image from "next/image";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button";

type DownloadItem = {
  title: string;
  format: string;
  href: string;
  desc: string;
};

export default function CoETemplatePackPage() {
  const downloads: DownloadItem[] = [
    {
      title: "Executive Blueprint Deck",
      format: "PPTX",
      href: "/downloads/coe/executive-blueprint-deck.pptx",
      desc: "Board ready framing for AI governance, ownership, and executive decision structure.",
    },
    {
      title: "Fillable Practitioner Kit",
      format: "XLSX",
      href: "/downloads/coe/fillable-practitioner-kit.xlsx",
      desc: "Working template set for scoring, intake, tracking, and operating cadence preparation.",
    },
    {
      title: "AI CoE Charter",
      format: "DOCX",
      href: "/downloads/coe/ai-coe-charter.docx",
      desc: "Editable charter template for scope, accountability, decision rights, and governance posture.",
    },
    {
      title: "Use Case One Pager",
      format: "DOCX",
      href: "/downloads/coe/use-case-one-pager.docx",
      desc: "Simple executive summary format for documenting AI use case intent and business relevance.",
    },
    {
      title: "Go Live + Hypercare Runbook",
      format: "DOCX",
      href: "/downloads/coe/go-live-hypercare-runbook.docx",
      desc: "Structured transition template for controlled rollout, monitoring, and stabilization.",
    },
    {
      title: "Quarterly AI Value Review",
      format: "DOCX",
      href: "/downloads/coe/quarterly-ai-value-review.docx",
      desc: "Leadership review template for value evidence, risk posture, and executive cadence reporting.",
    },
  ];

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
    "mt-4 text-[2.8rem] font-semibold tracking-[-0.045em] leading-[0.94] text-white sm:text-[3.5rem] lg:text-[4.15rem]";
  const sectionMainHeading =
    "mt-5 text-[2.2rem] font-semibold tracking-[-0.04em] leading-[1.01] text-brand-slate sm:text-[2.85rem]";
  const sectionMainHeadingDark =
    "mt-5 text-[2.2rem] font-semibold tracking-[-0.04em] leading-[1.01] text-white sm:text-[2.85rem]";

  const cardTitleLight =
    "text-[1.24rem] font-bold tracking-[-0.03em] leading-[1.08] text-brand-slate sm:text-[1.4rem]";
  const cardTitleDark =
    "text-[1.24rem] font-bold tracking-[-0.03em] leading-[1.08] text-white sm:text-[1.4rem]";

  const subLabelLight =
    "text-[1.02rem] font-bold tracking-[-0.02em] leading-[1.08] text-brand-slate sm:text-[1.12rem]";
  const subLabelDark =
    "text-[1.02rem] font-bold tracking-[-0.02em] leading-[1.08] text-white sm:text-[1.12rem]";

  const bigChipText =
    "text-white text-base font-bold tracking-[-0.01em] sm:text-[1.05rem]";

  return (
    <>
      {/* ================= HERO ================= */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/insights-feed-bg.jpg"
            alt="Executive resource delivery"
            fill
            priority
            className="object-cover object-[center_center]"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-black/62" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/46 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/28 via-transparent to-black/55" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div
          className="pointer-events-none absolute -top-20 left-1/2 h-64 w-[min(920px,92vw)] -translate-x-1/2 opacity-60 blur-3xl"
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
            <div className="max-w-3xl">
              <p className={heroLabel}>Resource delivery</p>

              <h1 className={heroMainHeading}>
                Your executive resource pack
                <span className="block text-white">is ready for download</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white">
                This delivery page gives you access to the working pack, reference files, and next step options
                aligned to governed AI execution, executive control, and enterprise readiness.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white">
                Built to support leadership teams evaluating operating model design, execution governance,
                rollout readiness, and defensible outcomes.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {["Executive Control", "Governance Clarity", "Defensible Outcomes"].map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center rounded-full bg-white/14 px-5 py-3 text-white backdrop-blur ring-1 ring-white/12"
                  >
                    <span className={bigChipText}>{b}</span>
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  { k: "Downloads", v: "Structured templates and working materials." },
                  { k: "License", v: "Snapshot of permitted internal use." },
                  { k: "Next steps", v: "Optional advisory and implementation support." },
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

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black shadow-[0_60px_130px_-45px_rgba(0,0,0,0.75)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/governance.jpg"
                    alt="Governed AI execution delivery"
                    fill
                    className="object-cover object-[center_center]"
                    sizes="(min-width: 1024px) 42vw, 100vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                </div>

                <div className="absolute inset-x-6 bottom-5">
                  <div className="rounded-2xl bg-black/42 p-5 backdrop-blur-md ring-1 ring-white/10">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white">
                      Delivery summary
                    </p>
                    <p className={`${cardTitleDark} mt-3`}>
                      Executive templates for governance and operating control
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white">
                      Use these materials to structure decision rights, operating cadence, evidence review,
                      and controlled rollout conversations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ================= DOWNLOADS + LICENSE ================= */}
      <Section className={`relative overflow-hidden ${sectionDarkAlt}`}>
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            {/* DOWNLOADS */}
            <div className={`${cardBase} p-6 sm:p-8`}>
              <p className={sectionLabelLight}>Downloads</p>

              <h2 className={sectionMainHeading}>
                Resource pack files
              </h2>

              <p className="mt-4 text-base leading-relaxed text-brand-muted">
                Six working documents designed to support executive review, rollout structure,
                and internal operating discipline.
              </p>

              <div className="mt-10 space-y-4">
                {downloads.map((item) => (
                  <div key={item.title} className={`${cardSoft} ${cardHover} p-5 sm:p-6`}>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <div className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary text-[10px] font-bold text-white">
                            ✓
                          </span>

                          <div className="min-w-0">
                            <p className={cardTitleLight}>{item.title}</p>
                            <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex shrink-0 items-center gap-4 sm:pl-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-muted">
                          {item.format}
                        </span>

                        <a
                          href={item.href}
                          download
                          className="relative inline-flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-5 py-3 text-sm font-bold tracking-[-0.02em] leading-[1] text-white transition-all duration-200 ease-out shadow-[0_18px_60px_-30px_rgba(96,165,250,0.85)] ring-1 ring-white/10 hover:-translate-y-[1px] hover:brightness-[1.06] hover:shadow-[0_26px_80px_-36px_rgba(96,165,250,0.95)]"
                        >
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(1200px_220px_at_20%_0%,rgba(255,255,255,0.35),transparent_55%)]"
                          />
                          <span className="relative inline-flex items-center justify-center">
                            Download
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`${cardSoft} mt-8 p-5`}>
                <p className={subLabelLight}>Delivery note</p>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  Use these files internally as working materials for alignment, review, and planning.
                  They are intended to support structured governance and execution conversations.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-8">
              <div className={`${cardBase} p-6 sm:p-8`}>
                <p className={sectionLabelLight}>License snapshot</p>

                <h2 className={sectionMainHeading}>
                  Internal use parameters
                </h2>

                <ul className="mt-8 space-y-4">
                  {[
                    "Team use for internal planning and operating discussions",
                    "Internal reuse permitted across aligned stakeholders",
                    "External client delivery requires the appropriate commercial addendum",
                    "Updates included for the current delivery cycle",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-brand-muted"
                    >
                      <span className="mt-2 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary text-[10px] font-bold text-white">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className={`${cardSoft} mt-8 p-6`}>
                  <p className={subLabelLight}>Recommended next steps</p>

                  <ul className="mt-4 space-y-3 text-sm text-brand-muted">
                    {[
                      "Review the charter with executive and operational owners",
                      "Prioritize the first 10 use cases using the provided structure",
                      "Use the quarterly review template to define leadership cadence",
                    ].map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/35" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <ButtonLink href="/contact#briefing" variant="primary">
                      Book Executive Briefing
                    </ButtonLink>

                    <ButtonLink href="/services" variant="secondary">
                      View Services
                    </ButtonLink>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/15 bg-[#0B1529] p-6 shadow-[0_40px_120px_-55px_rgba(2,6,23,0.55)]">
                <p className={sectionLabelDark}>Need implementation support?</p>

                <h3 className={sectionMainHeadingDark}>
                  Move from templates
                  <span className="block text-white">to governed execution</span>
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-white">
                  If you want help turning these materials into a controlled operating model,
                  advisory support can accelerate prioritization, governance structure, and rollout design.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <ButtonLink href="/contact#briefing" variant="primary">
                    Book Advisory Call
                  </ButtonLink>

                  <ButtonLink href="/proof/library" variant="secondary">
                    View Proof Library
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}