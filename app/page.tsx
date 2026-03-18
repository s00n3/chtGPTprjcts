import { ProgramCard, ProjectCard } from '@/components/cards';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { ContactForm } from '@/components/ContactForm';
import { HeroSection } from '@/components/HeroSection';
import { SectionHeading } from '@/components/SectionHeading';
import { StatsGrid } from '@/components/StatsGrid';
import { Timeline } from '@/components/Timeline';
import { homeData } from '@/data/home';
import { projects } from '@/data/projects';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <HeroSection
        title={homeData.hero.title}
        subtitle={homeData.hero.subtitle}
        actions={
          <>
            <Button href="/partners">Обсудить проект</Button>
            <Button href="/ecosystem" variant="tertiary">
              Посмотреть экосистему
            </Button>
          </>
        }
      />

      <section>
        <SectionHeading title="Почему это важно" subtitle="Чем институт отличается как экосистема полного цикла." />
        <div className="grid gap-4 md:grid-cols-3">
          {homeData.whyImportant.map((item) => (
            <Card key={item} title={item} description="" />
          ))}
        </div>
      </section>

      <section>
        <SectionHeading title="4 опоры экосистемы" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {homeData.pillars.map((p) => (
            <ProgramCard key={p.title} title={p.title} description={p.description} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeading title="Путь AI-решения" subtitle="Линейная схема от команды до внедрения." />
        <Timeline steps={homeData.aiPath} />
      </section>

      <section>
        <SectionHeading title="Ключевые подразделения" />
        <div className="grid gap-4 md:grid-cols-3">
          {homeData.subdivisions.map((item) => (
            <Card key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeading title="Избранные проекты и кейсы" subtitle="Демо-набор проектов с краткой пользой и тегами." />
        <div className="grid gap-4 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} title={p.title} description={p.challenge} slug={p.slug} tags={p.tags} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeading title="Образовательные треки" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {homeData.educationTracks.map((item) => (
            <ProgramCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeading title="Форматы сотрудничества" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {homeData.collaborationFormats.map((item) => (
            <Card key={item} title={item} description="Запуск под задачи партнёра: от идеи и пилота до внедрения и масштабирования." />
          ))}
        </div>
      </section>

      <section>
        <SectionHeading title="Контакты и быстрый запрос" subtitle="Выберите тип обращения и оставьте заявку." />
        <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4 rounded-ui border border-border-soft bg-surface-card p-5">
            <Card title="Маршруты обращения" description="Проект, пилот, испытания, образовательная программа или индустриальное партнёрство." />
            <StatsGrid items={homeData.stats} />
          </div>
          <ContactForm title="Обсудить взаимодействие" />
        </div>
      </section>
    </div>
  );
}
