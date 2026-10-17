import { getTranslator, type LocalizedProps } from "../lib/i18n";

export default function About({ locale }: LocalizedProps) {
  const t = getTranslator(locale);
  return (
    <section id="about" className="section pt-[1.9375rem] pb-[2.1875rem] px-0 compact:px-0 compact:py-[1.375rem]">
      <div className="section-heading flex items-center gap-[0.8125rem] mb-[1.375rem]">
        <span className="number text-[0.625rem] text-[color:#8995a3]">01</span>
        <h2 className="font-[550] text-[1.375rem] tracking-[-0.0375rem] m-0 compact:text-[1.25rem]">{t("A little about me")}</h2>
      </div>
      <div className="about-grid grid grid-cols-[1.2fr_1fr] gap-[3.125rem] items-start compact:grid-cols-1 compact:gap-[1.375rem]">
        <div>
          <p className="lead text-[1.4375rem] leading-[1.4] tracking-[-0.03125rem] mt-0 mb-[0.9375rem] mx-0 compact:text-[1.3125rem]">{t("A Full Stack Developer with curiosity")}<br />{t("for what comes next.")}</p>
          <div className="about-story">
            <p className="body-copy text-[0.8125rem] text-[color:var(--muted)] leading-[1.85] m-0 compact:text-[0.75rem]">{t("I grew up watching Doraemon, and its futuristic gadgets sparked my curiosity about technology and Japan. That curiosity eventually led me to study Electronics and Instrumentation at Universitas Gadjah Mada, where I discovered how much I enjoyed bringing ideas to life through code. For my thesis, I combined YOLO-based vehicle detection with an automatic barrier prototype, bringing software and hardware together.")}</p>
            <p className="body-copy text-[0.8125rem] text-[color:var(--muted)] leading-[1.85] mt-[0.9375rem] mb-0 mx-0 compact:text-[0.75rem]">{t("Today, I'm living in Japan and working as a Full Stack Developer, building and maintaining web applications across frontend and backend. Although my academic background wasn't focused on web development, I've developed my skills through hands-on experience, independent learning, and collaboration with the people around me.")}</p>
            <p className="body-copy text-[0.8125rem] text-[color:var(--muted)] leading-[1.85] mt-[0.9375rem] mb-0 mx-0 compact:text-[0.75rem]">{t("Along the way, I've learned that good development isn't just about making things work. It's also about understanding how people interact with what we build, making features intuitive, and considering how even small changes can affect the user experience. Working with a team has also taught me the importance of communication, listening to different perspectives, and finding solutions together.")}</p>
            <p className="body-copy text-[0.8125rem] text-[color:var(--muted)] leading-[1.85] mt-[0.9375rem] mb-0 mx-0 compact:text-[0.75rem]">{t("I want to keep growing as a Full Stack Developer, building on my web development experience while exploring new areas of technology. Lately, I've become especially curious about AI—not just as a tool I use in my daily work, but as a technology I want to understand better and explore incorporating into what I build. I know there's still a lot for me to learn, and I'm always open to stepping beyond what I'm familiar with, experimenting with new ideas, and discovering new possibilities.")}</p>
            <p className="body-copy text-[0.8125rem] text-[color:var(--muted)] leading-[1.85] mt-[0.9375rem] mb-0 mx-0 compact:text-[0.75rem]"><strong>{t("I'm excited to see where that curiosity takes me next!")}</strong></p>
          </div>
        </div>
        <aside className="about-journey grid gap-5 min-w-0 compact:gap-[0.9375rem]" aria-label={t("My professional journey")}>
          <div className="journey glass rounded-[1.0625rem] mt-1 px-[1.6875rem] py-6 compact:max-w-none">
            <span className="small-label text-[0.625rem] font-semibold tracking-[0.10625rem] text-[color:var(--accent)]">{t("MY JOURNEY")}</span>
            <div className="journey-path flex items-center justify-between gap-[0.9375rem] mt-5">
              <div>
                <span className="country inline-flex w-8 h-8 rounded-[0.625rem] items-center justify-center bg-[#edf1f7] text-[color:#67809a] text-[0.625rem] font-semibold">ID</span>
                <h3 className="font-semibold text-[0.9375rem] tracking-[-0.015625rem] mt-[0.625rem] mb-0 mx-0">{t("Indonesia")}</h3>
                <p className="text-[0.6875rem] mt-[0.0625rem] mb-0 text-[color:var(--muted)] mx-0">{t("Where I’m from")}</p>
              </div>
              <span className="journey-arrow text-[color:#9daebe]" aria-hidden="true">→</span>
              <div>
                <span className="country inline-flex w-8 h-8 rounded-[0.625rem] items-center justify-center bg-[#edf1f7] text-[color:#67809a] text-[0.625rem] font-semibold">JP</span>
                <h3 className="font-semibold text-[0.9375rem] tracking-[-0.015625rem] mt-[0.625rem] mb-0 mx-0">{t("Japan")}</h3>
                <p className="text-[0.6875rem] mt-[0.0625rem] mb-0 text-[color:var(--muted)] mx-0">{t("Where I work")}</p>
              </div>
            </div>
          </div>
          <div className="journey-timeline glass rounded-[1.0625rem] px-[1.6875rem] py-6 compact:p-6">
            <span className="small-label text-[0.625rem] font-semibold tracking-[0.10625rem] text-[color:var(--accent)]">{t("PROFESSIONAL MILESTONES")}</span>
            <ol className="list-none mt-6 mb-0 p-0 mx-0">
              <li className="
                relative pt-0 pr-0 pb-[1.5625rem] pl-[1.5625rem] ml-1 [border-left:0.0625rem_solid_#cbd6e2] last:pb-0
                last:[border-left-color:transparent] before:content-[''] before:absolute before:left-[-0.3125rem]
                before:top-1 before:w-[0.5625rem] before:h-[0.5625rem] before:bg-[#829bb3]
                before:[border:0.125rem_solid_#f8fafd] before:rounded-full before:shadow-[0_0_0_0.0625rem_#cbd6e2]
                last:before:bg-[#668a7b]
                ">
                <span className="milestone-time block text-[0.625rem] text-[color:#6c8196] leading-[1.5] mb-[0.3125rem]">{t("May–Jul 2022 · Internship")}</span>
                <h3 className="font-[550] text-[0.8125rem] tracking-[-0.015625rem] mt-0 mb-[0.3125rem] mx-0">{t("Cloud Developer Intern")}</h3>
                <p className="text-[0.6875rem] leading-[1.8] text-[color:var(--muted)] m-0">{t("Supported research, testing, and development with Python and AWS at PT Ruang Cipta Teknologi.")}</p>
              </li>
              <li className="
                relative pt-0 pr-0 pb-[1.5625rem] pl-[1.5625rem] ml-1 [border-left:0.0625rem_solid_#cbd6e2] last:pb-0
                last:[border-left-color:transparent] before:content-[''] before:absolute before:left-[-0.3125rem]
                before:top-1 before:w-[0.5625rem] before:h-[0.5625rem] before:bg-[#829bb3]
                before:[border:0.125rem_solid_#f8fafd] before:rounded-full before:shadow-[0_0_0_0.0625rem_#cbd6e2]
                last:before:bg-[#668a7b]
                ">
                <span className="milestone-time block text-[0.625rem] text-[color:#6c8196] leading-[1.5] mb-[0.3125rem]">{t("February 2024 · Graduation")}</span>
                <h3 className="font-[550] text-[0.8125rem] tracking-[-0.015625rem] mt-0 mb-[0.3125rem] mx-0">{t("Electronics and Instrumentation")}</h3>
                <p className="text-[0.6875rem] leading-[1.8] text-[color:var(--muted)] m-0">{t("Graduated from Universitas Gadjah Mada, with a thesis connecting YOLO car detection to an automatic barrier prototype.")}</p>
              </li>
              <li className="
                relative pt-0 pr-0 pb-[1.5625rem] pl-[1.5625rem] ml-1 [border-left:0.0625rem_solid_#cbd6e2] last:pb-0
                last:[border-left-color:transparent] before:content-[''] before:absolute before:left-[-0.3125rem]
                before:top-1 before:w-[0.5625rem] before:h-[0.5625rem] before:bg-[#829bb3]
                before:[border:0.125rem_solid_#f8fafd] before:rounded-full before:shadow-[0_0_0_0.0625rem_#cbd6e2]
                last:before:bg-[#668a7b]
                ">
                <span className="milestone-time block text-[0.625rem] text-[color:#6c8196] leading-[1.5] mb-[0.3125rem]">{t("April 2024 · Japan")}</span>
                <h3 className="font-[550] text-[0.8125rem] tracking-[-0.015625rem] mt-0 mb-[0.3125rem] mx-0">{t("Full Stack Developer at PIARY")}</h3>
                <p className="text-[0.6875rem] leading-[1.8] text-[color:var(--muted)] m-0">{t("Started developing and maintaining web applications across frontend and backend at PIARY in Japan.")}</p>
              </li>
              <li className="
                relative pt-0 pr-0 pb-[1.5625rem] pl-[1.5625rem] ml-1 [border-left:0.0625rem_solid_#cbd6e2] last:pb-0
                last:[border-left-color:transparent] before:content-[''] before:absolute before:left-[-0.3125rem]
                before:top-1 before:w-[0.5625rem] before:h-[0.5625rem] before:bg-[#829bb3]
                before:[border:0.125rem_solid_#f8fafd] before:rounded-full before:shadow-[0_0_0_0.0625rem_#cbd6e2]
                last:before:bg-[#668a7b]
                ">
                <span className="milestone-time block text-[0.625rem] text-[color:#6c8196] leading-[1.5] mb-[0.3125rem]">{t("Today")}</span>
                <h3 className="font-[550] text-[0.8125rem] tracking-[-0.015625rem] mt-0 mb-[0.3125rem] mx-0">{t("Building & learning")}</h3>
                <p className="text-[0.6875rem] leading-[1.8] text-[color:var(--muted)] m-0">{t("Growing as a Full Stack Developer, with curiosity about app development, AI, and what I can build next.")}</p>
              </li>
            </ol>
          </div>
        </aside>
      </div>
    </section>
  );
}
