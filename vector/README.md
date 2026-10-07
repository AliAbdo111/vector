# VECTOR — Digital Growth Agency landing page

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide React

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where to edit

- `lib/content.ts` — all copy, services, **demo metrics**, case studies and **placeholder testimonials**. Swap these for verified data before launch.
- `components/` — one file per section (`Hero`, `Services`, `Results`, `Work`, `Approach`, `Process`, `Testimonials`, `CTA`, `Footer`).
- `components/HeroGraphic.tsx` — the animated isometric "growth vector" built in SVG.
- `app/layout.tsx` — metadata, Open Graph, JSON-LD, fonts. `app/opengraph-image.tsx` generates the social card.
- `tailwind.config.ts` — colour tokens (`ink`, `accent`, `violet`, `signal`) and keyframes.

Motion respects `prefers-reduced-motion` via `MotionConfig reducedMotion="user"`, `useReducedMotion` in custom animations, and a CSS fallback.
