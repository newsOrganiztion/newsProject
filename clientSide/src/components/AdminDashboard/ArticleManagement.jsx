import { useState, useEffect } from "react";
import { FaSearch, FaFilter, FaCheck, FaTimes, FaBars } from "react-icons/fa";
import axios from "axios";
import ArticlePopup from "./Articlepopup";

const ArticleManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null); // لتحديد المقالة المفتوحة

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/article/article"
      );
      setArticles(response.data);
      setLoading(false);
    } catch (error) {
      console.error("خطأ في جلب البيانات:", error);
      setLoading(false);
    }
  };

  const openPopup = (article) => {
    setSelectedArticle(article);
  };

  const closePopup = () => {
    setSelectedArticle(null);
  };

  const updateArticleStatus = async (id, newStatus) => {
    try {
      await axios.patch(
        `http://localhost:5000/api/article/${id}/status`,
        {
          status: newStatus,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      fetchArticles();
    } catch (error) {
      console.error("خطأ في تحديث الحالة:", error);
    }
  };

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      (article.title && article.title.includes(searchTerm)) ||
      (article.author && article.author.includes(searchTerm));
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div
      className="w-full p-2 sm:p-4 md:p-6 bg-[#f9f9fb] min-h-screen"
      dir="rtl"
    >
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 text-center bg-white rounded-lg py-3 sm:py-4 shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-[#51a31d]">
        إدارة المقالات
      </h1>

      {/* Mobile View Toggle Filters Button */}
      <button
        className="md:hidden w-full mb-4 p-3 bg-white rounded-lg shadow flex items-center justify-center"
        onClick={() => setShowFilters(!showFilters)}
      >
        <FaBars className="ml-2" />
        <span>{showFilters ? "إخفاء خيارات البحث" : "عرض خيارات البحث"}</span>
      </button>

      {/* Filters Section */}
      <div
        className={`bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-md mb-4 sm:mb-6 flex flex-col md:flex-row gap-4 ${
          showFilters ? "block" : "hidden md:flex"
        }`}
      >
        <div className="w-full md:w-1/2 relative">
          <input
            type="text"
            placeholder="أدخل كلمات البحث..."
            className="w-full p-3 sm:p-4 pr-10 border border-gray-300 rounded-lg focus:ring-[#51a31d] focus:border-[#51a31d] transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="w-full md:w-1/2 relative">
          <select
            className="w-full p-3 sm:p-4 pr-10 border border-gray-300 rounded-lg bg-white focus:ring-[#51a31d] focus:border-[#51a31d] transition-all"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">جميع الفئات</option>
            <option value="صحي">صحي</option>
            <option value="سياسي">سياسي</option>
            <option value="زراعي">زراعي</option>
          </select>
          <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Articles Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-full hover:shadow-lg transition-all duration-300">
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7585ff] mx-auto"></div>
            <p className="text-gray-500 text-lg mt-4">جاري تحميل المقالات...</p>
          </div>
        ) : (
          <>
            {/* Desktop view - table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#f3f4ff]">
                  <tr>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#51a31d]">
                      العنوان
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#51a31d]">
                      الكاتب
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#51a31d]">
                      الفئة
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#51a31d]">
                      التاريخ
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#51a31d]">
                      الحالة
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[#51a31d]">
                      الإجراءات
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredArticles.map((article) => (
                    <tr
                      key={article._id}
                      className="hover:bg-[#f9feff] transition-colors duration-200"
                    >
                      <td className="px-4 py-3">
                        <div
                          className="text-sm text-gray-700 font-medium cursor-pointer"
                          onClick={() => setSelectedArticle(article)} // استدعاء الدالة اللي بتفتح البوب أب
                        >
                          {article.title}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 h-10 overflow-y-auto">
                          {article.description || "لا يوجد ملخص للمقال"}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-900 font-medium">
                        {article.author}
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#f3f4ff] text-[#7585ff]">
                          {article.category}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {new Date(article.publishedDate).toLocaleDateString(
                          "ar-EG"
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            article.status === "published"
                              ? "bg-[#51a31d]"
                              : article.status === "pending approval"
                              ? "bg-[#e4a11b]"
                              : "bg-[#d94e5c]"
                          } text-white`}
                        >
                          {article.status === "published"
                            ? "منشور"
                            : article.status === "pending approval"
                            ? "بانتظار الموافقة"
                            : "مسودة"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex space-x-2 justify-end">
                          <button
                            className="p-2 text-[#51a31d] hover:bg-[#e7f7e1] rounded-full transition-colors duration-200"
                            onClick={() =>
                              updateArticleStatus(article._id, "published")
                            }
                            title="نشر المقال"
                          >
                            <FaCheck className="w-5 h-5" />
                          </button>
                          <button
                            className="p-2 text-[#d94e5c] hover:bg-[#fbeaec] rounded-full transition-colors duration-200 mr-2"
                            onClick={() =>
                              updateArticleStatus(article._id, "draft")
                            }
                            title="تحويل إلى مسودة"
                          >
                            <FaTimes className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile view - cards */}
            <div className="md:hidden">
              {filteredArticles.map((article) => (
                <div
                  key={article._id}
                  className="border-b border-gray-200 p-4 hover:bg-[#f9feff]"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-lg font-medium text-gray-900">
                      {article.title}
                    </div>
                    <div className="flex">
                      <button
                        className="p-2 text-[#51a31d] hover:bg-[#e7f7e1] rounded-full transition-colors duration-200 ml-1"
                        onClick={() =>
                          updateArticleStatus(article._id, "published")
                        }
                        title="نشر المقال"
                      >
                        <FaCheck className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 text-[#d94e5c] hover:bg-[#fbeaec] rounded-full transition-colors duration-200"
                        onClick={() =>
                          updateArticleStatus(article._id, "draft")
                        }
                        title="تحويل إلى مسودة"
                      >
                        <FaTimes className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="text-sm text-gray-700 mb-2">
                    <span className="font-medium">الكاتب: </span>
                    {article.author}
                  </div>

                  <div className="text-sm text-gray-700 mb-2 h-16 overflow-y-auto bg-gray-50 p-2 rounded">
                    <span className="font-medium">الملخص: </span>
                    {article.description || "لا يوجد ملخص للمقال"}
                  </div>

                  <div className="flex flex-wrap gap-2 justify-between items-center mt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#f3f4ff] text-[#7585ff]">
                      {article.category}
                    </span>

                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        article.status === "published"
                          ? "bg-[#51a31d]"
                          : article.status === "pending approval"
                          ? "bg-[#e4a11b]"
                          : "bg-[#d94e5c]"
                      } text-white`}
                    >
                      {article.status === "published"
                        ? "منشور"
                        : article.status === "pending approval"
                        ? "بانتظار الموافقة"
                        : "مسودة"}
                    </span>

                    <span className="text-xs text-gray-500">
                      {new Date(article.publishedDate).toLocaleDateString(
                        "ar-EG"
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {filteredArticles.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">لا توجد مقالات مطابقة للبحث</p>
          </div>
        )}
      </div>
      {selectedArticle && (
        <ArticlePopup
          isOpen={true}
          onClose={closePopup}
          article={selectedArticle}
        />
      )}
    </div>
  );
};

export default ArticleManagement;
