const comments = require('express').Router();
const db = require('../models')
const { Comment } = db

//GET ALL COMMENTS
comments.get('/', async (req, res) => {
    try {
        const foundComments = await Comment.findAll()
        res.status(200).json(foundComments)
    } catch (err) {
        console.log(err)
        res.status(500).json("Server error")
    }
})

//Post
comments.post('/', (req, res) => {
    Comment.create(req.body)
    .then(() => {
        res.redirect('/movies')
    })
    .catch(err => {
        console.log('err', err)
    })
})

module.exports = comments