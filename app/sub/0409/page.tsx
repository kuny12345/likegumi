import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '구조화 마크업 | 더뷰미디어',
  description: '스키마(Structured Data)로 검색 가시성과 CTR 향상.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0409' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'schemas', label: '스키마' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: 'SEO/기능' }, { name: '구조화 마크업' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">구조화 마크업</h1>
        <p className="text-lg text-gray-700 mb-8">리치 리절트 대응과 엔티티 기반 구성.</p>
        <section id="schemas" className="space-y-2 mb-12">
          <div className="border rounded p-4">Organization/LocalBusiness</div>
          <div className="border rounded p-4">FAQ/Article/Review</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '에러 검증?', a: '서치콘솔/리치리절트 테스트로 검증합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}