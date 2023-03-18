import React, { useState, useEffect } from "react";

import "./Navigation.css";

function Navigation({ refs }) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { wakesurfRef, wakeboardRef, boatrentRef, walksRef, faqRef, contactsRef, certificatsRef } = refs;

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);




  return (
    <div className="navigation">
     
        {windowWidth > 1270 ? (
          <nav className="navigation__menu">
            <ul className="navigation__list ">
              <li className="navigation__item_type_header">
                <button
                  onClick={()=>scrollDown(wakesurfRef)}
                  className="navigation__button navigation__link_type_header"
                >
                  Вейксерф
                </button>
              </li>
              <li className="navigation__item_type_header">
                <button
                  onClick={()=>scrollDown(wakeboardRef)}
                  className="navigation__button navigation__link_type_header"
                >
                  Вейкборд и лыжи
                </button>
              </li>
              <li className="navigation__item_type_header">
                <button
                  onClick={()=>scrollDown(boatrentRef)}
                  className="navigation__button navigation__link_type_header"
                >
                  Аренда катера
                </button>
              </li>
              <li className="navigation__item_type_header">
                <button
                  onClick={()=>scrollDown(walksRef)}
                  className="navigation__button navigation__link_type_header"
                >
                  Прогулки на катере
                </button>
              </li>
              <li className="navigation__item_type_header">
                <button
                  onClick={()=>scrollDown(certificatsRef)}
                  className="navigation__button navigation__link_type_header"
                >
                  Сертификаты
                </button>
              </li>
              <li className="navigation__item_type_header">
                <button
                  onClick={()=>scrollDown(faqRef)}
                  className="navigation__button navigation__link_type_header"
                >
                  Вопросы
                </button>
              </li>
              <li className="navigation__item_type_header">
                <button
                  onClick={()=>scrollDown(contactsRef)}
                  className="navigation__button navigation__link_type_header"
                >
                  Контакты
                </button>
              </li>
            </ul>
            </nav>
        ) : (
          <div className="navigation__menu_type_burger ">
          
       
          </div>
        )}
     
    </div>
  );
}

export default Navigation;
