# Прототип сайта Института цифрового биодизайна и ИИ в медицине (HTML/CSS/JS)

Проект полностью переписан на **чистые HTML, CSS и JavaScript** без Next.js/React.

## Структура

- `index.html` — главная
- `pages/*.html` — внутренние страницы:
  - `about.html`, `structure.html`, `ecosystem.html`, `education.html`, `testing.html`, `partners.html`, `projects.html`, `project-detail.html`, `news.html`, `news-detail.html`, `contacts.html`
- `assets/styles.css` — единые дизайн-токены, адаптивная сетка, UI-состояния
- `assets/app.js` — общий рендер хедера/футера, страниц, карточек и демо-форм
- `data-static/site-data.js` — все mock data и редактируемый контент

## Запуск локально

> Важно: из-за абсолютных путей (`/assets/...`) лучше запускать через локальный HTTP-сервер.

### Вариант 1: Python

```bash
python3 -m http.server 8080
```

Откройте: `http://localhost:8080`

### Вариант 2: любой другой static server

Подойдет `npx serve`, Live Server в VS Code и т.д.

## Что реализовано

- Полный набор страниц по ТЗ.
- Единая навигация, sticky header, footer и CTA-блоки.
- Русскоязычный осмысленный контент-заглушка.
- Mock data в отдельном файле.
- Адаптивность для mobile / tablet / desktop.
- Демо-формы (без отправки на сервер) с client-side валидацией и success-state.
- Базовая accessibility-поддержка (`focus-visible`, семантика, заметные интерактивные состояния).

## Ограничения прототипа

- Нет CMS, backend, авторизации, интеграций.
- Все цифры и факты являются демо-контентом и легко редактируются.
