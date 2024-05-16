const {Model, DataTypes} = require('sequelize');

const sequelize = require('../Config/Sequelize');
class Compte extends Model{

}

Compte.init({
    ID :{
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
    },

    Solde :{
        type : DataTypes.FLOAT,
        allowNull : false,
    },

    RIB :{
        type : DataTypes.STRING,
        allowNull : false,
    },

    DateOuverture :{
        type : DataTypes.DATE,
        allowNull : false,
    },

    FK_Client :{
        type : DataTypes.INTEGER,
        allowNull : false,
    },

    TauxInteret :{
        type : DataTypes.FLOAT, 
        allowNull : false,
    },
   
},{
     sequelize,
    modelName: "Compte", 
    tableName: 'compte',
    timestamps: false
});



module.exports = Compte;