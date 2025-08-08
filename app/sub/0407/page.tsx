import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '상위노출 전략 | 더뷰미디어',
  description: '온/오프페이지 최적화와 콘텐츠 허브 전략으로 상위노출.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0407' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">상위노출 전략</h1>
      <p className="text-lg text-gray-700">토픽 클러스터링과 내부 링크 구조 최적화.</p>
    </main>
  );
}