import type { ReactNode } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArticleThumbnail } from "@/components/marketing/ArticleThumbnail";
import { ArticleSidebar } from "@/components/marketing/ArticleSidebar";
import { posts, type PostCategory } from "@/app/resources/data";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function ArticleLayout({
  title,
  slug,
  category,
  date,
  author,
  readTime,
  toc,
  children,
}: {
  title: string;
  slug: string;
  category: PostCategory;
  date: string;
  author: string;
  readTime: string;
  toc: string[];
  children: ReactNode;
}) {
  const related = posts.filter((post) => post.slug !== slug).slice(0, 3);

  return (
    <>
      <Section bg="gradient" className="pb-4 pt-14">
        <div className="flex flex-col gap-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources/" },
              { label: title, href: `/resources/${slug}/` },
            ]}
          />
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-ink-950 sm:text-5xl">
            {title}
          </h1>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-semibold text-white">
              {initials(author)}
            </span>
            <div>
              <p className="text-sm font-semibold text-ink-900">{author}</p>
              <p className="text-xs text-ink-500">
                <time dateTime={date}>{dateFormatter.format(new Date(date))}</time> · {readTime}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="white" className="pt-8">
        <ArticleThumbnail category={category} className="mb-12" />

        <div className="grid gap-12 lg:grid-cols-[240px_1fr] xl:grid-cols-[280px_1fr]">
          <ArticleSidebar toc={toc} title={title} />

          <article className="flex max-w-none flex-col gap-5">
            {children}
          </article>
        </div>

        {/* About the author */}
        <div className="mt-16 flex items-center gap-4 border-t border-slate-100 pt-10">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-600 text-base font-semibold text-white">
            {initials(author)}
          </span>
          <div>
            <p className="text-sm font-semibold text-ink-900">{author}</p>
            <p className="mt-1 max-w-lg text-sm leading-relaxed text-ink-500">
              The team building SecureLint Protect&apos;s native detection engine — root, tamper, anti-hooking,
              and network protection for Android apps.
            </p>
          </div>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section bg="subtle">
          <div className="flex flex-col gap-10">
            <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">
              More on runtime app protection
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((post) => (
                <Link key={post.slug} href={`/resources/${post.slug}/`} className="group flex flex-col gap-4">
                  <ArticleThumbnail category={post.category} />
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                      {post.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-ink-950 group-hover:text-brand-700">
                      {post.title}
                    </h3>
                    <p className="text-xs text-ink-500">{post.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      ) : null}
    </>
  );
}
