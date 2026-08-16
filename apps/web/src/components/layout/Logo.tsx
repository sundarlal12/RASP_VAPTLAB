import Link from "next/link";
import { Hexagon, Shield } from "lucide-react";

export function Logo({ variant = "default" }: { variant?: "default" | "white" }) {
  const textColor = variant === "white" ? "text-white" : "text-ink-950";

  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <span className="relative flex h-9 w-9 items-center justify-center">
        <Hexagon
          className="h-9 w-9 text-brand-600 transition-transform group-hover:scale-105"
          strokeWidth={1.75}
          fill="currentColor"
          fillOpacity={0.08}
        />
        <Shield className="absolute h-4 w-4 text-brand-600" strokeWidth={2.25} />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-bold ${textColor}`}>AppShield</span>
        <span className="text-[11px] font-medium text-ink-500">by VaptLabs</span>
      </span>
    </Link>
  );
}
