import React from 'react'
import Prendas from '../Prendas/Prendas'
import Abonos from '../Abonos/Abonos'
import Input from '../Inputs/Input'
import NavFacturas from '../NavFacturas'

const DetalleFactura = ({ titulo }) => {

    const prendas = {
        color: 'test',
        marca: '',
        tipoPrenda: '',
        tipoArreglo: '',
        costo: 0,
    }
    const abonos = {
        valor: even.target[0].value,
        fecha: '2021-01-01 00:00:00'
    }

    return (
        <>
            <div className="container ancho">
                <NavFacturas />
                <div className="">
                    <h4>{titulo}</h4>
                    <div className="row">
                        <div className="col-md-4 border-end">
                            <label>Nombre</label>
                            <Input placeholder="Nombre" />
                            <label>Teléfono</label>
                            <Input placeholder="Teléfono" />
                            <label>Id</label>
                            <Input placeholder="Id" />
                            <label>Correo</label>
                            <Input placeholder="Correo" />
                            <label>Fecha Ingreso</label>
                            <Input placeholder="Fecha Ingreso" />
                            <label>Estado Factura</label>
                            <Input placeholder="Estado Factura" />
                            <label>Total a Pagar</label>
                            <Input placeholder="Total a Pagar" />
                            <button class="btn color-p color-l">Guardar</button>
                        </div>
                        <div className="col-md-8">
                            <Prendas listaPrendas={prendas}/>
                            <Abonos listaAbonos={abonos}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetalleFactura
