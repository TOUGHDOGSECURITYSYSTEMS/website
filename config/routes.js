const express = require('express');
const router = express.Router();

router.get('/api/entry/:id', require('../src/controllers/SupportController').getKBentry);

// Define more routes as needed

module.exports = router;
