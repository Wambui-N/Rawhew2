import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/content";
import { Container, GoldRule } from "@/components/ui";

export function Footer() {
  return (
    <footer className="paper-olive mt-auto text-cream/85">
      <Container className="py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/Text Logo.png"
                alt=""
                width={797}
                height={458}
                className="h-16 w-auto [filter:brightness(0)_invert(1)] sm:h-20"
              />
              {/* <span className="font-display text-xl text-cream">Rawhew Ranch</span> */}
            </div>
            <p className="mt-4 max-w-xs text-sm text-cream/70">
              A small intimate campsite bordering KWS Game Farm, a few meters off
              the Naivasha &ndash; Kinangop Road.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div className="space-y-2 text-sm">
              <p className="eyebrow mb-3 text-brass-light">Contact</p>
              <p>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-cream"
                >
                  {contact.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-cream"
                >
                  {contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cream"
                >
                  {contact.address}
                </a>
              </p>
            </div>

            <div className="space-y-2 text-sm">
              <p className="eyebrow mb-3 text-brass-light">Explore</p>
              <p>
                <Link href="/menu" className="transition-colors hover:text-cream">
                  Menu
                </Link>
              </p>
              <p>
                <a
                  href={contact.facebook}
                  className="transition-colors hover:text-cream"
                >
                  Facebook
                </a>
              </p>
              <p>
                <a
                  href={contact.instagram}
                  className="transition-colors hover:text-cream"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>

        <GoldRule className="my-10 opacity-50" />

        <p className="text-xs tracking-wide text-cream/60">{contact.copyright}</p>
      </Container>
    </footer>
  );
}
