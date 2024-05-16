const express = require('express');
const TransactionController = require('../Controllers/TransactionController');
const router = express.Router();

router.get('/', (request, result) => TransactionController.getAlltransaction(request, result))
router.get('/:id', (request, result) => TransactionController.getTransactionByID(request, result))

module.exports = router;