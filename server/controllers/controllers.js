const path = require('path');
const db = require('../pg/db');
const bcrypt = require('bcrypt');
const SALT = bcrypt.genSaltSync(12);

const controller = {};

// ----- signup ----- //
controller.register = (req, res, next) => {
  console.log('inside register middleware');
  const { username, password } = req.body;
  const hashed = bcrypt.hashSync(password, SALT);
  const registerQ = 'INSERT INTO users(username, password) VALUES ($1, $2)';
  const params = [ username, hashed ];
  db.query(registerQ, params)
    .then(() => {
      return next();
    })
    .catch((err) => {return next({ msg: 'Error in controller.register: ', err: err})});
};

controller.login = (req, res, next) => {
  console.log('inside login middleware');
};



module.exports = controller;