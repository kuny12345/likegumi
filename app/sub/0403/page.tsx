import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '홈페이지 리뉴얼 | 더뷰미디어',
  description: '데이터 기반 리뉴얼로 성과를 재정의합니다.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0403' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[
        { id: 'overview', label: '개요' },
        { id: 'process', label: '프로세스' },
        { id: 'faq', label: 'FAQ' },
      ]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: 'SEO/기능', href: '/sub/0403' }, { name: '홈페이지 리뉴얼' }]} />

        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">홈페이지 리뉴얼</h1>
        <p className="text-lg text-gray-700 mb-8">데이터 분석을 기반으로 IA/UX/콘텐츠/SEO 전 영역을 개선하여 전환 성과를 재정의합니다.</p>

        <section id="process" className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold">프로세스</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>현황 진단: 분석툴/서치콘솔/로그로 문제 파악</li>
            <li>전략 수립: KPI/IA/콘텐츠/디자인 방향 정의</li>
            <li>제작/개발: 반응형/접근성/속도 최적화</li>
            <li>지표 개선: A/B 테스트와 SEO 개선 반복</li>
          </ol>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[
            { q: '리뉴얼 기간은 얼마나 걸리나요?', a: '범위에 따라 3~8주 내외로 진행됩니다.' },
            { q: '기존 데이터는 유지되나요?', a: '핵심 데이터는 백업/이관하며, SEO 손실 최소화 전략을 적용합니다.' },
          ]} />
        </section>

        <CTA title="리뉴얼 상담 요청" subtitle="현재 사이트 주소와 개선 목표를 남겨주세요" href="/contact" />
      </main>
    </div>
  );
}