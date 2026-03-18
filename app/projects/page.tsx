import { Breadcrumbs } from '@/components/Breadcrumbs';
import { EmptyState } from '@/components/EmptyState';
import { FilterChips } from '@/components/FilterChips';
import { ProjectCard } from '@/components/cards';
import { projectFilters, projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Проекты' }]} />
      <h1 className="text-3xl font-semibold text-text-base">Проекты и кейсы</h1>
      <FilterChips filters={projectFilters} />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} title={p.title} description={p.solution} slug={p.slug} tags={p.tags} />
        ))}
      </div>
      {!projects.length && <EmptyState title="Проекты появятся позже" />}
    </div>
  );
}
