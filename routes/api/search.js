const router = require("express").Router();
const searchController = require("../../controllers/searchController");


router.route("/search")
    .post(searchController.search);
router.route("/findById/:id")
    .get(searchController.findById);

module.exports = router;
