import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card } from '@/components/Card';
import { FilterChips } from '@/components/FilterChips';
import { OrgChart } from '@/components/OrgChart';
import { SectionHeading } from '@/components/SectionHeading';
import { contextEntities, structureFilters, structureGroups } from '@/data/structure';
import { subdivisions } from '@/data/subdivisions';

export default function StructurePage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Организационная структура' }]} />
      <SectionHeading title="Подразделения и оргструктура" subtitle="Обязательный раздел с интерактивной схемой и карточками ключевых подразделений." />
      <div className="grid gap-4 md:grid-cols-3">
        {subdivisions.map((unit) => (
          <Card key={unit.slug} title={unit.title} description={`${unit.description} Руководитель: ${unit.lead}.`} />
        ))}
      </div>
      <FilterChips filters={structureFilters} />
      <OrgChart groups={structureGroups} />
      <section className="rounded-ui border border-border-soft bg-surface-card p-5">
        <h2 className="text-xl font-semibold text-text-base">Контекст взаимодействия</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          {contextEntities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
