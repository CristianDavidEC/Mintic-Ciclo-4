import React from 'react'
import ItemPrenda from './ItemPrenda/ItemPrenda'

const Prendas = () => {
    return (
        <>
            <div class="container mb-5">
                <h4>Prendas:</h4>
                <div className="row">
                    <div className="col-md-4">
                        <ItemPrenda tipo="Camiseta" talla="S" colorP="Blanco"></ItemPrenda>
                    </div>
                    <div className="col-md-4">
                        <ItemPrenda tipo="Pantalón" talla="M" colorP="Negro"></ItemPrenda>
                    </div>
                    <div className="col-md-1 mt-4">
                        <i class="fa fa-plus-circle mt-3 display-6"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prendas
