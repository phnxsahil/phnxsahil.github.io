export function Ticker() {
  const items = [
    '5 shipped products',
    '2 live in production',
    'Product design + engineering',
    'Next.js / FastAPI / Supabase',
    'AI systems and retrieval workflows',
    'Available for 0→1 builds',
  ];

  return (
    <div className="relative z-[2] border-y border-[var(--border)] py-3 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap gap-x-5 gap-y-2">
        {items.map((item, i) => (
          <span
            key={item}
            className="meta-label"
            style={{ color: i % 4 === 0 ? 'var(--accent)' : 'var(--muted)' }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
