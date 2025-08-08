import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '랜딩페이지 제작 | 더뷰미디어',
  description: '전환 최적화형 랜딩페이지 설계/제작.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0401' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'structure', label: '구조' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: 'SEO/기능' }, { name: '랜딩페이지 제작' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">랜딩페이지 제작</h1>
        <p className="text-lg text-gray-700 mb-8">캠페인 목적에 맞춘 카피/디자인/분석 연동.</p>
        <section id="structure" className="space-y-2 mb-12">
          <div className="border rounded p-4">히어로/문제-해결/증빙/CTA 구조</div>
          <div className="border rounded p-4">A/B 테스트 및 분석 연동</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '광고 연동?', a: '구글/메타/네이버 광고 계정과 연동해 측정합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}