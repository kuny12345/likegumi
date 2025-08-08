'use client';

import { useState } from 'react';

export interface FAQItem { q: string; a: string; }

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="divide-y divide-gray-200 border rounded">
      {items.map((it, idx) => (
        <div key={idx}>
          <button
            className="w-full text-left px-4 py-3 hover:bg-gray-50 flex justify-between items-center"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            aria-expanded={openIdx === idx}
          >
            <span className="font-medium">{it.q}</span>
            <span className="text-gray-400">{openIdx === idx ? '-' : '+'}</span>
          </button>
          {openIdx === idx && (
            <div className="px-4 pb-4 text-gray-700">{it.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}