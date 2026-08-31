import type { Metadata } from "next";
import localFont from "next/font/local";
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
  title: "Rawhew Ranch — Naivasha's Cozy Camp",
  description:
    "A small intimate campsite bordering KWS Game Farm, a few meters off the Naivasha – Kinangop Road.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${foglihten.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
