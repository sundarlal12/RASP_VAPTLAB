import { PlaceholderBadge } from "@/components/ui/Placeholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TrustBadgeCluster() {
  return (
    <div className="flex flex-col items-center gap-8">
      <SectionHeading
        eyebrow="Enterprise readiness"
        title="Certifications & compliance"
        description="Badges below are placeholders until certifications are finalized — nothing here is claimed until it's real."
      />
      <div className="flex flex-wrap items-center justify-center gap-5">
        {["SOC 2", "ISO 27001", "GDPR"].map((label) => (
          <PlaceholderBadge key={label} label={label} />
        ))}
      </div>
    </div>
  );
}
