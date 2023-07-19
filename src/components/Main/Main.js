import React, { useState, useEffect,useRef } from 'react';
import Header from "../Header/Header";
import introbg from '../../images/mainbg.webp';
import wakesurfbg from '../../images/wakesurf-bg.webp';
import introbgMobile from "../../images/mainbg-mobile.webp";
import {panels} from "../../const/info";
import About from '../About/About';
import Intro from '../Intro/Intro';
import Wakesurf from '../Wakesurf/Wakesurf';
import Accordion from '../Accordion/Accordion';
import './Main.css';
import Wakeboard from '../Wakeboard/Wakeboard';
import Walks from '../Walks/Walks';
import Button from "../Button/Button";

const Certificates = React.lazy(() => import("../Сertificates/Сertificates"));
const FAQ = React.lazy(() => import("../FAQ/FAQ"));
const Footer = React.lazy(() => import("../Footer/Footer"));

function Main({onPhotoClick, onContactClick}) {
  const wakesurfRef = useRef(null);
  const wakeboardRef = useRef(null);
  const boatrentRef = useRef(null);
  const walksRef = useRef(null);
  const faqRef = useRef(null);
  const contactsRef = useRef(null);
  const certificatsRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
        style={{ '--introbg': `url(${introbg})`, "--introbg-mobile": `url(${introbgMobile})` }}
      
      >
        <Intro refs={{
    boatrentRef: boatrentRef, 
  }}/>
      </section>
 
      <section className='main__section main__about'>
        <About   refs={{
    wakesurfRef: wakesurfRef,
    wakeboardRef: wakeboardRef,
    boatrentRef: boatrentRef,
    walksRef: walksRef,    
  }}
  windowWidth = {windowWidth}
  />
      </section>
       

      <section className='main__section main__boatrent' ref={boatrentRef}>
      <Accordion
          panels={panels}
          type={windowWidth < 901 ? "slider" : "vertical"}
          onPhotoClick={onPhotoClick}
          windowWidth = {windowWidth}
          onContactClick={onContactClick}      
        />
        </section>
        <section className=' main__slider' ref={walksRef}>
        <Walks  panels={panels} onPhotoClick={onPhotoClick} onContactClick={onContactClick}/>
        </section>

      <section className='main__section main__wakeboard' ref={wakeboardRef}>
          <Wakeboard windowWidth = {windowWidth} panels={panels} onPhotoClick={onPhotoClick} />
        </section>


        <section className='main__section main__wakesurf' style={{ '--wakesurfbg': `url(${wakesurfbg})`}} ref={wakesurfRef}>
        <Wakesurf windowWidth = {windowWidth} panels={panels} onPhotoClick={onPhotoClick}/>
      </section>

       
        <section className='main__certificats' ref={certificatsRef}>
        <Certificates windowWidth = {windowWidth} onContactClick={onContactClick}/>
        </section> 
        <section className='main__faq' ref={faqRef}>
        <FAQ/>
        
        </section>
        <section className='main__lastcall'> 
    <h2 className='h2 main__lastcall-tittle'>Бронируй катер уже сегодня и <span className="main__lastcall_span"> подари яркие эмоции </span> себе и близким!</h2>
    <br></br>
   
    <Button
                    name='Забронировать'
                    width={250}
                    action={onContactClick}
                  />
                  </section>
        <section className='main__footer' ref={contactsRef}>
        <Footer  windowWidth = {windowWidth}/>
        </section>  
    </div>
  );
}

export default Main;
