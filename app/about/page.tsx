import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회사소개 | 더뷰미디어',
  description: '더뷰미디어 회사 소개 페이지입니다. 비전, 가치, 서비스 철학을 소개합니다.',
  alternates: { canonical: 'https://thevuemedia.com/about' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">회사소개</h1>
      <p className="text-lg text-gray-700">더뷰미디어는 성과 중심의 웹사이트와 SEO에 특화된 디지털 파트너입니다.</p>
    </main>
  );
}