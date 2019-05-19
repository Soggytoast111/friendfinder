var express = require("express");
var path = require("path");
var app = express();
var PORT = 3031


require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});