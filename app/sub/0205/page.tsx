import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '로펌 홈페이지 리뉴얼 | 더뷰미디어',
  description: '브랜딩, 성과 중심으로 로펌 사이트를 리뉴얼합니다.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0205' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'brand', label: '브랜딩' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '변호사홈페이지' }, { name: '로펌 리뉴얼' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">로펌 홈페이지 리뉴얼</h1>
        <p className="text-lg text-gray-700 mb-8">차별화 포지셔닝과 전환 최적화.</p>
        <section id="brand" className="space-y-2 mb-12">
          <div className="border rounded p-4">포지셔닝/메시지 구조</div>
          <div className="border rounded p-4">콘텐츠 IA 및 CTA 전략</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '로고/브랜드는?', a: '기존 자산 활용 또는 신규 제작 옵션을 제공합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}