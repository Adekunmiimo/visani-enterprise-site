import { notFound } from "next/navigation";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { getPillar, PILLARS } from "../pillars";

export function generateStaticParams() {
  return PILLARS.map((p) => ({ pillar: p.key }));
}

export default async function ArisexPillarPage({
  params,
}: {
  params: Promise<{ pillar: string }>;
}) {
  // ✅ FIX (Next.js new behavior): params is a Promise
  const { pillar: pillarKey } = await params;

  const pillar = getPillar(pillarKey);
  if (!pillar) return notFound();

  const title = pillar.title;

  return (
    <>
      {/* HERO */}
      <Section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/arisex-pillars-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/75 to-black/90" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
            A.R.I.S.E.X™ Pillar
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
            <span className="block text-white/80">{pillar.tagline}</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/75">
            {pillar.executiveSummary}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink
              href="/contact#briefing"
              variant="primary"
              className="px-9 py-3.5 text-sm"
            >
              Book an Executive Briefing
            </ButtonLink>
            <ButtonLink
              href="/arisex"
              variant="secondary"
              className="px-9 py-3.5 text-sm"
            >
              Back to A.R.I.S.E.X™
            </ButtonLink>
          </div>

          <p className="mt-6 text-sm text-white/50">
            Built for executive decision-making, governance posture, and defensible
            outcomes.
          </p>
        </div>
      </Section>

      {/* EXECUTIVE BRIEF GRID */}
      <Section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <ExecCard title="Outcomes leaders can defend" items={pillar.outcomes} />
            <ExecCard title="What changes operationally" items={pillar.whatChanges} />
            <ExecCard title="What we deliver" items={pillar.whatWeDeliver} />
            <ExecCard
              title="Signals you need this now"
              items={pillar.signalsYouNeedThis}
            />
          </div>

          <div className="mt-12">
            <ExecCard title="Risks if ignored" items={pillar.risksIfIgnored} tone="risk" />
          </div>
        </div>
      </Section>

      {/* 30 / 60 / 90 */}
      <Section className="bg-brand-offwhite">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-muted">
              Execution cadence
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-brand-slate">
              A 30 / 60 / 90-day operating trajectory
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-muted">
              This is the practical cadence leaders can run to make the pillar real in
              production. Not theory. Not a maturity model. A sequence that holds up
              under scrutiny.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            <CadenceCard title="First 30 days" items={pillar.cadence.days30} />
            <CadenceCard title="By 60 days" items={pillar.cadence.days60} />
            <CadenceCard title="By 90 days" items={pillar.cadence.days90} />
          </div>

          <div className="mt-14 flex flex-wrap gap-4">
            <ButtonLink
              href="/contact#briefing"
              variant="primary"
              className="px-9 py-3.5 text-sm"
            >
              Discuss this pillar in a briefing
            </ButtonLink>
            <ButtonLink
              href="/arisex"
              variant="secondary"
              className="px-9 py-3.5 text-sm"
            >
              Explore the full system
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* EXEC CTA */}
      <Section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/arisex-cta-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/90" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-3xl rounded-[28px] border border-white/15 bg-white/10 px-8 py-10 backdrop-blur-xl shadow-[0_55px_120px_-45px_rgba(0,0,0,0.75)] sm:px-12 sm:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              Executive decision point
            </p>

            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Want this pillar to hold under scale?
              <span className="block text-white/80">
                We’ll walk it as an executive brief.
              </span>
            </h3>

            <p className="mt-6 text-base leading-relaxed text-white/75">
              We’ll map your current state, identify where the pillar breaks under
              load, and define the shortest path to governable execution with
              defensible measurement.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink
                href="/contact#briefing"
                variant="primary"
                className="px-9 py-3.5 text-sm"
              >
                Book an Executive Briefing
              </ButtonLink>
              <ButtonLink
                href="/arisex"
                variant="secondary"
                className="px-9 py-3.5 text-sm"
              >
                Back to A.R.I.S.E.X™
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function ExecCard({
  title,
  items,
  tone = "normal",
}: {
  title: string;
  items: string[];
  tone?: "normal" | "risk";
}) {
  return (
    <div
      className={[
        "rounded-3xl border px-10 py-10 shadow-sm",
        tone === "risk" ? "border-rose-200 bg-rose-50" : "border-brand-border bg-white",
      ].join(" ")}
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-muted">
        {title}
      </p>

      <ul className="mt-6 space-y-4">
        {items.map((x) => (
          <li key={x} className="flex items-start gap-4">
            <span
              className={[
                "mt-2 h-2.5 w-2.5 rounded-full",
                tone === "risk" ? "bg-rose-500/70" : "bg-brand-slate/60",
              ].join(" ")}
            />
            <p className="text-base leading-relaxed text-brand-muted">{x}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CadenceCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-brand-border bg-white px-10 py-10 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-muted">
        {title}
      </p>
      <ul className="mt-6 space-y-4">
        {items.map((x) => (
          <li key={x} className="flex items-start gap-4">
            <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-slate/60" />
            <p className="text-base leading-relaxed text-brand-muted">{x}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
