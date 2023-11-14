// config/dbsignin.js

const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: process.env.DATABASE_PASSWORD,
    port: 5432, //default port for postgresql
});


pool.connect()
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(err => {
        console.error('Failed to connect to the database:', err);
});


module.exports = pool;