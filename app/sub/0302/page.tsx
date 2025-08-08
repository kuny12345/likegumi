import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '노무사 홈페이지 제작 | 더뷰미디어',
  description: '사례와 법률 정보 큐레이션을 담은 노무사 홈페이지.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0302' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'topics', label: '주요 이슈' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '전문직홈페이지' }, { name: '노무사 홈페이지' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">노무사 홈페이지 제작</h1>
        <p className="text-lg text-gray-700 mb-8">노무 이슈 안내와 문의 흐름 최적화.</p>
        <section id="topics" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border rounded p-4">근로/사업주 이슈</div>
          <div className="border rounded p-4">정책/법령 안내</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '법령 변경 반영?', a: '중요 개정 사항을 빠르게 반영할 수 있는 구조로 설계합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}