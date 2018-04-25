var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js");
require("./app/routing/htmlRoutes.js");

app.listen(process.env.PORT || 6000, function() {
    console.log("App listening on PORT " + PORT);
  });

