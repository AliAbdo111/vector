import { Quote } from "lucide-react";
import { testimonials, type Testimonial } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
}

function Author({ t }: { t: Testimonial }) {
  return (
    <figcaption className="flex items-center gap-3">
      {/* Replace with <Image> of the client when available */}
      <span
        aria-hidden
        className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-violet-500 text-sm font-semibold text-white"
      >
        {initials(t.name)}
      </span>
      <span className="leading-tight">
        <span className="block font-medium text-white">{t.name}</span>
        <span className="mt-1 block text-sm text-zinc-500">
          {t.role}, {t.company}
        </span>
      </span>
    </figcaption>
  );
}

export function Testimonials() {
  const [featured, ...others] = testimonials;

  return (
    <section aria-labelledby="testimonials-title" className="relative py-28 sm:py-36">
      <div className="container">
        <SectionHeader id="testimonials-title" eyebrow="Client Voices" title="Partners, not vendors." />

        <div className="mt-16 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          <Reveal className="h-full">
            <figure className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-ink-800 to-ink-900 p-8 sm:p-12">
              <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-500/20 blur-[90px]" />
              <Quote aria-hidden className="relative h-10 w-10 text-accent-400" strokeWidth={1.4} />
              <blockquote className="relative mt-8 text-balance text-2xl font-medium leading-snug tracking-tight text-white sm:text-[2.1rem] sm:leading-[1.25]">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
              <div className="relative mt-12">
                <Author t={featured} />
              </div>
            </figure>
          </Reveal>

          <div className="grid gap-5">
            {others.map((t, i) => (
              <Reveal key={t.name} delay={0.1 + i * 0.1} className="h-full">
                <figure className="flex h-full flex-col justify-between rounded-3xl border border-white/[0.08] bg-ink-900 p-8 transition-colors duration-500 hover:border-white/[0.14]">
                  <blockquote className="text-lg leading-relaxed text-zinc-300">&ldquo;{t.quote}&rdquo;</blockquote>
                  <div className="mt-8">
                    <Author t={t} />
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
        <p className="mt-6 text-xs text-zinc-600">Placeholder testimonials for demonstration — to be replaced with approved client quotes.</p>
      </div>
    </section>
  );
}
