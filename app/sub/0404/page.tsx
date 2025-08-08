import type { Metadata } from 'next';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import TOC from '@/app/components/TOC';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';

export const metadata: Metadata = {
  title: '유지보수 관리 | 더뷰미디어',
  description: '안정적인 운영과 지속 업데이트를 위한 유지보수.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0404' },
};

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
      <TOC items={[{ id: 'overview', label: '개요' }, { id: 'scope', label: '범위' }, { id: 'faq', label: 'FAQ' }]} />
      <main className="flex-1">
        <Breadcrumbs items={[{ name: '홈', href: '/' }, { name: 'SEO/기능' }, { name: '유지보수 관리' }]} />
        <h1 id="overview" className="text-4xl font-bold mt-6 mb-4">유지보수 관리</h1>
        <p className="text-lg text-gray-700 mb-8">보안/속도/콘텐츠/기능 관리 일원화.</p>
        <section id="scope" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border rounded p-4">보안/백업/모니터링</div>
          <div className="border rounded p-4">콘텐츠/기능 업데이트</div>
        </section>
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <FAQ items={[{ q: 'SLA 제공?', a: '계약 범위에 따라 SLA(응답/복구 시간)를 제공합니다.' }]} />
        </section>
        <CTA />
      </main>
    </div>
  );
}