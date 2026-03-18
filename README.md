# Прототип сайта Института цифрового биодизайна и ИИ в медицине

Кликабельный фронтенд-прототип на **Next.js + TypeScript + Tailwind CSS**.

## Что реализовано

- App Router со страницами:
  - `/`
  - `/about`
  - `/structure`
  - `/ecosystem`
  - `/education`
  - `/testing`
  - `/partners`
  - `/projects` и `/projects/[slug]`
  - `/news` и `/news/[slug]`
  - `/contacts`
- Адаптивный layout (mobile / tablet / desktop).
- Единая система токенов через Tailwind theme + CSS variables.
- Переиспользуемые UI-компоненты (`components/*`).
- Mock data в отдельных файлах (`data/*`).
- Демо-формы без backend-интеграции с фронтенд-валидацией.

## Установка и запуск

```bash
npm install
npm run dev
```

После запуска откройте: `http://localhost:3000`

## Сборка

```bash
npm run build
npm run start
```

## Примечания

- Контент, цифры и сущности сделаны как **демо** и вынесены в `data/` для быстрой замены.
- В проекте нет CMS, авторизации и серверной обработки форм — это осознанно, в рамках прототипа.
