const passport = require("passport");

// Function to manage userinput
function manageLogin(username) {
    const installer = /-.*[a-zA-Z]/;
    const client = /^[0-9]+$/;

    if (installer.test(username)) {
        console.log(installer.test(username));
        return "installer";
    } else if (client.test(username)) {
        const length = username.length;

        if (length == 5) {
            return "dealer";
        } else if (length == 3) {
            return "Distributor";
        } else {
            return "Invalid Username Please Try Again";
        }
    } else {
        return "Not a User";
    }
}

// Function to handle user login
const loginUser = (req, res, next) => {
    passport.authenticate("local", async (err, user, info) => {
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
};

module.exports = { loginUser, manageLogin };
