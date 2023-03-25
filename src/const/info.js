import boatico from '../images/boatico2.svg';
import groupico from '../images/groupico.svg';
import capico from '../images/capico.svg';
import guideico from '../images/guideico.svg';
import wakesurfboardico from '../images/wakesurfboardico.svg';
import siuteico from '../images/siuteico.svg';
import wakeboardico from '../images/wakeboard-ico.svg';
import waterskiico from '../images/waterski-ico.svg';
import tubingico from '../images/tubing-ico.svg';
import table from '../images/table-ico.svg';
import mapico from '../images/map-ico.svg';
import wakesurfico from '../images/wakesurf-ico.svg';
import wakeboardBoard from '../images/wakeboard-board-ico.svg';

import boaticoWhite from '../images/boatico-white.svg';
import groupicoWhite from '../images/group-ico-white.svg';
import capicoWhite from '../images/cap-ico-white.svg';
import tubingicoWhite from '../images/tubing-ico-white.svg';
import wakeboardWhite from '../images/wakeboard-ico-white.svg';
import baloonsWhite from '../images/baloons-ico-white.svg';
import eatsWhite from '../images/eats-ico-white.svg';
import waterskiicoWhite from '../images/waterski-ico-white.svg';
import bluetoothWhite from '../images/bluetooth-ico-white.svg';
import tableWhite from '../images/table-ico-white.svg';

import searay1 from '../images/searay1.png';
import searay2 from '../images/searay2.png';
import searay3 from '../images/searay3.png';
import searay4 from '../images/searay4.png';

import priceSearay from '../images/expensive-green.svg';
import groupSearay from '../images/groupsearay.svg';
import sportSearay from '../images/wakeboard-ico-green.svg';

import favourit1 from '../images/favourit1.png';
import favourit2 from '../images/favourit2.png';
import favourit3 from '../images/favourit3.png';
import favourit4 from '../images/favourit4.png';

import priceFavourit from '../images/cheap.svg';
import groupFavourit from '../images/groupfavourit.svg';
import sportFavourit from '../images/wakeboard-ico-red.svg';

import regal1 from '../images/regal1.png';
import regal2 from '../images/regal2.png';
import regal3 from '../images/regal3.png';
import regal4 from '../images/regal4.png';

import priceRegal from '../images/expensive-yellow.svg';
import groupRegal from '../images/groupregal.svg';
import sportRegal from '../images/wakesurf-ico-yellow.svg';

import accordionImg1 from '../images/searaybg.png';
import accordionImg2 from '../images/favouritbg.png';
import accordionImg3 from '../images/regalbg.png';

import sliderBirthday from '../images/birthday-img.png';
import sliderDate from '../images/date-img.png';
import sliderDay from '../images/day-img.png';
import sliderParty from '../images/party-img.png';

const wakesurfInfo = [
  {
    id: '0',
    title: 'Описание',
    desc: 'Вейксерфинг - это относительно новый вид водного спорта, который приобрел популярность в последние годы. Он похож на традиционный серфинг, но вместо того, чтобы ловить волну в океане, катер создает волну на реке, по которой скользит райдер. Райдер стоит на доске для вейксерфинга и использует энергию волны для выполнения различных трюков и маневров.',
    tag: 'Это отличный способ испытать острые ощущения от серфинга, не выезжая к океану.',
  },
  {
    id: '1',
    title: 'Что входит',
    include: [
      {
        name: 'Катер',
        ico: boatico,
      },
      {
        name: 'Вместимость 7 человек',
        ico: groupico,
      },
      {
        name: 'Капитан/Инструктор',
        ico: capico,
      },
      {
        name: 'Инструктаж',
        ico: guideico,
      },
      {
        name: 'Вейксерф',
        ico: wakesurfboardico,
      },
      {
        name: 'Жилеты и гидрокостюмы',
        ico: siuteico,
      },
    ],
  },
  {
    id: '2',
    title: 'Полезно знать',
    info: [
      {
        title: 'Что взять:',
        strings: [
          { string: 'Полотенце' },
          { string: 'Купальник' },
          { string: 'Напитки' },
          { string: 'Перекус' },
        ],
      },
      {
        title: 'Правила:',
        strings: [
          { string: 'возраст райдера 10+' },
          { string: 'уровень подготовки: неважен' },
          { string: 'предварительное бронирование' },
          { string: 'бесплатная отмена за 24 часа' },
        ],
      },
    ],
  },
];

const panels = [
  {
    label: 'Sea Ray 230',
    title: 'Аренда Катера',
    icons: [{ img: priceSearay }, { img: groupSearay }, { img: sportSearay }],
    subtitle: 'С капитаном и без',
    text_color: '#47B48F',
    content_title: 'Sea Ray 230',
    content:
      'Первоклассный катер, предлагающий роскошный и комфортный отдых на реке. Элегантный и стильный дизайн, вместительные каюты, просторный салон и мощные ходовые качества, Sea Ray 230 идеально подходит для дня, проведенного на воде.',
    imgurl: accordionImg1,
    include: [
      {
        name: 'C капитаном и без',
        ico: capico,
      },
      {
        name: '7 гостей + кэп',
        ico: groupico,
      },

      {
        name: 'Вейкборд',
        ico: wakeboardico,
      },
      {
        name: 'Водные Лыжи',
        ico: waterskiico,
      },
      {
        name: 'Обеденная зона',
        ico: table,
      },
      {
        name: 'Мякинино',
        url: 'https://yandex.ru/maps/-/CCUOaBTvxC',
        ico: mapico,
      },
    ],
    prices: [
      {
        name: 'Будни',
        value: '10.000 р/ч',
      },
      {
        name: 'Выходные',
        value: '11.000 р/ч',
      },
      {
        name: 'Без капитана',
        value: '9.000 р/ч',
      },
      {
        name: '24 часа',
        value: '120.000 р/сут',
      },
    ],
    info: {
      title: 'Характеристики:',
      strings: [
        { string: 'Длина 7 метров' },
        { string: 'Каюта в полный рост' },
        { string: 'Туалет' },
        { string: 'Газовая печь' },
        { string: 'Bluetooth' },
        { string: 'Гидрокостюмы' },
        { string: 'Доставка по запросу' },
        { string: 'Обогреватель' },
      ],
    },
    photos: [
       searay1 ,
       searay2 ,
       searay3 ,
       searay4 ,
    ],
  },
  {
    label: 'Favourit 480',
    color: 'red',
    title: 'Аренда Катера',
    icons: [
      { img: priceFavourit },
      { img: groupFavourit },
      { img: sportFavourit },
    ],
    subtitle: 'С капитаном и без',
    content_title: 'Favourit 480',
    text_color: '#B44748',
    content:
      'Отличный выбор для небольшой компании, которая ищет универсальную и практичную моторную лодку. Благодаря просторному кокпиту, мощному подвесному двигателю Favourit 480 идеально подходит для круизов, рыбалки и водных видов спорта.',
    imgurl: accordionImg2,
    include: [
      {
        name: 'C капитаном и без',
        ico: capico,
      },
      {
        name: '5 гостей + кэп',
        ico: groupico,
      },

      {
        name: 'Вейкборд',
        ico: wakeboardico,
      },
      {
        name: 'Водные Лыжи',
        ico: waterskiico,
      },
      {
        name: 'Ватрушка',
        ico: tubingico,
      },
      {
        name: 'Долгопрудный',
        url: 'https://yandex.ru/maps/-/CCUOaJFNxD',
        ico: mapico,
      },
    ],
    prices: [
      {
        name: 'Будни',
        value: '5.000 р/ч',
      },
      {
        name: 'Выходные',
        value: '6.000 р/ч',
      },
      {
        name: 'Без капитана',
        value: '4.000 р/ч',
      },
      {
        name: '24 часа',
        value: '60.000 р/сут',
      },
    ],
    info: {
      title: 'Характеристики:',
      strings: [
        { string: 'Длина 5 метров' },
        { string: 'Ширина 2 метра' },
        { string: 'Мотор Suzuki 90 л.с' },
        { string: 'Bluetooth' },
        { string: 'Гидрокостюмы' },
        { string: 'Доставка по запросу' },
        { string: 'Обогреватель' },
      ],
    },
    photos: [
       favourit1 ,
      favourit2,
      favourit3,
      favourit4 ,
      favourit3,
      favourit4 ,
      favourit3,
      favourit4 ,
      favourit3,
      favourit4 ,
    ],
  },
  {
    label: 'Regal Session22',
    color: 'yellow',
    title: 'Аренда Катера',
    icons: [{ img: priceRegal }, { img: groupRegal }, { img: sportRegal }],
    subtitle: 'С капитаном ',
    text_color: '#D9C108',
    content_title: 'Regal Session22',
    content:
      'Идеальный катер для любителей вейксерфа c передовой конструкцией корпуса, современными технологиями и вместительному салону. Regal Session 22 обеспечивает комфортный ход и является превосходной базой для водных видов спорта.',
    imgurl: accordionImg3,
    include: [
      {
        name: 'C капитаном',
        ico: capico,
      },
      {
        name: '7 гостей + кэп',
        ico: groupico,
      },
      {
        name: 'Вейксерф',
        ico: wakesurfico,
      },
      {
        name: 'Вейкборд',
        ico: wakeboardico,
      },
      {
        name: 'Водные Лыжи',
        ico: waterskiico,
      },
      {
        name: 'Мякинино',
        url: 'https://yandex.ru/maps/-/CCUOaBTvxC',
        ico: mapico,
      },
    ],
    prices: [
      {
        name: 'Будни',
        value: '10.000 р/ч',
      },
      {
        name: 'Выходные',
        value: '11.000 р/ч',
      },
      {
        name: '24 часа',
        value: '120.000 р/сут',
      },
    ],
    info: {
      title: 'Характеристики:',
      strings: [
        { string: 'Длина 7 метров' },
        { string: 'Каюта в полный рост' },
        { string: 'Туалет' },
        { string: 'Газовая печь' },
        { string: 'Bluetooth' },
        { string: 'Гидрокостюмы' },
        { string: 'Доставка по запросу' },
        { string: 'Обогреватель' },
      ],
    },
    photos: [
      regal1 ,
      regal2,
      regal3 ,
      regal4 ,
    ],
  },
];

const wakeboardInfo = [
  {
    id: '0',
    title: 'Что входит',
    include: [
      {
        name: 'Катер',
        ico: boatico,
      },
      {
        name: 'Вместимость',
        ico: groupico,
      },
      {
        name: 'Капитан/Инструктор',
        ico: capico,
      },
      {
        name: 'Инструктаж',
        ico: guideico,
      },
      {
        name: 'Вейкборд/Лыжи',
        ico: wakeboardBoard,
      },
      {
        name: 'Жилеты и гидрокостюмы',
        ico: siuteico,
      },
    ],
  },
  {
    id: '1',
    title: 'Полезно знать',
    info: [
      {
        title: 'Что взять:',
        strings: [
          { string: 'Полотенце' },
          { string: 'Купальник' },
          { string: 'Напитки' },
          { string: 'Перекус' },
        ],
      },
      {
        title: 'Правила:',
        strings: [
          { string: 'возраст райдера 10+' },
          { string: 'уровень подготовки: неважен' },
          { string: 'предварительное бронирование' },
          { string: 'бесплатная отмена за 24 часа' },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Как добраться',
    url: [
      'https://yandex.ru/map-widget/v1/?um=constructor%3Adda236157aa315486602678d6bf3c09d59fe7ebad5037745381ee885e806b9f7&amp;source=constructor',
      'https://yandex.ru/map-widget/v1/?um=constructor%3A1a4fd4b3640fa7df6c4ddeb8c41b6136413c4831d3ea4c50fefc3b9a71155212&amp;source=constructor',
      'https://yandex.ru/map-widget/v1/?um=constructor%3Adda236157aa315486602678d6bf3c09d59fe7ebad5037745381ee885e806b9f7&amp;source=constructor',
    ],
  },
];

const walksInfo = [
  {
    id: 0,
    title: 'День рождения',
    price: '35.000 р',
    img: sliderBirthday,
    description:
      'Вечеринка на нашем катере Sea Ray 230 станет запоминающимся событием для всех. Собирайте своих друзей и близких и отправляйтесь на воду, чтобы провести день рождения оригинально, весело и солнечно!',
    include: [
      {
        name: 'Sea Ray 230 на 3 часа',
        ico: boaticoWhite,
      },
      {
        name: '7 гостей',
        ico: groupicoWhite,
      },
      {
        name: 'Водные лыжи',
        ico: waterskiicoWhite,
      },
      {
        name: 'Праздничное оформление',
        ico: baloonsWhite,
      },
      {
        name: 'Bluetooth',
        ico: bluetoothWhite,
      },
      {
        name: 'Вейкборд',
        ico: wakeboardWhite,
      },
      {
        name: 'Капитан/Инструктор',
        ico: capicoWhite,
      },
      {
        name: 'Фуршет',
        ico: eatsWhite,
      },
      {
        name: 'Обеденная зона',
        ico: tableWhite,
      },
    ],
  },
  {
    id: 1,
    title: 'Свидание',
    price: '35.000 р',
    img: sliderDate,
    description:
      'Ищете уникальную и романтическую идею для свидания? Насладитесь безмятежной атмосферой и потрясающими пейзажами вместе со своим близким человеком. Позвольте нам позаботиться о деталях и сделать вашу встречу незабываемой.',
    include: [
      {
        name: 'Sea Ray 230 на 3 часа',
        ico: boaticoWhite,
      },
      {
        name: '7 гостей',
        ico: groupicoWhite,
      },
      {
        name: 'Водные лыжи',
        ico: waterskiicoWhite,
      },
      {
        name: 'Праздничное оформление',
        ico: baloonsWhite,
      },
      {
        name: 'Bluetooth',
        ico: bluetoothWhite,
      },
      {
        name: 'Вейкборд',
        ico: wakeboardWhite,
      },
      {
        name: 'Капитан/Инструктор',
        ico: capicoWhite,
      },
      {
        name: 'Фуршет',
        ico: eatsWhite,
      },
      {
        name: 'Тюбинг',
        ico: tubingicoWhite,
      },
    ],
  },
  {
    id: 2,
    title: 'День на воде',
    price: '35.000 р',
    img: sliderDay,
    description:
      'Проведите незабываемый день на воде со своими близкими. Насладитесь круизом по живописным местам, катанием на водных лыжах и обедом на реке. Наш дружелюбный и опытный экипаж обеспечит вашу безопасность и комфорт, сделав ваш день на воде незабываемым.',
    include: [
      {
        name: 'Sea Ray 230 на 3 часа',
        ico: boaticoWhite,
      },
      {
        name: '7 гостей',
        ico: groupicoWhite,
      },
      {
        name: 'Водные лыжи',
        ico: waterskiicoWhite,
      },
      {
        name: 'Праздничное оформление',
        ico: baloonsWhite,
      },
      {
        name: 'Bluetooth',
        ico: bluetoothWhite,
      },
      {
        name: 'Вейкборд',
        ico: wakeboardWhite,
      },
      {
        name: 'Капитан/Инструктор',
        ico: capicoWhite,
      },
      {
        name: 'Фуршет',
        ico: eatsWhite,
      },
      {
        name: 'Тюбинг',
        ico: tubingicoWhite,
      },
    ],
  },

  {
    id: 3,
    title: 'Мальчишник/Девичник',
    price: '35.000 р',
    img: sliderParty,
    description:
      'Ищете уникальный и запоминающийся способ отпраздновать предстоящую свадьбу с самыми близкими друзьями? Проведите вечеринку на воде, наслаждаясь такими развлечениями, как вейкбординг, водные лыжи и тюбинг, а завершите вечер веселым круизом с ужином.',
    include: [
      {
        name: 'Sea Ray 230 на 3 часа',
        ico: boaticoWhite,
      },
      {
        name: '7 гостей',
        ico: groupicoWhite,
      },
      {
        name: 'Водные лыжи',
        ico: waterskiicoWhite,
      },
      {
        name: 'Праздничное оформление',
        ico: baloonsWhite,
      },
      {
        name: 'Bluetooth',
        ico: bluetoothWhite,
      },
      {
        name: 'Вейкборд',
        ico: wakeboardWhite,
      },
      {
        name: 'Капитан/Инструктор',
        ico: capicoWhite,
      },
      {
        name: 'Фуршет',
        ico: eatsWhite,
      },
      {
        name: 'Тюбинг',
        ico: tubingicoWhite,
      },
    ],
  },
];

const faq = [
  {
    title: 'Нужен ли мне опыт для участия в водных развлечениях?',
    description:
      'Нет, мы приветствуем любой уровень мастерства и предоставляем инструктаж для новичков.',
  },
  {
    title: 'Каков минимальный возраст для участия в водных развлечениях?',
    description:
      'Минимальный возраст - 8 лет. В целях безопасности дети младше 18 лет должны присутствовать в присутствии родителей или законных опекунов.',
  },
  {
    title: 'Могу ли я принести свое собственное оборудование?',
    description:
      'Да, вы можете принести свой вейкборд, водные лыжи или доску для вейксерфинга. Однако если у вас нет собственного оборудования, мы предоставим его Вам.',
  },
  {
    title: 'Обязательно бронировать?',
    description:
      'Мы настоятельно рекомендуем бронировать места заранее, чтобы убедиться в наличии свободных мест. Вы можете забронировать номер онлайн или позвонив нам.',
  },
  {
    title: 'Могу ли я принести свою еду и напитки?',
    description:
      'Да, вы можете приносить свою еду и напитки. На наших лодках есть охладители, и мы просим вас убирать за собой.',
  },
  {
    title: 'Есть ли скидки?',
    description:
      'Да, мы предлагаем 10% скидку для бронирования свыше 3х часов. Для посуточного бронирования производится индивидуальный расчет. Свяжитесь с нами для получения дополнительной информации.',
  },
  {
    title: 'Можно ли доставить катер за город?',
    description:
      'Да, мы всегда готовы помочь организовать мероприятие за городом. Пожалуйста, свяжитесь с нами для получения дополнительной информации.',
  },
  {
    title: 'Каковы ваши правила отмены бронирования?',
    description:
      'На все мероприятия действует 24-часовая отмена. Если вы отмените заказ менее чем за 24 часа до начала запланированного мероприятия, то предоплата не будет возвращена.',
  },
];

const contactsInfo = 
  {
    email: 'riverflow@mail.ru',
    phone: '+7 999 555 32 45',
    locations: [
      {
        name: 'Мякинино',
        value: 'Яхт-клуб Парк Рублево',
        url: 'https://yandex.ru/maps/-/CCUKjWq3KB',
      },
      {
        name: 'Долгопрудный',
        value:'Яхт Клуб Спартак',
        url:'https://yandex.ru/maps/-/CCUOaJFNxD'
      },
      {
        name: 'Долгопрудный',
        value:'Санаторий Березки',
        url:'https://yandex.ru/maps/-/CCUKnNtGXA'
      },
    ],
  };


export { wakesurfInfo, panels, wakeboardInfo, walksInfo, faq, contactsInfo };
