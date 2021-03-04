const router = require("express").Router();
const unitTableController = require("../../controllers/unitTableController");

// Matches with "/api/unitTable"
router.route("/")
  .get(unitTableController.findAll)
  .post(unitTableController.createUnit);

// Matches with "/api/unitTable/:id"
router
  .route("/:id")
  .get(unitTableController.getUnit)
  .post(unitTableController.createUnit);

module.exports = router;
