import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Tag } from '@/components/Tag';
import { projects } from '@/data/projects';

const statusMap: Record<string, string> = {
  concept: 'Концепт',
  pilot: 'Пилот',
  'clinical-validation': 'Клиническая валидация',
  deployed: 'Внедрено'
};

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Проекты', href: '/projects' }, { label: project.title }]} />
      <h1 className="text-3xl font-semibold text-text-base">{project.title}</h1>
      <p>
        <strong>Задача:</strong> {project.challenge}
      </p>
      <p>
        <strong>Решение:</strong> {project.solution}
      </p>
      <p>
        <strong>Статус:</strong> {statusMap[project.status]}
      </p>
      <p>
        <strong>Результаты:</strong>
      </p>
      <ul className="list-disc space-y-1 pl-5">
        {project.results.map((result) => (
          <li key={result}>{result}</li>
        ))}
      </ul>
      <p>
        <strong>Партнёры:</strong> {project.partners.join(', ')}
      </p>
      <div className="flex flex-wrap gap-2">{project.tags.map((tag) => <Tag key={tag} label={tag} />)}</div>
    </div>
  );
}
