import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '반응형 홈페이지 제작 | 더뷰미디어',
  description: '디바이스 전역에서 최적 화면을 제공하는 반응형 제작.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0402' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">반응형 홈페이지 제작</h1>
      <p className="text-lg text-gray-700">속도/접근성/전환을 고루 충족.</p>
    </main>
  );
}