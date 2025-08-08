import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '심리상담센터 홈페이지 제작 | 더뷰미디어',
  description: '신뢰/공감 기반 콘텐츠와 예약 전환 최적화.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0305' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">심리상담센터 홈페이지 제작</h1>
      <p className="text-lg text-gray-700">상담 여정에 맞춘 친화적 UI/UX 반영.</p>
    </main>
  );
}