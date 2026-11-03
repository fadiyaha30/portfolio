"use client";

import { getTranslator, type LocalizedProps } from "../lib/i18n";

import { useEffect, useRef, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
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
    // The active section is the last one whose top has scrolled past a line 30%
    // down the viewport. This works for sections of any height, unlike
    // visibility ratios, which tall sections such as Experience never reach.
    const ids = ["home", ...links.map((link) => link.id)];
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.3;
      let current: string | null = null;
      for (const id of ids) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= line) current = id;
      }
      // Short last sections may never reach the line; at the very bottom, use the last one.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = ids[ids.length - 1];
      setActiveSection(current);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <header className="
      glass max-w-225 mt-[1.375rem] mb-0 rounded-[1rem] flex items-center gap-[1.875rem] sticky top-4 z-[5]
      px-[1.5625rem] py-[0.9375rem] mx-auto inset:mx-[8%] phone:mx-4 menu:gap-2 menu:flex-wrap
      compact:top-2 compact:mt-3 compact:rounded-[0.8125rem] compact:px-3 compact:py-2
      ">
      <a className="brand text-[1.4375rem] font-[650] tracking-[-0.0625rem] compact:text-[1.25rem]" href="#home">Faya<span className="text-[color:#7a97b1]">.</span></a>
      <nav
        id="main-navigation"
        className={`ml-auto flex gap-[1.625rem] menu:order-4 menu:ml-0 menu:basis-full menu:flex-col menu:gap-1 menu:pt-2 menu:[border-top:0.0625rem_solid_var(--line)] ${menuOpen ? "menu:flex" : "menu:hidden"}`}
        aria-label={t("Main navigation")}
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setMenuOpen(false)}
            className={`text-[0.75rem] text-[color:var(--muted)] whitespace-nowrap relative px-0 py-[0.1875rem] hover:text-[color:var(--text)] [&.active]:text-[color:var(--text)] [&.active]:after:content-[''] [&.active]:after:absolute [&.active]:after:w-1 [&.active]:after:h-1 [&.active]:after:bg-[var(--accent)] [&.active]:after:rounded-full [&.active]:after:bottom-[-0.3125rem] [&.active]:after:left-[calc(50%_-_0.125rem)] menu:flex menu:min-h-[2.2rem] menu:items-center menu:rounded-[0.4rem] menu:px-2 menu:text-[0.75rem] menu:[&.active]:bg-[#edf1f7] menu:[&.active]:after:hidden ${(activeSection === link.id ? "active" : undefined) ?? ""}`}
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
        className="hidden h-[2.2rem] w-[2.2rem] shrink-0 items-center justify-center rounded-[0.5rem] border-0 bg-transparent p-0 text-[var(--text)] hover:bg-white/70 menu:inline-flex"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
          {menuOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>
    </header>
  );
}
