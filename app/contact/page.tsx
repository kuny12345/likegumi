import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '상담문의 | 더뷰미디어',
  description: '프로젝트 상담 및 견적 문의 페이지입니다.',
  alternates: { canonical: 'https://thevuemedia.com/contact' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'contact', label: '문의' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: '상담문의' }]} />
        <h1 id="contact" className="text-4xl font-bold mt-6 mb-4">상담문의</h1>
        <p className="text-lg text-gray-700 mb-6">간단한 요구사항과 연락처를 남겨주세요. 빠르게 답변드리겠습니다.</p>
        <div className="border rounded p-4 mb-12">폼 영역(연락처, 이메일, 목표, 일정 등)</div>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: '견적 산정 기준은?', a: '범위(페이지/기능), 디자인 수준, 일정에 따라 달라집니다.' }]} />
        </section>
        <CTA title="브리프 공유하기" subtitle="문서/레퍼런스를 첨부해 주세요" href="/contact" />
      </main>
    </div>
  );
}