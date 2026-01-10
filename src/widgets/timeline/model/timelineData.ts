import type { StaticImageData } from "next/image";
import {
  IRobotImage,
  CalculatorImage,
  TimeCraftReactImage,
  TimeCraftImage,
  VirusTotalImage,
  FilmHubImage,
  LoftHausImage,
} from "@/shared/images/projects";

export interface ICodeLink {
  name: string;
  url: string;
}

export interface IProjectLink {
  name: string;
  url: string;
}

export interface IImageUrl {
  name: string;
  image: StaticImageData;
  url: string;
}

export interface ITimelineItem {
  id: string;
  date: string;
  period?: string;
  title: string;
  description: string[];
  stack?: string[];
  codeLinks?: ICodeLink[];
  projectLinks?: IProjectLink[];
  imageUrls?: IImageUrl[];
}

export const TIMELINE_DATA: ITimelineItem[] = [
  {
    id: "1",
    date: "10 Октября 2022",
    title: "Старт",
    description: [
      "День, когда я вошёл в мир программирования. Точка отсчёта.",
      "Будущее тогда казалось тёмным и неопределённым,",
      'а мои padding-left: 900px; уже тогда казались мне признаком настоящего "профессионализма".',
    ],
  },
  {
    id: "2",
    date: "6 Октября 2023 - 11 Ноября 2023",
    title: "Первый полностью реализованный лендинг",
    description: [
      "Первый полностью реализованный лендинг - от идеи до финальной версии.",
      "После не самого активного периода в разработке мне всё же удалось взяться за первый серьёзный проект.",
      "Большую роль сыграло наставничество Team Lead'а: он помог выстроить правильный вектор обучения и обозначил чёткий roadmap.",
      "Этот этап стал заметным прорывом в моём развитии как разработчика.",
      "Однако период интенсивного роста оказался недолгим - меня призвали на другой «фронтенд». Армейский.",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    codeLinks: [{ name: "LoftHouse", url: "https://pahumbiu.github.io/Layout_LoftHouse/" }],
    projectLinks: [{ name: "LoftHouse", url: "https://pahumbiu.github.io/Layout_LoftHouse/" }],
    imageUrls: [
      {
        name: "LoftHouse",
        image: LoftHausImage,
        url: "https://pahumbiu.github.io/Layout_LoftHouse/",
      },
    ],
  },
  {
    id: "3",
    date: "14 Ноября 2024",
    title: "Возвращение и новый старт",
    description: [
      "Завершив задачи на армейском «фронтенде», после возвращения я всерьёз взялся за прокачку себя как разработчика.",
      "Мотивация была предельно ясной - найти первую работу в IT.",
      "Немного освежив знания, сверстав - случайную страницу из интернета и закрыв этап с вёрсткой, я, перешёл к базе JavaScript.",
      "И, как в том меме про новичков, сметающих товары с полок, где вместо продуктов - калькуляторы,",
      "я тоже начал с него. Да, калькулятор. Наверное, это база...",
    ],
    imageUrls: [
      { name: "Calculator", image: CalculatorImage, url: "https://pahumbiu.github.io/Calculator/" },
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    codeLinks: [{ name: "Calculator", url: "https://pahumbiu.github.io/Calculator/" }],
    projectLinks: [{ name: "Calculator", url: "https://github.com/PaHuMbIu/Calculator" }],
  },
  {
    id: "4",
    date: "26 Января 2025",
    title: "Начало освоения React",
    description: [
      "Узнав, насколько удобно собирать счётчики по сравнению с нативным JavaScript, я был искренне удивлён.",
      "Конечно, использовать React я стал, не совсем по назначению. Я - словно базукой по воробьям, начал делать НЕ мощный интернет-магазин, НЕ создавать сложные интерфейсы, как подобает React`у, а...",
      "Начал верстать страничку :D. Да. Но, было и было. Главное, что я понял как обращаться с этой машиной на базовом уровне",
    ],
    imageUrls: [
      { name: "VirusTotal", image: VirusTotalImage, url: "https://pahumbiu.github.io/VirusTotal/" },
    ],
    stack: ["React", "CSS"],
    codeLinks: [
      { name: "VirusTotal", url: "https://github.com/PaHuMbIu/VirusTotal?tab=readme-ov-file" },
    ],
    projectLinks: [{ name: "VirusTotal", url: "https://pahumbiu.github.io/VirusTotal/" }],
  },
  {
    id: "5",
    date: "14 Февраля 2025",
    title: "TODO-LIST: первый Fullstack проект",
    description: [
      "Потрогав React. Я, решил попробовать себя стиле Рэмбо, на данном уровне, только так это и можно назвать, да, это - Fullstack разработчик.",
      "Это приложение будет MPA с Базой данных и авторизацией (1979 года). Тренировка REST API + CRUD.",
      "Угадаете, что это? Данное словосочетание ассоциируется у новичков как: TODO-LIST.",
      "К слову, фронт здесь написан на ванильном JS",
    ],
    imageUrls: [
      { name: "TimeCraft", image: TimeCraftImage, url: "https://pahumbiu.github.io/TimeCraft/" },
    ],
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL"],
    codeLinks: [
      { name: "TimeCraft", url: "https://github.com/PaHuMbIu/TimeCraft_JS?tab=readme-ov-file" },
    ],
    projectLinks: [{ name: "TimeCraft", url: "http://timecraft.delfinnnn.online" }],
  },
  {
    id: "6",
    date: "1 Марта 2025",
    title: "TODO-LIST на React",
    description: [
      "Чтобы ощутить всю мощь React и увидеть разницу в удобстве и скорости разработки относительно ванильного JS, я решил сделать брата старшего….",
      "TODO-LIST на React! И никаких дополнительных слов к этому промежутку времени не нужно...",
    ],
    imageUrls: [
      {
        name: "TimeCraftReact",
        image: TimeCraftReactImage,
        url: "https://pahumbiu.github.io/TimeCraft_React/",
      },
    ],
    stack: ["React", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL"],
    codeLinks: [{ name: "TimeCraftReact", url: "https://github.com/PaHuMbIu/TimeCraft_React" }],
    projectLinks: [{ name: "TimeCraftReact", url: "http://timecraft-react.delfinnnn.online/" }],
  },
  {
    id: "7",
    date: "20 Марта 2025",
    title: "Лендинг iRobot: SCSS и кастомные слайдеры",
    description: [
      "Нет! Это не TODO List на TypeScript, как вы могли подумать... Здесь, я решил поработать с препроцессором SCSS и ещё раз окунуться в сторону ванильного JS.",
      "На этот раз, лендинг. Коих я считал недостаточно в моём профиле на GitHub.",
      "Данный лендинг осложняется кастомными, переиспользуемыми слайдерами, без каких-либо библиотек.",
    ],
    imageUrls: [{ name: "iRobot", image: IRobotImage, url: "https://pahumbiu.github.io/iRobot/" }],
    stack: ["HTML", "SCSS", "JavaScript"],
    codeLinks: [{ name: "iRobot", url: "https://github.com/PaHuMbIu/iRobot" }],
    projectLinks: [{ name: "iRobot", url: "https://pahumbiu.github.io/iRobot/" }],
  },
  {
    id: "8",
    date: "17 Мая 2025",
    title: "Командный проект: взрывной рост",
    description: [
      "День, когда произошёл взрывной рост в геометрической прогрессии. Но не всё сразу. Поначалу это был ещё один pet-проект.",
      "Где-то в конце мая ко мне пришла идея собрать команду разработчиков и дизайнера для его разработки. Всё это должно было прокачать командную работу — как мою, так и участников проекта.",
      "Потратив огромное количество времени, на тот момент, не очень хорошую документацию проекта и разного рода invite-ссылки для приглашения, я стал рассылать его по всем популярным форумам, YouTube-роликам и телеграм-чатам.",
      "Набрав некоторое количество ребят и взявшись за разработку, дела, скажем, шли не совсем гладко. Наш нубский опыт не давал значительного прогресса, а будущее становилось всё туманнее... Идея угасала, желание — тоже.",
      "Внезапно на связь вышли двое человек, их отличием было то, что они не являлись новичками. Это были два уверенных fullstack-разработчика уровня middle. Не взирая на свою работу, они пришли за идею.",
      "И вот, пожалуй, это тот момент, о котором я говорил в начале: значительный рост в архитектуре, новые знания и более широкий взгляд на всю инфраструктуру разработки.",
      "На протяжении разработки к нам приходили разработчики разных уровней — от балансировщиков баз данных до Tech Lead'ов. Значительная часть времени была потрачена на нормализацию процессов, поэтому в разработке мы не преуспели, и проект пришлось заморозить в связи с необходимостью найти работу.",
    ],
    stack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "shadcn/ui",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
    ],
    imageUrls: [
      { name: "FilmHub", image: FilmHubImage, url: "https://pahumbiu.github.io/FilmHub/" },
    ],
    codeLinks: [{ name: "FilmHub", url: "NDA" }],
    projectLinks: [{ name: "FilmHub", url: "Заморожен" }],
  },
  {
    id: "9",
    date: "27 Июня 2025",
    title: "Первые коммерческие проекты: Telegram mini app",
    description: [
      "На мою удачу, буквально сразу после заморозки FilmHub, меня пригласи на разработку двух Telegram приложений: Tonex farm и Casper garant bot.",
      "Это было моё первое участие в разработке внешних приложений под заказ.",
      "Особого напряжения я не ощущал. Параллельно даже, готовился к поиску постоянной работы...",
    ],
    codeLinks: [
      { name: "TRONEX-TWA", url: "NDA" },
      { name: "TRONEX-TWA", url: "https://github.com/VladimirBerl/TRONEX-TWA" },
    ],
    projectLinks: [
      { name: "CasperGarantBot", url: "https://t.me/CasperGarantBot" },
      { name: "tonexfarm_bot", url: "https://t.me/tonexfarm_bot" },
    ],
  },
  {
    id: "10",
    date: "16 Июля 2025",
    period: "16 Июля - 29 Сентября 2025",
    title: "Поиск работы и первый рабочий день в Plan9.tech",
    description: [
      "Подготовив резюме, я взялся за самое сложное — поиск работы.",
      "Каждое новое видео типа «Как составить резюме» или «Как найти работу?» и просмотр комментариев могли довести до депрессии на месяцы. Думаю, вы понимаете о чём я.",
      "Это ощущение негативного окружения преследовало во всех самых популярных фронтенд-чатах.",
      "Но мне всё же удалось найти работу не за хардкорные 7 месяцев и не за год, а относительно быстро — за 3 месяца с учётом подготовки.",
      "За это время мне попадались и мошенники, которые предлагали «заплати 200 000 и стань мидлом», и странные компании, где от тебя требовали деньги, чтобы устроиться. Но цель оставалась реальной.",
      "29 сентября этого года я вышел на свой первый настоящий рабочий день в реальной IT-компании — Plan9.tech.",
      "Вот так, от «padding-left: 900px;» до «как центрировать div?»",
    ],
  },
];
