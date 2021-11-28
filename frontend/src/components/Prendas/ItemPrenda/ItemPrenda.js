import React from 'react'

const ItemPrenda = ({tipo, talla, colorP}) => {
    return (
        <>
            <div class="container m-2 border">
                <b>Tipo: {tipo}</b><br/>
                <b>Talla: {talla}</b><br/>
                <b>Color: {colorP}</b><br/>
                <span><i class="m-2 fa fa-edit"></i></span>
                <span><i class="m-2 fa fa-trash"></i></span>
            </div>
        </>
    )
}

export default ItemPrenda
