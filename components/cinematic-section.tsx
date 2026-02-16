"use client";

import { ReactNode } from "react";
import { Section } from "@/components/section";
import clsx from "clsx";

type CinematicSectionProps = {
  backgroundImage: string;
  children: ReactNode;
  className?: string;
  overlay?: "dark" | "medium" | "light";
  reveal?: boolean;

  // ✅ NEW: responsive background positioning
  backgroundPositionClassName?: string;
};

export function CinematicSection({
  backgroundImage,
  children,
  className,
  overlay = "medium",
  reveal = true,
  backgroundPositionClassName,
}: CinematicSectionProps) {
  return (
    <Section className={clsx("relative overflow-hidden", reveal && "reveal", className)}>
      {/* ✅ Background layer */}
      <div
        aria-hidden="true"
        className={clsx(
          "absolute inset-0 bg-cover bg-no-repeat",
          backgroundPositionClassName ?? "bg-center"
        )}
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />

      {/* Overlay */}
      {overlay === "dark" && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/90" />
      )}

      {overlay === "medium" && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/70" />
      )}

      {overlay === "light" && (
        <div className="pointer-events-none absolute inset-0 bg-black/40" />
      )}

      {/* Ring */}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </Section>
  );
}
