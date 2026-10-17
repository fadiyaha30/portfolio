"use client";

import { getTranslator, type LocalizedProps } from "../lib/i18n";

import { useEffect, useRef, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "work", label: "Projects" },
  { id: "skills", label: "Skills" },
] as const;

export default function Header({ locale }: LocalizedProps) {
  // Use the route's locale for both server rendering and hydration.
  const t = getTranslator(locale);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

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
      px-[1.5625rem] py-[0.9375rem] mx-auto inset:mx-[5%] compact:gap-2 compact:flex-wrap
      compact:top-2 compact:mt-3 compact:rounded-[0.8125rem] compact:px-3 compact:py-2
      ">
      <a className="brand text-[1.4375rem] font-[650] tracking-[-0.0625rem] compact:text-[1.25rem]" href="#home">Faya<span className="text-[color:#7a97b1]">.</span></a>
      <nav
        id="main-navigation"
        className={`ml-auto flex gap-[1.625rem] compact:order-4 compact:ml-0 compact:basis-full compact:flex-col compact:gap-1 compact:pt-2 compact:[border-top:0.0625rem_solid_var(--line)] ${menuOpen ? "compact:flex" : "compact:hidden"}`}
        aria-label={t("Main navigation")}
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setMenuOpen(false)}
            className={`text-[0.75rem] text-[color:var(--muted)] relative px-0 py-[0.1875rem] hover:text-[color:var(--text)] [&.active]:text-[color:var(--text)] [&.active]:after:content-[''] [&.active]:after:absolute [&.active]:after:w-1 [&.active]:after:h-1 [&.active]:after:bg-[var(--accent)] [&.active]:after:rounded-full [&.active]:after:bottom-[-0.3125rem] [&.active]:after:left-[calc(50%_-_0.125rem)] compact:flex compact:min-h-[2.2rem] compact:items-center compact:rounded-[0.4rem] compact:px-2 compact:text-[0.75rem] compact:[&.active]:bg-[#edf1f7] compact:[&.active]:after:hidden ${(activeSection === link.id ? "active" : undefined) ?? ""}`}
            aria-current={activeSection === link.id ? "location" : undefined}
          >
            {t(link.label)}
          </a>
        ))}
      </nav>
      <LanguageSwitcher locale={locale} />
      <button
        ref={menuButton}
        type="button"
        aria-label={t(menuOpen ? "Close menu" : "Open menu")}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen(open => !open)}
        className="hidden h-[2.2rem] w-[2.2rem] shrink-0 items-center justify-center rounded-[0.5rem] border-0 bg-transparent p-0 text-[var(--text)] hover:bg-white/70 compact:inline-flex"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
          {menuOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>
    </header>
  );
}
