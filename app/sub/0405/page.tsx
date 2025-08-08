import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: 'SEO 진단 | 더뷰미디어',
  description: '기술/콘텐츠/링크 전반의 SEO 점검과 개선 플랜.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0405' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'audit', label: '진단 범위' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: 'SEO/기능' }, { name: 'SEO 진단' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">SEO 진단</h1>
        <p className="text-lg text-gray-700 mb-8">검색 성능을 방해하는 요소를 진단하고 개선합니다.</p>
        <section id="audit" className="space-y-2 mb-12">
          <div className="border rounded p-4">기술/콘텐츠/링크 진단</div>
          <div className="border rounded p-4">우선순위 개선 플랜</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '진단 리포트 제공?', a: 'PDF/스프레드시트 형태로 제공합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}