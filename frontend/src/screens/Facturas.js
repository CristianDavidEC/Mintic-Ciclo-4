import React from 'react'
import DetalleFactura from '../components/DetalleFactura/DetalleFactura'


const Facturas = () => {
    return (
        <>
            <div class="container m-2" style={{width: 1100}}>
                <h1 class="color-lc">Facturas</h1>
                <DetalleFactura></DetalleFactura>
            </div>
        </>
    )
}

export default Facturas
