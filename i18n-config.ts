import type { Locale as DateLocaleType } from "date-fns";
import { enGB, ptBR } from "date-fns/locale";

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "pt-br"],
} as const;

export type Locale = typeof i18n["locales"][number];

export const DateLocale: Record<Locale, DateLocaleType> = {
  en: enGB,
  "pt-br": ptBR,
};
