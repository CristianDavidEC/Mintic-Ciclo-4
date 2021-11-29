import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar.js';

import Home from './screens/Home.js';
import Facturas from './screens/Facturas.js';
import Login from './screens/Login.js';
import NotFound from './screens/NotFound.js';
import DetalleFactura from './components/DetalleFactura/DetalleFactura'
import Tabla from './components/Tabla/Tabla'

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/facturas" element={<Facturas />} />
            <Route path="/detalleFactura" element={<DetalleFactura />} />
            <Route path="/registrarFactura" element={<DetalleFactura />} />
            <Route path="/todasFacturas" element={<Tabla/>} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
