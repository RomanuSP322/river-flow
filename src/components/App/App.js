import React, { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import ImagePopup from '../ImagePopup/ImagePopup';
import Main from "../Main/Main";
import {panels} from "../../const/info";
import ScrollToTopBtn from "../ScrollToTop/ScrollToTopBtn";
import "./App.css";
import "../../const/localstyles.css"
import ContactPopup from '../ContactPopup/ContactPopup';

function App() {

  const { pathname, hash, key } = useLocation();
  useEffect(() => { 
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest", offsetTop: element.offsetTop + 50});
          window.history.replaceState(null, null, pathname);
        } else {
          if (id === 'regal') {
            setSelectedCard({  title: panels[3].label,
              photos: panels[3].photos,
              color: panels[3].text_color,}); 
              window.history.replaceState(null, null, pathname);
          }
          if (id === 'searay') {
            setSelectedCard({  title: panels[0].label,
              photos: panels[0].photos,
              color: panels[0].text_color,}); 
              window.history.replaceState(null, null, pathname);
          }
          if (id === 'favourit') {
            setSelectedCard({  title: panels[1].label,
              photos: panels[1].photos,
              color: panels[1].text_color,}); 
              window.history.replaceState(null, null, pathname);
          }
          if (id === 'mastercraft') {
            setSelectedCard({  title: panels[4].label,
              photos: panels[4].photos,
              color: panels[4].text_color,}); 
              window.history.replaceState(null, null, pathname);
          }
          if (id === 'aphaline') {
            setSelectedCard({  title: panels[2].label,
              photos: panels[2].photos,
              color: panels[2].text_color,}); 
              window.history.replaceState(null, null, pathname);
          }
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  const [selectedCard, setSelectedCard] = React.useState({  photos: [], title:'', color:'', index: 0 });
  const [contact, setContact] = React.useState('');
  function closeAllPopus() {
    setSelectedCard({ photos: [], title: '', color:'', index: 0});
  }

  function closeContactPopup() {
    setContact("");
  }

  function handleContactClick(call) {
    setContact(call);    
  }

  function handlePhotoClick(card) {
    setSelectedCard(card);    
  }
  


  return (
    <Suspense fallback={<Preloader />}>
      <div className="app">
            <Main onPhotoClick={handlePhotoClick} onContactClick={handleContactClick}/>
        <ScrollToTopBtn />
        <ImagePopup card={selectedCard} onClose={closeAllPopus}/>
        <ContactPopup phone={contact} onClose={closeContactPopup} title={contact}/>
      </div>
      
    </Suspense>
  );
}

export default App;
