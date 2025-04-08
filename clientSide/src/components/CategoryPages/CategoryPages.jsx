import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Bookmark, Menu, Search, X } from "lucide-react";

const CategoryPage = () => {
  const [articles, setArticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const [bookmarkedArticles, setBookmarkedArticles] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({});

  

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/articles/all",
          {
            params: { page: currentPage, limit: 10 }, // Pagination Parameters
          }
        );
        setArticles(response.data.data);
        setPagination(response.data.pagination);
        setLoading(false);
      } catch (error) {
        console.error("خطأ في جلب البيانات:", error);
        setLoading(false);
      }
    };

    const getUserId = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/users/get-user",
          {
            withCredentials: true,
          }
        );
        setId(res.data.userId);
      } catch (error) {
        console.error(
          "❌ Error fetching user:",
          error.response?.data || error.message
        );
      }
    };

    fetchArticles();
    getUserId();
  }, [currentPage, activeCategory, searchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleBookmark = async (articleId) => {
    if (!id) {
      console.error(
        "❌ User ID is missing. Please make sure the user is logged in."
      );
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
      console.error(
        "❌ Error saving article:",
        error.response?.data || error.message
      );
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileSearch = () => {
    setMobileSearchOpen(!mobileSearchOpen);
  };

  const filteredArticles = articles.filter(
    (article) =>
      (activeCategory === "الكل" || article.category === activeCategory) &&
      (article.title.includes(searchTerm) ||
        (Array.isArray(article.tags) &&
          article.tags.some((tag) => tag.includes(searchTerm))) ||
        (typeof article.tags === "string" && article.tags.includes(searchTerm)))
  );

  const categories = ["الكل", "سياسي", "صحي", "زراعي"];
  

  return (
    <>

    {/* Hero Section */}
    <div className="relative w-full h-100 flex items-center text-white">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="https://videos.pexels.com/video-files/6271585/6271585-sd_960_506_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "rgba(40, 36, 41, 0.7)" }}></div>
        <div className="relative z-10 max-w-4xl ml-auto px-10 lg:px-20 text-right" style={{ marginTop: "150px" }}>
          <h1 className="text-lg md:text-xl font-bold">
            اقرأ أهم وأبرز الأخبار والتقارير العربية والعالمية في الشأن السياسي والزراعي والصحي والمزيد حصرياً عبر موقعنا الإلكتروني{" "}
            <span className="text-[#51a31d]">يقين .</span>
          </h1>
        </div>
      </div>
      <div className="w-full h-1 bg-[#51a31d]"></div>

      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4 md:py-8">
            <h1 className="text-xl md:text-3xl font-bold text-[#383838]">
              مقالات
            </h1>

            {/* Desktop Categories */}
            <div className="hidden md:flex space-x-reverse gap-x-3 lg:gap-x-6 justify-center flex-1">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`py-2 text-base lg:text-lg font-bold ${
                    activeCategory === category
                      ? "text-[#51a31d]"
                      : "text-[#383838]"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Desktop Search */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="ابحث هنا..."
                className="rounded-md border border-gray-200 p-3 pr-10 w-36 lg:w-56 text-sm focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="absolute left-0 top-0 bg-[#383838] text-white h-full w-10 flex items-center justify-center rounded-l-md">
                <Search className="h-4 w-4" />
              </button>
            </div>

            {/* Mobile Menu & Search Toggles */}
            <div className="flex items-center space-x-reverse space-x-2 md:hidden">
              <button
                onClick={toggleMobileSearch}
                className="p-2 rounded-full bg-gray-100 text-[#383838]"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-full bg-gray-100 text-[#383838]"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          {mobileSearchOpen && (
            <div className="block md:hidden pb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث هنا..."
                  className="rounded-md border border-gray-200 p-3 pr-4 w-full text-sm focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="absolute left-0 top-0 bg-[#383838] text-white h-full w-10 flex items-center justify-center rounded-l-md">
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* Mobile Categories */}
          {mobileMenuOpen && (
            <div className="flex md:hidden overflow-x-auto pb-4 no-scrollbar">
              <div className="flex space-x-reverse gap-x-4 w-full justify-between">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`py-2 px-3 text-sm whitespace-nowrap rounded-full ${
                      activeCategory === category
                        ? "bg-[#51a31d]/10 text-[#51a31d] font-bold"
                        : "bg-gray-100 text-[#383838]"
                    }`}
                    onClick={() => {
                      setActiveCategory(category);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Loading Indicator */}
      {loading ? (
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#51a31d] border-r-transparent"></div>
          <p className="mt-4 text-gray-600">جاري تحميل المقالات...</p>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-6 md:py-8 mt-2 md:mt-4">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article._id}
                  className="flex flex-col bg-white p-3 rounded-lg shadow-sm"
                >
                  <div className="overflow-hidden rounded-lg mb-3 relative">
                    <Link to={`/article/${article._id}`}>
                      <img
                        src={`http://localhost:5000/${article.featuredImage}`}
                        alt={article.title}
                        className="w-full h-40 sm:h-44 md:h-48 object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </Link>
                    <button
                      onClick={() => handleBookmark(article._id)}
                      className={`absolute top-4 right-4 p-2 rounded-full transition-all ${
                        bookmarkedArticles[article._id]
                          ? "bg-green-500 text-white hover:bg-green-600"
                          : "bg-white/80 hover:bg-gray-200 text-[#383838]"
                      }`}
                    >
                      <Bookmark size={16} />
                    </button>
                  </div>
                  <Link to={`/article/${article._id}`}>
                    <h2 className="text-base md:text-lg font-bold text-[#383838] mb-1 hover:text-[#5D8736] transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h2>
                  </Link>
                  <div className="text-xs text-gray-500 mb-2">
                    بواسطة {article.author} -{" "}
                    {new Date(article.publishedDate).toLocaleDateString()}
                  </div>
                  <p className="text-xs md:text-sm line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {article.tags &&
                      article.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-gray-800 text-xs bg-gray-100 px-2 py-1 rounded-full cursor-pointer hover:bg-[rgba(117,133,255,0.2)]"
                        >
                          #{tag}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <p className="text-lg text-gray-600">لا توجد مقالات متاحة</p>
              <p className="text-sm text-gray-500 mt-1">
                جرّب البحث بكلمات مختلفة أو تغيير التصنيف
              </p>
            </div>
          )}
        </div>
      )}

 {/* Pagination Controls */}
 <div className="flex justify-center">
        <nav className="bg-gray-200 rounded-full px-8 mb-5">
          <ul className="flex text-gray-600 gap-4 font-medium py-2">
            {Array.from({ length: pagination.totalPages }, (_, index) => (
              <li key={index + 1}>
                <button
                  onClick={() => handlePageChange(index + 1)}
                  className={`rounded-full px-4 py-2 transition duration-300 ease-in-out ${
                    currentPage === index + 1
                      ? "bg-[rgba(117,133,255,0.2)] text-gray-600"
                      : "hover:bg-[rgba(117,133,255,0.2)] hover:text-gray-600"
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default CategoryPage;
