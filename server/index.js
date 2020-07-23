var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"));
console.log("hello");

app.listen(3000, function () {
  console.log("listening on port 3000!");
}); 