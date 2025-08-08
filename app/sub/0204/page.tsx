import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '손해배상 변호사 홈페이지 | 더뷰미디어',
  description: '손해배상 사건의 승소 사례와 신뢰 구축에 최적화.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0204' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">손해배상 변호사 홈페이지</h1>
      <p className="text-lg text-gray-700">사건 안내, 증빙 가이드, 빠른 상담 흐름까지.</p>
    </main>
  );
}