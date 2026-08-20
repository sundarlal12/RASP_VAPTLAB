import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { footerNav } from "@/components/layout/NavData";
import { siteConfig } from "@/lib/seo";
import { LinkedInIcon, FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";

const socialIcons: Record<string, (props: { className?: string }) => React.ReactElement> = {
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
};

function socialLabel(url: string) {
  if (url.includes("linkedin")) return { label: "LinkedIn", icon: "linkedin" };
  if (url.includes("facebook")) return { label: "Facebook", icon: "facebook" };
  if (url.includes("instagram")) return { label: "Instagram", icon: "instagram" };
  return { label: "Social", icon: "linkedin" };
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Logo variant="white" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              {siteConfig.tagline}.
            </p>
            {siteConfig.sameAs.length > 0 ? (
              <div className="mt-5 flex gap-3">
                {siteConfig.sameAs.map((url) => {
                  const { label, icon } = socialLabel(url);
                  const Icon = socialIcons[icon];
                  return (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-slate-300 transition-colors hover:border-brand-400 hover:text-brand-300"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>

          {Object.entries(footerNav).map(([section, items]) => (
            <div key={section}>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                {section}
              </p>
              <ul className="mt-3 flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-300 hover:text-brand-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-brand-300">
            {siteConfig.contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
