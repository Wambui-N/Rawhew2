import type { ReactNode, SVGProps } from "react";

/*
  Simple stroke-style line icons — deliberately hand-drawn feel, not corporate.
  All share a 24x24 box, no fill, 1.5 stroke. Placeholder set for the concept;
  a bespoke icon family can replace these once the direction is signed off.
*/

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconLeaf(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 19c0-8 6-13 14-13 0 8-5 14-13 14a6 6 0 0 1-1-1Z" />
      <path d="M9 15c2-3 5-5 8-6" />
    </Base>
  );
}

export function IconTent(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 4 3 20h18L12 4Z" />
      <path d="M12 9v11" />
      <path d="M12 20c-1.6-2.2-3-3.4-5-4" />
      <path d="M12 20c1.6-2.2 3-3.4 5-4" />
    </Base>
  );
}

export function IconBike(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="5.5" cy="16.5" r="3.5" />
      <circle cx="18.5" cy="16.5" r="3.5" />
      <path d="M5.5 16.5 10 8h5l2 4" />
      <path d="M10 8 8 8" />
      <path d="m12 12 6.5 4.5" />
      <path d="M14.5 6h2.5" />
    </Base>
  );
}

export function IconHorse(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 20c0-4 2-7 6-8l1-3 3-2 2 1-1 3c2 1 3 3 3 6" />
      <path d="M18 8c1-1 1.5-2 1.5-3.5L17 6" />
      <path d="M10 12c-1.5.5-2.5 1.5-3 3" />
      <path d="M7 20v-2M17 20v-3" />
    </Base>
  );
}

export function IconCanoe(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 8c3 8 15 8 18 0-3 2-6 3-9 3S6 10 3 8Z" />
      <path d="M14 3 8 15" />
      <path d="M12 19c3 0 6-.6 8-2M4 17c1.2.8 2.6 1.4 4 1.7" />
    </Base>
  );
}

export function IconFire(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3c3 3 5 6 5 9a5 5 0 0 1-10 0c0-1.4.6-2.7 1.5-3.8C9 10 10 11 10.5 12 11 9 12 6 12 3Z" />
    </Base>
  );
}

export function IconFlame(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 2c1 4 4 6 4 10a4 4 0 0 1-8 0c0-2 1-3 1-5 1 1 2 2 3 2 0-3 0-5-0-7Z" />
      <path d="M6 20h12" />
    </Base>
  );
}

export function IconGrill(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 6h16a8 8 0 0 1-8 8 8 8 0 0 1-8-8Z" />
      <path d="M9 13.5 7 21M15 13.5 17 21M8 18h8" />
    </Base>
  );
}

export function IconDroplet(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3c3.5 4.5 6 7.8 6 11a6 6 0 0 1-12 0c0-3.2 2.5-6.5 6-11Z" />
      <path d="M9 14c0 1.7 1.3 3 3 3" />
    </Base>
  );
}

export function IconShower(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 12h16" />
      <path d="M6 12V7a3 3 0 0 1 6 0" />
      <path d="M8 16v.5M12 16.5v.5M16 16v.5M10 19v.5M14 19v.5" />
    </Base>
  );
}

export function IconParking(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 16 6.5 9A2 2 0 0 1 8.4 7.5h7.2A2 2 0 0 1 17.5 9L19 16" />
      <path d="M3 16h18v3h-2v-2H5v2H3v-3Z" />
      <circle cx="7" cy="16.5" r="1" />
      <circle cx="17" cy="16.5" r="1" />
    </Base>
  );
}

export function IconCoffee(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
      <path d="M17 9h2a2.5 2.5 0 0 1 0 5h-2" />
      <path d="M8 3c-.6 1 .6 2 0 3M12 3c-.6 1 .6 2 0 3" />
    </Base>
  );
}

export function IconHome(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </Base>
  );
}

export function IconHeart(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 20S4 14.5 4 9a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 5.5-8 11-8 11Z" />
    </Base>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M4 19c0-3 2.2-5 5-5s5 2 5 5" />
      <path d="M15 6.5A2.6 2.6 0 0 1 15 12M20 19c0-2.6-1.4-4.3-3.5-4.8" />
    </Base>
  );
}

export function IconCompass(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </Base>
  );
}

export function IconMountain(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 19 10 6l4 7 2-3 5 9H3Z" />
      <path d="m8.5 12 2 2M13 15l1.5-1.5" />
    </Base>
  );
}

export function IconTrees(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9 14c-2.5 0-4-1.6-4-3.6C5 8.7 6 7.6 6.4 7 6 6.3 6 5 7 4c1.2-1.2 3-1.2 4 0 1-.6 2-.4 2.6.4" />
      <path d="M9 14v6" />
      <path d="M15 17c2.2 0 3.5-1.4 3.5-3.2 0-1.5-1-2.5-1.4-3 .4-.6.4-1.8-.6-2.6" />
      <path d="M15 17v3" />
    </Base>
  );
}

export function IconSprout(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 20v-8" />
      <path d="M12 12C12 8 9 6 5 6c0 4 3 6 7 6Z" />
      <path d="M12 11c0-3 2.5-5 6-5 0 3.5-2.5 5-6 5Z" />
      <path d="M8 20h8" />
    </Base>
  );
}

export const iconMap = {
  leaf: IconLeaf,
  tent: IconTent,
  bike: IconBike,
  horse: IconHorse,
  canoe: IconCanoe,
  fire: IconFire,
  flame: IconFlame,
  grill: IconGrill,
  droplet: IconDroplet,
  shower: IconShower,
  parking: IconParking,
  coffee: IconCoffee,
  home: IconHome,
  heart: IconHeart,
  users: IconUsers,
  compass: IconCompass,
  mountain: IconMountain,
  trees: IconTrees,
  sprout: IconSprout,
} as const;

export type IconName = keyof typeof iconMap;

export function Icon({ name, ...props }: IconProps & { name: string }) {
  const Cmp = iconMap[name as IconName] ?? IconLeaf;
  return <Cmp {...props} />;
}
