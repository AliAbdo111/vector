"use client";

import { createContext, useContext } from "react";
import type { Dictionary } from "@/lib/i18n/en";
import { localeMeta, type Locale } from "@/lib/i18n/config";

type I18nValue = { locale: Locale; dir: "ltr" | "rtl"; t: Dictionary };

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({
  locale,
  dictionary,
  children,
}: {
  locale: Locale;
  dictionary: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <I18nContext.Provider value={{ locale, dir: localeMeta[locale].dir, t: dictionary }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}
