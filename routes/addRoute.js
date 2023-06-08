const express = require("express");

const dataController = require("../controllers/dataController");
const router = express.Router();

router.post("/addRoute", dataController.addRoute);
router.get("/", dataController.default);
module.exports = router;