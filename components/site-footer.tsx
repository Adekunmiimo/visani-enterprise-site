import Link from "next/link";
import { Container } from "components/container";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-border bg-white">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-brand-slate">
              {site.name}
            </div>
            <p className="text-sm leading-relaxed text-brand-muted">
              {site.tagline}
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-brand-slate">
              Company
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-brand-muted hover:text-brand-slate">
                  About
                </Link>
              </li>
              <li>
                <Link href="/proof" className="text-brand-muted hover:text-brand-slate">
                  Proof
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brand-muted hover:text-brand-slate">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Offerings */}
          <div>
            <h4 className="text-sm font-semibold text-brand-slate">
              Offerings
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-brand-muted hover:text-brand-slate">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/arisex" className="text-brand-muted hover:text-brand-slate">
                  A.R.I.S.E.X™
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-brand-muted hover:text-brand-slate">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-brand-slate">
              Connect
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-muted hover:text-brand-slate"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://richieadetimehin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-muted hover:text-brand-slate"
                >
                  RichieAdetimehin.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-brand-border py-6 text-xs text-brand-muted sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-brand-slate">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-brand-slate">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
