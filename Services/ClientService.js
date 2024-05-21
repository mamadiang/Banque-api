const Client = require("../Models/Client");

class ClientService {

    async getAllClient(){
        return await Client.findAll();
    }
    async getClientByID(clientID){
        return await Client.findByPk(clientID)
    }

    async addClient(clientdata){
        return await Client.create(clientdata);
    }
}

module.exports = new ClientService();