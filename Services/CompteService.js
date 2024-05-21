const Compte =  require("../Models/Compte");

class CompteService {
    async getAllCompte(){
        return await Compte.findAll();
    }

    async getCompteByID(compteID){
        return await Compte.findByPk(compteID)
    }

    async addCompte(comptedata){
        return await Compte.create(comptedata)
    }
}

module.exports = new CompteService();