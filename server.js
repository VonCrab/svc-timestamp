'use strict';

const timestamp = require('./timestamp');

const express = require('express');
const app = express();

const PORT = 8080;

app.get('/:time', (req, res) => {
  var submitted_time = timestamp(req.params.time);
  res.status(200).type('json').json(submitted_time.response);
});

app.get('/', (req, res) => {
  res.status(404).send("Please put a timestamp, unix or natural language, in the url!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});