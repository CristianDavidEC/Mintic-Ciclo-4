const db = require('./firebase');

function getFacturas(callback) {
    return db.collection('Facturas').get()
    .then( refDoc => {
        var facturas = [];
        refDoc.forEach( doc => {
            facturas.push(doc.data());
        });
        callback(facturas);
    })
    .catch( err => {
        //console.error(`Error en las facturas ${err}`);
        callback(`Error to get Experts ${err}`);
    });
}

module.exports = {
    getFacturas
}