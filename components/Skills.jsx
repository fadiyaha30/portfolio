"use client";

import { useState } from "react";

const skills = [
  {
    "category": "frontend",
    "label": "FRONTEND",
    "title": "Interfaces & interaction",
    "technologies": "TypeScript · JavaScript · React · Next.js · HTML · CSS"
  },
  {
    "category": "backend",
    "label": "BACKEND",
    "title": "Logic & data",
    "technologies": "PHP · Python · SQL · MySQL · PostgreSQL · SQLite · Prisma · NextAuth"
  },
  {
    "category": "cloud",
    "label": "CLOUD",
    "title": "Infrastructure & delivery",
    "technologies": "AWS (EC2, S3) · Supabase · Cloudinary · Coolify"
  },
  {
    "category": "tools",
    "label": "TOOLS & INTEGRATIONS",
    "title": "The supporting pieces",
    "technologies": "Git · Strapi · Stripe · Laravel Reverb · Playwright · GA4 · Looker Studio · Whisper"
  }
];
const filters = [
  { value: "all", label: "All" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "cloud", label: "Cloud" },
  { value: "tools", label: "Tools & integrations" },
];

export default function Skills() {
  const [selected, setSelected] = useState("all");
  const [hasFiltered, setHasFiltered] = useState(false);
  const visibleCount = skills.filter(
    (skill) => selected === "all" || skill.category === selected,
  ).length;

  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <span className="number">05</span>
        <h2>Tools &amp; technologies</h2>
      </div>
      <div className="filters" role="group" aria-label="Filter skills">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={selected === filter.value ? "active" : undefined}
            aria-pressed={selected === filter.value}
            onClick={() => {
              setSelected(filter.value);
              setHasFiltered(true);
            }}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div
            key={skill.category}
            className="skill-card glass"
            hidden={selected !== "all" && selected !== skill.category}
          >
            <span className="small-label">{skill.label}</span>
            <h3>{skill.title}</h3>
            <p>{skill.technologies}</p>
          </div>
        ))}
      </div>
      <p id="filter-status" className="sr-only" aria-live="polite">
        {hasFiltered ? `${visibleCount} skill categories shown.` : ""}
      </p>
    </section>
  );
}
