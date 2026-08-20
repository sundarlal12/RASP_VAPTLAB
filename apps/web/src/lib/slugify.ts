// Mirrors rehype-slug's heading id output closely enough for plain-English
// headings, so a manually-written TOC array can link to auto-generated
// heading ids without duplicating an id on every heading by hand.
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
