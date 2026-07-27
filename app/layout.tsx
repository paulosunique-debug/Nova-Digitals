import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

// Manrope — body copy, and the graceful fallback for headings until you add
// your licensed Coolvetica files (see public/fonts/README.md)
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nova Digitals — We Edit Ads. You Get Results.",
  description:
    "High-converting ad edits, VSLs, UGC content and AI-powered visuals that drive attention, build trust, and sell.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-body antialiased bg-base-950 text-ink-100">
        {children}
      </body>
    </html>
  );
}
