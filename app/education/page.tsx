import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTASection } from '@/components/CTASection';
import { FilterChips } from '@/components/FilterChips';
import { ProgramCard } from '@/components/cards';
import { ContactForm } from '@/components/ContactForm';
import { educationPrograms } from '@/data/education';

export default function EducationPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Образование' }]} />
      <h1 className="text-3xl font-semibold text-text-base">Образовательные программы</h1>
      <p>ИОМ, ПП, ПК, модули по ИИ, цифровая кафедра, Школа 21 и программы для региональных команд.</p>
      <FilterChips filters={['Все', 'Врачи', 'Студенты', 'Регионы', 'Партнеры']} />
      <div className="grid gap-4 md:grid-cols-2">{educationPrograms.map((p) => <ProgramCard key={p.title} title={p.title} description={p.description} tags={p.tags} status={p.status} />)}</div>
      <ContactForm title="Оставить заявку на обучение" />
      <CTASection title="Нужен подбор программы?" description="Команда института поможет выбрать трек под роль и задачи вашей организации." buttonLabel="Получить консультацию" />
    </div>
  );
}
