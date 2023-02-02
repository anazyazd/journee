const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// ----- parse static files ----- //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '/client')));
app.use('/public', express.static(path.resolve(__dirname, '../public')));

// ----- test ----- //
app.get('/api', (req, res) => {
  res.status(200).send('hello from server');
});

// ----- Error handlers ----- //
// local
app.use((req, res) => {
  res.status(404).send('LOCAL ERROR: 404: NOT FOUND');
});

// global
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'GLOBAL: Express error handler caught unknown error',
    status: 400,
    message: { err: 'Error: ', err },
  }
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorbObj.status).json(errorObj.message);
});

// ------ listener ------ //
app.listen(PORT, () => {
  console.log(`Listening in on port: ${PORT}...`);
});

module.exports = app;