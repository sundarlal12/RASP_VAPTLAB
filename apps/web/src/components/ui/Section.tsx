import type { ReactNode } from "react";
import { Container } from "./Container";

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
    <section id={id} className={`py-20 sm:py-28 ${backgrounds[bg]} ${className}`}>
      <Container className={narrow ? "max-w-4xl" : ""}>{children}</Container>
    </section>
  );
}
