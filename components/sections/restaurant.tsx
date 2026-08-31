import { restaurant } from "@/lib/content";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { Container, GoldRule } from "@/components/ui";

export function RestaurantSection() {
  const [imgA, imgB] = restaurant.menuImages;
  return (
    <section id="restaurant" className="paper relative py-24 sm:py-32">
      <Container>
        <Reveal className="mb-12 text-center">
          <p className="eyebrow mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-brass/70" aria-hidden />
            {restaurant.eyebrow}
            <span className="h-px w-8 bg-brass/70" aria-hidden />
          </p>
          <h1 className="text-4xl sm:text-5xl">{restaurant.heading}</h1>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal from="left">
            <Photo
              src={restaurant.image}
              alt={restaurant.imageLabel}
              ratio="16 / 10"
              sizes="(max-width: 1024px) 100vw, 560px"
              priority
            />
          </Reveal>
          <Reveal from="right">
            <GoldRule className="mb-6 max-w-[6rem]" />
            <p className="max-w-xl text-ink-soft">{restaurant.body}</p>
          </Reveal>
        </div>

        {/* Menu */}
        <Reveal className="mx-auto mt-24 max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl">{restaurant.menuHeading}</h2>
          <span className="mx-auto my-5 block h-px w-16 bg-brass" aria-hidden />
        </Reveal>

        <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-[200px_1fr_200px]">
          <Reveal
            from="left"
            className="hidden lg:block lg:pt-10"
          >
            <Photo src={imgA.src} alt={imgA.alt} ratio="3 / 4" arch sizes="200px" />
          </Reveal>

          <Reveal>
            <div className="paper-sand rounded-[8px] p-2 ring-1 ring-brass/50">
              <div className="rounded-[5px] border border-brass/40 p-7 sm:p-10">
                <div className="grid gap-x-14 gap-y-10 sm:grid-cols-2">
                  {restaurant.groups.map((group) => (
                    <div key={group.label}>
                      <p className="eyebrow mb-4">{group.label}</p>
                      <ul>
                        {group.items.map((it, i) => (
                          <li key={it.name}>
                            {i > 0 && <GoldRule className="my-3 opacity-70" />}
                            <div className="flex items-baseline justify-between gap-4">
                              <span className="text-[0.95rem] text-ink">
                                {it.name}
                              </span>
                              <span className="whitespace-nowrap font-serif text-[0.95rem] text-rust">
                                {it.price}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal from="right" className="hidden lg:block lg:pt-24">
            <Photo src={imgB.src} alt={imgB.alt} ratio="3 / 4" arch sizes="200px" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
