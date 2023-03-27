import React, { Suspense, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import ImagePopup from '../ImagePopup/ImagePopup';
import Main from "../Main/Main";

import ScrollToTopBtn from "../ScrollToTop/ScrollToTopBtn";
import NotFound from "../NotFound/NotFound";


import "./App.css";
import "../../const/localstyles.css"

function App() {
  // let history = useHistory();

  // history.listen((location, action) => {
  //   if (action === `PUSH`) window.scrollTo(0, 0);
  // });


  const [selectedCard, setSelectedCard] = React.useState({  photos: [], title:'', color:'', index: 0 });

  function closeAllPopus() {
    setSelectedCard({ photos: [], title: '', color:'', index: 0});
  }

  function handlePhotoClick(card) {
    setSelectedCard(card);    
  }


  return (
    <Suspense fallback={<Preloader />}>
      <div className="app">

        <Switch>
          <Route path="/" >
            <Main onPhotoClick={handlePhotoClick} />
          </Route>          
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <ScrollToTopBtn />
        <ImagePopup card={selectedCard} onClose={closeAllPopus}/>
      </div>
      
    </Suspense>
  );
}

export default App;
