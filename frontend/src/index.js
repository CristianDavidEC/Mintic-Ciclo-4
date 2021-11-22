import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ButtonClose from './components/ButtonClose';

//Import Boostrap ---------------------------------------
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
//-------------------------------------------------------

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ButtonClose />
  </React.StrictMode>,
  document.getElementById('root')
);
