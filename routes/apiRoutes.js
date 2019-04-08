var express = require('express');
var router = express.Router();

var DogController = require('../controllers/DogController')
var dogValidation = require('../middlewares/validateDog')


var userdetails;
// POST route for saving a new post
router.post("/api/signUp", function(req, res) {
    console.log("SignUP Post",req.body);
    userdetails =req.body;
    res.json(true);
});
router.post('/api/dogs', dogValidation, DogController.addDog)
router.get('/api/dogs', DogController.getAllDogs)
router.get('/api/dogs/filterby', DogController.filterDogs)
router.get('/api/dogs/:dogId', DogController.getSingleDog)
router.patch('/api/dogs/:dogId', dogValidation, DogController.update)
router.delete('/api/dogs/:dogId', DogController.delete)

module.exports = router;