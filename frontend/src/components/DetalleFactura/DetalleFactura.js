import React from 'react'
import Prendas from '../Prendas/Prendas'
import Abonos from '../Abonos/Abonos'
import Input from '../Inputs/Input'
import NavFacturas from '../NavFacturas'

const DetalleFactura = () => {
    return (
        <>
            <div className="container m-3 tabla">
                <h3 className="color-lc">Facturas</h3>
                <div className="row">
                    <div className="col-md-4 border">
                        <label>Nombre</label>
                        <Input placeholder="Nombre"/>
                        <label>Teléfono</label>
                        <Input placeholder="Teléfono"/>
                        <label>Id</label>
                        <Input placeholder="Teléfono"/>
                        <label>Correo</label>
                        <Input placeholder="Teléfono"/>
                        <label>Fecha Ingreso</label>
                        <Input placeholder="Teléfono"/>
                        <label>Estado Factura</label>
                        <Input placeholder="Teléfono"/>
                        <label>Total a Pagar</label>
                        <Input placeholder="Teléfono"/>
                    </div>
                    <div className="col-md-8">
                        <Prendas/>
                        <Abonos/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetalleFactura
