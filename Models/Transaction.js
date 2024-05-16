const {Model, DataTypes}= require('sequelize');
const sequelize = require('../Config/Sequelize');
const Compte = require('./Compte');

class Transaction extends Model {

}

Transaction.init({
    ID :{
        type : DataTypes.INTEGER,
        autoIncrement :true,
        primaryKey: true
    },

    Type: {
        type : DataTypes.STRING,
        allowNull : false
    },

    Ponctuel:{
        type : DataTypes.BOOLEAN,
        allowNull : false,
    },

    Date:{
        type: DataTypes.DATE,
        allowNull: false
    },
    
    CompteDebiteur:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references :{
            model : "Compte",
            key: "ID"
        }
    },

    CompteBeneficiaire :{
        type : DataTypes.INTEGER,
        allowNull : false,
        references :{
            model : "Compte",
            key: "ID"
        }
    },

},{
    sequelize,
    modelName: 'Transaction',
    tableName: 'transaction',
    timestamps: false
});

Transaction.belongsTo(Compte, {as : "compteDebiteur", foreignKey : "CompteDebiteur"})
Transaction.belongsTo(Compte, {as : "compteBeneficaire", foreignKey : "CompteBeneficiaire"})


module.exports = Transaction;