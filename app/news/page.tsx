import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FilterChips } from '@/components/FilterChips';
import { NewsCard } from '@/components/cards';
import { newsCategories, newsItems } from '@/data/news';

export default function NewsPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Новости' }]} />
      <h1 className="text-3xl font-semibold text-text-base">Новости</h1>
      <FilterChips filters={newsCategories} />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{newsItems.map((n) => <NewsCard key={n.slug} title={n.title} excerpt={n.excerpt} slug={n.slug} date={n.date} />)}</div>
    </div>
  );
}
