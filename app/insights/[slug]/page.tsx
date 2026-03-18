"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useMemo } from "react";
import { Section } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

type InsightDoc = {
  slug: string;
  label: "Executive Brief" | "Field Note" | "Board Brief";
  category: "Governance" | "Operating Model" | "Control Plane" | "Measurement";
  title: string;
  meta: string;
  heroImage: string;
  intro: string;
  summary: string;
  whyItMatters: string[];
  executiveSignals: string[];
  whatLeadersShouldDo: string[];
  closing: string;
};

export default function InsightSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  useRevealOnScroll();

  const sectionLight =
    "bg-gradient-to-b from-[#F6F8FC] via-[#F0F4F9] to-[#E8EEF7]";
  const sectionDark =
    "bg-gradient-to-b from-[#F3F6FA] via-[#EEF2F7] to-[#E6ECF4]";

  const cardBase =
    "rounded-2xl bg-white/92 ring-1 ring-black/10 shadow-[0_18px_60px_-34px_rgba(2,6,23,0.45)] backdrop-blur-[2px]";
  const cardSoft =
    "rounded-2xl bg-white/88 ring-1 ring-black/8 shadow-[0_16px_52px_-32px_rgba(2,6,23,0.40)] backdrop-blur-[2px]";

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
  const bigChipText =
    "text-white text-base font-bold tracking-[-0.01em] sm:text-[1.05rem]";

  const docs: InsightDoc[] = useMemo(
    () => [
      {
        slug: "ai-programs-stall",
        label: "Executive Brief",
        category: "Governance",
        title: "Why most AI programs stall after early success",
        meta: "8 min read • Governance",
        heroImage: "/positioning.jpg",
        intro:
          "Most AI programs do not stall because the models are weak. They stall because early momentum collides with enterprise reality: unclear ownership, inconsistent governance, fragmented workflows, and weak measurement discipline.",
        summary:
          "Pilot wins often create the illusion that scale is close. In reality, scale introduces a different operating problem. The moment AI starts touching real decisions, production workflows, customer impact, risk controls, or audit expectations, the organization needs more than technical capability. It needs an operating system.",
        whyItMatters: [
          "Early pilot success can hide deep structural weaknesses.",
          "Scale increases scrutiny from leadership, operations, security, and risk teams.",
          "Without clear decision rights, AI programs create confusion instead of leverage.",
          "Organizations often overinvest in tools while underinvesting in execution discipline.",
        ],
        executiveSignals: [
          "No named executive owner for production AI workflows.",
          "Governance reviews happen after incidents instead of before rollout.",
          "Success is described in anecdotes rather than defended with evidence.",
          "Business teams, security teams, and data teams are not operating on one cadence.",
        ],
        whatLeadersShouldDo: [
          "Define ownership for every critical AI workflow.",
          "Establish approval thresholds and escalation paths before broader rollout.",
          "Introduce a value and risk review cadence that leadership can run repeatedly.",
          "Treat scale as an operating model problem, not only a technology problem.",
        ],
        closing:
          "AI does not become strategic because it works in isolation. It becomes strategic when leaders can govern it, defend it, and scale it without losing control.",
      },
      {
        slug: "permissioned-execution",
        label: "Executive Brief",
        category: "Control Plane",
        title: "Permissioned execution is the missing layer in enterprise AI",
        meta: "10 min read • Control Plane",
        heroImage: "/governance.jpg",
        intro:
          "Many organizations focus heavily on what AI can generate, but spend far less time defining what AI is actually allowed to do. That gap becomes dangerous once AI moves from assistance into action.",
        summary:
          "Permissioned execution is the discipline of defining the exact authority boundaries within which AI can operate. It determines what actions are allowed, what data can be touched, where approvals are required, and when escalation back to humans must happen. Without this layer, enterprise AI quickly becomes difficult to govern.",
        whyItMatters: [
          "AI that can act without clear boundaries becomes an operational risk.",
          "Authority must be explicit when AI touches customer, financial, legal, or operational processes.",
          "Executives need evidence that boundaries are enforced, not just documented.",
          "Permissioned execution turns AI from experimental capability into manageable enterprise infrastructure.",
        ],
        executiveSignals: [
          "AI workflows can trigger actions without role based approval controls.",
          "There is no clear record of what was allowed versus what was blocked.",
          "Fallback paths for uncertainty are inconsistent or absent.",
          "Teams assume humans are still in control without proving how control is preserved.",
        ],
        whatLeadersShouldDo: [
          "Define clear permission scopes per workflow, role, and business function.",
          "Ensure out of policy actions are blocked rather than merely flagged.",
          "Build escalation paths that preserve human authority in uncertain cases.",
          "Create runtime evidence showing what the system attempted, executed, or denied.",
        ],
        closing:
          "Permissioned execution is what separates AI that is interesting from AI that leadership can trust at scale.",
      },
      {
        slug: "operating-model",
        label: "Field Note",
        category: "Operating Model",
        title: "Operating models that survive scale",
        meta: "7 min read • Operating Model",
        heroImage: "/insights-feed-bg.jpg",
        intro:
          "An AI operating model is not a diagram for a strategy deck. It is the practical system of ownership, governance cadence, workflow accountability, and cross functional coordination that determines whether execution survives real operating pressure.",
        summary:
          "The strongest AI operating models make decision rights explicit, connect business and technical teams around one execution rhythm, and prevent ambiguity from spreading as adoption grows. Weak operating models depend on heroic individuals. Strong ones create repeatable enterprise behavior.",
        whyItMatters: [
          "Scale exposes unclear ownership faster than pilots do.",
          "Execution slows down when roles are vague and accountability is shared informally.",
          "Operating models determine whether AI remains aligned to business outcomes over time.",
          "Governance becomes sustainable only when it is embedded in the operating model.",
        ],
        executiveSignals: [
          "Cross functional decisions rely on ad hoc meetings rather than clear cadences.",
          "Teams disagree on who approves changes, manages risk, or owns value realization.",
          "Execution quality depends too heavily on a few individuals.",
          "There is no repeatable path from pilot to production to sustained adoption.",
        ],
        whatLeadersShouldDo: [
          "Create named ownership across strategy, execution, risk, and value realization.",
          "Set a recurring operating cadence for approvals, reviews, and escalation.",
          "Define how business, data, security, and platform teams collaborate under pressure.",
          "Design the model for durability, not for presentation.",
        ],
        closing:
          "The organizations that scale AI best are not the ones with the most tools. They are the ones with the clearest operating model.",
      },
      {
        slug: "board-metrics",
        label: "Executive Brief",
        category: "Measurement",
        title: "Board metrics for AI: value that holds up under scrutiny",
        meta: "9 min read • Measurement",
        heroImage: "/insights-feed-bg.jpg",
        intro:
          "Boards do not need more AI enthusiasm. They need metrics that clarify value, risk, operating discipline, and executive control.",
        summary:
          "Good AI measurement is not vanity reporting. It connects operational performance, adoption durability, governance posture, risk exposure, and business value in ways leaders can explain and defend. That usually requires a ledger mindset rather than a dashboard only mindset.",
        whyItMatters: [
          "Leadership confidence declines when AI reporting feels vague or promotional.",
          "Boards need evidence that AI outcomes are tied to enterprise priorities.",
          "Measurement must include both value produced and risks controlled.",
          "Metrics shape whether AI is treated as infrastructure, experiment, or unmanaged exposure.",
        ],
        executiveSignals: [
          "Success is reported through volume or usage alone.",
          "There is no variance narrative when outcomes miss expectations.",
          "Risk signals and control signals are absent from leadership reviews.",
          "Metrics cannot be tied back to decisions, workflows, or owners.",
        ],
        whatLeadersShouldDo: [
          "Track value, risk, adoption, and control signals together.",
          "Require variance explanations, not just target reporting.",
          "Tie metrics to accountable owners and recurring review cadences.",
          "Use executive reporting that can stand up in board and risk conversations.",
        ],
        closing:
          "AI measurement becomes executive grade when leaders can explain what changed, why it changed, who owns it, and what action should follow.",
      },
      {
        slug: "adoption-signals",
        label: "Field Note",
        category: "Measurement",
        title: "Adoption signals that indicate durable behavior change",
        meta: "6 min read • Measurement",
        heroImage: "/insights-feed-bg.jpg",
        intro:
          "Adoption is not proven by a launch spike. It is proven when behavior changes hold inside real workflows over time.",
        summary:
          "Organizations often mistake activity for adoption. Durable adoption is visible through repeated workflow use, compliance with intended processes, reinforcement mechanisms, and sustained business behavior after initial rollout excitement fades.",
        whyItMatters: [
          "Temporary usage can create false confidence about enterprise readiness.",
          "Behavior change matters more than raw interaction counts.",
          "Executive teams need evidence that AI is becoming part of actual work.",
          "Sustained adoption is one of the strongest indicators of long term value.",
        ],
        executiveSignals: [
          "Usage spikes sharply after launch then declines without explanation.",
          "Teams cannot distinguish curiosity usage from embedded workflow adoption.",
          "There are no compliance or reinforcement indicators.",
          "Adoption reviews happen too infrequently to catch drift early.",
        ],
        whatLeadersShouldDo: [
          "Measure repeat usage inside target workflows over time.",
          "Track compliance and reinforcement signals, not just logins or prompts.",
          "Review adoption alongside outcome and governance data.",
          "Treat declining adoption as an operating issue, not just a training issue.",
        ],
        closing:
          "Adoption becomes meaningful when it reflects real work behavior, not launch week excitement.",
      },
      {
        slug: "governance-before-scale",
        label: "Board Brief",
        category: "Governance",
        title: "Governance before scale: how to prevent shadow agents",
        meta: "11 min read • Governance",
        heroImage: "/governance.jpg",
        intro:
          "Shadow agents emerge when organizations scale AI faster than they scale oversight. The result is fragmented ownership, hidden automations, weak visibility, and rising operational risk.",
        summary:
          "Governance before scale means creating the boundaries, approval paths, and visibility mechanisms that keep AI activity inside executive control. It is not a slowdown tactic. It is the condition that allows responsible scale.",
        whyItMatters: [
          "Untracked agents create exposure across operations, data use, and accountability.",
          "Governance failures often begin as visibility failures.",
          "Leaders need registry, traceability, and policy enforcement before expansion.",
          "Preventing shadow activity is cheaper than cleaning up after incidents.",
        ],
        executiveSignals: [
          "There is no complete registry of AI agents or automations.",
          "Business teams launch AI enabled workflows outside formal governance paths.",
          "Security and risk teams discover activity after deployment rather than before.",
          "Leadership lacks one authoritative view of what is running and why.",
        ],
        whatLeadersShouldDo: [
          "Build and maintain an agent and automation registry.",
          "Require policy gates before deployment into meaningful workflows.",
          "Create observability that shows runtime behavior and ownership.",
          "Make shadow activity visible early enough to intervene before harm occurs.",
        ],
        closing:
          "The right time to establish governance is before AI scale creates hidden complexity. After that, leaders are already in recovery mode.",
      },
    ],
    []
  );

  const doc = docs.find((item) => item.slug === slug);
  if (!doc) return notFound();

  return (
    <>
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={doc.heroImage}
            alt={doc.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/58 to-black/30" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <p className={heroLabel}>{doc.label}</p>

          <h1 className={heroMainHeading}>{doc.title}</h1>

          <p className={`${bigChipText} mt-6 max-w-3xl leading-relaxed text-white`}>
            {doc.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[doc.category, doc.meta, "Executive ready analysis"].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center rounded-full bg-white/14 px-5 py-3 text-white backdrop-blur ring-1 ring-white/12"
              >
                <span className={bigChipText}>{chip}</span>
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/insights" variant="secondary">
              Back to Insights
            </ButtonLink>
            <ButtonLink href="/contact#briefing" variant="primary">
              Book Executive Briefing
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2 text-xs">
            <Link href="/insights" className="font-semibold text-white hover:text-white">
              Insights
            </Link>
            <span className="text-white">/</span>
            <span className="font-semibold text-white">{doc.slug}</span>
          </div>
        </div>
      </Section>

      <Section className={`relative overflow-hidden ${sectionLight} reveal`}>
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className={`${cardBase} p-8 sm:p-10`}>
              <p className={sectionLabelLight}>Executive summary</p>

              <h2 className={sectionMainHeading}>
                What leaders should
                <span className="block text-brand-slate/85">understand first</span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-brand-muted">
                {doc.summary}
              </p>

              <div className={`${cardSoft} mt-8 p-6`}>
                <p className={subLabelLight}>Why this matters</p>
                <ul className="mt-4 space-y-4">
                  {doc.whyItMatters.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-brand-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/35" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`${cardBase} p-8 sm:p-10`}>
              <p className={subLabelLight}>Executive signals</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                These are the practical signs that this issue is already affecting execution quality.
              </p>

              <ul className="mt-6 space-y-4">
                {doc.executiveSignals.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-brand-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/35" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section className={`relative overflow-hidden ${sectionDark} reveal`}>
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className={`${cardBase} p-8 sm:p-10`}>
            <p className={sectionLabelLight}>Leadership action</p>

            <h2 className={sectionMainHeading}>
              What leaders should do next
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {doc.whatLeadersShouldDo.map((item, index) => (
                <div
                  key={item}
                  className={`${cardSoft} p-6`}
                >
                  <p className={subLabelLight}>
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className={`${cardSoft} mt-10 p-6`}>
              <p className={subLabelLight}>Closing perspective</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {doc.closing}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/contact#briefing" variant="primary">
                Book Executive Briefing
              </ButtonLink>
              <ButtonLink href="/proof" variant="secondary">
                View Proof
              </ButtonLink>
            </div>
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