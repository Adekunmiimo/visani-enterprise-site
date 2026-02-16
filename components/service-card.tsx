import type { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  points: string[];
  icon?: ReactNode;
};

export function ServiceCard({
  title,
  description,
  points,
  icon
}: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-soft">
      {icon && <div className="mb-4">{icon}</div>}

      <h3 className="text-lg font-semibold text-brand-slate">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-brand-muted">
        {description}
      </p>

      <ul className="mt-4 space-y-2 text-sm text-brand-muted">
        {points.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
