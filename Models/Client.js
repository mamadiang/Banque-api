// vient de la dependance
const {Model, DataTypes} = require('sequelize');

// Vient de nitre fichier Sequelize.js
const sequelize = require('../Config/Sequelize');
const Compte = require('./Compte');

class Client extends Model{

}

Client.init({
    ID : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    Nom :{
        type : DataTypes.STRING,
        allowNull : false
    },

    Prenom :{
        type : DataTypes.STRING,
        allowNull : false
    },

    Ville :{
        type : DataTypes.STRING,
        allowNull : true
    },

    Telephone :{
        type : DataTypes.STRING,
        length : 10,
        allowNull : true
    },

    Email :{
        type : DataTypes.STRING,
        allowNull : true
    },

    Adresse :{
        type : DataTypes.STRING,
        allowNull : true
    },

    CodePostal :{
        type : DataTypes.STRING,
        length :7,
        allowNull : true
    },

    

},{
    sequelize,
    modelName : 'Client',
    tableName: 'client',
    timestamps: false
}
);

Client.hasMany(Compte, { as : "comptes", foreignKey : "FK_Client"})
module.exports = Client; 