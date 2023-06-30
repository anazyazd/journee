const { Pool } = require('pg');

//! remove before pushing into github

const myURI = 'postgres://vcckrujl:hrmhAw_TTg_B0DKF3wGifHtREFmVJoPa@kashin.db.elephantsql.com/vcckrujl';

const pool = new Pool({
  connectionString: myURI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('query: ', text);
    return pool.query(text, params, callback);
  }
};