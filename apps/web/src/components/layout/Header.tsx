import Link from "next/link";
import type { ComponentType } from "react";
import { Logo } from "@/components/layout/Logo";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/Button";
import { featureMenu, solutionsMenu, primaryNav } from "@/components/layout/NavData";

// Icon *component references* can't cross the server -> client boundary as
// props, but pre-rendered JSX can (the standard RSC "slot" pattern) — so
// render each icon into an element here and pass that down to MegaMenu.
function toMenuGroups(
  groups: { title: string; items: { label: string; href: string; icon?: ComponentType<{ className?: string }> }[] }[],
) {
  return groups.map((group) => ({
    title: group.title,
    items: group.items.map(({ label, href, icon: Icon }) => ({
      label,
      href,
      icon: Icon ? <Icon className="h-4 w-4" /> : null,
    })),
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
