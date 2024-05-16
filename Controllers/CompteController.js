const CompteService = require('../Services/CompteService')

class CompteController{

    async getAllCompte(request, result){
        try{
            const comptes = await CompteService.getAllCompte();
            result.json(comptes);
        } catch(error){
            result.status(500);
            console.log(error);
            result.json({error: "Une erreur est intervenue lors de la recuperation des compte"})
            
        }
    }
}

module.exports = new CompteController(); 