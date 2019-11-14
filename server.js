//pulling in required dependencies
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
//running express with the app variable
const app = express();
//set up port to make deployment friendly for Heroku
const PORT = process.env.PORT || 3000;

//static files
app.use(express.static("public"));
//adding body-parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
//set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


//routes to build
var routes = require("./controllers/burgers_controller.js");
//use routes
app.use(routes);
//make server listen
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost" + PORT);
});
