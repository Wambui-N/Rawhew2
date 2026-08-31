import { activities, type Activity } from "@/lib/content";
import { Icon } from "@/components/icons";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { Container, GoldRule } from "@/components/ui";

function ActivitySplit({ item, index }: { item: Activity; index: number }) {
  const flip = index % 2 === 1;
  return (
    <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-0">
      {/* Image */}
      <Reveal
        from={flip ? "right" : "left"}
        className={[
          "relative lg:col-span-7 lg:row-start-1",
          flip ? "lg:order-2 lg:col-start-6" : "lg:order-1 lg:col-start-1",
        ].join(" ")}
      >
        <Photo
          src={item.image}
          alt={item.imageLabel}
          ratio="16 / 11"
          position={item.position}
          sizes="(max-width: 1024px) 100vw, 640px"
        />
      </Reveal>

      {/* Text card — overlaps the image edge for a collage feel */}
      <Reveal
        from="up"
        className={[
          "relative z-10 lg:col-span-6 lg:row-start-1 lg:self-center",
          flip
            ? "lg:order-1 lg:col-start-1 lg:-mr-16"
            : "lg:order-2 lg:col-start-7 lg:-ml-16",
        ].join(" ")}
      >
        <div className="paper rounded-[6px] p-7 shadow-[0_28px_60px_-32px_rgba(43,32,24,0.55)] ring-1 ring-brass/40 sm:p-9">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brass/60 text-rust">
            <Icon name={item.icon} className="h-6 w-6" />
          </span>
          <h3 className="mt-5 text-2xl leading-tight sm:text-[1.7rem]">
            {item.heading}
          </h3>
          <GoldRule className="my-5 max-w-[5rem]" />
          <p className="text-[0.98rem] text-ink-soft">{item.body}</p>
        </div>
      </Reveal>
    </div>
  );
}

function CompactCard({ item, index }: { item: Activity; index: number }) {
  return (
    <Reveal
      as="figure"
      from="up"
      delay={index * 0.06}
      className="flex h-full min-w-[80vw] snap-start flex-col rounded-[6px] bg-cream/70 p-6 ring-1 ring-brass/40 sm:min-w-0"
    >
      <Photo
        src={item.image}
        alt={item.imageLabel}
        ratio="4 / 3"
        position={item.position}
        sizes="(max-width: 640px) 80vw, 340px"
      />
      <span className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-brass/60 text-rust">
        <Icon name={item.icon} className="h-5 w-5" />
      </span>
      <figcaption className="mt-3 font-serif text-xl leading-tight">
        {item.heading}
      </figcaption>
      <GoldRule className="my-4 max-w-[4rem]" />
      <p className="text-[0.92rem] leading-relaxed text-ink-soft">{item.body}</p>
    </Reveal>
  );
}

export function ActivitiesSection() {
  const { feature, compact, outdoorIntro, excursions } = activities;

  return (
    <section id="activities" className="paper-sand relative py-24 sm:py-32">
      <Container>
        {/* Heading with flanking gold rules */}
        <Reveal className="mb-16 flex items-center justify-center gap-5 text-center sm:mb-24">
          <span className="h-px w-10 bg-brass/70 sm:w-20" aria-hidden />
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem]">
            {activities.heading}
          </h2>
          <span className="h-px w-10 bg-brass/70 sm:w-20" aria-hidden />
        </Reveal>

        {/* Feature activities — alternating split screen */}
        <div className="space-y-20 sm:space-y-28">
          {feature.map((item, i) => (
            <ActivitySplit key={item.key} item={item} index={i} />
          ))}
        </div>
      </Container>

      {/* Compact activities — offset gallery / horizontal scroll on small screens */}
      <div className="mt-24 sm:mt-32">
        <Container>
          <Reveal className="mb-10">
            <p className="eyebrow mb-3">More at the ranch</p>
            <GoldRule className="max-w-[6rem]" />
          </Reveal>
        </Container>
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 lg:gap-8 sm:[&>*:nth-child(2)]:mt-12 sm:[&>*:nth-child(3)]:mt-6">
            {compact.map((item, i) => (
              <CompactCard key={item.key} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Outdoor Excursions intro + hiking split screens */}
      <Container className="mt-24 sm:mt-32">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-brass/60 text-rust">
            <Icon name={outdoorIntro.icon} className="h-6 w-6" />
          </span>
          <h3 className="text-2xl sm:text-3xl">{outdoorIntro.heading}</h3>
          <span className="mx-auto my-5 block h-px w-16 bg-brass" aria-hidden />
          <p className="text-ink-soft">{outdoorIntro.body}</p>
        </Reveal>

        <div className="space-y-20 sm:space-y-28">
          {excursions.map((item, i) => (
            <ActivitySplit key={item.key} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
