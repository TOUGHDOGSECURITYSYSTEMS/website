const passport = require("passport");
const {getUserbyEmail, getUserCount, insertUser} = require('../models/userModel');


function getUser(email){
    emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(email.email)){
        const user = getUserbyEmail(email);

        return user;
    }else{
        console.error('Invalid Email Format');
    }
}

async function createUser(email, password, techID){

    //See what username we're at to add a different number.
    var totalCount = await getUserCount(techID);
    if (0 <= totalCount < 26){
        var letter = String.fromCharCode('A'.charCodeAt(0) + totalCount);
        var username = techID.toString() + '-' + letter;
        if (username){
            //create the user in the table (or try to)
            var result = await insertUser(email, password, username, techID);
            return result.email;

        }else{
            throw new Error('Failed to generate valid username');
        }
        
    }else{
        throw new Error( 'Reached max amount of users/Erorred out goofy doofy' );
    }
}

module.exports = { getUser, createUser };
