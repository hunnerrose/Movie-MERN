const express = require('express');
const movies = express.Router();

// INDEX ROUTE
movies.get('/', (req, res) => {
  res.send('Hello from the movies controller');
});

module.exports = movies;
