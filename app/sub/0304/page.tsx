import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '부동산 중개사 홈페이지 제작 | 더뷰미디어',
  description: '매물/후기/지도 연동에 최적화된 중개사 홈페이지.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0304' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'features', label: '핵심 기능' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '전문직홈페이지' }, { name: '부동산 홈페이지' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">부동산 중개사 홈페이지 제작</h1>
        <p className="text-lg text-gray-700 mb-8">검색/문의 전환 최적화와 지역 키워드 전략.</p>
        <section id="features" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border rounded p-4">매물/지도 연동</div>
          <div className="border rounded p-4">후기/문의 전환 강화</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '매물 데이터 연동?', a: '외부 API/구글 스프레드시트 등으로 연동 가능합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}