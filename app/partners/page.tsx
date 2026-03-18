import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card } from '@/components/Card';
import { CTASection } from '@/components/CTASection';
import { partnerFormats, partnerSegments } from '@/data/partners';

export default function PartnersPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Партнерам' }]} />
      <h1 className="text-3xl font-semibold text-text-base">Партнерам</h1>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{partnerSegments.map((s) => <Card key={s} title={s} description="Сценарии участия в экосистеме и проектном контуре института." />)}</div>
      <Card title="Форматы взаимодействия" description={partnerFormats.join(' • ')} />
      <CTASection title="Обсудить партнерский сценарий" description="Подберем модель взаимодействия под этап зрелости продукта и задачи организации." buttonLabel="Оставить запрос" />
    </div>
  );
}
