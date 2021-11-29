import React from 'react'

const ItemAbonos = ({ abono, fecha }) => {
    return (
        <>
            <div className="container m-2 border">
                <b>Abono: {abono}</b><br />
                <b>Fecha: {fecha}</b><br />
                <span><i className="m-2 fa fa-edit display-6"></i></span>
                <span><i className="m-2 fa fa-trash display-6"></i></span>
            </div>
        </>
    )
}

export default ItemAbonos
