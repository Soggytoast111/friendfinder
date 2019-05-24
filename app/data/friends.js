
var friendObjArray = {
    object: 
[{
    "name":"Walt Whitman",
    "photo":"https://www.randomlists.com/img/people/walt_whitman.jpg",
    "survey":[
        5,
        1,
        4,
        2,
        4,
        1,
        2,
        2,
        4,
        3
      ]
  },
  {
    "name":"Jennifer Love Hewitt",
    "photo":"https://www.randomlists.com/img/people/jennifer_love_hewitt.jpg",
    "survey":[
        3,
        1,
        2,
        1,
        4,
        5,
        5,
        2,
        1,
        1
      ]
  },
  {
    "name":"Roger Federer",
    "photo":"https://www.randomlists.com/img/people/roger_federer.jpg",
    "survey":[
        2,
        1,
        4,
        1,
        2,
        4,
        2,
        5,
        1,
        3
      ]
  },
  {
    "name":"Mark Wahlberg",
    "photo":"https://www.randomlists.com/img/people/mark_wahlberg.jpg",
    "survey":[
        2,
        3,
        1,
        5,
        4,
        5,
        3,
        2,
        4,
        1
      ]
  },
  {
    "name":"Reese Witherspoon",
    "photo":"https://www.randomlists.com/img/people/reese_witherspoon.jpg",
    "survey":[
        2,
        4,
        1,
        2,
        2,
        5,
        3,
        3,
        5,
        5
      ]
  },

],
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
        for (i=0; i<friendScores.length; i++){
            if (friendScores[i]> friendScores[friendMatch]){
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
        
        this.score = scoreValue/10
        console.log("here is your score:  " + this.score) 
    },
    friendMatch: 0,
    score: 0,
    displayText:  function(){
        var textBoxBucket = [
            "Puh - Why so up-tight?",
            "Basic like bread and butter.",
            "You got potential kid...",
            "Wow, is this Dan himself?" 
        ]

        if (this.score < 2){
            return textBoxBucket[0]
        }
        else if(this.score < 3){
            return textBoxBucket[1]
        }
        else if(this.score < 4){
            return textBoxBucket[2]
        }
        else {
            return textBoxBucket[3]
        }
    }
}

  module.exports = friendObjArray