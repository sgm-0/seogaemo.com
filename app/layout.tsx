import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics, GoogleTagManager } from "@/components/analytics";

const inter = Inter({ subsets: ["latin"] });

// 개선된 SEO 메타데이터
export const metadata: Metadata = {
  title: {
    default: "서울개발자모임 - Seoul Developer Group",
    template: "%s | 서울개발자모임",
  },
  description:
    "웹과 모바일 솔루션을 개발하는 개발자들의 모임입니다. 최신 기술 트렌드를 공유하고 함께 성장하는 개발자 커뮤니티입니다.",
  keywords: [
    "개발자",
    "모임",
    "서울",
    "웹개발",
    "모바일개발",
    "프로그래밍",
    "커뮤니티",
    "developer",
    "seoul",
    "web",
    "mobile",
  ],
  authors: [{ name: "서울개발자모임" }],
  creator: "서울개발자모임",
  publisher: "서울개발자모임",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://seogaemo.com"
  ),
  alternates: {
    canonical: "/",
    languages: {
      "ko-KR": "/ko",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "서울개발자모임 - Seoul Developer Group",
    description:
      "웹과 모바일 솔루션을 개발하는 개발자들의 모임입니다. 최신 기술 트렌드를 공유하고 함께 성장하는 개발자 커뮤니티입니다.",
    url: "/",
    siteName: "서울개발자모임",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "서울개발자모임 로고",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "서울개발자모임 - Seoul Developer Group",
    description: "웹과 모바일 솔루션을 개발하는 개발자들의 모임",
    images: ["/og-image.png"],
    creator: "@seogaemo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: {
      "naver-site-verification": process.env.NAVER_SITE_VERIFICATION || "",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* 추가 SEO 최적화 */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2C73F3" />
        <meta name="msapplication-TileColor" content="#2C73F3" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <GoogleTagManager />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
