import { Subdivision } from '@/lib/types';

export const subdivisions: Subdivision[] = [
  {
    title: 'Центр цифровой медицины и ИИ',
    slug: 'center-digital-medicine-ai',
    type: 'center',
    description: 'Разработка, пилотирование и внедрение AI-решений в медицинские процессы.',
    lead: 'д.м.н. Анна Петрова',
    competencies: ['Медицинский AI', 'Клинические пилоты', 'Интеграция в процессы клиники'],
    contacts: { email: 'ai-center@example.ru', phone: '+7 (495) 000-00-10' },
    linkedProjects: ['ai-radiology-pilot', 'patient-routing-service']
  },
  {
    title: 'Центр разработки информационных систем и цифровых сервисов',
    slug: 'center-digital-services',
    type: 'center',
    description: 'Проектирование платформ и сервисов для медицинских и образовательных контуров.',
    lead: 'к.т.н. Сергей Иванов',
    competencies: ['Архитектура ИС', 'Интеграционные сервисы', 'UX цифровых продуктов'],
    contacts: { email: 'services-center@example.ru', phone: '+7 (495) 000-00-11' },
    linkedProjects: ['patient-routing-service']
  },
  {
    title: 'Центр математического моделирования в разработке лекарств',
    slug: 'center-drug-modeling',
    type: 'center',
    description: 'Математические и вычислительные модели для ускорения фармацевтических исследований.',
    lead: 'д.ф.-м.н. Мария Смирнова',
    competencies: ['Фармакомоделирование', 'Биостатистика', 'Вычислительные эксперименты'],
    contacts: { email: 'modeling-center@example.ru', phone: '+7 (495) 000-00-12' },
    linkedProjects: ['drug-modeling-platform']
  }
];
