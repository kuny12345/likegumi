import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '병원 리뉴얼 | 더뷰미디어',
  description: '리브랜딩과 성과 중심 개편 프로젝트를 수행합니다.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0106' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'steps', label: '진행 단계' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '병원홈페이지' }, { name: '병원 리뉴얼' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">병원 리뉴얼</h1>
        <p className="text-lg text-gray-700 mb-8">데이터 분석 기반 UI/UX 개선과 SEO 리셋을 진행합니다.</p>
        <section id="steps" className="space-y-2 mb-12">
          <div className="border rounded p-4">현황 진단 → 전략 수립 → 제작/개발 → 개선</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '콘텐츠 이관은?', a: '핵심 콘텐츠는 백업/이관하며 구조 최적화 후 반영합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}