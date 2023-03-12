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


import searay1 from "../images/searay1.png";
import searay2 from "../images/searay2.png";
import searay3 from "../images/searay3.png";
import searay4 from "../images/searay4.png";

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
      subtitle: "С капитаном и без",
      text_color: "#47B48F",
      content_title: "Sea Ray 230",
      content:
        "Путешествуете ли вы вдоль береговой линии, занимаетесь водными видами спорта или просто отдыхаете с друзьями и семьей, в Sea Ray 230 Sundancer есть все необходимое для незабываемого и приятного времяпровождения на реке.",
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
          name: "Долгопрудный",
          url: "",
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
          value: '9000 р/ч',
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
      title: "Аренда Катера",
      subtitle: "С капитаном и без",
      content_title: "Favourit 480",
      text_color: "#B44748",
      content:
        "Модуль проектирования технологических процессов на базе интерактивного каталога изделия позволяет формировать любую технологическую и проектную документацию в цифровом виде и способствует введению безбумажной технологии производства",
      imgurl: accordionImg2,
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
          name: "Долгопрудный",
          url: "",
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
          value: '9000 р/ч',
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
      label: "Regal Session22",
      title: "Аренда Катера",
      subtitle: "С капитаном и без",
      text_color: "#D9C108",
      content_title: "Regal Session22",
      content:
        "Интерактивный каталог позволяет провести подетальную паспортизацию подвижного состава. Цифровая копия каждого локомотива и вагона доступна в реальном времени от выпуска до утилизации",
      imgurl: accordionImg3,
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
          name: "Долгопрудный",
          url: "",
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
          value: '9000 р/ч',
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
  ];
  
export {wakesurfInfo, panels};
