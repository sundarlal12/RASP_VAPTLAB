/**
 * Clearly-marked swappable slots for trust content (logos, testimonials,
 * certifications) that VaptLabs hasn't supplied yet. No real assets are
 * fabricated — these render an obvious "placeholder" affordance instead of
 * a fake logo/quote/badge.
 */

export function PlaceholderLogo({ label = "Client logo" }: { label?: string }) {
  return (
    <div
      role="img"
      aria-label={`${label} placeholder`}
      className="flex h-10 w-28 items-center justify-center rounded-md border border-dashed border-slate-300 text-[11px] font-medium text-slate-400"
    >
      {label}
    </div>
  );
}

export function PlaceholderAvatar({ label = "Photo" }: { label?: string }) {
  return (
    <div
      role="img"
      aria-label={`${label} placeholder`}
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-dashed border-slate-300 text-[10px] font-medium text-slate-400"
    >
      {label}
    </div>
  );
}

export function PlaceholderBadge({ label = "Certification" }: { label?: string }) {
  return (
    <div
      role="img"
      aria-label={`${label} placeholder`}
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-dashed border-slate-300 text-center text-[9px] font-medium leading-tight text-slate-400"
    >
      {label}
    </div>
  );
}
