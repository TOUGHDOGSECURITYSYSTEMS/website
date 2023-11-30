const express = require('express');
const router = express.Router();
const { getKBentry, sendEmail, maurocheck, signUpUser} = require('../src/controllers/SupportController');
const { loginUser } = require('../src/controllers/loginController');
const passport = require('passport');



//# GET REQUESTS
//GET KB entry
router.get('/api/entry/:id', getKBentry);
router.get('/techID', maurocheck);



//# POST REQUESTS
//Post to Login
router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
}));

//Post request to SignUp
router.post('/signup', signUpUser);

//Post to sendEmail
router.post('/api/sendEmail', sendEmail);






// Define more routes as needed

module.exports = router;
