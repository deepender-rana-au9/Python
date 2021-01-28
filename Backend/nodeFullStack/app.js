const { Router } = require("express");
var express = require("express");
var app = express();
var cityRouter = require("./src/routes/CityRouter");
var hotelRouter = require("./src/routes/HotelRouter");
var port = 8700;

var menu = [
  { link: "/", page: "Home" },
  { link: "/hotel", page: "Hotel" },
  { link: "/city", page: "City" },
];

//static path
app.use(express.static(__dirname + "/public"));

//html files

app.set("views", "./src/views");

//view engine
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index", { title: "Welcome", menu: menu });
});

app.use("/city", cityRouter);
app.use("/hotel", hotelRouter);
app.listen(port, function (err) {
  if (err) throw err;
  console.log(`Server is running at port ${port}`);
});
