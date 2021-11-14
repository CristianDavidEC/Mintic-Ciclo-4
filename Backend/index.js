const express = require('express');

const app = express();
const port = 3000;

const db = require('./src/db/crud_facturas');

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidos De Sastreria Min tic')
});

//Trae todas las facturas
app.get('/facturas', (req, res) => {
    db.getFacturas( function(facturas) {
        res.send(facturas); 
    });
});

//Trae las facturas con un id especifico
app.get('/factura/:id', (req, res) => {
    const id = req.params.id;
    db.getOneFactura(id, function(factura) {
        res.json(factura); 
    });   
});

//Crea una Factura
app.post('/add-factura', (req, res) => {
    const factura = req.body;
    db.addFactura(factura, function(mensaje) {
        res.send(mensaje); 
    });
});

//Actualiza una Factura sobreescribiendola
app.put('/actualizar-factura/:id', (req, res) => {
    const id = req.params.id;
    const factura = req.body;
    db.actualizarFactura(id, factura, function(mensaje) {
        res.send(mensaje); 
    });
});

//Modifica la factura, de manera parcial
app.patch('/modificar-factura/:id', (req, res) => {
    const id = req.params.id;
    const factura = req.body;
    db.modificarFactura(id, factura, function(mensaje) {
        res.send(mensaje); 
    });
});

//Elimina una factura
app.delete('/eliminar-factura/:id', (req, res) => {
    const id = req.params.id;
    db.eliminarFactura(id, function(mensaje) {
        res.send(mensaje); 
    });
});

app.listen(port, () => {
    console.log('Server is running on port', port);
});


