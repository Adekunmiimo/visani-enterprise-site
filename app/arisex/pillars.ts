export type PillarKey =
  | "alignment"
  | "readiness"
  | "integration"
  | "adoption"
  | "governance"
  | "measurement";

export type Pillar = {
  key: PillarKey;
  title: string;
  tagline: string;
  executiveSummary: string;

  outcomes: string[];
  whatChanges: string[];
  whatWeDeliver: string[];
  signalsYouNeedThis: string[];
  risksIfIgnored: string[];

  cadence: {
    days30: string[];
    days60: string[];
    days90: string[];
  };
};

export const PILLARS: Pillar[] = [
  {
    key: "alignment",
    title: "Alignment",
    tagline: "Decision rights, ownership, and outcomes clarified before scale.",
    executiveSummary:
      "Alignment is where AI programs either become governable enterprise capabilities or remain fragmented experiments. This pillar establishes decision rights, accountable owners, and a measurable definition of success that leadership can defend.",
    outcomes: [
      "Clear executive sponsor and accountable owner per AI capability",
      "Unambiguous decision rights and escalation paths",
      "Outcome definition tied to enterprise priorities (not model performance)",
      "A governing cadence leaders actually run",
    ],
    whatChanges: [
      "AI stops being “a set of projects” and becomes an operating capability",
      "Teams stop optimizing locally and start delivering enterprise outcomes",
      "Trade-offs become explicit and are resolved at the right level",
    ],
    whatWeDeliver: [
      "Executive outcome charter (what success is, what it is not)",
      "Decision-rights map (RACI + escalation)",
      "Operating cadence (checkpoints, forums, artifacts)",
      "Portfolio sequencing (what scales first, what waits, why)",
    ],
    signalsYouNeedThis: [
      "Multiple teams running disconnected pilots with conflicting priorities",
      "No single owner accountable for end-to-end business impact",
      "Executive stakeholders disagree on what “done” means",
      "Board / audit questions are increasing but governance is unclear",
    ],
    risksIfIgnored: [
      "Scale creates political friction and competing priorities",
      "AI adoption fails due to unclear accountability",
      "Value cannot be defended when scrutiny increases",
    ],
    cadence: {
      days30: [
        "Executive sponsor + owner confirmed",
        "Outcome charter and constraints approved",
        "Decision rights + escalation finalized",
      ],
      days60: [
        "Portfolio sequencing agreed",
        "Execution forums established (weekly/biweekly cadence)",
        "Operational KPIs defined and baselined",
      ],
      days90: [
        "First governed capability scaled with repeatable playbook",
        "Stakeholder accountability stabilized",
        "Leadership reporting pack standardized",
      ],
    },
  },

  {
    key: "readiness",
    title: "Readiness",
    tagline: "Data, workflows, teams, and controls prepared before friction hits.",
    executiveSummary:
      "Readiness prevents ‘pilot success, scale failure.’ It identifies the gaps that only appear under operational load—data quality, process constraints, ownership, and control requirements—before scaling turns them into risk and cost.",
    outcomes: [
      "Readiness gaps surfaced early (data, process, people, controls)",
      "Remediation plan sequenced with delivery",
      "Reduced rework and fewer late-stage escalations",
      "Confidence that scale won’t break operations",
    ],
    whatChanges: [
      "Scale becomes planned and controlled, not reactive",
      "Hidden dependencies stop ambushing delivery timelines",
      "Controls are built in instead of patched on",
    ],
    whatWeDeliver: [
      "Readiness assessment scorecard (practical, not academic)",
      "Dependency map and remediation backlog",
      "Control requirements by workflow and risk tier",
      "Scaling thresholds (what must be true before expansion)",
    ],
    signalsYouNeedThis: [
      "Data is inconsistent across systems or business units",
      "Workflows vary by region/team and resist standardization",
      "Security/compliance questions come late in the cycle",
      "Pilot results don’t replicate in production conditions",
    ],
    risksIfIgnored: [
      "Scale triggers operational incidents and reputational risk",
      "Cost spikes due to rework and retrofitting controls",
      "Governance becomes reactive after an avoidable failure",
    ],
    cadence: {
      days30: [
        "Readiness gaps identified and prioritized",
        "Risk tiering and control requirements defined",
        "Remediation backlog created with owners",
      ],
      days60: [
        "Top blockers remediated for first scaled workflow",
        "Scaling thresholds agreed and enforced",
        "Operational runbooks drafted",
      ],
      days90: [
        "Readiness playbook standardized",
        "Reduced rework rate on subsequent rollouts",
        "Audit-ready evidence pack established",
      ],
    },
  },

  {
    key: "integration",
    title: "Integration",
    tagline: "AI embedded into real workflows — not layered as a side tool.",
    executiveSummary:
      "Integration is where value becomes real. This pillar ensures AI is embedded into operating workflows with clear handoffs, controls, and ownership—so results become repeatable business outcomes, not isolated demos.",
    outcomes: [
      "AI placed at decision points inside workflows",
      "Clear human-in-the-loop design where required",
      "Stable production behavior with predictable failure modes",
      "Business adoption increases because workflows stay usable",
    ],
    whatChanges: [
      "AI moves from ‘ad hoc usage’ to institutional capability",
      "Workflow handoffs become explicit and measurable",
      "Failure modes are governed, not surprising",
    ],
    whatWeDeliver: [
      "Workflow integration blueprint (before/after, handoffs)",
      "Human-in-the-loop patterns and control points",
      "Production runbooks (incidents, rollback, escalation)",
      "Change management + training design tied to workflow roles",
    ],
    signalsYouNeedThis: [
      "AI output exists but isn’t used inside core workflows",
      "Teams copy/paste outputs manually with no control points",
      "Production failures are unclear and hard to triage",
      "Users don’t trust outputs because workflow ownership is missing",
    ],
    risksIfIgnored: [
      "AI stays ‘optional’ and adoption never reaches scale",
      "Operational incidents increase as usage grows",
      "Value is inconsistent and difficult to defend",
    ],
    cadence: {
      days30: [
        "Top workflow targets selected (highest value + feasibility)",
        "Integration blueprint created",
        "Control points and escalation defined",
      ],
      days60: [
        "First workflow integrated into production",
        "Runbooks and monitoring in place",
        "User enablement launched for target roles",
      ],
      days90: [
        "Workflow integration pattern standardized",
        "Second/third workflow rollout accelerated",
        "Operational metrics stabilized",
      ],
    },
  },

  {
    key: "adoption",
    title: "Adoption",
    tagline: "Usage becomes routine — not optional — through engineered enablement.",
    executiveSummary:
      "Adoption is engineered, not hoped for. This pillar creates routines, incentives, training, and governance that drive sustained usage—so AI becomes normal operating behavior across teams.",
    outcomes: [
      "Sustained usage by role (not one-time curiosity)",
      "Enablement tied to real workflows and decision points",
      "Reduced shadow processes and inconsistent usage",
      "Higher trust because expectations and responsibilities are clear",
    ],
    whatChanges: [
      "Usage becomes predictable and measurable",
      "Leaders can intervene when adoption drops",
      "Teams stop reinventing how to use AI",
    ],
    whatWeDeliver: [
      "Role-based enablement plan (what each role does, when)",
      "Adoption instrumentation (usage signals and risk signals)",
      "Behavioral routines and operating norms",
      "Support model (intake, triage, improvements cadence)",
    ],
    signalsYouNeedThis: [
      "Users revert to old ways after initial excitement",
      "Training exists but does not translate into usage",
      "Teams use AI inconsistently and results vary wildly",
      "Trust issues appear (‘I don’t know if this is correct’) ",
    ],
    risksIfIgnored: [
      "Value collapses after launch",
      "Shadow AI usage grows without governance",
      "Leaders lose confidence because results vary by team",
    ],
    cadence: {
      days30: [
        "Role-based adoption model defined",
        "Enablement plan created for top workflows",
        "Usage signals identified (leading indicators)",
      ],
      days60: [
        "Enablement delivered to target teams",
        "Support model operational",
        "Adoption interventions defined (when usage drops)",
      ],
      days90: [
        "Adoption becomes routine with standard operating norms",
        "Usage and value stabilized across teams",
        "Continuous improvement cadence in place",
      ],
    },
  },

  {
    key: "governance",
    title: "Governance",
    tagline: "Risk, compliance, and accountability designed in from day one.",
    executiveSummary:
      "Governance is the difference between scaling AI confidently and scaling into avoidable enterprise risk. This pillar defines accountability, controls, evidence, and thresholds so leadership can defend AI decisions under scrutiny.",
    outcomes: [
      "Clear risk tiering and control requirements by workflow",
      "Evidence pack ready for audit/board scrutiny",
      "Accountability for AI behavior and outcomes",
      "Scaling thresholds enforced so growth is controlled",
    ],
    whatChanges: [
      "Governance becomes proactive instead of reactive",
      "Leaders can answer ‘what controls exist’ instantly",
      "Risk is visible before it becomes an incident",
    ],
    whatWeDeliver: [
      "Governance model (owners, forums, escalation)",
      "Control catalog (privacy, security, compliance) by risk tier",
      "Evidence pack template (auditable artifacts)",
      "Scaling thresholds + policy guardrails",
    ],
    signalsYouNeedThis: [
      "Audit/compliance questions are growing and answers are unclear",
      "No consistent risk tiering by workflow",
      "Controls are retrofitted after problems occur",
      "Board asks ‘who owns this’ and it’s not obvious",
    ],
    risksIfIgnored: [
      "Regulatory and reputational exposure increases with usage",
      "Teams scale faster than controls, creating enterprise risk",
      "A single incident can stall the entire program",
    ],
    cadence: {
      days30: [
        "Risk tiering and accountability defined",
        "Controls and evidence requirements set",
        "Governance forums and escalation created",
      ],
      days60: [
        "Controls implemented for first scaled workflow",
        "Evidence pack produced for leadership review",
        "Scaling thresholds enforced",
      ],
      days90: [
        "Governance model standardized across workflows",
        "Audit readiness improved materially",
        "Risk indicators monitored on cadence",
      ],
    },
  },

  {
    key: "measurement",
    title: "Measurement",
    tagline: "Defensible value tracked continuously with executive-grade reporting.",
    executiveSummary:
      "Measurement makes AI defensible. This pillar ensures value is visible, auditable, and tied to enterprise outcomes—so leaders can defend spend, expansion, and risk posture with clarity.",
    outcomes: [
      "Executive reporting tied to enterprise outcomes",
      "KPIs that survive scrutiny (not vanity metrics)",
      "Baseline vs uplift tracked consistently",
      "Investment decisions become rational and faster",
    ],
    whatChanges: [
      "AI value becomes governable and reviewable",
      "Leaders can scale with confidence because impact is visible",
      "Spending decisions are easier because ROI is defensible",
    ],
    whatWeDeliver: [
      "Measurement model (baseline, uplift, confidence)",
      "Executive reporting pack (board-ready format)",
      "KPI ownership map (who maintains what, how often)",
      "Measurement cadence embedded into operating rhythm",
    ],
    signalsYouNeedThis: [
      "Pilot ‘success’ is vague and not defensible",
      "Leaders disagree on which metrics matter",
      "Value is reported inconsistently across teams",
      "Expansion decisions are emotional instead of evidence-based",
    ],
    risksIfIgnored: [
      "AI becomes vulnerable to budget cuts due to unclear ROI",
      "Leaders lose confidence in impact claims",
      "Scaling decisions become political and slow",
    ],
    cadence: {
      days30: [
        "Measurement model defined and baselining begins",
        "KPI ownership assigned",
        "Executive reporting template approved",
      ],
      days60: [
        "First uplift reporting produced",
        "Measurement cadence embedded in forums",
        "Confidence scoring applied to claims",
      ],
      days90: [
        "Board-ready reporting stabilized",
        "Value consistently tracked across workflows",
        "Scaling decisions grounded in evidence",
      ],
    },
  },
];

export function getPillar(key: string) {
  return PILLARS.find((p) => p.key === key) ?? null;
}
