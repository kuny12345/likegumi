import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '형사 전문 변호사 홈페이지 | 더뷰미디어',
  description: '형사 사건에 특화된 신뢰/성과 중심 홈페이지.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0202' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'proof', label: '증빙/성과' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '변호사홈페이지' }, { name: '형사 전문 변호사' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">형사 전문 변호사 홈페이지</h1>
        <p className="text-lg text-gray-700 mb-8">판례/성과 정리와 빠른 상담 연결 구조.</p>
        <section id="proof" className="space-y-2 mb-12">
          <div className="border rounded p-4">주요 성과/수상/언론 보도</div>
          <div className="border rounded p-4">상담 CTA 배치 최적화</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '사건 공개 범위?', a: '의뢰인 동의와 개인정보 보호 범위 내에서만 공개합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}