"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post, PostCategory } from "@/app/resources/data";
import { postCategories } from "@/app/resources/data";
import { ArticleThumbnail } from "@/components/marketing/ArticleThumbnail";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function ResourcesGrid({ posts }: { posts: Post[] }) {
  const [filter, setFilter] = useState<PostCategory | "All">("All");
  const [featured, ...rest] = posts;
  const filtered = rest.filter((post) => filter === "All" || post.category === filter);

  return (
    <div className="flex flex-col gap-14">
      {/* Featured article */}
      <Link
        href={`/resources/${featured.slug}/`}
        className="grid gap-8 border-b border-slate-100 pb-14 md:grid-cols-2 md:items-center"
      >
        <ArticleThumbnail category={featured.category} />
        <div className="flex flex-col gap-3">
          <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            {featured.category}
          </span>
          <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">{featured.title}</h2>
          <p className="text-base leading-relaxed text-ink-500">{featured.summary}</p>
          <div className="mt-2 flex items-center gap-2 text-sm text-ink-500">
            <span>{featured.author}</span>
            <span>·</span>
            <time dateTime={featured.date}>{dateFormatter.format(new Date(featured.date))}</time>
            <span>·</span>
            <span>{featured.readTime}</span>
          </div>
          <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
            Read more
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2">
        {(["All", ...postCategories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === cat
                ? "bg-brand-600 text-white"
                : "border border-slate-200 text-ink-700 hover:border-brand-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <Link key={post.slug} href={`/resources/${post.slug}/`} className="group flex flex-col gap-4">
            <ArticleThumbnail category={post.category} />
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                {post.category}
              </span>
              <h3 className="font-display text-lg font-bold text-ink-950 group-hover:text-brand-700">
                {post.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-500">{post.summary}</p>
              <div className="mt-1 flex items-center gap-2 text-xs text-ink-500">
                <time dateTime={post.date}>{dateFormatter.format(new Date(post.date))}</time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
        {filtered.length === 0 ? (
          <p className="col-span-full text-sm text-ink-500">No articles in this category yet.</p>
        ) : null}
      </div>
    </div>
  );
}
