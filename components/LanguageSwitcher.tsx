import { localePath, type LocalizedProps } from "../lib/i18n";

export default function LanguageSwitcher({ locale }: LocalizedProps) {
  return (
    <div
      className="flex shrink-0 items-center gap-1 rounded-[0.6rem] border border-solid border-[var(--line)] bg-white/40 p-1 compact:ml-auto"
      role="group"
      aria-label={locale === "ja" ? "表示言語" : "Language"}
    >
      {(["en", "ja"] as const).map((language) => (
        <a
          key={language}
          href={localePath(language)}
          lang={language}
          hrefLang={language}
          aria-label={language === "en" ? "English" : "日本語"}
          aria-current={locale === language ? "page" : undefined}
          className={`inline-flex min-h-[2rem] items-center justify-center whitespace-nowrap rounded-[0.4rem] px-[0.65rem] text-[0.65rem] leading-[1.4] ${
            locale === language
              ? "bg-[#354b61] text-white"
              : "text-[var(--muted)] hover:bg-white/70 hover:text-[var(--text)]"
          }`}
        >
          {language === "en" ? "EN" : "日本語"}
        </a>
      ))}
    </div>
  );
}
