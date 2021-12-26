import React, { useEffect, useState } from 'react';

import './utils/css/reset.css';
import './utils/css/main.css'
import WOW from 'wowjs';
import { Portfolio, Footer, Main, Mail,About} from './components';
import ApidataList from './utils/Context/ApidataList';

const App = () => {


  /* wow.js */
  useEffect(()=>{
    new WOW.WOW().init();
  },[])

  return (
    <ApidataList>
    <div id="wrap">
      <Main />
      <About/>
      <Portfolio/>
      <Mail/>
      <Footer/>
    </div>
    </ApidataList>
  );
};

export default App;