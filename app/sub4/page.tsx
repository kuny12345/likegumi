import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '미니4 | 더뷰미디어',
  description: '미니4 상세 소개 페이지입니다. 구축 사례와 기대 효과를 소개합니다.',
  alternates: { canonical: 'https://thevuemedia.com/sub4' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">미니4</h1>
      <p className="text-lg text-gray-700 mb-4">미니4 유형의 제작 방향성과 차별점을 안내합니다.</p>
      <blockquote className="border-l-4 pl-4 text-gray-600">고객 목표 달성에 집중한 정보 구조와 디자인 전략</blockquote>
    </main>
  );
}