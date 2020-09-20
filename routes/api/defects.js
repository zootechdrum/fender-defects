const router = require("express").Router();
const defectsController = require("../../controllers/defectCodes");

// Matches with "/api/books"
router.route("/").get(defectsController.findAll);

module.exports = router;
