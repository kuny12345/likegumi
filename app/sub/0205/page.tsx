import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '로펌 홈페이지 리뉴얼 | 더뷰미디어',
  description: '브랜딩, 성과 중심으로 로펌 사이트를 리뉴얼합니다.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0205' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">로펌 홈페이지 리뉴얼</h1>
      <p className="text-lg text-gray-700">차별화 포지셔닝과 전환 최적화.</p>
    </main>
  );
}