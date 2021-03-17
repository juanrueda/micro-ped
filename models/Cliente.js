module.exports = (sequelize, type) => {
    return sequelize.define('Cliente', {
        nroDoc: {
            field: 'nro_doc',  //Uso field para que mapee bien la prop con columna (nombres distintos)
            type: type.STRING,
            allowNull: false,
            primaryKey: true
        },
        nombre: type.STRING,
        apellido: type.STRING,
        domicilio: type.STRING,
        telefono: type.STRING,
    }, {
        timestamps: false,
        tableName: 'clientes'
    });
}