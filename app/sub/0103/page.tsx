import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '성형외과 홈페이지 | 더뷰미디어',
  description: '브랜딩 중심의 성형외과 홈페이지 제작, 촬영/후기/상담 연동까지.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0103' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">성형외과 홈페이지</h1>
      <p className="text-lg text-gray-700">고급스러운 비주얼과 신뢰도 높은 콘텐츠 설계를 제공합니다.</p>
    </main>
  );
}