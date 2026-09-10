import { buildLlmsTxt } from "@/lib/seo";

// Static plain-text brief for AI assistants/crawlers (see llmstxt.org).
// Generated from lib/content.ts + lib/seo.ts so it can't drift from the
// prices and copy actually shown on the pages.
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
