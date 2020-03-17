const router = require("express").Router();
const userRoutes = require("./users");
const searchRoutes = require("./search");

// User routes
router.use("/users", userRoutes);

router.use("/search", searchRoutes);

module.exports = router;
