var express = require("express");
const passport = require('passport');  
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');


var app = express();
var PORT = process.env.PORT || 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static('public')); 
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
    clientID: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_ID,
    clientSecret: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_SECRET,
    callbackURL: 'https://polar-basin-98786.herokuapp.com/auth/google/callback',
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

app.get('/auth/google/callback',  
  passport.authenticate('google', { failureRedirect: '/', session: false }),
  (req, res) => {
    console.log('wooo we authenticated, here is our user object:', req.user);
  //  res.json(req.user);
   res.redirect('/');
  }
);
app.get('/protected', accessProtectionMiddleware, (req, res) => {  
  res.json({
    message: 'You have accessed the protected endpoint!',
    yourUserInfo: req.user,
  });
});

var HTMLroutes = require('./routes/htmlRoutes');

app.use(HTMLroutes);


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });