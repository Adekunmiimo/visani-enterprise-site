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
  // ✅ Premium base styles aligned with stronger site typography
  const common =
    "relative inline-flex items-center justify-center gap-2 " +
    "rounded-xl px-5 py-3 " +
    "text-sm font-bold tracking-[-0.02em] leading-[1] " +
    "transition-all duration-200 ease-out " +
    "focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-primary/25 " +
    "active:translate-y-[1px] select-none whitespace-nowrap " +
    "shadow-[0_12px_40px_-28px_rgba(2,6,23,0.35)]";

  // ✅ Variant styles
  const variants: Record<ButtonVariant, string> = {
    // Primary: brand blue, glossy shine, strong shadow
    primary:
      "text-white bg-brand-primary " +
      "ring-1 ring-white/10 " +
      "shadow-[0_18px_60px_-30px_rgba(96,165,250,0.85)] " +
      "hover:-translate-y-[1px] hover:brightness-[1.06] " +
      "hover:shadow-[0_26px_80px_-36px_rgba(96,165,250,0.95)]",

    // Secondary: clean glass button (works on light + dark backgrounds)
    secondary:
      "text-brand-slate bg-white/80 backdrop-blur-md " +
      "ring-1 ring-black/10 " +
      "shadow-[0_16px_55px_-34px_rgba(2,6,23,0.32)] " +
      "hover:-translate-y-[1px] hover:bg-white/90 " +
      "hover:shadow-[0_22px_70px_-38px_rgba(2,6,23,0.40)]",
  };

  const disabledStyles = disabled
    ? "opacity-60 cursor-not-allowed pointer-events-none active:translate-y-0 " +
      "hover:translate-y-0 hover:shadow-[0_12px_40px_-28px_rgba(2,6,23,0.20)]"
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

    // ✅ Shared inner content: subtle premium shine overlay
    const Content = (
      <>
        <span
          aria-hidden="true"
          className={
            "pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-200 " +
            (disabled
              ? "opacity-0"
              : variant === "primary"
              ? "opacity-100 bg-[radial-gradient(1200px_220px_at_20%_0%,rgba(255,255,255,0.35),transparent_55%)]"
              : "opacity-100 bg-[radial-gradient(1000px_220px_at_20%_0%,rgba(96,165,250,0.14),transparent_55%)]")
          }
        />
        <span className="relative inline-flex items-center justify-center">
          {children}
        </span>
      </>
    );

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
          {Content}
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
          {Content}
        </a>
      );
    }

    // ✅ Internal routes: Next Link
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
        {Content}
      </Link>
    );
  }
);