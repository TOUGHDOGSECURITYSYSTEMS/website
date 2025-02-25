const express = require("express");
const router = express.Router();
const {
    getKBentry,
    sendEmail,
    maurocheck,
    signUpUser,
} = require("../src/controllers/SupportController");
const { loginUser } = require("../src/controllers/loginController");
const {  googleAIBOT, chatgptbot } = require('../src/controllers/chatbotController');
const passport = require("passport");

//# GET REQUESTS
//GET KB entry
router.get("/api/entry/:id", getKBentry);
router.get("/techID", maurocheck);

//# POST REQUESTS
router.post("/login", (req, res, next) => {
    passport.authenticate("local-login", async (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({ message: info.message });
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            // If authentication succeeds, return the user object or any relevant data
            return res.status(200).json({ user });
        });
    })(req, res, next);
});

//Post request to SignUp
router.post("/signup", signUpUser);

//Post to sendEmail
router.post("/api/sendEmail", sendEmail);


//Post for chatgptbot
//router.post('/chatgptbot', chatgptbot);

//router.post('/googebot', googleAIBOT);


// Define more routes as needed

module.exports = router;
