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

<<<<<<< HEAD
router.get("/confirmation", function (req, res) {
    res.render("confirmation");
});

<<<<<<< HEAD

module.exports = router;
=======
module.exports = router;
=======
module.exports = router;
>>>>>>> 2de2661ea2f6b4e7e005814ef1d6ac2bc81805e8
>>>>>>> 0612d8733c49ac50db33c10b8a2429b9c0f2bb7e
