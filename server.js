var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");

var app = express();
var PORT = process.env.PORT || 3000;

var exphbs = require("express-handlebars");
var flash = require("connect-flash");
var helpers = require("handlebars-helpers")();

var hbsHelpers = exphbs.create({
  helpers: require("./public/js/helpers.js").helpers,
  defaultLayout: 'main',
  extname: '.handlebars'
});
 

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.engine('.handlebars', hbsHelpers.engine);

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(flash());
app.use(
  session({
    secret: "keyboard",
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 6000000 }
  })
);
//app.use(session({ secret: 'keyboard', cookie: { maxAge: 600000, userDetails: 'none' }}))

// Google APi call
require("./util/google-Auth")(app);

//HTML Routes
var HTMLroutes = require("./routes/htmlRoutes");
app.use(HTMLroutes);

//Api Routes
var apiRoutes = require("./routes/apiRoutes");
app.use(apiRoutes);

// Requiring our models for syncing
var db = require("./models");

// Syncing our sequelize models and then starting our Express app
// =============================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
