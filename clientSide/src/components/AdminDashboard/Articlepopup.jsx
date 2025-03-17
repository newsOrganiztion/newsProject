import React, { useState, useEffect } from "react";

const ArticlePopup = ({ isOpen, onClose, article }) => {
  const [activeTab, setActiveTab] = useState("general");
  const [isPressing, setIsPressing] = useState(false);
  
  // إغلاق النافذة عند الضغط على Escape
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    
    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300">
      <div 
        className={`bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden ${
          isPressing 
            ? "shadow-[0_0_20px_rgba(59,130,246,0.7)]" 
            : "shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
        } transition-all duration-300 transform ${
          isPressing ? "scale-[0.99]" : "scale-100"
        }`}
        onMouseDown={() => setIsPressing(true)}
        onMouseUp={() => setIsPressing(false)}
        onMouseLeave={() => setIsPressing(false)}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#51a31d] to-[#3d8a0e] p-5 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">{article.title || "تفاصيل المقالة"}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-black/10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-50 border-b border-gray-200 overflow-x-auto">
          {["نظرة عامة", "المحتوى", "التفاعل"].map((tab, index) => {
            const tabId = ["general", "content", "interaction"][index];
            const isActive = activeTab === tabId;
            
            return (
              <button
                key={tabId}
                className={`px-5 py-4 font-medium text-sm flex-1 transition-all duration-300 ${
                  isActive
                    ? "text-[#51a31d] border-b-2 border-[#51a31d] bg-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(tabId)}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-180px)] p-6 bg-[#fafbfc]">
          {activeTab === "general" && (
            <div className="space-y-6 text-right">
              {[
                { label: "الكاتب", value: article.author },
                { 
                  label: "التاريخ", 
                  value: new Date(article.publishedDate).toLocaleDateString("ar-EG")
                },
                { label: "الفئة", value: article.category },
                { 
                  label: "الوصف", 
                  value: article.description || "لا يوجد وصف للمقالة"
                }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-[#51a31d] transition-colors">
                  <div className="flex justify-between items-center">
                    <span className="text-[#51a31d] font-bold">{item.label}:</span>
                    <span className="text-gray-700">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === "content" && (
            <div className="space-y-6 text-right">
              <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-[#51a31d] mb-4 border-r-4 border-[#51a31d] pr-3">المحتوى</h3>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {article.paragraph1 || "لا يوجد محتوى متاح"}
                  </p>
                  {article.paragraph2 && (
                    <p className="text-gray-700 leading-relaxed">{article.paragraph2}</p>
                  )}
                  
                  {article.paragraph3Title && (
                    <h4 className="text-md font-semibold text-gray-900 mt-6 mb-2">
                      {article.paragraph3Title}
                    </h4>
                  )}
                  {article.paragraph3 && (
                    <p className="text-gray-700 leading-relaxed">{article.paragraph3}</p>
                  )}
                  
                  {article.paragraph4Title && (
                    <h4 className="text-md font-semibold text-gray-900 mt-6 mb-2">
                      {article.paragraph4Title}
                    </h4>
                  )}
                  {article.paragraph4 && (
                    <p className="text-gray-700 leading-relaxed">{article.paragraph4}</p>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === "interaction" && (
            <div className="space-y-6 text-right">
              <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-[#51a31d] mb-6 border-r-4 border-[#51a31d] pr-3">التفاعل</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "اللايكات", value: article.likes, icon: "❤️" },
                    { label: "المشاركات", value: article.shares, icon: "🔄" },
                    { label: "المشاهدات", value: article.views, icon: "👁️" },
                    { label: "التعليقات", value: article.comments?.length || 0, icon: "💬" }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-all">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="text-[#51a31d] font-bold text-lg">{item.value}</div>
                      <div className="text-gray-500 text-sm">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default ArticlePopup;