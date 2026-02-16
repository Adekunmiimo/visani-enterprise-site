import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* ================= CONTACT HERO (EXECUTIVE, DARK THEME) ================= */}
      <Section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/contact-hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark cinematic overlays (matches other pages) */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-36">
          <div className="grid gap-24 lg:grid-cols-2 lg:items-center">
            {/* LEFT */}
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                Executive briefing
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Book an executive
                <span className="block text-white/80">decision briefing</span>
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/75">
                This briefing is designed for senior leaders evaluating whether AI can
                operate as a governed, controllable, and accountable enterprise
                capability — not as an experiment or pilot.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70">
                The discussion centers on execution reality: ownership, governance,
                decision rights, risk exposure, and whether AI can be defended under
                executive and board scrutiny.
              </p>
            </div>

            {/* RIGHT (visible on all breakpoints) */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-white/15 bg-black shadow-[0_60px_160px_-55px_rgba(0,0,0,0.65)]">
                <Image
                  src="/contact-executive.jpg"
                  alt="Executive briefing coordination and leadership communication"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>

              <p className="mt-5 max-w-sm text-xs leading-relaxed text-white/55">
                Confidential executive discussions, structured for clarity,
                accountability, and disciplined decision-making.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ================= WHAT TO EXPECT ================= */}
      <Section className="bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-6 py-36">
          <div className="grid gap-28 lg:grid-cols-2 lg:items-start">
            {/* LEFT */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
                What to expect
              </p>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-brand-slate">
                A working session
                <span className="block text-brand-slate/80">
                  not a sales conversation
                </span>
              </h2>

              <p className="mt-8 text-base leading-relaxed text-brand-muted">
                This briefing is structured as a focused executive working discussion.
                There are no demos, vendor pitches, or generic transformation
                frameworks.
              </p>

              <p className="mt-6 text-base leading-relaxed text-brand-muted">
                Leaders should expect a direct examination of how AI behaves inside
                their operating environment — where control holds, where it weakens,
                and where execution risk begins to surface as scale increases.
              </p>
            </div>

            {/* RIGHT (Turbopack-safe: single-line className string) */}
            <div className="relative rounded-[32px] border border-brand-border bg-white px-20 py-20 shadow-[0_40px_100px_-35px_rgba(0,0,0,0.14)]">
              <p className="mb-14 text-sm font-semibold uppercase tracking-widest text-brand-muted">
                Session focus
              </p>

              <ul className="space-y-10">
                {[
                  "Where current AI initiatives encounter execution friction",
                  "Governance gaps that emerge as pilots move toward scale",
                  "Ownership, accountability, and decision-making clarity",
                  "What defensible AI value looks like at board and executive level",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-6">
                    <span className="mt-2 h-3.5 w-3.5 rounded-full bg-brand-slate/70" />
                    <p className="text-base leading-relaxed text-brand-muted">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-16 pointer-events-none h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
            </div>
          </div>
        </div>
      </Section>

      {/* ================= WHO THIS IS FOR ================= */}
      <Section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-36">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
              Intended audience
            </p>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-brand-slate sm:text-4xl">
              Designed for leaders
              <span className="block text-brand-slate/80">
                accountable for outcomes
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-brand-muted">
              This briefing is structured for senior decision-makers who are directly
              accountable for enterprise performance, governance posture, and
              long-term risk exposure — not exploratory teams or early-stage pilots.
            </p>
          </div>

          <div className="mt-24 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[30px] border border-brand-border bg-brand-offwhite px-12 py-16 text-center shadow-[0_25px_70px_-30px_rgba(0,0,0,0.12)]">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                <svg className="h-7 w-7 text-brand-slate" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <p className="text-base font-semibold text-brand-slate">C-suite executives</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                Accountable for enterprise performance, strategic risk, and the long-term operating impact of AI decisions.
              </p>
            </div>

            <div className="rounded-[30px] border border-brand-border bg-brand-offwhite px-12 py-16 text-center shadow-[0_25px_70px_-30px_rgba(0,0,0,0.12)]">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                <svg className="h-7 w-7 text-brand-slate" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 12h18" />
                  <path d="M12 3v18" />
                </svg>
              </div>
              <p className="text-base font-semibold text-brand-slate">Technology & data leadership</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                Responsible for scaling AI into core systems while maintaining reliability, control, and operational integrity.
              </p>
            </div>

            <div className="rounded-[30px] border border-brand-border bg-brand-offwhite px-12 py-16 text-center shadow-[0_25px_70px_-30px_rgba(0,0,0,0.12)]">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                <svg className="h-7 w-7 text-brand-slate" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2l9 4v6c0 5-3.5 9.7-9 10-5.5-.3-9-5-9-10V6l9-4z" />
                </svg>
              </div>
              <p className="text-base font-semibold text-brand-slate">Risk, compliance & audit leaders</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                Charged with ensuring AI adoption remains defensible, auditable, and aligned with regulatory and governance expectations.
              </p>
            </div>

            <div className="rounded-[30px] border border-brand-border bg-brand-offwhite px-12 py-16 text-center shadow-[0_25px_70px_-30px_rgba(0,0,0,0.12)]">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                <svg className="h-7 w-7 text-brand-slate" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 7h18" />
                  <path d="M6 7v10" />
                  <path d="M18 7v10" />
                </svg>
              </div>
              <p className="text-base font-semibold text-brand-slate">Board & operating committees</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                Oversight bodies responsible for governance, value realization, and sustained accountability at enterprise scale.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ================= FINAL CTA ================= */}
      <Section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/cta-executive-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/75 to-black/90" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-36">
          <div className="mx-auto max-w-3xl rounded-[30px] border border-white/15 bg-white/10 backdrop-blur-xl px-12 py-14 text-center shadow-[0_60px_160px_-55px_rgba(0,0,0,0.85)]">
            <div className="mx-auto mb-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 shadow-[0_0_40px_rgba(255,255,255,0.25)]">
              <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 3l8 4v6c0 5-3.5 9.7-8 10-4.5-.3-8-5-8-10V7l8-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              Executive briefing
            </p>

            <p className="mt-6 text-lg leading-relaxed text-white/90">
              If AI is becoming material to enterprise performance, this briefing
              provides clarity on whether it is truly governable at scale — before
              risk, scrutiny, or accountability force the issue.
            </p>

            <div className="mt-12 flex justify-center">
              <ButtonLink href="#" variant="primary" className="px-12 py-4 text-base">
                Schedule a 30-Minute Executive Briefing
              </ButtonLink>
            </div>

            <p className="mt-8 mx-auto max-w-xl text-sm leading-relaxed text-white/55">
              Briefings are confidential and structured for executive, board, and risk leadership audiences.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
