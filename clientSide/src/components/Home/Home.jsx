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

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
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
