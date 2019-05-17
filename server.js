var express = require("express");
var path = require("path");

var app = express();
var PORT = 3031

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

app.get("/:char", function(req, res) {
    var chosen = req.params.char;
    
    

    if (chosen == "quiz"){
        var newpath = path.join(__dirname, "/app/public/survey.html")

        console.log(newpath)
        res.sendFile(path.join(__dirname, "/app/public/survey.html"));
    }
    
    else{
        console.log(newpath)
        res.sendFile(path.join(__dirname, "/app/public/home.html"));
    }


    res.end();
});