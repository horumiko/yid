const events = [
  [
    { event: 'Заезд и размещение участников', time: 'до 11:00', location: 'Гостиница, ул. Октябрьская, 2' },
    {
      event: 'Тимбилдинг. Знакомство с участниками',
      time: '11:20-12:00',
      location: 'Актовый зал общежития №7, ул. Октябрьская, 10/2',
    },
    { event: 'Регистрация участников Форума', time: '12:30-13:00', location: 'Ленинградская 16, ФГиГ, 2 этаж' },
    {
      event: 'Открытие VII Международного молодежного форума «М.И.Р.»',
      time: '13:00-14:30',
      location: 'Ленинградская 16, ФГиГ, 2 этаж',
    },
    {
      event: 'Общее фотографирование. Пресс-подход.',
      time: '14:30-15:00',
      location: 'Ленинградская 16, ФГиГ, 2 этаж',
    },
    {
      event: 'Воркшоп 1 «Введение в Корпоративную социальную ответственность»',
      time: '15:20-16:30',
      location: 'Ленинградская 20, ФМО, ауд. 1301',
    },
    { event: 'Кофе-брейк', time: '16:45-17:15', location: 'Ленинградская 20, ФМО, ауд.520' },
    {
      event:
        'Воркшоп 2 «Социальная ответственность: вклад предприятия в развитие циркулярной экономики в Республике Беларусь»',
      time: '17:30-18:15',
      location: 'Ленинградская 20, ФМО, ауд. 1301',
    },
  ],
  [
    { event: 'Завтрак', time: '9:30-10:30', location: 'Столовая, Октябрьская, 10а ' },
    { event: 'Экскурсия', time: '11:20-12:00', location: 'Музей геологии БГУ, ФГиГ' },
    {
      event: 'Воркшоп 3 «Устойчивое развитие и КСО как основа бизнес-стратегии на опыте предприятия»',
      time: '13:30-14:30',
      location: 'Сбербанк',
    },
    { event: 'Кофе-брейк', time: '14:35-14:50', location: 'Сбербанк' },
    {
      event: 'Воркшоп 4 «Опыт экологической, социальной и корпоративно-управленческой трансформации ЗАО Сбербанк»',
      time: '15:00-15:45',
      location: 'Сбербанк',
    },
    {
      event: 'Воркшоп 5 «Создание контент-стратегии для корпоративного аккаунта: Привлечение аудитории»',
      time: '15:20-16:30',
      location: 'Сбербанк',
    },
    {
      event: 'Воркшоп 6 «Эффективное ведение корпоративного аккаунта в социальных медиа: основы и лучшие практики»',
      time: '16:45-17:30',
      location: 'Сбербанк',
    },
    { event: 'Ужин', time: '18:20-19:00', location: 'Столовая, Октябрьская, 10а' },
  ],
  [
    { event: 'Завтрак', time: '9:30-10:30', location: 'Столовая, Октябрьская, 10а ' },
    {
      event: 'Воркшоп 7 «Корпоративное управление компанией»',
      time: '12:00-13:00',
      location: 'Национальная библиотека',
    },
    {
      event: 'Воркшоп 7 «Корпоративное управление компанией»',
      time: '13:00-14:00',
      location: 'Национальная библиотека',
    },
    { event: 'Кофе-брейк', time: '14:00-14:30', location: 'Национальная библиотека' },
    {
      event: 'Воркшоп 8 «Стратегии формирования команды и руководства коллективом»',
      time: '14:40-15:25',
      location: 'Национальная библиотека',
    },
    {
      event: 'Воркшоп 9 «Корпоративная ответственность: как это влияет на управление брендом»',
      time: '15:35-16:20',
      location: 'Национальная библиотека',
    },
    { event: 'Ужин', time: '17:30-18:00', location: 'Столовая, Октябрьская, 10а' },
  ],
  [
    { event: 'Завтрак', time: '9:30-10:30', location: 'Столовая, Октябрьская, 10а' },
    {
      event: 'Воркшоп 10 «Изучение аудитории в проектной деятельности»',
      time: '12:00-13:00',
      location: 'Коворкинг пространство Campus',
    },
    {
      event: 'Воркшоп 11 «Ораторское искусство»',
      time: '14:10-15:00',
      location: 'Коворкинг пространство Campus',
    },
    { event: 'Кофе-брейк', time: '15:10-16:10', location: 'Коворкинг пространство Campus' },
    {
      event: 'Воркшоп 12 «Навык питча: построение презентации проекта»',
      time: '15:10-16:10',
      location: 'Коворкинг пространство Campus',
    },
    {
      event: 'Кофе-брейк',
      time: '17:10-17:25',
      location: 'Коворкинг пространство Campus',
    },
    {
      event: 'Воркшоп 13 «Советы по борьбе со страхом публичных выступлений»',
      time: '17:30-18:20',
      location: 'Коворкинг пространство Campus',
    },
  ],
  [
    { event: 'Завтрак', time: '9:30-10:30', location: 'Столовая, Октябрьская, 10а' },
    {
      event: 'Презентация проектов',
      time: '12:00-13:30',
      location: 'Национальный детский технопарк',
    },
    {
      event: 'Экскурсия',
      time: '14:00-19:00',
      location: 'Дукорский маёнтак',
    },
    { event: 'Закрытие форума', time: '19:10-20:00', location: 'Ивент-пространство «Willing»' },
  ],
  [{ event: 'Отъезд участников', time: '', location: 'Гостиница, ул. Октябрьская, 2' }],
];
