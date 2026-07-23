import React from 'react';
import { FaPlay } from 'react-icons/fa';
import tradingimg from "../assets/tradingimg.webp"

 function WatchHowItWorks() {
  return (
    <section className="container py-7 px-4 font-sans">
      <div className="mx-auto text-center">
        
        {/* Header Text */}
        <h2 className="text-3xl font-bold text-gray-900  mb-4">
          New to Trading? Watch How It Works
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto mb-5 sm:mb-12">
          Our step-by-step guide walks you through setting up your account, navigating the platform, and placing your first trade across crypto, gold, silver, or forex.
        </p>

        {/* Video Thumbnail Wrapper with Gradient Border Layout */}
        <div className="relative w-full mx-auto group rounded-[2.5rem] p-1.5 bg-gradient-to-r from-orange-400 via-yellow-400 to-green-500 shadow-xl overflow-hidden cursor-pointer">
          <div className="relative rounded-[2.2rem] overflow-hidden bg-black aspect-video  sm:aspect-[3/1] flex items-center justify-center">
            
            {/* Main Background Image */}
            <img 
              src={tradingimg} // Apni video image/thumbnail ka path yahan dalein
              alt="Trading Video Guide Tutorial" 
              className="w-full h-full object-cover opacity-90  transition-transform duration-500 ease-out"
            />

            {/* Dark Overlay Layer */}
            <div className="absolute inset-0 bg-black/30 transition-colors duration-300"></div>

            {/* Glowing React Play Icon Container */}
            <div className="absolute z-10 w-10 h-10 md:w-24  md:h-24 rounded-full bg-emerald-500 text-white flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(16,185,129,0.6)] group-hover:scale-110 transition-transform duration-300">
              <FaPlay className="w-4 h-4 md:w-9 md:h-9" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
export default WatchHowItWorks;