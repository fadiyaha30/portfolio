import { Fragment, type ReactNode } from "react";

// Keeps short list items (role · date · team, scope steps, or skill lists) whole
// on narrow screens, so lines break only between items: never inside 正社員 or リリース.
export default function Phrases({ text }: Readonly<{ text: string }>) {
  const parts = text.split(/(?<=、| · |, )/);
  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>
          <span className="whitespace-nowrap">{part.trimEnd()}</span>
          {part.endsWith(" ") ? " " : <wbr />}
        </Fragment>
      ))}
    </>
  );
}

// Keeps chosen terms on a single line inside longer text, for browsers without
// phrase-aware Japanese line breaking (such as Safari).
export function KeepTogether({ text, terms }: Readonly<{ text: string; terms: string[] }>) {
  const nodes: ReactNode[] = [];
  let rest = text;
  for (const term of terms) {
    const start = rest.indexOf(term);
    if (start < 0) continue;
    nodes.push(rest.slice(0, start), <span key={term} className="whitespace-nowrap">{term}</span>, <wbr key={`${term}-break`} />);
    rest = rest.slice(start + term.length);
  }
  nodes.push(rest);
  return <>{nodes}</>;
}
