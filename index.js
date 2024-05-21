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
const authenticateRoute = require('./Routes/AuthenticateRoute');



app.use(express.json());


app.use('/clients', AuthenticateController.authenticateToken, clientRoute)
app.use('/compte', AuthenticateController.authenticateToken, compteRoute)
app.use('/transaction', AuthenticateController.authenticateToken, transactionRoute)
app.use('/auth', authenticateRoute)


module.exports = app; 