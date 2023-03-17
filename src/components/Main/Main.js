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
import Certificates from '../Сertificates/Сertificates';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';

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

  const wakesurfRef = useRef(null);
  const wakeboardRef = useRef(null);
  const boatrentRef = useRef(null);
  const walksRef = useRef(null);

  return (
    <div className='main'>
      <section
        className='main__section main__intro'
        style={{ '--introbg': `url(${introbg})` }}
      >
        <Intro />
      </section>
      <section className='main__section main__about'>
        <About   refs={{
    wakesurfRef: wakesurfRef,
    wakeboardRef: wakeboardRef,
    boatrentRef: boatrentRef,
    walksRef: walksRef,
  }} />
      </section>
      <section className='main__section main__wakesurf' style={{ '--wakesurfbg': `url(${wakesurfbg})`}} ref={wakesurfRef}>
        <Wakesurf/>
      </section>
      <section className='main__section main__boatrent' ref={boatrentRef}>
      <Accordion
          panels={panels}
          type={windowWidth < 901 ? "horizontal" : "vertical"}
        />
        </section>
        <section className='main__section main__wakeboard' ref={wakeboardRef}>
          <Wakeboard/>
        </section>
        <section className='main__slider' ref={walksRef}>
        <Walks/>
        </section>
        <section className='main__certificats'>
        <Certificates/>
        </section>
        <section className='main__faq'>
        <FAQ/>
        <Footer/>
        </section>
    </div>
  );
}

export default Main;
