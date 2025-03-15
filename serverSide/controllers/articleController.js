const Article = require('../models/Article');

// 📝 Create a new article
exports.createArticle = async (req, res) => {
  try {

    const { title, author, authorDescription, category, tags, paragraph1, paragraph2, paragraph3Title, paragraph3, paragraph4Title, paragraph4 ,authorId} = req.body;
    const featuredImage = req.file ? req.file.path : null;
    // const userId = req.user._id;

     
     if (!title ||  !author || !category || !paragraph1 || !paragraph2) {
      return res.status(400).json({ error: 'بعض الحقول مفقودة' });
    }
    
    if (paragraph1 && paragraph1.length > 200) {
      description = paragraph1.substring(0, 200) + '...';
    } else {
      description = paragraph1 || '';
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
      // author: userId,
    });

     

    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ أثناء إنشاء المقال', details: error.message });
  }
};

// 📜 Fetch all articles
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find()
      .select('_id title description featuredImage author publishedDate category tags') 
      .populate('author', 'name');

    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ أثناء جلب المقالات', details: error.message });
  }
};

// 🔍 Get details of a single article using the ID
exports.getArticleById = async (req, res) => {
  try {
    const articleId = req.params.id; 

    // Find the article using ID
    const article = await Article.findById(articleId)
      .populate('author', 'name description');

    if (!article) {
      return res.status(404).json({ error: 'المقال غير موجود' });
    }

    // Increase the number of views
    article.views += 1;
    await article.save();

    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ أثناء جلب تفاصيل المقال', details: error.message });
  }
};



exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find(); //userid
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: "Error fetching articles" });
  }
};