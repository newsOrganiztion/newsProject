const Comment = require("../models/Comment");
const Article = require("../models/Article");
const User = require("../models/User");

// 🗨️ إضافة تعليق جديد
exports.addComment = async (req, res) => {
  try {
    const { userId, content } = req.body;
    const { articleId } = req.params;

    // تحقق من وجود المقال والمستخدم
    const article = await Article.findById(articleId);
    const user = await User.findById(userId);

    if (!article || !user) {
      return res.status(404).json({ error: "المقال أو المستخدم غير موجود" });
    }

    const newComment = new Comment({
      articleId,
      userId,
      content,
      status: "pending",
    });

    await newComment.save();
    res.status(201).json({ message: "تم إرسال تعليقك وهو قيد المراجعة." });
  } catch (error) {
    console.error("خطأ أثناء إضافة التعليق:", error);
    res.status(500).json({ error: "حدث خطأ أثناء إضافة التعليق", details: error.message });
  }
};

// 📜 جلب التعليقات الخاصة بمقال معين
exports.getCommentsByArticle = async (req, res) => {
  try {
    const { articleId } = req.params;

    const comments = await Comment.find({ articleId, status: "approved" })
      .populate("userId", "name")
      .sort({ createdAt: -1 });

    res.status(200).json(comments);
  } catch (error) {
    console.error("خطأ أثناء جلب التعليقات:", error);
    res.status(500).json({ error: "حدث خطأ أثناء جلب التعليقات", details: error.message });
  }
};

// ❌ حذف تعليق معين
exports.deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    const comment = await Comment.findByIdAndDelete(commentId);
    if (!comment) {
      return res.status(404).json({ error: "التعليق غير موجود" });
    }

    res.status(200).json({ message: "تم حذف التعليق بنجاح" });
  } catch (error) {
    console.error("خطأ أثناء حذف التعليق:", error);
    res.status(500).json({ error: "حدث خطأ أثناء حذف التعليق", details: error.message });
  }
};

// ✅ الموافقة على التعليق
exports.approveComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { status } = req.body; // نأخذ الحالة من الجسم (Body)

    const comment = await Comment.findByIdAndUpdate(commentId, { status }, { new: true });
    if (!comment) {
      return res.status(404).json({ error: "التعليق غير موجود" });
    }

    res.status(200).json(comment);
  } catch (error) {
    console.error("خطأ أثناء الموافقة على التعليق:", error);
    res.status(500).json({ error: "حدث خطأ أثناء الموافقة على التعليق", details: error.message });
  }
};

// 🚩 الإبلاغ عن تعليق
exports.reportComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { reason } = req.body;

    const comment = await Comment.findByIdAndUpdate(commentId, {
      reported: true,
      reportReason: reason,
      status: "pending" // تحديث الحالة إلى "pending"
    }, { new: true });

    if (!comment) {
      return res.status(404).json({ error: "التعليق غير موجود" });
    }

    res.status(200).json({ message: "تم الإبلاغ عن التعليق", comment });
  } catch (error) {
    console.error("خطأ أثناء الإبلاغ عن التعليق:", error);
    res.status(500).json({ error: "حدث خطأ أثناء الإبلاغ عن التعليق", details: error.message });
  }
};

// 🚨 جلب التعليقات المبلغ عنها
exports.getReportedComments = async (req, res) => {
  try {
    const comments = await Comment.find({ reported: true })
      .populate("userId", "name")
      .populate("articleId", "title")
      .sort({ createdAt: -1 });

    res.status(200).json(comments);
  } catch (error) {
    console.error("خطأ أثناء جلب التعليقات المبلغ عنها:", error);
    res.status(500).json({ error: "حدث خطأ أثناء جلب التعليقات المبلغ عنها", details: error.message });
  }
};

// 🟠 جلب التعليقات المعلقة
exports.getPendingComments = async (req, res) => {
  try {
    const comments = await Comment.find({ status: "pending" })
      .populate("userId", "name")
      .populate("articleId", "title")
      .sort({ createdAt: -1 });

    res.status(200).json(comments);
  } catch (error) {
    console.error("خطأ أثناء جلب التعليقات المعلقة:", error);
    res.status(500).json({ error: "حدث خطأ أثناء جلب التعليقات المعلقة", details: error.message });
  }
};
