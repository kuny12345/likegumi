import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '키워드 분석 | 더뷰미디어',
  description: '비즈니스에 적합한 키워드 전략 수립과 콘텐츠 설계.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0406' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">키워드 분석</h1>
      <p className="text-lg text-gray-700">볼륨/난이도/전환을 고려한 키워드 선별.</p>
    </main>
  );
}