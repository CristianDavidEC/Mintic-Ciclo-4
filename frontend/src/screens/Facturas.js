import React from 'react'
import Tabla from '../components/Tabla/Tabla'
import Input from '../components/Inputs/Input'
import NavFacturas from '../components/NavFacturas'
import {Navigate} from 'react-router-dom';
import {getFacturas,searchFacturasEstadoFact} from "../apis/FacturasCRUD";


const Facturas = () => {
    var user_admin = JSON.parse(localStorage.getItem("user_admin"));
    if (user_admin == undefined) {
      return <Navigate to="/" />;
    }
    
    getFacturas(res =>{
        console.log(res);
    });
    searchFacturasEstadoFact('pagado',res =>{
        console.log(res);
    });
    return (
        <>
            <div class="container ancho" /*style={{width: 1060}}*/>
                <NavFacturas/>
                <div  className= "m-3">
                    <div class="row">
                        <div class="col-md-9">
                        </div>
                        <div class="col-md-3">
                            <Input placeholder="Buscar" />
                        </div>
                    </div>
                    <div class="row">
                        <Tabla />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Facturas
