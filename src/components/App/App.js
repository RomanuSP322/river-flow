import React, { Suspense, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

import Main from "../Main/Main";

import ScrollToTopBtn from "../ScrollToTop/ScrollToTopBtn";
import NotFound from "../NotFound/NotFound";

import "./App.css";
import "../../const/localstyles.css"

// const Company = React.lazy(() => import("../Company/Company"));
// const Main = React.lazy(() => import("../Main/Main"));
// const IETR = React.lazy(() => import("../IETR/IETR"));
// const Learning = React.lazy(() => import("../Learning/Learning"));
// const Databases = React.lazy(() => import("../Databases/Databases"));
// const Ksptr = React.lazy(() => import("../Ksptr/Ksptr"));
// const Portfolio = React.lazy(() => import("../Portfolio/Portfolio"));
// const News = React.lazy(() => import("../News/News"));
// const Project = React.lazy(() => import("../Project/Project"));
// const Contacts = React.lazy(() => import("../Contacts/Contacts"));

function App() {
  // let history = useHistory();

  // history.listen((location, action) => {
  //   if (action === `PUSH`) window.scrollTo(0, 0);
  // });



  return (
    <Suspense fallback={<Preloader />}>
      <div className="app">

        <Switch>
          <Route path="/" >
            <Main />
          </Route>          
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <ScrollToTopBtn />
      </div>
    </Suspense>
  );
}

export default App;
