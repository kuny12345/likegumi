import type { Metadata } from "next";
import { Black_Han_Sans, Do_Hyeon } from "next/font/google";

import "./globals.css";

// Black Han Sans 폰트 설정
const blackHanSans = Do_Hyeon({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "홈페이지제작 더뷰미디어",
  description: "검색 1페이지 SEO 최적화 홈페이지 제작 전문 - 더뷰미디어",
  alternates: {
    canonical: 'https://thevuemedia.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={blackHanSans.className}>
      <body>
        {children}
      </body>
    </html>
  );
}