import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '미니2 | 더뷰미디어',
  description: '미니2 상세 소개 페이지입니다. 맞춤 디자인과 제작 프로세스를 확인해 보세요.',
  alternates: { canonical: 'https://thevuemedia.com/sub2' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'modules', label: '구성' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '미니2' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">미니2</h1>
        <p className="text-lg text-gray-700 mb-8">프로젝트 개요, 제공되는 서비스 범위, 기대 효과를 간단히 정리했습니다.</p>
        <section id="modules" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-4 rounded border">브랜딩 요소 구성</div>
          <div className="p-4 rounded border">UI/UX 가이드</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '유지보수는 포함되나요?', a: '옵션으로 유지보수 계약이 가능합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}