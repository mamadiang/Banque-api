const Compte =  require("../Models/Compte");

class CompteService {
    async getAllCompte(){
        return await Compte.findAll();
    }
}

module.exports = new CompteService();