import type { ReactNode } from "react";

export default function WebsiteLink({ href, children }: Readonly<{ href: string; children: ReactNode }>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={href}
      className="decoration-current underline-offset-4 hover:text-[var(--accent)] hover:underline focus-visible:underline"
    >
      {children}<span className="ml-[0.3rem] text-[0.75em] opacity-60" aria-hidden="true">↗</span>
    </a>
  );
}
