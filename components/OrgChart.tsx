import { Accordion } from './Accordion';

export function OrgChart({ groups }: { groups: { cluster: string; items: string[] }[] }) {
  return (
    <div>
      <div className="hidden grid-cols-2 gap-4 lg:grid">
        {groups.map((group) => (
          <section key={group.cluster} className="rounded-ui border border-border-soft bg-white p-4">
            <h3 className="mb-2 text-lg font-semibold text-text-base">{group.cluster}</h3>
            <ul className="space-y-1 text-sm">
              {group.items.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </section>
        ))}
      </div>
      <div className="lg:hidden"><Accordion items={groups.map((g) => ({ title: g.cluster, content: g.items }))} /></div>
    </div>
  );
}
