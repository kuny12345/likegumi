import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '정형외과 홈페이지 | 더뷰미디어',
  description: '정형외과 전문 홈페이지 제작 솔루션과 차별화된 콘텐츠 전략을 제공합니다.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0101' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">정형외과 홈페이지</h1>
      <p className="text-lg text-gray-700">전문의 신뢰도와 시술 안내 중심의 정보 구조를 설계합니다.</p>
    </main>
  );
}