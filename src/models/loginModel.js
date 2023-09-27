// models/loginModel.js

const pool = require('../../config/dbsignIn'); // Adjust the import path as needed

async function getDistributor(username) {
  const query = 'SELECT * FROM distributor WHERE distributor_id = $1';
  try {
    const result = await pool.query(query, [username.username]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function getDealer(username) {
  const query = 'SELECT * FROM dealer WHERE dealer_id = $1';
  try {
    const result = await pool.query(query, [username.username]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}


async function getInstaller(username){
  const query = 'SELECT * FROM installer WHERE username = $1';
  try {
    const result = await pool.query(query, [username.username]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}


module.exports = {
    getDistributor,
    getDealer,
    getInstaller,
};