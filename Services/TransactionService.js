const Transaction = require('../Models/Transaction');

class TransactionService{
    async getAllTransaction(){
        return await Transaction.findAll({include: ["compteDebiteur", "compteBeneficaire"]});
    }

    async getTransactionByID(compteID){
        return await Transaction.findByPk(compteID)
    }

    async addTransaction(transactiondata){
        return await Transaction.create(transactiondata)
    }
}

module.exports = new TransactionService();
