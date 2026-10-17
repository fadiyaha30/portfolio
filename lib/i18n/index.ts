import { ja } from "./ja";

export type Locale = "en" | "ja";
export type Message = keyof typeof ja;
export type LocalizedProps = Readonly<{ locale: Locale }>;

export function getTranslator(locale: Locale) {
  return (message: Message): string => locale === "ja" ? ja[message] : message;
}

export function formatSkillCount(locale: Locale, count: number): string {
  return locale === "ja"
    ? `${count}件のスキルカテゴリを表示しています。`
    : `${count} skill categories shown.`;
}

export function localePath(locale: Locale): string {
  return locale === "ja" ? "/ja" : "/";
}
