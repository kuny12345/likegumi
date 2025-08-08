import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '미니5 | 더뷰미디어',
  description: '미니5 상세 소개 페이지입니다. 비용 가이드와 일정 계획을 확인하세요.',
  alternates: { canonical: 'https://thevuemedia.com/sub5' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">미니5</h1>
      <p className="text-lg text-gray-700 mb-6">프로젝트 견적 범위와 진행 일정을 간단히 정리했습니다.</p>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-2">항목</th>
            <th className="py-2">내용</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="border-b"><td className="py-2">구성</td><td className="py-2">반응형 + 기본 SEO</td></tr>
          <tr className="border-b"><td className="py-2">기간</td><td className="py-2">약 2~3주</td></tr>
        </tbody>
      </table>
    </main>
  );
}