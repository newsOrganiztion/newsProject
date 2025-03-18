import React from "react";

const AlJazeeraLive = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-black rounded-lg shadow-lg">
      <h2 className="text-white text-2xl font-bold mb-4">🔴 بث مباشر لقناة الجزيرة</h2>
      <iframe  className="w-full h-96 rounded-lg" src="https://www.youtube.com/embed/bNyUyrR0PHo?si=WjpVrkiHJmHfyVcv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
};

export default AlJazeeraLive;
