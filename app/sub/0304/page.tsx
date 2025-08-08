import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '부동산 중개사 홈페이지 제작 | 더뷰미디어',
  description: '매물/후기/지도 연동에 최적화된 중개사 홈페이지.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0304' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">부동산 중개사 홈페이지 제작</h1>
      <p className="text-lg text-gray-700">검색/문의 전환 최적화와 지역 키워드 전략.</p>
    </main>
  );
}