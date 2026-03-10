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
  icon,
}: ServiceCardProps) {
  const cardBase =
    "rounded-2xl bg-white/92 ring-1 ring-black/10 shadow-[0_18px_60px_-34px_rgba(2,6,23,0.45)] backdrop-blur-[2px]";
  const cardTitleLight =
    "text-[1.3rem] font-bold tracking-[-0.03em] leading-[1.08] text-brand-slate sm:text-[1.5rem]";
  const subLabelLight =
    "text-[1.02rem] font-bold tracking-[-0.02em] leading-[1.08] text-brand-slate sm:text-[1.12rem]";

  return (
    <div className={`${cardBase} p-6`}>
      {icon && (
        <div className="mb-4">
          {icon}
        </div>
      )}

      <h3 className={cardTitleLight}>{title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-brand-muted">
        {description}
      </p>

      <div className="mt-5 rounded-2xl bg-white/88 p-4 ring-1 ring-black/8 shadow-[0_16px_52px_-32px_rgba(2,6,23,0.40)] backdrop-blur-[2px]">
        <p className={subLabelLight}>Typical points</p>

        <ul className="mt-3 space-y-2 text-sm text-brand-muted">
          {points.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-accent" />
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}