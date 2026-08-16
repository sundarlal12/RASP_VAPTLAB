import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQSection({
  items,
  eyebrow = "FAQ",
  title = "Common questions",
}: {
  items: AccordionItem[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <div className="flex flex-col gap-12">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mx-auto w-full max-w-3xl">
        <Accordion items={items} />
      </div>
    </div>
  );
}
