import { ArrowUpRight } from "lucide-react";
import { navLinks, site, socials } from "@/lib/content";
import { Logo } from "./Logo";

const footerNav = navLinks.filter((l) => l.label !== "Process");

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20">
      <div className="container">
        <div className="grid gap-12 border-b border-white/[0.06] pb-14 md:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">{site.tagline}</p>
          </div>

          <nav aria-labelledby="footer-nav">
            <h2 id="footer-nav" className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">
              Navigation
            </h2>
            <ul className="mt-5 space-y-3">
              {footerNav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-zinc-400 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">Social</h2>
            <ul className="mt-5 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {s.label}
                    <ArrowUpRight
                      aria-hidden
                      className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">Contact</h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-block text-lg font-medium text-white underline-offset-4 transition-colors hover:text-accent-200 hover:underline"
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 py-8 text-xs text-zinc-600 sm:flex-row">
          <p>© 2026 VECTOR. All rights reserved.</p>
          <a href="#top" className="transition-colors hover:text-zinc-300">
            Back to top ↑
          </a>
        </div>
      </div>

      {/* Oversized wordmark */}
      <p
        aria-hidden
        className="pointer-events-none select-none bg-gradient-to-b from-white/[0.07] to-transparent bg-clip-text text-center text-[22vw] font-semibold leading-[0.8] tracking-tightest text-transparent"
      >
        VECTOR
      </p>
    </footer>
  );
}
