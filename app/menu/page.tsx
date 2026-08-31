import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { RestaurantSection } from "@/components/sections/restaurant";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Menu — Rawhew Ranch",
  description:
    "The Rawhew Ranch restaurant, next to the campsite — charcoal-grilled farm meats and fresh fish from the lake.",
};

export default function MenuPage() {
  return (
    <>
      <Nav overHero={false} />
      <main className="flex-1 pt-16">
        <RestaurantSection />
      </main>
      <Footer />
    </>
  );
}
