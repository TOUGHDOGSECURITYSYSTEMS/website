const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');


const User = require('../src/controllers/loginController'); // Import your User model
const findUser = require('../src/models/loginModel')

// Configure the LocalStrategy for user login
passport.use(new LocalStrategy(
  async (username, password, done) => {
    
    var type = User.manageLogin(username); //check what type of user it is
    console.log(type);


    //check if the sign in is an installer
    if (type === 'installer'){
        try {
            //User verification 
            var user = await findUser.getInstaller({username: username});
            console.log(user);
            //Does the user exist
            if (!user){
                console.log('No User Found');
                return done(null, false, { message: 'Incorrecet username.'})
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
    //check if the sign in is an Dealer
    }else if(type === 'dealer'){
        try {
            //User verification
            var username = parseInt(username); //converting to integer to send proper format into query
            var user = await findUser.getDealer({username: username});
            if (!user){
                console.log('Incorrect Username');
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
        
    //check if the sign in is an distributor
    }else if (type === 'distributor'){
        try {
            //User verification
            var username = parseInt(username); //converting to integer to send proper format into query
            var user = await findUser.getDistributor({username: username});
            if (!user){
                console.log('Incorrect Username');
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
      const user = await findUser.getUserByUsername({ username });
      done(null, user); // Deserialize user by retrieving user object from the database
    } catch (err) {
      done(err, null);
    }
});

module.exports = passport;
