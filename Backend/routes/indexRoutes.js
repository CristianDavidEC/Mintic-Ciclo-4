//Importa las rutas de cada funcion crud
const routerFactura = require('./facturasRoutes.js');
const routerCliente = require('./clientesRoutes.js');

//Todas las rutas principales de cada entidad con crud se agrega dentro de la funcion
function APIRoutes(app) {
    app.use('/facturas', routerFactura);
    app.use('/clientes', routerCliente);
}

module.exports = APIRoutes;