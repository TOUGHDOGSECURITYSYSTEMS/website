const passport = require("passport");
const loginModel = require("../models/loginModel");

// Function to manage userinput
function manageLogin(email) {
    return "installer"
}

// Function to handle user login
const loginUser = (req, res, next) => {
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
            // If authentication succeeds, return the user object or any relevant datathis 
            return res.status(200).json({ user });
        });
    })(req, res, next);
};

module.exports = { loginUser, manageLogin,};
