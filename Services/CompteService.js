const Compte =  require("../Models/Compte");

class CompteService {
    async getAllCompte(){
        return await Compte.findAll();
    }

    async getCompteByID(compteID){
        return await Compte.findByPk(compteID)
    }
}

module.exports = new CompteService();