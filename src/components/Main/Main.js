import React, { useState, useEffect, useRef } from 'react';

import introbg from '../../images/mainbg.png';
import wakesurfbg from '../../images/wakesurf-bg.png';

import About from '../About/About';
import Intro from '../Intro/Intro';
import Wakesurf from '../Wakesurf/Wakesurf';
import './Main.css';

function Main() {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   document.title = "ЦТИ";
  // });

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowWidth(window.innerWidth);
  //   }
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

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
    </div>
  );
}

export default Main;
