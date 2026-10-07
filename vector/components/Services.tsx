"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services, type Service } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";
import { staggerChild, staggerParent } from "./Reveal";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  // Track the pointer so a soft spotlight follows it across the card.
  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.article
      variants={staggerChild}
      onPointerMove={onMove}
      className="group relative isolate overflow-hidden bg-ink-900 p-7 transition-colors duration-500 hover:bg-ink-850 sm:p-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--x, 50%) var(--y, 0%), rgba(91,108,255,0.14), transparent 60%)",
        }}
      />

      <div className="flex items-start justify-between">
        <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.01] text-accent-200 transition-all duration-500 group-hover:border-accent-400/40 group-hover:text-white group-hover:shadow-[0_0_30px_-4px_rgba(91,108,255,0.6)]">
          <Icon aria-hidden className="h-5 w-5" strokeWidth={1.6} />
        </span>
        <span className="font-mono text-xs text-zinc-600 transition-colors group-hover:text-accent-300">
          0{index + 1}
        </span>
      </div>

      <h3 className="mt-8 flex items-center gap-2 text-xl font-semibold tracking-tight text-white">
        {service.title}
        <ArrowUpRight
          aria-hidden
          className="h-4 w-4 -translate-x-1 translate-y-1 text-accent-300 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
        />
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-zinc-400">{service.description}</p>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${service.title} capabilities`}>
        {service.items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1 text-xs text-zinc-400 transition-colors group-hover:border-white/[0.12] group-hover:text-zinc-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative py-28 sm:py-36">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            id="services-title"
            eyebrow="Services"
            title={
              <>
                Everything you need to <span className="text-gradient">grow digitally.</span>
              </>
            }
          />
          <p className="max-w-sm text-pretty text-zinc-400 lg:pb-2">
            One senior team across strategy, media, creative and technology — so every channel pulls in the same
            direction.
          </p>
        </div>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
