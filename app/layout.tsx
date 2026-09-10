import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { JsonLd } from "@/components/json-ld";
import { KEYWORDS, SITE_DESCRIPTION, SITE_NAME, SITE_URL, buildWebsiteJsonLd } from "@/lib/seo";
import "./globals.css";

// Brand display face — the typeface used in the Rawhew Ranch logo wordmark.
// Files supplied in /public/fonts by the client.
const foglihten = localFont({
  src: "../public/fonts/Foglihtenno07-e9wz3.otf",
  variable: "--font-foglihten",
  display: "swap",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Naivasha's Cozy Camp`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  category: "Travel",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Naivasha's Cozy Camp`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/Opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Naivasha's Cozy Camp`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Naivasha's Cozy Camp`,
    description: SITE_DESCRIPTION,
    images: ["/Opengraph-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#55603c",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${foglihten.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={buildWebsiteJsonLd()} />
        {children}
      </body>
    </html>
  );
}
