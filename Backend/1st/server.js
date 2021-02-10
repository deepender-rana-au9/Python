// var express = require("express");
// var app = express();
// var bodyParser = require("body-parser");
// var mongodb = requre("mongodb");
// MongoClient = mongodb.MongoClient;
// var cors = require("cors");
// const { MongoClient } = require("mongodb");

// app.use(cors);
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var cors = require("cors");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.listen(8080);
console.log("server running on port no 8080");
