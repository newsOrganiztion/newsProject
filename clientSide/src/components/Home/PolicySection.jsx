import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { User, ExternalLink } from "lucide-react";
import axios from "axios";

const PolicySection = () => {
  const [newsSlide, setNewsSlide] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getNewsSlide() {
      try {
        const response = await axios.get("http://localhost:5000/api/home-articles/policy");
        setNewsSlide(response.data.data || []);
      } catch (err) {
        console.error("Error fetching news data:", err);
        setError("حدث خطأ أثناء جلب البيانات.");
      } finally {
        setLoading(false);
      }
    }
    getNewsSlide();
  }, []);

  if (loading) {
    return <div className="text-center py-8">جارٍ التحميل...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-8">{error}</div>;
  }

  // Format date to Arabic format
  const formatArabicDate = (dateString) => {
    const date = new Date(dateString || new Date());
    const day = date.getDate();
    const month = date.toLocaleString('ar-EG', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month}/${year}`;
  };

  return (
    <section className="bg-white rounded-lg shadow-sm my-8 pb-6">
      <div className="text-[#383838] px-6 pt-6">
        {/* Section Header */}
        <div className="flex items-center mb-6" style={{ gap: '10px' }}>
    <div className="h-6 w-1.5 bg-[#51a31d] rounded-full"></div>
    <h2 className="text-2xl font-bold text-black">أخبار في السياسة :</h2>
</div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Right Large Featured Article */}
          <div className="md:col-span-5 md:order-2">
            {newsSlide.length > 0 ? (
              <div className="relative h-full rounded-lg overflow-hidden shadow-md transform hover:scale-[1.01] transition-all duration-300">
                {/* Background Image */}
                <img
                  src="https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt={newsSlide[0]?.title || "Article"}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-800 via-red-700/30 to-transparent"></div>

                <div className="absolute bottom-0 right-0 left-0 p-6 text-white">
                  <h2 className="text-xl font-bold leading-tight mb-3">{newsSlide[0]?.title || "لا عنوان"}</h2>
                  <p className="text-sm mb-4 line-clamp-2 opacity-90">{newsSlide[0]?.description || "لا يوجد وصف"}</p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" /> {newsSlide[0]?.author || "مجهول"}
                    </span>
                    <span>{formatArabicDate(newsSlide[0]?.createdAt)}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">لا توجد أخبار متاحة حالياً.</div>
            )}
          </div>

          {/* Left Column with 4 Articles */}
          <div className="md:col-span-7 md:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {newsSlide.length > 1 ? (
                newsSlide.slice(1, 5).map((article, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="overflow-hidden">
                      {article.featuredImage && (
                        <img
                          src={`http://localhost:5000/${article.featuredImage}`}
                          alt={article.title}
                          className="w-full h-40 object-cover transition-transform duration-700 hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-md mb-2 line-clamp-2 hover:text-[#51a31d] transition-colors duration-300">
                        {article.title || "لا عنوان"}
                      </h3>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">{article.description || "لا يوجد وصف"}</p>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" /> {article.author || "مجهول"}
                        </span>
                        <span>{formatArabicDate(article.createdAt)}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center col-span-full py-8">لا توجد مقالات متاحة حالياً.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicySection;