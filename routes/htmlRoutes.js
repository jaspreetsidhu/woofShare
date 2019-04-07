var express = require('express');
var router = express.Router();


router.get("/", function (req, res) {
    res.render("index");
});

router.get("/signUp", function (req, res) {
    res.render("signUp");
});

router.get("/gallery", function (req, res) {
    res.render("gallery");
});

router.get("/confirmation", function (req, res) {
    res.render("confirmation");
});

module.exports = router;