import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '구조화 마크업 | 더뷰미디어',
  description: '스키마(Structured Data)로 검색 가시성과 CTR 향상.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0409' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">구조화 마크업</h1>
      <p className="text-lg text-gray-700">리치 리절트 대응과 엔티티 기반 구성.</p>
    </main>
  );
}