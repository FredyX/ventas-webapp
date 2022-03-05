import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import Successfulmessage from './components/successfulmessage';
import Errormessage from './components/errormessage1';
import Errormessage2 from './components/errormessage2';


ReactDOM.render(
  <React.StrictMode>
    <Successfulmessage />
    <Errormessage />
    <Errormessage2 />

  </React.StrictMode>,
  document.getElementById('root')
);


