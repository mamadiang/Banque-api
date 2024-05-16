const ClientService = require("../Services/ClientService");

class ClientController{

    async getAllClient(request, result){
        try{
            const clients = await ClientService.getAllClient();
            result.json(clients)
        } catch(error){
            result.status(500);
            result.json({error: "Une erreur est intervenue lors de la recuperation des clients"})
            
        }
    }

    async getClientByID(request, result){
        try{
            const client = await ClientService.getClientByID(request.params.id);
            result.json(client);
        } catch(error) {
            result.status(500);
            result.json({error: "Une erreur est intervenue lors de la recuperation des clients"})
            
        }
    }
}

module.exports = new ClientController();