import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '형사 전문 변호사 홈페이지 | 더뷰미디어',
  description: '형사 사건에 특화된 신뢰/성과 중심 홈페이지.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0202' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">형사 전문 변호사 홈페이지</h1>
      <p className="text-lg text-gray-700">판례/성과 정리와 빠른 상담 연결 구조.</p>
    </main>
  );
}