const express = require('express');
const router = express.Router();
const { getKBentry, sendEmail} = require('../src/controllers/SupportController');
const { loginUser } = require('../src/controllers/loginController');


//# GET REQUESTS
//GET KB entry
router.get('/api/entry/:id', getKBentry);


//# POST REQUESTS
//Post to Login
router.post('/login', loginUser);

//Post to sendEmail
router.post('/api/sendEmail', sendEmail);




// Define more routes as needed

module.exports = router;
