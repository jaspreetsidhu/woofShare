var express = require("express");
var router = express.Router();
//var db = require("../models");

var DogController = require("../controllers/DogController");
var UserController = require("../controllers/UserController");
var dogValidation = require("../middlewares/validateDog");

router.post("/api/signUp", UserController.createUser);

//my route
// router.post("/api/dogs", dogValidation, DogController.addDog);
// router.get("/api/dogs", DogController.getAllDogs);
// router.get("/api/dogs/filterby", DogController.filterDogs);
// router.get("/api/dogs/:dogId", DogController.getSingleDog);
// router.patch("/api/dogs/:dogId", dogValidation, DogController.update);
// router.delete("/api/dogs/:dogId", DogController.delete);
// router.post("/api/dogs/reserve", DogController.reserve);

// router.post("/api/gallery/:age", DogController.searchByAge);


module.exports = router;
