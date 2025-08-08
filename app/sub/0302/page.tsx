import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '노무사 홈페이지 제작 | 더뷰미디어',
  description: '사례와 법률 정보 큐레이션을 담은 노무사 홈페이지.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0302' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">노무사 홈페이지 제작</h1>
      <p className="text-lg text-gray-700">노무 이슈 안내와 문의 흐름 최적화.</p>
    </main>
  );
}