import { PlaceholderLogo } from "@/components/ui/Placeholder";
import { Container } from "@/components/ui/Container";

export function LogoStrip() {
  return (
    <div className="border-y border-slate-100 bg-white py-10">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-wide text-ink-500">
          Built for teams protecting Android apps in production
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <PlaceholderLogo key={index} label="Client logo" />
          ))}
        </div>
      </Container>
    </div>
  );
}
