var path = require("path");
var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var userInput = req.body;
        console.log("User input: " + userInput);
        var userScores = req.body.scores;
        console.log(userScores);
        var mostCompatibleName = '';
        var mostCompatiblePic = '';
        var leastDifference = 1000;
        var userDifference = 0;
        for (var i = 0;  i < friends.length; i++) {
            for (var j = 0; j < userScores.length; j++){
                userDifference += Math.abs(friends[i].scores[j] - userScores[j]);
            }
            if (userDifference < leastDifference) {
                leastDifference = userDifference;
                mostCompatibleName = friends[i].name;
                mostCompatiblePic = friends[i].photoUrl;
            }
        }
        res.json({status: 'OK', name: mostCompatibleName, photoUrl: mostCompatiblePic});
        friends.push(userInput);
    });
}  