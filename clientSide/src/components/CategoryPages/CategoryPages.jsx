import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Bookmark } from "lucide-react";

const CategoryPage = () => {
  const [articles, setArticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const [bookmarkedArticles, setBookmarkedArticles] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/articles/all");
        setArticles(response.data);
        setLoading(false);
      } catch (error) {
        console.error("خطأ في جلب البيانات:", error);
        setLoading(false);
      }
    };

    const getUserId = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/get-user", {
          withCredentials: true,
        });
        setId(res.data.userId);
      } catch (error) {
        console.error("❌ Error fetching user:", error.response?.data || error.message);
      }
    };

    fetchArticles();
    getUserId();
  }, []);

  const handleBookmark = async (articleId) => {
    if (!id) {
      console.error("❌ User ID is missing. Please make sure the user is logged in.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/users/save-article",
        { articleId },
        { withCredentials: true }
      );

      setBookmarkedArticles((prev) => ({
        ...prev,
        [articleId]: !prev[articleId],
      }));
    } catch (error) {
      console.error("❌ Error saving article:", error.response?.data || error.message);
    }
  };

  const filteredArticles = articles.filter(
    (article) =>
      (activeCategory === "الكل" || article.category === activeCategory) &&
      (article.title.includes(searchTerm) ||
        (Array.isArray(article.tags) && article.tags.some(tag => tag.includes(searchTerm))) ||
        (typeof article.tags === "string" && article.tags.includes(searchTerm)))
  );

  return (
    <>
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-8">
            <h1 className="text-3xl font-bold text-[#383838]">مقالات</h1>
            <div className="flex space-x-reverse gap-x-6 justify-center flex-1">
              {["الكل", "سياسي", "صحي", "زراعي"].map((category) => (
                <button
                  key={category}
                  className={`py-2 text-lg font-bold ${
                    activeCategory === category ? "text-[#51a31d]" : "text-[#383838]"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث هنا..."
                className="rounded-md border border-gray-200 p-3 pr-10 w-56 text-sm focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="absolute left-0 top-0 bg-[#383838] text-white h-full w-10 flex items-center justify-center rounded-l-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 mt-4">
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredArticles.map((article) => (
              <div key={article._id} className="flex flex-col bg-white p-3 rounded-lg shadow-sm">
                <div className="overflow-hidden rounded-lg mb-3 relative">
                  <Link to={`/article/${article._id}`}>
                    <img
                      src={`http://localhost:5000/${article.featuredImage}`}
                      alt={article.title}
                      className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </Link>
                  <button
                    onClick={() => handleBookmark(article._id)}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-all ${
                      bookmarkedArticles[article._id] ? "bg-green-500 text-white hover:bg-green-600" : "bg-white/80 hover:bg-gray-200 text-[#383838]"
                    }`}
                  >
                    <Bookmark size={16} />
                  </button>
                </div>
                <h2 className="text-lg font-bold text-[#383838] mb-1 hover:text-[#5D8736] transition-colors duration-300">
                  {article.title}
                </h2>
                <div className="text-xs text-gray-500 mb-2">
                  بواسطة {article.author} - {new Date(article.publishedDate).toLocaleDateString()}
                </div>
                <p className="text-sm">{article.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {article.tags && article.tags.map((tag, index) => (
                    <span key={index} className="text-gray-500 text-xs bg-gray-100 px-2 py-1 rounded-full cursor-pointer hover:bg-[rgba(117,133,255,0.2)]">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-600">لا توجد مقالات متاحة.</p>
        )}
      </div>
    </>
  );
};

export default CategoryPage;
