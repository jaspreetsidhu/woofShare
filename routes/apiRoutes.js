var express = require('express');
var router = express.Router();

// POST route for saving a new user
router.post("/api/signUp", function(req, res) {
    console.log("SignUP Post",req.body);
    const jwt = JSON.stringify(req.user);
  
    console.log("Callback:",jwt );
  console.log("userDetails" ,req.user.photos[0].value)
  
  var sendUserDetails =JSON.stringify( {displayName:req.body.name,
    photoUrl:req.user.photos[0].value
  });
  res.cookie("userDetails",sendUserDetails).send("done");
  
  });
  module.exports = router;