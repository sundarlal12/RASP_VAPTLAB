import { PlaceholderAvatar } from "@/components/ui/Placeholder";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const slots = [1, 2, 3];

export function TestimonialGrid() {
  return (
    <div className="flex flex-col gap-14">
      <SectionHeading
        eyebrow="Customer stories"
        title="What security teams say"
        description="Real customer quotes will replace these slots once available — nothing here is fabricated."
      />
      <div className="grid gap-6 sm:grid-cols-3">
        {slots.map((slot) => (
          <Card key={slot} className="flex flex-col gap-4 border-dashed">
            <p className="text-sm italic leading-relaxed text-ink-500">
              “Testimonial placeholder — real customer quote to be added here.”
            </p>
            <div className="mt-auto flex items-center gap-3">
              <PlaceholderAvatar />
              <div>
                <p className="text-sm font-semibold text-ink-900">Name placeholder</p>
                <p className="text-xs text-ink-500">Title, Company</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
