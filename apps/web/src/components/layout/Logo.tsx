import Link from "next/link";

function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="SecureLint Protect"
    >
      <defs>
        <linearGradient id="securelint-mark-gradient" gradientUnits="userSpaceOnUse" x1="50" y1="5" x2="50" y2="95">
          <stop offset="0" stopColor="rgb(45,212,192)" />
          <stop offset="1" stopColor="rgb(11,163,127)" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#securelint-mark-gradient)" strokeLinejoin="round" strokeLinecap="round">
        <path d="M50 5 L87 19 V50 C87 71 71 85 50 95 C29 85 13 71 13 50 V19 Z" strokeWidth="7" />
        <path
          d="M50 5 L87 19 V50 C87 71 71 85 50 95 C29 85 13 71 13 50 V19 Z"
          strokeWidth="8"
          transform="translate(50,50) scale(0.66) translate(-50,-50)"
        />
      </g>
      <path
        d="M50 5 L87 19 V50 C87 71 71 85 50 95 C29 85 13 71 13 50 V19 Z"
        fill="url(#securelint-mark-gradient)"
        transform="translate(50,50) scale(0.33) translate(-50,-50)"
      />
    </svg>
  );
}

export function Logo({ variant = "default" }: { variant?: "default" | "white" }) {
  const textColor = variant === "white" ? "text-white" : "text-ink-950";

  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <Mark className="h-9 w-9 transition-transform group-hover:scale-105" />
      <span className={`font-display text-base font-bold leading-none tracking-tight ${textColor}`}>
        SecureLint Protect
      </span>
    </Link>
  );
}
