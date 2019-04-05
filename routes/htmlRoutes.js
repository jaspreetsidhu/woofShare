var express = require('express');
var router = express.Router();


router.get("/", function (req, res) {
    res.render("index");
});

router.get("/setup", function (req, res) {
    res.render("setup");
});

module.exports = router;