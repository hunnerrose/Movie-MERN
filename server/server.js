//DEPENDENCIES
const express = require("express");
const app = express();
const { sequelize } = require("sequelize");
const path = require("path");
const cors = require("cors");

//CONFIGURATION/ MIDDLEWARE
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//LISTEN
app.listen(4005, () => {
  console.log("Listening on port 4005");
});
