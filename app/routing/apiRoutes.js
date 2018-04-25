var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var userScores = req.body.scores;
        var incompatibilityPoints = [];
        
        for (var i = 0; i < friends.length; i++) {
            incompatibilityPoints[i] = 0;
            for (var j = 0; j < userScores.length; j++){
                incompatibilityPoints[i] += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScores[j]));
            }
        }
        var mostCompatibleFriend = friends[0];
        var leastPoints = incompatibilityPoints[0];
        for (var i = 1;  i < friends.length; i++) {
            if (incompatibilityPoints[i] < leastIncompatibilityPoints) {
                leastIncompatibilityPoints = incompatibilityPoints[i];
                mostCompatibleFriend = friends[i];
            }
        }
        res.json(mostCompatibleFriend);
        friends.push(req.body);
    });
}  