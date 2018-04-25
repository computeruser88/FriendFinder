var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var PORT = process.env.PORT;
console.log(process.env.PORT);

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js");
require("./app/routing/htmlRoutes.js");

app.listen(PORT, function() {
    console.log("App listening on port " + PORT);
  });

