const express = require('express');
const router = express.Router();
const { getKBentry, sendEmail} = require('../src/controllers/SupportController');
const { loginUser } = require('../src/controllers/loginController');

router.get('/api/entry/:id', getKBentry);
router.post('/login', loginUser);
router.post('/api/sendEmail', sendEmail);




// Define more routes as needed

module.exports = router;
