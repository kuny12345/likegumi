import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '미니1 | 더뷰미디어',
  description: '미니1 상세 소개 페이지입니다. 더뷰미디어의 서비스와 제작 사례를 확인하세요.',
  alternates: { canonical: 'https://thevuemedia.com/sub1' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">미니1</h1>
      <p className="text-lg text-gray-700 mb-4">더뷰미디어의 미니1 관련 안내 페이지입니다. 간단한 소개 문구와 핵심 가치를 요약합니다.</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>핵심 기능 1: 반응형 레이아웃</li>
        <li>핵심 기능 2: 검색 최적화(SEO) 구조</li>
        <li>핵심 기능 3: 빠른 로딩과 최적화된 이미지</li>
      </ul>
    </main>
  );
}