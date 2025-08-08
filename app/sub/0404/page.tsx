import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '유지보수 관리 | 더뷰미디어',
  description: '안정적인 운영과 지속 업데이트를 위한 유지보수.',
  alternates: { canonical: 'https://thevuemedia.com/sub/0404' },
};

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">유지보수 관리</h1>
      <p className="text-lg text-gray-700">보안/속도/콘텐츠/기능 관리 일원화.</p>
    </main>
  );
}