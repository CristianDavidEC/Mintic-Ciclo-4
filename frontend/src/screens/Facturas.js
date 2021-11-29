import React from 'react'
import Tabla from '../components/Tabla/Tabla'
import Input from '../components/Inputs/Input'
import NavFacturas from '../components/NavFacturas'

const Facturas = () => {
    return (
        <>
            <div className="container m-3 tabla">
                <NavFacturas />
                <div className="row">
                    <div className="col-md-9">
                    </div>
                    <div className="col-md-3">
                        <Input placeholder="Buscar"/>
                    </div>
                </div>
                <div className="row">
                    <Tabla />
                </div>
            </div>
        </>
    )
}
export default Facturas
