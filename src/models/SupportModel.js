//Model Directly talks to/accesses database
const pool = require('../../config/dbsignIn'); // Import the connection pool from dbConfig.js


async function getkbentry(id){
    const query = 'SELECT * FROM knowledgebase WHERE id = $1'

    try{
        return await pool.query(query, [id]);
    }catch(err){
        return "ERROR EXECUTING Deez";
    }
}

module.exports = {
  getkbentry,
  // Add other controller functions here
};