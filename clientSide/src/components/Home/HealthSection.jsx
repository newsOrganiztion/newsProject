import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import axios from "axios";

const HealthSection = () => {
  const [newsSlide, setNewsSlide] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getNewsSlide() {
      try {
        const response = await axios.get("http://localhost:5000/api/home-articles/health");
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

  return (
    <section className="bg-white rounded-lg shadow-sm my-8 pb-6">
      <div className="text-[#383838] px-6 pt-6">
        {/* Section Header */}
        <div className="flex items-center mb-4">
          <div className="h-6 w-1.5 bg-[#51a31d] rounded-full mr-3"></div>
          <h2 className="text-2xl font-bold text-black">أخبار في الصحة :</h2>
        </div>

        {/* Swiper Slider */}
        <div className="relative py-4">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next-health',
              prevEl: '.swiper-button-prev-health',
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            className="w-full rounded-lg overflow-hidden"
          >
            {newsSlide.length > 0 ? (
              newsSlide.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative h-[400px] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-center bg-cover"
                      style={{
                        backgroundImage: `url('https://img.freepik.com/free-photo/close-up-man-s-hand-holding-newspaper-green-apple_23-2147901174.jpg?t=st=1742196718~exp=1742200318~hmac=eed3b84abc8bcf7b850af9a212a8fae43ed514529ae9473f4fc20b6f2fe10275&w=740')`,
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
                          <span className="text-xs opacity-80">
                            {new Date(slide.publishedDate).toLocaleDateString("ar-SA", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <span className="mx-2 text-gray-400">•</span>
                          <span className="text-xs opacity-80">{slide.author}</span>
                        </div>
                      </div>

                      <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                      <p className="text-lg opacity-80 line-clamp-2">{slide.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <div className="text-center py-8">لا توجد أخبار متاحة حالياً.</div>
            )}

            {/* Custom Navigation Arrows */}
            <div className="swiper-button-prev-health absolute top-1/2 -translate-y-1/2 left-4 z-10 !text-white w-10 h-10 rounded-full flex items-center justify-center bg-black/30 hover:bg-black/50 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </div>
            <div className="swiper-button-next-health absolute top-1/2 -translate-y-1/2 right-4 z-10 !text-white w-10 h-10 rounded-full flex items-center justify-center bg-black/30 hover:bg-black/50 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </Swiper>
        </div>

        {/* Articles Section */}
        <div className="mt-10">
          <div className="flex items-center mb-6">
            <div className="h-6 w-1.5 bg-[#51a31d] rounded-full mr-3"></div>
            <h2 className="text-2xl font-bold text-black">تعرف على أهم المقالات لدينا :</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {newsSlide.length > 0 ? (
              newsSlide.slice(0, 4).map((article, index) => (
                <div key={index} className="transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden h-full">
                    <div className="overflow-hidden relative">
                      {article.featuredImage && (
                        <img
                          src={`http://localhost:5000/${article.featuredImage}`}
                          alt={article.title}
                          className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h2 className="text-lg font-bold text-[#383838] mb-2 hover:text-[#51a31d] transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </h2>
                      <div className="text-xs text-gray-500 mb-3 flex items-center">
                        <span>بواسطة {article.author}</span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-3">{article.description}</p>
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
    </section>
  );
};

export default HealthSection;