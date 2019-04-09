var express = require("express");
var router = express.Router();
//var connection = require("../config/connection");
var DogController = require("../controllers/DogController");

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/signUp", function(req, res) {
  res.render("signUp");
});

router.get("/gallery", function(req, res) {
  DogController.getAllDogs(req, res);
  // connection.query("SELECT * FROM dogs", function(err, data) {
  //   if (err) throw err;
  //   console.log(data);
  //   res.render("gallery", { dogs: data, token: 'fofjffl' });
  // });
});

router.get("/confirmation/:dogId", function(req, res) {
  // res.render("confirmation");
  // DogController.getSingleDog(req, res, function(data) {
  //   res.send(data);
  // });
  DogController.getSingleDog(req, res);
});

module.exports = router;
