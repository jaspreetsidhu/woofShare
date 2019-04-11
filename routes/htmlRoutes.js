var express = require("express");
var router = express.Router();
//var connection = require("../config/connection");
var DogController = require("../controllers/DogController");
var UserController = require("../controllers/UserController");

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

// Age filtering for gallery
router.get("gallery/age/:age", function(req, res) {
  let ageSearch = req.params.age;
  console.log(ageSearch);
  DogController.filterDogs(ageSearch, res);
});

// Rating filtering for gallery
router.get("gallery/rating/:rating", function(req, res) {
  let ratingSearch = req.params.rating;
  console.log(ratingSearch);
  DogController.filterDogs(req, res);
});

// Rating filtering for gallery
router.get("gallery/distance/:distance", function(req, res) {
  let distSearch = req.params.distance;
  console.log(distSearch);
  DogController.filterDogs(distSearch, res);
  res.render("gallery", res);
});

router.get("/confirmation/:dogId", function(req, res) {
  // res.render("confirmation");
  // DogController.getSingleDog(req, res, function(data) {
  //   res.send(data);
  // });
  // Check Authentication before reserve 
  if (req.isAuthenticated())
    DogController.getSingleDog(req, res);
  else{
    res.redirect("/auth/google/callback");
  }
});

router.get("/user-profile", function (req, res) {
  UserController.getUser(req,res);
});

router.get("/privacy-policy", function (req, res) {
  res.render("privacyPolicy"); 
});


module.exports = router;
