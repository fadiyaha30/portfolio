import type { Metadata } from "next";
import { localePath, type Locale } from ".";

export function getMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL("https://faya-portfolio.vercel.app"),
    title: locale === "ja" ? "Faya — フルスタックエンジニア" : "Faya — Full Stack Developer",
    description: locale === "ja"
      ? "インドネシア出身、日本在住のフルスタックエンジニア、Fadiyah Adiningsihのポートフォリオ。職務経歴、制作実績、使用技術をご紹介します。"
      : "Fadiyah Adiningsih — Indonesian Full Stack Developer based in Japan.",
    alternates: {
      canonical: localePath(locale),
      languages: { en: "/", ja: "/ja", "x-default": "/" },
    },
  };
}
