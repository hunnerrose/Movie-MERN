const express = require('express')
const app = express();
const { Sequelize } = require('sequelize')
const path = require('path')
const cors = require('cors')

//CONFIG/MIDDLEWARE
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//CONTROLLERS
const commentsController = require('./controllers/comments_controller');
app.use('/api/comments', commentsController);

//LISTEN
app.listen(4005, () => {
    console.log('Server listening on port 4005')
})