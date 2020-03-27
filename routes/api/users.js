<<<<<<< HEAD
const router = require('express').Router();
const usersController = require('../../controllers/usersController');

// Matches with "/api/users/register"
router.route('/register').post(usersController.create2);

// Matches with "/api/users/login"
router.route('/login').post(usersController.login);

=======
const router = require("express").Router();
const usersController = require("../../controllers/usersController");


router.route("/register")
    .post(usersController.create2);

router.route("/login")
    .post(usersController.login);


>>>>>>> 50945ae8ca33e8aeda34874818a82782f17e9751
module.exports = router;
