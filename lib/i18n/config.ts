export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeMeta: Record<Locale, { dir: "ltr" | "rtl"; label: string; ogLocale: string }> = {
  en: { dir: "ltr", label: "English", ogLocale: "en_US" },
  ar: { dir: "rtl", label: "العربية", ogLocale: "ar_AR" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
