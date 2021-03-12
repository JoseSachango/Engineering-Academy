const router = require("express").Router();
const unitTableRoutes = require("./unitTable");
const streamRoutes = require("./Streams");
const newProject = require("./newProject")
const User = require("./User")
// Book routes
router.use("/unitTable", unitTableRoutes);
router.use("/Streams", streamRoutes);
router.use("/newProject",newProject)
router.use("/User",User)

module.exports = router;
