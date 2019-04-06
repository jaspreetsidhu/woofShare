var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static('public')); 

var HTMLroutes = require('./routes/htmlRoutes');

app.use(HTMLroutes);


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });