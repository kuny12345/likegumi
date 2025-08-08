import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '산부인과 홈페이지 | 더뷰미디어',
  description: '가족 친화 UX와 신뢰 중심 콘텐츠의 산부인과 홈페이지 제작.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0105' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">산부인과 홈페이지</h1>
      <p className="text-lg text-gray-700">산모 케어 여정에 맞춘 정보 설계와 문의 전환 최적화.</p>
    </main>
  );
}