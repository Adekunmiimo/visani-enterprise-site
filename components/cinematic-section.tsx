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
};

export function CinematicSection({
  backgroundImage,
  children,
  className,
  overlay = "medium",
  reveal = true,
}: CinematicSectionProps) {
  return (
    <Section
      className={clsx(
        "relative overflow-hidden",
        reveal && "reveal",
        className
      )}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      {overlay === "dark" && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/90" />
      )}

      {overlay === "medium" && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/70" />
      )}

      {overlay === "light" && (
        <div className="absolute inset-0 bg-black/40" />
      )}

      {/* Ring */}
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </Section>
  );
}
