import boatico from "../images/boatico2.svg";
import groupico from "../images/groupico.svg";
import capico from "../images/capico.svg";
import guideico from "../images/guideico.svg";
import wakesurfboardico from "../images/wakesurfboardico.svg";
import siuteico from "../images/siuteico.svg";
import wakeboardico from "../images/wakeboard-ico.svg";
import waterskiico from "../images/waterski-ico.svg";
import tubingico from "../images/tubing-ico.svg";
import mapico from "../images/map-ico.svg";
import wakesurfico from "../images/wakesurf-ico.svg";

import searay1 from "../images/searay1.png";
import searay2 from "../images/searay2.png";
import searay3 from "../images/searay3.png";
import searay4 from "../images/searay4.png";

import priceSearay from "../images/expensive-green.svg";
import groupSearay from "../images/groupsearay.svg";
import sportSearay from "../images/wakeboard-ico-green.svg";


import favourit1 from "../images/favourit1.png";
import favourit2 from "../images/favourit2.png";
import favourit3 from "../images/favourit3.png";
import favourit4 from "../images/favourit4.png";

import priceFavourit from "../images/cheap.svg";
import groupFavourit from "../images/groupfavourit.svg";
import sportFavourit from "../images/wakeboard-ico-red.svg";

import regal1 from "../images/regal1.png";
import regal2 from "../images/regal2.png";
import regal3 from "../images/regal3.png";
import regal4 from "../images/regal4.png";

import priceRegal from "../images/expensive-yellow.svg";
import groupRegal from "../images/groupregal.svg";
import sportRegal from "../images/wakesurf-ico-yellow.svg";


import accordionImg1 from "../images/searaybg.png";
import accordionImg2 from "../images/favouritbg.png";
import accordionImg3 from "../images/regalbg.png";


const wakesurfInfo = [
  {
    id: "0",
    title: "Описание",
    desc: "Вейксерфинг - это относительно новый вид водного спорта, который приобрел популярность в последние годы. Он похож на традиционный серфинг, но вместо того, чтобы ловить волну в океане, катер создает волну на реке, по которой скользит райдер. Райдер стоит на доске для вейксерфинга и использует энергию волны для выполнения различных трюков и маневров.",
    tag: "Это отличный способ испытать острые ощущения от серфинга, не выезжая к океану.",
  },
  {
    id: "1",
    title: "Что входит",
    include: [
      {
        name: "Специальный катер",
        ico: boatico,
      },
      {
        name: "Вместимость 7 человек",
        ico: groupico,
      },
      {
        name: "Капитан/Инструктор",
        ico: capico,
      },
      {
        name: "Инструктаж",
        ico: guideico,
      },
      {
        name: "Вейксёрф",
        ico: wakesurfboardico,
      },
      {
        name: "Жилеты и гидрокостюмы",
        ico: siuteico,
      },
    ],
  },
  {
    id: "2",
    title: "Полезно знать",
    info: [
      {
        title: "Что взять:",
        strings: [
          { string: "Полотенце" },
          { string: "Купальник" },
          { string: "Напитки" },
          { string: "Перекус" },     
        ],
      },
      {
        title: "Правила:",
        strings: [
          { string: "возраст райдера 10+" },
          { string: "уровень подготовки: неважен" },
          { string: "предварительное бронирование" },
          { string: "бесплатная отмена за 24 часа" },     
        ],
      },
    ],
  },
];




const panels = [
    {
      label: "Sea Ray 230",
      title: "Аренда Катера",
      icons: [
        {img: priceSearay},
        {img: groupSearay},
        {img: sportSearay},    
      ],      
      subtitle: "С капитаном и без",
      text_color: "#47B48F",
      content_title: "Sea Ray 230",
      content:
        "Первоклассный катер, предлагающий роскошный и комфортный отдых на реке. Элегантный и стильный дизайн, вместительные каюты, просторный салон и мощные ходовые качества, Sea Ray 230 идеально подходит для дня, проведенного на воде.",
      imgurl: accordionImg1,
      include: [
        {
          name: "C капитаном и без",
          ico: capico,
        },
        {
          name: "7 гостей + кэп",
          ico: groupico,
        },

        {
          name: "Вейкборд",
          ico: wakeboardico,
        },
        {
          name: "Водные Лыжи",
          ico: waterskiico,
        },
        {
          name: "Ватрушка",
          ico: tubingico,
        },
        {
          name: "Мякинино",
          url: "https://yandex.ru/maps/-/CCUOaBTvxC",
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
      info: 
        {
          title: "Характеристики:",
          strings: [
            { string: "Длина 7 метров" },
            { string: "Каюта в полный рост" },
            { string: "Туалет" },
            { string: "Газовая печь" },
            { string: "Bluetooth" },  
            { string: "Гидрокостюмы" },  
            { string: "Доставка по запросу" },  
            { string: "Обогреватель" },       
          ],
        },      
      photos: [
        {img: searay1},
        {img: searay2},
        {img: searay3},
        {img: searay4},
      ]
    },
    {
      label: "Favourit 480",
      color: 'red',
      title: "Аренда Катера",
      icons: [
        {img: priceFavourit},
        {img: groupFavourit},
        {img: sportFavourit},    
      ], 
      subtitle: "С капитаном и без",
      content_title: "Favourit 480",
      text_color: "#B44748",
      content:
        "Отличный выбор для небольшой компании, которая ищет универсальную и практичную моторную лодку. Благодаря просторному кокпиту, мощному подвесному двигателю Favourit 480 идеально подходит для круизов, рыбалки и водных видов спорта.",
      imgurl: accordionImg2,
      include: [
        {
          name: "C капитаном и без",
          ico: capico,
        },
        {
          name: "5 гостей + кэп",
          ico: groupico,
        },

        {
          name: "Вейкборд",
          ico: wakeboardico,
        },
        {
          name: "Водные Лыжи",
          ico: waterskiico,
        },
        {
          name: "Ватрушка",
          ico: tubingico,
        },
        {
          name: "Долгопрудный",
          url: "https://yandex.ru/maps/-/CCUOaJFNxD",
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
      info: 
        {
          title: "Характеристики:",
          strings: [
            { string: "Длина 5 метров" },
            { string: "Ширина 2 метра" },
            { string: "Мотор Suzuki 90 л.с" },               
            { string: "Bluetooth" },  
            { string: "Гидрокостюмы" },  
            { string: "Доставка по запросу" },  
            { string: "Обогреватель" },       
          ],
        },      
      photos: [
        {img: favourit1},
        {img: favourit2},
        {img: favourit3},
        {img: favourit4},
      ]
    },
    {
      label: "Regal Session22",
      color: 'yellow',
      title: "Аренда Катера",
      icons: [
        {img: priceRegal},
        {img: groupRegal},
        {img: sportRegal},    
      ], 
      subtitle: "С капитаном ",
      text_color: "#D9C108",
      content_title: "Regal Session22",
      content:
        "Идеальный катер для любителей вейксерфа c передовой конструкцией корпуса, современными технологиями и вместительному салону. Regal Session 22 обеспечивает комфортный ход и является превосходной базой для водных видов спорта.",
      imgurl: accordionImg3,
      include: [
        {
          name: "C капитаном",
          ico: capico,
        },
        {
          name: "7 гостей + кэп",
          ico: groupico,
        },
        {
          name: "Вейксерф",
          ico: wakesurfico,
        },
        {
          name: "Вейкборд",
          ico: wakeboardico,
        },
        {
          name: "Водные Лыжи",
          ico: waterskiico,
        },
        {
          name: "Мякинино",
          url: "https://yandex.ru/maps/-/CCUOaBTvxC",
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
      info: 
        {
          title: "Характеристики:",
          strings: [
            { string: "Длина 7 метров" },
            { string: "Каюта в полный рост" },
            { string: "Туалет" },
            { string: "Газовая печь" },
            { string: "Bluetooth" },  
            { string: "Гидрокостюмы" },  
            { string: "Доставка по запросу" },  
            { string: "Обогреватель" },       
          ],
        },      
      photos: [
        {img: regal1},
        {img: regal2},
        {img: regal3},
        {img: regal4},
      ]
    },
  ];
  
export {wakesurfInfo, panels};
