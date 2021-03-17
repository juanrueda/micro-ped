const express = require('express');

const { Cliente } = require('../db_connection');

const router = express.Router();

//GET all clientes
router.get('/', async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
});

router.post('/', async (req, res) => {
    const nuevoCliente = await Cliente.create({
        nroDoc: req.body.nroDoc,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        domicilio: req.body.domicilio,
        telefono: req.body.telefono
    });
    res.json(nuevoCliente);
}); 

module.exports = router;