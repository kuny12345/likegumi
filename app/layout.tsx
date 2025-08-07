import type { Metadata } from "next";

import "./globals.css";

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
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
