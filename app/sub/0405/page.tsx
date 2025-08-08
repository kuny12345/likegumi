import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO 진단 | 더뷰미디어',
  description: '기술/콘텐츠/링크 전반의 SEO 점검과 개선 플랜.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0405' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">SEO 진단</h1>
      <p className="text-lg text-gray-700">검색 성능을 방해하는 요소를 진단하고 개선합니다.</p>
    </main>
  );
}