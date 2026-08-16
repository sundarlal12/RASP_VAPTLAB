import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <Section bg="white" narrow className="pb-20 pt-14">
      <article className="prose-legal flex flex-col gap-6 [&_h1]:font-display [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-ink-950 [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink-950 [&_p]:leading-relaxed [&_p]:text-ink-700 [&_li]:leading-relaxed [&_li]:text-ink-700 [&_ul]:list-disc [&_ul]:pl-6">
        {children}
      </article>
    </Section>
  );
}
