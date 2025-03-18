import React, { useState, useEffect } from 'react';
import { LayoutGrid, List, Filter, Clock, Trash2, Bookmark, ChevronDown, X, User, Calendar, Eye, Star, Heart, Share2, Bell, BookOpen } from 'lucide-react';
import axios from "axios";

const BookmarkPage = () => {
  // State for view toggle (grid/list)
  const [viewMode, setViewMode] = useState('grid');
  // State for animations
  const [isLoaded, setIsLoaded] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [hasBookmarks, setHasBookmarks] = useState(false);

  // Categories for tabs
  const categories = [
    { id: "all", name: "الكل", icon: <Bookmark size={14} /> },
    { id: "health", name: "الصحة", icon: <Star size={14} /> },
    { id: "agriculture", name: "زراعة", icon: <Star size={14} /> },
    { id: "politics", name: "سياسة", icon: <Star size={14} /> }
  ];

  // Set animation on load
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  // State for active category
  const [activeCategory, setActiveCategory] = useState("all");

  // Function to remove bookmark
  const removeBookmark = (id, e) => {
    e.stopPropagation();
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
  };

  // Check if there are any bookmarks
  // Sample card click handler
  const handleCardClick = () => {
    console.log('Card clicked - would open article');
  };

  // Get category color
  const getCategoryColor = (category) => {
    switch (category) {
      case "Technology": return "bg-[#51a31d]/10 text-[#51a31d] border-[#51a31d]/20";
      case "Business": return "bg-[#51a31d]/10 text-[#51a31d] border-[#51a31d]/20";
      case "Science": return "bg-[#51a31d]/10 text-[#51a31d] border-[#51a31d]/20";
      case "Sports": return "bg-[#51a31d]/10 text-[#51a31d] border-[#51a31d]/20";
      case "Health": return "bg-[#51a31d]/10 text-[#51a31d] border-[#51a31d]/20";
      default: return "bg-[#51a31d]/10 text-[#51a31d] border-[#51a31d]/20";
    }
  };

  useEffect(() => {
    const getUserId = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/get-user", {
          withCredentials: true, // Important for sending cookies
        });
        console.log("✅ User ID received:", res.data.userId);
      } catch (error) {
        console.error("❌ Error fetching user:", error.response?.data || error.message);
      }
    };

    const getSavedArticles = async () => {
      const response = await axios.get("http://localhost:5000/api/artic/saved-articles", { withCredentials: true });
      const savedArticles = response.data.savedArticles || [];
      console.log(savedArticles);
      setBookmarks(savedArticles);
      setHasBookmarks(savedArticles.length > 0);
    };

    getUserId();
    getSavedArticles();
  }, []);

  console.log(hasBookmarks);

  // Tooltip component
  const Tooltip = ({ children, text }) => (
    <div className="group relative">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 px-2 py-1 bg-[#51a31d] text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap z-10 shadow-lg shadow-[#51a31d]/20">
        {text}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-[#51a31d]"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#51a31d]/5" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-10 transition-all duration-300 border-b-2 border-[#51a31d]/10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6">
          <div className="flex flex-col space-y-6">
            {/* Top section with logo and view toggle */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
              <h1 className="text-3xl font-bold text-[#383838] flex items-center">
                <div className="ml-3 w-10 h-10 rounded-lg bg-[#51a31d] text-white flex items-center justify-center shadow-lg shadow-[#51a31d]/30 transform rotate-3">
                  <Bookmark size={20} className="transform -rotate-3" />
                </div>
                <span className="relative">
                  إشاراتي المرجعية
                  <span className="absolute -bottom-1 right-0 w-full h-1 bg-[#51a31d]/30 rounded-full"></span>
                </span>
              </h1>
              <div className="flex space-x-3 space-x-reverse self-end sm:self-auto">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg border transition-all duration-500 ${
                    viewMode === 'grid'
                      ? 'bg-[#51a31d] text-white border-[#51a31d] shadow-lg shadow-[#51a31d]/20 scale-105'
                      : 'bg-white text-[#383838] border-gray-200 hover:border-[#51a31d] hover:text-[#51a31d]'
                  }`}
                >
                  <LayoutGrid size={18} />
                  <span className="inline-block font-medium">شبكة</span>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg border transition-all duration-500 ${
                    viewMode === 'list'
                      ? 'bg-[#51a31d] text-white border-[#51a31d] shadow-lg shadow-[#51a31d]/20 scale-105'
                      : 'bg-white text-[#383838] border-gray-200 hover:border-[#51a31d] hover:text-[#51a31d]'
                  }`}
                >
                  <List size={18} />
                  <span className="inline-block font-medium">قائمة</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Category tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 mb-4">
        <div className="flex space-x-3 space-x-reverse pb-4 overflow-x-auto scrollbar-hide"></div>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {hasBookmarks ? (
          <div
            className={`
              ${viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
                : 'flex flex-col space-y-6'
              }
              opacity-0 transform translate-y-8 transition-all duration-1000 ease-out
              ${isLoaded ? 'opacity-100 translate-y-0' : ''}
            `}
          >
            {bookmarks.map((bookmark, index) => (
              <div
                key={bookmark._id}
                onClick={handleCardClick}
                className={`
                  group bg-white rounded-lg overflow-hidden transition-all duration-500 
                  ${viewMode === 'list' ? 'flex flex-row-reverse' : 'flex flex-col'}
                  opacity-0 transform translate-y-8
                  ${isLoaded ? 'opacity-100 translate-y-0' : ''}
                  transition-all duration-700 ease-out
                  border border-gray-100 hover:border-[#51a31d]
                  shadow-md hover:shadow-lg
                  relative
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Card decoration - more subtle for official look */}
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-[#51a31d]/5 rounded-full transform scale-0 group-hover:scale-100 transition-all duration-500 z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#51a31d]/5 rounded-full transform scale-0 group-hover:scale-100 transition-all duration-500 delay-100 z-0"></div>

                {/* Article Image */}
                <div className={`
                  relative overflow-hidden
                  ${viewMode === 'list' ? 'flex-shrink-0 w-36 sm:w-48' : 'h-48'}
                  z-10
                `}>
                  <img
                    src={`http://localhost:5000/${bookmark.featuredImage}`}
                    alt={bookmark.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Image overlay with more subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#383838]/70 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-[#51a31d]/30 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  {/* Category badge - positioned over image */}
                  <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-[#383838] px-3 py-1 rounded-md text-xs font-medium shadow-sm">
                    {bookmark.category || "عام"}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-5 flex-grow flex flex-col relative z-10">
                  {/* Reading time and date - more clean and modern */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center text-xs text-[#383838]/70 font-medium">
                      <Clock size={12} className="ml-1.5 text-[#51a31d]" />
                      <span className="inline-block">{bookmark.publishedDate || "5 دقائق للقراءة"}</span>
                    </div>
                    <div className="flex items-center text-xs text-[#383838]/70 font-medium">
                      <Calendar size={12} className="ml-1.5 text-[#51a31d]" />
                      <span className="inline-block">{bookmark.createdAt || "14 مارس 2025"}</span>
                    </div>
                  </div>

                  {/* Title - cleaner font styling */}
                  <h2 className="text-lg font-bold text-[#383838] mb-2 line-clamp-2 relative group-hover:text-[#51a31d] transition-colors duration-300">
                    {bookmark.title || "عنوان المقال"}
                    <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#51a31d] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                  </h2>

                  {/* Author */}
                  <div className="flex items-center text-sm mb-4 text-[#383838]/70">
                    <User size={14} className="ml-1.5 text-[#51a31d]" />
                    <span className="inline-block font-medium">{bookmark.content || "كاتب المقال"}</span>
                  </div>

                  {/* Description - added for better content preview */}
                  <p className="text-sm text-[#383838]/80 mb-4 line-clamp-2">
                    {bookmark.description || "وصف مختصر للمقال يظهر هنا. يمكن أن يحتوي على معلومات موجزة عن محتوى المقال."}
                  </p>

                  {/* Stats bar - NEW: added likes and views */}
                  <div className="flex items-center justify-between mb-4 py-2 border-y border-gray-100">
                    {/* Likes counter */}
                    <div className="flex flex-col items-center">
                      <button className="flex items-center justify-center w-8 h-8 rounded-md bg-[#51a31d]/5 text-[#51a31d] hover:bg-[#51a31d] hover:text-white transition-all duration-300 mb-1">
                        <Heart size={14} className="transition-transform duration-300 hover:scale-110" />
                      </button>
                      <span className="text-xs font-medium text-[#383838]">{bookmark.likes}</span>
                    </div>

                    {/* Views counter */}
                    <div className="flex flex-col items-center">
                      <button className="flex items-center justify-center w-8 h-8 rounded-md bg-[#51a31d]/5 text-[#51a31d] hover:bg-[#51a31d] hover:text-white transition-all duration-300 mb-1">
                        <Eye size={14} className="transition-transform duration-300 hover:scale-110" />
                      </button>
                      <span className="text-xs font-medium text-[#383838]">{bookmark.views}</span>
                    </div>

                    {/* Share button */}
                    <div className="flex flex-col items-center">
                      <button className="flex items-center justify-center w-8 h-8 rounded-md bg-[#383838]/5 text-[#383838]/70 hover:bg-[#383838] hover:text-white transition-all duration-300 mb-1">
                        <Share2 size={14} className="transition-transform duration-300 hover:scale-110" />
                      </button>
                      <span className="text-xs font-medium text-[#383838]">مشاركة</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center relative">
                    {/* Read button - modernized */}
                    <button className="flex items-center text-[#51a31d] hover:text-white bg-[#51a31d]/10 hover:bg-[#51a31d] rounded-md px-3 py-1.5 text-sm transition-all duration-300 font-medium">
                      <BookOpen size={14} className="ml-1.5" />
                      <span className="inline-block">قراءة المقال</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-10 text-center transition-all duration-700 transform opacity-0 translate-y-8 animate-fadeIn">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-[#51a31d]/10 flex items-center justify-center transform hover:rotate-6 transition-all duration-700 hover:scale-110 hover:shadow-lg hover:shadow-[#51a31d]/20 group">
              <Bookmark size={36} className="text-[#51a31d] transition-all duration-700 group-hover:rotate-12" />
            </div>
            <h2 className="text-2xl font-bold text-[#383838] mb-4">
              <span className="relative inline-block">
                لا توجد إشارات مرجعية حتى الآن
                <span className="absolute -bottom-1 right-0 w-full h-1 bg-[#51a31d]/30 rounded-full"></span>
              </span>
            </h2>
            <p className="text-[#383838]/70 max-w-lg mx-auto mb-10">
              ستظهر المقالات التي قمت بحفظها هنا. احفظ أخبارك وقصصك المفضلة لقراءتها لاحقًا.
            </p>
            <div className="max-w-2xl mx-auto mt-10">
              <h3 className="text-xl font-bold mb-6 text-[#383838] relative inline-block">
                مقترحات لك
                <span className="absolute -bottom-1 right-0 w-full h-0.5 bg-[#51a31d]/50 rounded-full"></span>
              </h3>
              <div className="space-y-5">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex flex-row-reverse items-start space-x-5 space-x-reverse p-5 rounded-xl hover:bg-[#51a31d]/5 cursor-pointer transition-all duration-500 border-2 border-transparent hover:border-[#51a31d]/30 hover:shadow-lg group">
                    <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden shadow-md transition-all duration-500 group-hover:shadow-lg">
                      <img
                        src={`/api/placeholder/200/200?text=${item}`}
                        alt="مقال مقترح"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-grow text-right">
                      <h4 className="font-bold text-lg text-[#383838] mb-2 relative inline-block">
                        عنوان المقال المقترح {item}
                        <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#51a31d] transition-all duration-700 ease-in-out group-hover:w-full"></span>
                      </h4>
                      <div className="text-sm text-[#383838]/70 mb-3 flex items-center">
                        <Calendar size={14} className="ml-1.5 text-[#51a31d]" />
                        <span className="inline-block">مارس {item + 10}، 2025 · للقراءة 5 دقائق</span>
                      </div>
                      <button className="text-[#51a31d] bg-[#51a31d]/10 hover:bg-[#51a31d] hover:text-white rounded-lg px-4 py-2 text-sm flex items-center transition-all duration-500 font-medium transform hover:translate-x-1 hover:shadow-md hover:shadow-[#51a31d]/20">
                        <Bookmark size={14} className="ml-1.5 transition-transform duration-500 group-hover:rotate-12" />
                        <span className="inline-block">حفظ</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default BookmarkPage;