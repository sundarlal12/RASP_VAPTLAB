import { BookOpen, ScanEye, Code2, ClipboardCheck } from "lucide-react";
import type { PostCategory } from "@/app/resources/data";

const categoryStyle: Record<PostCategory, { icon: typeof BookOpen; gradient: string }> = {
  Fundamentals: { icon: BookOpen, gradient: "from-brand-600 to-brand-900" },
  "Detection Engineering": { icon: ScanEye, gradient: "from-ink-950 to-brand-800" },
  Engineering: { icon: Code2, gradient: "from-brand-700 to-ink-950" },
  Compliance: { icon: ClipboardCheck, gradient: "from-brand-500 to-brand-800" },
};

export function ArticleThumbnail({ category, className = "" }: { category: PostCategory; className?: string }) {
  const { icon: Icon, gradient } = categoryStyle[category];

  return (
    <div
      className={`relative flex aspect-[1.89/1] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:28px_28px]"
      />
      <Icon className="relative h-10 w-10 text-white/90" strokeWidth={1.5} />
    </div>
  );
}
