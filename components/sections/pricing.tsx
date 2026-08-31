import { pricing } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { Container, GoldRule } from "@/components/ui";

export function PricingSection() {
  return (
    <section id="pricing" className="paper-sand relative py-24 sm:py-32">
      <Container>
        <Reveal className="mb-14 text-center">
          <p className="eyebrow mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-brass/70" aria-hidden />
            {pricing.eyebrow}
            <span className="h-px w-8 bg-brass/70" aria-hidden />
          </p>
          <h2 className="text-4xl sm:text-5xl">{pricing.heading}</h2>
        </Reveal>

        {/* Tariff card */}
        <Reveal className="mx-auto max-w-3xl">
          <div className="paper rounded-[8px] p-2 ring-1 ring-brass/50 shadow-[0_40px_90px_-50px_rgba(43,32,24,0.6)]">
            <div className="divide-y divide-brass/30 rounded-[5px] border border-brass/40 px-6 sm:px-10">
              {pricing.categories.map((cat) => (
                <div
                  key={cat.label}
                  className="grid gap-2 py-6 sm:grid-cols-[11rem_1fr] sm:gap-10 sm:py-7"
                >
                  <p className="eyebrow sm:pt-0.5">{cat.label}</p>
                  <div className="space-y-1.5">
                    {cat.lines.map((line, i) => (
                      <div key={i}>
                        <p className="text-[0.95rem] leading-snug text-ink">
                          {line.text}
                        </p>
                        {line.note && (
                          <p className="mt-1 text-[0.85rem] leading-snug text-ink-soft">
                            {line.note}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Terms & Conditions — quieter list */}
        <Reveal className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-xl sm:text-2xl">{pricing.terms.heading}</h2>
          <GoldRule className="my-5 max-w-[5rem]" />
          <ul className="space-y-2.5">
            {pricing.terms.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[0.9rem] leading-relaxed text-ink-soft"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
