"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

/* ------------------------------------------------------------------ */
/* Abstract mockups — no stock imagery                                 */
/* ------------------------------------------------------------------ */

function Window({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 bg-ink-850/90 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="ml-3 h-2 w-24 rounded-full bg-white/[0.06]" />
      </div>
      {children}
    </div>
  );
}

function CommerceVisual() {
  const bars = [28, 34, 30, 42, 48, 46, 58, 66, 72, 84, 92];
  return (
    <div className="relative h-full w-full">
      <Window className="absolute left-[6%] top-[12%] w-[72%]">
        <div className="grid grid-cols-3 gap-2 p-3">
          {["from-accent-500/40 to-violet-500/20", "from-signal/30 to-accent-500/10", "from-violet-500/40 to-accent-400/10"].map(
            (g) => (
              <div key={g} className="space-y-1.5">
                <div className={`aspect-[4/5] rounded-md bg-gradient-to-br ${g}`} />
                <div className="h-1.5 w-3/4 rounded-full bg-white/15" />
                <div className="h-1.5 w-1/3 rounded-full bg-white/[0.08]" />
              </div>
            ),
          )}
        </div>
      </Window>
      <Window className="absolute bottom-[10%] right-[5%] w-[58%]">
        <div className="p-4">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Revenue</span>
            <span className="text-xs font-semibold text-signal">▲ 184%</span>
          </div>
          <div className="mt-3 flex h-20 items-end gap-1">
            {bars.map((b, i) => (
              <motion.span
                key={i}
                className={`flex-1 rounded-sm ${i === bars.length - 1 ? "bg-accent-300" : "bg-accent-500/40"}`}
                initial={{ height: "8%" }}
                whileInView={{ height: `${b}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>
        </div>
      </Window>
      <div className="glass absolute right-[10%] top-[8%] rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-zinc-300">
        Checkout CVR <span className="text-signal">+52%</span>
      </div>
    </div>
  );
}

function SaasVisual() {
  const channels = [
    { label: "Search", w: 88 },
    { label: "Social", w: 64 },
    { label: "Landing", w: 76 },
    { label: "Retarget", w: 46 },
  ];
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <svg viewBox="0 0 200 200" className="absolute h-[78%] opacity-80" aria-hidden>
        {[90, 70, 50].map((r, i) => (
          <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="rgba(142,154,255,0.15)" strokeDasharray={i === 1 ? "3 5" : undefined} />
        ))}
        <motion.circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="url(#saas-arc)"
          strokeWidth="3"
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 0.78 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
        <defs>
          <linearGradient id="saas-arc" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5B6CFF" />
            <stop offset="1" stopColor="#2EE6C5" />
          </linearGradient>
        </defs>
      </svg>
      <Window className="relative w-[70%]">
        <div className="space-y-3 p-4">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">ROAS by channel</span>
            <span className="text-sm font-semibold text-white">3.4x</span>
          </div>
          {channels.map((c, i) => (
            <div key={c.label} className="flex items-center gap-3">
              <span className="w-14 text-[10px] text-zinc-500">{c.label}</span>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.05]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent-500 to-violet-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${c.w}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          ))}
        </div>
      </Window>
    </div>
  );
}

function OrganicVisual() {
  const line = "M0,92 C30,90 40,80 70,78 C100,76 110,60 140,56 C170,52 180,34 210,28 C240,22 260,10 300,6";
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <Window className="w-[82%]">
        <div className="p-4">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Organic sessions</span>
            <span className="text-xs font-semibold text-signal">▲ 126%</span>
          </div>
          <svg viewBox="0 0 300 100" className="mt-3 h-24 w-full overflow-visible" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="org-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#A78BFA" stopOpacity="0.35" />
                <stop offset="1" stopColor="#A78BFA" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[25, 50, 75].map((y) => (
              <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="rgba(255,255,255,0.05)" />
            ))}
            <path d={`${line} L300,100 L0,100 Z`} fill="url(#org-fill)" />
            <motion.path
              d={line}
              fill="none"
              stroke="#A78BFA"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>
          <ul className="mt-4 space-y-2">
            {[
              ["category keyword", "#1"],
              ["long-tail guide", "#2"],
              ["comparison query", "#3"],
            ].map(([k, r]) => (
              <li key={k} className="flex items-center justify-between rounded-md bg-white/[0.03] px-2.5 py-1.5 text-[10px]">
                <span className="text-zinc-400">{k}</span>
                <span className="font-mono text-violet-400">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </Window>
    </div>
  );
}

const visuals = { commerce: CommerceVisual, saas: SaasVisual, organic: OrganicVisual };
const glows = {
  commerce: "from-accent-500/30 via-violet-500/10",
  saas: "from-signal/20 via-accent-500/10",
  organic: "from-violet-500/30 via-accent-500/10",
};

/* ------------------------------------------------------------------ */

function CaseCard({ study, featured }: { study: CaseStudy; featured?: boolean }) {
  const Visual = visuals[study.visual];
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-900 transition-colors duration-500 hover:border-white/[0.16] ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden border-white/[0.06] ${
          featured ? "aspect-[4/3] border-b lg:order-2 lg:aspect-auto lg:min-h-[460px] lg:w-[56%] lg:border-b-0 lg:border-l" : "aspect-[4/3] border-b"
        }`}
      >
        <div aria-hidden className={`absolute inset-0 bg-gradient-to-br ${glows[study.visual]} to-transparent`} />
        <div aria-hidden className="bg-grid absolute inset-0 opacity-40 [background-size:32px_32px]" />
        <div
          role="img"
          aria-label={`Abstract illustration of ${study.sector.toLowerCase()} performance: ${study.metric} ${study.metricLabel}`}
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.03] motion-reduce:transform-none"
        >
          <Visual />
        </div>
      </div>

      <div className={`flex flex-1 flex-col p-7 sm:p-9 ${featured ? "lg:justify-between lg:p-12" : ""}`}>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">{study.sector}</p>
          <h3 className={`mt-4 font-semibold tracking-tight text-white ${featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
            {study.title}
          </h3>
          {featured && <p className="mt-4 max-w-md text-zinc-400">{study.summary}</p>}
        </div>

        <div className="mt-8">
          <p className="flex items-baseline gap-3">
            <span className={`font-semibold tracking-tightest text-gradient-accent ${featured ? "text-6xl sm:text-7xl" : "text-5xl"}`}>
              {study.metric}
            </span>
            <span className="text-sm text-zinc-400">{study.metricLabel}</span>
          </p>
          <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/[0.06] pt-5">
            <p className="text-sm text-zinc-500">
              <span className="sr-only">Services: </span>
              {study.services.join(" · ")}
            </p>
            <span
              aria-hidden
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 group-hover:border-transparent group-hover:bg-white group-hover:text-ink-950"
            >
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Work() {
  const [first, ...rest] = caseStudies;
  return (
    <section id="work" aria-labelledby="work-title" className="relative py-28 sm:py-36">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader id="work-title" eyebrow="Featured Work" title="Work that moves the needle." />
          <Reveal>
            <ButtonLink href="#contact" variant="secondary" arrow>
              View All Work
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <Reveal className="lg:col-span-2">
            <CaseCard study={first} featured />
          </Reveal>
          {rest.map((s, i) => (
            <Reveal key={s.sector} delay={i * 0.1}>
              <CaseCard study={s} />
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-zinc-600">
          Case studies shown are illustrative examples. Client names withheld; figures are demo data.
        </p>
      </div>
    </section>
  );
}
