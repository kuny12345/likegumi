import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '민사 소송 변호사 홈페이지 | 더뷰미디어',
  description: '민사 사건 상담 유입을 위한 콘텐츠 전략.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0203' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'types', label: '사건 유형' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '변호사홈페이지' }, { name: '민사 소송 변호사' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">민사 소송 변호사 홈페이지</h1>
        <p className="text-lg text-gray-700 mb-8">유형별 문제 해결 사례와 상담 CTA 최적화.</p>
        <section id="types" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border rounded p-4">채무/계약 분쟁</div>
          <div className="border rounded p-4">손해배상/기타</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '온라인 상담은?', a: '간단 질의는 온라인 접수 후 순차 답변드립니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}