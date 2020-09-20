const router = require("express").Router();
const bookRoutes = require("./defects");

// Book routes
router.use("/defects", bookRoutes);

module.exports = router;
