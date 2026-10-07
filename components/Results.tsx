"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { Info } from "lucide-react";
import { stats, type Stat } from "@/lib/content";
import { Reveal, ease } from "./Reveal";

function CountUp({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const format = (v: number) => v.toFixed(stat.decimals ?? 0);
  const [display, setDisplay] = useState(format(0));

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(format(stat.value));
      return;
    }
    const controls = animate(0, stat.value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(format(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, stat.value]);

  return (
    <span ref={ref} className="tabular-nums">
      {/* Screen readers get the final value immediately. */}
      <span className="sr-only">
        {stat.prefix}
        {format(stat.value)}
        {stat.suffix}
      </span>
      <span aria-hidden>
        {stat.prefix}
        {display}
        <span className="text-accent-300">{stat.suffix}</span>
      </span>
    </span>
  );
}

function Sparkline({ points, delay }: { points: number[]; delay: number }) {
  const w = 160;
  const h = 40;
  const max = Math.max(...points);
  const step = w / (points.length - 1);
  const coords = points.map((p, i) => [i * step, h - (p / max) * (h - 4) - 2] as const);
  const line = coords.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${line} L${w},${h} L0,${h} Z`;
  const last = coords[coords.length - 1];

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-10 w-full max-w-[160px] overflow-visible" aria-hidden>
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5B6CFF" stopOpacity="0.35" />
          <stop offset="1" stopColor="#5B6CFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={area}
        fill="url(#spark-fill)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.6 }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke="#8E9AFF"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay, ease }}
      />
      <circle cx={last[0]} cy={last[1]} r={2.5} fill="#2EE6C5" />
    </svg>
  );
}

export function Results() {
  return (
    <section
      aria-labelledby="results-title"
      className="relative overflow-hidden border-y border-white/[0.06] bg-ink-900 py-28 sm:py-36"
    >
      <div aria-hidden className="bg-dots absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,transparent,#000_30%,#000_70%,transparent)]" />
      <div aria-hidden className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent-500/10 blur-[120px]" />

      <div className="container relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">
              <span aria-hidden className="h-px w-6 bg-accent-400/70" />
              Results
            </p>
            <h2 id="results-title" className="h-display mt-5 text-4xl leading-[1.04] sm:text-5xl lg:text-6xl">
              We measure growth in numbers.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-400">
              Beautiful campaigns are nice. Measurable business results are better.
            </p>
            <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-3 py-1.5 text-xs text-amber-200/90">
              <Info aria-hidden className="h-3.5 w-3.5" />
              Example / demo metrics for illustration
            </p>
          </Reveal>

          <dl className="grid grid-cols-1 border-t border-white/[0.08] sm:grid-cols-2">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 0.08}
                className={`flex flex-col justify-between gap-6 border-b border-white/[0.08] py-8 sm:py-10 ${
                  i % 2 === 0 ? "sm:border-r sm:pr-10" : "sm:pl-10"
                }`}
              >
                <dt className="order-2 flex items-end justify-between gap-4">
                  <span className="text-sm text-zinc-400">{stat.label}</span>
                  <Sparkline points={stat.trend} delay={0.2 + i * 0.1} />
                </dt>
                <dd className="order-1 text-6xl font-semibold tracking-tightest text-white sm:text-7xl">
                  <CountUp stat={stat} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
