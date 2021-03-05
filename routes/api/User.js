const router = require("express").Router();
const UserController = require("../../controllers/UserController");

// Matches with "/api/unitTable"
router.route("/")
  .get(UserController.findAll)
  .post(UserController.createUser);

// Matches with "/api/unitTable/:id"
router
  .route("/:id")
  .get(UserController.getUser)
  .post(UserController.createUser);

module.exports = router;