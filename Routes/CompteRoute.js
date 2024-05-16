const express = require('express');
const CompteController = require('../Controllers/CompteController');
const router = express.Router();

router.get('/', (request, result) => CompteController.getAllCompte(request, result))

module.exports = router;