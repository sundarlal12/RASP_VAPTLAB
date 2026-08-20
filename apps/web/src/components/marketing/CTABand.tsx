import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTABand({
  title = "Ready to harden your Android app?",
  description = "Talk to us about integrating Protect — we'll walk through your app's threat model and scope the integration.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="relative overflow-hidden bg-ink-950 py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]"
      />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-3xl font-medium text-white sm:text-5xl">{title}</h2>
        <p className="max-w-xl text-lg text-slate-300">{description}</p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button
            href="/contact/"
            className="px-7 py-3 text-base shadow-[0_0_40px_-4px_rgba(11,163,127,0.55)]"
          >
            Book a Demo
          </Button>
          <Button
            href="/contact/"
            variant="outline"
            className="border-slate-600 px-7 py-3 text-base text-white hover:border-brand-400 hover:bg-white/5 hover:text-brand-300"
          >
            Talk to Sales
          </Button>
        </div>
      </Container>
    </div>
  );
}
