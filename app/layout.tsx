import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Институт цифрового биодизайна и ИИ в медицине',
  description: 'Прототип экосистемного сайта: от идеи до внедрения ИИ-решений в медицине.',
  openGraph: {
    title: 'Экосистема ИИ в медицине',
    description: 'Образование, исследования, разработка и клиническая апробация.'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main className="container-ui section-space">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
