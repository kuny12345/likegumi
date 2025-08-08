import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '세무사 홈페이지 제작 | 더뷰미디어',
  description: '신뢰성 있는 정보 제공과 문의 전환을 강화한 세무사 홈페이지.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0301' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">세무사 홈페이지 제작</h1>
      <p className="text-lg text-gray-700">세무 콘텐츠 구성과 지역 타겟 SEO에 최적화.</p>
    </main>
  );
}