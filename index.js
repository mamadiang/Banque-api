//const Client = require('./Models/Client');
//const Compte = require('./Models/Compte');
//const Transaction = require('./Models/Transaction');
// Client.findAll({include : 'comptes'}).then(clients => {
//     clients.map(client => {
//         console.log(client.toJSON());
//     })
// })

//Compte.findAll().then(comptes => {
//    comptes.map(compte => {
    //    console.log(compte.toJSON());
    //})
//})

//Transaction.findAll().then(transactions => {
  //  let transactionsData = transactions.map(transaction => transaction.get())

   // console.log(transactionsData);
//})


const express = require('express');
const app = express();
const clientRoute = require('./Routes/ClientRoute');
const compteRoute = require('./Routes/CompteRoute');
const transactionRoute = require('./Routes/TransactionRoute');



app.use(express.json());

app.use('/clients', clientRoute)
app.use('/compte', compteRoute)
app.use('/transaction', transactionRoute)


module.exports = app; 