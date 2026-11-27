import type { Metadata, Viewport } from "next";
import { Source_Sans_3, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/schema";
import { OG_BASE } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  preload: false,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.shortName} – ${SITE.tagline}`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  openGraph: OG_BASE,
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f766e" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1120" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${newsreader.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-body">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <a href="#main-content" className="skip-link no-print">Skip to content</a>
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
