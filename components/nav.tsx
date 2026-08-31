"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Nav({ overHero = true }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(!overHero);

  useEffect(() => {
    if (!overHero) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero]);

  const solid = scrolled;
  const ratesHref = overHero ? "#pricing" : "/#pricing";

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "paper border-b border-brass/40 shadow-[0_10px_30px_-20px_rgba(43,32,24,0.6)]"
          : "border-b border-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3.5 sm:px-8">
        <Link href="/" className="group inline-flex items-center gap-2.5">
          <Image
            src="/No Text Logo.png"
            alt=""
            width={797}
            height={458}
            priority
            className={[
              "h-8 w-auto transition-all duration-500 sm:h-9",
              solid ? "" : "[filter:brightness(0)_invert(1)]",
            ].join(" ")}
          />
          {/* <span
            className={[
              "font-display text-lg tracking-wide transition-colors sm:text-xl",
              solid
                ? "text-ink"
                : "text-cream drop-shadow-[0_1px_10px_rgba(0,0,0,0.55)]",
            ].join(" ")}
          >
            Rawhew Ranch
          </span> */}
        </Link>

        <div className="flex items-center gap-6 sm:gap-9">
          <Link
            href={ratesHref}
            className={[
              "text-[0.72rem] font-semibold uppercase tracking-[0.24em] transition-colors sm:text-[0.8rem]",
              solid
                ? "text-ink-soft hover:text-rust"
                : "text-cream/85 hover:text-cream drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]",
            ].join(" ")}
          >
            Rates
          </Link>
          <Link
            href="/menu"
            className={[
              "group inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] transition-colors sm:text-[0.8rem]",
              solid
                ? "text-ink-soft hover:text-rust"
                : "text-cream/85 hover:text-cream drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]",
            ].join(" ")}
          >
            Menu
            <span
              className="h-px w-5 bg-current transition-all duration-300 group-hover:w-8"
              aria-hidden
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
