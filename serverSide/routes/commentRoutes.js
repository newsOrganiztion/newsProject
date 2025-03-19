const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");


// 🗨️ إضافة تعليق إلى مقال معين
router.post("/:articleId", commentController.addComment);

// 📜 جلب التعليقات لمقال معين
router.get("/:articleId", commentController.getCommentsByArticle);

// ❌ حذف تعليق معين
router.delete("/:commentId", commentController.deleteComment);

// ✅ الموافقة على تعليق
router.put("/:commentId/approve", commentController.approveComment);

router.post('/report/:commentId', commentController.reportComment);

module.exports = router;