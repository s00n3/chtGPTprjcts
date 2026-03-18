'use client';
import { FormEvent, useState } from 'react';
import { Button } from './Button';

export function ContactForm({ title = 'Оставить запрос' }: { title?: string }) {
  const [ok, setOk] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOk(true);
  };

  return (
    <form onSubmit={onSubmit} className="rounded-ui border border-border-soft bg-white p-5" aria-label={title}>
      <h3 className="mb-4 text-xl font-semibold text-text-base">{title}</h3>
      <div className="grid gap-3 md:grid-cols-2">
        <input required placeholder="Имя" className="rounded-ui border border-border-subtle px-3 py-2" />
        <input placeholder="Организация" className="rounded-ui border border-border-subtle px-3 py-2" />
        <input type="email" required placeholder="Email" className="rounded-ui border border-border-subtle px-3 py-2" />
        <input placeholder="Телефон" className="rounded-ui border border-border-subtle px-3 py-2" />
      </div>
      <select className="mt-3 w-full rounded-ui border border-border-subtle px-3 py-2" defaultValue="">
        <option value="" disabled>Тип запроса</option>
        <option>Подать проект</option>
        <option>Образование</option>
        <option>Партнерство</option>
      </select>
      <textarea placeholder="Комментарий" className="mt-3 min-h-24 w-full rounded-ui border border-border-subtle px-3 py-2" />
      <div className="mt-4 flex items-center gap-4">
        <Button type="submit" variant="secondary">Отправить</Button>
        {ok && <span className="text-sm text-brand-dark">Спасибо! Заявка сохранена в демо-режиме.</span>}
      </div>
    </form>
  );
}
