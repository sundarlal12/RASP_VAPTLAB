import { ShieldQuestion } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section bg="gradient" className="flex flex-col items-center py-32 text-center">
      <ShieldQuestion className="h-12 w-12 text-brand-600" />
      <h1 className="mt-6 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-ink-500">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Button href="/" className="mt-8">
        Back to home
      </Button>
    </Section>
  );
}
