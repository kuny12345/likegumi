import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '포트폴리오(사례) | 더뷰미디어',
  description: '프로젝트 사례와 정량적 성과 지표를 공유합니다.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0410' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'cases', label: '사례' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: 'SEO/기능' }, { name: '포트폴리오(사례)' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">포트폴리오(사례)</h1>
        <p className="text-lg text-gray-700 mb-8">업종별 사례와 결과 지표를 정리합니다.</p>
        <section id="cases" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border rounded p-4">사례 A — KPI 개선</div>
          <div className="border rounded p-4">사례 B — 유입 증가</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '레퍼런스 공유?', a: '고객 동의 하에 제한적으로 공유합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}