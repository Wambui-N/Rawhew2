import { naivasha } from "@/lib/content";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { Container, GoldRule } from "@/components/ui";

export function NaivashaSection() {
  const [first, second] = naivasha.images;
  return (
    <section id="naivasha" className="paper relative py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Text block */}
          <Reveal from="left">
            <p className="eyebrow mb-4">{naivasha.eyebrow}</p>
            <h2 className="mb-6 text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
              {naivasha.heading}
            </h2>
            <GoldRule className="mb-6 max-w-[6rem]" />
            <p className="max-w-xl text-ink-soft">{naivasha.body}</p>
          </Reveal>

          {/* Two smaller offset / overlapping images */}
          <Reveal from="right" className="relative">
            <div className="relative mx-auto w-full max-w-md pb-16 lg:mr-0 lg:pb-20">
              <div className="w-[78%]">
                <Photo
                  src={first.src}
                  alt={first.alt}
                  ratio="4 / 5"
                  arch
                  position={first.position}
                  sizes="(max-width: 1024px) 60vw, 300px"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[62%] sm:right-[-6%]">
                <Photo
                  src={second.src}
                  alt={second.alt}
                  ratio="4 / 3"
                  position={second.position}
                  sizes="(max-width: 1024px) 48vw, 240px"
                />
              </div>
              <span
                className="absolute -left-6 top-1/3 hidden h-24 w-px bg-brass/70 lg:block"
                aria-hidden
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
