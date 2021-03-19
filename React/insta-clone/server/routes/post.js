const { json } = require("express");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const requireLogin = require("../middlewares/requireLogin");

router.post("/createpost", requireLogin, (req, res) => {
  const { title, subTitle, body } = req.body;
  if (!title || !body) {
    return res.status(422).json({ err: "All fields are mandatory" });
  }
  req.user.password = undefined;
  const post = new Post({
    title,
    subTitle,
    body,
    postedBy: req.user,
  });
  post.save((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ post: result });
    }
  });
});

router.get("/allposts", (req, res) => {
  Post.find()
    .populate("postedBy", "_id name")
    .then((posts) => {
      if (!posts) {
        console.log(err);
      } else {
        res.json({ posts });
      }
    });
});

router.get("/mypost", requireLogin, (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .then((post) => {
      if (!post) {
        res.status(404).json({ err: "No Post found" });
      } else {
        res.json({ post });
      }
    });
});

module.exports = router;
