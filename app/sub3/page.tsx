import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '미니3 | 더뷰미디어',
  description: '미니3 상세 소개 페이지입니다. 기능 구성과 기술 스택을 확인하세요.',
  alternates: { canonical: 'https://thevuemedia.com/sub3' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'features', label: '주요 기능' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '미니3' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">미니3</h1>
        <p className="text-lg text-gray-700 mb-6">핵심 기능과 적용 기술을 간략히 소개합니다.</p>
        <section id="features" className="space-y-3 mb-12">
          <h2 className="text-2xl font-semibold">주요 기능</h2>
          <ol className="list-decimal pl-6 space-y-1 text-gray-700">
            <li>콘텐츠 관리의 편의성</li>
            <li>접근성 표준 준수</li>
            <li>고성능 최적화</li>
          </ol>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '호스팅은 제공되나요?', a: '요청 시 Vercel 배포를 지원해드립니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}