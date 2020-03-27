const router = require('express').Router();
const usersController = require('../../controllers/usersController');

// Matches with "/api/users/register"
router.route('/register').post(usersController.create2);

// Matches with "/api/users/login"
router.route('/login').post(usersController.login);

module.exports = router;
