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
      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white ${className}`}
    >
      <Icon className="h-5.5 w-5.5" />
    </div>
  );
}
