import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '변호사 반응형 홈페이지 | 더뷰미디어',
  description: '모바일/PC 최적화를 갖춘 반응형 변호사 홈페이지 제작.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0206' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'performance', label: '속도/접근성' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '변호사홈페이지' }, { name: '반응형 홈페이지' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">변호사 반응형 홈페이지</h1>
        <p className="text-lg text-gray-700 mb-8">접근성/속도/전환을 고려한 구조 설계.</p>
        <section id="performance" className="space-y-2 mb-12">
          <div className="border rounded p-4">LCP/CLS 최적화</div>
          <div className="border rounded p-4">접근성 점검</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '기존 콘텐츠는?', a: '모바일 우선 레이아웃으로 재배치/최적화합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}