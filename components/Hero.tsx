"use client";

import { motion } from "framer-motion";
import { useI18n } from "./I18nProvider";
import { ButtonLink } from "./ButtonLink";
import { HeroGraphic } from "./HeroGraphic";
import { ease } from "./Reveal";

export function Hero() {
  const { t } = useI18n();
  const { headline, accentCount, capabilities } = t.hero;
  const accentFrom = headline.length - accentCount;
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-20">
      {/* Background: grid, top glow, noise */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid mask-radial absolute inset-0 opacity-70" />
        <div className="absolute left-1/2 top-[-280px] h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(91,108,255,0.28),transparent)]" />
        <div className="absolute bottom-0 h-40 w-full bg-gradient-to-b from-transparent to-ink-950" />
      </div>

      <div className="container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="eyebrow rounded-full border border-accent-400/20 bg-accent-500/[0.07] px-3 py-1.5"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
              </span>
              {t.hero.eyebrow}
            </motion.p>

            <h1
              id="hero-title"
              className="h-display mt-7 text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.4rem] xl:text-[4.9rem]"
            >
              {headline.map((word, i) => (
                <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                  <motion.span
                    className={`inline-block ${i >= accentFrom ? "text-gradient" : ""}`}
                    initial={{ y: "105%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.15 + i * 0.065, ease }}
                  >
                    {word}
                  </motion.span>
                  {i < headline.length - 1 && " "}
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease }}
              className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-zinc-400 sm:text-xl"
            >
              {t.hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <ButtonLink href="#contact" size="lg" arrow>
                {t.hero.primaryCta}
              </ButtonLink>
              <ButtonLink href="#work" size="lg" variant="secondary">
                {t.hero.secondaryCta}
              </ButtonLink>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-10 flex items-center gap-3 text-sm text-zinc-500"
            >
              <span aria-hidden className="flex shrink-0 -space-x-1.5 rtl:space-x-reverse">
                {["from-accent-400 to-violet-500", "from-signal to-accent-500", "from-violet-400 to-accent-300"].map((g) => (
                  <span key={g} className={`h-6 w-6 rounded-full border-2 border-ink-950 bg-gradient-to-br ${g}`} />
                ))}
              </span>
              {t.hero.trust}
            </motion.p>
          </div>

          <div className="relative -mx-4 sm:mx-0 lg:-me-8">
            <HeroGraphic chips={t.hero.chips} />
          </div>
        </div>
      </div>

      {/* Capability ticker */}
      <div className="relative mt-16 border-y border-white/[0.06] bg-white/[0.015] py-5 sm:mt-20">
        <h2 className="sr-only">{t.hero.capabilitiesHeading}</h2>
        <div dir="ltr" className="mask-fade-x flex overflow-hidden">
          <ul className="flex shrink-0 animate-marquee items-center gap-10 pr-10 motion-reduce:animate-none">
            {[...capabilities, ...capabilities].map((c, i) => (
              <li
                key={i}
                aria-hidden={i >= capabilities.length}
                className="flex items-center gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-zinc-500"
              >
                {c}
                <span aria-hidden className="h-1 w-1 rotate-45 bg-accent-400/60" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
