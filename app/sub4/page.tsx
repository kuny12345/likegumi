import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '미니4 | 더뷰미디어',
  description: '미니4 상세 소개 페이지입니다. 구축 사례와 기대 효과를 소개합니다.',
  alternates: { canonical: 'https://thevuemedia.com/sub4' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'cases', label: '사례' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '미니4' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">미니4</h1>
        <p className="text-lg text-gray-700 mb-4">미니4 유형의 제작 방향성과 차별점을 안내합니다.</p>
        <section id="cases" className="space-y-2 mb-12">
          <blockquote className="border-l-4 pl-4 text-gray-600">고객 목표 달성에 집중한 정보 구조와 디자인 전략</blockquote>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '콘텐츠 촬영도 지원하나요?', a: '별도 요청 시 연계 스튜디오를 통해 지원 가능합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}