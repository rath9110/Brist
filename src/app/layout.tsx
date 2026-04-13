import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Peiling - Vilka tillskott behöver du?",
  description:
    "Svara på 8 snabba frågor och få en personlig plan baserad på din livsstil, kost och träning. Hitta det du saknar.",
  verification: {
    google: "U_nHgh7XQEkNgbVmQwuNs2Su2Fa4Uxjr9oybAGtgGnQ",
  },
  openGraph: {
    siteName: "Peiling",
    title: "Peiling - Vilka tillskott behöver du?",
    description:
      "Svara på 8 snabba frågor och få en personlig plan baserad på din livsstil, kost och träning. Hitta det du saknar.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
