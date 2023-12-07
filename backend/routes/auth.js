var express = require('express');
var router = express.Router();
const controller = require("../controllers/authController")

router.post('/login', controller.login);

router.post('/signup', controller.signup);

module.exports = router;
