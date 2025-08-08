import Link from 'next/link';

export default function CTA({ title = '지금 상담받기', subtitle = '프로젝트 목표를 알려주세요', href = '/contact' }: { title?: string; subtitle?: string; href?: string; }) {
  return (
    <section className="bg-blue-50 border rounded p-6 text-center">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{subtitle}</p>
      <Link href={href} className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">상담 문의</Link>
    </section>
  );
}