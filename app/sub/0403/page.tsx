import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '홈페이지 리뉴얼 | 더뷰미디어',
  description: '데이터 기반 리뉴얼로 성과를 재정의합니다.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0403' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">홈페이지 리뉴얼</h1>
      <p className="text-lg text-gray-700">IA/UX/콘텐츠/SEO 전 영역 개선.</p>
    </main>
  );
}