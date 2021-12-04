const db = require('./firebase.js');

//TODO: filtrar por id de cliente en una factura

// Funcion para buscar facturas por estado factura
function searchFacturasEstadoFact(estadoFactura, callback) {
    return db.collection('Facturas').where("estado_factura", "==", estadoFactura).get()
        .then((refDoc) => {
            var facturas = [];
            refDoc.forEach(doc => {
                facturas.push(doc.data());
            })
            callback(facturas);
        })
        .catch((err) => {
            callback("Error al buscar facturaas con estado factura" + estadoFactura, err)
        })
}

//Obtiene todas las facturas
function getFacturas(callback) {
    return db.collection('Facturas').get()
        .then(refDoc => {
            var facturas = [];
            refDoc.forEach(doc => {
                facturas.push(doc.data());
            });
            callback(facturas);
        })
        .catch(err => {
            //console.error(`Error en las facturas ${err}`);
            callback(`Error Al traer las Facturas ${err}`);
        });
}

//obtiene una factura por id
function getOneFactura(idFactura, callback) {
    return db.collection('Facturas').doc(idFactura).get()
        .then(doc => {
            callback(doc.data());
        })
        .catch(err => {
            callback(`Error al traer la factura ${err}`);
        });
}

//Crea una factura
function addFactura(factura, callback) {
    return db.collection('Facturas').add(factura)
        .then(() => {
            callback('Factura Agregada');
        })
        .catch(err => {
            callback(`Error al crear la factura ${err}`);
        });
}

//Crea una factura
function addFacturaConID(id, factura, callback) {
    return db.collection('Facturas').doc(id).set(factura)
        .then(() => {
            callback('Factura Agregada');
        })
        .catch(err => {
            callback(`Error al crear la factura ${err}`);
        });
}

//actualizacion de factura con sobreescritura, el metodo set en firebase sobrescribe la informacion
function actualizarFactura(id, factura, callback) {
    return db.collection('Facturas').doc(id).set(factura)
        .then(() => {
            callback('Factura Actualizada');
        })
        .catch(err => {
            callback(`Error al actualizar la factura ${err}`);
        });
}

//Realiza una modificacion a una factura, actualizacion parcial no sobreescribe los datos
function modificarFactura(id, factura, callback) {
    return db.collection('Facturas').doc(id).update(factura)
        .then(() => {
            callback('Factura Modificada');
        })
        .catch(err => {
            callback(`Error al Modificar la factura ${err}`);
        });
}

//Elimina una factura
function eliminarFactura(id, callback) {
    return db.collection('Facturas').doc(id).delete()
        .then(() => {
            callback('Factura Eliminada');
        })
        .catch(err => {
            callback(`Error al eliminar la factura ${err}`);
        });
}

//Metodo para filtrar facturas por cliente



module.exports = {
    getFacturas,
    getOneFactura,
    addFactura,
    actualizarFactura,
    modificarFactura,
    eliminarFactura,
    searchFacturasEstadoFact,
    addFacturaConID
}