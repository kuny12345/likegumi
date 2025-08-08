import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '한의원 홈페이지 | 더뷰미디어',
  description: '스토리텔링과 진료 철학을 강조한 한의원 홈페이지 제작.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0104' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'story', label: '스토리텔링' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '병원홈페이지' }, { name: '한의원 홈페이지' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">한의원 홈페이지</h1>
        <p className="text-lg text-gray-700 mb-8">치료 스토리와 생활 건강 콘텐츠로 신뢰를 높입니다.</p>
        <section id="story" className="space-y-2 mb-12">
          <div className="border rounded p-4">원장 스토리/철학 섹션</div>
          <div className="border rounded p-4">생활 건강 칼럼</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '한약/시술 표현 가이드?', a: '보건 당국 가이드에 따라 표현을 안전하게 관리합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}