const Comment = require("../models/Comment");
const Article = require("../models/Article");

exports.addComment = async (req, res) => {
  try {
    const { userId, content } = req.body;
    const articleId = req.params.articleId;

    const article = await Article.findById(articleId);
    if (!article) {
      return res.status(404).json({ error: "المقال غير موجود" });
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
    res
      .status(500)
      .json({ error: "حدث خطأ أثناء إضافة التعليق", details: error.message });
  }
};
exports.getCommentsByArticle = async (req, res) => {
  try {
    const articleId = req.params.articleId;

    const comments = await Comment.find({ articleId })
      .populate("userId", "name")
      .sort({ createdAt: -1 });

    console.log("📢 Comments fetched:", comments); 
    res.status(200).json(comments);
  } catch (error) {
    res
      .status(500)
      .json({ error: "حدث خطأ أثناء جلب التعليقات", details: error.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;

    const comment = await Comment.findByIdAndDelete(commentId);
    if (!comment) {
      return res.status(404).json({ error: "التعليق غير موجود" });
    }

    res.status(200).json({ message: "تم حذف التعليق بنجاح" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "حدث خطأ أثناء حذف التعليق", details: error.message });
  }
};

exports.approveComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;

    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ error: "التعليق غير موجود" });
    }

    comment.status = "approved";
    await comment.save();

    res
      .status(200)
      .json({ message: "تمت الموافقة على التعليق بنجاح", comment });
  } catch (error) {
    res
      .status(500)
      .json({
        error: "حدث خطأ أثناء الموافقة على التعليق",
        details: error.message,
      });
  }
};

exports.reportComment = async (req, res) => {
  try {
    const { reason } = req.body; 
    const comment = await Comment.findById(req.params.commentId);
    
    if (!comment) {
      return res.status(404).json({ message: "التعليق غير موجود" });
    }

   
    comment.reported = true;
    comment.status = 'pending';  
    await comment.save();

    res.status(200).json({ message: "تم إرسال البلاغ بنجاح، سيتم مراجعته من قبل المسؤول." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "حدث خطأ ما أثناء الإبلاغ" });
  }
};

exports.getReportedComments = async (req, res) => {
  try {
    const reportedComments = await Comment.find({ reported: true })
      .populate("userId", "name") // جلب اسم المستخدم
      .populate("articleId", "title") // جلب عنوان المقال
      .sort({ createdAt: -1 }); // ترتيب التعليقات من الأحدث إلى الأقدم

    res.status(200).json(reportedComments);
  } catch (error) {
    res.status(500).json({
      error: "حدث خطأ أثناء جلب التعليقات المبلغ عنها",
      details: error.message,
    });
  }
};

exports.updateCommentStatus = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { status } = req.body; 

    // التحقق من وجود التعليق
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ error: "التعليق غير موجود" });
    }

    // تحديث حالة التعليق
    comment.status = status;
    comment.reported = false; // إزالة حالة الإبلاغ بعد تغيير الحالة
    await comment.save();

    res.status(200).json({ message: `تم تحديث حالة التعليق إلى ${status}`, comment });
  } catch (error) {
    res.status(500).json({
      error: "حدث خطأ أثناء تحديث حالة التعليق",
      details: error.message,
    });
  }
};