import "./globals.css";

export const metadata = {
  title: "Faya — Web Developer",
  description: "Fadiyah Adiningsih — Indonesian web developer based in Japan.",
};

export const viewport = { themeColor: "#f7f8fb" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
