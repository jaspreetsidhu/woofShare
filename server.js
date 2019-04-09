var express = require("express");
const bodyParser = require('body-parser');


var app = express();
var PORT = process.env.PORT || 3000;

var exphbs = require("express-handlebars");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

// Requiring our models for syncing
var db = require("./models");

// Google APi call
require("./util/google-Auth")(app);


//HTML Routes
var HTMLroutes = require('./routes/htmlRoutes');
app.use(HTMLroutes);

//Api Routes
var apiRoutes = require('./routes/apiRoutes');
app.use(apiRoutes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
