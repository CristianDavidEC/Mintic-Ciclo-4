import React from 'react'
import ItemAbonos from './ItemAbonos/ItemAbonos'

const Abonos = () => {
    return (
        <>
            <div class="container mb-5">
                <h4>Abonos:</h4>
                <div className="row">
                    <div className="col-md-4">
                        <ItemAbonos abono="10.000" fecha="25/11/2021"></ItemAbonos>
                    </div>
                    <div className="col-md-4">
                        <ItemAbonos abono="5.000" fecha="26/11/2021"></ItemAbonos>
                    </div>
                    <div className="col-md-1 mt-4">
                        <i class="fa fa-plus-circle mt-1 display-6"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Abonos