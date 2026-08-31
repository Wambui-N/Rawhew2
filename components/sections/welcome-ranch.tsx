import { welcome } from "@/lib/content";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { Container, GoldRule, PullQuote } from "@/components/ui";

export function WelcomeRanchSection() {
  return (
    <section id="ranch" className="paper-sand relative overflow-hidden py-24 sm:py-32">
      <Container>
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7 lg:col-start-1">
            <p className="eyebrow mb-4">{welcome.eyebrow}</p>
            <h2 className="mb-6 text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
              {welcome.heading}
            </h2>
            <GoldRule className="mb-6 max-w-[6rem]" />
            <p className="max-w-xl text-ink-soft">{welcome.body}</p>
          </Reveal>

          <Reveal from="right" className="lg:col-span-4 lg:col-start-9">
            <Photo
              src={welcome.image.src}
              alt={welcome.image.alt}
              ratio="3 / 4"
              arch
              position={welcome.image.position}
              sizes="(max-width: 1024px) 90vw, 360px"
            />
          </Reveal>
        </div>

        {/* "cosily hidden from the crowds" line pulled out as a callout */}
        <PullQuote className="mt-20">{welcome.pullQuote}</PullQuote>
      </Container>
    </section>
  );
}
