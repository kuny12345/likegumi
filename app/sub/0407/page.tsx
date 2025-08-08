import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '상위노출 전략 | 더뷰미디어',
  description: '온/오프페이지 최적화와 콘텐츠 허브 전략으로 상위노출.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0407' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'plan', label: '실행 계획' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: 'SEO/기능' }, { name: '상위노출 전략' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">상위노출 전략</h1>
        <p className="text-lg text-gray-700 mb-8">토픽 클러스터링과 내부 링크 구조 최적화.</p>
        <section id="plan" className="space-y-2 mb-12">
          <div className="border rounded p-4">콘텐츠 허브/스포크 구성</div>
          <div className="border rounded p-4">내부/외부 링크 전략</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '성과 측정?', a: '랭킹/유입/전환 지표를 함께 추적합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}