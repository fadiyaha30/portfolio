"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "work", label: "Projects" },
  { id: "skills", label: "Skills" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-15% 0px -50% 0px", threshold: [0, 0.15, 0.4] },
    );

    for (const id of ["home", ...links.map((link) => link.id)]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header className="
      glass max-w-250 mt-[1.375rem] mb-0 rounded-[1rem] flex items-center gap-[1.875rem] sticky top-4 z-[5]
      px-[1.5625rem] py-[0.9375rem] mx-auto inset:mx-[5%] compact:gap-3 compact:flex-wrap
      compact:top-[0.625rem] compact:rounded-[0.8125rem] compact:px-[1.0625rem] compact:py-[0.8125rem]
      ">
      <a className="brand text-[1.4375rem] font-[650] tracking-[-0.0625rem] compact:text-[1.25rem]" href="#home">Faya<span className="text-[color:#7a97b1]">.</span></a>
      <nav className="ml-auto flex gap-[1.625rem] compact:ml-0 compact:basis-full compact:gap-[1.0625rem] compact:overflow-x-auto compact:pb-1" aria-label="Main navigation">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`text-[0.75rem] text-[color:var(--muted)] relative px-0 py-[0.1875rem] hover:text-[color:var(--text)] [&.active]:text-[color:var(--text)] [&.active]:after:content-[''] [&.active]:after:absolute [&.active]:after:w-1 [&.active]:after:h-1 [&.active]:after:bg-[var(--accent)] [&.active]:after:rounded-full [&.active]:after:bottom-[-0.3125rem] [&.active]:after:left-[calc(50%_-_0.125rem)] compact:text-[0.625rem] compact:whitespace-nowrap ${(activeSection === link.id ? "active" : undefined) ?? ""}`}
            aria-current={activeSection === link.id ? "location" : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
