import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '이혼 전문 변호사 홈페이지 | 더뷰미디어',
  description: '이혼 전문 로펌을 위한 신뢰 중심 홈페이지 제작.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0201' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'content', label: '콘텐츠' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '변호사홈페이지' }, { name: '이혼 전문 변호사' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">이혼 전문 변호사 홈페이지</h1>
        <p className="text-lg text-gray-700 mb-8">사건 유형별 안내와 상담 전환 최적화.</p>
        <section id="content" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border rounded p-4">사례/판결 요약</div>
          <div className="border rounded p-4">절차/서류 가이드</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '민감 정보는?', a: '개인정보 비식별화 및 법률 가이드를 준수합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}