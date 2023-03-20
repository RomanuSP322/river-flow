import React, { useState, useEffect,useRef } from 'react';
import Header from "../Header/Header";
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

function Main({refs}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   document.title = "ЦТИ";
  // });

  const wakesurfRef = useRef(null);
  const wakeboardRef = useRef(null);
  const boatrentRef = useRef(null);
  const walksRef = useRef(null);
  const faqRef = useRef(null);
  const contactsRef = useRef(null);
  const certificatsRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className='main'>
             <Header refs={{
    wakesurfRef: wakesurfRef,
    wakeboardRef: wakeboardRef,
    boatrentRef: boatrentRef,
    walksRef: walksRef,
    certificatsRef: certificatsRef,
    faqRef: faqRef,
    contactsRef: contactsRef,
  }}/>
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
        <section className=' main__slider' ref={walksRef}>
        <Walks/>
        </section>
        <section className='main__certificats' ref={certificatsRef}>
        <Certificates/>
        </section>
        <section className='main__faq' ref={faqRef}>
        <FAQ/>
        
        </section>
        <section className='main__footer' ref={contactsRef}>
        <Footer />
        </section>
    </div>
  );
}

export default Main;
