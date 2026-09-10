import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { NaivashaSection } from "@/components/sections/naivasha";
import { WelcomeRanchSection } from "@/components/sections/welcome-ranch";
import { AmenitiesSection } from "@/components/sections/amenities";
import { ActivitiesSection } from "@/components/sections/activities";
import { PricingSection } from "@/components/sections/pricing";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { buildBreadcrumbJsonLd, buildCampgroundJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildCampgroundJsonLd()} />
      <JsonLd data={buildBreadcrumbJsonLd([{ name: "Home", path: "/" }])} />
      <Nav overHero />
      <main className="flex-1">
        <Hero />
        <NaivashaSection />
        <WelcomeRanchSection />
        <AmenitiesSection />
        <ActivitiesSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
