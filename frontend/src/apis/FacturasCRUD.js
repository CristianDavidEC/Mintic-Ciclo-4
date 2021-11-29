import axios from "axios";
const url = "http://localhost:5000";

export function searchFacturasEstadoFact(estadoFactura, callback){
    axios.get(url+"/facturas/search/"+estadoFactura)
    .then((res)=>{
        callback(res.data);
    })
    .catch((err)=>{
        callback(err);
    })
}
//Obtiene todas las facturas
export function getFacturas(callback) {
    axios.get(url+"/facturas/")
    .then((res)=>{
        callback(res.data);
    })
    .catch((err)=>{
        callback(err);
    })
}
