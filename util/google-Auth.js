const passport = require('passport');  
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
var db = require("../models");

module.exports = function(app) {

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
      callbackURL: process.env.GOOGLE_CALL_BACK_URL ||'/auth/google/callback',
      scope: ['email'],
    },
    // This is a "verify" function required by all Passport strategies
    (accessToken, refreshToken, profile, cb) => {
       console.log('Google Profile:', profile);
      return cb(null, profile);
    },
  ));
  
 app.get('/protected', accessProtectionMiddleware, (req, res) => {  
    res.json({
      message: 'You have accessed the protected endpoint!',
      yourUserInfo: req.user,
    });
  });
  
  // This is where Google sends users once they authenticate with Google
  app.get('/auth/google/callback',  
    passport.authenticate('google', { failureRedirect: '/', session: true }),
    (req, res) => {
      const jwt = JSON.stringify(req.user);
      
      console.log(req.user.emails[0].value);

      // validate if the new user
      db.Users.findOne({
        where: {
          email: req.user.emails[0].value
        }
      }).then(function(results) {
        console.log("results: ",JSON.stringify(results));
        if(results)
        {
         console.log("username:",results.userName);
          //Set Login user cookies
          var sendUserDetails = JSON.stringify({
            displayName: results.userName,
            photoUrl: results.photo
          });
          res.cookie("userDetails", sendUserDetails);
          res.redirect('/gallery');
        }


         
        else
        res.redirect('/signUp');
      });    
    }
  );

  // Logout 
  app.get('/logout', function(req, res){
    req.logout();
    res.clearCookie("userDetails");
    
    passport.logout;
    
    res.redirect('/');
  });
}