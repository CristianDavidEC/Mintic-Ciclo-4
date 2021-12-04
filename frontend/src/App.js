import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar.js';

import Home from './screens/Home.js';
import Facturas from './screens/Facturas.js';
import Login from './screens/Login.js';
import NotFound from './screens/NotFound.js';
import DetalleFactura from './components/DetalleFactura/DetalleFactura'
import RegistroFactura from './components/RegistroFactura/RegistroFactura'
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
            <Route path="/detalleFactura" element={<DetalleFactura titulo="Detalle Factura" />} />
            <Route path="/registrarFactura" element={<RegistroFactura titulo="Registrar Factura" />} />
            <Route path="/todasFacturas" element={<Tabla />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
