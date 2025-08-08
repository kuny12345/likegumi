import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '반응형 홈페이지 제작 | 더뷰미디어',
  description: '디바이스 전역에서 최적 화면을 제공하는 반응형 제작.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0402' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'perf', label: '성능/접근성' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: 'SEO/기능' }, { name: '반응형 홈페이지' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">반응형 홈페이지 제작</h1>
        <p className="text-lg text-gray-700 mb-8">속도/접근성/전환을 고루 충족.</p>
        <section id="perf" className="space-y-2 mb-12">
          <div className="border rounded p-4">Core Web Vitals 최적화</div>
          <div className="border rounded p-4">접근성(ARIA/키보드) 고려</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '테마/디자인 적용?', a: '브랜드 가이드에 맞춰 커스텀 테마를 제작합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}