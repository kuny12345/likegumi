export interface TOCItem { id: string; label: string; }

export default function TOC({ items }: { items: TOCItem[] }) {
  return (
    <aside className="hidden lg:block lg:w-64 shrink-0">
      <div className="sticky top-24 p-4 border rounded">
        <h2 className="text-sm font-semibold mb-3">바로가기</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          {items.map((it) => (
            <li key={it.id}>
              <a href={`#${it.id}`} className="hover:underline">{it.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}