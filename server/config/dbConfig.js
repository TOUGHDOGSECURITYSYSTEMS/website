// config/dbConfig.js

const { Pool } = require('pg');

const pool = new Pool({
    user: 'pwAdmin',
    host: 'localhost',
    database: 'pw',
    password: 'admin',
    port: 5432, //default port for postgresql
});

module.exports = pool;