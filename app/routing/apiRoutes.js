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
        var leastDifference = 9999;
        var mostCompatibleIndex;
        var match = {};
        var userDifference = [0, 0, 0, 0, 0];
        console.log(friends.length);
        for (var i = 0;  i < friends.length; i++) {
            for (var j = 0; j < userScores.length; j++){
                userScores[j] = parseInt(userScores[j]);
                userDifference[i] += Math.abs(parseInt(friends[i].scores[j]) - userScores[j]);
            }
            if (userDifference[i] < leastDifference) {
                leastDifference = userDifference[i];
                mostCompatibleIndex = i;
                match = friends[i];
                console.log(JSON.stringify(friends[i]));

            }
            console.log("Match : " + JSON.stringify(match));
        }
        res.json({status: 'OK', name: match.name, photoUrl: match.photoUrl});
        friends.push(userInput);
    });
}  