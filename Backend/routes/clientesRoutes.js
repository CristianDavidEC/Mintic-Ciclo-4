const express = require('express');
//Base de Datos Cientes
const db = require('../src/db/crudClientes.js');

const router = express.Router();

router.get('/:id', function (req, res) {
    const id = req.params.id;
    db.getCliente(id, function (cliente) {
        res.json(cliente);
    })
})

router.post('/', (req, res)=>{
    const cliente = req.body;
    db.addCliente(cliente, function (response) {
        res.send(response);
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const cliente = req.body;
    db.updateClienteTotally(id, cliente, function (response) {
        res.send(response);
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db.deleteCliente(id, function (response) {
        res.send(response);
    })
})

module.exports = router;