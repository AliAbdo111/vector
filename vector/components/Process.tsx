"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { processSteps } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";
import { ease } from "./Reveal";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const scaleX = useTransform(progress, [0, 1], [0, 1]);

  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="relative overflow-hidden border-y border-white/[0.06] bg-ink-900 py-28 sm:py-36"
    >
      <div aria-hidden className="bg-grid absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,transparent,#000_40%,transparent)]" />
      <div className="container relative">
        <SectionHeader
          id="process-title"
          eyebrow="Process"
          align="center"
          title="A clear path from insight to scale."
          description="Five deliberate stages. One compounding system."
        />

        <div ref={ref} className="relative mt-20">
          {/* Desktop: horizontal track */}
          <div aria-hidden className="absolute left-0 right-0 top-[23px] hidden h-px bg-white/10 lg:block">
            <motion.div style={{ scaleX }} className="h-full origin-left bg-gradient-to-r from-accent-500 via-violet-400 to-signal" />
          </div>
          {/* Mobile/tablet: vertical track */}
          <div aria-hidden className="absolute bottom-20 left-[23px] top-6 w-px bg-white/10 lg:hidden">
            <motion.div style={{ scaleY: scaleX }} className="h-full w-full origin-top bg-gradient-to-b from-accent-500 via-violet-400 to-signal" />
          </div>

          <ol className="relative grid gap-0 lg:grid-cols-5 lg:gap-6">
          {processSteps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className="group relative grid grid-cols-[48px_1fr] gap-5 pb-12 last:pb-0 lg:block lg:pb-0"
            >
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-ink-850 font-mono text-sm text-white transition-all duration-500 group-hover:border-accent-400/60 group-hover:shadow-[0_0_30px_-2px_rgba(91,108,255,0.7)]">
                0{i + 1}
              </span>
              <div className="lg:mt-8">
                <h3 className="text-xl font-semibold tracking-tight text-white">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-zinc-400 lg:pr-4">{step.body}</p>
              </div>
            </motion.li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
