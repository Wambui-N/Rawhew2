"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { hero } from "@/lib/content";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.55, 0.8]);

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] min-h-[620px] w-full items-center justify-center overflow-hidden"
    >
      {/* Full-bleed hero image (Hell's Gate landscape) */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10 h-[125%] w-full">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Soft gradient overlay for legibility — no solid text box */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(20,14,9,0.4)_0%,rgba(20,14,9,0.15)_40%,rgba(20,14,9,0.3)_75%,rgba(20,14,9,0.6)_100%)]" />
      <motion.div
        style={{ opacity: overlay }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_42%,transparent_0%,rgba(20,14,9,0.35)_70%,rgba(20,14,9,0.65)_100%)]"
      />

      <div className="mx-auto max-w-3xl px-6 text-center text-cream">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mb-5 text-[0.8rem] font-semibold uppercase tracking-[0.34em] text-cream/85"
        >
          {hero.subtitle}
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
          className="text-5xl leading-[1.04] text-cream drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)] sm:text-6xl md:text-7xl"
        >
          {hero.title}
        </motion.h1>

        {/* "The place to be" — gold-rule-framed pull quote, not plain body text */}
        <motion.figure
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
          className="mx-auto mt-8 w-fit"
        >
          <span className="mx-auto mb-3 block h-px w-16 bg-brass" aria-hidden />
          <figcaption className="font-serif text-lg italic tracking-wide text-cream/90 sm:text-xl">
            &ldquo;{hero.tagline}&rdquo;
          </figcaption>
          <span className="mx-auto mt-3 block h-px w-16 bg-brass" aria-hidden />
        </motion.figure>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/70"
      >
        <span className="text-[0.62rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-cream/70 to-transparent" />
      </motion.div>
    </section>
  );
}
