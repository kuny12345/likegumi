import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '변호사 반응형 홈페이지 | 더뷰미디어',
  description: '모바일/PC 최적화를 갖춘 반응형 변호사 홈페이지 제작.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0206' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">변호사 반응형 홈페이지</h1>
      <p className="text-lg text-gray-700">접근성/속도/전환을 고려한 구조 설계.</p>
    </main>
  );
}