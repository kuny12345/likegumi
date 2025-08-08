import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '키워드 분석 | 더뷰미디어',
  description: '비즈니스에 적합한 키워드 전략 수립과 콘텐츠 설계.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0406' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'strategy', label: '전략' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: 'SEO/기능' }, { name: '키워드 분석' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">키워드 분석</h1>
        <p className="text-lg text-gray-700 mb-8">볼륨/난이도/전환을 고려한 키워드 선별.</p>
        <section id="strategy" className="space-y-2 mb-12">
          <div className="border rounded p-4">토픽 클러스터 전략</div>
          <div className="border rounded p-4">콘텐츠 브리핑</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '툴은 무엇을 쓰나요?', a: '서치콘솔/애널리틱스/서드파티 툴을 병행합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}