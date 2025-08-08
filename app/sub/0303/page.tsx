import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '컨설턴트 홈페이지 제작 | 더뷰미디어',
  description: '전문성 포지셔닝과 리드 생성에 최적화된 페이지 구성.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0303' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">컨설턴트 홈페이지 제작</h1>
      <p className="text-lg text-gray-700">프로필/성과/서비스 패키지 명확화.</p>
    </main>
  );
}