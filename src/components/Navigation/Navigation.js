import React from 'react';

import './Navigation.css';

function Navigation({ refs, scrollDown }) {
  const {
    wakesurfRef,
    wakeboardRef,
    boatrentRef,
    walksRef,
    faqRef,
    contactsRef,
    certificatsRef,
  } = refs;

  return (
    <div className='navigation '>
      <nav className='navigation__menu '>
        <ul className='navigation__list '>
        <li className='navigation__item_type_header'>
            <button
              onClick={() => scrollDown(boatrentRef)}
              className='navigation__button navigation__link_type_header'
            >
              Аренда катера
            </button>
          </li>
          <li className='navigation__item_type_header'>
            <button
              onClick={() => scrollDown(walksRef)}
              className='navigation__button navigation__link_type_header'
            >
              Прогулки на катере
            </button>
          </li>

          <li className='navigation__item_type_header '>
            <button
              onClick={() => scrollDown(wakeboardRef)}
              className='navigation__button navigation__link_type_header '
            >
              Вейкборд и лыжи
            </button>
          </li>
          <li className='navigation__item_type_header '>
            <button
              onClick={() => scrollDown(wakesurfRef)}
              className='navigation__button navigation__link_type_header '
            >
              Вейксерф
            </button>
          </li>
          <li className='navigation__item_type_header'>
            <button
              onClick={() => scrollDown(certificatsRef)}
              className='navigation__button navigation__link_type_header'
            >
              Сертификаты
            </button>
          </li>
          <li className='navigation__item_type_header'>
            <button
              onClick={() => scrollDown(faqRef)}
              className='navigation__button navigation__link_type_header'
            >
              Вопросы
            </button>
          </li>
          <li className='navigation__item_type_header'>
            <button
              onClick={() => scrollDown(contactsRef)}
              className='navigation__button navigation__link_type_header'
            >
              Контакты
            </button>
          </li>
        </ul>
      </nav>
  
    </div>
  );
}

export default Navigation;
