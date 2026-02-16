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
    "Book an executive briefing to align on outcomes, assess readiness, and define a path your organization can execute with confidence, control, and measurable impact."
}: CTABandProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/')", // 🔹 enterprise AI / systems image
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

            {/* LEFT   EXECUTIVE MESSAGE */}
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                Strategic next step
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {headline}
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80">
                {body}
              </p>

              {/* Execution signals */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
                <span>• Governance-first</span>
                <span>• Outcome-aligned</span>
                <span>• Audit-ready</span>
                <span>• Board-safe</span>
              </div>

              {/* Predictive framing */}
              <p className="mt-6 text-sm text-white/65">
                In 30–45 minutes, you’ll leave with clarity on what to do next   and what to stop doing.
              </p>
            </div>

            {/* RIGHT   ACTION ZONE */}
            <div className="relative flex flex-col gap-5 sm:flex-row lg:flex-col">

              {/* PRIMARY CTA */}
              <div className="relative">
                <span className="pointer-events-none absolute -inset-1 rounded-lg bg-white/20 blur-md animate-pulse motion-reduce:animate-none" />
                <ButtonLink
                  href={site.primaryCta.href}
                  variant="primary"
                  className="relative px-10 py-4 text-base"
                >
                  {site.primaryCta.label}
                </ButtonLink>
              </div>

              {/* SECONDARY CTA */}
              <ButtonLink
                href={site.secondaryCta.href}
                variant="secondary"
                className="px-10 py-4 text-base"
              >
                {site.secondaryCta.label}
              </ButtonLink>

              {/* Trust footnote */}
              <p className="max-w-[280px] text-xs text-white/60">
                No sales deck. No vendor bias. Just execution clarity.
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
