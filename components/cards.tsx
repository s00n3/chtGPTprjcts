import Link from 'next/link';
import { Card } from './Card';
import { Tag } from './Tag';

export const MetricCard = ({ label, value }: { label: string; value: string }) => <Card title={value} description={label} />;
export const AudienceCard = ({ title }: { title: string }) => <Card title={title} description="Персонализированный вход в экосистему" />;
export const ProgramCard = ({ title, description, tags, status }: { title: string; description: string; tags?: string[]; status?: string }) => (
  <Card title={title} description={description}>{tags && <div className="mt-3 flex flex-wrap gap-2">{tags.map((t) => <Tag key={t} label={t} />)}</div>}{status && <div className="mt-3 text-xs text-brand-dark">{status}</div>}</Card>
);
export const ProjectCard = ({ title, description, slug, tags }: { title: string; description: string; slug: string; tags: string[] }) => (
  <Card title={title} description={description}><div className="mt-3 flex flex-wrap gap-2">{tags.map((t) => <Tag key={t} label={t} />)}</div><Link href={`/projects/${slug}`} className="mt-4 inline-block text-sm text-brand-dark">Подробнее →</Link></Card>
);
export const NewsCard = ({ title, excerpt, slug, date }: { title: string; excerpt: string; slug: string; date: string }) => (
  <Card title={title} description={excerpt}><div className="mt-3 text-xs text-brand-dark">{date}</div><Link href={`/news/${slug}`} className="mt-4 inline-block text-sm text-brand-dark">Читать →</Link></Card>
);
