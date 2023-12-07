const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');


const loginController = require('../src/controllers/loginController'); // Import your User model
const User = require('../src/controllers/userController');
const { getTechID } = require('../src/models/SupportModel');

// Configure the LocalStrategy for user login
passport.use('local-login', new LocalStrategy(
  async (username, password, done) => {
    var type = 'installer';
    //check if the sign in is an installer
    if (type === 'installer'){
        try {
            //User verification 
            var user = await User.getUser({email: username});
            //Does the user exist
            if (!user){
                console.log('No User Found');
                return done(null, false, { message: 'Incorrect username.'})
            }

            try {
                //password verification
                var isMatch = await bcrypt.compare(password, user.password);
                if (isMatch){
                    console.log('Password Matched');
                    return done(null, user)
                } else {
                    console.log('Password did not match');
                    return done(null, false, {message: 'Incorrect Password.'})
                }
            } catch (error) {
                console.log("This is the Error: " + error);
                return done(error, false);
            }

        } catch (error) {
            console.log("Error: " + error);
            
        }
    }else{
        done('Invalid Username Please Try Again');
    }
  }
));

// Serialize the user by storing the user's ID in the session
passport.serializeUser((user, done) => {
    done(null, user.username); // Serialize user by storing the username in the session
});

passport.deserializeUser(async (username, done) => {
    try {
      const user = await User.getUser({ email: username });
      done(null, user); // Deserialize user by retrieving user object from the database
    } catch (err) {
      done(err, null);
    }
});

module.exports = passport;
