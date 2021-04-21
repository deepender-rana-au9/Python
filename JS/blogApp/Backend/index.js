const express = require("express");
const app = express();
const PORT = 3000;
const Post = require("./api/models/posts");
const postData = new Post();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/uploads", express.static("uploads"));

app.get("/api/posts", (req, res) => {
  res.send(postData.get());
});

app.get("/api/posts/:postId", (req, res) => {
  const id = req.params.postId;
  const foundPost = postData.getIndividualBlog(id);
  if (foundPost) {
    return res.status(200).send(foundPost);
  } else {
    return res.status(404).send({ err: "Not Found" });
  }
});

app.listen(PORT, () => {
  console.log("App is listening on 3000");
});
