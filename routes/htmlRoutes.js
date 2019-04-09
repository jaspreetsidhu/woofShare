var express = require("express");
var router = express.Router();
var connection = require("../config/connection");

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/signUp", function(req, res) {
  res.render("signUp");
});

router.get("/gallery", function(req, res) {
  connection.query("SELECT * FROM doggie", function(err, data) {
    if (err) throw err;
    console.log(data);
    res.render("gallery", { dogs: data });
  });
});

router.get("/confirmation", function (req, res) {
    res.render("confirmation");
});

router.get("/user-profile", function (req, res) {
  res.render("userProfile");
});


module.exports = router;
