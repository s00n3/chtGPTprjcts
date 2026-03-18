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
      <h1 className="text-3xl font-semibold text-text-base">Образование</h1>
      <p>Программы для студентов, врачей, исследователей, региональных команд и индустриальных партнёров.</p>
      <FilterChips filters={['Все', 'Студенты', 'Врачи', 'Регионы', 'Партнёры']} />
      <div className="grid gap-4 md:grid-cols-2">
        {educationPrograms.map((p) => (
          <ProgramCard
            key={p.slug}
            title={p.title}
            description={`${p.format} · ${p.duration}. Результат: ${p.outcomes[0]}`}
            tags={p.audience}
            status="Набор открыт"
          />
        ))}
      </div>
      <ContactForm title="Оставить заявку на обучение" />
      <CTASection title="Нужен подбор программы?" description="Поможем выбрать образовательный трек под роль, задачи и уровень команды." buttonLabel="Получить консультацию" />
    </div>
  );
}
