import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '회사소개 | 더뷰미디어',
  description: '더뷰미디어 회사 소개 페이지입니다. 비전, 가치, 서비스 철학을 소개합니다.',
  alternates: { canonical: 'https://thevuemedia.com/about' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'vision', label: '비전/가치' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '회사소개' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">회사소개</h1>
        <p className="text-lg text-gray-700 mb-8">더뷰미디어는 성과 중심의 웹사이트와 SEO에 특화된 디지털 파트너입니다.</p>
        <section id="vision" className="space-y-2 mb-12">
          <h2 className="text-2xl font-semibold">비전/가치</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>전환 중심의 정보 설계</li>
            <li>데이터 기반 의사결정</li>
            <li>장기적 운영/유지 전략</li>
          </ul>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '어떤 업종을 많이 진행하나요?', a: '의료/법률/전문서비스/로컬 비즈니스 등 다양한 업종을 진행합니다.' }]} />
        </section>
        <CTA title="프로젝트 문의" subtitle="목표와 일정, 예산 범위를 알려주세요" href="/contact" />
      </main>
    </div>
  );
}