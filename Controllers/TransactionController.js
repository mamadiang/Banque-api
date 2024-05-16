const TransactionService = require('../Services/TransactionService')

class TransactionController{

    async getAlltransaction(request, result){
        try{
            const transactions = await TransactionService.getAllTransaction();
            result.json(transactions);
        } catch(error){
            result.status(500);
            console.log(error)
            result.json({error: "Une erreur est intervenue lors de la recuperation des transactions"})
            
        }
    }
}

module.exports = new TransactionController(); 