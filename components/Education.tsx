import { getTranslator, type LocalizedProps } from "../lib/i18n";

export default function Education({ locale }: LocalizedProps) {
  const t = getTranslator(locale);
  return (
    <section id="education" className="section pt-[1.9375rem] pb-[2.1875rem] px-0 compact:px-0 compact:py-[1.375rem]">
      <div className="section-heading flex items-center gap-[0.8125rem] mb-[1.375rem]">
        <span className="number text-[0.625rem] text-[color:#8995a3]">03</span>
        <h2 className="font-[550] text-[1.375rem] tracking-[-0.0375rem] m-0 compact:text-[1.25rem]">{t("Education")}</h2>
      </div>
      <article className="
        education-card glass flex items-center gap-[1.1875rem] rounded-[1rem] px-[1.6875rem] py-6
        compact:grid compact:grid-cols-[auto_minmax(0,1fr)] compact:items-start compact:gap-3 compact:p-5 phone:p-4
        ">
        <div className="education-mark flex h-[2.4375rem] w-[2.4375rem] shrink-0 items-center justify-center self-start rounded-[0.6875rem] bg-[#17365d] p-[0.35rem]" aria-hidden="true">
          <img src="/assets/ugm-logo.webp" alt="" width="68" height="70" className="block h-full w-full object-contain" />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-[1rem] tracking-[-0.015625rem] m-0 compact:text-[0.875rem]">{t("Universitas Gadjah Mada")}</h3>
          <p className="degree text-[0.8125rem] text-[color:#5c7187] mx-0 my-1">{t("Electronics and Instrumentation")}</p>
          <p className="education-location text-[0.6875rem] text-[color:var(--muted)] m-0">{t("Indonesia · Graduated February 2024")}</p>
          <a className="thesis-link inline-block text-[0.6875rem] text-[color:#536b83] mt-[0.8125rem] hover:underline" href="#thesis">{t("Thesis: Car Detection Simulation Using YOLO ↗")}</a>
        </div>
        <span className="date ml-auto text-[0.6875rem] text-[color:var(--muted)] whitespace-nowrap compact:col-start-2 compact:ml-0 compact:whitespace-normal">{t("Jul 2019 — Feb 2024")}</span>
      </article>
    </section>
  );
}
