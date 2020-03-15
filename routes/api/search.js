const router = require("express").Router();
const searchController = require("../../controllers/searchController");

// Matches with "/api/users"
// router.route("/")
//     .get(usersController.findAll)
//     .post(usersController.create);

// Matches with "/api/users/register"
router.route("/search")
    .post(searchController.userInput);

// Matches with "/api/users/login"
// router.route("/login")
//     .post(usersController.login);

// Matches with "/api/users/:id"
// router
//     .route("/:id")
//     .get(usersController.findById)
//     .put(usersController.update)
//     .delete(usersController.remove);

module.exports = router;
