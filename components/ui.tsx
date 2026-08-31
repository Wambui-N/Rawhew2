import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return <hr className={`gold-rule ${className}`} />;
}

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      {eyebrow ? (
        <p className="eyebrow mb-3 flex items-center gap-3">
          {align === "center" && (
            <span className="h-px w-8 bg-brass/70" aria-hidden />
          )}
          {eyebrow}
          <span className="h-px w-8 bg-brass/70" aria-hidden />
        </p>
      ) : null}
      <h2 className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
    </Reveal>
  );
}

export function PullQuote({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal
      as="figure"
      className={`relative mx-auto max-w-2xl px-8 py-2 text-center ${className}`}
    >
      <span
        className="pointer-events-none absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-brass"
        aria-hidden
      />
      <blockquote className="font-serif text-2xl italic leading-snug text-ink-soft sm:text-[1.9rem]">
        {children}
      </blockquote>
      <span
        className="pointer-events-none absolute bottom-0 left-1/2 h-px w-24 -translate-x-1/2 bg-brass"
        aria-hidden
      />
    </Reveal>
  );
}
