var friendData = require("../data/friends")

module.exports = function(app) {
      app.get("/api/friends", function(req, res) {
      res.json(friendData.object)
      console.log("he hit the friends api!")
    })

    app.post("/api/friends", function(req, res) {
      friendData.object.push(req.body)
      console.log(friendData.object)
      friendData.friendFunction()
      var matchObj = {
          name: friendData.object[friendData.friendMatch].name,
          photo: friendData.object[friendData.friendMatch].photo,
          score: friendData.score,
          text: friendData.displayText()
      }
      console.log(JSON.stringify(matchObj))
      res.json(JSON.stringify(matchObj))
    })
}