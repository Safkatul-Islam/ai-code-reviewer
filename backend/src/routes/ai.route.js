const express = require('express');
const controller = require('../controllers/ai.controller');

const router = express.Router();

router.post('/get-review', controller.getResponse);

module.exports = router;