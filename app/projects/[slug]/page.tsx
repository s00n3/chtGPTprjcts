import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Tag } from '@/components/Tag';
import { projects } from '@/data/projects';

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Проекты', href: '/projects' }, { label: project.title }]} />
      <h1 className="text-3xl font-semibold text-text-base">{project.title}</h1>
      <p>{project.description}</p>
      <p><strong>Статус:</strong> {project.status}</p>
      <p><strong>Роль института:</strong> {project.role}</p>
      <p><strong>Направление:</strong> {project.direction}</p>
      <div className="flex gap-2">{project.tags.map((tag) => <Tag key={tag} label={tag} />)}</div>
    </div>
  );
}
