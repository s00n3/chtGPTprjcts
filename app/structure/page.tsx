import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FilterChips } from '@/components/FilterChips';
import { OrgChart } from '@/components/OrgChart';
import { SectionHeading } from '@/components/SectionHeading';
import { contextEntities, structureFilters, structureGroups } from '@/data/structure';

export default function StructurePage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Организационная структура' }]} />
      <SectionHeading title="Организационная структура" subtitle="Цифровое представление логики взаимодействия подразделений института и партнерского контура." />
      <FilterChips filters={structureFilters} />
      <OrgChart groups={structureGroups} />
      <section className="rounded-ui border border-border-soft bg-surface-card p-5">
        <h2 className="text-xl font-semibold text-text-base">Нижний контекстный блок</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">{contextEntities.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
    </div>
  );
}
