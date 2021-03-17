const express = require('express');
const app = express();

require('./db_connection');
const bodyParser = require('body-parser');

//Middlewares

app.use(express.json());

// Import routes

const postRoute = require('./routes/pedidos');
const clientesRoute = require('./routes/clientes');

app.use('/pedidos', postRoute);

app.use('/clientes', clientesRoute);

//Routes

app.get('/', (req, res) => {
    res.send('We are on home');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});