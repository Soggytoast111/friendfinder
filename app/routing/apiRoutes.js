var friendData = require("../data/friends")

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
      res.json(friendData)
      console.log("he hit the friends api!")
    })

    app.post("/api/friends", function(req, res) {
      friendData.push(req.body)
      res.json("okay!")
      console.log(friendData)
      console.log("here is the req")
      console.log(req)
    })
}