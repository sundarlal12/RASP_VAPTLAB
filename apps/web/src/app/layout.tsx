import type { Metadata, Viewport } from "next";
import "./globals.css";
import { plusJakarta, cabinetGrotesk } from "@/lib/fonts";
import { siteConfig, pageKeywords } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema } from "@/components/seo/schema/organization";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: pageKeywords([
    "Frida detection Android",
    "root detection library Android",
    "Magisk detection",
    "Xposed LSPosed hooking detection",
    "SSL pinning Android",
    "anti-tampering SDK Android",
  ]),
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};


export const viewport: Viewport = {
  themeColor: "#0ba37f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${cabinetGrotesk.variable} h-full antialiased`}
    >
      <head>
        {/* Powers the ti ti-* icon glyphs used inside the protection-layer
            hero animations (RawHtmlAnimation). */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/@tabler/icons-webfont@3.31.0/dist/tabler-icons.min.css"
        />
      </head>
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <JsonLd data={organizationSchema()} />
        <SkipToContent />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
