import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card } from '@/components/Card';
import { CTASection } from '@/components/CTASection';
import { Quote } from '@/components/Quote';

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Об институте' }]} />
      <h1 className="text-3xl font-semibold text-text-base">Об институте</h1>
      <p>Институт формирует экосистему разработки, апробации и внедрения ИИ в медицине в связке науки, образования и клинической практики.</p>
      <Quote text="Наша миссия — ускорять путь от научной идеи до безопасного и масштабируемого медицинского внедрения." />
      <div className="grid gap-4 md:grid-cols-2">
        <Card title="Основные задачи" description="Координация НИОКР, развитие кадров, методическая и проектная поддержка внедрения ИИ-решений." />
        <Card title="Руководство" description="Директор и профильные заместители обеспечивают развитие цифровой медицины, науки и образовательных программ." />
        <Card title="Научно-технологический совет" description="Экспертиза приоритетов, маршрутов испытаний и проектных инициатив." />
        <Card title="Документы и регламенты" description="Раздел для локальных актов, требований и методических материалов (демо)." />
      </div>
      <CTASection title="Нужна консультация по направлениям института?" description="Свяжитесь с командой, чтобы подобрать релевантный формат сотрудничества." buttonLabel="Связаться" />
    </div>
  );
}
