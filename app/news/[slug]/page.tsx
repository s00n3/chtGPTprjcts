import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { newsItems } from '@/data/news';

export default async function NewsDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = newsItems.find((item) => item.slug === slug);
  if (!article) return notFound();

  return (
    <article className="space-y-5">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Новости', href: '/news' }, { label: article.title }]} />
      <h1 className="text-3xl font-semibold text-text-base">{article.title}</h1>
      <p className="text-sm text-brand-dark">{article.date} · {article.category}</p>
      <p>{article.excerpt}</p>
      <p>Детальный контент новости доступен как демо-заглушка и редактируется через data/news.ts.</p>
    </article>
  );
}
