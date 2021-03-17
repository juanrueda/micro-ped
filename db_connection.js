const {Sequelize, DataTypes} = require('sequelize');
require('dotenv/config');

const ClienteModel = require('./models/Cliente');

//Conexión a la db -- proccess.ev tiene la URI de conección.

const sequelize = new Sequelize(process.env.DB_CONNECTION, {});

//Funcion para testear si la conexion fue exitosa

async function testdb() {

    try {
        await sequelize.authenticate();
        console.log('Connection has been stablished successfuly');
    } catch (error) {
        console.log('Unable to connect to the database', error);
    }
}

testdb();

const Cliente = ClienteModel(sequelize, DataTypes); //Recupero el modelo inicilizado con los datos de la conexion

sequelize.sync()
    .then(() => {
        console.log('Tables synchronized');
    });


module.exports = { Cliente };