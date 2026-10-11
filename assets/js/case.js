(() => {
  "use strict";

  const projects = {
    atom: {
      category: "Мобильность · Мобильное приложение", pageTitle: "ATOM — приложение для управления электромобилем",
      projectName: "ATOM",
      title: "ATOM — приложение для владельца электромобиля",
      deck: "Спроектировал сценарии доступа, климата, зарядки и обслуживания автомобиля. Показываю экраны климат-контроля и истории заряда, а также фрагмент дизайн-системы.",
      hero: "assets/cases/atom-3d.png", heroAlt: "3D-визуализация электромобиля ATOM", heroCaption: "3D-визуализация ATOM",
      meta: [["Продукт", "Приложение для владельца электромобиля"], ["Моя роль", "Сценарии и UX/UI-дизайн"], ["Проработано", "Доступ · климат · зарядка · сервис"], ["В открытом кейсе", "Экраны · 3D · дизайн-система"]],
      contextTitle: "Собрать повседневные задачи владельца в одном приложении.",
      context: "По брифу приложение должно было работать как цифровой ключ к автомобилю. Помимо доступа, в нём нужно было связать управление климатом и зарядкой с профилем машины, поездками и обслуживанием.",
      roleTitle: "Спроектировал сценарии и довёл интерфейс до системы компонентов.",
      roleCopy: "Начал с анализа существующих решений и пользовательских действий. Затем подготовил прототипы, проверял гипотезы и проработал финальные экраны вместе с библиотекой компонентов.",
      role: ["Сценарии доступа, климата и зарядки", "Прототипы ключевых действий владельца", "Проверка и доработка дизайн-гипотез", "Финальные экраны и библиотека компонентов", "3D-визуализация автомобиля"],
      processTitle: "От действий владельца к интерфейсу.",
      processIntro: "Работа шла от сценариев управления автомобилем к прототипам и единой системе интерфейса.",
      process: [["01", "Разложил задачи", "Выделил доступ к автомобилю, климат, зарядку, поездки и обслуживание как отдельные сценарии."], ["02", "Собрал прототипы", "Проработал последовательность действий и переходы в ключевых сценариях."], ["03", "Проверил гипотезы", "Дорабатывал решения после проверки прототипов и обсуждения с командой."], ["04", "Собрал систему", "Подготовил финальные экраны, компоненты и их состояния для последовательного интерфейса."]],
      galleryTitle: "Экраны и система интерфейса.",
      galleryIntro: "Примеры из проектного макета показывают управление климатом, историю заряда и компоненты интерфейса. Это макеты, а не снимки запущенного продукта.",
      gallery: [{src:"assets/cases/atom-climate-screen.png",alt:"Макет экрана ATOM: климат-контроль, подогрев и показатели воздуха в салоне",caption:"01 · Климат и комфорт в салоне",description:"На одном экране собраны управление климатом и подогревом, температура и качество воздуха. Пользователь видит состояние салона перед действием.",screen:true,webp:false},{src:"assets/cases/atom-charge-history.png",alt:"Макет экрана ATOM: график заряда и расхода батареи по дням",caption:"02 · История заряда и расхода",description:"График и разбивка по дням показывают зарядку, расход энергии и рекуперацию в одном представлении.",screen:true,webp:false},{src:"assets/cases/atom-system.png",alt:"Фрагмент дизайн-системы ATOM: типографика, иконки, поля, кнопки и состояния",caption:"03 · Компоненты и состояния",description:"Типографика, навигация, иконки, поля и кнопки демонстрируют системную часть проекта.",wide:true}],
      resultTitle: "Подготовил сценарии, финальные экраны и библиотеку компонентов.",
      result: "Результат моей работы — UX/UI ключевых действий владельца, финальные экраны и система интерфейсных элементов. Здесь показаны два примера экранов, 3D-визуализация и фрагмент дизайн-системы.",
      factLabel: "Что показано",
      metricFact: "Макеты климата и истории заряда, 3D-визуализация автомобиля и фрагмент библиотеки компонентов.",
      ideasLabel: "Граница открытого кейса",
      metricIdeas: "Полные сценарии доступа и обслуживания, результаты тестирования и показатели продуктового эффекта здесь не опубликованы.",
      refs: [{label:"Сайт ATOM",url:"https://atom.auto/"},{label:"Климат в Figma",url:"https://www.figma.com/design/eHAaAiCBm7kGXgnPbg2T9B/Driver-app-ATOM?node-id=6491-101672"},{label:"Заряд в Figma",url:"https://www.figma.com/design/eHAaAiCBm7kGXgnPbg2T9B/Driver-app-ATOM?node-id=7193-110355"}]
    },
    keycount: {
      category: "Финтех · Продукт с нуля", pageTitle: "Keycount — финансовый суперапп",
      projectName: "Keycount",
      title: "Keycount — финансовый суперапп",
      deck: "Собрал архитектуру и часть MVP приложения, в котором банковские карты, криптобиржи и кошельки видны в одном обзоре.",
      hero: "assets/cases/keycount-exchanges.png", heroAlt: "Экраны Keycount для обзора криптоактивов", heroCaption: "Обзор активов и динамики",
      meta: [["Продукт", "Обзор финансовых активов"], ["Моя роль", "Архитектура и UX/UI-дизайн"], ["Показано", "User flow · обзор активов · аккаунты"], ["Состояние", "Часть макетов передана в разработку"]],
      contextTitle: "Показать активы из разных источников в одном месте.",
      context: "Идея Keycount — объединить банковские карты, криптобиржи и кошельки. Пользователю нужен путь от добавления источника к общему обзору активов; подписка открывает сводную статистику по подключённым продуктам.",
      roleTitle: "Начал с архитектуры, затем спроектировал экраны части MVP.",
      roleCopy: "По брифу собрал структуру разделов и user flow. После согласования сценариев подготовил прототипы и визуальные экраны, часть макетов передал в разработку.",
      role: ["Информационная архитектура разделов", "Сценарии добавления и просмотра источников", "Прототипы для согласования", "Визуальная концепция и экраны части MVP"],
      processTitle: "Сначала структура, затем экраны.",
      processIntro: "Схема сценариев определила, как пользователь попадает от входа в приложение к активам, аккаунтам и настройкам.",
      process: [["01", "Разделы", "Разделил приложение на обзор активов, подключённые аккаунты и настройки."], ["02", "Переходы", "Отразил вход, добавление источника и основные переходы в user flow."], ["03", "Состояния", "Проработал обзор активов, список аккаунтов и пустое состояние без подключений."], ["04", "Передача", "После согласования сценариев подготовил визуальные макеты части MVP для разработки."]],
      galleryTitle: "От схемы сценариев к экранам.",
      galleryIntro: "Три опубликованных материала показывают структуру продукта, обзор активов и состояния раздела аккаунтов.",
      gallery: [{src:"assets/cases/keycount-userflow.png",alt:"Карта сценариев Keycount с разделами активов, аккаунтов и настроек",caption:"01 · Карта пользовательских сценариев",description:"Схема связывает вход в приложение с тремя основными разделами: активы, аккаунты и настройки. По ней видно, как организованы переходы до отрисовки экранов.",wide:true},{src:"assets/cases/keycount-exchanges.png",alt:"Экраны Keycount с обзором активов, бирж и динамики",caption:"02 · Обзор активов",description:"Экраны показывают разные представления финансовых данных: общую картину, биржи и динамику активов."},{src:"assets/cases/keycount-accounts.png",alt:"Список подключённых карт и бирж рядом с пустым состоянием Keycount",caption:"03 · Аккаунты и пустое состояние",description:"Рядом показаны два состояния одного раздела: подключённые счета и экран без добавленных источников."}],
      resultTitle: "Согласовал сценарии и передал часть MVP в разработку.",
      result: "Подготовил архитектуру, user flow, прототипы и визуальные макеты части проекта. В открытом кейсе можно проследить связь между схемой разделов и тремя группами экранов.",
      factLabel: "Что показано",
      metricFact: "Карта сценариев, обзор активов, список подключённых аккаунтов и пустое состояние.",
      ideasLabel: "Граница открытого кейса",
      metricIdeas: "Часть MVP была передана в разработку; данные о запуске, использовании и продуктовом эффекте здесь не представлены.",
      refs: [{label:"Сайт Keycount",url:"https://keycount.io/#/home"},{label:"Макет в Figma",url:"https://www.figma.com/file/BwZamJZ2AXmrfVGjdmjqHF/KeyCount?type=design&mode=design&t=RiVFM0zoICtinTai-7"}]
    },
    bakong: {
      category: "Банкинг · Редизайн", pageTitle: "Bakong — редизайн банковского приложения",
      projectName: "Bakong",
      title: "Bakong — редизайн мобильного банкинга",
      deck: "Обновление ключевых сценариев банковского приложения и веб-банкинга с фокусом на понятность пользовательских действий.",
      hero: "assets/cases/bakong-home-crop.png", heroAlt: "Концепт главного экрана мобильного банкинга Bakong", heroCaption: "Концепт мобильного интерфейса",
      meta: [["Продукт", "Мобильное приложение и веб-банкинг"], ["Моя роль", "UX/UI-дизайн"], ["Фокус", "Исследование · прототипы · тестирование"], ["Система", "Обновление библиотеки компонентов"]],
      contextTitle: "Сделать следующий шаг в банковском сценарии понятнее.",
      context: "Пользователям не всегда было понятно, что делать дальше в банковских сценариях. В редизайне опирался на количественные и качественные данные; особое внимание уделил UX и развитию библиотеки компонентов.",
      roleTitle: "Исследование и проверка решений — вместе с обновлением интерфейса.",
      roleCopy: "Изучил рынок и конкурентов, спроектировал ключевые сценарии, сформулировал гипотезы и проверил дизайн-решения.",
      role: ["Анализ конкурентной среды", "Прототипы ключевых сценариев", "Формирование гипотез для бизнес-задач", "Проверка и дизайн-ревью", "Доработка библиотеки компонентов"],
      processIntro: "Провёл исследование, сформулировал гипотезы, подготовил прототипы и проверил решения в тестировании и дизайн-ревью.",
      process: [["01", "Исследование", "Собрал референсы и изучил конкурентные решения."], ["02", "Гипотезы", "Сформулировал направления улучшения ключевых банковских сценариев."], ["03", "Прототипы", "Подготовил варианты интерфейса и проверил решения."], ["04", "Доработка", "Провёл дизайн-ревью и обновил отдельные компоненты интерфейса."]],
      galleryIntro: "Показываю главный экран и фрагмент библиотеки компонентов.",
      gallery: [{src:"assets/cases/bakong-home-crop.png",alt:"Главный экран приложения Bakong с банковскими счетами и действиями",caption:"Главный экран: счета и быстрые действия",wide:true,showcase:true},{src:"assets/cases/bakong-system.png",alt:"Фрагмент библиотеки компонентов Bakong",caption:"UI kit и состояния компонентов",wide:true}],
      resultTitle: "Обновил ключевые экраны и компоненты.",
      result: "Опирался на количественные и качественные данные, переработал ключевые экраны и компоненты. В публичной подборке показываю главный экран и UI kit.",
      metricFact: "Использовал количественные и качественные данные; конкретные значения до и после в этом кейсе не приведены.",
      metricIdeas: "Чтобы показать эффект редизайна, можно подтвердить успешность выполнения ключевых задач, время на перевод или депозит, ошибки и отказы в сценариях.",
      refs: [{label:"Soramitsu",url:"https://www.soramitsu.co.jp/"},{label:"Макет в Figma",url:"https://www.figma.com/file/O2vf6uqgwKrnmaGhdL4CaD/Bakong-Mobile?type=design&node-id=158%3A3736&mode=design&t=HjFN7ZvuMhEl07h9-1"}]
    },
    modulbank: {
      category: "B2B · Внутренний сервис", pageTitle: "Модуль Банк — кабинет сотрудника",
      projectName: "Модуль Банк",
      title: "Модуль Банк — кабинет сотрудника",
      deck: "Внутренний веб-сервис для сотрудников банка: оформление заявок на банковские продукты и работа с данными по заявкам.",
      hero: "assets/cases/modul-auth.png", heroAlt: "Экран регистрации в личном кабинете Модуль Банка", heroCaption: "Регистрация и вход в кабинет",
      meta: [["Продукт", "Веб-сервис · личный кабинет"], ["Пользователи", "Сотрудники банка"], ["Моя роль", "UX/UI-дизайн всех сценариев"], ["Основа", "Техническое задание и дизайн-система"]],
      contextTitle: "Рабочее пространство для оформления банковских заявок.",
      context: "Задача — создать личный кабинет, в котором сотрудники банка могут оформлять заявки на банковские продукты. В интерфейсе предусмотрены сценарии авторизации, работы с заявками и разделом сотрудников.",
      roleTitle: "От структуры по техническому заданию — к UX/UI всех сценариев.",
      roleCopy: "Спроектировал архитектуру и основные сценарии, подготовил wireframes, а после согласования проработал интерфейс в рамках существующей дизайн-системы.",
      role: ["Информационная архитектура по ТЗ", "Анализ конкурентных решений", "Прототипирование ключевых сценариев", "Разработка визуальной концепции", "Полная проработка сценариев в рамках UI"],
      processIntro: "Разобрал требования, согласовал wireframes и затем подготовил финальный интерфейс.",
      process: [["01", "Требования", "Разобрал техническое задание и структуру банковского сервиса."], ["02", "Сценарии", "Собрал пользовательские потоки и прототипы ключевых действий."], ["03", "Wireframes", "Подготовил каркас экранов и согласовал его до визуальной детализации."], ["04", "UI", "Оформил UX/UI всех описанных сценариев по дизайн-системе."]],
      galleryIntro: "Показываю экран регистрации. Материалы с заявками и данными сотрудников не публикую: они содержат персональные сведения.",
      gallery: [{src:"assets/cases/modul-auth.png",alt:"Экран регистрации сотрудника в кабинете Модуль Банка",caption:"Авторизация и регистрация сотрудника",wide:true}],
      resultTitle: "Проработал UX/UI всех сценариев после согласования wireframes.",
      result: "После утверждения wireframes спроектировал UX/UI всех описанных сценариев в рамках дизайн-системы. Числовые бизнес-результаты в открытом кейсе не представлены.",
      metricFact: "Описываю архитектуру и сценарии, показываю экран регистрации; продуктовые и операционные показатели не опубликованы.",
      metricIdeas: "Для оценки сервиса можно отслеживать завершение заявки с первого раза, время оформления, ошибки и количество возвратов на доработку.",
      refs: [{label:"Макет в Figma",url:"https://www.figma.com/file/kUVKTyQQ6EKmtPLpMHbZAs/%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C-%D0%B1%D0%B0%D0%BD%D0%BA---%D0%9B%D0%9A?type=design&node-id=0%3A1&mode=design&t=i1pT9y87HKa8tkH1-1"}]
    }
  };

  const order = ["atom", "keycount", "bakong", "modulbank"];
  const imageDimensions = Object.freeze({
    "assets/cases/atom-3d.png": [1980, 1500],
    "assets/cases/atom-climate-screen.png": [375, 812],
    "assets/cases/atom-charge-history.png": [375, 1050],
    "assets/cases/atom-system.png": [1980, 1104],
    "assets/cases/bakong-home-crop.png": [825, 690],
    "assets/cases/bakong-system.png": [1980, 693],
    "assets/cases/keycount-accounts.png": [1980, 1500],
    "assets/cases/keycount-exchanges.png": [1980, 1500],
    "assets/cases/keycount-userflow.png": [1980, 668],
    "assets/cases/modul-auth.png": [1980, 1500]
  });

  const byId = id => {
    const element = document.getElementById(id);
    if (!element) throw new Error(`Required case element #${id} was not found.`);
    return element;
  };

  const setMotion = (element, direction, delay = 0) => {
    element.dataset.motion = direction;
    if (delay > 0) element.style.setProperty("--motion-delay", `${delay}ms`);
  };

  const setImageDimensions = (image, src) => {
    const dimensions = imageDimensions[src];
    if (!dimensions) return;
    [image.width, image.height] = dimensions;
  };

  const setPreviewSource = (image, originalSrc, useWebp = true) => {
    if (!useWebp) {
      image.src = originalSrc;
      return;
    }
    image.addEventListener("error", () => { image.src = originalSrc; }, { once: true });
    image.src = originalSrc.replace(/\.png$/, ".webp");
  };

  const setProjectTitle = (element, title, name) => {
    const start = title.indexOf(name);
    if (start < 0) {
      element.textContent = title;
      return;
    }

    const projectName = document.createElement("span");
    projectName.className = "project-name";
    projectName.textContent = name;
    element.replaceChildren(
      document.createTextNode(title.slice(0, start)),
      projectName,
      document.createTextNode(title.slice(start + name.length))
    );
  };

  const createTextElement = (tagName, className, text) => {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    element.textContent = text;
    return element;
  };

  const renderMeta = items => {
    const fragment = document.createDocumentFragment();
    items.forEach(([label, value], index) => {
      const item = document.createElement("div");
      item.className = "meta-item";
      setMotion(item, "bottom", index * 65);
      item.append(
        createTextElement("dt", "meta-label", label),
        createTextElement("dd", "meta-value", value)
      );
      fragment.append(item);
    });
    byId("meta-grid").replaceChildren(fragment);
  };

  const renderRoleList = items => {
    const fragment = document.createDocumentFragment();
    items.forEach((text, index) => {
      const item = createTextElement("li", "", text);
      setMotion(item, "left", index * 45);
      fragment.append(item);
    });
    byId("role-list").replaceChildren(fragment);
  };

  const renderProcess = items => {
    const fragment = document.createDocumentFragment();
    items.forEach(([number, title, copy], index) => {
      const step = document.createElement("article");
      step.className = "process-step";
      setMotion(step, "bottom", index * 75);
      step.append(
        createTextElement("span", "process-number", number),
        createTextElement("h3", "", title),
        createTextElement("p", "", copy)
      );
      fragment.append(step);
    });
    byId("process-grid").replaceChildren(fragment);
  };

  const renderGallery = items => {
    const fragment = document.createDocumentFragment();
    items.forEach((item, index) => {
      const figure = document.createElement("figure");
      figure.className = ["gallery-card", item.wide && "wide", item.showcase && "showcase", item.screen && "screen"].filter(Boolean).join(" ");
      setMotion(figure, "bottom", index * 75);

      const button = document.createElement("button");
      button.type = "button";
      button.className = "gallery-open";
      button.setAttribute("aria-label", `Увеличить: ${item.caption}`);

      const image = document.createElement("img");
      image.alt = item.alt;
      image.dataset.caption = item.caption;
      image.dataset.assetSrc = item.src;
      image.loading = "lazy";
      image.decoding = "async";
      setImageDimensions(image, item.src);
      setPreviewSource(image, item.src, item.webp !== false);
      button.append(image);

      const caption = document.createElement("figcaption");
      caption.append(
        createTextElement("span", "", item.caption),
        createTextElement("span", "zoom-hint", "Увеличить")
      );
      figure.append(button, caption);
      if (item.description) {
        figure.append(createTextElement("p", "gallery-description", item.description));
      }
      fragment.append(figure);
    });
    byId("gallery-grid").replaceChildren(fragment);
  };

  const renderReferences = items => {
    const fragment = document.createDocumentFragment();
    items.forEach((item, index) => {
      const link = document.createElement("a");
      link.href = item.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      setMotion(link, "bottom", index * 60);
      link.append(document.createTextNode(item.label), createTextElement("span", "", "↗"));
      link.lastElementChild.setAttribute("aria-hidden", "true");
      fragment.append(link);
    });
    byId("refs").replaceChildren(fragment);
  };

  const query = new URLSearchParams(window.location.search);
  const requestedKey = query.get("project");
  const key = order.includes(requestedKey) ? requestedKey : "atom";
  const project = projects[key];

  document.title = `${project.pageTitle} — Владимир Никитин`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", project.deck);
  byId("case-kicker").textContent = project.category;
  setProjectTitle(byId("case-title"), project.title, project.projectName);
  byId("case-deck").textContent = project.deck;

  const heroImage = byId("hero-image");
  setImageDimensions(heroImage, project.hero);
  heroImage.alt = project.heroAlt;
  heroImage.decoding = "async";
  heroImage.setAttribute("fetchpriority", "high");
  setPreviewSource(heroImage, project.hero);
  byId("hero-caption").textContent = project.heroCaption;

  renderMeta(project.meta);
  byId("context-title").textContent = project.contextTitle;
  byId("context-copy").textContent = project.context;
  byId("role-title").textContent = project.roleTitle;
  byId("role-copy").textContent = project.roleCopy;
  renderRoleList(project.role);
  if (project.processTitle) byId("process-title").textContent = project.processTitle;
  byId("process-intro").textContent = project.processIntro;
  renderProcess(project.process);
  if (project.galleryTitle) byId("gallery-title").textContent = project.galleryTitle;
  byId("gallery-intro").textContent = project.galleryIntro;
  renderGallery(project.gallery);
  byId("result-title").textContent = project.resultTitle;
  byId("result-copy").textContent = project.result;
  if (project.factLabel) byId("fact-label").textContent = project.factLabel;
  byId("metric-fact").textContent = project.metricFact;
  if (project.ideasLabel) byId("ideas-label").textContent = project.ideasLabel;
  byId("metric-ideas").textContent = project.metricIdeas;
  renderReferences(project.refs);

  const nextKey = order[(order.indexOf(key) + 1) % order.length];
  const nextProject = projects[nextKey];
  byId("next-case").href = `case.html?project=${nextKey}`;
  setProjectTitle(byId("next-title"), nextProject.title, nextProject.projectName);

  const lightbox = byId("lightbox");
  const lightboxImage = byId("lightbox-image");
  const lightboxCaption = byId("lightbox-caption");
  const lightboxViewport = byId("lightbox-viewport");
  const lightboxZoomOut = byId("lightbox-zoom-out");
  const lightboxZoomIn = byId("lightbox-zoom-in");
  const lightboxZoomLevel = byId("lightbox-zoom-level");
  const lightboxOriginal = byId("lightbox-original");
  const lightboxHint = byId("lightbox-hint");
  const galleryGrid = byId("gallery-grid");
  const zoomSteps = [1, 2, 4, 6];
  let fitWidth = 0;
  let sourceWidth = 0;
  let sourceHeight = 0;
  let zoom = 1;
  let maxZoom = 1;

  const updateZoomControls = () => {
    lightboxZoomOut.disabled = zoom <= 1.01;
    lightboxZoomIn.disabled = zoom >= maxZoom - .01;
    lightboxZoomLevel.textContent = zoom <= 1.01 ? "По ширине" : `${Math.round(zoom * 100)}%`;
    lightboxHint.hidden = zoom <= 1.01;
  };

  const measureFit = () => {
    if (!lightbox.open) return;
    fitWidth = lightboxImage.getBoundingClientRect().width;
    maxZoom = lightboxImage.complete && lightboxImage.naturalWidth > 0 && fitWidth > 0
      ? Math.max(1, Math.min(6, sourceWidth / fitWidth)) : 1;
    updateZoomControls();
  };
  lightboxImage.addEventListener("load", () => {
    requestAnimationFrame(measureFit);
  });

  const setZoom = nextZoom => {
    const oldWidth = lightboxImage.getBoundingClientRect().width || fitWidth;
    const centerX = oldWidth ? (lightboxViewport.scrollLeft + lightboxViewport.clientWidth / 2) / oldWidth : 0;
    const centerY = lightboxViewport.scrollHeight
      ? (lightboxViewport.scrollTop + lightboxViewport.clientHeight / 2) / lightboxViewport.scrollHeight : 0;
    const wasFit = zoom <= 1.01;
    zoom = Math.max(1, Math.min(nextZoom, maxZoom));

    if (zoom <= 1.01) {
      lightbox.classList.remove("is-zoomed");
      lightboxImage.style.width = "";
      lightboxViewport.style.height = "";
      lightboxViewport.scrollTo(0, 0);
    } else {
      const imageWidth = Math.round(fitWidth * zoom);
      const imageHeight = Math.round(imageWidth * sourceHeight / sourceWidth);
      const viewportHeight = Math.min(Math.max(180, imageHeight), Math.max(180, innerHeight * .7));
      lightbox.classList.add("is-zoomed");
      lightboxImage.style.width = `${imageWidth}px`;
      lightboxViewport.style.height = `${viewportHeight}px`;
      requestAnimationFrame(() => {
        lightboxViewport.scrollLeft = wasFit ? 0 : centerX * imageWidth - lightboxViewport.clientWidth / 2;
        lightboxViewport.scrollTop = wasFit ? 0 : centerY * lightboxViewport.scrollHeight - lightboxViewport.clientHeight / 2;
      });
    }
    updateZoomControls();
  };

  lightboxZoomIn.addEventListener("click", () => {
    const next = zoomSteps.find(step => step > zoom + .01) || maxZoom;
    setZoom(next);
  });
  lightboxZoomOut.addEventListener("click", () => {
    const previous = zoomSteps.filter(step => step < zoom - .01).at(-1) || 1;
    setZoom(previous);
  });
  lightbox.addEventListener("keydown", event => {
    if (event.key === "+" || event.key === "=") {
      event.preventDefault();
      lightboxZoomIn.click();
    } else if (event.key === "-") {
      event.preventDefault();
      lightboxZoomOut.click();
    }
  });

  galleryGrid.addEventListener("click", event => {
    const button = event.target instanceof Element ? event.target.closest(".gallery-open") : null;
    const image = button?.querySelector("img");
    if (!image) return;
    const originalSrc = image.dataset.assetSrc || image.currentSrc || image.src;

    if (typeof lightbox.showModal !== "function") {
      window.open(originalSrc, "_blank", "noopener,noreferrer");
      return;
    }

    lightbox.classList.remove("is-zoomed");
    lightboxImage.style.width = "";
    lightboxViewport.style.height = "";
    lightboxImage.src = originalSrc;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = image.dataset.caption || image.alt;
    lightboxOriginal.href = originalSrc;
    setImageDimensions(lightboxImage, image.dataset.assetSrc);
    [sourceWidth, sourceHeight] = imageDimensions[image.dataset.assetSrc] || [image.naturalWidth, image.naturalHeight];
    zoom = 1;
    maxZoom = 1;
    updateZoomControls();
    lightbox.showModal();
    document.documentElement.classList.add("lightbox-open");
    requestAnimationFrame(measureFit);
  });

  lightbox.addEventListener("close", () => {
    document.documentElement.classList.remove("lightbox-open");
    lightbox.classList.remove("is-zoomed");
    lightboxImage.style.width = "";
    lightboxViewport.style.height = "";
  });
  window.addEventListener("resize", () => {
    if (!lightbox.open) return;
    setZoom(1);
    requestAnimationFrame(measureFit);
  });
  byId("lightbox-close").addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", event => {
    if (event.target === lightbox) lightbox.close();
  });

  const root = document.documentElement;
  root.classList.add("js");
  const motionPreference = window.matchMedia?.("(prefers-reduced-motion: reduce)");

  if (!motionPreference?.matches && "IntersectionObserver" in window) {
    const motionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: "0px 0px -42px 0px" });

    document.querySelectorAll("[data-motion]").forEach(item => motionObserver.observe(item));
    root.classList.add("motion-ready");
  }

})();
