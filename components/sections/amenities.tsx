import { amenities } from "@/lib/content";
import { Icon } from "@/components/icons";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { Container, GoldRule } from "@/components/ui";

export function AmenitiesSection() {
  return (
    <section id="amenities" className="paper relative py-24 sm:py-32">
      <Container>
        <div className="relative lg:pr-40">
          <div className="paper-olive relative overflow-hidden rounded-[6px] px-7 py-14 text-cream ring-1 ring-brass/40 sm:px-12 sm:py-16 md:px-16">
            <Reveal>
              <p className="eyebrow mb-3 text-brass-light">{amenities.eyebrow}</p>
              <h2 className="mb-6 max-w-lg text-3xl leading-tight text-cream sm:text-4xl">
                {amenities.heading}
              </h2>
              <GoldRule className="mb-12 max-w-[6rem]" />
            </Reveal>

            <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {amenities.items.map((item, i) => (
                <Reveal as="li" key={item.label} from="up" delay={i * 0.04}>
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brass/60 text-brass-light">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <span className="pt-1.5 text-[0.98rem] leading-snug text-cream/90">
                      {item.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Bonfire accent — overlaps the panel edge */}
          <Reveal
            from="right"
            className="absolute -bottom-10 right-0 hidden w-64 lg:block"
          >
            <Photo
              src={amenities.image.src}
              alt={amenities.image.alt}
              ratio="3 / 4"
              arch
              sizes="256px"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
