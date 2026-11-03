import WebsiteLink from "./WebsiteLink";
import { getTranslator, type LocalizedProps, type Message } from "../lib/i18n";

type CompanyProject = {
  title: Message;
  href?: string;
  context: Message;
  role: Message;
  period: Message;
  team?: Message;
  scope: Message;
  summary: Message;
  items: Message[];
  tags: string[];
};

// Order, periods, team sizes, and scope follow the 職務経歴書.
const piaryProjects: CompanyProject[] = [
  {
    title: "Aeta — Pregnancy & Healthcare Information",
    href: "https://www.aeta-baby.jp/",
    context: "A service providing pregnancy, childbirth, and medical facility information.",
    role: "Primary Developer",
    period: "Apr 2024 — Present",
    team: "Team of 2",
    scope: "Scope: requirements, design, implementation, testing, release, and maintenance",
    summary: "As the primary developer, I handle Aeta’s development across frontend and backend, from planning and building new features to improving existing ones, fixing bugs, and keeping the site running. Much of my work centers on the Strapi CMS and how articles are presented.",
    items: [
      "Planned, built, and launched a pregnancy weight calculator that ranked #1 in monthly on-site page views.",
      "Developed and improved Strapi-based management for articles and medical supervisor profiles.",
      "Improved article cards, related-article display, and content previews.",
      "Fixed bugs, improved the UI, and handled ongoing maintenance.",
      "Handled deployments with Vercel for the frontend and Heroku for the backend.",
    ],
    tags: ["Next.js", "React", "TypeScript", "Strapi", "GA4", "Vercel", "Heroku"],
  },
  {
    title: "PIARY FAQ — Help Site",
    href: "https://help.piary.jp/",
    context: "A FAQ help site with an admin panel for managing its content.",
    role: "Sole Developer",
    period: "Dec 2024 — Present",
    scope: "Scope: design, implementation, testing, release, and maintenance",
    summary: "Built the FAQ site and its admin panel from scratch on my own with Next.js and TypeScript. Implemented database integration with Prisma, authentication with NextAuth.js, and role-based access control, creating a system for managing and operating FAQ content.",
    items: [
      "Built the FAQ site and admin panel from scratch.",
      "Implemented FAQ content display and management features.",
      "Implemented authentication with NextAuth.js.",
      "Implemented access control based on user roles.",
      "Improved existing features, fixed bugs, and handled maintenance.",
      "Handled deployments with Coolify, following the standard release procedure.",
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "NextAuth.js", "Coolify"],
  },
  {
    title: "360° Employee Evaluation SaaS",
    context: "A multi-tenant SaaS for self, peer, and manager evaluations, with results that HR can compare over time.",
    role: "Primary Developer",
    period: "Dec 2025 — Present",
    team: "Team of 3",
    scope: "Scope: design, implementation, testing, release and deployment, and maintenance",
    summary: "Joined partway through development and became the primary developer. Designed and built the Operator Admin area on my own, bringing organization management, administrator invitations, and role-based access control together in one place.",
    items: [
      "Designed and built the Operator Admin area for operators.",
      "Implemented organization creation and management, and invitations for initial administrators.",
      "Implemented access control based on user roles.",
      "Implemented and tested proxy login using temporary sessions.",
      "Improved existing features and handled maintenance.",
      "Handled deployments with Coolify, following the standard release procedure.",
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "Coolify"],
  },
  {
    title: "Web Invitation — Digital Invitation Service",
    href: "https://inv.piary.jp/",
    context: "A service for creating online invitations, managing guest check-in, and handling payments.",
    role: "Development Team Member (frontend focus)",
    period: "Jun 2026 — Present",
    team: "Team of 2",
    scope: "Scope: design, implementation, testing, release and deployment, and maintenance",
    summary: "Worked on migrating existing PHP-based screens to React, including UI updates and bug fixes for guest check-in. Also resolved deployment issues and fixed inconsistencies between the develop, staging, and main branches, restoring a working development and release flow.",
    items: [
      "Migrated existing PHP-based screens to React.",
      "Updated the UI and fixed bugs on the guest check-in screens (manual and QR code).",
      "Verified the existing payment and real-time communication features.",
      "Investigated and fixed deployment issues, and restored consistency across Git branches.",
      "Handled deployments with Coolify, following the standard release procedure.",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Inertia.js", "Laravel", "Coolify"],
  },
];

const tagClass = "text-[0.625rem] bg-[rgba(225,233,242,.45)] rounded-[0.3125rem] text-[color:#65798e] px-[0.5625rem] py-[0.1875rem]";

export default function Experience({ locale }: LocalizedProps) {
  const t = getTranslator(locale);
  return (
    <section id="experience" className="section py-8 px-0 compact:py-[1.375rem]">
      <div className="section-heading flex items-center gap-[0.8125rem] mb-[1.375rem]">
        <span className="number text-[0.625rem] text-[color:#8995a3]">02</span>
        <h2 className="font-[550] text-[1.375rem] tracking-[-0.0375rem] m-0 compact:text-[1.25rem]">{t("Experience")}</h2>
        <span className="section-aside ml-auto text-[0.6875rem] text-[color:var(--muted)] compact:hidden">{t("Learning through building.")}</span>
      </div>
      <div className="experience-list grid gap-[0.875rem]">
        <article className="experience-card glass rounded-[1rem] px-[1.6875rem] py-6 compact:p-5 phone:p-4">
          <div className="entry-head flex gap-[0.875rem] items-center mb-4 compact:flex-wrap compact:gap-3">
            <div className="
              company-icon bg-white w-[2.4375rem] h-[2.4375rem] flex items-center
              justify-center rounded-[0.6875rem] p-[0.25rem] shrink-0
              " aria-hidden="true">
              <img src="/assets/piary-logo.svg" alt="" width="120" height="27" className="block h-full w-full object-contain" />
            </div>
            <div className="entry-title compact:flex-1">
              <h3 className="font-semibold text-[1rem] tracking-[-0.015625rem] m-0 compact:text-[0.875rem]">{t("Full Stack Developer")}</h3>
              <p className="text-[0.6875rem] mt-[0.1875rem] mb-0 text-[color:#53677b] mx-0 compact:text-[0.625rem]"><WebsiteLink href="https://www.piary.jp/">{t("PIARY")}</WebsiteLink>{" "}<span className="text-[color:var(--muted)]">{t("· System Department · Japan · Full-time")}</span></p>
            </div>
            <span className="date ml-auto text-[0.6875rem] text-[color:var(--muted)] whitespace-nowrap compact:ml-[3.1875rem] compact:basis-full">{t("Apr 2024 — Present")}</span>
          </div>
          <p className="body-copy text-[0.8125rem] text-[color:var(--muted)] leading-[1.85] m-0 compact:text-[0.75rem]">{t("PIARY runs wedding-related e-commerce and web services. In the System Department, I work across frontend and backend on multiple web services, from designing and implementing new features to testing, releases, and ongoing maintenance. On some projects, I lead development as the primary developer.")}</p>
          <div className="tags flex flex-wrap gap-[0.4375rem] mt-[0.9375rem]">
            {["Next.js", "React", "TypeScript", "PHP", "Laravel"].map((tag) => <span key={tag} className={tagClass}>{tag}</span>)}
          </div>
          <div className="company-projects mt-[1.4375rem] pt-5 [border-top:0.0625rem_solid_var(--line)]">
            <span className="small-label text-[0.625rem] font-semibold tracking-[0.10625rem] text-[color:var(--accent)]">{t("PROJECT CONTRIBUTIONS")}</span>
            {piaryProjects.map((project, index) => (
              <article key={project.title} className={`nested-project ${index === 0 ? "mt-[0.9375rem]" : "mt-[0.875rem]"} bg-[rgba(239,243,249,.45)] [border:0.0625rem_solid_rgba(107,129,154,.1)] rounded-[0.75rem] p-5 compact:p-4 phone:p-3`}>
                <h4 className="text-[0.9375rem] leading-[1.5] font-semibold mt-0 mb-2 tracking-[-0.0125rem] mx-0 compact:text-[0.875rem]">
                  {project.href ? <WebsiteLink href={project.href}>{t(project.title)}</WebsiteLink> : t(project.title)}
                </h4>
                <p className="project-context text-[0.75rem] text-[color:var(--muted)] leading-[1.8] mt-0 mb-[0.8125rem] mx-0">{t(project.context)}</p>
                <p className="project-role text-[0.6875rem] font-semibold text-[color:#536b83] mt-0 mb-1 mx-0">
                  {t(project.role)}
                  <span className="font-normal text-[color:var(--muted)]">{` · ${t(project.period)}`}{project.team ? ` · ${t(project.team)}` : ""}</span>
                </p>
                <p className="project-scope text-[0.625rem] text-[color:var(--muted)] leading-[1.7] mt-0 mb-2 mx-0">{t(project.scope)}</p>
                <p className="body-copy text-[0.75rem] text-[color:var(--muted)] leading-[1.85] m-0">{t(project.summary)}</p>
                <div className="tags flex flex-wrap gap-[0.4375rem] mt-3">
                  {project.tags.map((tag) => <span key={tag} className={tagClass}>{tag}</span>)}
                </div>
                <details className="mt-[0.9375rem] [border-top:0.0625rem_solid_var(--line)]">
                  <summary className="
                    list-none flex justify-between items-center pt-[0.8125rem] pb-0 text-[0.6875rem] text-[color:#536b83]
                    cursor-pointer px-0 [&::-webkit-details-marker]:hidden
                    ">{t("My contributions")}{" "}<span className="text-[1.0625rem] [transition:transform_.2s] [details[open]_&]:[transform:rotate(45deg)]" aria-hidden="true">+</span></summary>
                  <ul className="pl-[1.125rem] mt-3 mb-0 text-[0.75rem] text-[color:var(--muted)] leading-[1.9] mx-0">
                    {project.items.map((item) => <li key={item}>{t(item)}</li>)}
                  </ul>
                </details>
              </article>
            ))}
          </div>
        </article>
        <article className="experience-card glass rounded-[1rem] px-[1.6875rem] py-6 compact:p-5 phone:p-4">
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
          <div className="tags flex flex-wrap gap-[0.4375rem] mt-[0.9375rem]"><span className={tagClass}>Python</span><span className={tagClass}>AWS</span></div>
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
