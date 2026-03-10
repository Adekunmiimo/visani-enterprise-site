import { ButtonLink } from "./button";
import { Container } from "components/container";
import { site } from "@/lib/site";

type CTABandProps = {
  headline?: string;
  body?: string;
};

export function CTABand({
  headline = "Ready to move from pilot to governed AI scale?",
  body =
    "Book an executive briefing to align on outcomes, assess readiness, and define a path your organization can execute with confidence, control, and measurable impact.",
}: CTABandProps) {
  // ✅ TYPOGRAPHY: aligned to finished HomePage pattern
  const sectionLabelDark =
    "text-2xl font-bold tracking-[-0.03em] leading-[1.02] text-white sm:text-[2rem]";
  const sectionMainHeadingDark =
    "mt-5 text-[2.25rem] font-semibold tracking-[-0.04em] leading-[1.02] text-white sm:text-[2.9rem]";
  const subLabelDark =
    "text-[1.02rem] font-bold tracking-[-0.02em] leading-[1.08] text-white sm:text-[1.12rem]";
  const bigChipText =
    "text-white text-base font-bold tracking-[-0.01em] sm:text-[1.05rem]";

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 1️⃣ Cinematic dark wash */}
      <div className="absolute inset-0 bg-black/55" />

      {/* 2️⃣ Brand-tinted readability gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* 3️⃣ Ambient system grid (futuristic signal) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      {/* 4️⃣ Subtle structure */}
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

      <Container>
        <div className="relative py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_auto] lg:items-center">
            {/* LEFT — EXECUTIVE MESSAGE */}
            <div className="max-w-3xl">
              <p className={sectionLabelDark}>Strategic next step</p>

              <h2 className={sectionMainHeadingDark}>{headline}</h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80">
                {body}
              </p>

              {/* Execution signals */}
              <div className="mt-8 flex flex-wrap gap-3">
                {["Governance first", "Outcome aligned", "Audit ready", "Board safe"].map(
                  (item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full bg-white/14 px-5 py-3 backdrop-blur text-white ring-1 ring-white/12"
                    >
                      <span className={bigChipText}>{item}</span>
                    </span>
                  )
                )}
              </div>

              {/* Predictive framing */}
              <div className="mt-6">
                <p className={subLabelDark}>What you leave with</p>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  In 30 to 45 minutes, you’ll leave with clarity on what to do next and what to stop doing.
                </p>
              </div>
            </div>

            {/* RIGHT — ACTION ZONE */}
            <div className="relative flex flex-col gap-5 sm:flex-row lg:flex-col">
              {/* PRIMARY CTA */}
              <div className="relative">
                <span className="pointer-events-none absolute -inset-1 rounded-lg bg-white/20 blur-md animate-pulse motion-reduce:animate-none" />
                <ButtonLink
                  href={site.cta.primary.href}
                  variant="primary"
                  className="relative px-10 py-4 text-base"
                >
                  {site.cta.primary.label}
                </ButtonLink>
              </div>

              {/* SECONDARY CTA */}
              <ButtonLink
                href={site.cta.secondary.href}
                variant="secondary"
                className="px-10 py-4 text-base"
              >
                {site.cta.secondary.label}
              </ButtonLink>

              {/* Trust footnote */}
              <p className="max-w-[280px] text-xs leading-relaxed text-white/60">
                No sales deck. No vendor bias. Just execution clarity.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}