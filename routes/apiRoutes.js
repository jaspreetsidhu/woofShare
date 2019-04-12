var express = require("express");
var router = express.Router();
var multerUpload = require("../config/multer/multerConfig");

var DogController = require("../controllers/DogController");
var UserController = require("../controllers/UserController");
var RatingController = require("../controllers/RatingController");
// var dogValidation = require('../middlewares/validateDog')
var authenticate = require("../middlewares/authenticator");

router.post("/api/signUp", UserController.createUser);
router.get("/api/checkToken", UserController.checkToken);

router.post("/api/dogs", authenticate, multerUpload, DogController.addDog);
router.post("/api/rate/dogs", authenticate, RatingController.rateDogApi);
router.get("/api/dogs", authenticate, DogController.getAllDogs);
router.get("/api/dogs/:dogId", authenticate, DogController.getSingleDogApi);
router.post("/api/dogs/reserve", authenticate, DogController.reserve);
router.post("/api/dogs/filterdog", authenticate, DogController.filterDogs);
router.post("/api/user-profile/:rentId", authenticate, UserController.updateDogRentals);

module.exports = router;
