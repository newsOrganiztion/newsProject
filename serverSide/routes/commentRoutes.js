const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// 🟢 جلب التعليقات المعلقة (يجب أن يكون قبل ":articleId")
router.get('/pending', commentController.getPendingComments);

// 🚨 جلب التعليقات المبلغ عنها
router.get('/reported', commentController.getReportedComments);

// 🗨️ إضافة تعليق جديد
router.post("/:articleId", commentController.addComment);

// 📜 جلب التعليقات لمقال معين
router.get("/:articleId", commentController.getCommentsByArticle);

// 🚩 الإبلاغ عن تعليق
router.post('/report/:commentId', commentController.reportComment);

// ✅ الموافقة على التعليق
router.put('/approve/:commentId', commentController.approveComment);

// ❌ حذف تعليق معين
router.delete("/:commentId", commentController.deleteComment);

module.exports = router;
