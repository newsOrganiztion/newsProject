const express = require("express");
const router = express.Router();
const admainController = require("../controllers/admainController");

router.get("/article",admainController.getAllArticles);

router.patch("/:id/status", admainController.updateArticleStatus);

router.get('/journalists', admainController.getJournalistsWithDetails);



module.exports = router;


