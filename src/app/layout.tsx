import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationJsonLd } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.shortName} — ${SITE.tagline}`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
};

export const viewport: Viewport = {
  themeColor: "#0f766e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sourceSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        <JsonLd data={organizationJsonLd()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
