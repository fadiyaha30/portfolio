import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import HydrationComplete from "../components/HydrationComplete";

export const metadata: Metadata = {
  title: "Faya — Web Developer",
  description: "Fadiyah Adiningsih — Indonesian web developer based in Japan.",
};

export const viewport: Viewport = { themeColor: "#f7f8fb" };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <HydrationComplete />
      </body>
    </html>
  );
}
