import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '미니2 | 더뷰미디어',
  description: '미니2 상세 소개 페이지입니다. 맞춤 디자인과 제작 프로세스를 확인해 보세요.',
  alternates: { canonical: 'https://thevuemedia.com/sub2' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">미니2</h1>
      <p className="text-lg text-gray-700 mb-4">프로젝트 개요, 제공되는 서비스 범위, 기대 효과를 간단히 정리했습니다.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 rounded border">브랜딩 요소 구성</div>
        <div className="p-4 rounded border">UI/UX 가이드</div>
      </div>
    </main>
  );
}