var express = require("express");
const passport = require('passport');  
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
var cookieParser = require('cookie-parser');


var app = express();
var PORT = process.env.PORT || 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static('public')); 

app.use(cookieParser());

// Add session support
app.use(session({  
  secret: process.env.SESSION_SECRET || 'default_session_secret',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());  
app.use(passport.session());  


passport.serializeUser((user, done) => {  
  done(null, user);
});

passport.deserializeUser((userDataFromCookie, done) => {  
  done(null, userDataFromCookie);
});

// Checks if a user is logged in
const accessProtectionMiddleware = (req, res, next) => {  
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).json({
      message: 'must be logged in to continue',
    });
  }
};

// Set up passport strategy
passport.use(new GoogleStrategy(  
  {
    clientID: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_ID || '382558953142-m0ik7j02qokj2kmggaf5hvo1qku4t109.apps.googleusercontent.com',
    clientSecret: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_SECRET || 'TjzHVzxiKU68XSrMCtzIERJe',
    callbackURL: 'http://localhost:3000/auth/google/callback',
    scope: ['email'],
  },
  // This is a "verify" function required by all Passport strategies
  (accessToken, refreshToken, profile, cb) => {
    console.log('Our user authenticated with Google, and Google sent us back this profile info identifying the authenticated user:', profile);
    return cb(null, profile);
  },
));



app.get('/auth/google', passport.authenticate('google'));  
// This is where Google sends users once they authenticate with Google

app.post("/signUp", function(req, res) {
  console.log("response from user",req.body);
});

app.get('/auth/google/callback',  
  passport.authenticate('google', { failureRedirect: '/', session: true }),
  (req, res) => {
    console.log('wooo we authenticated, here is our user object:', req.user);
  //  res.json(req.user);
  console.log("response from user",req.body);
  console.log("cookies",req.cookies);
  //ADD into database

  //Redirect to page (Home Should show logged in name & Profile pics)
   res.redirect('/');
  }
);
app.get('/protected', accessProtectionMiddleware, (req, res) => {  
  res.json({
    message: 'You have accessed the protected endpoint!',
    yourUserInfo: req.user,
  });
});

//HTML Routes
var HTMLroutes = require('./routes/htmlRoutes');
app.use(HTMLroutes);

// Requiring our models for syncing
var db = require("./models");

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});