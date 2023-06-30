const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const apiRouter = require('./routes/api');

// ----- parse static files ----- //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '/client')));
app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

// ----- test ----- //
// app.get('/', (req, res) => {
//   res.status(200).send('hello from server');
// });

// ------ router handling ------ //
app.use('/api', apiRouter);

// ----- Error handlers ----- //
// local
app.use('*', (req, res) => {
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