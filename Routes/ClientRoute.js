const express = require('express');
const ClientController = require('../Controllers/ClientController');
const router = express.Router();

router.get('/', (req,res) => ClientController.getAllClient(req,res)) 
router.get('/:id', (request, result) => ClientController.getClientByID(request, result));
router.post('/' , (request, result) => ClientController.addClient(request, result));

module.exports = router;