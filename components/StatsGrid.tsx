export function StatsGrid({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-ui border border-border-soft bg-white p-4">
          <div className="text-2xl font-semibold text-brand-primary">{item.value}</div>
          <div className="mt-1 text-sm">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
