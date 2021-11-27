import React from 'react'
import Tabla from '../components/Tabla/Tabla'
import Input from '../components/Inputs/Input'


const Facturas = () => {
    return (
        <>
            <div class="container m-2" style={{width: 1100}}>
                <h3 class="color-lc">Facturas</h3>
                <div class="row">
                    <div class="col-md-9">
                    </div>
                    <div class="col-md-3">
                        <Input placeholder="Buscar"/>
                    </div>
                </div>
                <div class="row">
                    <Tabla />
                </div>
            </div>
        </>
    )
}

export default Facturas
