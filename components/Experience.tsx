import WebsiteLink from "./WebsiteLink";
import { getTranslator, type LocalizedProps } from "../lib/i18n";

export default function Experience({ locale }: LocalizedProps) {
  const t = getTranslator(locale);
  return (
    <section id="experience" className="section pt-[1.9375rem] pb-[2.1875rem] px-0 compact:px-0 compact:py-[1.375rem]">
      <div className="section-heading flex items-center gap-[0.8125rem] mb-[1.375rem]">
        <span className="number text-[0.625rem] text-[color:#8995a3]">02</span>
        <h2 className="font-[550] text-[1.375rem] tracking-[-0.0375rem] m-0 compact:text-[1.25rem]">{t("Experience")}</h2>
        <span className="section-aside ml-auto text-[0.6875rem] text-[color:var(--muted)] compact:hidden">{t("Learning through building.")}</span>
      </div>
      <div className="experience-list grid gap-[0.875rem]">
        <article className="experience-card glass rounded-[1rem] px-[1.6875rem] py-6 compact:p-5">
          <div className="entry-head flex gap-[0.875rem] items-center mb-4 compact:flex-wrap compact:gap-3">
            <div className="
              company-icon bg-white w-[2.4375rem] h-[2.4375rem] flex items-center
              justify-center rounded-[0.6875rem] p-[0.25rem] shrink-0
              " aria-hidden="true">
              <img src="/assets/piary-logo.svg" alt="" width="120" height="27" className="block h-full w-full object-contain" />
            </div>
            <div className="entry-title compact:flex-1">
              <h3 className="font-semibold text-[1rem] tracking-[-0.015625rem] m-0 compact:text-[0.875rem]">{t("Full Stack Developer")}</h3>
              <p className="text-[0.6875rem] mt-[0.1875rem] mb-0 text-[color:#53677b] mx-0 compact:text-[0.625rem]"><WebsiteLink href="https://www.piary.jp/">{t("PIARY")}</WebsiteLink>{" "}<span className="text-[color:var(--muted)]">{t("· Japan · Full-time")}</span></p>
            </div>
            <span className="date ml-auto text-[0.6875rem] text-[color:var(--muted)] whitespace-nowrap compact:ml-[3.1875rem] compact:basis-full">{t("Apr 2024 — Present")}</span>
          </div>
          <p className="body-copy text-[0.8125rem] text-[color:var(--muted)] leading-[1.85] m-0 compact:text-[0.75rem]">{t("Developing and maintaining web services across frontend and backend, from improvements to existing products to new internal systems.")}</p>
          <div className="tags flex flex-wrap gap-[0.4375rem] mt-[0.9375rem]"><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">Next.js</span><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">React</span><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">TypeScript</span><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">PHP</span></div>
          <div className="company-projects mt-[1.4375rem] pt-5 [border-top:0.0625rem_solid_var(--line)]">
            <span className="small-label text-[0.625rem] font-semibold tracking-[0.10625rem] text-[color:var(--accent)]">{t("PROJECT CONTRIBUTIONS")}</span>
            <article className="nested-project mt-[0.9375rem] bg-[rgba(239,243,249,.45)] [border:0.0625rem_solid_rgba(107,129,154,.1)] rounded-[0.75rem] p-5 compact:p-4">
              <h4 className="text-[0.9375rem] leading-[1.5] font-semibold mt-0 mb-2 tracking-[-0.0125rem] mx-0 compact:text-[0.875rem]"><WebsiteLink href="https://www.aeta-baby.jp/">{t("Aeta — Pregnancy & Healthcare Information")}</WebsiteLink></h4>
              <p className="project-context text-[0.75rem] text-[color:var(--muted)] leading-[1.8] mt-0 mb-[0.8125rem] mx-0">{t("A service providing pregnancy, childbirth, and medical facility information.")}</p>
              <p className="project-role text-[0.6875rem] font-semibold text-[color:#536b83] mt-0 mb-2 mx-0">{t("Primary Developer")}</p>
              <p className="body-copy text-[0.75rem] text-[color:var(--muted)] leading-[1.85] m-0">{t("Main point of contact for feature development, maintenance, and troubleshooting. Develop and maintain features within an existing service, including a pregnancy weight-management calculator and CMS integrations.")}</p>
              <details className="mt-[0.9375rem] [border-top:0.0625rem_solid_var(--line)]">
                <summary className="
                  list-none flex justify-between items-center pt-[0.8125rem] pb-0 text-[0.6875rem] text-[color:#536b83]
                  cursor-pointer px-0 [&::-webkit-details-marker]:hidden
                  ">{t("My contributions")}{" "}<span className="text-[1.0625rem] [transition:transform_.2s] [details[open]_&]:[transform:rotate(45deg)]" aria-hidden="true">+</span></summary>
                <ul className="pl-[1.125rem] mt-3 mb-0 text-[0.75rem] text-[color:var(--muted)] leading-[1.9] mx-0">
                  <li>{t("Developed a calculator to support weight management during pregnancy.")}</li>
                  <li>{t("Implemented CMS integrations and improvements to existing functionality.")}</li>
                  <li>{t("Handled testing, production releases, and bug fixes.")}</li>
                  <li>{t("The calculator page remained among the site’s top two pages by monthly page views for 12 months.")}</li>
                </ul>
                <div className="tags flex flex-wrap gap-[0.4375rem] mt-[0.9375rem]"><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">Next.js</span><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">TypeScript</span><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">Strapi</span><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">GA4</span></div>
              </details>
            </article>
            <article className="nested-project mt-[0.875rem] bg-[rgba(239,243,249,.45)] [border:0.0625rem_solid_rgba(107,129,154,.1)] rounded-[0.75rem] p-5 compact:p-4">
              <h4 className="text-[0.9375rem] leading-[1.5] font-semibold mt-0 mb-2 tracking-[-0.0125rem] mx-0 compact:text-[0.875rem]"><WebsiteLink href="https://inv.piary.jp/">{t("Web Invitation — Digital Invitation Service")}</WebsiteLink></h4>
              <p className="project-context text-[0.75rem] text-[color:var(--muted)] leading-[1.8] mt-0 mb-[0.8125rem] mx-0">{t("A service for creating online invitations, managing guest check-in, and handling payments.")}</p>
              <p className="project-role text-[0.6875rem] font-semibold text-[color:#536b83] mt-0 mb-2 mx-0">{t("Development Team Member")}</p>
              <p className="body-copy text-[0.75rem] text-[color:var(--muted)] leading-[1.85] m-0">{t("Proposed guest check-in functionality and collaborated with the team on its implementation, payments, and updates to existing screens.")}</p>
              <details className="mt-[0.9375rem] [border-top:0.0625rem_solid_var(--line)]">
                <summary className="
                  list-none flex justify-between items-center pt-[0.8125rem] pb-0 text-[0.6875rem] text-[color:#536b83]
                  cursor-pointer px-0 [&::-webkit-details-marker]:hidden
                  ">{t("My contributions")}{" "}<span className="text-[1.0625rem] [transition:transform_.2s] [details[open]_&]:[transform:rotate(45deg)]" aria-hidden="true">+</span></summary>
                <ul className="pl-[1.125rem] mt-3 mb-0 text-[0.75rem] text-[color:var(--muted)] leading-[1.9] mx-0">
                  <li>{t("Proposed and co-developed manual and QR-code guest check-in.")}</li>
                  <li>{t("Implemented frontend handling of Laravel Reverb events to update reception status in real time.")}</li>
                  <li>{t("Co-developed Stripe payment and subscription cancellation functionality.")}</li>
                  <li>{t("Migrated selected parts of PHP screens to React.")}</li>
                </ul>
                <div className="tags flex flex-wrap gap-[0.4375rem] mt-[0.9375rem]"><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">PHP</span><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">React</span><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">Stripe</span><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">Laravel Reverb</span></div>
              </details>
            </article>
            <article className="nested-project mt-[0.875rem] bg-[rgba(239,243,249,.45)] [border:0.0625rem_solid_rgba(107,129,154,.1)] rounded-[0.75rem] p-5 compact:p-4">
              <h4 className="text-[0.9375rem] leading-[1.5] font-semibold mt-0 mb-2 tracking-[-0.0125rem] mx-0 compact:text-[0.875rem]">{t("Intangible — 360° Employee Evaluation Platform")}</h4>
              <p className="project-context text-[0.75rem] text-[color:var(--muted)] leading-[1.8] mt-0 mb-[0.8125rem] mx-0">{t("A multi-tenant SaaS for self, peer, and manager evaluations, with results that HR can compare over time.")}</p>
              <p className="project-role text-[0.6875rem] font-semibold text-[color:#536b83] mt-0 mb-2 mx-0">{t("Primary Developer · Operator Admin Area")}</p>
              <p className="body-copy text-[0.75rem] text-[color:var(--muted)] leading-[1.85] m-0">{t("Primary developer and main point of contact for the Operator Admin area. Joined an existing product partway through development and built its operator-facing screens and supporting functionality from scratch.")}</p>
              <details className="mt-[0.9375rem] [border-top:0.0625rem_solid_var(--line)]">
                <summary className="
                  list-none flex justify-between items-center pt-[0.8125rem] pb-0 text-[0.6875rem] text-[color:#536b83]
                  cursor-pointer px-0 [&::-webkit-details-marker]:hidden
                  ">{t("My implementation")}{" "}<span className="text-[1.0625rem] [transition:transform_.2s] [details[open]_&]:[transform:rotate(45deg)]" aria-hidden="true">+</span></summary>
                <ul className="pl-[1.125rem] mt-3 mb-0 text-[0.75rem] text-[color:var(--muted)] leading-[1.9] mx-0">
                  <li>{t("Implemented organization and administrator management.")}</li>
                  <li>{t("Developed administrator invitation and re-invitation workflows.")}</li>
                  <li>{t("Implemented application-level role and permission checks.")}</li>
                  <li>{t("Built frontend and backend functionality using Next.js, TypeScript, and Supabase.")}</li>
                </ul>
                <div className="tags flex flex-wrap gap-[0.4375rem] mt-[0.9375rem]"><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">Next.js</span><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">TypeScript</span><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">Supabase</span></div>
              </details>
            </article>
            <article className="nested-project mt-[0.875rem] bg-[rgba(239,243,249,.45)] [border:0.0625rem_solid_rgba(107,129,154,.1)] rounded-[0.75rem] p-5 compact:p-4">
              <h4 className="text-[0.9375rem] leading-[1.5] font-semibold mt-0 mb-2 tracking-[-0.0125rem] mx-0 compact:text-[0.875rem]"><WebsiteLink href="https://help.piary.jp/">{t("PIARY FAQ — Internal FAQ System")}</WebsiteLink></h4>
              <p className="project-context text-[0.75rem] text-[color:var(--muted)] leading-[1.8] mt-0 mb-[0.8125rem] mx-0">{t("An internal system for searching and managing frequently asked questions.")}</p>
              <p className="project-role text-[0.6875rem] font-semibold text-[color:#536b83] mt-0 mb-2 mx-0">{t("Sole Developer")}</p>
              <p className="body-copy text-[0.75rem] text-[color:var(--muted)] leading-[1.85] m-0">{t("Developed the system from design and implementation through production deployment.")}</p>
              <details className="mt-[0.9375rem] [border-top:0.0625rem_solid_var(--line)]">
                <summary className="
                  list-none flex justify-between items-center pt-[0.8125rem] pb-0 text-[0.6875rem] text-[color:#536b83]
                  cursor-pointer px-0 [&::-webkit-details-marker]:hidden
                  ">{t("My contributions")}{" "}<span className="text-[1.0625rem] [transition:transform_.2s] [details[open]_&]:[transform:rotate(45deg)]" aria-hidden="true">+</span></summary>
                <ul className="pl-[1.125rem] mt-3 mb-0 text-[0.75rem] text-[color:var(--muted)] leading-[1.9] mx-0">
                  <li>{t("Implemented FAQ search and administration screens.")}</li>
                  <li>{t("Added email/password authentication and JWT session management.")}</li>
                  <li>{t("Implemented access permission checks.")}</li>
                  <li>{t("Handled production deployment.")}</li>
                </ul>
                <div className="tags flex flex-wrap gap-[0.4375rem] mt-[0.9375rem]"><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">Next.js</span><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">TypeScript</span><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">Prisma</span><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">NextAuth</span></div>
              </details>
            </article>
          </div>
        </article>
        <article className="experience-card glass rounded-[1rem] px-[1.6875rem] py-6 compact:p-5">
          <div className="entry-head flex gap-[0.875rem] items-center mb-4 compact:flex-wrap compact:gap-3">
            <div className="
              company-icon secondary-icon bg-[#e8efec] text-[color:#6e8e81] w-[2.4375rem] h-[2.4375rem] flex
              items-center justify-center rounded-[0.6875rem] text-[1rem] font-semibold shrink-0
              " aria-hidden="true">R</div>
            <div className="entry-title compact:flex-1">
              <h3 className="font-semibold text-[1rem] tracking-[-0.015625rem] m-0 compact:text-[0.875rem]">{t("Cloud Developer Intern")}</h3>
              <p className="text-[0.6875rem] mt-[0.1875rem] mb-0 text-[color:#53677b] mx-0 compact:text-[0.625rem]">PT Ruang Cipta Teknologi <span className="text-[color:var(--muted)]">{t("· Indonesia")}</span></p>
            </div>
            <span className="date ml-auto text-[0.6875rem] text-[color:var(--muted)] whitespace-nowrap compact:ml-[3.1875rem] compact:basis-full">{t("May — Jul 2022")}</span>
          </div>
          <p className="body-copy text-[0.8125rem] text-[color:var(--muted)] leading-[1.85] m-0 compact:text-[0.75rem]">{t("Supported technical research, testing, and development using Python and AWS.")}</p>
          <div className="tags flex flex-wrap gap-[0.4375rem] mt-[0.9375rem]"><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">Python</span><span className="text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]">AWS</span></div>
          <details className="mt-[1.125rem] [border-top:0.0625rem_solid_var(--line)]">
            <summary className="
              list-none flex justify-between items-center pt-[0.8125rem] pb-0 text-[0.6875rem] text-[color:#536b83]
              cursor-pointer px-0 [&::-webkit-details-marker]:hidden
              ">{t("More about the internship")}{" "}<span className="text-[1.0625rem] [transition:transform_.2s] [details[open]_&]:[transform:rotate(45deg)]" aria-hidden="true">+</span></summary>
            <p className="body-copy text-[0.75rem] text-[color:var(--muted)] leading-[1.85] mt-3 mb-0 mx-0">{t("Assisted with investigation and testing of facial recognition technology as part of research and development support.")}</p>
          </details>
        </article>
      </div>
    </section>
  );
}
