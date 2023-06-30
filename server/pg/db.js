const { Pool } = require('pg');
require('dotenv').config();

// ----- Connection to PGSQL DB ------ //

const pool = new Pool({
  connectionString: process.env.PG_URI
});

// ----- Export of query creation ----- //

module.exports = {
  query: (text, params, callback) => {
    // console.log('query: ', text);
    return pool.query(text, params, callback);
  }
};