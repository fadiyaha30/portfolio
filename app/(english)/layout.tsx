import type { ReactNode } from "react";
import type { Viewport } from "next";
import Document from "../../components/Document";
import { getMetadata } from "../../lib/i18n/metadata";
import "../globals.css";

export const metadata = getMetadata("en");
export const viewport: Viewport = { themeColor: "#f7f8fb" };

export default function EnglishLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <Document locale="en">{children}</Document>;
}
