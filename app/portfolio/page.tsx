import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '포트폴리오 | 더뷰미디어',
  description: '더뷰미디어의 실제 제작 사례와 프로젝트 성과를 확인하세요.',
  alternates: { canonical: 'https://thevuemedia.com/portfolio' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">포트폴리오</h1>
      <p className="text-lg text-gray-700">최신 사례는 문의 주시면 상세 자료를 전달드립니다.</p>
    </main>
  );
}