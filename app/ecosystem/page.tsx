import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card } from '@/components/Card';
import { CTASection } from '@/components/CTASection';
import { SectionHeading } from '@/components/SectionHeading';
import { homeData } from '@/data/home';

export default function EcosystemPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Экосистема' }]} />
      <SectionHeading title="Экосистема полного цикла" subtitle="От научной гипотезы до клинической апробации и масштабирования в здравоохранении." />
      <div className="grid gap-4 md:grid-cols-3">{homeData.pillars.map((p) => <Card key={p.title} title={p.title} description={p.description} />)}</div>
      <Card title="Сценарий полного цикла" description={homeData.process.join(' → ')} />
      <Card title="Форматы сотрудничества" description="Пилоты, НИОКР, образовательные и отраслевые проекты, методическая и инфраструктурная поддержка." />
      <CTASection title="Подключиться к экосистеме" description="Выберите сценарий: проект, испытания, образовательный трек или партнерский формат." buttonLabel="Обсудить участие" />
    </div>
  );
}
