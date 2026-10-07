"use client";

import Link from "next/link";
import { Languages } from "lucide-react";
import { localeMeta, locales } from "@/lib/i18n/config";
import { useI18n } from "./I18nProvider";

/** Toggles between English and Arabic and remembers the choice. */
export function LanguageSwitcher({ className = "", onSwitch }: { className?: string; onSwitch?: () => void }) {
  const { locale, t } = useI18n();
  const target = locales.find((l) => l !== locale)!;

  return (
    <Link
      href={`/${target}`}
      hrefLang={target}
      lang={target}
      aria-label={`${t.nav.switchLanguage}: ${localeMeta[target].label}`}
      onClick={() => {
        document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=31536000; samesite=lax`;
        onSwitch?.();
      }}
      className={`inline-flex h-9 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 text-sm text-zinc-300 transition-colors hover:border-white/25 hover:text-white ${className}`}
    >
      <Languages aria-hidden className="h-4 w-4" />
      {target === "ar" ? <span className="font-[family-name:var(--font-arabic)]">عربي</span> : <span>EN</span>}
    </Link>
  );
}
