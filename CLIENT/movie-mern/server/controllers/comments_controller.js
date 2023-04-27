const comments = require("express").Router();
const db = require("../models");
const { Comment } = db;

comments.get("/", async (req, res) => {
  try {
    const foundComments = await Comment.findAll();
    res.status(200).json(foundComments);
  } catch (err) {
    res.status(500).send("Server error");
    console.log(err);
  }
});

comments.post("/", async (req, res) => {
  try {
    const newComment = await Comment.create({
      name: req.body.name,
      text: req.body.text,
    });
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).send("Server error");
    console.log(err);
  }
});

comments.delete("/:comment_id", async (req, res) => {
  try {
    const deletedComment = await Comment.destroy({
      where: { comment_id: req.params.comment_id },
    });
    if (!deletedComment) {
      res.status(404).send("Comment not found");
    } else {
      res.status(204).send();
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

module.exports = comments;
