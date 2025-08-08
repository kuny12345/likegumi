import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '병원 리뉴얼 | 더뷰미디어',
  description: '리브랜딩과 성과 중심 개편 프로젝트를 수행합니다.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0106' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">병원 리뉴얼</h1>
      <p className="text-lg text-gray-700">데이터 분석 기반 UI/UX 개선과 SEO 리셋을 진행합니다.</p>
    </main>
  );
}