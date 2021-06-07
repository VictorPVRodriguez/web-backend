const Sequelize = require('sequelize');
const UserModel = require('./models/Users');
const sequelize = new Sequelize('ficha10', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    pool: {
        max: 10,
        min: 0,
        acquired: 30000,
        idle: 10000
    }
});
// Nova instância para o modelo
const Users = UserModel(sequelize, Sequelize);
sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.error("Unable to connect ", err);
    });

sequelize.sync({ force: false })
    .then(() => {
        console.log("Tables and database created");
    })
module.exports = {
    Users
}
