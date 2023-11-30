//Model Directly talks to/accesses database
const pool = require('../../config/dbsignIn'); // Import the connection pool from dbConfig.js

//gets the knowledge base entry based on id
async function getkbentry(id){
    const query = 'SELECT * FROM knowledgebase WHERE id = $1'

    try{
        return await pool.query(query, [id]);
    }catch(err){
        return "ERROR EXECUTING Deez";
    }
}


async function getTechID(id, zipcode){
    console.log(id, zipcode);
    const query = 'SELECT * FROM mauro WHERE id = $1 AND zip_code = $2'

    try{
        return await pool.query(query, [id, zipcode]);

    }catch(err){
        return "Error executing in support Model" + err;
    }

}

module.exports = {
  getkbentry,
  getTechID,
  // Add other controller functions here
};