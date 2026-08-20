import type { ReactNode } from "react";
import { Container } from "./Container";
import { ParticleField } from "./ParticleField";

const backgrounds = {
  white: "bg-white",
  subtle: "bg-slate-50",
  ink: "bg-ink-950 text-white",
  gradient: "bg-gradient-to-b from-brand-50 via-white to-white",
} as const;

export function Section({
  children,
  id,
  className = "",
  bg = "white",
  narrow = false,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  bg?: keyof typeof backgrounds;
  narrow?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-20 sm:py-28 ${backgrounds[bg]} ${className}`}
    >
      {bg === "gradient" ? (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0ba37f0a_1px,transparent_1px),linear-gradient(to_bottom,#0ba37f0a_1px,transparent_1px)] bg-[size:44px_44px]"
          />
          <ParticleField className="pointer-events-none absolute inset-0 h-full w-full" />
        </>
      ) : null}
      <Container className={`relative ${narrow ? "max-w-4xl" : ""}`}>{children}</Container>
    </section>
  );
}
