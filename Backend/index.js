const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Servidos De Sastreria Min tic')
});

app.get('/facturas', (req, res) => {
    db.getFacturas( function(facturas) {
        res.send(facturas); 
    });
});


app.listen(port, () => {
    console.log('Server is running on port', port);
});


const db = require('./src/db/crud_facturas');

db.getFacturas(); 