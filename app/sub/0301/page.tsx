import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '세무사 홈페이지 제작 | 더뷰미디어',
  description: '신뢰성 있는 정보 제공과 문의 전환을 강화한 세무사 홈페이지.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0301' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'services', label: '서비스' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '전문직홈페이지' }, { name: '세무사 홈페이지' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">세무사 홈페이지 제작</h1>
        <p className="text-lg text-gray-700 mb-8">세무 콘텐츠 구성과 지역 타겟 SEO에 최적화.</p>
        <section id="services" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border rounded p-4">세무 서비스 소개</div>
          <div className="border rounded p-4">고객 후기/사례</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '세무 콘텐츠 업데이트?', a: '주기적 업데이트를 위한 관리 가이드를 제공합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}