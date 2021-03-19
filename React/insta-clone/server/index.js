const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 2000;
app.use(express.json());
const { MONGOURI } = require("./keys");

mongoose.connect(MONGOURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection.on("connected", () => console.log("Connected to Mongo"));
mongoose.connection.on("error", () => console.log("error"));

require("./models/user");
require("./models/post");
// mongoose.model("User");

app.use(require("./routes/auth"));
app.use(require("./routes/post"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
