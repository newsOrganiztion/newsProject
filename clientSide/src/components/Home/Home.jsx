import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Newspaper, User } from "lucide-react";
import HeroSection from "./HeroSection";
import HealthSection from "./HealthSection";
import PolicySection from "./PolicySection";
import ArgSection from "./ArgSection";
import VideoSlider from "./VideoSlider";

import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
       <Helmet>
        <title>الصفحة الرئيسية</title>
        <meta name="description" content="مرحبًا بك في موقعنا، نقدم لك خدمات مميزة في مختلف المجالات. تصفح الآن لمزيد من التفاصيل." />
        <meta name="keywords" content="موقعنا, خدمات, تصميم, تطوير, محتوى" />
        <meta property="og:title" content="الصفحة الرئيسية" />
        <meta property="og:description" content="مرحبًا بك في موقعنا، نقدم لك خدمات مميزة في مختلف المجالات. تصفح الآن لمزيد من التفاصيل." />
        <meta property="og:image" content="url_to_image.jpg" />  {/* يمكنك إضافة رابط الصورة هنا */}
      </Helmet>
      <div className="container mx-auto px-4 py-6">
        <HeroSection />
        <HealthSection />
        <PolicySection />
        <ArgSection />
        <VideoSlider />
    
      </div>
    </div>
  );
};

export default Home;
