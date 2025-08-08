import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '한의원 홈페이지 | 더뷰미디어',
  description: '스토리텔링과 진료 철학을 강조한 한의원 홈페이지 제작.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0104' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">한의원 홈페이지</h1>
      <p className="text-lg text-gray-700">치료 스토리와 생활 건강 콘텐츠로 신뢰를 높입니다.</p>
    </main>
  );
}