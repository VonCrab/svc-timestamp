'use strict';

const timestamp = require('./timestamp');
const path = require('path')

const express = require('express');
const app = express();

const PORT = 8080;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/:time', (req, res) => {
  var submitted_time = timestamp(req.params.time);
  res.status(200).type('json').json(submitted_time.response);
});

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
