const express = require('express');
const APIRoutes = require('./routes/indexRoutes.js');
const app = express();
const port = 3000;

//app.use(express.static('public'));
app.use(express.json());

//Recibe la app expres en la cual va a utilizar las rutas
APIRoutes(app);

app.listen(port, () => {
    console.log('Server is running on port', port);
});


