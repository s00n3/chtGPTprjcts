import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card } from '@/components/Card';
import { ContactForm } from '@/components/ContactForm';
import { baseContacts, contactChannels } from '@/data/contacts';

export default function ContactsPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Контакты' }]} />
      <h1 className="text-3xl font-semibold text-text-base">Контакты</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card title="Общие контакты" description={`${baseContacts.address}. ${baseContacts.phone}. ${baseContacts.email}. ${baseContacts.hours}.`} />
        <Card title="Карта" description="Интерактивная карта будет подключена на следующем этапе. Сейчас используется заглушка." />
      </div>
      <div className="grid gap-4 md:grid-cols-2">{contactChannels.map((channel) => <Card key={channel.title} title={channel.title} description={channel.email} />)}</div>
      <ContactForm title="Общая форма контакта" />
    </div>
  );
}
