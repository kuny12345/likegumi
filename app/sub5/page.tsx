import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '미니5 | 더뷰미디어',
  description: '미니5 상세 소개 페이지입니다. 비용 가이드와 일정 계획을 확인하세요.',
  alternates: { canonical: 'https://thevuemedia.com/sub5' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'pricing', label: '비용/일정' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '미니5' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">미니5</h1>
        <p className="text-lg text-gray-700 mb-6">프로젝트 견적 범위와 진행 일정을 간단히 정리했습니다.</p>
        <section id="pricing" className="mb-12">
          <table className="w-full text-left border-collapse mb-4">
            <thead>
              <tr className="border-b"><th className="py-2">항목</th><th className="py-2">내용</th></tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b"><td className="py-2">구성</td><td className="py-2">반응형 + 기본 SEO</td></tr>
              <tr className="border-b"><td className="py-2">기간</td><td className="py-2">약 2~3주</td></tr>
            </tbody>
          </table>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '유지 비용은?', a: '유지보수 계약 범위에 따라 월 10~30만원 수준입니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}