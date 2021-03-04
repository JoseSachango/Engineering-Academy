const router = require("express").Router();
const streamsController = require("../../controllers/StreamController");

// Matches with "/api/streams"
router.route("/")
  .get(streamsController.findAll)
  .post(streamsController.create);

// Matches with "/api/streams/:id"
router
  .route("/:id")
  .get(streamsController.getStreamsByUnit)
  

module.exports = router;
