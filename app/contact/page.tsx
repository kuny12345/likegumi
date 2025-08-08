import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '상담문의 | 더뷰미디어',
  description: '프로젝트 상담 및 견적 문의 페이지입니다.',
  alternates: { canonical: 'https://thevuemedia.com/contact' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">상담문의</h1>
      <p className="text-lg text-gray-700">간단한 요구사항과 연락처를 남겨주세요. 빠르게 답변드리겠습니다.</p>
    </main>
  );
}