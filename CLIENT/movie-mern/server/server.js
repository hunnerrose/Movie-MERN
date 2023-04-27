const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
const path = require("path");
const cors = require("cors");

require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const commentsController = require("./controllers/comments_controller");
app.use("/api/comments", commentsController);

app.listen(4005, () => {
  console.log("server is running on 4005");
});
