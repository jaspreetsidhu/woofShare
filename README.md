# woofShare

# User Authentication using  Passport-Google-oauth20 
   # Required Packages
     1. passport
     2. passport-google-oauth20
     3. cookie-parser
     4. express-session
   # Usage
    Registered a woofShare application with Google using passport-google-oauth20. A new project created in the Google Developers Console to get a client ID and client secret, which need to be provided to the strategy. Configured a redirect URI (Heroku as well as Local Host) which matches the route in the application.

   # Configure Strategy
    The Google authentication strategy authenticates users using a Google account and OAuth 2.0 tokens. The client ID and secret obtained when creating an application are supplied as options when creating the strategy. The strategy also requires a verify callback, which receives the access token and optional refresh token, as well as profile which contains the authenticated user's Google profile. The verify callback must call cb providing a user to complete authentication.

    var GoogleStrategy = require('passport-google-oauth20').Strategy;

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
   # Authenticate Requests
    This is where Google sends users once they authenticate with Google
    app.get('/auth/google/callback',  
        passport.authenticate('google', { failureRedirect: '/', session: true }),
        (req, res) => {
        const jwt = JSON.stringify(req.user);
        If New User
           {
            Redirect to SignUp page and complete registeration with Profile Info
           }
        else
            Set the Cookies with user details
            Redirect to Gallery page
           }
        });    
        }
    );