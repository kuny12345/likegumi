import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '손해배상 변호사 홈페이지 | 더뷰미디어',
  description: '손해배상 사건의 승소 사례와 신뢰 구축에 최적화.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0204' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'materials', label: '증빙 자료' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '변호사홈페이지' }, { name: '손해배상 변호사' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">손해배상 변호사 홈페이지</h1>
        <p className="text-lg text-gray-700 mb-8">사건 안내, 증빙 가이드, 빠른 상담 흐름까지.</p>
        <section id="materials" className="space-y-2 mb-12">
          <div className="border rounded p-4">증빙 자료 제출 가이드</div>
          <div className="border rounded p-4">사례/판결 요약</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '성과 표기는?', a: '광고 가이드에 맞춰 객관적 수치만 표기합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}