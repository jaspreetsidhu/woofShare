var express = require('express');
var router = express.Router();
var db = require("../models");


// POST route for saving a new user
router.post("/api/signUp", function (req, res) {
  console.log("SignUP Post", req.body);
  const jwt = JSON.stringify(req.user);

  console.log("Callback:", jwt);
  console.log("userDetails", req.user.photos[0].value)

  //add user details
  db.Users.create({
    userName: req.body.name,
    email: req.user.emails[0].value,
    address: req.body.address,
    photo: req.user.photos[0].value
  }).then(function(results) {
    console.log(results);
  });

  //send user details
  var sendUserDetails = JSON.stringify({
    displayName: req.body.name,
    photoUrl: req.user.photos[0].value
  });
  res.cookie("userDetails", sendUserDetails).send("done");

});
module.exports = router;