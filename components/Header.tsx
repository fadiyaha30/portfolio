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
    <header className="glass">
      <a className="brand" href="#home">Faya<span>.</span></a>
      <nav aria-label="Main navigation">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={activeSection === link.id ? "active" : undefined}
            aria-current={activeSection === link.id ? "location" : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
