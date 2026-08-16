import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { footerNav } from "@/components/layout/NavData";
import { siteConfig } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
              {siteConfig.tagline}.
            </p>
          </div>

          {Object.entries(footerNav).map(([section, items]) => (
            <div key={section}>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                {section}
              </p>
              <ul className="mt-3 flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-ink-700 hover:text-brand-700"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-slate-100 pt-8 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-brand-700">
            {siteConfig.contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
