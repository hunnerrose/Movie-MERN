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

// Controllers

// Listen
app.listen(9000, () => {
  console.log(`LIVE ON PORT: 9000`);
});
