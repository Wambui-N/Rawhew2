import { activities, amenities, contact, pricing, restaurant } from "./content";

/*
  Single source of truth for site-wide SEO facts: canonical domain, shared
  copy, and the structured-data (JSON-LD) builders used by each page.

  IMPORTANT: SITE_URL is a placeholder production domain (the ranch's current
  one). Confirm the real domain this redesign will be deployed to and update
  this one constant before launch — every canonical URL, OpenGraph tag, and
  sitemap entry is derived from it.
*/

export const SITE_URL = "https://www.rawhewranch-kenya.com";

export const SITE_NAME = "Rawhew Ranch";

export const SITE_DESCRIPTION =
  "Rawhew Ranch is a small, intimate campsite bordering the KWS Game Farm on the Naivasha – Kinangop Road, Kenya. Camp, ride horses, and boat on Lake Naivasha, or hike Mt Longonot, Eburu Forest, and Hell's Gate National Park — with a farm-to-fire restaurant next door.";

export const KEYWORDS = [
  "Rawhew Ranch",
  "Naivasha campsite",
  "camping in Naivasha",
  "Naivasha Kenya camping",
  "Hell's Gate National Park camping",
  "Lake Naivasha activities",
  "horse riding Naivasha",
  "tent hire Naivasha",
  "cottage for hire Naivasha",
  "team building venue Naivasha",
  "nyama choma Naivasha",
  "wedding venue Naivasha",
  "Kinangop Road campsite",
];

export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}

/** Pulls the first "Ksh 1,234" / "Ksh. 1234" amount out of freeform copy. */
export function parseKsh(text: string): number | null {
  const match = text.match(/Ksh\.?\s*([\d,]+)/i);
  if (!match) return null;
  const value = Number(match[1].replace(/,/g, ""));
  return Number.isFinite(value) ? value : null;
}

const businessAddress = {
  "@type": "PostalAddress",
  streetAddress: "7FH8+82X Kinamba",
  addressLocality: "Naivasha",
  addressRegion: "Nakuru County",
  addressCountry: "KE",
} as const;

const sameAs = [contact.facebook, contact.instagram].filter(
  (url) => url && url !== "#",
);

/**
 * Every clean single-price line across the tariff card, mapped to schema.org
 * Offers. Derived mechanically from `pricing.categories` so it can never
 * drift out of sync with the prices actually shown on the page — lines
 * without a parseable "Ksh" amount (category intro lines) are skipped.
 */
export function buildPricingOffers() {
  const offers: Record<string, unknown>[] = [];
  for (const category of pricing.categories) {
    for (const line of category.lines) {
      const combined = [line.text, line.note].filter(Boolean).join(" ");
      const price = parseKsh(combined);
      if (price === null) continue;
      offers.push({
        "@type": "Offer",
        name: category.label,
        description: combined,
        price,
        priceCurrency: "KES",
      });
    }
  }
  return offers;
}

export function buildCampgroundJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Campground",
    "@id": absoluteUrl("/#business"),
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: contact.phone,
    email: contact.email,
    image: [
      absoluteUrl("/campingsite.jpg"),
      absoluteUrl("/hellsgate trail.jpg"),
      absoluteUrl("/Camping.jpeg"),
    ],
    priceRange: "Ksh 250 – Ksh 60,000",
    address: businessAddress,
    hasMap: contact.mapsUrl,
    sameAs,
    amenityFeature: amenities.items.map((item) => ({
      "@type": "LocationFeatureSpecification",
      name: item.label,
      value: true,
    })),
    makesOffer: buildPricingOffers(),
    hasMenu: absoluteUrl("/menu"),
    isAccessibleForFree: false,
  };
}

export function buildRestaurantJsonLd() {
  const toMenuItem = (item: { name: string; price: string }) => ({
    "@type": "MenuItem",
    name: item.name,
    offers: {
      "@type": "Offer",
      price: parseKsh(item.price) ?? undefined,
      priceCurrency: "KES",
    },
  });

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": absoluteUrl("/menu#restaurant"),
    name: `${SITE_NAME} Restaurant`,
    description: restaurant.body,
    url: absoluteUrl("/menu"),
    telephone: contact.phone,
    email: contact.email,
    servesCuisine: "Kenyan",
    priceRange: "Ksh 100 – Ksh 20,000",
    address: businessAddress,
    image: absoluteUrl(restaurant.image),
    sameAs,
    branchOf: { "@id": absoluteUrl("/#business") },
    hasMenu: {
      "@type": "Menu",
      name: restaurant.menuHeading,
      hasMenuSection: restaurant.groups.map((group) => ({
        "@type": "MenuSection",
        name: group.label,
        hasMenuItem: group.items.map(toMenuItem),
      })),
    },
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": absoluteUrl("/#business") },
  };
}

export function buildBreadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Plain-text, markdown-formatted brief for AI assistants and crawlers — served at /llms.txt. */
export function buildLlmsTxt(): string {
  const lines: string[] = [];
  const push = (s = "") => lines.push(s);

  push(`# ${SITE_NAME}`);
  push();
  push(`> ${SITE_DESCRIPTION}`);
  push();
  push(
    "Rawhew Ranch offers pitches for guests bringing their own tents, plus tents, beddings, and a cottage for hire, on secure grounds a short drive from Naivasha town and Hell's Gate National Park.",
  );
  push();

  push("## Pages");
  push(
    `- [Home](${absoluteUrl("/")}): Naivasha and Rawhew Ranch overview, amenities, activities, and the full camping/activity price list with terms and conditions.`,
  );
  push(
    `- [Menu](${absoluteUrl("/menu")}): The Rawhew Ranch restaurant — charcoal-grilled meats, Kienyeji chicken, fresh tilapia, and side dishes, with prices.`,
  );
  push();

  push("## Amenities");
  for (const item of amenities.items) push(`- ${item.label}`);
  push();

  push("## Activities");
  const allActivities = [
    ...activities.feature,
    ...activities.compact,
    ...activities.excursions,
  ];
  for (const activity of allActivities) push(`- ${activity.heading}`);
  push();

  push("## Prices (Ksh / KES)");
  for (const category of pricing.categories) {
    push(`### ${category.label}`);
    for (const line of category.lines) {
      push(line.note ? `- ${line.text} ${line.note}` : `- ${line.text}`);
    }
  }
  push();

  push(`## ${pricing.terms.heading}`);
  for (const term of pricing.terms.items) push(`- ${term}`);
  push();

  push("## Restaurant Menu (Ksh / KES)");
  for (const group of restaurant.groups) {
    push(`### ${group.label}`);
    for (const item of group.items) push(`- ${item.name} — ${item.price}`);
  }
  push();

  push("## Contact");
  push(`- Phone / WhatsApp: ${contact.phone}`);
  push(`- Email: ${contact.email}`);
  push(`- Address: ${contact.address}, Kenya`);
  push(`- Map: ${contact.mapsUrl}`);
  if (contact.facebook && contact.facebook !== "#")
    push(`- Facebook: ${contact.facebook}`);
  if (contact.instagram && contact.instagram !== "#")
    push(`- Instagram: ${contact.instagram}`);
  push();

  push("## Notes for AI assistants");
  push(
    "- Prices are quoted in Kenyan Shillings (Ksh / KES) and were accurate as of this page's last update — confirm current rates with Rawhew Ranch directly before quoting them to a user.",
  );
  push(
    "- Reservations require a 30% deposit to be confirmed; check-out time is 12:00 (noon).",
  );
  push(
    "- To book or ask a question, contact Rawhew Ranch by phone/WhatsApp or email above, or via the enquiry form on the website's Contact section.",
  );

  return lines.join("\n");
}
