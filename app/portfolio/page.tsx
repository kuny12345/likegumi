import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '포트폴리오 | 더뷰미디어',
  description: '더뷰미디어의 실제 제작 사례와 프로젝트 성과를 확인하세요.',
  alternates: { canonical: 'https://thevuemedia.com/portfolio' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'list', label: '사례 목록' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '포트폴리오' }]} />
        <h1 id="list" className="text-4xl font-bold mt-6 mb-4">포트폴리오</h1>
        <p className="text-lg text-gray-700 mb-8">최신 사례는 문의 주시면 상세 자료를 전달드립니다.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border rounded p-4">사례 A — 전환율 35% 개선</div>
          <div className="border rounded p-4">사례 B — 검색 유입 2.1배 증가</div>
        </div>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '실사례 문서는 제공되나요?', a: '비공개 자료는 요청 시 NDA 체결 후 제공 가능합니다.' }]} />
        </section>
        <CTA title="사례 더 보기 요청" subtitle="업종과 관심 서비스 유형을 알려주세요" href="/contact" />
      </main>
    </div>
  );
}