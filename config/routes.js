const express = require('express');
const router = express.Router();
const { loginUser } = require('../src/controllers/loginController');

router.get('/api/entry/:id', require('../src/controllers/SupportController').getKBentry);
router.post('/login', loginUser);


// Define more routes as needed

module.exports = router;
