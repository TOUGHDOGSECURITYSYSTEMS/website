// models/loginModel.js
const pool = require('../../config/dbsignIn'); // Adjust the import path as needed



async function getUserbyEmail(email){
  const query = 'SELECT * FROM users WHERE email = $1';
  try {
    const result = await pool.query(query, [email.email]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}


async function insertUser(email, password, username, techID){
    const query = 'INSERT INTO users (email, password, username, tech_id) VALUES ($1, $2, $3, $4) RETURNING email'
    try {
        const result = await pool.query(query, [email, password, username, techID]);
        return result.rows[0];
    } catch (error) {
        console.log('Errorred out in userModel');
        throw error;
        
    } 
}

async function getUserCount(username){
    const query = 'SELECT COUNT(*) FROM users WHERE tech_id = $1';
    try {
        //get the total count to autogenerate username
        const result = await pool.query(query, [username]);
        const count = parseInt(result.rows[0].count, 10);
        return count;
    } catch (error) {
        console.log('erroring out in user model');
        
    }

}

module.exports = {

    getUserbyEmail,
    getUserCount,
    insertUser,
};