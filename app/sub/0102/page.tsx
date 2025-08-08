import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '피부과 홈페이지 | 더뷰미디어',
  description: '피부과 시술 홍보에 최적화된 반응형 홈페이지를 제공합니다.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0102' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'campaign', label: '캠페인/후기' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '병원홈페이지' }, { name: '피부과 홈페이지' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">피부과 홈페이지</h1>
        <p className="text-lg text-gray-700 mb-8">시즌별 캠페인과 후기 콘텐츠 운영이 용이한 구조를 제안합니다.</p>
        <section id="campaign" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border rounded p-4">시술별 캠페인 블록</div>
          <div className="border rounded p-4">고객 후기/전후 사진</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '시술 설명 가이드?', a: '의료법 범위 내 정확한 정보만 게재합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}