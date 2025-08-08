import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '피부과 홈페이지 | 더뷰미디어',
  description: '피부과 시술 홍보에 최적화된 반응형 홈페이지를 제공합니다.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0102' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">피부과 홈페이지</h1>
      <p className="text-lg text-gray-700">시즌별 캠페인과 후기 콘텐츠 운영이 용이한 구조를 제안합니다.</p>
    </main>
  );
}