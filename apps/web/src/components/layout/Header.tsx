import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/Button";
import { featureMenu, solutionsMenu, primaryNav } from "@/components/layout/NavData";

// Icon component references can't cross the server -> client boundary as
// props, so pass MegaMenu plain {title, items:{label,href}} data only.
function toMenuGroups(groups: { title: string; items: { label: string; href: string }[] }[]) {
  return groups.map((group) => ({
    title: group.title,
    items: group.items.map(({ label, href }) => ({ label, href })),
  }));
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[65px] w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          <MegaMenu
            label="Features"
            hubHref={featureMenu.hubHref}
            hubLabel="View all capabilities"
            groups={toMenuGroups(featureMenu.groups)}
          />
          <MegaMenu
            label="Solutions"
            hubHref={solutionsMenu.hubHref}
            hubLabel="See all solutions"
            groups={toMenuGroups([solutionsMenu.industries, solutionsMenu.useCases])}
          />
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-700 transition-colors hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact/"
            className="text-sm font-medium text-ink-700 transition-colors hover:text-brand-700"
          >
            Contact
          </Link>
          <Button href="/contact/">Book a Demo</Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
