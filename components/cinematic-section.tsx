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

  // ✅ responsive background positioning
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
    <Section
      className={clsx("relative overflow-hidden", reveal && "reveal", className)}
    >
      {/* ✅ Background layer */}
      <div
        aria-hidden="true"
        className={clsx(
          "absolute inset-0 bg-cover bg-no-repeat will-change-transform",
          backgroundPositionClassName ?? "bg-center"
        )}
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />

      {/* ✅ Atmospheric cinematic depth layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 420px at 50% 0%, rgba(96,165,250,0.12), transparent 60%)",
        }}
      />

      {/* ✅ Overlay */}
      {overlay === "dark" && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-black/40" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/62 via-black/34 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/78 via-black/62 to-black/88" />
        </>
      )}

      {overlay === "medium" && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-black/28" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/50 via-black/24 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/68 via-black/42 to-black/72" />
        </>
      )}

      {overlay === "light" && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-black/18" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/30 via-black/12 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/36 via-black/22 to-black/44" />
        </>
      )}

      {/* ✅ Ring */}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

      {/* ✅ Soft vignette for premium edge control */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.18)]" />

      {/* ✅ Content */}
      <div className="relative z-10">{children}</div>
    </Section>
  );
}