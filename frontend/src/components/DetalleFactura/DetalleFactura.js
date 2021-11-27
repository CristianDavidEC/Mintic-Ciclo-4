import React from 'react'
import Prendas from '../Prendas/Prendas'
import Abonos from '../Abonos/Abonos'
import Input from '../Inputs/Input'

const DetalleFactura = () => {
    return (
        <>
            <div class="container m-2" style={{width: 1050}}>
                <div class="row">
                    <div class="col-md-4 border">
                        <label>Nombre</label>
                        <Input placeholder="Nombre"></Input>
                        <label>Teléfono</label>
                        <Input placeholder="Teléfono"></Input>
                        <label>Id</label>
                        <Input placeholder="Teléfono"></Input>
                        <label>Correo</label>
                        <Input placeholder="Teléfono"></Input>
                        <label>Fecha Ingreso</label>
                        <Input placeholder="Teléfono"></Input>
                        <label>Estado Factura</label>
                        <Input placeholder="Teléfono"></Input>
                        <label>Total a Pagar</label>
                        <Input placeholder="Teléfono"></Input>
                    </div>
                    <div class="col-md-8">
                        <Prendas/>
                        <Abonos/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetalleFactura
