import { AudienceCard, NewsCard, ProgramCard, ProjectCard } from '@/components/cards';
import { Button } from '@/components/Button';
import { CTASection } from '@/components/CTASection';
import { HeroSection } from '@/components/HeroSection';
import { SectionHeading } from '@/components/SectionHeading';
import { StatsGrid } from '@/components/StatsGrid';
import { Timeline } from '@/components/Timeline';
import { homeData } from '@/data/home';
import { projects } from '@/data/projects';
import { newsItems } from '@/data/news';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <HeroSection
        title={homeData.hero.title}
        subtitle={homeData.hero.subtitle}
        actions={
          <>
            <Button href="/projects">Подать проект</Button>
            <Button href="/education" variant="tertiary">Выбрать программу</Button>
            <Button href="/partners" variant="tertiary">Обсудить партнерство</Button>
          </>
        }
      />

      <section>
        <SectionHeading title="Быстрые входы по аудиториям" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">{homeData.audiences.map((item) => <AudienceCard key={item} title={item} />)}</div>
      </section>

      <section>
        <SectionHeading title="Три опоры экосистемы" />
        <div className="grid gap-4 md:grid-cols-3">{homeData.pillars.map((p) => <ProgramCard key={p.title} title={p.title} description={p.description} />)}</div>
      </section>

      <section>
        <SectionHeading title="Полный цикл работы" subtitle="От идеи до внедрения ИИ-решения в медицине." />
        <Timeline steps={homeData.process} />
      </section>

      <section>
        <SectionHeading title="Ключевые показатели (демо-контент)" />
        <StatsGrid items={homeData.stats} />
      </section>

      <section>
        <SectionHeading title="Избранные проекты / кейсы" />
        <div className="grid gap-4 md:grid-cols-3">{projects.map((p) => <ProjectCard key={p.slug} title={p.title} description={p.description} slug={p.slug} tags={p.tags} />)}</div>
      </section>

      <section>
        <SectionHeading title="Новости / события" />
        <div className="grid gap-4 md:grid-cols-3">{newsItems.map((n) => <NewsCard key={n.slug} title={n.title} excerpt={n.excerpt} slug={n.slug} date={n.date} />)}</div>
      </section>

      <CTASection title="Готовы обсудить инициативу?" description="Оставьте запрос, и команда института предложит сценарий взаимодействия: образовательный, исследовательский или проектный." buttonLabel="Оставить запрос" />
    </div>
  );
}
