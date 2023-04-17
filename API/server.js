// Dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const { Sequelize } = require('sequelize');

// Middlewares and config
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to our movie api',
  });
});

// Controllers
const commentsController = require('./controllers/comments_controller');
app.use('/comments', commentsController);

// Listen
app.listen(5999, () => {
  console.log(`LIVE ON PORT:` + 5999);
});
