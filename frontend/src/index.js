import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Import Boostrap ---------------------------------------
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../src/style.css'
//-------------------------------------------------------

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
