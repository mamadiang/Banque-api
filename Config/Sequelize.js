const Sequelize = require("sequelize");
const config = require('./config.json');

const sequelize = new Sequelize("banque", "root", "", {
    host : 'localhost',
    port: 3307,
    dialect : 'mysql',
})

module.exports = sequelize;