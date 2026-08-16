import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CTABand({
  title = "Ready to harden your Android app?",
  description = "Talk to us about integrating AppShield — we'll walk through your app's threat model and scope the integration.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="bg-ink-950 py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-lg text-slate-300">{description}</p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact/" className="px-7 py-3 text-base">
            Book a Demo
          </Button>
          <Button
            href="/contact/"
            variant="outline"
            className="border-slate-600 px-7 py-3 text-base text-white hover:border-brand-400 hover:text-brand-300"
          >
            Talk to Sales
          </Button>
        </div>
      </Container>
    </div>
  );
}
