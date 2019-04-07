var express = require('express');
var router = express.Router();

var userdetails;
// POST route for saving a new post
router.post("/api/signUp", function(req, res) {
    console.log("SignUP Post",req.body);
    userdetails =req.body;

    res.json(true);
  });
  module.exports = router;