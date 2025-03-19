const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const verifyToken = require("../Middlewares/authMiddleware");


// Create a new article
router.post(
  "/submit",
  upload.single("featuredImage"),
  articleController.createArticle
);

// Fetch all articles
router.get("/all", articleController.getAllArticles);

// Get details of one article
router.get("/:id", articleController.getArticleById);
router.post("/:id/like", articleController.likeArticle);
router.post("/:id/share", articleController.shareArticle);




router.get("/foruser/:id", articleController.getArticles);





module.exports = router;
