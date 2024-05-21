const ClientService = require("../Services/ClientService");

class ClientController{

    async getAllClient(request, result){
        try{
            const clients = await ClientService.getAllClient({include, comptes});
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

    async addClient(request, result){
        try{
            const client = await ClientService.addClient(request.body);
            result.json(client);
        }catch(error){
            result.status(500);
            result.json({error: "Une erreur est intervenue lors de l'insertion du client"})
        }
    }
   
}

module.exports = new ClientController();