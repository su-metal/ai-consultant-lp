import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://machinami-ai.com'),
  title: {
    default: "まちなみ AI | 東三河のAIコンサルティング & アプリ開発",
    template: "%s | まちなみ AI"
  },
  description: "東三河（豊橋・豊川・蒲郡）を拠点とする「まちなみ AI」。中小企業の業務効率化・生成AI導入支援から、Webアプリケーション開発までを一気通貫でサポートします。",
  keywords: ["AIコンサルティング", "アプリ開発", "業務効率化", "東三河", "豊橋", "生成AI導入", "まちなみAI"],
  authors: [{ name: "佐田 真教" }],
  creator: "佐田 真教",
  publisher: "まちなみ AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "まちなみ AI | 東三河のAIコンサルティング & アプリ開発",
    description: "東三河を拠点に、最新AI技術で地域企業の未来を創るコンサルティング＆開発パートナー。",
    url: 'https://machinami-ai.com',
    siteName: 'まちなみ AI',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "まちなみ AI | 東三河のAIコンサルティング & アプリ開発",
    description: "東三河を拠点に、最新AI技術で地域企業の未来を創るコンサルティング＆開発パートナー。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '5XEVbrsXhLYYjSzJG2hLbhe_VLnqJsodV5JKtUrmqYI', // Google Search Console で取得したIDのみを設定
  },

  alternates: {
    canonical: 'https://machinami-ai.com',
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} ${notoSansJP.variable} antialiased font-sans text-black bg-white`}
      >
        <Navigation />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
