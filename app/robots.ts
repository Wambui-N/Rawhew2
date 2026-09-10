import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Search + AI-assistant crawlers we want indexing and citing this site.
// Everything is public, so "*" alone would already allow all of these —
// they're listed explicitly so a future blanket Disallow doesn't silently
// cut off AI discoverability without someone noticing.
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "meta-externalagent",
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
