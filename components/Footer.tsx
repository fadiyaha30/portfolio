import { getTranslator, type LocalizedProps } from "../lib/i18n";

export default function Footer({ locale }: LocalizedProps) {
  const t = getTranslator(locale);
  return (
    <footer className="
      max-w-225 mt-6 mb-auto flex items-center gap-[1.5625rem] justify-between
      [border-top:0.0625rem_solid_var(--line)] px-0 py-8 mx-auto inset:mx-[8%] compact:gap-3 compact:flex-wrap phone:mx-4
      "><a className="brand text-[1.1875rem] font-[650] tracking-[-0.0625rem] last:text-[0.625rem] last:text-[color:var(--muted)]" href="#home">Faya<span className="text-[color:#7a97b1]">.</span></a><span className="text-[0.625rem] text-[color:var(--muted)] compact:text-[0.5625rem]">© 2026 Fadiyah Adiningsih</span><a className="last:text-[0.625rem] last:text-[color:var(--muted)]" href="#home">{t("Back to top ↑")}</a></footer>
  );
}
