import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이혼 전문 변호사 홈페이지 | 더뷰미디어',
  description: '이혼 전문 로펌을 위한 신뢰 중심 홈페이지 제작.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0201' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">이혼 전문 변호사 홈페이지</h1>
      <p className="text-lg text-gray-700">사건 유형별 안내와 상담 전환 최적화.</p>
    </main>
  );
}