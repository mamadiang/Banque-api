// vient de la dependance
const {Model, DataTypes} = require('sequelize');

// Vient de nitre fichier Sequelize.js
const sequelize = require('../Config/Sequelize');
const Compte = require('./Compte');
const bcrypt = require('bcrypt');

class Client extends Model{

    async validatePassword(password){
        return await bcrypt.compare(password, this.Password);
    }
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

    Password:{
        type: DataTypes.STRING,
        allowNull: false
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

    FK_Client: {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    
},{
    sequelize,
    modelName : 'Client',
    tableName: 'client',
    timestamps: false,
    hooks: {
        beforeCreate: async(client) => {
            client.Password = await bcrypt.hash(client.Password, 10);
        },
        beforeUpdate: async (client) => {
            if(client.changed('Password')){
                client.Password = await bcrypt.hash(client.Password, 10)
            }
        }
    }
}
);

Client.hasMany(Compte, { as : "comptes", foreignKey : "FK_Client"})


module.exports = Client; 