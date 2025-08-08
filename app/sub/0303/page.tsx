import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '컨설턴트 홈페이지 제작 | 더뷰미디어',
  description: '전문성 포지셔닝과 리드 생성에 최적화된 페이지 구성.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0303' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'offers', label: '서비스 제안' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '전문직홈페이지' }, { name: '컨설턴트 홈페이지' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">컨설턴트 홈페이지 제작</h1>
        <p className="text-lg text-gray-700 mb-8">프로필/성과/서비스 패키지 명확화.</p>
        <section id="offers" className="space-y-2 mb-12">
          <div className="border rounded p-4">고객 페인포인트 정의</div>
          <div className="border rounded p-4">리드 캡처(문의/리드폼) 최적화</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '콘텐츠 업데이트 주기?', a: '월간/분기 단위 콘텐츠 플랜을 제안드립니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}