const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(3000);


const db = require('./src/db/crud_facturas');

db.getFacturas(); 