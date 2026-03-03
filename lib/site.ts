export const site = {
  name: "Visani America",
  domain: "visaniamerica.com",
  year: new Date().getFullYear(),

  tagline:
    "AI strategic advisory and delivery for enterprises scaling measurable outcomes through governed execution.",

  cta: {
    primary: {
      label: "Book Executive Briefing",
      href: "/contact#briefing",
    },
    secondary: {
      label: "Download Executive Brief",
      href: "/contact#exec-brief",
    },
  },

  // ✅ Backwards-compatible aliases (so older components don't break)
  primaryCta: {
    label: "Book Executive Briefing",
    href: "/contact#briefing",
  },
  secondaryCta: {
    label: "Download Executive Brief",
    href: "/contact#exec-brief",
  },

  nav: {
    main: [
      { label: "Services", href: "/services" },
      { label: "Insights", href: "/insights" },
      { label: "Proof", href: "/proof" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    footerCompany: [
      { label: "About", href: "/about" },
      { label: "Proof", href: "/proof" },
      { label: "Contact", href: "/contact" },
    ],
    footerOfferings: [
      { label: "Services", href: "/services" },
      { label: "Insights", href: "/insights" },
    ],
    footerLegal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },

  links: {
    // Put the real LinkedIn URL here when ready. If null, footer can hide it.
    linkedin: null as string | null,

    // Internal proof resources
    boardBriefPdf: "/downloads/board-brief.pdf",
    proofLibrary: "/proof/library",
  },
} as const;