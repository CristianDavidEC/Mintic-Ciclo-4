import React from 'react'

const ItemAbonos = ({abono, fecha}) => {
    return (
        <>
            <div class="container m-2 border">
                <b>Abono: {abono}</b><br/>
                <b>Fecha: {fecha}</b><br/>
                <span><i class="m-2 fa fa-edit"></i></span>
                <span><i class="m-2 fa fa-trash"></i></span>
            </div>
        </>
    )
}

export default ItemAbonos
