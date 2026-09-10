import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { RestaurantSection } from "@/components/sections/restaurant";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { buildBreadcrumbJsonLd, buildRestaurantJsonLd } from "@/lib/seo";

const title = "Menu";
const description =
  "The Rawhew Ranch restaurant, next to the campsite — charcoal-grilled farm meats, Kienyeji chicken, and fresh tilapia from the lake, with prices.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/menu" },
  // Next does not deep-merge nested openGraph/twitter objects across route
  // segments — a page-level object fully replaces the layout's, so every
  // field (not just the ones changing) has to be repeated here.
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "/menu",
    siteName: "Rawhew Ranch",
    title: `${title} — Rawhew Ranch`,
    description,
    images: [
      {
        url: "/Opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${title} — Rawhew Ranch`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} — Rawhew Ranch`,
    description,
    images: ["/Opengraph-image.png"],
  },
};

export default function MenuPage() {
  return (
    <>
      <JsonLd data={buildRestaurantJsonLd()} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Menu", path: "/menu" },
        ])}
      />
      <Nav overHero={false} />
      <main className="flex-1 pt-16">
        <RestaurantSection />
      </main>
      <Footer />
    </>
  );
}
