var path = require("path");
var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var incompatibilityPoints = [];
        for (var i = 0; i < friends.length; i++) {
            incompatibilityPoints[i] = 0;
        }
    });
}  