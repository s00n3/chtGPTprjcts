import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card } from '@/components/Card';
import { ContactForm } from '@/components/ContactForm';

export default function TestingPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Испытания и внедрение' }]} />
      <h1 className="text-3xl font-semibold text-text-base">Испытания и внедрение</h1>
      <p>Маршрут для команд, которым нужно довести ИИ-разработку до практического применения в медицинском контуре.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {['Прототипирование', 'Техническое тестирование', 'Клиническая апробация', 'Регистрационный маршрут', 'Внедрение', 'Методическое сопровождение'].map((item) => (
          <Card key={item} title={item} description="Демо-описание этапа и требований к проекту." />
        ))}
      </div>
      <ContactForm title="Запрос на испытания и внедрение" />
    </div>
  );
}
