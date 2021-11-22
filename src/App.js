import React, { useEffect, useState } from 'react';

import './utils/css/reset.css';
import './utils/css/main.css'
import WOW from 'wowjs';
import { Portfolio, Footer, Main, Mail,About} from './components';
import Action_list from './utils/Action_list';

const App = () => {


  /* wow.js */
  useEffect(()=>{
    new WOW.WOW().init();
  },[])

  return (
    <Action_list>
    <div id="wrap">
      <Main />
      <About/>
      <Portfolio/>
      <Mail/>
      <Footer/>
    </div>
    </Action_list>
  );
};

export default App;