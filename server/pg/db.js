const { Pool } = require('pg');

const myURI = '';

const pool = new Pool({
  connectionString: myURI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('query: ', text);
    return pool.query(text, params, callback);
  }
};