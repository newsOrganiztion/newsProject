import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { User, ExternalLink } from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold bg-black text-white px-4 py-1">أخبار في السياسة</h3>
        <Link to="/category-pages" className="text-sm text-gray-500 hover:text-black">عرض الكل</Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4"> 
  {/* Main Politics Article - العمود الأيسر */}
  <div className="relative overflow-hidden h-145 md:col-span-2"> {/* تغيير من span-1 إلى span-2 */}
    {newsSlide.length > 0 && (
      <>
        <img 
          src={`http://localhost:5000/${newsSlide[0]?.featuredImage}`} 
          alt={newsSlide[0]?.title || "مقال رئيسي"} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute bottom-0 right-0 p-4 text-white">
          <div className="mb-1">
            <span className="bg-red-600 text-white py-1 px-2 text-xs font-bold">News</span>
          </div>
          <h2 className="text-md font-bold mb-2">{newsSlide[0]?.title || "لا عنوان"}</h2>
          <div className="text-sm">
            <span>{newsSlide[0]?.author || "مجهول"}</span>
            <span className="mx-2">•</span>
            <span>{formatArabicDate(newsSlide[0]?.createdAt)}</span>
          </div>
        </div>
      </>
    )}
  </div>

  {/* Politics Articles List - العمود الأيمن */}
  <div className="md:col-span-3"> {/* يبقى span-3 لكن ضمن شبكة من 5 أعمدة الآن */}
    {newsSlide.length > 1 ? (
      newsSlide.slice(1, 5).map((article, index) => (
        <div key={index} className={`border-b border-gray-200 pb-4 mb-4 flex ${index === 3 ? 'border-none' : ''}`}>
          <div > 
            <img 
              src={`http://localhost:5000/${article.featuredImage}`} 
              alt={article.title} 
              className="w-50 h-30 object-cover"
            />
          </div>
          <div className="mr-4 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-base mb-1 hover:text-[#51a31d] transition-colors duration-300">
                {article.title || "لا عنوان"}
              </h3>
            </div>
            <div className="text-xs text-gray-500">
              <div>{formatArabicDate(article.createdAt)}</div>
              <div className="flex items-center gap-1 mt-1">
                <User className="w-3 h-3" /> {article.author || "مجهول"}
              </div>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="text-center py-8">لا توجد مقالات متاحة حالياً.</div>
    )}
  </div>
</div>
    </div>
  </section>
  );
};

export default PolicySection;