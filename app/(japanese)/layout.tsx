import type { ReactNode } from "react";
import type { Viewport } from "next";
import Document from "../../components/Document";
import { getMetadata } from "../../lib/i18n/metadata";
import "../globals.css";

export const metadata = getMetadata("ja");
export const viewport: Viewport = { themeColor: "#f7f8fb" };

export default function JapaneseLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <Document locale="ja">{children}</Document>;
}
