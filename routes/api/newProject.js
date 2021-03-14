const router = require("express").Router();
const newProjectController = require("../../controllers/newProjectController");

// Matches with "/api/newProjectTable"
router.route("/")
  .get(newProjectController.findAll)
  .post(newProjectController.createNewProject);

// Matches with "/api/newProjectTable/:id"
router
  .route("/:id")
  .get(newProjectController.getNewProject)
  .post(newProjectController.createNewProject);

module.exports = router;