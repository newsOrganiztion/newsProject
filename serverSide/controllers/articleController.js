const Article = require("../models/Article");
const Comment = require("../models/Comment");

// 📝 إنشاء مقال جديد
exports.createArticle = async (req, res) => {
  try {
    const {
      title,
      author,
      authorDescription,
      category,
      tags,
      paragraph1,
      paragraph2,
      paragraph3Title,
      paragraph3,
      paragraph4Title,
      paragraph4,
      authorId,
    } = req.body;

    const featuredImage = req.file ? req.file.path : null;

    if (!title || !author || !category || !paragraph1 || !paragraph2) {
      return res.status(400).json({ error: "بعض الحقول مفقودة" });
    }

    // توليد وصف تلقائي من الفقرة الأولى
    let description = "";
    if (paragraph1) {
      description =
        paragraph1.length > 200
          ? paragraph1.substring(0, 200) + "..."
          : paragraph1;
    }

    const newArticle = new Article({
      title,
      author,
      authorDescription,
      featuredImage,
      category,
      tags,
      paragraph1,
      paragraph2,
      paragraph3Title,
      paragraph3,
      paragraph4Title,
      paragraph4,
      description,
      authorId,
    });

    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    res
      .status(500)
      .json({ error: "حدث خطأ أثناء إنشاء المقال", details: error.message });
  }
};

// 📜 جلب جميع المقالات
exports.getAllArticles = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 10; 
    const skip = (page - 1) * limit;

    const articlesQuery = Article.find({ status: "published" })
      .select("_id title description featuredImage author publishedDate category tags")
      .populate("author", "name");

    const totalArticles = await Article.countDocuments({ status: "published" });

    const articles = await articlesQuery
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      data: articles,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalArticles / limit),
        totalItems: totalArticles,
        itemsPerPage: limit,
      },
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({
      error: "حدث خطأ أثناء جلب المقالات",
      details: error.message,
    });
  }
};

// 🔍 جلب تفاصيل مقال واحد
exports.getArticleById = async (req, res) => {
  try {
    const articleId = req.params.id;

    // البحث عن المقال
    const article = await Article.findById(articleId).populate(
      "author",
      "name description"
    );

    if (!article) {
      return res.status(404).json({ error: "المقال غير موجود" });
    }

    const comments = await Comment.find({
      articleId: article._id,
      status: "approved",
    })
      .populate("userId", "name")
      .sort({ createdAt: -1 });

   
    article.views += 1;
    await article.save();

    res.status(200).json({
      ...article._doc,
      comments, 
      commentsCount: comments.length, 
    });
  } catch (error) {
    res.status(500).json({
      error: "حدث خطأ أثناء جلب تفاصيل المقال",
      details: error.message,
    });
  }
};
exports.likeArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: "المقال غير موجود" });
    }

    article.likes += 1;
    await article.save();

    res.json({ likes: article.likes });
  } catch (error) {
    res
      .status(500)
      .json({ error: "حدث خطأ أثناء تسجيل الإعجاب", details: error.message });
  }
};


exports.shareArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ error: "المقال غير موجود" });
    }

    article.shares += 1;
    await article.save();

    res.json({ shares: article.shares });
  } catch (error) {
    res
      .status(500)
      .json({ error: "حدث خطأ أثناء مشاركة المقال", details: error.message });
  }
};

exports.getArticles = async (req, res) => {
  try {
    const { id } = req.params; // Get userId from params
    const { page = 1, limit = 6 } = req.query; // Get pagination parameters (default to page 1 and limit 10)

    console.log("Fetching articles for user ID:", id); // Log for debugging

    // Find articles for the given user, applying pagination
    const articles = await Article.find({ authorId: id }) // Filter articles by authorId
      .skip((page - 1) * limit) // Skip articles for the previous pages
      .limit(Number(limit)) // Limit the number of articles per page
      .sort({ createdAt: -1 }); // Optionally sort articles by creation date (newest first)

    // Get total count of articles for this user
    const totalArticles = await Article.countDocuments({ authorId: id });

    if (!articles || articles.length === 0) {
      return res.status(404).send("No articles found for this user");
    }

    // Return articles with pagination info
    res.status(200).json({
      articles,
      currentPage: page,
      totalPages: Math.ceil(totalArticles / limit), // Calculate total pages
      totalArticles,
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).send("An error occurred while fetching articles");
  }
};
