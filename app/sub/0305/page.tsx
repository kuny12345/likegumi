import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '심리상담센터 홈페이지 제작 | 더뷰미디어',
  description: '신뢰/공감 기반 콘텐츠와 예약 전환 최적화.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0305' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'trust', label: '신뢰 요소' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '전문직홈페이지' }, { name: '심리상담 홈페이지' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">심리상담센터 홈페이지 제작</h1>
        <p className="text-lg text-gray-700 mb-8">상담 여정에 맞춘 친화적 UI/UX 반영.</p>
        <section id="trust" className="space-y-2 mb-12">
          <div className="border rounded p-4">전문가 프로필/자격/경력</div>
          <div className="border rounded p-4">예약/상담 전환 최적화</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '개인정보 취급?', a: '상담 정보는 암호화/최소 수집 원칙을 따릅니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}