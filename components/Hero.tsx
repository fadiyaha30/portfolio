import { getTranslator, type LocalizedProps } from "../lib/i18n";

export default function Hero({ locale }: LocalizedProps) {
  const t = getTranslator(locale);
  return (
    <section className="hero pt-[clamp(0.75rem,2.5vh,1.75rem)] pb-[2.6875rem] px-0" id="home">
      <div className="hero-layout grid grid-cols-[minmax(0,1fr)_15rem] gap-[2.8125rem] items-center compact:grid-cols-1 compact:gap-7">
        <div className="hero-content min-w-0">
          <h1 className="hero-title font-[550] text-[clamp(2.15rem,5.5vw,3.625rem)] tracking-[-0.12rem] leading-[1.08] mt-[0.65rem] mb-[0.85rem] mx-0">Fadiyah <span className="text-[color:#7b8fa5] block">Adiningsih</span></h1>
          <p className="hero-role flex flex-wrap items-center gap-[0.55rem] mt-0 mb-4 text-[0.875rem] font-medium leading-[1.6] mx-0"><span className="dot w-[0.375rem] h-[0.375rem] rounded-full bg-[#83a39b] shrink-0" aria-hidden="true" />{t("Full Stack Developer")}{" "}<span className="hero-location font-normal text-[color:var(--muted)]">{t("· Japan")}</span></p>
          <p className="hero-copy text-[color:var(--muted)] text-[0.875rem] leading-[1.9] m-0 compact:text-[0.75rem]">{t("Hi, I’m Faya. I build and improve web applications across frontend and backend,")}{" "}<br />{t("from user-facing features to the systems behind them.")}<br />{t("Originally from Indonesia, I’m now working as a Full Stack Developer in Japan.")}</p>
          <div className="
            hero-experience glass flex items-center gap-4 w-fit max-w-full mt-5 rounded-[1rem] px-[1.15rem]
            py-[0.85rem] compact:px-4 compact:py-[0.9rem]
            " role="group" aria-label={t("Professional experience")}>
            <p className="hero-experience-value grid gap-1 shrink-0 pr-4 [border-right:0.0625rem_solid_var(--line)] text-[color:var(--accent)] m-0">
              <strong className="text-[2.25rem] font-semibold leading-[1] tracking-[-0.08rem]">2+</strong>
              <span className="text-[0.625rem] leading-[1.4] tracking-[0.04rem]">{t("years")}</span>
            </p>
            <div className="hero-experience-copy min-w-0">
              <p className="hero-experience-title text-[0.75rem] font-semibold leading-[1.5] text-[color:var(--text)] m-0">{t("Full-stack development")}</p>
              <p className="hero-experience-since mt-[0.3rem] mb-0 text-[0.625rem] leading-[1.7] text-[color:var(--muted)] mx-0">{t("Since")}{" "}<time dateTime="2024-04">{t("April 2024")}</time></p>
            </div>
          </div>
          <div className="hero-contact-links flex flex-wrap items-stretch gap-[0.6rem] mt-5" aria-label={t("Portfolio and contact links")}>
            <a className="
              button hero-work-button bg-[#354b61] text-[color:white] rounded-[0.5625rem] text-[0.7rem]
              shadow-[0_0.25rem_0.625rem_#354b6112] inline-flex items-center justify-center gap-[0.65rem]
              min-h-[2.4rem] leading-[1.5] px-[0.9rem] py-[0.55rem] hover:bg-[#48647d] phone:basis-full
              " href="#work">{t("View my work")}{" "}<span className="ml-0" aria-hidden="true">↗</span></a>
            <a className="
              hero-contact-button inline-flex items-center justify-center gap-2 min-h-[2.2rem]
              [border:0.0625rem_solid_var(--line)] rounded-[0.5625rem] bg-[rgba(255,255,255,0.45)]
              text-[color:var(--text)] text-[0.7rem] leading-[1.5]
              [transition:background_150ms_ease,border-color_150ms_ease] px-[0.85rem] py-2
              hover:bg-[rgba(255,255,255,0.85)] hover:[border-color:var(--accent)]
              focus-visible:[outline:0.125rem_solid_var(--accent)] focus-visible:[outline-offset:0.2rem] phone:flex-1
              " href="https://github.com/fadiyaha30" target="_blank" rel="noopener noreferrer">
              <svg className="w-[0.9rem] h-[0.9rem] shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.4-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.69.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.33-2.64 5.28-5.15 5.56.41.35.77 1.03.77 2.08v3.11c0 .3.21.65.78.54A11.25 11.25 0 0 0 12 .75Z" /></svg>
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a className="
              hero-contact-button inline-flex items-center justify-center gap-2 min-h-[2.2rem]
              [border:0.0625rem_solid_var(--line)] rounded-[0.5625rem] bg-[rgba(255,255,255,0.45)]
              text-[color:var(--text)] text-[0.7rem] leading-[1.5]
              [transition:background_150ms_ease,border-color_150ms_ease] px-[0.85rem] py-2
              hover:bg-[rgba(255,255,255,0.85)] hover:[border-color:var(--accent)]
              focus-visible:[outline:0.125rem_solid_var(--accent)] focus-visible:[outline-offset:0.2rem] phone:flex-1
              " href="mailto:fayadin.work@gmail.com">
              <svg className="w-[0.9rem] h-[0.9rem] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>{t("Email me")}</a>
          </div>
          {/* <a className="text-link hero-about-link" href="#about">More about me <span aria-hidden="true">↓</span></a> */}
        </div>
        <figure className="
          profile-frame glass rounded-[1.4375rem] [transform:rotate(2deg)] p-[0.5625rem] m-0
          compact:w-[12.1875rem] compact:[grid-row:auto] compact:[transform:rotate(1deg)]
          ">
          <div className="profile-crop h-70 overflow-hidden rounded-[1rem] compact:h-[13.125rem]"><img className="block w-full h-full object-cover object-[50%_48%] rounded-none [transform:scale(1.3)] origin-[50%_48%]" src="/assets/faya-blurred.png" alt={t("Faya smiling, wearing a navy hijab and glasses")} width="1019" height="1358" fetchPriority="high" /></div>
          <figcaption className="flex justify-between items-center pt-3 pb-[0.3125rem] text-[0.75rem] font-semibold px-2">Faya <span className="text-[0.5625rem] font-normal text-[color:var(--muted)]">{t("Indonesia → Japan")}</span></figcaption>
        </figure>
      </div>
      {/* <div className="hero-note"><span>Full Stack Developer</span><span>Indonesia → Japan</span></div> */}
    </section>
  );
}
