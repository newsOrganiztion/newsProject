import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import axios from "axios";
import AlJazeeraLive from "./AljazeraLive";
import { Helmet } from "react-helmet";
import { User, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ArgSection = () => {
  const [newsSlide, setNewsSlide] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getNewsSlide() {
      try {
        const response = await axios.get("http://localhost:5000/api/home-articles/arg");
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
    <>
    <section className="bg-white rounded-lg shadow-sm my-8 pb-6">
  <div className="text-[#383838] px-6 pt-6">
    {/* Section Header */}
    <div className="flex items-center mb-6" style={{ gap: '10px' }}>
      <h3 className="text-lg font-bold bg-black text-white px-4 py-1">أخبار في الزراعة</h3>
    </div>

    {/* Swiper Slider */}
    <div className="max-w-* mx-auto">
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation={{
            nextEl: '.swiper-button-next-arg',
            prevEl: '.swiper-button-prev-arg',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-arg',
            bulletClass: 'swiper-pagination-bullet-arg',
            bulletActiveClass: 'swiper-pagination-bullet-active-arg'
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          className="w-full"
        >
          {newsSlide.length > 0 ? (
            newsSlide.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative h-80 md:h-[500px] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{
                      backgroundImage: `url('https://img.freepik.com/free-photo/close-up-woman-examining-plant-growth-using-touchpad-while-working-plant-nursery_637285-1425.jpg?ga=GA1.1.2031020980.1734978984&semt=ais_country_boost&w=740')`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-green-900/60 to-transparent"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                    <div className="flex items-center mb-2">
                      <span className="bg-black text-white text-xs font-bold uppercase px-3 py-1 ml-5 rounded">
                        NEWS
                      </span>
                      <div className="flex items-center">
                      <span className="text-xs opacity-80">{formatArabicDate(slide.createdAt)}</span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="text-xs opacity-80">{slide.author}</span>
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h2>
                    <p className="text-sm md:text-lg opacity-80 line-clamp-2">{slide.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <div className="text-center py-8 h-80 md:h-[500px] flex items-center justify-center">
              لا توجد أخبار متاحة حالياً.
            </div>
          )}

          {/* Custom Pagination */}
          <div className="swiper-pagination-arg flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2"></div>

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev-arg flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="swiper-button-next-arg flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Swiper>
      </div>
    </div>

    {/* Articles Section */}
    <div className="mt-10 mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center" style={{ gap: '10px' }}>
          <div className="h-6 w-1.5 bg-[#51a31d] rounded-full mr-3"></div>
          <h2 className="text-2xl font-bold text-black">تعرف على أهم المقالات لدينا:</h2>
        </div>
        <Link to="/category-pages" className="text-sm text-gray-500 hover:text-black">عرض الكل</Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {newsSlide.length > 0 ? (
          newsSlide.slice(0, 3).map((article, index) => (
            <div key={index} className="relative overflow-hidden h-48 rounded transform hover:-translate-y-1 transition-all duration-300">
              {article.featuredImage && (
                <>
                  <img 
                    src={`http://localhost:5000/${article.featuredImage}`} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 right-0 p-4 text-white">
                    <h2 className="text-xl font-bold mb-1 hover:text-[#51a31d] transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h2>
                    <span className="flex items-center gap-1 text-xs">
                      <User className="w-3 h-3" /> {article.author || "مجهول"}
                    </span>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <div className="text-center col-span-full py-8">لا توجد مقالات متاحة حالياً.</div>
        )}
      </div>
    </div>
  </div>
</section>

     {/* Live streaming Section  */}
{/* <section className="bg-white rounded-lg shadow-sm my-8 pb-6">
      <div className="text-[#383838] px-6 pt-6">
       
        <div className="flex items-center mb-6" style={{ gap: '10px' }}>
          <div className="h-6 w-1.5 bg-[#51a31d] rounded-full mr-3"></div>
          <h2 className="text-2xl font-bold text-black">شاهد ايضا :</h2>
        </div>

       <AlJazeeraLive />
      </div>
    </section> */}
    </>
  );
};

export default ArgSection;