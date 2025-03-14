const express = require("express");
const router = express.Router();
const journalistController = require("../controllers/journalistController");

// إضافة صحفي جديد عبر POST
router.post("/add", journalistController.addJournalist);

module.exports = router;
