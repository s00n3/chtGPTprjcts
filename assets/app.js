(function () {
  const data = window.siteData;
  const page = document.body.dataset.page;

  function header() {
    const nav = data.navigation.map(([label, href]) => `<a href="${href}">${label}</a>`).join('');
    return `<header class="header"><div class="container header-row"><a class="logo" href="/index.html">Институт цифрового биодизайна и ИИ</a><nav class="nav">${nav}</nav><a href="/pages/projects.html" class="button secondary">Подать проект</a></div></header>`;
  }

  function footer() {
    const links = data.navigation.slice(0, 6).map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join('');
    return `<footer class="footer"><div class="container grid grid-3"><section><h3>Экосистемный хаб ИИ в медицине</h3><p>Кликабельный прототип сайта с маршрутами, сценариями взаимодействия и mock data.</p></section><section><h3>Разделы</h3><ul>${links}</ul></section><section><h3>Контакты</h3><p>info@example.ru<br/>+7 (495) 000-00-00</p><p><a href="#">Политика обработки данных</a></p><p>© 2026</p></section></div></footer>`;
  }

  function breadcrumbs(items) {
    return `<div class="breadcrumbs">${items.map((it, i) => it.href ? `<a href="${it.href}">${it.label}</a>${i < items.length - 1 ? '<span>/</span>' : ''}` : `<strong>${it.label}</strong>`).join('')}</div>`;
  }

  function form(title) {
    return `<form class="card js-demo-form"><h3>${title}</h3><div class="form-grid"><input required placeholder="Имя"><input placeholder="Организация"><input required type="email" placeholder="Email"><input placeholder="Телефон"></div><select required><option value="">Тип запроса</option><option>Подать проект</option><option>Образование</option><option>Партнерство</option></select><textarea placeholder="Комментарий"></textarea><div style="margin-top:10px;display:flex;gap:12px;align-items:center"><button class="button secondary" type="submit">Отправить</button><span class="notice" hidden>Спасибо! Данные сохранены в демо-режиме.</span></div></form>`;
  }

  function cards(items, cls='grid-3') {
    return `<div class="grid ${cls}">${items.join('')}</div>`;
  }

  function home() {
    const h = data.home;
    const audience = h.audiences.map(x => `<article class="card"><h3>${x}</h3><p>Персонализированный вход в экосистему.</p></article>`);
    const pillars = h.pillars.map(([t,d]) => `<article class="card"><h3>${t}</h3><p>${d}</p></article>`);
    const process = h.process.map(x => `<article class="card">${x}</article>`);
    const stats = h.stats.map(([v,l]) => `<article class="card"><h3 style="color:var(--primary)">${v}</h3><p>${l}</p></article>`);
    const projects = data.projects.map(p => `<article class="card"><h3>${p.title}</h3><p>${p.description}</p><div>${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div><a href="/pages/project-detail.html?slug=${p.slug}">Подробнее →</a></article>`);
    const news = data.news.map(n => `<article class="card"><h3>${n.title}</h3><p>${n.excerpt}</p><p class="notice">${n.date}</p><a href="/pages/news-detail.html?slug=${n.slug}">Читать →</a></article>`);

    return `<section class="hero"><h1>${h.heroTitle}</h1><p>${h.heroSubtitle}</p><div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px"><a class="button primary" href="/pages/projects.html">Подать проект</a><a class="button ghost" href="/pages/education.html">Выбрать программу</a><a class="button ghost" href="/pages/partners.html">Обсудить партнерство</a></div></section>
    <section class="section"><h2>Быстрые входы по аудиториям</h2>${cards(audience,'grid-5')}</section>
    <section class="section"><h2>Три опоры экосистемы</h2>${cards(pillars)}</section>
    <section class="section timeline"><h2>Полный цикл работы</h2>${cards(process)}</section>
    <section class="section"><h2>Ключевые показатели (демо-контент)</h2>${cards(stats,'grid-4')}</section>
    <section class="section"><h2>Избранные проекты / кейсы</h2>${cards(projects)}</section>
    <section class="section"><h2>Новости / события</h2>${cards(news)}</section>
    <section class="section">${form('Оставить запрос')}</section>`;
  }

  function simplePage(title, subtitle, extra) {
    return `${breadcrumbs([{label:'Главная',href:'/index.html'},{label:title}])}<h1>${title}</h1><p>${subtitle}</p>${extra}`;
  }

  function structurePage() {
    const chips = data.structure.filters.map((x,i)=>`<button class="chip ${i===0?'active':''}">${x}</button>`).join('');
    const groups = data.structure.groups.map(([cluster,items])=>`<details class="card org-group" open><summary>${cluster}</summary><ul>${items.map(i=>`<li>${i}</li>`).join('')}</ul></details>`).join('');
    return simplePage('Организационная структура','Цифровой формат оргструктуры с группировкой по функциональным кластерам.',`<div class="chips">${chips}</div><section class="section grid grid-2">${groups}</section><section class="section card soft"><h3>Нижний контекстный блок</h3><ul><li>Институты вне НТДБ</li><li>Подразделения клинического центра</li><li>Индустриальные партнеры</li></ul></section>`);
  }

  function listCards(items, showMeta) {
    return cards(items.map(item => `<article class="card"><h3>${item.title}</h3><p>${item.description || item.excerpt || ''}</p>${showMeta ? `<p class="notice">${showMeta(item)}</p>` : ''}${item.tags ? `<div>${item.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>` : ''}</article>`));
  }

  function detailPage(collection, type) {
    const slug = new URLSearchParams(location.search).get('slug');
    const item = collection.find(x => x.slug === slug);
    if (!item) return simplePage('Не найдено','Материал не найден.', '<div class="card">Проверьте ссылку или вернитесь к списку.</div>');
    const crumb = breadcrumbs([{label:'Главная',href:'/index.html'},{label:type==='project'?'Проекты':'Новости',href:type==='project'?'/pages/projects.html':'/pages/news.html'},{label:item.title}]);
    return `${crumb}<h1>${item.title}</h1><p>${item.description || item.excerpt}</p>${type==='project' ? `<p><strong>Статус:</strong> ${item.status}</p><p><strong>Роль института:</strong> ${item.role}</p><p><strong>Направление:</strong> ${item.direction}</p><div>${item.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>` : `<p class="notice">${item.date} · ${item.category}</p><p>Детальный текст новости вынесен в mock data и может быть расширен.</p>`}`;
  }

  const pageMap = {
    home,
    about: () => simplePage('Об институте', 'Институт формирует экосистему полного цикла: от научной идеи до внедрения ИИ-решений в клиническую практику.', `<section class="section grid grid-2"><article class="card"><h3>Миссия</h3><p>Развивать безопасное и масштабируемое применение ИИ в медицине через образование, исследования и клиническую апробацию.</p></article><article class="card"><h3>Ключевые задачи</h3><p>Координация НИОКР, подготовка кадров, сопровождение партнерских и отраслевых проектов.</p></article><article class="card"><h3>Руководство</h3><p>Директор и профильные заместители по цифровой медицине, развитию, науке и образовательным программам.</p></article><article class="card"><h3>Совет и документы</h3><p>Научно-технологический совет, регламенты и методические материалы (демо).</p></article></section><section class="section">${form('Оставить запрос')}</section>`),
    structure: structurePage,
    ecosystem: () => simplePage('Экосистема', 'Три опоры экосистемы и полный цикл проекта для внедрения ИИ в медицине.', `<section class="section grid grid-3">${data.home.pillars.map(([t,d])=>`<article class="card"><h3>${t}</h3><p>${d}</p></article>`).join('')}</section><section class="section card"><h3>Сценарий полного цикла</h3><p>${data.home.process.join(' → ')}</p></section><section class="section">${form('Подключиться к экосистеме')}</section>`),
    education: () => simplePage('Образование', 'ИОМ, ПП, ПК, модули по ИИ, цифровая кафедра, школа 21 и региональные программы.', `<div class="chips"><button class="chip active">Все</button><button class="chip">Врачи</button><button class="chip">Студенты</button><button class="chip">Регионы</button></div><section class="section grid grid-2"><article class="card"><h3>ИОМ по цифровой медицине</h3><p>Гибкая траектория подготовки для врачей и управленцев.</p><span class="tag">ИОМ</span><span class="tag">Набор открыт</span></article><article class="card"><h3>ПП: внедрение ИИ в клинику</h3><p>Практико-ориентированная программа по трансформации процессов.</p><span class="tag">ПП</span><span class="tag">Скоро</span></article><article class="card"><h3>ПК: медицинская аналитика данных</h3><p>Повышение квалификации по клинической аналитике и визуализации.</p><span class="tag">ПК</span><span class="tag">Набор открыт</span></article><article class="card"><h3>Модули по ИИ</h3><p>Короткие курсы для разных аудиторий.</p><span class="tag">Демо</span></article></section><section class="section">${form('Оставить заявку на обучение')}</section>`),
    testing: () => simplePage('Испытания и внедрение', 'Контур сопровождения, который помогает довести ИИ-решение до практического применения.', `<section class="section grid grid-2">${['Прототипирование','Техническое тестирование','Клиническая апробация','Регистрационный маршрут','Внедрение','Методическое сопровождение'].map(x=>`<article class="card"><h3>${x}</h3><p>Демо-описание этапа и требований к проекту.</p></article>`).join('')}</section><section class="section">${form('Запрос на испытания и внедрение')}</section>`),
    partners: () => simplePage('Партнерам', 'Форматы взаимодействия для индустрии, клиник, регионов, университетов и исследовательских команд.', `<section class="section grid grid-3">${['Разработчики ИИ-решений','Производители медизделий','Клиники','Фарма','Регионы','Вузы и научные центры','Индустриальные партнеры'].map(x=>`<article class="card"><h3>${x}</h3><p>Сценарии участия в пилотах, НИОКР и образовательных инициативах.</p></article>`).join('')}</section><section class="section card soft"><h3>Форматы</h3><p>Пилоты · НИОКР · Клиническая апробация · Образовательные программы · Отраслевые проекты · Методическая поддержка · Консорциумы и кластеры.</p></section><section class="section">${form('Обсудить партнерство')}</section>`),
    projects: () => simplePage('Проекты и кейсы', 'Прикладные инициативы института и партнеров.', `<div class="chips"><button class="chip active">Все</button><button class="chip">Образование</button><button class="chip">Цифровая медицина</button><button class="chip">ИИ</button><button class="chip">Испытания</button><button class="chip">Партнерства</button></div><section class="section">${cards(data.projects.map(p=>`<article class="card"><h3>${p.title}</h3><p>${p.description}</p><p class="notice">${p.status} · ${p.direction}</p><div>${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div><a href="/pages/project-detail.html?slug=${p.slug}">Подробнее →</a></article>`))}</section>`),
    projectDetail: () => detailPage(data.projects, 'project'),
    news: () => simplePage('Новости', 'Актуальные события экосистемы, образовательные и партнерские анонсы.', `<div class="chips"><button class="chip active">Все</button><button class="chip">Образование</button><button class="chip">Партнерства</button><button class="chip">Исследования</button><button class="chip">События</button></div><section class="section">${cards(data.news.map(n=>`<article class="card"><h3>${n.title}</h3><p>${n.excerpt}</p><p class="notice">${n.date} · ${n.category}</p><a href="/pages/news-detail.html?slug=${n.slug}">Читать →</a></article>`))}</section>`),
    newsDetail: () => detailPage(data.news, 'news'),
    contacts: () => simplePage('Контакты', 'Понятный вход для запросов по партнерству, образованию, испытаниям и коммуникациям.', `<section class="section grid grid-2"><article class="card"><h3>Общие контакты</h3><p>${data.contacts.base.join('<br/>')}</p></article><article class="card"><h3>Карта</h3><div class="map-placeholder">Карта-заглушка</div></article></section><section class="section grid grid-2">${data.contacts.channels.map(([t,e])=>`<article class="card"><h3>${t}</h3><p>${e}</p></article>`).join('')}</section><section class="section">${form('Общая форма контакта')}</section>`)
  };

  document.body.insertAdjacentHTML('afterbegin', header());
  const main = document.querySelector('#app');
  main.innerHTML = pageMap[page] ? pageMap[page]() : '<h1>Страница не найдена</h1>';
  document.body.insertAdjacentHTML('beforeend', footer());

  document.querySelectorAll('.js-demo-form').forEach((f) => {
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      f.querySelector('.notice').hidden = false;
      f.reset();
    });
  });
})();
