module.exports = (sequelize, type) => {
    // Definição do modelo
    return sequelize.define('users', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        password: type.TEXT,
        email: type.STRING,
    });
}