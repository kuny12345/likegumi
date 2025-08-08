import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '미니3 | 더뷰미디어',
  description: '미니3 상세 소개 페이지입니다. 기능 구성과 기술 스택을 확인하세요.',
  alternates: { canonical: 'https://thevuemedia.com/sub3' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">미니3</h1>
      <p className="text-lg text-gray-700 mb-6">핵심 기능과 적용 기술을 간략히 소개합니다.</p>
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">주요 기능</h2>
        <ol className="list-decimal pl-6 space-y-1 text-gray-700">
          <li>콘텐츠 관리의 편의성</li>
          <li>접근성 표준 준수</li>
          <li>고성능 최적화</li>
        </ol>
      </section>
    </main>
  );
}