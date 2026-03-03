"use client";

import Image from "next/image";
import { useMemo } from "react";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { HashScroll } from "@/components/hash-scroll";
import { ExecutiveBriefingForm } from "@/components/executive-briefing-form";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

type AudienceCard = {
  title: string;
  desc: string;
  icon: "clock" | "plus" | "shield" | "panel";
};

function AudienceIcon({ kind }: { kind: AudienceCard["icon"] }) {
  const base = "h-7 w-7";
  const stroke = 2;

  if (kind === "clock") {
    return (
      <svg
        className={base}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    );
  }

  if (kind === "plus") {
    return (
      <svg
        className={base}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12h18" />
        <path d="M12 3v18" />
      </svg>
    );
  }

  if (kind === "shield") {
    return (
      <svg
        className={base}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l9 4v6c0 5-3.5 9.7-9 10-4.5-.3-9-5-9-10V6l9-4z" />
      </svg>
    );
  }

  return (
    <svg
      className={base}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7h18" />
      <path d="M6 7v10" />
      <path d="M18 7v10" />
      <path d="M8 21h8" />
    </svg>
  );
}

export default function ContactPage() {
  useRevealOnScroll();

  // ✅ Same token approach used on Insights/About/Proof
  const sectionDarkAlt =
    "bg-gradient-to-b from-[#F6F8FC] via-[#F0F4F9] to-[#E8EEF7]";
  const cardBase =
    "rounded-2xl bg-white/92 ring-1 ring-black/10 shadow-[0_18px_60px_-34px_rgba(2,6,23,0.45)] backdrop-blur-[2px]";
  const cardSoft =
    "rounded-2xl bg-white/88 ring-1 ring-black/8 shadow-[0_16px_52px_-32px_rgba(2,6,23,0.40)] backdrop-blur-[2px]";
  const cardHover =
    "transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_80px_-38px_rgba(2,6,23,0.55)]";

  // ✅ /public root images (no folders)
  const img = useMemo(
    () => ({
      hero: "/contact-hero-bg.jpg",
      side: "/contact-executive.jpg",
      cta: "/cta-executive-bg.jpg",
    }),
    []
  );

  const sessionFocus = useMemo(
    () => [
      "Where current AI initiatives encounter execution friction",
      "Governance gaps that emerge as pilots move toward scale",
      "Ownership, accountability, and decision-making clarity",
      "What defensible AI value looks like at board and executive level",
    ],
    []
  );

  const audiences: AudienceCard[] = useMemo(
    () => [
      {
        icon: "clock",
        title: "C-suite executives",
        desc: "Accountable for enterprise performance, strategic risk, and the long-term operating impact of AI decisions.",
      },
      {
        icon: "plus",
        title: "Technology & data leadership",
        desc: "Responsible for scaling AI into core systems while maintaining reliability, control, and operational integrity.",
      },
      {
        icon: "shield",
        title: "Risk, compliance & audit leaders",
        desc: "Ensuring adoption remains defensible, auditable, and aligned with governance expectations.",
      },
      {
        icon: "panel",
        title: "Boards & operating committees",
        desc: "Oversight bodies focused on governance, value realization, and sustained accountability at enterprise scale.",
      },
    ],
    []
  );

  return (
    <>
      {/* ✅ Ensures /contact#briefing works reliably */}
      <HashScroll />

      {/* ================= CONTACT HERO (EXECUTIVE — CONSISTENT WITH INSIGHTS/PROOF) ================= */}
      <Section className="relative overflow-hidden">
        {/* Background image (consistent: use next/image, not style backgroundImage) */}
        <div className="absolute inset-0">
          <Image
            src={img.hero}
            alt="Executive briefing — contact"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Controlled overlays (same pattern you’re using elsewhere) */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        {/* Soft executive glow (palette aligned: blue + green) */}
        <div
          className="pointer-events-none absolute -top-20 left-1/2 h-64 w-[min(900px,92vw)] -translate-x-1/2 opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(96,165,250,0.18), transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -right-24 top-28 h-80 w-80 rounded-full opacity-45 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(74,222,128,0.14), transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            {/* LEFT */}
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                Executive briefing
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Book an executive
                <span className="block text-white/85">decision briefing</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">
                A structured working session for senior leaders evaluating whether AI can operate
                as a governed, controllable, and accountable enterprise capability — not a pilot.
              </p>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65">
                We focus on execution reality: ownership, governance, decision rights, risk exposure,
                and whether outcomes can be defended under executive and board scrutiny.
              </p>

              {/* Badges (consistent with other pages) */}
              <div className="mt-7 flex flex-wrap gap-2">
                {["Execution Control", "Runtime Governance", "Board Metrics"].map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur ring-1 ring-inset ring-white/10"
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* In-page scroll */}
              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href="#briefing" variant="primary" className="px-8 py-3">
                  Go to Briefing Request Form
                </ButtonLink>
                <ButtonLink href="/downloads/board-brief.pdf" variant="secondary" className="px-8 py-3">
                  Download Board Brief (PDF)
                </ButtonLink>
              </div>

              <p className="mt-8 max-w-xl text-xs leading-relaxed text-white/55">
                Confidential. No demos, no vendor pitches, no generic frameworks.
              </p>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/15 bg-black shadow-[0_60px_130px_-45px_rgba(0,0,0,0.75)]">
                <Image
                  src={img.side}
                  alt="Executive briefing coordination and leadership communication"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>

              <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/60">
                Structured for clarity, accountability, and disciplined executive decision-making.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ================= WHAT TO EXPECT (LIGHT — CONSISTENT TOKENS) ================= */}
      <Section className={`relative overflow-hidden ${sectionDarkAlt} reveal`}>
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            {/* LEFT */}
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
                What to expect
              </p>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-brand-slate sm:text-4xl">
                A working session
                <span className="block text-brand-slate/85">not a sales conversation</span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-brand-muted">
                This briefing is a focused executive working discussion. There are no demos, no vendor pitches,
                and no generic transformation frameworks.
              </p>

              <p className="mt-5 text-base leading-relaxed text-brand-muted">
                Expect a direct examination of how AI behaves inside your operating environment — where control holds,
                where it weakens, and where execution risk emerges as scale increases.
              </p>

              <div className={`${cardSoft} mt-8 p-6`}>
                <p className="text-sm leading-relaxed text-brand-muted">
                  Outcome: clear decision paths, control boundary implications, and what evidence leadership needs
                  before AI becomes material to operations.
                </p>
              </div>
            </div>

            {/* RIGHT — Session focus panel (modern, consistent) */}
            <div className={`${cardBase} relative p-8 sm:p-10`}>
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(96,165,250,0.85), rgba(74,222,128,0.75))",
                }}
              />

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
                Session focus
              </p>

              <ul className="mt-6 space-y-4">
                {sessionFocus.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-brand-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/35" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pointer-events-none h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { k: "Format", v: "30 minutes, structured agenda" },
                  { k: "Audience", v: "Exec, board, risk leadership" },
                  { k: "Output", v: "Decision clarity + next steps" },
                  { k: "Tone", v: "Direct, evidence-based" },
                ].map((x) => (
                  <div key={x.k} className="rounded-xl bg-black/[0.03] ring-1 ring-inset ring-black/10 px-4 py-3">
                    <p className="text-xs font-semibold text-brand-slate">{x.k}</p>
                    <p className="mt-1 text-xs leading-relaxed text-brand-muted">{x.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ================= WHO THIS IS FOR (LIGHT — CONSISTENT CARDS) ================= */}
      <Section className="bg-white reveal">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
              Intended audience
            </p>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-brand-slate sm:text-4xl">
              Designed for leaders
              <span className="block text-brand-slate/85">accountable for outcomes</span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-brand-muted">
              Structured for senior decision-makers accountable for enterprise performance, governance posture,
              and long-term risk exposure — not exploratory teams or early pilots.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a) => (
              <div key={a.title} className={`${cardBase} ${cardHover} p-8 text-center`}>
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-black/5 ring-1 ring-inset ring-black/10 text-brand-slate">
                  <AudienceIcon kind={a.icon} />
                </div>
                <p className="mt-5 text-sm font-semibold text-brand-slate">{a.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= BRIEFING FORM (ANCHOR TARGET) ================= */}
      <Section className={`relative overflow-hidden ${sectionDarkAlt} reveal`}>
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />

        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div id="briefing" className="scroll-mt-28">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              {/* Left intro copy */}
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
                  Request form
                </p>

                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-brand-slate sm:text-4xl">
                  Executive briefing intake
                  <span className="block text-brand-slate/85">details for scheduling</span>
                </h2>

                <p className="mt-6 text-base leading-relaxed text-brand-muted">
                  Share the essentials so we can respond with the right next steps and scheduling options.
                  Reviewed directly.
                </p>

                <div className={`${cardSoft} mt-8 p-7`}>
                  <p className="text-sm font-semibold text-brand-slate">What happens next</p>
                  <ul className="mt-4 space-y-3 text-sm text-brand-muted">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/35" />
                      <span>We review your request (no automated sales sequences)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/35" />
                      <span>We reply with scheduling options and a short agenda</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/35" />
                      <span>We run a structured 30-minute decision briefing</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <ButtonLink href="/proof/library" variant="secondary">
                    View Proof Library (Redacted)
                  </ButtonLink>
                  <ButtonLink href="/insights" variant="secondary">
                    Read Executive Briefs
                  </ButtonLink>
                </div>
              </div>

              {/* Right: actual form */}
              <div className={`${cardBase} p-7 sm:p-8`}>
                <ExecutiveBriefingForm />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ================= FINAL CTA (DARK — CONSISTENT WITH PROOF/ABOUT) ================= */}
      <Section className="relative overflow-hidden reveal">
        <div className="absolute inset-0">
          <Image
            src={img.cta}
            alt="Schedule an executive briefing"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/75 to-black/90" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl rounded-[32px] border border-white/15 bg-white/10 backdrop-blur-2xl px-10 py-12 sm:px-14 sm:py-16 text-center shadow-[0_70px_180px_-60px_rgba(0,0,0,0.9)]">
            <div className="mx-auto mb-8 grid h-14 w-14 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 shadow-[0_0_40px_rgba(255,255,255,0.18)]">
              <svg
                className="h-7 w-7 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3l8 4v6c0 5-3.5 9.7-8 10-4.5-.3-8-5-8-10V7l8-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/65">
              Executive briefing
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Decision clarity
              <span className="block text-white/85">before AI becomes material</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-white/80">
              If AI is becoming material to enterprise performance, this briefing helps determine whether it is
              truly governable at scale — before risk, scrutiny, or accountability force the issue.
            </p>

            <div className="mt-10 flex justify-center">
              <ButtonLink href="#briefing" variant="primary" className="px-12 py-4 text-base">
                Schedule a 30-Minute Executive Briefing
              </ButtonLink>
            </div>

            <p className="mt-8 mx-auto max-w-xl text-sm leading-relaxed text-white/55">
              Confidential and structured for executives, boards, and risk leadership.
            </p>
          </div>
        </div>
      </Section>

      {/* ================= GLOBAL REVEAL STYLES (MATCH OTHER PAGES) ================= */}
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