"use client";

import { motion } from "framer-motion";
import { principles } from "@/lib/content";
import { Reveal, ease } from "./Reveal";

export function Approach() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-28 sm:py-36">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className="eyebrow">
                <span aria-hidden className="h-px w-6 bg-accent-400/70" />
                Why VECTOR
              </p>
              <h2 id="about-title" className="h-display mt-5 text-4xl leading-[1.04] sm:text-5xl lg:text-6xl">
                Marketing without the <span className="text-gradient">guesswork.</span>
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-400">
                A vector has two properties: magnitude and direction. We bring both — creative force, pointed precisely
                at the outcomes that matter to your business.
              </p>
            </Reveal>

            {/* Precision × Creativity × Technology × Growth */}
            <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              {["Precision", "Creativity", "Technology", "Growth"].map((w, i) => (
                <span key={w} className="flex items-center gap-3">
                  {i > 0 && <span aria-hidden className="text-accent-400">×</span>}
                  <span className="text-zinc-300">{w}</span>
                </span>
              ))}
            </Reveal>
          </div>

          <ol className="border-t border-white/[0.08]">
            {principles.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                transition={{ duration: 0.8, delay: i * 0.05, ease }}
                className="group relative grid grid-cols-[auto_1fr] gap-6 border-b border-white/[0.08] py-10 sm:gap-10 sm:py-12"
              >
                {/* Accent line that sweeps in on hover */}
                <span
                  aria-hidden
                  className="absolute -bottom-px left-0 h-px w-0 bg-gradient-to-r from-accent-400 to-violet-400 transition-all duration-700 group-hover:w-full"
                />
                <span className="font-mono text-sm text-accent-300 sm:pt-2">0{i + 1}</span>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-md text-lg leading-relaxed text-zinc-400">{p.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
