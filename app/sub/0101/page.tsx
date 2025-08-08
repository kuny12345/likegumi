import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '정형외과 홈페이지 | 더뷰미디어',
  description: '정형외과 전문 홈페이지 제작 솔루션과 차별화된 콘텐츠 전략을 제공합니다.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0101' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'sections', label: '구성' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '병원홈페이지' }, { name: '정형외과 홈페이지' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">정형외과 홈페이지</h1>
        <p className="text-lg text-gray-700 mb-8">전문의 신뢰도와 시술 안내 중심의 정보 구조를 설계합니다.</p>
        <section id="sections" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border rounded p-4">시술 안내/상담 흐름</div>
          <div className="border rounded p-4">후기/전문의 소개</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '의료법 이슈는?', a: '의료법 가이드에 맞춰 문구/레이아웃을 반영합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}