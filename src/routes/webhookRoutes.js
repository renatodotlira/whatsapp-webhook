const express = require('express');
const router = express.Router();
const webhookController = require('../controllers/webhookController');

// Rota para obter todos os barbers
router.post('/webhook', webhookController.receiver);
router.post('/webhook/connection-update', webhookController.receiver);

module.exports = router;
