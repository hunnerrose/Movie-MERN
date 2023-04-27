// const express = require('express');
// const comments = express.Router();
// const db = require('../models');
// const { Comment } = db;

// // INDEX (GET findAll)
// comments.get('/', async (req, res) => {
//   try {
//     const foundComments = await Comment.findAll();
//     res.status(200).json(foundComments);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: 'Sever Error',
//     });
//   }
// });

// // SHOW (GET findOne)
// comments.get('/:id', async (req, res) => {
//   try {
//     const foundComment = await Comment.findOne(req.params.comment_id);
//     res.status(200).json(foundComment);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: 'Sever Error',
//     });
//   }
// });

// // CREATE (POST)
// comments.post('/', async (req, res) => {
//   try {
//     const newComment = await Comment.create(req.body);
//     res.status(201).json(newComment);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: 'Sever Error',
//     });
//   }
// });

// // UPDATE (PUT)
// comments.put('/:id', async (req, res) => {
//   try {
//     const updatedComment = await Comment.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).json(updatedComment);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: 'Sever Error',
//     });
//   }
// });

// // DELETE (DESTROY)
// comments.delete('/:id', async (req, res) => {
//   try {
//     const deletedComment = await Comment.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).json(deletedComment);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: 'Sever Error',
//     });
//   }
// });

// // EXPORT
// module.exports = comments;

const express = require("express");
const comments = express.Router();
const axios = require("axios");

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxeWdzb2RiY3ZydXR1ZXpjanRzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MTcwMzA2MiwiZXhwIjoxOTk3Mjc5MDYyfQ.ojuwZBbg_uAwZ2JfVx8tz_WVYn9VsChu7xdP9rRUkcI";
const COMMENTS_URL = "https://rqygsodbcvrutuezcjts.supabase.co/comments";

// CREATE (POST)
comments.post("/", async (req, res) => {
  try {
    const response = await axios.post(COMMENTS_URL, req.body, {
      headers: {
        apikey: API_KEY,
        "Content-Type": "application/json",
      },
    });

    res.status(201).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// EXPORT
module.exports = comments;
