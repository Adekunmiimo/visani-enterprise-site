import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        variant === "primary" &&
          "bg-brand-navy text-white hover:bg-brand-navy/90 focus-visible:ring-brand-navy",
        variant === "secondary" &&
          "border border-brand-border bg-white text-brand-slate hover:bg-brand-offwhite focus-visible:ring-brand-slate",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
