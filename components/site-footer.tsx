import Image from "next/image";
import Link from "next/link";
import { Container } from "components/container";
import { site } from "@/lib/site";

export function SiteFooter() {
  const companyLinks = site.nav.footerCompany;
  const offeringLinks = site.nav.footerOfferings;

  const legalLinks =
    site.nav.footerLegal?.length
      ? site.nav.footerLegal
      : [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Use", href: "/terms" },
        ];

  return (
    <footer className="border-t border-brand-border bg-white">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/visani-logo.png"
                alt="Visani America logo"
                width={220}
                height={70}
                className="h-auto w-[200px] sm:w-[220px]"
                priority
              />
            </Link>

            <p className="text-sm leading-relaxed text-brand-muted">
              {site.tagline}
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-brand-slate">Company</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-brand-muted transition hover:text-brand-slate"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offerings */}
          <div>
            <h4 className="text-sm font-semibold text-brand-slate">Offerings</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {offeringLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-brand-muted transition hover:text-brand-slate"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-brand-slate">Connect</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {site.links.linkedin ? (
                <li>
                  <a
                    href={site.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-muted transition hover:text-brand-slate"
                  >
                    LinkedIn
                  </a>
                </li>
              ) : null}

              <li>
                <Link
                  href="/privacy"
                  className="text-brand-muted transition hover:text-brand-slate"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="text-brand-muted transition hover:text-brand-slate"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                Proof links
              </p>

              <div className="mt-3 flex flex-col gap-2 text-sm">
                <a
                  href={site.links.boardBriefPdf}
                  className="text-brand-muted transition hover:text-brand-slate"
                >
                  Download Board Brief (PDF)
                </a>

                <Link
                  href={site.links.proofLibrary}
                  className="text-brand-muted transition hover:text-brand-slate"
                >
                  View Proof Library (Redacted)
                </Link>

                <Link
                  href={site.cta.primary.href}
                  className="text-brand-muted transition hover:text-brand-slate"
                >
                  {site.cta.primary.label}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-brand-border py-6 text-xs text-brand-muted sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {site.year} {site.name}. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-4">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition hover:text-brand-slate"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}