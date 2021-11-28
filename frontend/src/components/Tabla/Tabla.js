import React from 'react'
import Tr from './Tr'

const Tabla = () => {
    return (
        <>
            <table className="table table-striped">
                <thead class="color-t color-lc">
                    <tr>
                        <th>Id Factura</th>
                        <th>Cliente</th>
                        <th>Estado</th>
                        <th>Fecha Ingreso</th>
                        <th>Detalles</th>
                    </tr>
                </thead>
                <tbody>
                    <Tr id="001" cliente="Cristian Escobar" estado="Entregado" fecha="20/11/2021"/>
                    <Tr id="002" cliente="Jhonatan Ortiz" estado="Pendiente" fecha="25/11/2021"/>
                </tbody>
            </table>
        </>
    )
}

export default Tabla