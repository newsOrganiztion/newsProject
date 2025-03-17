const Article = require('../models/Article');
const User = require("../models/User");
const Comment = require("../models/Comment");
const Analytics = require('../models/Analytics');

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

  exports.getJournalistsWithDetails = async (req, res) => {
    try {
     
      const journalists = await User.find({ role: 'journalist' });
  
      const journalistsWithDetails = await Promise.all(journalists.map(async (journalist) => {
        const articles = await Article.find({ authorId: journalist._id });
        const articlesWithDetails = await Promise.all(articles.map(async (article) => {
          const comments = await Comment.find({ articleId: article._id }).populate('userId', 'name profilePicture');
          return {
            ...article.toObject(),
            comments,
            likes: article.likes,
            shares: article.shares,
            views: article.views,
          };
        }));
  
        return {
          ...journalist.toObject(),
          articles: articlesWithDetails,
        };
      }));
  
      res.status(200).json(journalistsWithDetails);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching journalists details', error });
    }
  };


 
exports.getAnalytics = async (req, res) => {
  try {
    const analyticsData = await Analytics.find().populate('articleId');
    res.status(200).json(analyticsData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.addAnalytics = async (req, res) => {
  const { articleId, views, shares, likes, commentsCount, trendingStatus } = req.body;
  try {
    const newAnalytics = new Analytics({
      articleId,
      views,
      shares,
      likes,
      commentsCount,
      trendingStatus
    });
    await newAnalytics.save();
    res.status(201).json(newAnalytics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};