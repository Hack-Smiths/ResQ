const express = require("express");
const router = express.Router();
const { getNearestHospital } = require("../controllers/hospitalController");

// Routes
router.get("/nearest/:location", getNearestHospital);

module.exports = router;
