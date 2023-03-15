import React, { useState, useEffect, useRef } from 'react';

import introbg from '../../images/mainbg.png';
import wakesurfbg from '../../images/wakesurf-bg.png';
import {panels} from "../../const/info";
import About from '../About/About';
import Intro from '../Intro/Intro';
import Wakesurf from '../Wakesurf/Wakesurf';
import Accordion from '../Accordion/Accordion';
import './Main.css';
import Wakeboard from '../Wakeboard/Wakeboard';
import Walks from '../Walks/Walks';

function Main() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   document.title = "ЦТИ";
  // });

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = useRef(null);

  return (
    <div className='main'>
      <section
        className='main__section main__intro'
        style={{ '--introbg': `url(${introbg})` }}
      >
        <Intro />
      </section>
      <section className='main__section main__about'>
        <About />
      </section>
      <section className='main__section main__wakesurf' style={{ '--wakesurfbg': `url(${wakesurfbg})`}}>
        <Wakesurf/>
      </section>
      <section className='main__section main__boatrent'>
      <Accordion
          panels={panels}
          type={windowWidth < 901 ? "horizontal" : "vertical"}
        />
        </section>
        <section className='main__section main__wakeboard'>
          <Wakeboard/>
        </section>
        <section className='main__slider'>
        <Walks/>
        </section>
    </div>
  );
}

export default Main;
