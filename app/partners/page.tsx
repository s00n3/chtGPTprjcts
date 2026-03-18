import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card } from '@/components/Card';
import { CTASection } from '@/components/CTASection';
import { ContactForm } from '@/components/ContactForm';
import { partnerFormats, partnerSegments } from '@/data/partners';

export default function PartnersPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Партнёрам' }]} />
      <h1 className="text-3xl font-semibold text-text-base">Партнёрам</h1>
      <Card title="Какие задачи берём в работу" description="Совместная разработка, пилотирование, клиническая валидация, образовательные и интеграционные проекты." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {partnerSegments.map((s) => (
          <Card key={s} title={s} description="Сценарии участия в экосистеме института и маршруты запуска совместных инициатив." />
        ))}
      </div>
      <Card title="Форматы взаимодействия" description={partnerFormats.join(' • ')} />
      <div className="grid gap-4 md:grid-cols-2">
        <Card title="Этапы запуска проекта" description="1) Первичный запрос → 2) Экспертный разбор → 3) Проектный план → 4) Пилот/испытание → 5) Внедрение." />
        <Card title="Входные требования" description="Описание задачи, ожидаемые результаты, данные и доступ к пилотному контуру, целевые сроки и команда." />
      </div>
      <ContactForm title="Контактное окно для партнёров" />
      <CTASection title="Обсудить партнёрский сценарий" description="Подберём формат взаимодействия под этап зрелости продукта и цели вашей организации." buttonLabel="Оставить заявку" />
    </div>
  );
}
