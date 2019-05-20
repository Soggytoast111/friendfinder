
var friendObjArray = {
    object: 
[{
    "name":"Ahmed",
    "photo":"https://vignette.wikia.nocookie.net/streetfighter/images/f/ff/Abigailrender.png",
    "survey":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }],
    friendFunction: function(){
        var friendScores = []
        
        for (i=0; i<friendObjArray.object.length-1; i++){
            var scoreTest = 0
            for (z=0; z<friendObjArray.object[i].survey.length; z++){
                scoreTest += Math.abs(parseInt(friendObjArray.object[i].survey[z]) - parseInt(this.object[this.object.length - 1].survey[z]))
            }
            friendScores.push(scoreTest)
        }
        console.log("Your Friendscores is:")
        console.log(friendScores)
        var friendMatch = 0
        for (i=1; i<friendScores.length; i++){
            if (friendscores[i]> friendScores[friendMatch]){
                friendMatch = i
            }
        }
        console.log("Your friend match array index is")
        console.log(friendMatch)
        this.friendMatch = friendMatch
        var scoreValue = 0
        for (i=0; i<this.object[this.object.length - 1].survey.length; i++){
            scoreValue += parseInt(this.object[this.object.length - 1].survey[i])
        }
        
        this.score = 5-((50-scoreValue)/10)
        console.log("here is your score:  " + this.score) 
    },
    friendMatch: 0,
    score: 0
}

  module.exports = friendObjArray