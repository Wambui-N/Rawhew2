# Rawhew Ranch — bohemian-luxury redesign concept

A design-direction prototype for [rawhewranch-kenya.com](https://rawhewranch-kenya.com).
Next.js (App Router) + Tailwind v4 + Framer Motion. All body copy is pulled
**verbatim** from the current site — this rebuild is visual only.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

`npm run build` produces a fully static export of both routes.

## Pages

| Route   | Contents                                                                 |
| ------- | ----------------------------------------------------------------------- |
| `/`     | Hero · Welcome to Naivasha · Welcome to Rawhew Ranch · Amenities · Activities |
| `/menu` | Prices (tariff card) · Terms & Conditions · Our Restaurant · Our Menu   |

The current site keeps a separate "Menu" page (page 2: the restaurant food
menu) and lists "Prices" on page 1. Both are consolidated onto `/menu` here so
the nav's single **Menu** link covers everything price/menu related.

## Decisions worth flagging for the client

- **Typography** — per the brief, no new webfonts were added. Body uses the
  system sans stack; editorial headings use the system serif stack
  (Georgia/Cambria/Times). Swap in the real brand faces when available.
- **Imagery** — every image is a labelled placeholder at the intended aspect
  ratio (subject + ratio printed on each block). Drop real photography into
  `components/placeholder.tsx` / the hero background with no layout change.
- **Icons** — the amenity/activity line icons in `components/icons.tsx` are a
  placeholder stroke set to prove the motif; a bespoke family can replace them.
- **shadcn/ui** — not pulled in. The only interactive pieces (nav scroll state,
  tariff layout) were lighter hand-rolled; add shadcn later if the component
  surface grows.
- **Colour** — earth-tone tokens live in `app/globals.css` (`@theme`). Tuned by
  eye against placeholders; expect a pass once real photos land.
- **Motion** — scroll-reveals via Framer Motion `whileInView`, light parallax on
  the hero only. Fully disabled under `prefers-reduced-motion`.
# Rawhew2
