import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '민사 소송 변호사 홈페이지 | 더뷰미디어',
  description: '민사 사건 상담 유입을 위한 콘텐츠 전략.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0203' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">민사 소송 변호사 홈페이지</h1>
      <p className="text-lg text-gray-700">유형별 문제 해결 사례와 상담 CTA 최적화.</p>
    </main>
  );
}