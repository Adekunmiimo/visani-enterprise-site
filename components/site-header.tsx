"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { Container } from "components/container";
import { ButtonLink } from "components/button";
import { site } from "@/lib/site";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "A.R.I.S.E.X™", href: "/arisex" },
  { label: "Insights", href: "/insights" },
  { label: "Proof", href: "/proof" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [, startTransition] = useTransition();

  // ✅ Close mobile menu whenever route changes
  useEffect(() => {
    startTransition(() => {
      setMobileOpen(false);
    });
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* LEFT: Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-brand-navy" />
            <span className="text-sm font-semibold tracking-tight text-brand-slate">
              {site.name}
            </span>
          </Link>

          {/* DESKTOP: Navigation + CTA */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "text-sm font-medium transition-colors",
                      isActive
                        ? "text-brand-slate"
                        : "text-brand-muted hover:text-brand-slate",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <ButtonLink href="/contact" variant="primary">
              Book Executive Briefing
            </ButtonLink>
          </div>

          {/* MOBILE: Hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-brand-border bg-white/70 px-3 py-2 text-brand-slate shadow-sm transition hover:bg-white"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {/* Icon */}
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <>
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* MOBILE MENU PANEL */}
        <div
          className={[
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
            mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="mt-3 rounded-2xl border border-brand-border bg-white/90 p-4 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] backdrop-blur">
            <nav className="flex flex-col">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-brand-offwhite text-brand-slate"
                        : "text-brand-muted hover:bg-brand-offwhite hover:text-brand-slate",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4">
              <ButtonLink href="/contact" variant="primary" className="w-full justify-center">
                Book Executive Briefing
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
