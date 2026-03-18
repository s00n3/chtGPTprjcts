import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card } from '@/components/Card';
import { CTASection } from '@/components/CTASection';
import { SectionHeading } from '@/components/SectionHeading';
import { homeData } from '@/data/home';

const ecosystemSections = [
  'Научно-образовательная база',
  'Разработка и прототипирование',
  'Клиническая валидация и испытания',
  'Производство и регистрационный контур',
  'Индустриальная интеграция'
];

export default function EcosystemPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Экосистема' }]} />
      <SectionHeading title="Экосистема AI-разработок" subtitle="Главный смысловой раздел: как создаются, валидируются и внедряются медицинские AI-решения." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {ecosystemSections.map((item) => (
          <Card key={item} title={item} description="Описание этапа, роли подразделений и доступных форматов сотрудничества." />
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {homeData.pillars.map((p) => (
          <Card key={p.title} title={p.title} description={p.description} />
        ))}
      </div>
      <Card title="Путь полного цикла" description={homeData.aiPath.join(' → ')} />
      <CTASection title="Подключиться к экосистеме" description="Выберите сценарий: проект, пилот, испытание или образовательный трек." buttonLabel="Обсудить участие" />
    </div>
  );
}
