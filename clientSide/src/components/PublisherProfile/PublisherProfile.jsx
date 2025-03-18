import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PublisherProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [articles, setArticles] = useState([]);
  const [activeTab, setActiveTab] = useState("published");
  const [searchTerm, setSearchTerm] = useState("");
  const [updateSuccess, setUpdateSuccess] = useState("");
  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    email: "",
    profilePicture: "",
  });

  const [userId, setUserId] = useState("");
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalArticles: 0,
  });

  useEffect(() => {
    const getUserId = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/users/get-user",
          {
            withCredentials: true, // Important for sending cookies
          }
        );

        console.log("✅ User ID received:", res.data.userId);
        setUserId(res.data.userId);
      } catch (error) {
        console.error(
          "❌ Error fetching user:",
          error.response?.data || error.message
        );
      }
    };

    getUserId();
  }, []);

  // تعديل الـ useEffect الخاص بجلب المقالات ليعمل بعد تعيين userId
  useEffect(() => {
    if (!userId) return;

    const fetchArticles = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:5000/api/articles/foruser/${userId}`,
          {
            params: {
              page: pagination.currentPage,
              limit: pagination.limit,
            },
          }
        );

        setArticles(res.data.articles);
        setPagination((prev) => ({
          ...prev,
          totalPages: res.data.totalPages,
          totalArticles: res.data.totalArticles,
        }));
        setLoading(false);
      } catch (err) {
        setError("Error fetching articles");
        setLoading(false);
      }
    };

    fetchArticles();
  }, [userId, pagination.currentPage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };






  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/profile", {
          withCredentials: true,
        });
        setUser(res.data.user);
        setUpdatedUser({
          name: res.data.user.name,
          email: res.data.user.email,
          profilePicture: res.data.user.profilePicture,
        });
      } catch (error) {
        toast.error(
          error.response?.data?.message || "فشل في جلب بيانات المستخدم"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        "http://localhost:5000/api/users/profile",
        updatedUser,
        {
          withCredentials: true,
        }
      );
      setUser(res.data.user);
      setIsEditing(false);
      setUpdateSuccess("تم تحديث المعلومات بنجاح");
      setTimeout(() => setUpdateSuccess(""), 3000);
    } catch (error) {
      setError(error.response?.data?.message || "فشل في تحديث المعلومات");
      setTimeout(() => setError(""), 3000);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/users/logout",
        {},
        {
          withCredentials: true,
        }
      );
      window.location.href = "/auth";
    } catch (error) {
      setError("فشل في تسجيل الخروج");
      setTimeout(() => setError(""), 3000);
    }
  };






  // Handle pagination click
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > pagination.totalPages) return;
    setPagination((prev) => ({
      ...prev,
      currentPage: newPage,
    }));
  };








  // تصفية المقالات حسب الحالة والبحث
  const filteredArticles = articles.filter((article) => {
    const matchesTab = activeTab === "all" || article.status === activeTab;
    const matchesSearch =
      searchTerm === "" ||
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (article.content &&
        article.content.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl text-[#383838]">
          <svg
            className="animate-spin -ml-1 mr-3 h-8 w-8 text-[#51a31d]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          جاري التحميل...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f0f2f5] min-h-screen" dir="rtl">
      {/* رأس الصفحة مع الإحصائيات */}
      <div className="bg-[#51a31d] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center mb-6 md:mb-0">
              {/* {user?.profilePicture ? (
                <img
                  src={user.profilePicture}
                  alt="الصورة الشخصية"
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border-4 border-white shadow-lg">
                  <span className="text-3xl text-[#51a31d] font-bold">
                    {user?.name?.charAt(0).toUpperCase() || "؟"}
                  </span>
                </div>
              )} */}
              <div className="mt-4 md:mt-0 md:mr-4 text-center md:text-right">
                <h1 className="text-2xl font-bold">{user?.name}</h1>
                <p className="text-blue-100">{user?.email}</p>
                <div className="mt-1">
                  <span className="inline-block px-3 py-1 bg-black bg-opacity-20 rounded-full text-sm">
                    {user?.role}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 min-w-[100px] text-center">
                <div className="text-2xl font-bold text-black">
                  {pagination.totalArticles} {/* العدد الإجمالي للمقالات */}
                </div>
                <div className="text-sm text-black">المقالات</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 min-w-[100px] text-center">
                <div className="text-2xl font-bold text-black">
                  {articles.reduce(
                    (sum, article) => sum + (article.likes || 0),
                    0
                  )}
                </div>
                <div className="text-sm text-black">الإعجابات</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 min-w-[100px] text-center">
                <div className="text-2xl font-bold text-black">
                  {articles.reduce(
                    (sum, article) => sum + (article.comments?.length || 0),
                    0
                  )}
                </div>
                <div className="text-sm text-black">التعليقات</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 min-w-[100px] text-center">
                <div className="text-2xl font-bold text-black">
                  {articles.reduce(
                    (sum, article) => sum + (article.shares || 0),
                    0
                  )}
                </div>
                <div className="text-sm text-black">المشاركات</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {updateSuccess && (
          <div
            className="bg-white border-r-4 border-[#51a31d] text-[#383838] px-4 py-3 rounded-lg shadow-md mb-6"
            role="alert"
          >
            <span className="block sm:inline">{updateSuccess}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* الشريط الجانبي */}
          <div className="lg:col-span-3">
            {/* معلومات المستخدم */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="bg-[#7585ff] text-white p-4">
                <h2 className="text-lg font-semibold">المعلومات الشخصية</h2>
              </div>
              <div className="p-4">
                {isEditing ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-500 block mb-1">
                        الاسم
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={updatedUser.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:border-[#7585ff] focus:ring focus:ring-[#7585ff] focus:ring-opacity-20"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500 block mb-1">
                        البريد الإلكتروني
                      </label>
                      <input
                        readOnly
                        type="email"
                        name="email"
                        value={updatedUser.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:border-[#7585ff] focus:ring focus:ring-[#7585ff] focus:ring-opacity-20"
                        required
                      />
                    </div>
                    {/* <div>
                      <label className="text-sm text-gray-500 block mb-1">
                        رابط الصورة الشخصية
                      </label>
                      <input
                        type="url"
                        name="profilePicture"
                        value={updatedUser.profilePicture}
                        onChange={handleInputChange}
                        placeholder="https://example.com/image.jpg"
                        className="w-full p-2 border border-gray-300 rounded-md focus:border-[#7585ff] focus:ring focus:ring-[#7585ff] focus:ring-opacity-20"
                      />
                    </div> */}
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        إلغاء
                      </button>
                      <button
                        type="submit"
                        className="bg-[#51a31d] text-white px-4 py-2 rounded-lg hover:bg-[#478619] transition-colors"
                      >
                        حفظ التغييرات
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-gray-500">الاسم</label>
                      <p className="font-medium text-gray-800">{user?.name}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">
                        البريد الإلكتروني
                      </label>
                      <p className="font-medium text-gray-800">{user?.email}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">الدور</label>
                      <p className="font-medium text-gray-800">{user?.role}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-500">
                        تاريخ الإنشاء
                      </label>
                      <p className="font-medium text-gray-800">
                        {new Date(user?.createdAt).toLocaleDateString("ar-EG")}
                      </p>
                    </div>
                    <div className="pt-3">
                      <button
                        onClick={() => setIsEditing(true)}
                        className="w-full bg-[#7585ff] hover:bg-[#6a79e6] text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        تعديل المعلومات
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* الإحصائيات السريعة */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="bg-[#51a31d] text-white p-4">
                <h2 className="text-lg font-semibold">إحصائيات سريعة</h2>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">مقالات منشورة</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {articles.filter((a) => a.status === "published").length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">مسودات</span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {articles.filter((a) => a.status === "draft").length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">إجمالي المشاهدات</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {articles
                        .reduce((sum, article) => sum + (article.views || 0), 0)
                        .toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleLogout}
                    className="w-full bg-black hover:bg-[#2d2d2d] text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    تسجيل الخروج
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* المقالات */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-4">
                <div className="flex justify-between mb-4">
                  <div>
                    <input
                      type="text"
                      placeholder="بحث عن مقالات..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-64 p-2 border border-gray-300 rounded-md focus:border-[#7585ff] focus:ring focus:ring-[#7585ff] focus:ring-opacity-20"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setActiveTab("all")}
                      className={`px-4 py-2 rounded-lg text-sm ${
                        activeTab === "all"
                          ? "bg-[#51a31d] text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      الكل
                    </button>
                    <button
                      onClick={() => setActiveTab("published")}
                      className={`px-4 py-2 rounded-lg text-sm ${
                        activeTab === "published"
                          ? "bg-[#51a31d] text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      منشورة
                    </button>
                    <button
                      onClick={() => setActiveTab("draft")}
                      className={`px-4 py-2 rounded-lg text-sm ${
                        activeTab === "draft"
                          ? "bg-[#51a31d] text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      قيد الانتظار
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles.length === 0 ? (
                    <div className="col-span-full text-center text-gray-600">
                      لا توجد مقالات لعرضها
                    </div>
                  ) : (
                    filteredArticles.map((article) => (
                      <Link
                        to={`/article/${article._id}`} // Link to the article detail page
                        key={article._id}
                        className="bg-gray-50 p-4 rounded-lg shadow-md"
                      >
                        <h3 className="font-semibold text-lg mb-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-700 line-clamp-3">
                          {article.content}
                        </p>
                        <div className="mt-4 flex justify-between text-sm text-gray-600">
                          <div className="flex items-center">
                            <span className="font-medium text-[#51a31d]">
                              {article.likes || 0} إعجاب
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-medium text-[#51a31d]">
                              {article.comments?.length || 0} تعليق
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="font-medium text-[#51a31d]">
                              {article.shares || 0} مشاركة
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))
                  )}
                </div>

                {/* Pagination controls */}
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={() => handlePageChange(pagination.currentPage - 1)}
                    disabled={pagination.currentPage === 1}
                    className="px-4 py-2 rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300 disabled:opacity-50"
                  >
                    السابق
                  </button>
                  <span className="mx-4 text-lg">
                    الصفحة {pagination.currentPage} من {pagination.totalPages}
                  </span>
                  <button
                    onClick={() => handlePageChange(pagination.currentPage + 1)}
                    disabled={pagination.currentPage === pagination.totalPages}
                    className="px-4 py-2 rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300 disabled:opacity-50"
                  >
                    التالي
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherProfile;
