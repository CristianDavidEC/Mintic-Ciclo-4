import axios from "axios";
const url = "https://sastreria-bakend.herokuapp.com";

export function searchFacturasEstadoFact(estadoFactura, callback) {
    axios.get(url + "/facturas/search/" + estadoFactura)
        .then((res) => {
            callback(res.data);
        })
        .catch((err) => {
            callback(err);
        })
}
//Obtiene todas las facturas
export function getFacturas(callback) {
    axios.get(url + "/facturas/")
        .then((res) => {
            callback(res.data);
        })
        .catch((err) => {
            callback(err);
        })
}

//Agregar una nueva factura con Id
export function addFacturaConID(factura, callback) {
    axios.post(url + "/facturas/" + factura.id, factura)
        .then((res) => {
            callback(res.data);
        })
        .catch((err) => {
            callback(err);
        })
}

//Traer detalles factura con Id
export function getOneFactura(idFactura, callback) {
    axios.get(url + "/facturas/" + idFactura)
        .then((res) => {
            callback(res.data);
        })
        .catch((err) => {
            callback(err);
        })
}