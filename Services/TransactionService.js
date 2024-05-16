const Transaction = require('../Models/Transaction');

class TransactionService{
    async getAllTransaction(){
        return await Transaction.findAll({include: ["compteDebiteur", "compteBeneficaire"]});
    }
}

module.exports = new TransactionService();
