const express = require('express');
const APIRoutes = require('./routes/indexRoutes.js');
const app = express();
const cors = require('cors');
const port = 5000;

//app.use(express.static('public'));
app.use(express.json());
app.use(cors());
//Recibe la app expres en la cual va a utilizar las rutas
APIRoutes(app);

app.listen(port, () => {
    console.log('Server is running on port', port);
});


