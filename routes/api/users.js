const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/register")
    .post(usersController.create2);

router.route("/login")
    .post(usersController.login);

module.exports = router;
