import type { ComponentType } from "react";

export function IconTile({
  icon: Icon,
  className = "",
}: {
  icon: ComponentType<{ className?: string }>;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-600 text-white ${className}`}
    >
      <Icon className="h-5.5 w-5.5" />
    </div>
  );
}
