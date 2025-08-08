import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '랜딩페이지 제작 | 더뷰미디어',
  description: '전환 최적화형 랜딩페이지 설계/제작.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0401' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">랜딩페이지 제작</h1>
      <p className="text-lg text-gray-700">캠페인 목적에 맞춘 카피/디자인/분석 연동.</p>
    </main>
  );
}