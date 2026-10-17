import type { ReactNode } from "react";
import type { Locale } from "../lib/i18n";
import HydrationComplete from "./HydrationComplete";

export default function Document({ children, locale }: Readonly<{ children: ReactNode; locale: Locale }>) {
  return (
    <html lang={locale}>
      <body>
        {children}
        <HydrationComplete />
      </body>
    </html>
  );
}
