import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '미니1 | 더뷰미디어',
  description: '미니1 상세 소개 페이지입니다. 더뷰미디어의 서비스와 제작 사례를 확인하세요.',
  alternates: { canonical: 'https://thevuemedia.com/sub1' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'features', label: '특징' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '미니1' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">미니1</h1>
        <p className="text-lg text-gray-700 mb-8">더뷰미디어의 미니1 관련 안내 페이지입니다. 간단한 소개 문구와 핵심 가치를 요약합니다.</p>
        <section id="features" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">특징</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>반응형 레이아웃</li>
            <li>검색 최적화 구조</li>
            <li>빠른 로딩</li>
          </ul>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '제작 기간은?', a: '일반적으로 2~3주 내외입니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}