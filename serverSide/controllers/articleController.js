// const Article = require('../models/Article'); // استيراد المودل

// // إنشاء مقال جديد
// exports.createArticle = async (req, res) => {
//   try {
//     const { 
//       title, 
//       description, 
//       author, 
//       authorDescription, // <-- وصف المؤلف الجديد
//       featuredImage, 
//       category, 
//       tags, 
//       publishedDate,
//       paragraph1, 
//       paragraph2, 
//       paragraph3Title, 
//       paragraph3, 
//       paragraph4Title, 
//       paragraph4 
//     } = req.body;

//     const newArticle = new Article({
//       title,
//       description,
//       author,
//       authorDescription, // <-- إضافة وصف المؤلف هنا
//       featuredImage,
//       category,
//       tags,
//       publishedDate,
//       paragraph1,
//       paragraph2,
//       paragraph3Title,
//       paragraph3,
//       paragraph4Title,
//       paragraph4,
//       status: 'pending approval' // يتم تعيين الحالة تلقائيًا هنا
//     });

//     await newArticle.save();
//     res.status(201).json({ message: "تم إنشاء المقال بنجاح", article: newArticle });

//   } catch (error) {
//     res.status(500).json({ message: "حدث خطأ أثناء إنشاء المقال", error });
//   }
// };

// const Article = require('../models/Article');

// exports.createArticle = async (req, res) => {
//   try {
//     const newArticle = new Article(req.body);
//     await newArticle.save();
//     res.status(201).json({ message: '🎉 تم إنشاء المقال بنجاح!', article: newArticle });
//   } catch (error) {
//     res.status(400).json({ message: '❌ حدث خطأ أثناء إنشاء المقال.', error });
//   }
// };

const Article = require('../models/Article');

// 📝 Create a new article
exports.createArticle = async (req, res) => {
  try {

    const { title, description, author, authorDescription, category, tags, paragraph1, paragraph2, paragraph3Title, paragraph3, paragraph4Title, paragraph4 } = req.body;
    const featuredImage = req.file ? req.file.path : null;

     
     if (!title || !description || !author || !category || !paragraph1 || !paragraph2) {
      return res.status(400).json({ error: 'بعض الحقول مفقودة' });
    }

  
    // Create an automatic excerpt from the first paragraph
    let excerpt;
    if (paragraph1) {
      excerpt = paragraph1.substring(0, 200) + '...';
    } else {
      excerpt = '';
    }
    
    if (paragraph1 && paragraph1.length > 200) {
      excerpt = paragraph1.substring(0, 200) + '...';
    } else {
      excerpt = paragraph1 || '';
    }

    const newArticle = new Article({
      title,
      description,
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
      excerpt
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
      .select('_id title excerpt featuredImage author publishedDate category tags') 
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