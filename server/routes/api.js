const express = require('express');
const app = express();
const Router = express.Router();

// ----- middleware ----- //
const controller = require('../controllers/controllers.js');

app.get('/', (req, res) => {
  res.status(200).send('Hello from the backend')
});

// ----- routes ------ //

// ----- signup ----- //
Router.post('/register').post(controller.register, (req, res) => {
  return res.status(200).send('signed up');
});
// ----- login ----- //
Router.post('/user').post(controller.login, (req, res) => {
  return res.status(200);
});

module.exports = Router;