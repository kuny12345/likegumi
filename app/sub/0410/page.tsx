import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '포트폴리오(사례) | 더뷰미디어',
  description: '프로젝트 사례와 정량적 성과 지표를 공유합니다.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0410' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">포트폴리오(사례)</h1>
      <p className="text-lg text-gray-700">업종별 사례와 결과 지표를 정리합니다.</p>
    </main>
  );
}