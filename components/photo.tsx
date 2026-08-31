import Image from "next/image";

/*
  Framed photo used across the marketing sections. Holds a fixed aspect ratio,
  the brass hairline + soft shadow, and (optionally) the safari-lodge arch crop.
*/

type PhotoProps = {
  src: string;
  alt: string;
  ratio?: string;
  arch?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  position?: string;
};

export function Photo({
  src,
  alt,
  ratio = "4 / 3",
  arch = false,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 640px",
  className = "",
  position = "center",
}: PhotoProps) {
  return (
    <div
      className={[
        "relative w-full overflow-hidden bg-sand-deep",
        arch ? "arch" : "rounded-[4px]",
        "ring-1 ring-brass/40 shadow-[0_18px_44px_-24px_rgba(43,32,24,0.55)]",
        className,
      ].join(" ")}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
