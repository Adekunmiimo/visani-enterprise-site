"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "components/container";
import { ButtonLink } from "components/button";
import { site } from "@/lib/site";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "A.R.I.S.E.X™", href: "/arisex" },
  { label: "Insights", href: "/insights" },
  { label: "Proof", href: "/proof" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }, // ✅ added
];

export function SiteHeader() {
  const pathname = usePathname();

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

          {/* RIGHT: Navigation + CTA */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

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

            {/* Primary CTA stays separate */}
            <ButtonLink href="/contact" variant="primary">
              Book Executive Briefing
            </ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}
