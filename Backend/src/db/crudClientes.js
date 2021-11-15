const db = require('./firebase.js');

function getCliente(id, callback) {
    return db.collection('Cliente').doc(id).get()
        .then((doc) => {
            callback(doc.data())
        })
        .catch((err) => {
            callback(`Error al buscar el cliente ${err}`);
        })
}

function addCliente(cliente, callback) {
    return db.collection('Cliente').add(cliente)
        .then(() => {
            callback("Cliente Creado")
        })
        .catch((err) => {
            callback(`Error al agregar Cliente ${err}`);
        })
}

function updateClienteTotally(id, cliente, callback) {
    return db.collection('Cliente').doc(id).set(cliente)
        .then(() => {
            callback("Cliente Actualizado");
        })
        .catch((err) => {
            callback(`Error actualizar cliente ${err}`);
        })
}


function deleteCliente(id, callback) {
    return db.collection('Cliente').doc(id).delete()
        .then(() => {
            callback("Cliente Eliminado");
        })
        .catch((err) => {
            callback(`Error al Eliminar cliente ${err}`);
        })
}

module.exports = {
    getCliente,
    addCliente,
    updateClienteTotally,
    deleteCliente
}