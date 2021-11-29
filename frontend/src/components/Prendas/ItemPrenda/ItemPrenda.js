import React from 'react'

const ItemPrenda = ({ color, marca, tipo, tipoArreglo, costo }) => {
    return (
        <>
            <div className="container m-2 border">
                <b>Color: {color}</b><br />
                <b>Marca: {marca}</b><br />
                <b>Tipo: {tipo}</b><br />
                <b>Tipo Arreglo: {tipoArreglo}</b><br />
                <b>Costo: {costo}</b><br />
                <span><i className="m-2 fa fa-edit display-6"></i></span>
                <span><i className="m-2 fa fa-trash display-6"></i></span>
            </div>
        </>
    )
}

export default ItemPrenda
