"use client";

import { getTranslator, type LocalizedProps, type Message, formatSkillCount } from "../lib/i18n";

import { useState } from "react";

type SkillCategory = "languages" | "frontend" | "backend" | "cloud" | "tools" | "ai";
type SkillFilter = "all" | SkillCategory;

type Skill = {
  category: SkillCategory;
  label: Message;
  title: Message;
  technologies: string;
};

const skills: Skill[] = [
  {
    "category": "languages",
    "label": "LANGUAGES",
    "title": "Programming & web languages",
    "technologies": "TypeScript · JavaScript · PHP · Python · SQL · HTML · CSS"
  },
  {
    "category": "frontend",
    "label": "FRONTEND",
    "title": "Interfaces & interaction",
    "technologies": "React · Next.js · Tailwind CSS"
  },
  {
    "category": "backend",
    "label": "BACKEND",
    "title": "Logic & data",
    "technologies": "MySQL · PostgreSQL · SQLite · Prisma · NextAuth"
  },
  {
    "category": "cloud",
    "label": "CLOUD",
    "title": "Infrastructure & delivery",
    "technologies": "AWS (EC2, S3) · Vercel · Supabase · Cloudinary · Coolify"
  },
  {
    "category": "tools",
    "label": "TOOLS & INTEGRATIONS",
    "title": "The supporting pieces",
    "technologies": "Git · npm · VS Code · Strapi · Stripe · Laravel Reverb · Playwright · GA4 · Looker Studio · Whisper"
  },
  {
    "category": "ai",
    "label": "AI TOOLS",
    "title": "AI-assisted development",
    "technologies": "ChatGPT · OpenAI Codex · Anthropic Claude · Claude Code · Cursor"
  }
];
const filters: { value: SkillFilter; label: Message }[] = [
  { value: "all", label: "All" },
  { value: "languages", label: "Languages" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "cloud", label: "Cloud" },
  { value: "tools", label: "Tools & integrations" },
  { value: "ai", label: "AI tools" },
];

export default function Skills({ locale }: LocalizedProps) {
  const t = getTranslator(locale);
  const [selected, setSelected] = useState<SkillFilter>("all");
  const [hasFiltered, setHasFiltered] = useState(false);
  const visibleCount = skills.filter(
    (skill) => selected === "all" || skill.category === selected,
  ).length;

  return (
    <section id="skills" className="section pt-[1.9375rem] pb-[2.1875rem] px-0 compact:px-0 compact:py-[1.375rem]">
      <div className="section-heading flex items-center gap-[0.8125rem] mb-[1.375rem]">
        <span className="number text-[0.625rem] text-[color:#8995a3]">05</span>
        <h2 className="font-[550] text-[1.375rem] tracking-[-0.0375rem] m-0 compact:text-[1.25rem]">{t("Tools & technologies")}</h2>
      </div>
      <div className="filters flex gap-[0.375rem] flex-wrap mb-[1.125rem]" role="group" aria-label={t("Filter skills")}>
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={`[border:0.0625rem_solid_transparent] bg-[transparent] rounded-[0.5rem] text-[0.6875rem] text-[color:var(--muted)] cursor-pointer px-3 py-[0.4375rem] [&.active]:bg-[#e7edf4] [&.active]:text-[color:#465e77] [&.active]:[border-color:#dce4ed] hover:bg-[#edf1f7] ${(selected === filter.value ? "active" : undefined) ?? ""}`}
            aria-pressed={selected === filter.value}
            onClick={() => {
              setSelected(filter.value);
              setHasFiltered(true);
            }}
          >
            {t(filter.label)}
          </button>
        ))}
      </div>
      <div className="skills-grid grid grid-cols-2 gap-[0.8125rem] items-start compact:grid-cols-1">
        {skills.map((skill) => (
          <div
            key={skill.category}
            className="
              skill-card glass rounded-[0.9375rem] [transition:transform_.2s,box-shadow_.2s] px-6 py-[1.375rem]
              hover:[transform:translateY(-0.1875rem)] hover:shadow-[0_0.5rem_1.5625rem_#2a3e5510] [&[hidden]]:hidden
              "
            hidden={selected !== "all" && selected !== skill.category}
          >
            <span className="small-label text-[0.625rem] font-semibold tracking-[0.10625rem] text-[color:var(--accent)]">{t(skill.label)}</span>
            <h3 className="font-semibold text-[0.9375rem] tracking-[-0.015625rem] mt-[0.5625rem] mb-[0.625rem] mx-0">{t(skill.title)}</h3>
            <p className="text-[0.75rem] leading-[1.9] text-[color:var(--muted)] m-0">{skill.technologies}</p>
          </div>
        ))}
      </div>
      <p id="filter-status" className="absolute w-[0.0625rem] h-[0.0625rem] overflow-hidden [clip-path:inset(50%)]" aria-live="polite">
        {hasFiltered ? formatSkillCount(locale, visibleCount) : ""}
      </p>
    </section>
  );
}
