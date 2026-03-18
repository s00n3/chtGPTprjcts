import Link from 'next/link';
import { navigation } from '@/data/navigation';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border-subtle bg-surface-card/40">
      <div className="container-ui grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-text-base">Экосистемный хаб ИИ в медицине</h3>
          <p className="mt-2 text-sm">Прототип сайта института для демонстрации структуры, сценариев и точек входа.</p>
        </div>
        <div>
          <h3 className="font-semibold text-text-base">Разделы</h3>
          <ul className="mt-2 space-y-1 text-sm">
            {navigation.slice(0, 6).map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-text-base">Контакты</h3>
          <p className="mt-2 text-sm">info@example.ru · +7 (495) 000-00-00</p>
          <Link href="#" className="mt-2 inline-block text-sm text-brand-dark">Политика обработки данных</Link>
          <p className="mt-4 text-xs">© 2026 Институт цифрового биодизайна и ИИ</p>
        </div>
      </div>
    </footer>
  );
}
