const Article = require('../models/Article');
const User = require("../models/User");
const Comment = require("../models/Comment");

exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    console.log(articles);
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ أثناء جلب المقالات', details: error.message });
  }
};

exports.updateArticleStatus = async (req, res) => {
    try {
      const { status } = req.body;
      const articleId = req.params.id;
  
      const updatedArticle = await Article.findByIdAndUpdate(articleId, { status }, { new: true });
  
      if (!updatedArticle) {
        return res.status(404).json({ error: "المقال غير موجود" });
      }
  
      res.status(200).json(updatedArticle);
    } catch (error) {
      res.status(500).json({ error: "حدث خطأ أثناء تحديث حالة المقال", details: error.message });
    }
  };