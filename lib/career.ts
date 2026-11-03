// Full-time development started at PIARY in April 2024.
export const CAREER_START = { year: 2024, month: 4 } as const;

// Completed years since the career start, e.g. 2 from April 2026 until March 2027.
export function yearsOfExperience(now: Date = new Date()): number {
  const months = (now.getFullYear() - CAREER_START.year) * 12 + (now.getMonth() + 1 - CAREER_START.month);
  return Math.max(0, Math.floor(months / 12));
}
