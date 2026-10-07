"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail } from "lucide-react";
import { site } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";
import { Reveal } from "./Reveal";

/** Converging vector lines that sweep slowly behind the CTA. */
function VectorField() {
  const reduce = useReducedMotion();
  const lines = Array.from({ length: 18 }, (_, i) => i);
  return (
    <svg aria-hidden viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="cta-line" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#5B6CFF" stopOpacity="0" />
          <stop offset="0.6" stopColor="#8E9AFF" stopOpacity="0.5" />
          <stop offset="1" stopColor="#2EE6C5" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {lines.map((i) => {
        const startX = -200 + i * 70;
        const d = `M${startX},640 C${startX + 200},420 ${700 + i * 8},${300 - i * 6} 1240,${-20 + i * 4}`;
        return (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke="url(#cta-line)"
            strokeWidth={1}
            initial={{ pathLength: reduce ? 1 : 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.25 + (i % 4) * 0.12 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, delay: i * 0.05, ease: [0.65, 0, 0.35, 1] }}
          />
        );
      })}
    </svg>
  );
}

export function CTA() {
  return (
    <section id="contact" aria-labelledby="cta-title" className="relative px-3 py-10 sm:px-6">
      <div className="noise relative isolate mx-auto max-w-[1280px] overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900 px-6 py-24 text-center sm:py-32 lg:py-40">
        {/* Animated gradient mesh */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 animate-gradient-pan opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(40% 60% at 20% 30%, rgba(91,108,255,0.45), transparent 70%), radial-gradient(35% 55% at 80% 70%, rgba(139,92,246,0.4), transparent 70%), radial-gradient(30% 40% at 60% 10%, rgba(46,230,197,0.18), transparent 70%)",
            backgroundSize: "160% 160%",
          }}
        />
        <div className="absolute inset-0 -z-10">
          <VectorField />
        </div>
        <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-30 mask-radial" />

        <Reveal className="relative mx-auto max-w-3xl">
          <p className="eyebrow justify-center">Let&apos;s build</p>
          <h2 id="cta-title" className="h-display mt-6 text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            Ready to move your brand <span className="text-gradient">forward?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-300 sm:text-xl">
            Let&apos;s build a digital growth engine that actually delivers.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href={`mailto:${site.email}?subject=New%20project%20enquiry`} size="lg" arrow>
              Start a Conversation
            </ButtonLink>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-sm text-zinc-300 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              <Mail aria-hidden className="h-4 w-4" />
              {site.email}
            </a>
          </div>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
            Reply within one business day
          </p>
        </Reveal>
      </div>
    </section>
  );
}
