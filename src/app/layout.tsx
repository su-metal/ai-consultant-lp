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
    default: "まちなみ AI | 豊橋のAI導入・AIコンサルティング支援",
    template: "%s | まちなみ AI"
  },
  description: "豊橋・東三河を拠点に、中小企業向けのAI導入支援、AIコンサルティング、生成AI活用、業務効率化アプリ開発を提供する「まちなみ AI」。豊橋でAI導入を相談したい企業を伴走支援します。",
  keywords: [
    "豊橋 AI",
    "豊橋 AI導入",
    "豊橋 チャットボット作成",
    "豊橋 AIコンサル",
    "AIコンサルティング",
    "AI導入支援",
    "チャットボット作成",
    "生成AI導入",
    "アプリ開発",
    "業務効率化",
    "東三河",
    "豊橋",
    "まちなみAI"
  ],
  authors: [{ name: "佐田 真教" }],
  creator: "佐田 真教",
  publisher: "まちなみ AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "まちなみ AI | 豊橋のAI導入・AIコンサルティング支援",
    description: "豊橋・東三河の中小企業向けに、AI導入支援、生成AI活用、業務効率化アプリ開発を提供するコンサルティング＆開発パートナー。",
    url: 'https://machinami-ai.com',
    siteName: 'まちなみ AI',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "まちなみ AI | 豊橋のAI導入・AIコンサルティング支援",
    description: "豊橋・東三河の中小企業向けに、AI導入支援、生成AI活用、業務効率化アプリ開発を提供するコンサルティング＆開発パートナー。",
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
        className={`${plusJakarta.variable} ${notoSansJP.variable} antialiased font-sans text-slate-900 bg-white mesh-gradient`}
      >
        <Navigation />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
