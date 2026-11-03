import { getTranslator, type LocalizedProps, type Message } from "../lib/i18n";

type Credential = { label: Message; title: string; detail: Message };

const credentials: Credential[] = [
  { label: "CERTIFICATION", title: "Google IT Support Professional Certificate", detail: "Google · Earned 2023" },
  { label: "CERTIFICATION", title: "EF SET English Certificate", detail: "CEFR C1 · Earned September 2026" },
  { label: "TRAINING", title: "Digital Talent Scholarship", detail: "Fresh Graduate Academy · Completed" },
];

const spokenLanguages: { language: Message; level: Message }[] = [
  { language: "English", level: "CEFR C1 (EF SET)" },
  { language: "Japanese", level: "Everyday and workplace communication · Studying for JLPT N3" },
];

const cardClass = "glass rounded-[1rem] px-[1.6875rem] py-6 compact:p-5 phone:p-4";
const labelClass = "small-label text-[0.625rem] font-semibold tracking-[0.10625rem] text-[color:var(--accent)]";

export default function Certifications({ locale }: LocalizedProps) {
  const t = getTranslator(locale);
  return (
    <section id="certifications" className="section py-8 px-0 compact:py-[1.375rem]">
      <div className="section-heading flex items-center gap-[0.8125rem] mb-[1.375rem]">
        <span className="number text-[0.625rem] text-[color:#8995a3]">04</span>
        <h2 className="font-[550] text-[1.375rem] tracking-[-0.0375rem] m-0 compact:text-[1.25rem]">{t("Certifications & languages")}</h2>
      </div>
      <div className="grid grid-cols-2 gap-[0.875rem] items-stretch compact:grid-cols-1">
        {credentials.map((credential) => (
          <article key={credential.title} className={cardClass}>
            <span className={labelClass}>{t(credential.label)}</span>
            <h3 className="font-semibold text-[0.9375rem] tracking-[-0.015625rem] mt-[0.5625rem] mb-[0.375rem] mx-0">{credential.title}</h3>
            <p className="text-[0.6875rem] text-[color:var(--muted)] leading-[1.7] m-0">{t(credential.detail)}</p>
          </article>
        ))}
        <article className={cardClass}>
          <span className={labelClass}>{t("SPOKEN LANGUAGES")}</span>
          <dl className="grid gap-[0.625rem] mt-[0.5625rem] mb-0">
            {spokenLanguages.map(({ language, level }) => (
              <div key={language}>
                <dt className="font-semibold text-[0.8125rem] tracking-[-0.015625rem]">{t(language)}</dt>
                <dd className="text-[0.6875rem] text-[color:var(--muted)] leading-[1.7] m-0">{t(level)}</dd>
              </div>
            ))}
          </dl>
        </article>
      </div>
    </section>
  );
}
