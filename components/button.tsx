"use client";

import Link from "next/link";
import React, { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary";

type CommonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
};

type ButtonLinkProps = CommonProps & {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

function getButtonClasses(variant: ButtonVariant, disabled?: boolean) {
  const common =
    "inline-flex items-center justify-center rounded-lg font-semibold transition " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy/25 " +
    "active:translate-y-[1px]";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-brand-navy text-white hover:bg-brand-navy/90",
    secondary: "border border-white/20 bg-white/10 text-white hover:bg-white/15",
  };

  const disabledStyles = disabled
    ? "opacity-60 cursor-not-allowed pointer-events-none active:translate-y-0"
    : "";

  return `${common} ${variants[variant]} ${disabledStyles}`.trim();
}

function safeRel(target?: string, rel?: string) {
  // If opening a new tab, enforce security unless user explicitly sets rel
  if (target === "_blank") {
    const base = rel ?? "";
    const needsNoopener = !base.includes("noopener");
    const needsNoreferrer = !base.includes("noreferrer");
    return `${base}${needsNoopener ? " noopener" : ""}${needsNoreferrer ? " noreferrer" : ""}`.trim();
  }
  return rel;
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink(
    { href, children, variant = "primary", className = "", disabled, target, rel, onClick },
    ref
  ) {
    const cls = `${getButtonClasses(variant, disabled)} ${className}`.trim();

    const handleHashScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }

      // allow consumer onClick first (but still do hash scroll)
      onClick?.(e);
      if (e.defaultPrevented) return;

      // In-page hash scroll (#briefing)
      if (href.startsWith("#")) {
        e.preventDefault();

        const id = href.slice(1);
        const el = document.getElementById(id);

        // update URL hash without default jump
        history.pushState(null, "", href);

        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // fallback: trigger hashchange so HashScroll tries again
          window.dispatchEvent(new HashChangeEvent("hashchange"));
        }
      }
    };

    // ✅ Hash links: always render <a>
    if (href.startsWith("#")) {
      return (
        <a
          ref={ref}
          href={href}
          className={cls}
          onClick={handleHashScroll}
          aria-disabled={disabled ? true : undefined}
        >
          {children}
        </a>
      );
    }

    // ✅ External links (http, https, mailto, tel): render <a> directly
    const isExternal =
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (isExternal) {
      return (
        <a
          ref={ref}
          href={href}
          className={cls}
          target={target}
          rel={safeRel(target, rel)}
          onClick={(e) => {
            if (disabled) {
              e.preventDefault();
              return;
            }
            onClick?.(e);
          }}
          aria-disabled={disabled ? true : undefined}
        >
          {children}
        </a>
      );
    }

    // ✅ Internal routes: Next Link (NO deprecated props)
    return (
      <Link
        ref={ref}
        href={href}
        className={cls}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
            return;
          }
          onClick?.(e);
        }}
        aria-disabled={disabled ? true : undefined}
      >
        {children}
      </Link>
    );
  }
);
