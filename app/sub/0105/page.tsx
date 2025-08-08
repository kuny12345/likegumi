import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '산부인과 홈페이지 | 더뷰미디어',
  description: '가족 친화 UX와 신뢰 중심 콘텐츠의 산부인과 홈페이지 제작.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0105' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'journey', label: '케어 여정' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '병원홈페이지' }, { name: '산부인과 홈페이지' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">산부인과 홈페이지</h1>
        <p className="text-lg text-gray-700 mb-8">산모 케어 여정에 맞춘 정보 설계와 문의 전환 최적화.</p>
        <section id="journey" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border rounded p-4">임신/출산 단계별 안내</div>
          <div className="border rounded p-4">예약/상담 간소화</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '신생아 사진 사용?', a: '보호자 동의 및 개인정보 가이드를 준수합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}