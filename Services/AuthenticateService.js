const jwt = require("jsonwebtoken");
const config = require('../Config/config.json');
const { where } = require("sequelize");
const Client = require("../Models/Client");

class AuthenticateService{

    async register(clientdata){
        const client = await Client.create(clientdata);
        return this.generateToken(client);
    }

    async login(email, password){
        const client = await Client.findOne({where: {Email: email}})
        if(!client ||!await client.validatePassword(password)){
            throw new Error("Email ou password n'est pas correct")
        }
        return this.generateToken(client);
    }

    generateToken(client){
        const payload = {
            id: Client.ID,
            email:client.Email
        }
        return jwt.sign(payload,config.SECRET,{expiresIn: "1h"});
        
    }
}


module.exports = new AuthenticateService();