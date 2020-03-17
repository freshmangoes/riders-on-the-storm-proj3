const router = require("express").Router();
const searchController = require("../../controllers/searchController");


router.route("/search")
    .post(searchController.search);

module.exports = router;
