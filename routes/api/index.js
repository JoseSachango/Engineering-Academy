const router = require("express").Router();
const unitTableRoutes = require("./unitTable");
const streamRoutes = require("./Streams");
// Book routes
router.use("/unitTable", unitTableRoutes);
router.use("/Streams", streamRoutes);

module.exports = router;
