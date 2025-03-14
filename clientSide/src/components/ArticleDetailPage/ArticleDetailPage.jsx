import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ArticleDetailPage() {
  const { id } = useParams(); 
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/articles/${id}`);
        setArticle(response.data); 
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching article:", error);
        setLoading(false); 
      }
    };

    fetchArticle();
  }, [id]); 

  if (loading) {
    return <div className="text-center p-10 text-xl">جارٍ تحميل المقال...</div>;
  }

  if (!article) {
    return <div className="text-center p-10 text-red-500 text-xl">المقال غير موجود</div>;
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl" dir="rtl">
      {/* Category bar */}
      <div className="mb-4 text-sm text-gray-500 flex gap-2">
        <span>مقالات</span>
        <span>|</span>
        <span>{article.category || "غير محدد"}</span>
      </div>

     {/* Article Title */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-800 leading-tight">
          {article.title}
        </h1>
      </div>

      {/* Author and Date Information */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center text-gray-500">
          <span className="flex items-center ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            {article.author || "كاتب مجهول"}
          </span>
          <span className="mx-2">|</span>
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {new Date(article.publishedDate).toLocaleDateString() || "غير معروف"}
          </span>
        </div>
      </div>

      {/* Article Image */}
      <div className="mb-6">
        <img
          src={`http://localhost:5000/${article.featuredImage}`}
          alt={article.title}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Article Content */}
      <div className="text-gray-700 leading-relaxed space-y-6">
        <p className="text-lg">{article.paragraph1}</p>
        <p className="text-lg">{article.paragraph2}</p>

        {/* Third paragraph and title */}
        {article.paragraph3Title && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {article.paragraph3Title}
            </h2>
            <p className="text-lg">{article.paragraph3}</p>
          </div>
        )}

        {/* Fourth paragraph and title */}
        {article.paragraph4Title && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {article.paragraph4Title}
            </h2>
            <p className="text-lg">{article.paragraph4}</p>
          </div>
        )}
      </div>

      {/* Writer's Card */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8 flex items-center">
        <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden mr-4 flex-shrink-0">
          <img
            src="https://via.placeholder.com/80"
            alt={article.author}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg">{article.author}</h3>
          <p className="text-gray-500 text-sm mb-2">{article.authorDescription}</p>
        </div>
      </div>
    </div>
  );
}