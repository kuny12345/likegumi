import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '성형외과 홈페이지 | 더뷰미디어',
  description: '브랜딩 중심의 성형외과 홈페이지 제작, 촬영/후기/상담 연동까지.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0103' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'brand', label: '브랜딩' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '병원홈페이지' }, { name: '성형외과 홈페이지' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">성형외과 홈페이지</h1>
        <p className="text-lg text-gray-700 mb-8">고급스러운 비주얼과 신뢰도 높은 콘텐츠 설계를 제공합니다.</p>
        <section id="brand" className="space-y-2 mb-12">
          <div className="border rounded p-4">촬영/후기/상담 통합 플로우</div>
          <div className="border rounded p-4">시술 카테고리 IA 설계</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '사진 사용 정책?', a: '초상권/저작권 동의 하에 사용합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}