import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '네이버/구글 SEO | 더뷰미디어',
  description: '국내/글로벌 검색 최적화 전략을 통합 제공합니다.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0408' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">네이버/구글 SEO</h1>
      <p className="text-lg text-gray-700">엔진별 정책에 맞는 최적화와 측정.</p>
    </main>
  );
}