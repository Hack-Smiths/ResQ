const express = require("express");
const router = express.Router();
const { getNearestAmbulance } = require("../controllers/ambulanceController");

// Routes
router.get("/nearest/:location", getNearestAmbulance);

module.exports = router;
