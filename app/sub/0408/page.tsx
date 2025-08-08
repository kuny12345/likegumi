import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '네이버/구글 SEO | 더뷰미디어',
  description: '국내/글로벌 검색 최적화 전략을 통합 제공합니다.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0408' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'engines', label: '엔진별 전략' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: 'SEO/기능' }, { name: '네이버/구글 SEO' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">네이버/구글 SEO</h1>
        <p className="text-lg text-gray-700 mb-8">엔진별 정책에 맞는 최적화와 측정.</p>
        <section id="engines" className="space-y-2 mb-12">
          <div className="border rounded p-4">네이버/구글 차이점</div>
          <div className="border rounded p-4">콘텐츠/기술 최적화</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '검색엔진 업데이트 대응?', a: '주요 코어 업데이트에 대해 사전 가이드를 제공합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}