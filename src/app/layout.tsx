import type { Metadata } from "next";
import { Geist, Geist_Mono, Zen_Old_Mincho } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const zenOldMincho = Zen_Old_Mincho({
  weight: ["400", "700", "900"],
  variable: "--font-zen-old-mincho",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: "まちなみ AIコンサルティング | 東三河の中小企業をAIで変革する",
  description:
    "東三河（豊橋・豊川・蒲郡・新城・田原）の中小企業に特化したAIコンサルタント。製造業・飲食業・サービス業のAI導入・DX推進を支援します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${zenOldMincho.variable} antialiased bg-[var(--navy)] text-[var(--text-primary)]`}
      >
        {/* Scan line effect */}
        <div className="scan-line" />
        {children}
      </body>
    </html>
  );
}
