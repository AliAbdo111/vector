# VECTOR — Digital Growth Agency landing page

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide React

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Languages (English / العربية)

- Routes: `/en` and `/ar`. Visiting `/` redirects based on the saved choice (`NEXT_LOCALE` cookie), then the browser's `Accept-Language`, then English (`middleware.ts`).
- Copy lives in `lib/i18n/en.ts` and `lib/i18n/ar.ts` (same shape, type-checked). Client components read it with `useI18n()`.
- Arabic pages render with `dir="rtl"` and IBM Plex Sans Arabic; layout uses logical utilities (`ms-`, `pe-`, `start-`) and `rtl:` variants for arrows.
- To add a language: add it to `lib/i18n/config.ts`, create a dictionary, and register it in `lib/i18n/index.ts`.

## Where to edit

- `lib/i18n/*.ts` — all copy, services, **demo metrics**, case studies and **placeholder testimonials** per language. Swap these for verified data before launch.
- `lib/content.ts` — site URL and contact email.
- `components/` — one file per section (`Hero`, `Services`, `Results`, `Work`, `Approach`, `Process`, `Testimonials`, `CTA`, `Footer`).
- `components/HeroGraphic.tsx` — the animated isometric "growth vector" built in SVG.
- `app/[locale]/layout.tsx` — per-language metadata, hreflang, Open Graph, JSON-LD, fonts. `app/opengraph-image.tsx` generates the social card.
- `tailwind.config.ts` — colour tokens (`ink`, `accent`, `violet`, `signal`) and keyframes.

Motion respects `prefers-reduced-motion` via `MotionConfig reducedMotion="user"`, `useReducedMotion` in custom animations, and a CSS fallback.
